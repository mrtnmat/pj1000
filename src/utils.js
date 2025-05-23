export const generate = (i, genFn) => {
  return Array.from({ length: i }, (_v, i) => genFn(i))
}