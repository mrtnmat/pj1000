import chroma from "chroma-js";
import { typewriterEffect } from "./typewriter";

export const TextboxScene = new Phaser.Scene('textbox')

/**
* @param {Phaser.Scene} scene
**/
const prepareScene = (scene) => {
  return {
    scene,
  }
}

/**
* @param {{scene: Phaser.Scene}} sceneData
**/
const textBoxCanvas = (sceneData) => {
  const { scene } = sceneData

  return new Phaser.Textures.DynamicTexture(scene.textures, 'textbox', 1000, 200)
}

/**
* @param {{scene: Phaser.Scene}} sceneData
**/
const textToPrint = (sceneData) => {
  const { scene } = sceneData
  return new Phaser.GameObjects.Text(scene, 0, 0, "Hello World", {
    fontSize: '32px',
    fill: 0xFFFFFF,
  })
}

/**
* @param {{scene: Phaser.Scene}} sceneData
**/
const create = (sceneData) => {
  return (_d) => {
    const { scene } = sceneData

    const textCanvas = textBoxCanvas(sceneData)
    console.log('DynamicTexture created:', textCanvas);
    console.log('Texture size:', textCanvas.width, 'x', textCanvas.height);
    scene.textures.addDynamicTexture(textCanvas)

    const backRect = new Phaser.GameObjects.Rectangle(scene, 0, 0, 4000, 300, 0xff0000).setOrigin(0, 0)
    scene.children.add(backRect)
    const text = textToPrint(sceneData)
    sceneData.text = text
    console.log('Text object:', text);
    console.log('Text bounds:', text.getBounds());
    textCanvas.draw(backRect, 0, 0)
    textCanvas.draw(text, 0, 0)

    console.log(scene.textures)
    const image = new Phaser.GameObjects.Image(scene, 0, 0, 'textbox').setOrigin(0, 0)
    const image2 = new Phaser.GameObjects.Image(scene, 30, 30, 'textbox')
      .setOrigin(0, 0)
      .setAlpha(0.8)
      .setTint(chroma('lightseagreen').num())
    console.log('Image created:', image);
    console.log('Image texture key:', image.texture.key);
    text.setText('F')


    sceneData.updatingText = textToPrint(sceneData).setText('').setWordWrapWidth(800)


    //scene.children.add(image)
    // scene.children.add(image2)
    scene.children.add(sceneData.updatingText)
  }
}

/**
* @param {{scene: Phaser.Scene, updatingText: Phaser.GameObjects.Text}} sceneData
**/
const update = (sceneData) => {
  let elapsed = 0
  let textToPrint = 'This is a demo of the cool typwriter effect I just implemented.\nThanks for watching!'
    + '                                                                                      SUCKERS!'
  return (_time, delta) => {
    const { scene, updatingText } = sceneData
    // if (elapsed > limit) {
    //   updatingText.text += ' ciao'
    //   updatingText.text = updatingText.text.trim()
    //   elapsed = 0
    //   limit /= 1.1
    // }
    elapsed += delta
    updatingText.text = typewriterEffect(textToPrint, 60, elapsed)
  }
}

const mainData = prepareScene(TextboxScene)
mainData.scene.create = create(mainData)
mainData.scene.update = update(mainData)


