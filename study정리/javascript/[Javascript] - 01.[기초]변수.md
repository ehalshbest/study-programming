# [Javascript 기초] - 01.변수

* ___Javascript 공부를 위한 도구___
  - codepen.io 
    - 웹을 공부할때 유용한 웹에서 제공하는 개발 도구(문법공부하기에 딱 인듯!!)  
    ![캡처](_Img/codepen-io.PNG)


* ___변수___
  - 예약어 사용 불가
  - 문자, 숫자, $, _ 조합으로 사용 가능
  - 첫글자 숫자 상용 불가
  - const : 변하지 않는 변수(혹 상수) 선언시 사용. 상수로 사용한다면 관례상 대문자로 표기.
  - let : 변할수 있는 변수 선언시 사용.
    ```javascript
      name = "ehalshbest"; //문자형
      age = 30; //정수형

      // 위 처럼 그냥 변수를 정의해서 사용하는 경우 위험.
      // 다른 개발자가 의도치 않게 다시 선언해서 사용 할 수 있다.
      name = "yellow"; //문자형
      // 방지 하기 위해서 변수 선언시 확실하게 keyword(let, const)로 선언
      cosnt name = "ehalshbest";
      let age = 30;
    ``` 

    - 문자형(String)
      - "" , '', `` 로 값을 묶어줘서 선언한다.
      ```javascript
      cosnt name1 = "ehalshbest";
      cosnt name2 = 'ehalshbest';
      cosnt name3 = `ehalshbest`;
      // `` 를 사용하는 경우 조합해서 사용 가능하다.
      const name4 = `내 이름은 ${name1} 입니다.`;
      const age = `내 나이는 ${30 + 1} 입니다.`;
      ```  

    - 숫자형(Number)
      ```javascript
      let age = 30; // 정수형
      const PI = 3.14; // 실수형
      
      // age / 0 => infinity
      // 문자 / 0 => NaN
      ``` 

    - Boolean
      - true / false
      ```javascript
      const a = true;
      const b = false;
      ``` 

    - null
      - 존재하지 않는다.
      - 객체가 아니다. 근데 typeof는 object형이다.(모순)
      ```javascript
      let user = null;
      console.log(user);
      ``` 

    - undefined
      - 선언은 됐지만 값이 할당되지 않았다.
      ```javascript
      let age;
      console.log(age);
      ``` 

    - NaN
      - 숫자가 아니다.
      ```javascript
      const a = "공부하자";
      let b = a / 0;
      console.log(b);
      ``` 

   - infinity
      - 무한
      ```javascript
      const a = 100;
      let b = a / 0;
      console.log(b);
      ``` 

* ___형변환___
  - 자동 변환
    - 문자형 + 문자형, 문자형 + 숫자형
    - 문자형 + 숫자형 인경우 숫자형이 문자형으로 자동 형변환 됨
    ```javascript
      const name = "ehalshbest";
      const a = "나는";
      const b = "입니다.";
      console.log(a + name + b);
      // => 나는 ehalshbet 입니다.

      const age = 30;
      console.log(a + age + "살" + b);
      // => 나는 30살 입니다.
    ``` 

  - 묵시적 형변환
    - 개발자가 명시적으로 자료형을 변환.
      - Number()
        - ()안의 값을 숫자형으로 변환.
        ```javascript
        console.log(
	        Number("123asdfasdfsaf"), // 숫자형태와문자형태가섞여있거나 숫자형태가 없는경우 NaN으로 변환됨
	        Number("123"), // 123
	        Number(true), // 1
	        Number(false), // 0
	        Number(null), // 0
	        Number(undefined), // NaN
	        Number(0), // 0
	        Number('0'), // 0
	        Number(''), // 0
	        Number(' '), // 0
        );
        ``` 
      - String()
        - ()안의 값을 문자형으로 변환.
        ```javascript
        console.log(
	        String(3),
	        String(true),
	        String(false),
	        String(null),
	        String(undefined)
        );
        ```  
      - Boolean()
        - ()안의 값을 true / false 로 변환.
        ```javascript
        console.log(
	       	Boolean(1), // true
	        Boolean(123), // true
	        Boolean("javascript"), // true
	        Boolean(0), // false
	        Boolean(""), // false
	        Boolean(null), // false
	        Boolean(undefined), // false
	        Boolean(NaN) // false
        );
        ```
  - 묵시적 형변환을 사용해야 하는 이유
    - 의도하지 않은 버그 발생.
    ```javascript
    // prompt는 값을 문자형으로 반환한다.
    const mathScore = prompt("수학 몇점?"); // 문자형
    const engScore = prompt("영어 몇점?"); // 문자형
    const result = (mathScore + engScore) /2; // (나누기 연산에 의해서 자동형 변환)
    console.log(result); // 의도하지 않은 값이 나옴.
    ``` 
    ```javascript
    // 명시적으로 숫자형으로 변환처리
    const mathScore = Number(prompt("수학 몇점?")); // 숫자형으로 형변환
    const engScore = Number(prompt("영어 몇점?")); // 숫자형으로 형변환
    const result = (mathScore + engScore) /2; // (나누기 연산에 의해서 자동형 변환)
    console.log(result); // 의도하지 않은 값이 나옴.
    ``` 

  - typeof
    - 자료형을 반환한다.
    - typeof 자료형 or 변수
    - typeof(자료형 or 변수)
    ```javascript
    console.log(typeof 3); // => "number"
    console.log(typeof(4)); // => "number"
    console.log(typeof "xxx"); // => "string"
    console.log(typeof true); // => "boolean"
    console.log(typeof null); // => "object"
    console.log(typeof undefined); // => "undefined"
    ``` 

* ___대화 상자___
  - 장점
    - 간단하게 사용
  - 단점
    - 스크립트 일시 정지 됨.
    - 스타일링 불가.
  - alert()
    - 알려줌
    ```javascript
    alert('경고');
    ```  
  - prompt()
    - 입력받음, 그냥 취소하면 null값. 확인시 입력받은 값 반환.
    - prompt('메시지', '입력값이 없는경우 기본값');
    ```javascript
    const name = prompt('이름을 입력하세요!!', '이름없음');
    console.log(name);
    ```  
  - confirm()
    - 확인 받음
    - 확인(true 반환) / 취소(false 반환)
    ```javascript
    const run = confirm('정말 실행합니까?');
    console.log(run);
    ``` 

