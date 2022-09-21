# [React] - 01.개발환경 설정 및 실행

* ___Visual Studio Code에서 개발하기___
  1. __Workspace 폴더 생성__
    - react를 작업할 폴더를 생성.
    
  2. __create-react-app을 이용한 프로젝트 생성__
     1. cmd / powershell 아래 명령어 실행.
        > npx create-react-app [프로젝트명]  
        
        ![캡처](_Img/create-react-app.PNG)

     2. Visual Studio Code(이하 VS Code)에서 해당 폴더 오픈.  
        ![캡처](_Img/vs-open-folder.PNG)  

     3. VS Code의 터미널을 열고 웹페이지 오픈
        > npm start  

         ![캡처](_Img/start-app-1.PNG)  

     4. App.js의 내용 수정하면 바로 적용 확인 가능.
        - HMR(Hot Module Replacement) : 코드를 수정하면 바로 웹페이지에 적용.  
          ```javascript
          function App() {
            return (
              <div className="App">
                <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <p> React 배워보자!! </p>
                 <a
                   className= "App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                    Learn React
                  </a>
                </header>
             </div>
           );
          }
          export default App;
          ```  
          ![캡처](_Img/start-app-2.PNG)  

      5. App 종료
         > Ctrl + X   


  3. __TypeScript 적용하기__
     - VS Code 터미널에서 아래 명령어 실행으로 설치.
        > npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom  

        ![캡처](_Img/install-typescript.PNG)  
        
     - jsx 를 반환하는 Component 파일은 -> tsx 파일로 변환 혹 생성 사용.
     - 일반 js 파일은  -> ts 파일로 변환 혹 생성 사용.
     
    - create-react-app 생성시 적용.
       > npx create-react-app [프로젝트명] --template typescript  


  4. __React 간략 설명__
    - npm start : 개발모드로 프로그램 실행.
    - npm build : 실제 배포 모드로 빌드.
    - package.json 파일에 명령어 정의됨.  
    
      ![캡처](_Img/npm-cmd.PNG)  

    - node_modules
      - dependency 모듈들이 모여져 있는 폴더
      - 설치된 모듈은 package.json파일에 기록되어있다.
          ![캡처](_Img/dependency.PNG) 
      - 해당 폴더가 지워졌더라도 npm install을 통해서 그대로 다시 설치 가능.
        - 단, package.json파일이 있어야 한다.
        - 이러한 특성으로 (용량상)git에도 올리지 않는다.  

    - 기본 구동
      ```html
      <!-- public/index.html -->
      <div id="root"><div>
      ```
      ```javascript
      // src/index.js
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      // public/index.html의 root div 밑으로 App이 Rander된다.
      ```
    - react-router-dom 사용.
      - BrowserRouter, Routes, Route, Link, useNavigate 사용을 위해서  
      - > npm install react-router-dom  
        ```javascript
        function App() {
          return (
            <>
             <BrowserRouter>
                <Header />
               <Routes>
                  <Route path="/" element={<컴포넌트 />} />
                  // path에 값을 넣은때 /:변수명
                  <Route path="/day/:day" element={<컴포넌트 />} />
                  // "/*" 는 나머지 path, 즉 없는 path 를 처리할때 사용.
                  <Route path="/*" element={<EmptyPage />} />
                </Routes>
              </BrowserRouter>
          </>
          );
        } 

        export default App;
        ```
    