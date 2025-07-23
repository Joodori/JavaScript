// 집과 사람은 붕어빵 틀 없이 중괄호를 이용하여 붕어빵을 만든다
// 강아지 고양이는 붕어빵 틀로 클래스를 이용하여 만든다
// 집에는 사람, 강아지, 고양이를 담아둘 수 있는 속성을 가지고있고
// 집에 print함수도 만든다. print함수는 집안에 사람 고양이 강아지 정보를 콘솔에 출력한다


class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
}

let person = {
    name : '사람1',
    age : 10,
    mobile : '010-1111-1111'
}

/**
 * this.person this.dog 같이 this를 사용하기위해 익명함수를 사용해서 house라는 변수상자에 집어넣을 수 있음
 * => 처럼 화살표함수를 사용하면 this를 써도 오류가나고 안써도 오류가 남
 * 
 * let house = {
    dog : new Dog('강아지1'),
    cat : new Cat('고양이1'),
    person : person,
    print : function () {
        console.log(`집 안에 사람의 이름은 : ${this.person.name1}`);
        console.log(`집 안에 강아지의 이름은 : ${this.dog.name}`);
        console.log(`집 안에 고양이의 이름은 : ${this.cat.name}`);
    }}
 *  이 방법은 전통적 방법 
    print : function() { /~~/ }
    아래 방법이 축약형으로 더 효율적인 방법임
 */

let house = {
    dog : new Dog('강아지1'),
    cat : new Cat('고양이1'),
    person : person,
    print() {
        console.log(`집 안에 사람의 이름은 : ${this.person.name1}`);
        console.log(`집 안에 강아지의 이름은 : ${this.dog.name}`);
        console.log(`집 안에 고양이의 이름은 : ${this.cat.name}`);
    }
}




house.print();
house.name;
house.cat.name = '고양이333';
house.print();

