const { sql, conn } = require('../../config/db/connect');
const Student = require('../models/student.models');
const studentModel = new Student();

exports.getList = this.getAll = async function (req, res) {
        studentModel.getAll(function (err, data) {
            if (!err) {
                res.send({ result: data })
            } else {
                res.send({ result: data })
            }
        })

    };
