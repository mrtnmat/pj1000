import Phaser from 'phaser'
import { CardScene } from './scenes/card/scene.js'
import { TextboxScene } from './scenes/text/scene.js'
import { BallScene } from './scenes/ball/scene.js'
import { BattleScene } from './scenes/battle/scene.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BattleScene],
}

const game = new Phaser.Game(config)
