// 2025-07-25  
// key word : 붕어빵 만들기 두가지 방법

// 붕어빵 만들기 (두가지 방법이 있음 ! )
// 첫번째 방법 : 변수상자들을 그냥 묶어주기 (노가다)
const fish1 = {
    name : '물고기1',
    age : 21,
    swim : function () {
        console.log(`물고기가 헤엄칩니다.`);
    }
} // name, age, swim은 모두 "속성"이라고 부름 그렇기 때문에 값을 넣을 때 :(콜론)을 사용함
console.log(`fish1 붕어빵의 이름 : ${fish1.name}`); // 객체.속성이름
console.log(`fish1 붕어빵의 이름 : ${fish1['name']}`);  // 객체+['속성이름'] 

// 두번째 방법 : 붕어빵 틀에서 찍어내기 (클래스 이용)
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;       
    }
    
    swim() {
        console.log(`${this.name} 물고기가 헤엄칩니다.`);
    }
}

const fish2 = new Fish('물고기2', 22);
console.log(`fish2 변수상자에 들어있는 붕어빵의 이름 : ${fish2.name}`);
fish2.swim();