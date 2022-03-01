export function getErrorMessage(error: { error: { message: any; }; message: any; }) {
  return error.error && error.error.message ?  error.error.message : error.message
}
