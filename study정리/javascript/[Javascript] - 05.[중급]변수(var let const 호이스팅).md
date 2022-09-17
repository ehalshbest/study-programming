# [Javascript] - 05.[중급]변수(var let const 호이스팅)

* ___var / let / const___
  - var는 한번 선언되 변수를 다시 선언할 수 있다.(let/const은 안됨)
  ```javascript
  var name = 'aaa';
  console.log(name);

  var name = 'bbb';
  console.log(name);
  // 문제 없다.

  let name = 'aaa';
  console.log(name);

  let name = 'bbb'; // error
  console.log(name);
  ``` 
  - var는 선언 하기 전에 사용 할 수 있다.
  - var, let의 모든 선언은 호이스팅 되지만,
  - let은 Temporal dead zone 에서는 사용이 안된다.(할당을 받기전에는 사용 할 수 없다.)
  - var는 선언과 초기화가 동시에 된다.
  - let은 선언, 초기화, 할당이 따로 사용 가능하다.
  - const는 선언과 초기화 할당을 동시에 해야한다.
  - let/const는 Temporal Dead Zone에 영향을 받는다.
  ```javascript
  console.log(name); // undefined
  var name ='aaa'; 
  /*// 왜 문제가 없는가 내부적으로 아래처럼 호이스팅
  var name; // var 선언과 초기화가 동시에 된다.
  console.log(name); // 할당이 안됐으므로 undefiend
  name = 'aaa';
  //*//

  console.log(name1); // referenceError 
  let name1 ='aaa';
  /*// 왜 문제가 되는가 아래처럼 호이스팅
  let name; // let 선언만 됨.
  console.log(name); // 초기화가 안됐으므로 referenceError가 발생. Temporal Dead Zone 에서는 사용 할 수 없다.
  name = 'aaa';
  //*//

  const name2; // error , 선언 + 초기화 + 할당을 동시에 해야만 한다.
  name2 = 'aaa';
  ``` 
   - let/const는 블록스코프(if, for, function등 지역변수로 사용)
  - var는 함수스코프(함스 내에서만 지역변수로 사용)
  ```javascript
  for( let i = 0 ; i < 10; i ++ > ) {
    console.log(i);
  }
  console.log(i); // error, let은 블록 스코프 (for문 내에서 선언된 let 변수는 사용 불가능)

  const age = 30;
  if( 19 < age >) {
    var msg = '성인';
  }
  console.log(txt); // OK, var는 함수 스코프(if 내에서 선언되도 사용 가능)

  function add(num1, num2) {
    var result = num1 + num2;
    return result;
  }
  console.log(result); // error, var는 함수 스코프 (var가 유일하게 벗어날수없는 스코프가 함수)
  ```
  