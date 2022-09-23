# sample-locale ( 다국어 지원 samlpe 프로젝트 )

* __react-intl 을 이용한 formmatting__
  - 날짜, 숫자 관련 formmatting은 react-intl 라이브러리를 이용한다.
  - 번역부분도 사용해도 되지만, 인터페이스가 불편하다.
  
* __react-i18next 을 이용한 번역__
  - 번역부분은  react-i18next 라이브러리를 이용한다.

* __json 파일__
  - component별로 파일을 만든다.
    - 예) welcome.tsx => welcome.json
  - 언어 key 양식은 rect-intl에서 사용하는 양식으로 맞춘다.(라이브러를 둘다 사용하므로)
    - 예) "ko-KR" => "ko"
  ```json
  {
   "namespace" : "welcome",
    "locale" : {
      "ko": {
        "환영_합니다" : "{{obj}} 환영 합니다.",
        "언어" : "Language",
        "오늘_날짜" : "Today",
        "선택된_언어" : "선택된 언어"
      },
      "en-US": {
        "환영_합니다" : "Welcome {{obj}}.",
        "언어" : "Language",
        "오늘_날짜" : "Today",
        "선택된_언어" : "Selected language"
      },
      "zh-TW": {
        "환영_합니다" : "歡迎 {{obj}}.",
        "언어" : "語",
        "오늘_날짜" : "今天是",
        "선택된_언어" : "選擇的語言"
      }
    }
  }
  ```
* ___intLocale.js 파일__
  - json 파일을 모아서 i18next라이브러리 초기화.
  
* __번역 데이터 자동화(필요)__
  - 참고) https://meetup.toast.com/posts/295
  - 기능1: 소스 코드에서 key를 스캔해서 구글 스프레드 시트에 업로드
  - 기능2: 소스 빌드 시 구글 스프레드 시트에서 번역된 문자열 다운로드하여 빌드
  - 필요 라이브러리
    - i18next-scanner : i18n.t() 패턴 함수를 스캔하여 key를 추출하고 언어별 json파일을 생성.
    - google-spreadsheet : Google Sheets API 래핑 라이브러리.



* __필요 라이브러리__
  > npm i react-intl  
  > npm i react-i18next i18next --save  
  > npm i @types/webpack-env @types/node -D  