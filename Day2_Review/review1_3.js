// 함수상자 만들기

function add1 (a, b) {
    return a + b;
}

let n1 = 10;
let n2 = 20;

let output1 = add1(n1,n2);

console.log(`더하기 결과 : ${output1} 입니다.`)

// 함수상자를 변수상자에 넣기

// 1. 익명 함수
let add2 = function (a, b) {
    return a + b;
}

// 2. 화살표 함수
let add3 = (a, b) => {
    return a + b;
}

// 콜백 함수 사용하기
let add4 = (a, b, callback) => {
    callback(a + b);
} 

add4(n1,n2,(output) => {
    console.log(`callback 함수 안에서 결과 : ${output}`);
});