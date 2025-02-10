const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
  if(!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    new AppError(['Model Number not found in the oncoming request in tne correct form'], StatusCodes.BAD_REQUEST);
    ErrorResponse.error = new AppError(['Model Number not found in the oncoming request in tne correct form'], StatusCodes.BAD_REQUEST);
    return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest
}