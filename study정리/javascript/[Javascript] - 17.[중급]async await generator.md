# [Javascript] - 17.[중급] async / await / generator

* ___async / await___
  - async
    - Promise Chain을 가독성 있게 사용할 수 있다.
    - async 키워드는 프로미스ㅌ를 리턴한다.
      ```javascript
        async function getName() {
          return "Mike";
       }
      ```
  - await
    - async 함수에서만 사용 가능.
    - Promise가 종료될때까지 기다린다.
      ```javascript
      function getName(name) {
	      return new Promis( (resolve, reject) => {
		      setTimeout( () => {
			      resolve(name);
		      }, 1000);
	      });
      }

      async function showName() {
        const result = await getName("Mike");
	      console.log(result);
      }

      showName(); // 1초후에 "Mike" 출력
      ```

  - Promise Chain을 async / await로 변경.
    ```javascript
    const f1 = () = > {
      return new Promise( (resolve, reject) => {
        setTimeout( () => {
          resolve('f1');
        }, 1000);
      });
    };

    const f2 = () = > {
      return new Promise( (resolve, reject) => {
         setTimeout( () => {
           resolve('f2');
         }, 3000);
      });
    };

    const f3 = () = > {
      return new Promise( (resolve, reject) => {
        setTimeout( () => {
          resolve('f3');
        }, 2000);
      });
    };

    async function order() {
	    try{
		    const result1 = await f1();
		    const result2 = await f2(result1);
		    const result3 = await f3(result2);
		    console.log(result3);
	    } catch(e) {
		    console.log(e);
	    }
    }

    async function order() {
      try{
		    const result = await Promis.all([f1(), f2(), f3()]);
		    console.log(result);
	    } catch(e) {
		  console.log(e);
	    }
    }

    ```

* ___Generator___
  - 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능.
    ```javascript
    function* fn() {
      console.log(1);
      yield 1;
      console.log(2);
      yield 2;
      console.log(3);
      yield 3;
      return "end";
    }

    const a = fn();

    a.next(); // yield 1에서 멈춘다. 다음 next()호출때까지
    // {value: 1, done: false}
    a.next(); // yield 2에서 멈춘다. 다음 next()호출때까지
    // {value: 2, done: false}
    a.next(); // yield 3에서 멈춘다. 다음 next()호출때까지
    // {value: 3, done: false}
    a.next(); // 다음 yield가 없고 return됐으므로 함수가 끝나다.
    // {value: "end", done: true}
    ```
  - 값을 미리 만들어 놓지 않는다.
    ```javascript
    function* fn() {
      let index = 0;
      while( true ) {
        yield ++index;
      }
    }

    const a = fn();

    // 호출 전까지 값을 미리 만들어 놓지 않는다.
    a.next(); // 1
    a.next(); // 2
    ```
