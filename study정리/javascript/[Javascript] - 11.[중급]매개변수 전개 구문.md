# [Javascript] - 10.[중급]매개변수 전개 구문

* ___매개변수___
  - 인수 전달
    - JavaScript는 인수 전달시 매개변수 개수를 지킬 필요가 없다.
    ```javascript
    function showName(name) {
	    console.log(name);
    }

    showName(); // undefined
    showName('금'); // "금"
    showName('금', '빛'); // "금", 2번째 인수는 무시됨.
    ```

  - arguments
    - 함수로 넘어온 모든 인수에 접근 가능
    - 함수내에서 이용 가능한 지역 변수
    - length / index
    - Array형태의 객체
    - 배열의 내장 메서드 없음(forEach, map)
    ```javascript
    function showName(name) {
	    console.log(arguments.length);
	    console.log(arguments[0]);
	    console.log(arguments[1]);
    }

    showName('금','빛'); // 2, "금", "빛"
    ```
  - arguments
    - ...매개변수이름(...names) 형태로 사용
    - 인자로 넘어온 파라미터를 배열로 받을 수 있다.
    - 매개변수의 가장 마지막에 위치해야 한다.
     ```javascript
    function showName(...names) {
	    console.log(names);
    }

    showName(); // [] 빈 배열
    showName('금'); // ['금']
    showName('금', '빛'); //  ['금', '빛']

    // 예) 전달된 모든 수를 더하자
    function add(...numbers) {
	    let result = 0;
	    numbers.forEach((num) => (result+=num));
	    //let result = numbers.reduce((prev, cur)=> prev + cur);
	    console.log(result);
    }

    add(1,2,3,4,5,6,7,8,9,10); // 55
    ```

* ___전개 구문(Spread syntax)___
  - 배열
    - 배열을 중간에 삽입하고 병합하는 형태를 간편하게 처리 가능.(push() / splice() / concat() 복잡)
    ```javascript
    let arr1 = [1,2,3];
	let arr2 = [4,5,6];
	let result = [...arr1, ...arr2];
	console.log(result); // [1,2,3,4,5,6]

	let result2 = [0, ...arr1, ...arr2, 7,8,9];
	console.log(result2); // [0,1,2,3,4,5,6,7,8,9]
    ```
  - 객체
    - 객체도 사용 가능.  
    ```javascript
    let user = { name:"Mike" };
    let info1 = { age:30 };
    let info2 = { gender:"male" };
    let fe = ["JS", "React"];
    let lang = ["korean", "english"];
    let mike = {
	    ...user,
	    ...info1,
	    ...info2,
	    skills:[...fe, ...lang],
    };
    console.log(mike);
    ```
  - 배열/객체 복제 기능
    ```javascript
    let arr1 = [1,2,3];
    let arr2 = [...arr1];
    console.log(arr2); // [1,2,3]

    let user1 = {name:"Mike", age:30}
    let user2 = {...user1};
    user2.name = "Tom";
    console.log(user1); // "Mike"
    console.log(user2); // "Tom"
    ```