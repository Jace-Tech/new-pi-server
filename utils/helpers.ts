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
