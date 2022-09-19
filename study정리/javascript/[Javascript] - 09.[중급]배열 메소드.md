# [Javascript] - 09.[중급]배열 메소드

* ___유용한 메소드___
  ```javascript
  // splice(n, m) : 특정 요소(n번째 m개) 지움,0부터 시작, 삭제된 요소를 반환,
  let arr = [1,2,3,4,5];
  let result = arr.splice(1,2);
  console.log(result);
  console.log(arr); // [1,4,5]

  // splice(n, m, ...x) : 특정 요소(n번째 m개)를 지우고 (...x)추가
  let arr = [1,2,3,4,5];
  arr.splice(1,2,100,200);
  console.log(arr); // [1,100,200,4,5]

  // slice(n,m) : n부터 m까지 반환. 빈파라미터로 호출 배열이 복사됨.
  let arr = [1,2,3,4,5];
  console.log(arr.slice()); // [1,2,3,4,5]
  console.log(arr.slice(1,3)); // [2,3]

  // concat(arr2, arr3 ..) : 합쳐서 새 배열 반환
  let arr = [1,2];
  console.log(arr.concat([3,4],[5,6])); // [1,2,3,4,5,6]

  // forEach(fn) : 배열 반복
  let arr = [1,2,3,4,5];
  arr.forEach( (num, index, arr) => {
	  console.log(`[${index}] => ${num}`);
  });

  let arr = [1,2,3,4,5,1,2,3];
  //indexOf() : 왼쪽부터(첫음부터) 값을 찾아서 인덱스를 반환, 두번째인자는 해당 인덱스 부터 찾는다.
  console.log(arr.indexOf(3)); // 2
  console.log(arr.indexOf(3,3)); // 7
  //lastIndexOf() : 오른쪽부터(끝에서부터) 찾는다.
  console.log(arr.lastIndexOf(3)); // 7

  //includes() : 포함하는지 확인
  let arr = [1,2,3];
  console.log(arr.includes(2)); // true
  console.log(arr.includes(4)); // false

  //find(fn) : 조건에 만족하는 값을 찾는다. 첫번째 true값만 반환하고 끝, 없으면 undefined를 반환.
  let userList = [
	  {name: "a" , age : 30},
  	{name: "b" , age : 10},
	  {name: "c" , age : 20},
  ];
  const result = userList.find( (user) => {
	  if( 19 > user.age ) { return true; }
  	return false;
  });
  console.log(result); // {name : "b" , age : 10}

  //findIndex(fn) : 조건에 만족하는 인덱스를 찾는다. 첫번째 true값만 반환하고 끝, 없으면 -1
  let arr = [1,2,3,4,5];
  const result = arr.findIndex( (item) => {
	  return item % 2 === 0;
  });
  console.log(result); // 1

  // filter(fn) : 조건에 만족하는 모든값을 배열로 반환
  let arr = [1,2,3,4,5];
  const result = arr.filter( (item) => {
  	return item % 2 === 0;
  });
  console.log(result); // [2,4]

  // reverse() : 역순으로 재정렬
  let arr = [1,2,3,4,5];
  console.log(arr.reverse()); // [5,4,3,2,1]

  // map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환.
  let userList = [
	  {name: "a" , age : 30},
	  {name: "b" , age : 10},
	  {name: "c" , age : 20},
  ];

  let newUserList = userList.map((user, index) => {
	  return Object.assign({}, user, {
		  id: index + 1,
		  isAdult: user.age > 19,
	  });
  });

  console.log(newUserList);
  console.log(userList === newUserList); // false

  // join() : 배열을 원소를 합쳐서 문자열로 반환. 파라미터로 구분자를 넣어줄수 있다. 안넣으면 ,로 구분됨.
  let arr = ['안녕', '나야' , '금빛'];
  let result = arr.join(' ');
  console.log(result); // "안녕 나야 금빛"

  // Array.isArray() : 배열인지 아닌지?
  // Javascript에서 typeof 로는 구분이 불가능
  let obj = {
  	name : "ehalshebst", age:30
  };
  let arr = ["a","b", "c"];

  console.log(typeof obj); // "object"
  console.log(typeof arr); // "object"
  console.log(Array.isArray(obj)); // false
  console.log(Array.isArray(arr)); // true

  // sort(fn) : 정렬로직의 함수를 인자로 받아 배열 재정렬, 배열 자체가 변경됨.
  let arr = [27, 8, 5, 13];
  arr.sort((a, b) => {
	  console.log(a, b);
	  return a-b;
  });
  console.log(arr);

  // Lodash 라이브러리를 사용하자!! 
  // _.sortBy(arr):
  // https://lodash.com/

  // reduce(fn, 초기값) : fn 는 (누적 계산값, 현재값) => {return 계산값 };
  // 배열의 모든 수 합치기
  let arr = [1,2,3,4,5];
  const result = arr.reduce((prev, cur) => {
	  console.log(prev, cur);
	  return prev + cur;
  }, 0);
  console.log(result);

  ``` 
  