// 2025-07-25
// key word : 뷰 실행, npm.cmd i ejs
// 이거를 하기위해서 powerShell에서 npm.cmd i ejs 실행해야함.

// 웹서버 만들기

// 1. 다른 개발자가 만든 모듈(라이브러리) 불러오기
const http = require('http');
const express = require('express');

// 2. 익스프레스를 이용해서 웹서버를 위한 객체 만들기
const app = express(); // require로 불러오면 변수상자에 함수가 들어옴 (?)

// 6. 뷰 사용을 위해 설정하기
app.set('views','./views');
app.set('view engine', 'ejs');

// 4. 미들웨어 추가하기 

// 5. 라우터 추가하기
const router = express.Router();
app.use('/', router) // 라우터라는 것을 등록한다 (?)

// page/first 경로로 들어오면 콜백함수를 실행해주세요
router.route('/page/first').get((req, res) => {
    console.log(`/page/first 요청됨`);

    const context = {
        username : '홍길동1'
    };

    // first.ejs 중 확장자는 빼고 입력함 
    req.app.render('first',context,(err, html) => {
        if (err) {
            console.error(`뷰 처리 중 에러 발생 ${err}`);
            return;
        };

        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.end(html);
    });

});

// page/second 경로로 들어오면 콜백함수를 실행해주세요
router.route('/page/second').get((req, res) => {
    console.log(`/page/second 요청됨`);

    const params = req.query;

    const context = {
        name : params.name,
        age : params.age
    }

    req.app.render('second',context,(err,html) => {
       
       if (err) {
        console.error(`뷰 처리 중 에러 발생 ${err}`);
        return;
       }
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.end(html)
    })
});


// 3. 웹서버 실행하기
// 7001번 포트로 웹서버가 대기하게 됨
http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨`);
})


