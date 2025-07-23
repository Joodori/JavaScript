console.log('안녕!');

// 변수상자 만들기

// 자바스크립트는 변수상자의 크기를 명시하지 않음
// 자바의 경우 -> String name1; X
// 자바스크립트는 변수상자의 크기를 명시하지않고 자동으로 조정함
// 계속 let만 쓰니까 뭐가 뭔지를 몰라서 TyepeScript를 사용함
let name1;
name1 = '홍길동';
console.log(`name1 변수상자의 값 : ` + name1);
console.log(`name1 변수상자의 값 : ${name1}`); // 이 방법이 11번 Line보다 더 좋음 + 오류가 나지않음

let name2 = '홍길동2';
console.log(`name2 변수상자의 값 : ${name2}`);

let age1 = 21;
console.log(`age1 변수상자의 값 : ${age1}`);

console.log(`name1 변수상자의 크기 : ${typeof(name1)}`);
console.log(`age1 변수상자의 크기 : ${typeof(age1)}`);

let visible = true;
console.log(`visible 변수상자의 크기 : ${typeof(visible)}`);

let age2;
// age2 변수상자는 아직 값이 할당되지 않았음 -> 따라서 age2 변수상자의 크기는 undefined
console.log(`age2 변수상자의 크기 : ${typeof(age2)}`);

if (typeof(age2) == 'undefined') {
    console.log(`age2 변수상자의 크기를 알 수 없습니다.`);
} else if(typeof(age2) == 'string') {
    console.log(`age2 변수상자의 크기는 string입니다.`);
} else if (typeof(age2) == 'number') {
    console.log(`age2 변수상자의 크기는 number입니다.`);
}

age2 = 22;

if (age2) {
    console.log(`age2 변수상자의 크기가 결정되어 있습니다. : ${typeof(age2)}`);
}
