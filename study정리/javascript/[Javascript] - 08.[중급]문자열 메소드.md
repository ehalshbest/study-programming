# [Javascript] - 08.[중급]문자열 메소드

* ___유용한 메소드___
  ```javascript
  // length 문자열 길이
  let desc = 'Javascript 공부';
  console.log(desc.length); 

  // [] 인덱스 연산자로 접근 가능 readonly 변경은 불가능
  console.log(desc[0]); // J
  console.log(desc[1]); // a
  desc[0] = 'T';
  console.log(desc); // 변화없음


  let desc = "Hi guys, Nice to meet you.";
  // toUpperCase() : 소문자 -> 대문자로 변경.
  console.log(desc.toUpperCase()); // "HI GUYS, NICE TO MEET YOU."
  // toLowerCase() : 대문자로 -> 소문자로변경.
  console.log(desc.toLowerCase()); // "hi guys, nice to meet you."
  // indexOf(text) : 포함된 문자의 첫번째 위치를 반환. 0부터, 찾는 문자가 없으면 -1 반환
  console.log(desc.indexOf('to')); // 14
  //includes(text) : 문자가 포함되어있으면  true , 없으면 fase 반환
  console.log(desc.includes('to')); // true
  console.log(desc.includes('gurl')); // fase

  // slice(n, m) : n부터 m까지 반환 , m값이 없으면 끝까지, m값이 양수면 첫번째부터 음수면 끝에서부터
  let desc = "abcdefg";
  console.log(desc.slice(2)); // "cdefg"
  console.log(desc.slice(0,5)); // "abcde"
  console.log(desc.slice(2,-2)); // "cde"

  // substring(n, m) : n과 m사이를 반환, n과 m을 바꿔도 동작함, 음수는 0으로 인식
  let desc = "abcdefg";
  console.log(desc.substring(2,5)); // "cde"
  console.log(desc.substring(5,2)); // "cde"

  // substr(n, m) : n부터 시작 m개를 반환.
  let desc = "abcdefg";
  console.log(desc.substr(2,5)); // "cdefg"
  console.log(desc.substr(5,2)); // "fg"

  //trim() : 앞 뒤 공백 제거 , 보통 사용자로부터 문자열을 입력받았을때 사용
  let desc = " abcdefg  ";
  console.log(desc.trim()); // "abcdefg"

  // repeat(n) : 문자열을 n번 반복
  let desc = "Good!";
  console.log(desc.repeat(3)); // "Good!Good!Good!"

  // 문자열 비교 "a" < "c" : 아스키코드같으호 비교  

  // 아스키코드 확인
  console.log("a".codePointAt(0)); // 97
  console.log(String.fromCodePoint(97)); // "a"

  ``` 
  