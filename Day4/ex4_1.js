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

router.route('/page/first').get(async (req, res) => {
    console.log('/page/first 요청됨')

    // 데이터베이스에 연결해서 요청을 보낼거임 async await이용 -> req,res에 이용할거임 ! 
    // DB로 SQL문 실행 요청하기
    let conn;
    try {
        conn = await pool.getConnection();

        const sql = `select id, name, age, mobile from test.person` // eclipse에서 했던것과 동일한 느낌으로 진행
        const rows = await conn.query(sql, []); // rows에 조회한 결과가 들어감 -> context에서 읽을 수 있는 정보들이 들어감  + 배열에 값들이 붕어빵으로 들어가있음 !
        const context = {
            username1: rows[0].name,
            username2: rows[1].name,
            username3: ''
        }
        req.app.render('first', context, (err, html) => {
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
