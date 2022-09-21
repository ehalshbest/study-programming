# [Javascript] - 16.[중급]프로미스(Promise)

* ___콜백(Callback) 함수___
  - 작업이 완되면 알려준다.
    ```javascript
    const cb = (callback) = > {
      setTimeout( ()=> {
        console.log('등록된 콜백함수 호출!');
        callback();
      }, 1000)
    };

    cb( fuction() {
      console.log('콜백함수 호출됨!!')
    });

    // 3초후 -> 등록된 콜백함수 호출! -> 콜백함수 호출됨!!
    ```
	- 콜백 지옥
    ```javascript
    const f1 = (callback) = > {
      setTimeout( ()=> {
        console.log('f1');
        callback();
      }, 1000)
    };

    const f2 = (callback) = > {
      setTimeout( ()=> {
        console.log('f2');
        callback();
      }, 3000)
    };

    const f3 = (callback) = > {
      setTimeout( ()=> {
        console.log('f3');
        callback();
      }, 2000)
    };

    // depth가 계속 깊어지면서)콜백 지옥 
    f1( fuction() {
      f2(fuction() {
        f3(function(){
          console.log('콜백함수 끝')
        })
      })
    });
    ```

* ___프로미스(Promise)___
  - 작업이 완료되면 성공과 실패를 알려준다.(Callback 기능)
  - 복작하게 사용되는 Callback함수를 보기 좋게 사용 가능.
  ```javascript
	const pr = new Promise( (성공, 실패) => {
		// Code : 성공('값');  or 실패('값');
	});

	pr.then( (성공) => {  
  	// code
	} ).catch( console.log )  
	.finally( () => {  
		// code
	});  
  ```

	- 콜백 지옥 탈피
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

  // 프로미스 체이닝(Promise chaining)
  f1()
  .then( resolve => f2(resolve))
  .then( resolve => f3(resolve))
  .then( resolve => console.log(resolve))
  .catch(console.log)
  .finally( () => {
    console.log("프로미스 끝");
  });
  ```

	- Promise.all / Promise.race
  	- 모든 작업을 한꺼번에 실행.
  	- 각각의 프로미스를 배열로 전달 받음.
  	- reject시 주위( 성공을 가정하고 사용하는게 좋음.)
    ```javascript
    // Promise.all 모든 작업이 완료되어야 종료. 총 3초 걸림.
    Promise.all([f1(), f2(), f3()] ).then( (resolve) => {
      console.log(resolve);
    });

    // Promise.race 먼저 완료된 작업이 있으면 종료. 총 1초 걸림.
    Promise.race([f1(), f2(), f3()] ).then( (resolve) => {
      console.log(resolve);
    });
    ```
