//웹서버 만들기

// 다른 개발자가 만들어둔 모듈 불러오기
const http = require('http');
const express = require('express');
const cors = require('cors');

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    port: 4406,
    user: 'root',
    password: 'admin',
    supportBigNumbers : true
});


// 웹서비스를 위한 객체 만들기
const app = express();

app.use(cors());

// 웹페이지 파일을 저장해두고 불러와서 사용하기 위해 사용되는 모듈에 대한 설정
app.set('views', './views');
app.set('view engine', 'ejs');

// 라우터 설정하기
// 클라이언트(요청을 하는 쪽 = 웹브라우저)에서 요청 경로로 요청하는 것을 
// 어떤 함수로 실행시켜서 응답을 보내줄 지를 결정해주는 것
// 요청 경로 -> 함수를 매칭시키는 것이 중요함 !
const router = express.Router();
app.use('/', router);


// /person/list-data가 요청경로일 때 이 경로로 요청이 들어오면 설정한 콜백함수를 실행함
router.route('/person/list-data').get(async (req, res) => {
    console.log(`/person/list-data 요청경로로 요청됨`)

    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {
        let sql = `select id,name,age, mobile from test.person`;
        conn = await pool.getConnection();
        let rows = await conn.query(sql, []);

        const output = {
            code: 200,
            message: 'OK',
            data: rows
        }

        //정상적으로 두번째 구멍으로 웹페이지가 전달된다면
        // 클라이언트(요청한 쪽 = 웹브라우저)쪽으로 응답을 보내줌
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output)); // output을 그대로 보내면 글자가 아닌 객체가 보내지기 때문에 JSON.stringify로 글자로 바꾸어서 전달해줌
        // 

    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})

// /person/add-data 요청경로일 때 이 경로로 요청이 들어오면 설정한 콜백함수를 실행함
router.route('/person/add-data').get(async (req, res) => {
    console.log(`/person/add-data 요청경로로 요청됨`)

    const params = req.query;
    console.log(`요청 파라미터 -> params : ${JSON.stringify(params)}`);

    let conn;

    try {
        let sql = `INSERT INTO test.person(name,age,mobile)
                    VALUES ('${params.name}', '${params.age}', '${params.mobile}')`;
        conn = await pool.getConnection();
        let rows = await conn.query(sql, []);

        let output = {
            code: 200,
            message: 'OK',
            data: rows
        }


        sql = `select id,name,age, mobile from test.person`;
        conn = await pool.getConnection();
        rows = await conn.query(sql, []);

        output = {
            code: 200,
            message: 'OK',
            data: rows
        }
        //정상적으로 두번째 구멍으로 웹페이지가 전달된다면
        // 클라이언트(요청한 쪽 = 웹브라우저)쪽으로 응답을 보내줌
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output)); // output을 그대로 보내면 글자가 아닌 객체가 보내지기 때문에 JSON.stringify로 글자로 바꾸어서 전달해줌
        // 

    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})

// /person/modify-data 요청경로일 때 이 경로로 요청이 들어오면 설정한 콜백함수를 실행함
router.route('/person/modify-data').get(async (req, res) => {
    console.log(`/person/modify-data 요청경로로 요청됨`)

    // 클라이언트로부터 전달받은 요청 파라미터 확인하기
    const params = req.query;
    console.log(`요청 파라미터 -> params : ${JSON.stringify(params)}`);


    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {

        let sql = `update test.person 
                    set name='${params.name}', age=${params.age} , mobile='${params.mobile}'
                    where id = ${params.id}`;
        conn = await pool.getConnection();
        let rows = await conn.query(sql, []);

        let output = {
            code: 200,
            message: 'OK',
            data: rows
        }


        sql = `select id,name,age, mobile from test.person`;
        conn = await pool.getConnection();
        rows = await conn.query(sql, []);

        output = {
            code: 200,
            message: 'OK',
            data: rows
        }
        //정상적으로 두번째 구멍으로 웹페이지가 전달된다면
        // 클라이언트(요청한 쪽 = 웹브라우저)쪽으로 응답을 보내줌
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output)); // output을 그대로 보내면 글자가 아닌 객체가 보내지기 때문에 JSON.stringify로 글자로 바꾸어서 전달해줌
    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})

// /person/delete-data 요청경로일 때 이 경로로 요청이 들어오면 설정한 콜백함수를 실행함
router.route('/person/delete-data').get(async (req, res) => {
    console.log(`/person/delete-data 요청경로로 요청됨`)

    // 클라이언트로부터 전달받은 요청 파라미터 확인하기
    const params = req.query;
    console.log(`delete-data 요청 파라미터 -> params : ${JSON.stringify(params)}`);


    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {

        // 클라이언트(웹브라우저)가 보내준 요청 파라미터를 SQL문과 합쳐서 업데이트 실행

        let sql = `DELETE FROM test.person
                    WHERE id = "${params.id}"`;
        conn = await pool.getConnection();
        let rows = await conn.query(sql, []);
        
        let output = {
            code: 200,
            message: 'OK',
            data: rows
        }


        sql = `select id,name,age, mobile from test.person`;
        conn = await pool.getConnection();
        rows = await conn.query(sql, []);

        output = {
            code: 200,
            message: 'OK',
            data: rows
        }
        //정상적으로 두번째 구멍으로 웹페이지가 전달된다면
        // 클라이언트(요청한 쪽 = 웹브라우저)쪽으로 응답을 보내줌
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output)); // output을 그대로 보내면 글자가 아닌 객체가 보내지기 때문에 JSON.stringify로 글자로 바꾸어서 전달해줌
    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})

// 웹서버 실행하기
const port = 7001;
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨 -> ${port}`);
});
