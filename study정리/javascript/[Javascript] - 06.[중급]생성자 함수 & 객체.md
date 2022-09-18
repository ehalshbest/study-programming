# [Javascript] - 06.[중급]생성자 함수 & 객체

* ___생성자 함수___
  - 비슷한 형태의 객체를 여러개 만들어야하는 경우, 유용하게 사용됨.
  - 함수 명 첫글자를 대문자로 하는게 관례
  - 사용은 var 변수 = new 함수명();
  ```javascript
  function User(name, age) {
  //this = {}; => 내부적으로 동작하지만 실제로 코드에 없다.
  
  this.name = name;
	this.age = age;
  
  this.sayName = function() {
    console.log(this.name);
  }
  
  // resutn this; => 내부적으로 동작하지만 실제로 코드에 없다.
  }

  let user1 = new User('철수', 30);
  let user2 = new User('영희', 25);
  let user3 = new User('영철', 15);

  console.log(user1);
  console.log(user2);
  console.log(user3);

  user1.sayName();
  user2.sayName();
  user3.sayName();
  ``` 
  
* ___Compute property___
  - 계산된 프로퍼티
  - 객체의 프로터티에 변수에 활당된 값이나 연산값을 사용 ( '[변수 or 연산]')
  ```javascript
  let a = 'age';

  const user = {
	  name : 'ehalshbeset',
	  [a] : 30, // Compute property => age : 30
	  [1 + 4] : 5 // Compute property => 5 : 5
  }

  console.log(user);
  /*/// [Object Object]
  {
	  "5":5,
	  "name":"ehalshbeset",
	  "age"30
  }
  로 출력됨//*///
  ``` 

* ___유용한 객체 메소드___
  - Object.assign(): 객체 복사 or 병합
    ```javascript
    // 객체 복사 ( Object.assign({}, 객체) ) =>{} 빈객체에 객체를 복사하고 리턴
    const user = {
	   name : 'ehalshbeset',
	   age : 30,
    }

    const newUser = Object.assign({}, user);
    newUser.name = "bestman"; // 변경해도 user의 name이 변경되지 않는다.
    console.log(user);
    console.log(newUser);

    // 객체 병합 ( Object.assign(객체1, 객체2, ...객체n) ) => 객체1에 (객체2 ~ n) 병합
    const user = {
	    name : 'ehalshbeset'
    }
    const info1 = {
	    age : 30,
    }
    const info2 = {
	    gender : 'male',
    }

    Object.assign(user, info1, info2);
    console.log(user);
    ``` 
  - Object.keys() : 객체의 Key를 배열로 반환.
    ```javascript
    const user = {
	    name : 'ehalshbeset',
	    age : 30,
	    gender : 'male',
    }
    console.log(Object.keys(user));
    ``` 
  - Object.values() : 객체의 Value를 배열로 반환.
    ```javascript
    const user = {
	    name : 'ehalshbeset',
	    age : 30,
	    gender : 'male',
    }
    console.log(Object.values(user));
    ``` 
  - Object.entries() : 객체의 Key/Value를 배열로 반환.
    ```javascript
    const user = {
	    name : 'ehalshbeset',
	    age : 30,
	    gender : 'male',
    }
    console.log(Object.entries(user));
    ``` 
  - Object.fromEntries() : Key/Value배열을 객체로 반환. (Object.entries() 의 반대 기능)
    ```javascript
    const arr = [
	    ["name","ehalshbeset"],
	    ["age",30],
	    ["gender","male"],
    ]
    console.log(Object.fromEntries(arr));
    ``` 

* ___심볼(Symbol)___
  - 유일한 식별자.
  - 객체의 property key는 문자형과 심볼형 2개를 가진다.
  - 심볼형은 Computed property 형태로 추가할 수 있다.
  ```javascript
  const a = Symbol('설명');
  const b = Symbol('설명');
  // 설명을 붙여주면 debugging할때 편함.
 
  console.log(a);
  console.log(b);
 
  console.log(a === b); // false, 생긴건 똑같지만 다르다.

  const id = Symbol('id');
  const user = {
	  name : "ehalshbest",
	  age : 30,
	  [id] : 'myid' // Compute property 로 추가
  }
  console.log(user);
 
  // Object.keys(), Object.values(), Object.entries() for( let kv in user ) => Symbol은 제외된다.
  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));
 
  // Object.getOwnPropertySymbols(객체) => 객체의 Symbol을 반환.
  console.log(Object.getOwnPropertySymbols(user));
 
  // Reflect.ownKeys(객체) => 객체의 Symbol을 포함한 모든 key값을 반환.
  console.log(Reflect.ownKeys(user));
  ```
  - 사용처
    - 객체에 유일한 프로퍼티를 만들고 싶을때
    - 이미 만들어진 객체가 있고 객체를 사용하는 로직이 있을때, 로직에 영향없이 프로퍼티를 추가하고 사용하고 싶을때
    ```javascript
    // 다른 개발자가 만들어 놓은 객체
    const user = {
	    name : 'ehalshbest',
	    age : 30,
    };
 
    // 내가 작업 ( 이미 선언된 객체에 property를 직접 추가하지 않고 Symbol을 통해 property 추가하여 기존 로직에 영향을 주지 않는다.)
    const showName = Symbol('function show name');
    user[showName] = function() {
      console.log(this.name);
    }
    user[showName]();
 
 
    //다른 개발자가 만들어 놓은 객체 사용 코드
    for( let key in user ) {
	    console.log(`key : ${key}, value : ${user[key]}`);
    }
    ```
  - Symbol.for()
    - 전역 심볼
    - 없으면 만들고, 있으면 가져오기 때문에 하나의 심볼만 보장 받을 수 있다.
    - Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
    - Symbol.for 메소드는 하나를 생성한 뒤 Key를 통해 같은 Symbol을 공유
    ```javascript
    const id1 = Symbol.for('id');
    const id2 = Symbol.for('id');
    console.log(id1 === id2); // ture;

    // Symbol.for의 생성시 이름을 반환, Symbol.keyFor(id1);
    const id1 = Symbol.for('id');
    const id2 = Symbol.for('id');
    console.log(Symbol.keyFor(id1));
    console.log(Symbol.keyFor(id1));
    ```