// 함수상자 만들기 + 콜백함수
// 함수를 만드는 방법 3가지


// in java
/*
int add (int a, int b) {
    return a + b;
}
함수상자의 반환되는 크기, 함수상자에 들어가는 자료형 다 정의를 해줬어야함 */

// in javascript
// 함수만들기 첫번째 방법

// 함수상자에 들어가는 자료형과 반환크기는 정의를 해주지 않아도 됨
function add(a, b) {
    console.log(a+b);
    return a + b;
}
let output1 = add(10, 20); // 30
console.log(`더하기 결과 : ${output1}`); //java에서 system.out.println()과 같은 역할

function print(a) {
    console.log(`print 함수상자 안에서 a 상자의 값 : ${a}`);
}


print(10); 
// 함수를 일급객체로 사용
// 함수상자를 변수상자에 넣을 수 있다 O --> 함수상자를 함수상자의 위 or 아래 구멍에 넣을 수 있게 되었다. 

// 함수상자를 변수상자에 넣기
let show = print; // show 변수상자에 print 함수상자를 넣음
show(20); 


// 함수만들기 두번째 방법

// 함수상자를 만들면서 변수상자에 즉시 할당하기
// 변수상자를 만들면서 함수상자로 초기화하기
let show2 = function () { // 살짝 1루수가 누구야느낌 let show2 = function print2() { 로 시작하면 show2에서 실행되는 함수는 print2인지 show2인지 알 수 없음
    console.log(`print2 함수 실행됨.`);
}


// 함수 만들기 세번째 방법

// 화살표 함수 33~35줄과 비슷함
let show3 = ()  => { 
    console.log(`print2 함수 실행됨.`);
}


function add2(a, b) {
    return a + b;
}

let output2 = add2(10, 10);
console.log(`더하기 결과: ${output2}`);


// 콜백함수

function add3(a,b,c) {
    c(a+b); 
}

add3(10,10, (output) => {
    console.log(`더하기 결과 : ${output}`);
})


// 콜백함수 예제
function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback(); // 콜백 함수 호출
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('World', sayGoodbye); // greet 함수에 sayGoodbye 콜백 함수 전달