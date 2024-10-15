class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError {}

class FieldRequiredError extends ValidationError {
  constructor(field) {
    super(`${field} is required`);
  }
}

class AlreadyTakenError extends ValidationError {
  constructor(property, message = "") {
    super(`${property} already exists.. ${message}`);
  }
}

class NotFoundError extends MyError {
  constructor(property, message = "") {
    super(`${property} not found ${message}`);
  }
}

class UnauthorizedError extends MyError {
  constructor() {
    super("You need to login first!");
  }
}

module.exports = {
  FieldRequiredError,
  AlreadyTakenError,
  NotFoundError,
  ValidationError,
  UnauthorizedError,
};
