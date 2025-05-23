import { generate } from '../../utils.js'
import { newCard, newCardSelectionOutline } from './cards.js'
export const CardScene = new Phaser.Scene('CardScene')

const data = {
  scene: CardScene,
  cardSize: { width: 40, height: 70 },
}

/**
 * @param {Object} data
 * @param {Phaser.Scene} data.scene
 * @param {Phaser.GameObjects.Rectangle} data.cardOutline
 * @param {Object} card
 */
const selectCard = (data, card) => {
  data.cardOutline.setPosition(card.x, card.y)
  data.cardOutline.setVisible(true)
}

/**
 * @param {Object} data
 * @param {Phaser.Scene} data.scene
 */
const setupCardInteraction = (data) => {
  const scene = data.scene
  // Remove existing listeners to avoid duplicates
  scene.input.off('gameobjectdown');

  // Handle card selection (left-click)
  scene.input.on('gameobjectdown', (pointer, gameObject) => {
    // Only handle left clicks on our cards
    // if (pointer.leftButtonDown() && scene.cards.includes(gameObject)) {
    if (pointer.leftButtonDown()) {
      selectCard(data, gameObject)
    }
  });

  // Handle unselection (right-click anywhere)
  scene.input.on('rightdown', () => {
    this.unselectCard();
  });
}

// const bg = scene.add.tileSprite(0, 0, 800, 600, 'fishes', 86)
//   .setOrigin(0, 0)

/**
 * @param {Object} data
 * @param {Phaser.Scene} data.scene
 */
const create = (data) => {
  return (_d) => {
    const scene = data.scene
    data.cardOutline = newCardSelectionOutline({ ...data.cardSize, scene, x: 10, y: 10 })
    data.cards = generate(10,
      (i) => {
        const width = data.cardSize.width
        const height = data.cardSize.height
        const offset = 10
        return newCard({
          scene,
          x: (width + 10) * i + offset,
          y: offset,
          height, width,
          fillColor: 0xff0000
        }).setOrigin(0, 0)
      }
    )
    data.cards.forEach(card => {
      card.setInteractive()
      scene.children.add(card)
    })

    scene.children.add(data.cardOutline)



    setupCardInteraction(data)
  }
}

const preload = (data) => {
  return () => {
    data.scene.load.image('sky', 'assets/sky.png')
    data.scene.load.spritesheet('fishes', 'assets/fishsheet.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )
  }
}

const init = (scene) => { return (_data) => { } }

const update = (scene) => { return (_time, _delta) => { } }

data.scene.init = init(data)
data.scene.preload = preload(data)
data.scene.create = create(data)
data.scene.update = update(data)
