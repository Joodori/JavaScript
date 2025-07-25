// 2025-07-25
// key word : 웹서버만들기 시작 웹서버 실행하고 미들웨어 추가하기 까지

// 웹서버 만들기

// 1. 다른 개발자가 만든 모듈(라이브러리) 불러오기
const http = require('http');
const express = require('express');

// 2. 익스프레스를 이용해서 웹서버를 위한 객체 만들기
const app = express(); // require로 불러오면 변수상자에 함수가 들어옴 (?)

// 3. 웹서버 실행하기
// 7001번 포트로 웹서버가 대기하게 됨
http.createServer(app).listen(7001,() => {
    console.log(`웹서버 실행됨`);
})
// 여기까지하고 powerShell에서 실행했을 때 오류 !
/**
 * PS C:\Users\LX\javascript-training\Day3> node ex3_1.js
 * node:internal/modules/cjs/loader:1404
 * throw err;
 *  ^
 * Error: Cannot find module 'express'
 * Require stack:
 * - C:\Users\LX\javascript-training\Day3\ex3_1.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
    at Function._load (node:internal/modules/cjs/loader:1211:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1487:12)
    at require (node:internal/modules/helpers:135:16)
    at Object.<anonymous> (C:\Users\LX\javascript-training\Day3\ex3_1.js:8:17)
    at Module._compile (node:internal/modules/cjs/loader:1730:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\Users\\LX\\javascript-training\\Day3\\ex3_1.js' ]
}

<npm i express를 치면 뭐가 없다고 뜸>

PS C:\Users\LX\javascript-training\Day3> npm i express
npm : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Program Files\nodejs\npm.ps1 파일을 로드할 수 없습니다. 자세한
내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.
위치 줄:1 문자:1
+ npm i express
+ ~~~
    + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

<npm.cmd i express를 치면 뭔가 설치가 됨>
    PS C:\Users\LX\javascript-training\Day3> npm.cmd i express

added 67 packages in 2s

14 packages are looking for funding
  run `npm fund` for details

  웹서버 실행 ! 
PS C:\Users\LX\javascript-training\Day3> node ex3_1.js
웹서버 실행됨
 */


// 4. 미들웨어 추가하기 
app.use((req, res, next) => {
    console.log(`첫번째 미들웨어 호출됨`);

    next();

})

app.use((req,res,next) => {
    console.log(`두번째 미들웨어 호출됨`);

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>웹서버에서 전달받은 페이지</h1>');

})