// 여러개의 화면 만들고 전환하기
// 화면(1) : 아이디와 비밀번호를 만들고 로그인하기
// 화면(2) : ㅇㅇㅇ님 환영합니다 + [고객관리, 상품관리, 매출관리] + 선택했던 화면 = 뭐였는지 + 로그아웃
// 화면(3,4,5) : [고객관리, 상품관리, 매출관리] + 돌아간다.

// 웹서버 만들기

// 1. 다른 개발자가 만든 모듈(라이브러리) 불러오기
const http = require('http');
const express = require('express');

// 2. 익스프레스를 이용해서 웹서버를 위한 객체 만들기
const app = express();

// 6. 뷰 사용을 위해 설정하기
app.set('views', './views');
app.set('view engine', 'ejs');

// 5. 라우터 추가하기
const router = express.Router();
app.use('/', router)


// login 페이지로 이동하기
router.route('/page/login2').get((req, res) => {
    // /page/login2로 들어오게되면 이게 실행될거야
    console.log(`/page/login2 요청됨`)  // 콘솔창에 어떤 요청을 보냈는지 보여줌(누가 들어왔는지 서버에 알려주는 역할)

    const context = { // render의 함수에 필요한 context를 만들어놓음, 여기서는 전달할게 없으니까 비워둠
    }

    req.app.render('login2', context, (err, html) => {
        // login2.ejs파일을 16~17Line에 설정해놓은 views로 읽어서 웹페이지가 어떻게 생겼는지 보여줘 !
        if (err) {
            console.log(`뷰 처리 중 에러 발생 ${err}`);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end(html)
    })
})

// welcome화면 (처음 3개 선택화면으로)
router.route('/page/welcome').get((req, res) => {
    console.log(`/page/welcome 요청됨`);

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);

    const context = {  
        //welcome화면으로 왔는데 내가 필요한건 사용자의 userName(id로 입력받은 정보)과 제일 최근에 들어갔던 페이지를 알려주는 것이야
        // 그렇기때문에 context안에 params = req.query로 받은 정보들을 넣어두도록 할게
        // 이 req.query에서 받은 정보들은 어디서 왔을까? : login2에서 작성한 정보들이 form에 담겨서 전달된 것인데 /page/welcome [?userName=사용자이름&page=페이지]
        // 저 대괄호 부분에서 읽은 것이다 ! 
        userName: params.userName,
        page: params.page
    }
    req.app.render('welcome', context, (err, html) => {
        if (err) {
            console.log(`뷰 처리 중 에러 발생 ${err}`);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end(html)
    })
})

// 고객관리 화면
router.route('/page/customer').get((req, res) => {
    console.log(`/page/customer 요청됨`);

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);

    const context = {
        userName: params.userName ,
        page: params.page
    }
    req.app.render('customer', context, (err, html) => {
        if (err) {
            console.log(`뷰 처리 중 에러 발생 ${err}`);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end(html)
    })
})

// 상품관리 화면
router.route('/page/product').get((req, res) => {
    console.log(`/page/welcome 요청됨`);

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);

    const context = {
        userName: params.userName ,
        page: params.page
    }
    req.app.render('product', context, (err, html) => {
        if (err) {
            console.log(`뷰 처리 중 에러 발생 ${err}`);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end(html)
    })
})

// 매출관리 화면
router.route('/page/sales').get((req, res) => {
    console.log(`/page/welcome 요청됨`);

    const params = req.query;
    console.log(`요청 파라미터 -> ${JSON.stringify(params)}`);

    const context = {
        userName: params.userName ,
        page: params.page
    }
    req.app.render('sales', context, (err, html) => {
        if (err) {
            console.log(`뷰 처리 중 에러 발생 ${err}`);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end(html)
    })
})


// 3. 웹서버 실행하기
// 7001번 포트로 웹서버가 대기하게 됨
http.createServer(app).listen(7003, () => {
    console.log(`웹서버 실행됨`);
})
