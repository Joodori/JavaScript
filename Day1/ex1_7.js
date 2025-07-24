// 붕어빵 만들기
// this키워드 

let fish1 = {
    name: '홍길동1',
    age: 21
}
console.log(`fish1 변수상자에 들어있는 붕어빵의 이름은? : ${fish1.name}`);

// 익명함수를 사용해서 진행하면 this를 쓸 수 있음
let fish2 = {
    name : '홍길동2',
    age : 22, // name 과 age를 변수상자로 보지않고 속성으로 봄
    swim: function () {
        console.log(`물고기가 헤엄칩니다. : ${this.name}`);
    }
}

/**  화살표함수를 사용하면 this를 써도 오류가 나고 안써도 오류가 남
 * let fish2 = {
    name : '홍길동2',
    age : 22,
    swim: () => {
        console.log(`물고기가 헤엄칩니다. : ${this.name}`);
    }}
 */
fish2.swim();

class Fish {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    swim() {
        console.log(`붕어빵이 헤엄칩니다. : ${this.name}`);
    }
}

let fish3 = new Fish('붕어빵1', 3);
console.log(`fish3 변수상자에 들어있는 붕어빵의 이름은? : ${fish3.name}`);
fish3.swim();







