import chroma from "chroma-js";

import { newBall } from "./ball"
import { newClock } from "./clock";

const initScene = () => {
  const scene = new Phaser.Scene('ball')
  const ballClock = newClock()
  const walls = [
    { type: 'vertical', x: 100, y: 40, length: 100 }
  ]

  const renderWall = (wall) => {
    const p1 = { x: wall.x, y: wall.y }
    const rayPrev = new Phaser.GameObjects.Line(
      scene, 0, 0, wall.x, wall.y, -1000, -1000, chroma(140, 1, 0.4, 'hsv').num()
    ).setOrigin(0, 0)
  }

  const create = (_d) => {
    const ball = newBall(scene)
    const rayPrev = new Phaser.GameObjects.Line(
      scene, 0, 0, -200, -200, -1000, -1000, chroma(140, 1, 0.4, 'hsv').num()
    ).setOrigin(0, 0)
    const rayNext = new Phaser.GameObjects.Line(
      scene, 0, 0, -200, -200, -1000, -1000, chroma(140, 1, 1, 'hsv').num()
    ).setOrigin(0, 0)

    const moveBall = (time) => {
      const destination = {
        x: ball.getCenter().x + (time * ball.velocity.x),
        y: ball.getCenter().y + (time * ball.velocity.y),
      }
      // move prev ray
      rayPrev.setTo(ball.x, ball.y, destination.x, destination.y)
      // move ball
      ball.setX(destination.x)
      ball.setY(destination.y)


      // move next ray
      const nextDestination = {
        x: ball.getCenter().x + (time * ball.velocity.x),
        y: ball.getCenter().y + (time * ball.velocity.y),
      }
      rayNext.setTo(destination.x, destination.y, nextDestination.x, nextDestination.y)
    }

    ballClock.registerCallback(moveBall)
    scene.children.add(ball)
    scene.children.add(rayNext)
    scene.children.add(rayPrev)
  }

  const update = (_time, delta) => {
    ballClock.tick(delta)
  }

  scene.create = create
  scene.update = update
  return scene
}



const mainData = initScene()


export const BallScene = mainData
