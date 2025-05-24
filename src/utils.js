export const generate = (length, genFn) => {
  return Array.from({ length }, (_v, i) => genFn(i))
}