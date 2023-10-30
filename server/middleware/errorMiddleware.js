
// Custom express error handling, fallback if error is not caught by other middleware
const notFound = (req, res, next) => {
    // Get the originalUrl from the request object
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(400)
    //Call the next piece of middleware 
    next(error)
}


const errorHandler = (req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message

    //Check for bad Mongoose id/cast error
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = `Resource not found`
        statusCode = 400
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    })
}

export { notFound, errorHandler };

