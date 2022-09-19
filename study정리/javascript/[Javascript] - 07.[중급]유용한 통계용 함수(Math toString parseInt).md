# [Javascript] - 07.[중급]유용한 통계용 함수(Math toString parsInt)

* ___유용한 통계용 함수___
  ```javascript
  // toString() : 숫자를 문자로 바꿔준다. 괄호안에 진법을 넣으면 해당 진법으로 바꿔준다.
  let num = 10;
  console.log(num.toString()); // "10"
  console.log(num.toString(2)); // "1010"
  let num2 = 255;
  console.log(num2.toString(16)); // "ff"


  // Math.ceil() : 올림
  console.log(Math.ceil(10.1)); // 11
  console.log(Math.ceil(10.9)); // 11

  // Math.floor() : 내림
  console.log(Math.floor(10.1)); // 10
  console.log(Math.floor(10.9)); // 10

  // Math.round() : 반올림
  console.log(Math.round(10.1)); // 10
  console.log(Math.round(10.9)); // 11

  // toFixed();// 소숫점자리수 표현, 문자형으로 반환. Number로 형변환 필요.
  let num = 30.156;
  console.log(num.toFixed(0)); // 30 소수점자리수가 0값이므로 정수부분만 반환.
  console.log(num.toFixed(2)); // 30.16 ( 자리수가 작은 경우 반올림해서 표현)
  console.log(num.toFixed(6)); // 30.156000 넘치는 자수는 0으로 채워준다.

  // isNaN() ; 숫자여부확인.
  let x = Number('x');
  console.log(x == NaN); // false
  console.log(x === NaN); // false
  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false
  console.log(isNaN(x)); // true
  console.log(isNaN(3)); // false


  // paseInt(); 문자를 숫자로, Number와 다른점은 문자와 혼용되어 있어도 동작됨.
  let dis = '10km';
  console.log(parseInt(dis)); // 10
  console.log(Number(dis)); // NaN

  let color = 'f3';
  // 숫자로 시작하지 않으면 Nan
  console.log(parseInt(color)); // NaN
  // 두번째 파라미터로 진법을 받을 수 있다. 숫자로 시작하지 않아도 진법에 해당하면 숫자로 변환 가능.
  console.log(parseInt(color, 16)); // 243 
  // 10진수->2진수로 변환할때도 사용됨.
  console.log(parseInt('11', 2)); // 3

  // parseFloat(); paseInt와 동일하게 동작하지만, 부동소수점을 반환.
  let persent = '19.7%';
  console.log(parseFloat(persent)); // 19.7

  //Math.random(): 0~1사이의 무작위 숫자 반환
  // 1~100 사이 숫자 반환.
  let dice = Math.floor(Math.random() * 100) + 1; 
  console.log(dice);
  // Math.random() => 0~1사의 값 예) 0.6828...
  // * 100 => 0 ~ 100 이하의 값으로 변환 예) 0.6828 * 100 = 68.28...
  // Math.floor() => 소수점 이하는 버림 처리. 예) 68.28... = 68
  // + 1 => Math.random() 값이. 0.0023... 이런식으로해서 0값이 나올 수 있으므로 최소값을 1로 처리하기 위해서

  // Math.max(값1, ... ) : 값중 최대값 반환.
  console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54)); // 10
  // Math.min(값1, ... ) : 값중 최소값 반환.
  console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54)); // -1

  // Math.abs() : 절대값
  console.log(Math.abs(1)); // 1
  console.log(Math.abs(-1)); // 1

  // Math.pow(n, m) : n의 m승 값(거듭제곱)
  console.log(Math.pow(2, 3)); // 8
  console.log(Math.pow(2, 10)); // 1024

  // Math.sqrt() : 제곱근, 양수만 허용가능, 음수, 문자열은 NaN
  console.log(Math.sqrt(16)); // 4
  console.log(Math.sqrt(-16)); // NaN
  console.log(Math.sqrt('aa')); // NaN
  ``` 
  