// 2025-07-28
// keyword : 함수상자(콜백함수) 

// 함수상자
// A개발자 : 더하기 함수상자를 만들기 : a, b라는 2개의 위쪽 구멍을 만들어 두었음
function add(a, b) {
    return a + b;
}

// B개발자 : A개발자가 만든 더하기 함수상자의 위쪽 구멍은 2개라고 이미 정의되어있음
const a = 10;
const b = 20;

const result1 = add(a, b); // 6번 line 과 14번 line의 a와 b는 다름 ! 6번 : 함수상자 안에서 보는 a와 b, 14번 : 11,12번에서 들어온 a와 b
console.log(`더하기 결과 : ${result1}`);

// 콜백함수
// 함수를 일급객체로 다룬다 -> 함수를 변수에 할당할 수 있다 => 함수상자를 변수상자에 넣을 수 있다

// 익명함수
const add2 = function (a, b) {
    return a + b;
}
// 화살표함수
const add3 = (a, b) => {
    return a + b;
}
// 콜백함수
// A개발자가 콜백함수를 사용하는 형태로 함수를 정의함
const add4 = (a, b, callback) => {
    callback(a + b);
}

// B개발자가 콜백함수를 사용함
// 위쪽 구멍으로 던져줄 값의 개수는 A개발자가 정의한 개수와 동일하게 맞춰줌
add4(a, b, (result1) => {
    console.log(`콜백함수 안에서 더하기결과 : ${result1}`)
})


// what is null?
// 우리가 잘 알고있는 붕어빵 
let fish1 = {
    name: '물고기1',
    age: 1
}
// null로 생성한 붕어빵
let fish2 = null;

// 콜백함수를 여러 개 연속해서 사용하는 경우
const add5 = (a, b, callback) => {
    /*
    // 이거를 입력하면 오류가 발생하는 메세지가 나올 수 있음 !
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        callback(`숫자를 입력해주세요`,null);
        return;
    }
    */
    const result = a + b;
    callback(null, result); // 콜백함수에 입력값을 2개로 받아보자 에러가있을 때는 첫번째 구멍, 정상적일때는 두번째 구멍
}

add5('10', 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }
    console.log(`더하기 결과 : ${result}`);
})

const divide5 = (a, b, callback) => {
    if (b == 0) {
        callback('두번째 값이 0 입니다.', null);
        return;
    }
    const result = a / b;
    callback(null, result);
}

divide5(200, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }
    console.log(`나누기 결과 : ${result}`);
})

// A개발자가 만들어 둔 더하기 함수와 나누기 함수가 있을 때,
// 나누기 함수를 실행한 결과값에 다른 값을 더하고싶은 경우
divide5(200, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }

    console.log(`2나누기 결과 : ${result}`);
    // 여기서 더하기 실행을 하고싶은거임
    add5(result, 10, (err, result) => {
        // divide에서 튀어나온 result와 err,result의 result는 다른 result임 !
        if (err) {
            console.log(`더하기 에러 발생 -> ${err}`);
            return;
        }
        console.log(`더하기 결과 : ${result}`);
    })
})


// 그래서 콜백함수를 왜 쓰는건데 ? ?????

const add6 = (a, b, callback) => {
    setTimeout(() => {
        const result = a + b;
        callback(null, result);
    }, 500) // setTimeout : 두번째 구멍에 들어간 시간 이후에 시작해줘(500ms : 0.5초)
}

const divide6 = (a, b, callback) => {
    setTimeout(() => {
        if (b == 0) {
            callback('두번째 값이 0 입니다.', null);
            return;
        }
        const result = a / b;
        callback(null, result);
    }, 1000)
}

// div6, add6은 그냥 밑에 시간을 
divide6(200, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }
    console.log(`div6나누기 결과 : ${result}`);
})
add6(10, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }
    console.log(`add6더하기 결과 : ${result}`);
})

divide6(200, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }

    console.log(`dib6나누기 결과 : ${result}`);
    // 여기서 더하기 실행을 하고싶은거임
    add6(result, 10, (err, result) => {
        // divide에서 튀어나온 result와 err,result의 result는 다른 result임 !
        if (err) {
            console.log(`더하기 에러 발생 -> ${err}`);
            return;
        }
        console.log(`ad6더하기 결과 : ${result}`);
    })
})

// async ~ await
// {return} -> new Promise()
const add7 = () => new Promise((resolve, reject) => {
    add6(a, b, (err, result) => {
        if (err) {
            reject(err); // new Promsie(X , O) 일 때 (에러가 있을 때 실행)
            return;
        }
        resolve(result);  // new Promsie(O, X) 일 때 (정상일 때 실행)
    })
})

const divide7 = (a, b) => new Promise((resolve, reject) => {
    divide6(a, b, (err, result) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(result);
    })
})

// 나누기를 먼저 하고 그 결과를 이용해서 더하기
const doCalc = async () => {
    try {
        const result1 = await divide7(200, 10)
        console.log(`doCalc 안에서 나누기 결과 : ${result1}`);

        const result2 = await add7(result1, 10);
        console.log(`doCalc 안에서 더하기 결과 : ${result1}`);
    } catch (err) {
        console.log(`doCacl 내부에서 에러발생 -> ${err}`);
    }

}
doCalc();

const trying = divide6(200, 10, (err, result) => {
    if (err) {
        console.log(`에러발생 -> ${err}`);
        return;
    }
    console.log(`8나누기 결과 : ${result}`);

    add6(result, 10, (err, result1) => {
        if (err) {
            console.log(`더하기 중 에러발생 : -> ${err}`);
            return;
        }
        console.log(`나누기 다음에 한 더하기 결과 : ${result1}`);
    })
}) 
// 200~214와 186~198을 비교해봤을 때 작동하는 것은 동일하지만 왜 굳이 promise를 만들어서 쓰는가 ?  -> async, await는 promise객체에 사용할 수있음
// : 만약 add나 divide처럼 콜백함수에 setTimeout과 같은 제어되는 것을 넣었을 때 순서에대한 예측이 어렵고 구조 또한 복잡하기 때문 ! 
// 지금 add함수는 0.5초, divdie함수는 1초 뒤에 실행되는건데 const doCalc를 보면 divide를 먼저하고 