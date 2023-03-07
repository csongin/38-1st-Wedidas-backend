const appDataSource = require('./dataSource');

const createUser = async (name, email, password, birthday, phoneNumber) => {
	try {
		const result = await appDataSource.query(`
    INSERT INTO users (
      name,
      email,
      password,
      birthday,
      phone_number
    ) VALUES (?, ?, ?, ?, ?)`,
    [name, email, password, birthday, phoneNumber]
  );
  return result;
	}	catch (err) {
		const error = new Error('FAILED');
		error.statusCode = 500;
		throw error;
	}
}

const getUserByEmail = async (email) => {
  const result = await appDataSource.query(`
    SELECT
      id,
      name,
      email,
      password,
      birthday,
      phone_number,
      point
    FROM users
    WHERE email=?`, 
    [email]
  );
  return result[0];
}

const getUserById = async (id) => {
  const result = await appDataSource.query(`
    SELECT
      id,
      name,
      email,
      password,
      birthday,
      phone_number,
      point
      FROM users
    WHERE id=?`,
    [id]
  );
  return result[0];
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
}