const sql =  require('mssql/msnodesqlv8');

// Cấu hình thông tin kết nối với CSDL
const config = {
    server: 'THAIVO\\THAIVODB',
    user:'sa',
    password: '1',
    database: 'Student',
    driver: 'msnodesqlv8',
    options:{
        encrypt: false,
        enableArithAbort: false,
    },
    connectTimeout: 300000,
    requestTimeout: 300000,
    pool:{
        idleTimeoutMillis: 300000,
        max:100,

    }
}
const conn = new sql.ConnectionPool(config);
// Kết nối database
async function connect() {
    try {
        await sql.connect(config)
        console.log("Connect succesfully");
    } catch (error) {
        console.log("Fail");
    }
}



module.exports = {sql:sql, conn:conn , connect:connect }