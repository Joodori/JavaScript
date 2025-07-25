// 2025-07-25
// key word : 라우터추가하기 -> html 그대로 적기

// 웹서버 만들기

// 1. 다른 개발자가 만든 모듈(라이브러리) 불러오기
const http = require('http');
const express = require('express');

// 2. 익스프레스를 이용해서 웹서버를 위한 객체 만들기
const app = express(); // require로 불러오면 변수상자에 함수가 들어옴 (?)

// 4. 미들웨어 추가하기 

// 5. 라우터 추가하기
const router = express.Router();
app.use('/', router) // 라우터라는 것을 등록한다 (?)

// page/first 경로로 들어오면 콜백함수를 실행해주세요
router.route('/page/first').get((req, res) => {
    console.log(`/page/first 요청됨`);

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    res.end(`
        <!DOCTYPE html> 
        <html> 
            <head> 
                <meta charset="UTF-8"
                <title> 첫번째 페이지 </title>
            </head> 
            <body> 
                <h1> 연습 첫번째</h1>
                <a href="/page/second">두번째 페이지로</a>
            </body>
        </html> 
        `); 
});

// page/second 경로로 들어오면 콜백함수를 실행해주세요
router.route('/page/second').get((req, res) => {
    console.log(`/page/second 요청됨`);

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    res.end(`
        <!DOCTYPE html> 
        <html> 
            <head> 
                <meta charset="UTF-8"
                <title> 두번쩨 페이지 </title>
            </head> 
            <body> 
                <h1> 연습 두번째</h1>
                <a href="/page/first">첫번째 페이지로</a>
            </body>
        </html> 
        `);
});


// 3. 웹서버 실행하기
// 7001번 포트로 웹서버가 대기하게 됨
http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨`);
})


