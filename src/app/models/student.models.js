const { sql, conn } = require('../../config/db/connect');
const Student = require('./student.models');
const studentModel = new Student();
module.exports = function () {
    // Call back
    this.getAll = async function (req,res) {
        studentModel.getAll(function (err,data) {
            if (!err) {
                res.send({result: data})
            }else{
                res.send({result: data})
            }
        })
       
    
    };
}