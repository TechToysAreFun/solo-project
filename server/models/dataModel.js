const { pool } = require('pg');

const PG_URI = 'postgres://raeumwxh:3oJY7OQfZSryIAJaAZZreg41h65-XWeP@castor.db.elephantsql.com/raeumwxh';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query');
        return pool.query(text, params, callback);
    }
};
