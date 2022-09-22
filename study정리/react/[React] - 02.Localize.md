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

* ___React Intl VS React i18next___
  - 둘다 인지도 높은 다국어 지원 라이브러리
  - React Intl는 숫자, 날짜 등의 formatting까지 지원.
  - React Intl는 Server Side Rendering(SSR)에 고려 안됨.
  - React i18next는 SSR이 필요한경우 next-i18next사용 권장.
  - 결론
    - 번역만 사용할거면 React i18next 사용.
    - formatting까지 사용할거면 React Intl 사용.