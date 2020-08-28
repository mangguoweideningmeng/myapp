var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : '1910'
});
connection.connect();



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


// 注册
router.post('/reg', function(req, res, next) {
    console.log(req.body);
    var res = req.res
    var u_name = res['u_name']
    var u_mobile = res['u_mobile']

    var code = res['code']
    var sms_code = res['sms_code']
    var pass1 = res['pass1']
    console.log(pass1)
    var pass2 = res['pass2']
    connection.query("insert into users(name,password,tel) values(u_name,pass1,u_mobile)", function(err, data, fields) {
        if (err) {
            console.log(err);
            res.send({err:0,msg:"注册失败"});
            return;
        };
        console.log(data);
        res.send({err:0,msg:"注册成功"});
    });
    connection.end();

});

// 登录
router.post('/login', function(req, res, next) {
    console.log(req.body);
    var res = req.res
    // console.log(res)
    var u_name = res['u_name']
    var password = res['password']
    // res.send({errno:0,msg:"登录成功"});
    connection.query("select * from users where name='"+u_name+"' and password='"+password+"'", function(err, data, fields) {
        if (err) {
            console.log(err);
            res.send({err:0,msg:"登录失败"});
            return;
        };
        console.log(data);
        res.send({err:0,msg:"登录成功"});
    });
    connection.end();
});

module.exports = router;
