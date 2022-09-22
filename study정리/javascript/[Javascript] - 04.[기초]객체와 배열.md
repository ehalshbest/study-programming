# [Javascript] - 04.[기초]객체 와 배열

* ___객체(Object)___
  - 정의 방식
    > const 객체명 = {  
     프로퍼티(key:value),  
    }  

    ```javascript
    const superman = {
	    name:'clark',
	    age:33,
    }
    console.log(superman);

    console.log(superman.birthDay); // 없는 프로필 사용 , undefined

    // in 연산자를 사용하면 프로퍼티 유무를 알 수 있다.
    console.log('birthDay' in superman); // fasle
    console.log('age' in superman); // true

    //for ... in 반복문을 사용하면 객체를 순회하면서 값을 얻어올 수 있다.
    for( let key in superman ) {
      console.log(`${key} : ${superman[key]}`);
    }
    ``` 
  - method
    - 객체 프로퍼티로 할당된 함수
    - 화살표함수로 선언하는건 좋지 않다. (예 this가 객체가 아니라 윈도우를 가르키게 된다.)
    > const 객체명 = {  
        함수명:function(){  // function 키워드 생략가능
        함수 기능  
      }
    }  
    ```javascript
    const superman = {
	    name:'clark',
	    age:33,
      fly:function(){
        console.log('하늘을 날다.!!');
      },
      walk() {
        console.log('땅위를 걷다');
      }
    }
    superman.fly();
    superman.walk();
    ``` 

  - this
    - 객체 자기 자신을 가르킨다.
    - 객체 내에서 프로퍼티를 사용할때는 this를 사용하는게 좋다.
    ```javascript
    let user = {
	    name:'ehalshbest',
	    age:33,
      say:function(){
        console.log(`HI ${this.name}`);
      }
    }
    user.say();
    let man = user;
    user = null;
    man.say();
    ``` 



* ___배열(Array)___
  - 순서가 있는 리스트
  - 인덱스는 0부터 시작( 배열명[index]  로 접근 가능 )
  > let 배열명 = [요소1, 요소2, 요소3]   
  - 요소로 숫자, 문자, boolean, 객체 함수 등등 다양하게 넣을 수 있다.
    ```javascript
    let arr = [
      '철수',
      30,
      false,
      {
        name:'철수',
        age:30,
      },
      function() {
        console.log('배열의 요소로 숫자, 문자, boolean, 객체 함수 등등 다양하게 넣을 수 있다.');
      }
    ]

    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    ``` 
    - 배열 조작
      ```javascript
      let days = ['월', '화', '수'];
      console.log(days);

      days[1] = 'tue'
      console.log(days);

      console.log(days.length); // 개열의 길이, 배열이 가지고 있는 요소의 개수 반환.

      days.push('목');  // 요소를 뒤에서 부터 추가한다.
      console.log(days);

      days.unshift('일'); // 요소를 앞에서 부터 추가한다.
      console.log(days);

      days.pop(); // 요소를 뒤에서 부터 꺼낸다.
      console.log(days);

      days.shift(); // 요소를 앞에서 부터 꺼낸다.
      console.log(days);
      ``` 


