// 변수상자 만들기

// 변수상자를 만들고 // string의 값을 할당
let name1;
name1 = '홍길동1';

// 변수상자를 만들면서 number의 값을 할당
let name2 = '홍길동2';
let age1 = 21;

// 변수상자를 만들면서 boolean의 값을 할당
let visible = true;

// 변수상자의 크기 확인하기
console.log(`name1 변수상자의 크기 : ${typeof(name1)}`);
console.log(`age1 변수상자의 크기 : ${typeof(age1)}`);
console.log(`visible 변수상자의 크기 : ${typeof(visible)}`);

// 아무것도 할당하지 않은 변수상자의 크기는 ? 
let name3;
console.log(`name3 변수상자의 크기 : ${typeof(name3)}`); // -> type = undefined

if (typeof(name3) == 'undefined') {
    console.log(`name3 변수상자의 크기를 알 수 없습니다.`)
} else {
    console.log(`name3 변수상자의 크기는 ${typeof(name3)} 입니다.`);
}