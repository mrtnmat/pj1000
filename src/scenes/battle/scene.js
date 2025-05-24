import chroma from "chroma-js";

const initScene = () => {
  const scene = new Phaser.Scene('ball')

  const create = (_d) => {
  }

  const update = (_time, delta) => {
  }

  scene.create = create
  scene.update = update
  return scene
}


const mainData = initScene()


export const BattleScene = mainData
