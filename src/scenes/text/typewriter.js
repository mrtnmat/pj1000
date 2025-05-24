export const newTypewriter = (text, initialTime, speed) => {

  return {
    fullText: () => text,
    currentText: (time) => {

    },
  }
}

/**
* Static function for typewriter effect.
* @param {string} text - Text to print.
* @param {number} delay - ms to print a character.
* @param {number} elapsed - ms elapsed since printing started.
**/
export const typewriterEffect = (text, delay, elapsed) => {
  const charPrinted = Math.floor((elapsed / delay))
  return text.substring(0, charPrinted)
}