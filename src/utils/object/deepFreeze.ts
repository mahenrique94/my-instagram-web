const deepFreeze = (obj: any): any =>
  Object.freeze(obj) &&
  Object.values(obj).forEach(value => typeof value === 'object' && deepFreeze(value))

export { deepFreeze }
