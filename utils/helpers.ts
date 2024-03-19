export function customResponse(message: string, data: any = null, status: boolean = true) {
  return { message, data, status }
}
