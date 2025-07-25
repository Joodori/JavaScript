// 2025-07-25  
// key word : 함수상자 만들기 + 일급객체 + 화살표함수 + 콜백함수
// 함수상자 만들기 
// 코드 수정 필요 없음

function print() {
    console.log(`print 함수 실행(호출)됨`);
}

print(); // console창에 5번 Line이 그대로 출력됨

// 함수상자를 일급객체로 다루기 : 함수상자를 변수상자에 넣을 수 있다. = 할당할 수 있다.
const print2 = function /*print3*/ () {   //print3는 생략 (헷갈리기 때문에)
    console.log(`print 함수 실행됨`);
}

// 화살표 함수 만들기 : 변수에 함수를 할당할 때 함수이름을 또 적어버리면 뭐라고 불러야할지 모르기때문에 이름을 생략
// 화살표 함수는 콜백함수에서 아주 자주이용됨 (일회성이 강하기 때문(?))
// () + => + {} 
const print3 = () => {
    console.log(`print 함수 실행됨`);
}

// 콜백함수 사용하기
function add(a, b) {
    return a + b;
}

const output1 = add(10,10);
console.log(`더하기 결과 : ${output1}`);

const add2 = (a, b, callback) => {
    const result = a + b; // 일단 먼저 result라는 변수상자에 a + b값을 넣고 callback의 인자로 넣어줄 것임
    callback(result); 
    // callback이 일단 함수기는한데 들어가는 값은 result로 할거야. 함수를 어떻게 할지는 너가 정해 
    // 함수를 너가 항상 정해야하기 때문에 화살표함수를 이용하는것(?)
}

// 방금 말한 callback함수를 어떻게 만들지는 여기서 정할게
// 여기있는 output은 뭐라고하던 상관없어
add2(10,10, (output) => {
    console.log(`콜백함수 안에서 더하기 결과 : ${output}`);
})
