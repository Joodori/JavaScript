// 객체(붕어빵) 만들기

// 1. 객체를 바로 생성하기
let fish1 = {
    name : '홍길동1',
    age : 21,
    swim : function() {
        console.log(`물고기가 헤엄칩니다.`);
    }
}
console.log(`fish1 변수상자에 들어있는 물고기의 이름 : ${fish1.name}`); // 홍길동1
fish1.swim();  // 변수로 들어가있어서 fish1.swim으로 해야할 것 같지만 swim은 함수로 정의되어있기 때문에 swim()으로 호출해야함

// 2. 붕어빵 틀에서 붕어빵 만들어내기
class Fish {
    
    constructor(name,age) {
        this.name = name;
        this.age = age;
        
        console.log(`물고기가 만들어졌어요`);
    }
}

let fish2 = new Fish('물고기1', 1);  // constructor의 console.log가 실행됨 (객체가 생성되었기 때문에)
console.log(`fish2 변수상자에 들어있는 물고기의 이름 : ${fish2.name}`);  // 물고기1