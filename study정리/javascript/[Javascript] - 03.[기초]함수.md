# [Javascript] - 03.[기초]함수

* ___함수___
  - 중복되는 형태의 코드를 함수로 정의하여 사용(코드의 재활용)
  - 함수 호출 방법
    > 함수명(값);  
  - 함수 선언문
    > function 함수명(매개변수 = 디폴트값) {  
      함수 내용;  
      return 반환값;  
    }  
    함수명 : javascript에서는 첫글자를 소문자로 처리하는 경우가 많다.  
    return 반환값: 생략하거나 return만 있는 경우 undefined를 반환한다.  
    매개변수 : 매개변수가 없거나 여러개를 선언할 수 있다. 호출시 값을 넣지 않으면 undefined값을 가진다.  
    매개변수 = 디폴트값 : 함수 호출시 매개변수값을 주지 않은 경우 정의된 디폴트값을 가진다.  
    - 함수의 정의 코드 위치가 어디에 있어도 호출 사용 가능.(함수 선언문은 hoisting 대상)
      - Javascript의 코드는 기본적으로 위에서 아래로 순차적으로 실행되는 인터프리터 언어.
      - 호이스팅(hoisting) : 실행전 내부적으로 코드의 유효 범위를 최상단에 선언하는 알고리즘.
    ```javascript
    let msg = 'Welcome';
    function sayHello(name) {
	    let msg = 'Hello';
	    if( name ) {
		    msg += `, ${name}`;
      }
	    console.log(msg);
    }

    sayHell('ehalshbest'); // "Hello ehalshbest"  출력
    console.log(msg); // "Welcome" 출력(전역 변수 msg가 사용됨)
    ``` 

  - 함수 표현식
    - 이름없는 암수를 선언하고 변수에 할당
    - 함수의 정의 코드가 함수 호출 코드 보다 위치상 위에 있어야만 호출 사용 가능.
    ```javascript
    let sayHello = function() {
	    console.log('Hello');
    }

    sayHell(); // "Hello"  출력
    ``` 
  
  - 화살표 함수(arrow function)
    - 함수 표현식을 좀더 간단하게 표현하는 형태.
    ```javascript
    // 함수 표현식
    let add = function(num1, num2) {
	    return num1 + num2;
    }

    // 화살표 함수로 변경 1 (function 키워드 삭제하고 => 를 붙여준다.)
    let add = (num1, num2) => {
	    return num1 + num2;
    }

    // 화살표 함수로 변경 2 (return문이 한줄인 경우 더 간결하게 표현 가능. )
    let add = (num1, num2) => num1 + num2;

    ``` 