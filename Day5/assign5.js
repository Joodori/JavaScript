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

const app = express();

app.use(cors());

app.set('views', './views');
app.set('view engine', 'ejs');

const router = express.Router();
app.use('/', router);


// 장바구니 목록 요청경로일때
router.route('/basket/list').get(async (req, res) => {
    console.log(`/basket/list 요청경로로 요청됨`)

    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {
        let sql = `select * from market.basket`;
        conn = await pool.getConnection();
        let rows = await conn.query(sql, []);

        const output = {
            code: 200,
            message: 'OK',
            data: rows
        }

        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output));
        // 

    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})

// 장바구니 추가버튼 요청경로일때
router.route('/basket/add').get(async (req, res) => {
    console.log(`/basket/add 요청경로로 요청됨`)

    const params = req.query;
    console.log(`add 요청 파라미터 -> params : ${JSON.stringify(params)}`);

    let conn;

    try {
        conn = await pool.getConnection();
        
        let checkSql = `SELECT * FROM market.basket WHERE product_name = ?`;
        let existingRows = await conn.query(checkSql, [params.product_name]);
        
        let output;
        
        if (existingRows.length > 0) {
            console.log('제품이 이미 존재함 - quantity 증가');
            let updateSql = `UPDATE market.basket 
                           SET quantity = quantity + 1 
                           WHERE product_name = ?`;
            let updateRows = await conn.query(updateSql, [params.product_name]);
            
            output = {
                code: 200,
                message: '기존 상품의 수량이 증가되었습니다',
                data: updateRows
            }
            
        } else {
            console.log('새로운 제품 추가');
            let insertSql = `INSERT INTO market.basket(product_name, price, quantity) 
                           VALUES (?, ?, 1)`;
            let insertRows = await conn.query(insertSql, [params.product_name, params.price]);
            
            output = {
                code: 200,
                message: '새로운 상품이 장바구니에 추가되었습니다',
                data: insertRows
            }
        }

        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf8' });
        res.end(JSON.stringify(output));

    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
        
        const errorOutput = {
            code: 500,
            message: 'Server Error',
            data: null
        };
        
        res.writeHead(500, { 'Content-Type': 'application/json;charset=utf8' });
        res.end(JSON.stringify(errorOutput));
        
    } finally {
        if (conn) conn.end();
    }
})

// 장바구니 수정버튼 요청경로일때
router.route('/basket/modify').get(async (req, res) => {
    console.log(`/basket/modify 요청경로로 요청됨`)

    // 클라이언트로부터 전달받은 요청 파라미터 확인하기
    const params = req.query;
    console.log(`delete-data 요청 파라미터 -> params : ${JSON.stringify(params)}`);


    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {

        // 클라이언트(웹브라우저)가 보내준 요청 파라미터를 SQL문과 합쳐서 업데이트 실행

        let sql = `UPDATE FROM market.basket
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
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.end(JSON.stringify(output)); 
    } catch (err) {
        console.error(`에러발생 ->> err : ${err}`);
    } finally {
        if (conn) conn.end();
    }
})



// 장바구니 삭제버튼 요청경로일때
router.route('/basket/delete').get(async (req, res) => {
    console.log(`/basket/delete 요청경로로 요청됨`)

    // 클라이언트로부터 전달받은 요청 파라미터 확인하기
    const params = req.query;
    console.log(`delete-data 요청 파라미터 -> params : ${JSON.stringify(params)}`);


    // 데이터베이스에서 데이터 조회하기

    let conn;

    try {

        // 클라이언트(웹브라우저)가 보내준 요청 파라미터를 SQL문과 합쳐서 업데이트 실행

        let sql = `DELETE FROM market.basket
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
