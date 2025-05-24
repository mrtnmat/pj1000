export const newClock = () => {
  let sinceLastUpdate = 0
  let time = 5000
  let callbacks = []
  return {
    tick: (ms) => {
      sinceLastUpdate += ms
      if (sinceLastUpdate >= time) {
        callbacks.forEach((fn) => fn(time))
        sinceLastUpdate -= time
      }
    },
    registerCallback: (fn) => {
      callbacks.push(fn)
    },
  }
}