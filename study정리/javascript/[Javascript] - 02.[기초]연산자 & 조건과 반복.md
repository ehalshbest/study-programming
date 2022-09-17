# [Javascript] - 02.[기초]연산자 & 조건과 반복

* ___사칙 연산자___
  - \+ (더하기) 
  - \- (빼기)
  - \* (곱하기)
  - / (나누기)
  - % (나머지)
  - ** (거듭제곱)
  - 우선순위
    - +,- < *, /
    ```javascript
    let num = 10;
    num = num + 5; // num += 5; 이런게 축약으로 사용 가능.
    console.log(num);
    let result = num--; // 후치연산이라 result에는 감소된 값이 저장안됨.
    console.log(result);
    let result = --num; // 선치연산이라 result에는 감소된 값이 저장됨.
    console.log(result);
    ``` 

* ___비교 연산자___
  - < [ 크다 ]
  - \> [ 작다 ]
  - <= [ 크거나 같다 ]
  - \>= [ 작거나 같다 ]
  - == [ 같다, 동등연산자 ]
  - != [ 다르다 ]
  - === [ (Type까지)같다, 일치 연산자 ]
    ```javascript
    const a = 10;
    const b = 20;
    console.log(a < b); // true
    console.log(a > b); // false
    console.log(a == b); // false
    console.log(a != b); // true
    console.log(a === b); // false

    // 가금적 동등연산자가 아닌 일치연산자로 타입까지 비교하자!!
    const c = 10;
    const d = '10';
    console.log(c == d); // true
    console.log(c === d); // false
    ```

* ___논리 연산자___
  - || (OR)
    - 하나만 true여도 true 그렇지 않으면 false
    - 평가는 왼쪽부터 ( true가 성립되면 이후 평가는 하지 않는다.)
  - && (AND)
    - 모두 true인 경우 true 그렇지 않으면 false
    - 평가는 왼쪽부터 ( false가 성립되면 이후 평가는 하지 않는다.)
  - ! (NOT)
    - ture / false 인값을 반대값으로 평가한다.
    - true -> false, false -> true
  ```javascript
    const name = 'ehalshbest';
    const age = 30;

    if( name === 'Tom' || age > 19 ) {
	    console.log('통과'); // 하나만 true여도 실행
    }

    if( name === 'ehalshbest' && age > 19 ) {
	    console.log('통과'); // 모두 true여야 실행.
    } else {
	    console.log('집에 가'); // 그렇지 않으면 실행.
    }

    const age = Number(prompt('나이가 ?'));
    const isAdult = age > 19;
    if( !isAdult ) { // 반대값으로 평가한다.
	    console.log('집에 가');
    } else {
	    console.log('통과');
    }
    ```


* ___조건과 반복___
  - 조건(if ~ else if ~ else)문
  ```javascript
    /*///
    if( 조건1 ) {
      조건 1에 해당 하는 경우 실행.
    } else if( 조건1 ) {
      조건 2에 해당 하는 경우 실행.
    } else {
      조건 1, 2에 해당하지 않는 경우 실행.
    }
    //*///

    const age = 30;
    if( age < 19 ) {
      console.log('환영 합니다.');
    } else if ( age == 19 ) {
	    console.log('수능 잘치세요.');
    } else {
	    console.log('안녕히 가세요');
    }
    ```

  - 반복(for)문
  ```javascript
  /*///
  for( 초기화; 조건; 연산 ) {
	   반복할 코드
  }
  => 한번 초기화 이후 [조건이 true 반복할 코드 실행 후 연산] 행위를 조건이 false일때까지 반복함
  //*///

  // 0 ~ 9 까지 출력.
  for( let i = 0; i < 10; i++ ) {
	  console.log(i);
  }
  ```
  - 반복(while)문
  ```javascript
  /*///
  while( 조건 ) {
	   반복할 코드
     조건이 빠져나올 코드가 필요.(없다면 무한 루프)
  }
  조건을 만족할 경우 코드가 반복 실행된다.
  //*///

  // 0 ~ 9 까지 출력.
  let i = 0;
  while( i < 10 ) {
    console.log(i);
    i++; // 조건을 빠져나올 코드, 없다면 무한 루프
  }
  ```
  - 반복(do ~ while)문
  ```javascript
  /*///
  do {
     반복할 코드
     조건이 빠져나올 코드가 필요.(없다면 무한 루프)
  } while( 조건 );
	코드를 먼저 실행하고 조건을 나중에 체크하기때문에 코드가 최소 한번은 무조건 실행된다.
  //*///

  // 0 ~ 9 까지 출력.
  let i = 0;
  do {
    console.log(i);
    i++; // 조건을 빠져나올 코드, 없다면 무한 루프
  } while( i < 10 );
  ```

  - break; (멈추고 빠져나온다.)
  ```javascript
  while( true ) {
    let answer = confirm('계속할까요?');
    if( !answer ) {
      console.log('멈추고 빠져나옴');
	    break;
    }
  }
  ```

  - continue; (멈추고 다음 반복을 진행.)
  ```javascript
  for( let i = 0; i < 10; i++ ) {
	  if( i % 2 ) {
	  	console.log('멈추고 다음 반복으로 진행!');
	  	continue;
	  }
	  console.log('짝수만 출력 : ', i);
  }
  ```

  - 조건(switch ~ case)문
  ```javascript
    /*///
    switch(평가) {
      case 값1:
        평가 == 값1인 경우 실행.
        break; // 없다면 break 문을 만날때까지 이후 코드 실행.
      case 값2:
        평가 == 값2인 경우 실행.
      default:
        평가에 해당하는 값이 없는 경우 실행.
    }
    //*///

    let fruit = prompt('무슨 과일을 사고 싶나요?');
    switch(fruit) {
	    case '사과' : 
		    console.log('100원 입니다.');
		    break;
	    case '바나나' : 
		    console.log('200원 입니다.');
	      break;
	    case '키위' : 
		    console.log('300원 입니다.');
	      break;
	    case '멜론' : 
	    case '수박' : 
		    console.log('400원 입니다.');
	      break;
      case '복숭아' : 
		    console.log('500원 입니다.');
	      break;
      default:
		    console.log('안파는 과일입니다.....');
        break;
    }
    ```
