class ApiError extends Error {
    constructor(statusCode, message="somthing went wrong !!", errors=[], stack) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}



// class ApiError extends Error {
//     constructor(statusCode, message = "somthing went wrong !!") {
//         super(message)
//         this.statusCode = statusCode
//         this.status = `${statusCode}`.startsWith("4") ? "fail" : "error"

//         this.isOperational = true
//         Error.captureStackTrace(this, this.constructor)
//     }
// }




export {ApiError}