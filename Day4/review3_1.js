// 2025-07-28
// keyword : 기본복습 + isNaN

// 변수상자 만들기 (기본자료형)
let name1 = '홍길동1';  // string
let age1 = 21;         // number or int 
let visible = true;    // boolean

// 그 자료형을 알고싶다면 ? => typeof(변수상자)
const name1Type = typeof(name1);
// `(백틱)을 사용해야 백틱 사이에 $를 사용할 수 있음 ! ''(작은따옴표)를 사용하면 $를 문자취급함
console.log(`name1 변수상자의 크기는 ? : ${name1Type}`); // console.log(typeof(name1)); -> string

let name2; // 값이 없는 상태의 변수상자 (초기화가 안된 선언만 된 상태)
const name2Type = typeof(name2);
console.log(`name2 변수상자의 크기 : ${name2Type}`);  // -> undefined

const age2 = '21'; // 숫자는 숫자이지만 number(21)가 아닌 string('21')으로 되어있을 때 
const age3 = '22';

const age2Int = Number(age2); // java에서 Integer.parseInt()와 같은 기능
const age3Int = Number(age3);

const result1 = age2Int + age3Int;
console.log(`더하기 결과는 : ${result1}`);

// if  age2에서 만약 21이 아니라 21A라고 들어있으면 바꿀수가 없다 => age2Int가 NaN 으로 나오게되어서 result1또한 NaN으로 바뀜
const age4Int = Number('21A');
const result2 = age2Int + age4Int;
if (isNaN(age4Int)) {
    console.log(`첫번째 글자는 숫자가 아닙니다.`);
}
if (isNaN(result2)) {
    console.log(`더하기 결과가 숫자가 아닙니다.`);
}