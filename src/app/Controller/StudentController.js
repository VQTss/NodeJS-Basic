const { sql, conn } = require('../../config/db/connect');



exports.getList = async function (req, res) {

    await conn.connect();
    return await conn.request().query(" use Student select * from Student",function (err,data) {
        if (data.recordset.length > 0) {
            res.send({result: data.recordset});
        }else{
            res.send({result: null});
        }
    });

};