import Phaser from 'phaser'
import { CardScene } from './scenes/cardScene.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [CardScene],
}

const game = new Phaser.Game(config)
