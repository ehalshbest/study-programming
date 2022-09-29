# [express] - 01.Hello World

* ___Express Hello Wrord 출력___
  - expre를 작업할 폴더를 생성.
    > mkdir express_work  
    > cd express_work  
  - Express.js 설치
    > npm init -y  
      - 작업 폴더에 package.json 생성됨.
    > npm install express  
      - pakage.json파일을 기준으로 node_modules 폴더가 추가되며 각종 모듈이 설치됨.
  - App.js 추가 및 서버 실행.
    ```javascript
    // app.js
    const express = require('express');
    const port = 5000;
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, ()=> {
      console.info(`Express app listening on port! ${port}`);
    });
    ```
    > node app.js  
    - 웹브라우저에서 localhost:5000 접속 하여 Hello World! 출력 확인.
    
  - nodemon 설치
    - 소스 변경하면 매번 node app.js 를 해야하는 번거로움.
    - nodemon을 통해 실행해놓으면 변셩시 자동으로 실행.
    > npm install nodemon  
    > npx nodemon app.js   