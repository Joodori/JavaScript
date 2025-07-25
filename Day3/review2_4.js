// 2025-07-25  
// key word : const로 정의한 배열 안의 값 바꾸기 +  for문 + forEach(콜백함수)

// 하나의 변수상자 안에 여러 값을 넣기
// fishes라는 변수상자에 붕어빵이 두마리 들어가는 형태
const fishes = [
    {
        name : '물고기1',
        age : 21
    },
    {
        name : '물고기2',
        age : 22
    }
]

console.log(`물고기 마리수 : ${fishes.length}`);

fishes[0].name = '물고기11'; //fishes는 const로 정의되어있지만 그 내부의 인덱스를 이용해서 값을 바꿀 수 있음
console.log(`첫번째 물고기의 이름은 : ${fishes[0].name}`);

// 변수상자 안에 들어있는 각각의 값을 알아보기
for (let aaa of fishes) {
    console.log(`물고기의 이름 : ${aaa.name}`)
}

fishes.forEach((value, index) => {
    console.log(`물고기의 이름 : ${value.name} `);
})

// forEach라는 함수가 어떻게 생겼는지 확인하기위해 직접 만들어보기
const forEach = (items, callback) => {
    let index = 0;
    for (let item of items) {
        callback(item, index);
        index += 1;
    }
}

forEach(fishes,(value, index) => {
    console.log(`d물고기의 이름 : ${value.name}`);
})