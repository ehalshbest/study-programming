# [Golang] - 01.환경 설정 및 실행

* ___Golang 개발을 위한 환경 설정___
  1. __Golang 설치__
      > https://golang.org/

      운영체제에 맞는 버전 다운로드 후 설치.

      설치가 완료 후 cmd 창에서 go 를 입력 아래와 같은 화면 나오면 정상적으로 설치됨.

      ![캡처](_Img/cmd-go.PNG)

  2. __Git 설치__
      > https://git-scm.com/download/

      운영체제에 맞는 버전 다운로드 후 설치.

      Git을 설치하는 이유는 Golang관련 pak 파일을 git을 통해서 받기 때문.

  3. __Code Editor 선택 및 설치__
     - Visual Studio Code 설치.
        - 무료이다.
        - 훌륭한 IDE
        - 많은 사용자
        - (중요)여러 언어의 코드 해당 에디터에서 이미 사용중이며, Visual Studio 환경에 익숙함.


  4. __Go Work 폴더 생성__
    - 원하는 위치에 Go를 작업할 폴더를 생성한다.
    - 하위 bin , pkg, src 폴더를 생성한다.

    - bin
      - go 관련 exe 파일 모음 폴더
      - git을 통해서 exe 파일들은 다운.
      - go install 명령을 통한 exe 생성되는 위치.

    - pkg
      - go 관련 package파일 모음 폴더
      - git을 통해서 pakage 파일들은 다운.

    - src
      - 실제 코드가 위치하는 폴더
      - 세션별로 하위 폴더로 관리하면 된다.

      ![캡처](_Img/go-workfolder.PNG)

  5. __PATH 설정__
      - go 로 코딩 하기 위해서는 go가 실행되게 도움이 되는 Git에서 package를 다운받을 path를 설정해야 한다.
      - 폴더를 생성하고 시스템 속성 > 환경 변수 > 시스템 변수에 GOPATH 추가.
  
        ![캡처](_Img/go-path.PNG)

    
    
    ---


* ___Go에서 Hello World! 출력해보기___
  
    1. Visual Studio Code 를 열고 Go 확장 설치.
      Ctrl + Shift + X > go 검색 후 Rich Go language support for Visual Studio Code 설치
      ![캡처](_Img/go-extensions.PNG)

    2. 터미널을 열어서 작업폴더에 go mod를 init
       ![캡처](_Img/go-mod.PNG)

    3. go 관련 tool 업데이트.
      ![캡처](_Img/go-tool-update-1.PNG)
      ![캡처](_Img/go-tool-update-2.PNG)

    4. 작업 폴더에 hello-world.go 파일 생성후 아래 코드 입력
      ![캡처](_Img/helloworld-1.PNG)
       ```python
          package main

          import "fmt"

          func main() {
	          fmt.Println("Hello world!!")
          }
       ```

    5. 터미널에서 실행 ( go run 파일명 )
      ![캡처](_Img/helloworld-2.PNG)
