# [React] - 02.Localize

* ___React Intl로 다국어 지원하기___
  1. __React Intl 설치__
    > npm i react-intl
    
  2. __Resource 관리__
     1. locale 별로 json파일 생성.  
        locale/en-US.json
        ```
        {
          "Welcome" : "Welcome."
        }
        ```
        locale/ko.json
        ```
        {
          "Welcome" : "환영합니다."
        }
        ```
      2. json파일을 한곳에 import
          ```javascript
          import enUsMsg from "./locale/en-US.json";
          import koMsg from "./locale/en-US.json";
          ```

      3. IntlProvider 컴포넌트를 최상위에서 사용하기.
         - locale은 전역적으로 처리해야하므로 최상위 컴포넌트를 감싸 intl 객체가 모든 하위 컴포넌트에서 접근 가능하도록 처리.
         - React Intl는 내부적으로 intl 이라는 객체를 이용해서 메시지를 포멧팅.
          ```javascript
          import { IntlProvider } from "react-intl";
          import enUsMsg from "./locale/en-US.json";
          import koMsg from "./locale/en-US.json";
          import Welcome from "./Welcome";

          const locale = localStorage.getItem("locale") ?? "ko";
          const messages = {"en-US":enUsMsg, ko:koMsg}[locale];

          function App() {
             return (
              <IntlProvider locale={locale} messages={messages}>
                <Welcome />
              </IntlProvider>
            );
          }

          export default App;
          ```

      4. FormattedMessage 사용.
          > \<FormattedMessage id="Welcome" />  

          ```javascript
          import { FormattedMessage } from "react-intl";

          function Welcome() {
            return (
              <div className="welcome">
              <h1> <FormattedMessage id="Welcome" />React! </h1>
              </div>
            );
          }

          export default Welcome;
          ```
      5. FormattedDate 사용.
         > \<FormattedDate value={}>  
          ```javascript
           import { FormattedMessage, FormattedDate } from "react-intl";

           function Welcome() {
             const date: Date = new Date();

             return (
               <div className="welcome">
               <h1> <FormattedMessage id="Welcome" />React! </h1>
               <FormattedDate value={date} />
               </div>
             );
           }

           export default Welcome;
           ```

* ___React i18next로 다국어 지원하기___
  1. __React i18next 설치__
    > npm i react-i18next i18next -- save

  2. __Resource__
      ```javascript
      const resources = {
        en : {
          translation: {
            "Welcome":"Welcome."
          }
        },
        ko : {
          translation: {
            "Welcome":"환영합니다."
          }
        }
      }
      ```
  3. __초기화(Resource/초기 언어 설정)__
     - i18n.ts 파일 추가.
       ```javascript
       // i18n.ts
       import i18n from "i18next";
       import { initReactI18next } from "react-i18next";

       const resources = {
         en : {
           translation: {
             "Welcome":"Welcome."
           }
         },
         ko : {
           translation: {
             "Welcome":"환영합니다."
           }
         }
       }

       i18n
        .use(initReactI18next)
        .init( {
          resources,
          lng: "en",
        });

       export default i18n;
       ```
    - 추가한 i18n.ts 파일 최상위 index.ts에 import
      ```javascript
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import './index.css';
      import App from './App';
      import reportWebVitals from './reportWebVitals';

      import './i18n'; // 여기에 추가.

      const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      );

      root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
      );
      ```

  4. __사용 하기__
     ```javascript
     // App.tsx
     import React from 'react';
     import './App.css';
     import { useTranslation } from 'react-i18next';

     function App() {
      const [ t, i18n ] = useTranslation();

      const changeLanguageToKo = () => i18n.changeLanguage('ko');
      const changeLanguageToEn = () => i18n.changeLanguage('en');

      return (
        <div className="App">
          <span>language : {i18n.language}</span>
          <h1>{t('Welcome')}</h1>
          <button onClick={changelanguageToKo}>Korean</button>
          <button onClick={changelanguageToEn}>English</button> 
        </div>
      );
     }

     export default App;
     ```
    - 디렉토리 내의 모든 json파일 가져오기.
      > npm i @types/webpack-env @types/node -D  
      ```javascript
      const getLocaleResource = (requireContext: __WebpackModuleApi.RequireContext) => {
        return requireContext.keys().map(requireContext);
        };

      const localeResource = getLocaleResource(
        require.context("../_Locale", true, /\.(json)$/)
      );
      ```
     

* ___React Intl VS React i18next___
  - 둘다 인지도 높은 다국어 지원 라이브러리
  - React Intl는 숫자, 날짜 등의 formatting까지 지원.
  - React Intl는 Server Side Rendering(SSR)에 고려 안됨.
  - React i18next는 SSR이 필요한경우 next-i18next사용 권장.
  - 결론
    - 번역만 사용할거면 React i18next 사용.
    - formatting까지 사용할거면 React Intl 사용.


* ___i18next + Google Spread Sheets 번역 자동화 구축___
  - 각각의 locale별로 번역된 데이터가 필요.
  - 번역 테이터의 공유의 불편함.
    - (작업자가)번역 필요 -> (번역자에게) 공유 -> (번역자가)번역 완료 -> (작업자에게) 공유
    - 위 과정에서 번역 데이터를 메일이나 파일로 일일히 공유하고 공유받고 번거롭고 누락될 가능성이 있다.
  - Google Spread Sheets를 활용하여, 변역데이터를 별도로 공유받지 않고, upload, download 하는 형태로 번역 데이터 공유 자동화 진행.  
  - 필요 라이브러리
    - npm install -D i18next-scanner
      - i18next라이브러를 사용하여 작업된 패턴을 스캔하여 json형태로 생성.
      - 예) {_t(Welcome.환영_합니다)}
    - npm install -D google-spreadsheet
      - google spreadsheet 접근 및 제어를 위해서.
    > react-i18next i18next @types/react-i18next @types/i18next i18next-scanner 
    > npm i --save-dev @types/google-spreadsheet  
    google-spreadsheet  
  - Goole Cloud 설정
    - 사용자 인증 정보 > 사용자 인증 정보 만들기 > 서비스 계정 
    - 만들어진 계정 정보에서 키추가 json파일 다운받음.
    - 사용할 Google spreadsheet 생성 > 공유 > 새로생성한 계정 이메일 등록
    - API 및 서비스 > 라이브러리 > Google Sheets API > 사용 클릭.(permission)
  - 참고 소스 (https://meetup.toast.com/posts/295)
    - i18next-scanner.config.js : App에 작성된 특정 패턴 함수를 json 파일로 추출.
    - index.js : download, upload 를 위한 설정 내용.
    - download.js : google spreadsheet에서 다운로드 받아서 json으로 덮어씌운다.
    - upload.js : json내용을 google spreadsheet 에 업로드.
  - 특이 사항.
    ```
    BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
    This is no longer the case. Verify if you need this module and configure a polyfill for it.
    ```
    - react에서 직접 google spreadsheet 관련 코드를 사용할때 발생하는 에러.
    - 해결책
      - react-scripts 버전 다운 
        - "react-scripts": "5.0.1" > react-scripts": "^4.0.3"
        > npm uninstall react-scripts  
        > npm i react-scripts@4.0.3  
    
  - 사용법
    - 터미널> npm run 
    - package.json에 scripts에 등록.
      ```
      "scan:i18n": "i18next-scanner --config i18next-scanner.config.js",
      "upload:i18n": "npm run scan:i18n && node translate/upload.js",
      "download:i18n": "node translate/download.js"
      ```