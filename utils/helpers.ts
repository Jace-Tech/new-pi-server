export function customResponse(message: string, data: any = null, status: boolean = true) {
  return { message, data, status }
}

export function jsonParser(value: string) {
  if (!value) return value
  try {
    return JSON.parse(value)
  } catch (err: any) {
    return value
  }
}

export function arrayTransformer(arr: string[] | string) {
  if (typeof arr === 'string') return arr
  if (arr.length < 2) return arr[0]
  return arr
}

export function randomChoice<T>(arr: T[]): T {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}
