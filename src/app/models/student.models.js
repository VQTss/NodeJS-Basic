const { sql, conn } = require('../../config/db/connect');

module.exports = function () {
    // Call back
    this.getAll = async function (result) {
        await conn.connect();
        return await conn.request().query(" use Student select * from Student",function (err,data) {
            if (data.recordset.length > 0) {
                result(null, data.recordset);
            }else{
                result(true,null);
            }
        });
    }

}