// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.getAllEmployee = (req, res) => {
    connection.query("SELECT * FROM employee", function (err, data, fields) {
        if (err) {
            return res.status(500).send({
                message: err.message
            });
        }
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
};
