// 2025-07-28
// keyword : 함수상자(콜백함수) 

// 함수상자
// A개발자 : 더하기 함수상자를 만들기 : a, b라는 2개의 위쪽 구멍을 만들어 두었음
function add(a,b) {
    return a + b;        
}

// B개발자 : A개발자가 만든 더하기 함수상자의 위쪽 구멍은 2개라고 이미 정의되어있음
const a = 10;
const b = 20;

const result1 = add(a,b); // 6번 line 과 14번 line의 a와 b는 다름 ! 6번 : 함수상자 안에서 보는 a와 b, 14번 : 11,12번에서 들어온 a와 b
console.log(`더하기 결과 : ${result1}`);

// 콜백함수
// 함수를 일급객체로 다룬다 -> 함수를 변수에 할당할 수 있다 => 함수상자를 변수상자에 넣을 수 있다

// 익명함수
const add2 = function (a, b) {
    return a + b;
}
// 화살표함수
const add3 = (a, b) => {
    return a + b;
}
// 콜백함수
// A개발자가 콜백함수를 사용하는 형태로 함수를 정의함
const add4 = (a, b, callback) => {
    callback(a + b);
}

// B개발자가 콜백함수를 사용함
// 위쪽 구멍으로 던져줄 값의 개수는 A개발자가 정의한 개수와 동일하게 맞춰줌
add4(a, b, (result1) => {
    console.log(`콜백함수 안에서 더하기결과 : ${result1}`)
})