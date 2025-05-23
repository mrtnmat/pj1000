export const newCard = ({ scene, x, y, width, height, fillColor }) =>
  new Phaser.GameObjects.Rectangle(scene, x, y, width, height, fillColor)

export const newCardSelectionOutline = ({ scene, x = 0, y = 0, width, height }) => {
  const r = new Phaser.GameObjects.Rectangle(scene, x, y, width, height)
    .setStrokeStyle(2, 0x00ff00)
    .setOrigin(0, 0)
    .setVisible(false)
  return r
}

export const newCardSlotSelector = ({ scene, x = 0, y = 0, width, height }) => {
  const r = new Phaser.GameObjects.Rectangle(scene, x, y, width, height)
    .setOrigin(0, 0)
  return r
}