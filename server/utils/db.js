'use strict';
const mysql = require('mysql');
const config = require('../configs').mysql;
const pool = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PSWD,
    database: config.DB,
    port: config.PORT,
});
/**
 * [query description]
 * @return {[type]} [description]
 */
// 如果用户传递了两个参数，那么第一个就是 SQL 操作字符串， 第二个就是回调函数
// 如果是三个参数：第一个SQL字符串，第二个数组，第三个参数回调函数
exports.query = function() {
    let sqlStr = arguments[0];
    let params = [];
    let callback;
    if (arguments.length === 2 && typeof arguments[1] === 'function') {
        callback = arguments[1];
    } else if (arguments.length === 3 && Array.isArray(arguments[1]) && typeof arguments[2] === 'function') {
        params = arguments[1];
        callback = arguments[2];
    } else {
        throw new Error('参数个数不匹配');
    }
    pool.getConnection((err, connection) => {
        if (err) callback(err.message);
        connection.query(sqlStr, params, function(e) {
            if (e) callback(e.message);
            else callback.apply(null, arguments);
            connection.release();
        });
    });
};
exports.pool=pool;

