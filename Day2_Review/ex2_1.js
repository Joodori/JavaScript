// 배열 -------------------------------------------

// 여러개의 값을 하나의 변수상자에 넣기
let names = ['홍길동1', '홍길동2', '홍길동3']; // 3개의 칸에 글자를 집어넣음
console.log(`names 배열 안에 있는 요소들의 개수 : ${names.length}`); 
console.log(`names의 첫번째 칸에 들어있는 값은 ? : ${names[0]}`); // index는 0부터 시작함
console.log(`names의 두번째 칸에 들어있는 값은 ? : ${names[1]}`);


// 배열에 붕어빵을 넣을 수 있을까?
let fishes = [
    // 속성들을 집어넣기 위해 중괄호를 사용함 + 바로 붕어빵을 찍어냄
    { // 배열의 첫번째에 들어가는(index=0) 붕어빵을 바로 만들어서 집어넣음
        name : '물고기1',
        age : 1
    },
    
    { // 배열의 두번째에 들어가는(index=1) 붕어빵을 바로 만들어서 집어넣음
        name : '물고기2',
        age : 2
    }
]

// 백틱(`)의 장점은 백틱 내부에 들어가는 모든 내용들을 우리 마음대로 쓸 수 있음 (엔터 -> 줄바꿈) + ('' "" 구분가능) 
console.log(`fishes 변수상자에 들어있는 요소의 개수 :  ${fishes.length}`);

// 배열[인덱스].속성     //typeof(배열[인덱스])
console.log(`fishes 변수상자에 첫번째로 들어있는 물고기의 이름 : ${fishes[0].name} , 나이 : ${fishes[0].age} `);  
console.log(`names 변수상자의 첫번째 칸에 들어가 있는 값의 자료형은? ${typeof(names[0])}`); 




// 배열의 자료형 -------------------------------------------

// 배열의 자료형은 object !
console.log(`names 변수상자의 자료형은? : ${typeof(names)}`); 

// 붕어빵의 자료형이 뭔지 찾는과정 시작
let fish1 = {
    name : '물고기1'
}

// 붕어빵의 자료형도 object !
console.log(`fish1의 자료형은 ? : ${typeof(fish1)}`);

// names는 배열이고  fish1은 붕어빵인데 왜 둘 다 object??
// -> 배열을 확인하는 방법 ${Array.isArray(배열)}
console.log(`names 변수상자는 배열(true)인가요 객체(false)인가요? : ${Array.isArray(names)}`);  // true : names는 배열이다 !
console.log(`fishes 변수상자는 배열(true)인가요 객체(false)인가요? : ${Array.isArray(fishes)}`);  // true : fishes는 배열이다 !
console.log(`fish1 변수상자는 배열(true)인가요 객체(false)인가요? : ${Array.isArray(fish1)}`);  // false : fish1은 객체다 !


// 배열도 해봤고 객체도 해봤는데 함수를 변수상자에 집어넣었을 때의 자료형은 어떨까 ?
// print라는 변수상자에 화살표함수(익명함수)로 일단 넣어서 확인을 해보자
let print = () => {
    console.log(`print 함수 실행됨.`);
}
console.log(`print 변수상자의 자료형은? : ${typeof(print)}`); // 자료형 : function

// 자료형이라는 것은 string number boolean object(object/Array) function undefined ...  



// 배열에 추가하기 -------------------------------------------

// 배열에 값 추가하기 (배열에 추가하기 add, put 과 비슷함)
fishes.push({
    name : '물고기3',
    age : 3
})
console.log(`fishes 변수상자에 들어있는 칸의 개수 : ${fishes.length}`);



// 반복문-------------------------------------------

// 각 칸의 값을 하나씩 확인하기
// Java에서 반복문은 int i 였지만 javaScript에서는 let을 사용함 ! 
// 반복문마다 출력되는 부분에서 ${i+1} 처럼 따로 퍼텐셜을 주지않아도 자유롭게 사용가능
for (let i = 0; i < fishes.length ; i++) {
    console.log(`fishes의 ${i+1}번째 물고기 : ${fishes[i].name}`);
}

// 위의 for문은 안좋음!
// fishes의 배열 순서대로 나오게됨 
for (let fish of fishes) {
    console.log(`fishes의 물고기 : ${fish.name}`);
}

// 몇번째인지를 확인하기위해서는 바깥에서 무언가를 정의해주어야함
let i = 0;
for (let fish of fishes) {
    console.log(`fishes의 ${i+1}번째 물고기 : ${fish.name}`);
    i += 1;
}



// forEach() -------------------------------------------

// 앞에가 배열이면 forEach()를 사용할 수 있음
// 콜백함수를 forEach에다가 만들 수 있음 forEach에서 parameter는 value - index / 순서 !
fishes.forEach((value, index) => {
    console.log(`fishes의 ${index+1}번째 물고기 : ${value.name}`);
})

// 집안의 아이들이 있는데 그 아이들은 물고기들을 가지고있다 !
//  붕어빵 바로 찍기 -> 그 붕어빵에서도 붕어빵 바로 찍기
let house = {
    name : '우리집',
    children : [
        {
            name : '아이1',
            age : 11,
            fishes : [
                {
                    name : `1's 물고기`,
                    age : 1
                }
            ]
        },
        {
            name : '아이2',
            age : 12
        }
    ]
} 
// house 의 속성 : children / children은 배열이기 때문에 index사용 -> 그 인덱스의  첫번째 [0] (이게 children[0]) -> children은  
console.log(`집 안에 있는 첫번째 아이가 가지고 있는 첫번째 물고기의 이름은 어떻게될까요? : ${house.children[0].fishes[0].name}`);

// 34번 줄의 fish1을 가지고 함 그 객체의 속성을 .으로 불러와도 되지만 ['속성'] 으로 불러와도 됨
// fish1.name == fish1['name']
console.log(`fish1 물고기의 이름 : ${fish1.name}`);
console.log(`fish1 물고기의 이름 : ${fish1['name']}`); // 이걸 왜 해요? -> fish1에 name이랑 age가 있는데 사용자가 뭘 선택할지 몰라서 그걸 알려주려는듯?

let attrName = 'age';
console.log(`fish1 물고기의 나이 : ${fish1[attrName]}`); // Line 118의 ['name'] 부분을 age로 바꿀 수 있음 !

/**
 * console.log(`집 안에 있는 첫번째 아이가 가지고 있는 첫번째 물고기의 이름은 어떻게될까요? : ${house.children[0].fishes[0].name}`);
 * 이거를
 * let attrName = 'age';
 * console.log(`fish1 물고기의 나이 : ${fish1[attrName]}`);
 * 이거처럼 바꿀 수 있겠네
 */

let attr1 = 'children';
let attr2 = 'fishes'
let attr3 = 'name';
console.log(`집 안에 있는 첫번째 아이가 가지고 있는 첫번째 물고기의 이름은 어떻게될까요? : ${house[attr1][0][attr2][0][attr3]}`);
// house - children[0] -> fishes[0] -> name 인데 너무 복잡함.




// 객체의 속성(JSON - JavaScript) -------------------------------------------

// 객체안의 속성을 모두 볼 수 있는 방법?
// 붕어빵(객체) 안에 들어있는 속성들을 글자로 바꿔주기 -> JSON 포멧 (자바스크립트의 객체를 글자로 바꾼 것_복원도 가능) + ('로 들어가있던 것들이 "로 바뀜)
let houseInfo = JSON.stringify(house);
console.log(`house 정보 -> ${houseInfo}`);

// JSON의 형식을 다시 자바스크립트에서 쓰던대로 만들어줌 (JSON.parse ( [JSON형식이었던 것] ) )
let house2 = JSON.parse(houseInfo);
console.log(`hosue2의 이름 : ${house2.name}`);



// 해시테이블 -------------------------------------------

// 해시테이블 사용하기
let map = new Map();

// 첫번째 칸의 key는 '강아지' value는 { name, age } 
map.set('강아지', {
    name : '강아지1',
    age : 1
})

// 두번째 칸의 key는 '고양이' value는 { name, age }
map.set('고양이', {
    name : '고양이1',
    age : 2
})

let dog = map.get('강아지');  // key값을 이용하여 dog라는 변수상자에 할당함
console.log(`map에 있는 강아지는 : ${dog.name}`);


// 앞에서 했던 방법과 의미는 같음 그러나 위의 방법이 더 좋음 !
// 내장 메서드도 적을 뿐더러 기본 객체의 키와 중복될 가능성이 있기 때문에 권장되지 않음 // Map은 중복될일이 X
let map2 = {}
map2['강아지'] = {
    name : '강아지1',
    age : 1
}
map2['고양이'] = {
    name : '고양이1',
    age : 2
}
let dog2 = map2['강아지'];
console.log(`강아지의 이름은 : ${dog2.name}`);








