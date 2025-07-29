// 웹서버 만들기

// 1. 다른 개발자가 만들어놓은 모듈을 불러오기
const http = require('http');
const express = require('express'); // npm.cmd i express
const mariadb = require('mariadb'); // npm.cmd i mariadb

const pool = mariadb.createPool({
    host: 'localhost',
    port: 4406,
    user: 'root',
    password: 'admin'
})


const app = express();

app.set('views', './views'); // views라는 파일을 읽겠다 // npm.cmd i ejs
app.set('view engine', 'ejs'); // view engine 중에서 ejs를 사용하겠다

const router = express.Router();
app.use('/', router);

router.route('/page/list').get(async (req, res) => {
    console.log('/page/list 요청됨')

    let conn;
    try {
        conn = await pool.getConnection();

        const sql = `select id, name, age, mobile from test.person` 
        const rows = await conn.query(sql, []); 
        const context = {
            persons : rows
        }
        req.app.render('list', context, (err, html) => {
            if (err) {
                console.error(`뷰 처리 중 에러 -> ${err}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.end(html);
        })
    } catch (err) {
        console.error(`요청처리중 에러 -> ${err}`)
    } finally {
        if (conn) { conn.end(); }
    }
})

router.route('/page/add').get(async (req, res) => {
    console.log('/page/add 요청됨')

    try {

        const context = {

        }

        req.app.render('add', context, (err, html) => {
            if (err) {
                console.error(`뷰 처리 중 에러 -> ${err}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.end(html);
        })

    } catch (err) {

        console.error(`요청처리중 에러 -> ${err}`)

    } 
})


router.route('/page/insert').get(async (req, res) => {
    console.log('/page/insert 요청됨')

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);
    let conn;
    try {
        conn = await pool.getConnection();

        let sql = `INSERT INTO test.person(name,age,mobile) VALUES ('${params.name}', ${params.age}, '${params.mobile}')` 
        let rows = await conn.query(sql, []); 

        sql = `select id, name, age, mobile from test.person`;
        rows = await conn.query(sql,[])

        const context = {
            persons : rows
        }
        req.app.render('list', context, (err, html) => {
            if (err) {
                console.error(`뷰 처리 중 에러 -> ${err}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.end(html);
        })
    } catch (err) {
        console.error(`요청처리중 에러 -> ${err}`)
    } finally {
        if (conn) { conn.end(); }
    }
})


router.route('/page/update').get(async (req, res) => {
    console.log('/page/update 요청됨')

    try {

        const context = {

        }

        req.app.render('update', context, (err, html) => {
            if (err) {
                console.error(`뷰 처리 중 에러 -> ${err}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.end(html);
        })

    } catch (err) {

        console.error(`요청처리중 에러 -> ${err}`)

    } 
})

router.route('/page/reproduct').get(async (req, res) => {
    console.log('/page/reproduct 요청됨')

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);
    let conn;
    try {
        conn = await pool.getConnection();

        let sql = `UPDATE test.person SET name = '${params.name}', age = ${params.age}, mobile = ${params.mobile} WHERE id = '${params.id}'` 
        let rows = await conn.query(sql, []); 

        sql = `select id, name, age, mobile from test.person`;
        rows = await conn.query(sql,[])

        const context = {
            persons : rows
        }
        req.app.render('list', context, (err, html) => {
            if (err) {
                console.error(`뷰 처리 중 에러 -> ${err}`);
            }

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.end(html);
        })
    } catch (err) {
        console.error(`요청처리중 에러 -> ${err}`)
    } finally {
        if (conn) { conn.end(); }
    }
})

const port = 7001;
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨 -> port ${port}`);
})

// 웹페이지 4개 만들어서 각각 페이지에서 요청을 보내면 select insert update delete등을 각각 하는 페이지를 만들어라
// 페이지 4개(ejs확장자) + route도 4개를 만들어서 왔다갔다하게 해라  