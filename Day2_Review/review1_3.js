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

/** 콜백함수란 무엇인가?
 *  Line 27~29 에서는 add4라는 함수가 어떤 함수인지 알려주는 것이고 살짝 붕어빵 틀 처럼 생각하면 좋음
 *  a, b, callback 에서 callback은 변수. 근데 우리는 변수상자 안에 함수가 들어간다는 것을 알고있기 때문에
 *  callback에는 함수가 들어갈 수 있음 그래서 두번째 줄에 들어가는 callback(a + b)는 함수이기는 한데 어떤 함수인지 말을 
 * 
 * 
 * 
 * 
 *  javascript
let add4 = (a, b, callback) => {
    callback(a + b);
}

add4(n1, n2, (output) => {
    console.log(`callback 함수 안에서 결과 : ${output}`);
});
1. 첫 줄 해설
javascript
let add4 = (a, b, callback) => {
let add4 = ... : add4라는 이름의 변수를 만들고, 여기에 화살표 함수를 할당합니다. (add4가 함수가 됨)

(a, b, callback) : 이 함수는 세 개의 매개변수(a, b, callback)를 받습니다.

a, b : 일반적으로 더하고 싶은 두 숫자를 의미합니다.

callback : 나중에 실행할 "함수"를 받을 변수입니다.

2. 함수 본문
javascript
    callback(a + b);
}
callback(a + b); : 매개변수 a와 b를 더한 값을, callback이라는 함수의 인자로 전달해 실행합니다.

즉, callback에 들어온 함수가 실행되면서 결과가 그 함수의 첫 번째 인수로 넘어갑니다.

3. 함수 호출
javascript
add4(n1, n2, (output) => {
    console.log(`callback 함수 안에서 결과 : ${output}`);
});
add4(n1, n2, ... ) : add4 함수를 실제로 실행합니다.

n1, n2 : 더할 두 값을 전달합니다(예: 5, 10 등)

(output) => { ... } : 세 번째 인자로 함수를 직접 전달합니다(이게 콜백 함수입니다).

4. 콜백 함수 상세
javascript
(output) => {
    console.log(`callback 함수 안에서 결과 : ${output}`);
}
(output) => {...} : 익명 화살표 함수입니다. add4 함수 정의에서 callback 매개변수에 들어가는 "함수"가 바로 이 부분입니다.

console.log(callback 함수 안에서 결과 : ${output});

전달받은 output(= a + b의 결과)을 템플릿 문자열로 콘솔에 출력합니다.

예를 들어 n1=7, n2=3이면 "callback 함수 안에서 결과 : 10" 이 출력됨.
 * 
 */