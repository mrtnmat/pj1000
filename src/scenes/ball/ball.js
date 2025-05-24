import chroma from "chroma-js"

/**
 * @typedef {Phaser.GameObjects.Ellipse & BallData} Ball
 */

/**
 * @typedef {Object} BallData
 * @property {{x: number, y: number}} velocity - Current velocity vector
 */

/**
 * @returns {Ball}
 */
export const newBall = (scene) => {
  const position = { x: 100, y: 100 }
  const radius = 24
  const color = chroma('darkgoldenrod')

  const phaserBall = new Phaser.GameObjects.Ellipse(
    scene, position.x, position.y, radius, radius, color.num()
  )

  const velocity = { x: 20 / 1000, y: 1 / 1000 }
  phaserBall.velocity = velocity
  return phaserBall
}