# [Golang] - 04.패키지 기초

* __패키지 기본__
  - 코드 구조화(모듈) 및 재사용.
  - 응집도, 결합도
  - GO는 패키지 단위의 독립적이고 작은 단위의 개발을 권고
  - 패키지 명 == 디렉토리 명
  - 같은 패키지 선언 go파일은 같은 디렉토리 하위에서 정의
  - 네이밍 규칙 : 첫 글자 소문자(private), 대문자(public)
  - 패키지 위치는 GOROOT의 src폴더의 하위 폴더부터
  - package main 는 특별하게 인식 -> 공유 라이브러리 X, 프로그램시작점에 하나만 존재, func main()
    ```go
    // src 하위 폴더의 lib.go 패키지 정의 ( src/section4/lib/lib.go)
    package lib
    
    func CheckNum(n int32) bool {
      return 10 < n
    }

    // main ( src/section4/startup.go)
    package main

    // 선언 방법 1 (각각 임포트)
    import "fmt"
    import "section4/lib" // src/section4/lib 폴더명

    // 선언 방법 2 (한꺼번에 임포트), 주로 사용됨
    import (
      "fmt"
      "section4/lib"// src/section4/lib 폴더명
    )

    func main() {
      var a int = 20
      fmt.Println("a는 10보다 큰 수? : ", lib.CheckNum(a))
    }
    ``` 

* __접근 제어 및 Alias__
  - 패키지 접근 제어, 첫글자 소문자(private), 첫글자 대문자(public)
  - 별칭(Alias) 사용 import할때 패치명에 Alias 지정하여 사용 가능.
  - 빈 식별자 사용 import시 패키지명 앞에 '_' 지정
    -  지금은 사용하지만 나중에 사용할 수도 있는 경우
    -  Go 자동서식 완성으로 지워지지 않게 하기 위해서
    ```go
    // src 하위 폴더 lib.go 패키지 정의 ( src/section4/lib1/lib.go)
    package lib1
    
    func CheckNum(n int32) bool {
      return 10 < n
    }

    // src 하위 폴더의 lib.go 패키지 정의 ( src/section4/lib2/lib.go)
    package lib2
    
    func CheckNum1(n int32) bool {
      return 100 < n
    }
    func CheckNum2(n int32) bool {
      return 1000 < n
    }

    // src 하위 폴더의 lib.go 패키지 정의 ( src/section4/lib3/lib.go)
    package lib3
    
    func CheckNum(n int32) bool {
      return 10000 < n
    }

    // main ( src/section4/startup.go)
    package main

    import (
      "fmt"
      checkUp "section4/lib1"// src/section4/lib1 폴더명
      // checkUp은 Alias(별칭) 지정
      "section4/lib2"// src/section4/lib2 폴더명
      _ "section4/lib3"// src/section4/lib2 폴더명 (사용하지 않아도 컴파일 통과)
    )

    func main(){
      fmt.Println("100보다 큰 수? : ", lib2.CheckNum1(101))
      fmt.Println("1000보다 큰 수? : ", lib2.CheckNum2(999))
      fmt.Println("10보다 큰 수? : ", checkUp.CheckNum(11)) // Alias 사용
      // fmt.Println("10000보다 큰 수? : ", lib3.CheckNum(10001)) // 빈 식별자 사용
    }
    ``` 

* __초기화 메소드( init )__
  - 프로그램 시작시 main 함수보다 먼저 실행되는 메소드
  - 패키지 로드시에 가장 먼저 호출됨
  - 가장 먼저 초기화 되는 작업 작성에 유용
  - 여러개 존재 가능 (하나의 패키지에 여러개 사용은 비 권장)
  
    ```go

    // src 하위 폴더의 lib.go 패키지 정의 ( src/section4/lib4/lib.go)
    package lib4
    
    func init() {
      fmt.Println("lib4의 init Method Call")
    }

    // main ( src/section4/startup.go)
    package main

    import ( 
      "fmt"
      "section4/lib4"// src/section4/lib4 폴더명
    )

    func init() {
      fmt.Println("init1 Method Call")
    }
    // 2번 사용 비 권장
    func init() {
      fmt.Println("init2 Method Call")
    }

    func main(){
      fmt.Println("main Method Call")      
    }
    ``` 
  - 실행 결과
    > lib4의 init Method Call -> init1 Method Call -> init2 Method Call -> main Method Call
