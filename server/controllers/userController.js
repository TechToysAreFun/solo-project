const db = require('../models/dataModel');

const userController = {};

userController.addUser = (req, res, next) => {

    console.log('Testing addUser middleware');
    // Store user information from body into array
    const userInformation = [
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        req.body.city,
        req.body.company
    ];

    console.log('userInformation: ', userInformation);
    console.log('req.params: ', req.params);
    console.log('req.body: ', req.body);

    // Write query to insert user into users table
    const addUserQuery = `INSERT INTO users (
        firstName,
        lastName,
        age,
        city,
        company
    )
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    // Perform the query
    db.query(addUserQuery, userInformation)
        .then(() => next())
        .caatch((err) => next(err));
}

module.exports = userController;