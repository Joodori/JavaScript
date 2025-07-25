// 2025-07-25
// 변수상자 만들기 

// 변수상자를 만들고 그 안에 값을 할당 + 모든 변수상자의 크기는 let으로 만들기만함
let name1 = '홍길동1';
// name1의 자료형을 확인하는 방법 : typeof(변수상자) 로 확인 => name1의 크기 : string
console.log(`name1 변수상자의 크기 : ${typeof(name1)}`);

let age1 = 21;  // => number
let visible = true; // => boolean

name1 = '홍길동2'; // name1에는 홍길동1 이었는데 그 값을 홍길동2 로 덮어쓰려 함

const name2 = '홍길동3'; // const => 바꿀 수 없는 것 : 상수_(바꿀 수 없는 변수) + 실무에서 const를 더 많이 사용

// name2 = '홍길동4';
/** 오류 : constant variable에 할당을 하려고하다가 오류가 났음
 * Uncaught TypeError TypeError: Assignment to constant variable.
 *  at <anonymous> (file:///C:/Users/LX/javascript-training/Day3/review2_1.js:15:7)
 */


