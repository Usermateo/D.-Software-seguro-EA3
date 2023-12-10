const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    // Genera y retorna un token JWT
};

const comparePassword = (password, hashedPassword) => {
    // Compara la contraseña proporcionada con la almacenada en la base de datos
};

module.exports = { generateToken, comparePassword };