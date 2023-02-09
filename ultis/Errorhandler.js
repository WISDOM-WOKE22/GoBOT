const ErrorHandler = (response, error) => {
        response.status(400)
    .json({
        status: 'fail',
        message: error
    })
}

module.exports = ErrorHandler;