export const handleError = (statusCode, message) => {
    console.log(message)
    const error = new Error
    error.statusCode = statusCode
    error.message = message
    return error
}