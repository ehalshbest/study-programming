# [Javascript] - 10.[중급]구조분해할당

* ___구조분해할당구문___
  - Destructuring assignment
  -  배열나ㅣ나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
  -  배열 구조 분해 할당  
      > let [key1, key2] = arr;  
      ```javascript
      let [x, y] = [1, 2];
      console.log(x); // 1
      console.log(y); // 2

      // 해당하는 값이 없는경우 undefined
      let [x, y, z] = [1, 2];
      console.log(x); // 1
      console.log(y); // 2
      console.log(z); // undefined

      // default값을 부여할 수 있다.
      let [x, y, z = 3] = [1, 2];
      console.log(x); // 1
      console.log(y); // 2
      console.log(z); // 3

      // 중간에 건너띌수 있다.
      let [x, ,z] = [1, 2, 3];
      console.log(x); // 1
      console.log(z); // 3

      // 배열 구조 분해 응용 : 바꿔치기
      let a = 1;
      let b = 2;
      let tmp = a; // 임시 변수를 선언하여 값을 재활당하는 형태의 복잡한 구조
      a = b;
      b = tmp;
      console.log(`a : ${a}, b : ${b}`);

      // 위 코드를 (tmp 변수는 선언할 필요이)구조분해 할당으로 간단하게 구현할 수 있다, 
      [a, b] = [b, a];  
      console.log(`a : ${a}, b : ${b}`);
      ```  
  - 객체 구조 분해 할당
      > let [key1, key2] = {key1:value, key2:value};  
      ```javascript
      let {name, age} = {name:"ehalshbest", age :30};
      console.log(name); // "ehalshbest"
      console.log(age); // 30

      // 순서를 바꿔도 동일하게 동작
      let {age, name} = {name:"ehalshbest", age :30};
      console.log(name); // "ehalshbest"
      console.log(age); // 30

      // 별칭을 줄수도 있다.
      let {name:userName, age:userAge} = {name:"ehalshbest", age :30};
      console.log(userName); // "ehalshbest"
      console.log(userAge); // 30

      // 해당하는 값이 없는경우 undefined
      let {name, age, gender} = {name:"ehalshbest", age :30};
      console.log(name); // "ehalshbest"
      console.log(age); // 30
      console.log(gender); // "undefined"

      // default값을 부여할 수 있다.
      let {name, age, gender = "male"} = {name:"ehalshbest", age :30};
      console.log(name); // "ehalshbest"
      console.log(age); // 30
      console.log(gender); // "male"
      ```  