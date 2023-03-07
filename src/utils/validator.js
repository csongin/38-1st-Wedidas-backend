const emailValidator = (email) => {
  const EMAILREGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	
  if (!EMAILREGEX.test(email)) {
    const error = new Error('INVALID_EMAIL');
    error.statusCode = 400;
    throw error;
  }
}

const passwordValidator = (password) => {
  const PASSWORDREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	
  if (!PASSWORDREGEX.test(password)) {
    const error = new Error('INVALID_PASSWORD');
    error.statusCode = 400;
    throw error;
  }
}

module.exports = {
  emailValidator,
  passwordValidator
}
