export const CardScene = new Phaser.Scene('CardScene')

const newCard = () => {
  return {}
}

/**
 * Configure input handlers for card interaction
 * @param {Phaser.Scene} scene
 */
const setupCardInteraction = (scene) => {
  // Remove existing listeners to avoid duplicates
  scene.input.off('gameobjectdown');

  // Handle card selection (left-click)
  scene.input.on('gameobjectdown', (pointer, gameObject) => {
    // Only handle left clicks on our cards
    console.log('click')
    console.log(scene.cards)
    if (pointer.leftButtonDown() && scene.cards.includes(gameObject)) {
      this.selectCard(gameObject);
    }
  });

  // Handle unselection (right-click anywhere)
  scene.input.on('rightdown', () => {
    this.unselectCard();
  });
}

/**
 * @param {Phaser.Scene} scene
 */
const create = (scene) => {
  return (_data) => {
    const bg = scene.add.tileSprite(0, 0, 800, 600, 'fishes', 86)
      .setOrigin(0, 0)

    scene.cards = Array.from({ length: 10 }, (_v, i) => { return i }).map(
      (_c, i) => { return scene.add.rectangle(10 + (60 * i), 10, 50, 80, 0xff0000).setOrigin(0, 0) })
    console.log(scene.cards)
    scene.cards[0].setInteractive()
    for (const card of scene.cards) {
      card.setInteractive()
    }
    setupCardInteraction(scene)
  }
}

const preload = (scene) => {
  return () => {
    scene.load.image('sky', 'assets/sky.png')
    scene.load.spritesheet('fishes', 'assets/fishsheet.png',
      {
        frameWidth: 64,
        frameHeight: 64
      }
    )
  }
}

const init = (scene) => { return (_data) => { } }

const update = (scene) => { return (_time, _delta) => { } }

CardScene.init = init(CardScene)
CardScene.preload = preload(CardScene)
CardScene.create = create(CardScene)
CardScene.update = update(CardScene)
