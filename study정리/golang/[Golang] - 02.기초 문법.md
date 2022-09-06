# [Golang] - 01.기초 문법

* ___장점 및 특징___
  1. __간결한 문법 및 단순함__
  2. __병행 프로그램밍 지원__
  3. __정적 타입 및 동적 실행__
  4. __간편한 협업 지원__
  5. __컴파일 및 실행속도 빠름__
  6. __제네릭 및 예외 처리 미지원__
  7. __컨벤션 통일__


* ___변수___
  - 변수 선언 : var 변수명 자료형 [ = 초기화 ]
  - 변수를 선언만 하고 사용을 안하면 에러가 발생.
    ```go
    package main

    import "fmt"

    func main(){

      var a int
      var b string
      var c, d, e int
      var f, g, h int = 1, 2, 3
      var i float32 = 11.4
      var j string = "Hi! Golang!"
      var k = 4.74
      var l = "Hi! Seoul!"
      var m - true

      fmt.Println("a : ", a)
      fmt.Println("b : ", b)
      fmt.Println("c : ", c, "d : ", d, "e : ", e)
      fmt.Println("f : ", f, "g : ", g, "h : ", h)
      fmt.Println("i : ", i)
      fmt.Println("j : ", j)
      fmt.Println("k : ", k)
      fmt.Println("l : ", l)
      // fmt.Println("m : ", m) // 선언 후 사용 안해서 에외 발생.(a declared but not used)

    }
    ``` 
  - 여러변수 한꺼번에 선언 : var ( 변수명 자료형 [ = 초기화 ], ... )
    ```go
     package main

     import "fmt"

     func main(){

        // 여러개로 선언
      var (
        name string = "ehalshbest"
        weight float32
        isRun bool
      )

      fmt.Println("name : ", name, "weight : ", weight, "isRun : ", isRun)

     }
    ``` 
  - 짧은 선언(전역 사용X, 선언 후 할당 예외 발생, 주로 함수 내에서 사용) : 변수명 := 초기화
  ```go
   package main

   import "fmt"

   func main(){

    // 짧은 선언
    shortVar1 := 3
    shortVar2 := "Test"
    shortVar3 := false

    fmt.Println("shortVar1 : ", shortVar1, "shortVar2 : ", shortVar2, "isRun : ", shortVar3)

    shortVar1 := 10 // 선언 후 할당 예외 발생.(no new variables on left side of :=)

    // 짧은 선언 사용 예
    if i := 0; i < 10 {
      fmt.Println("Short Variable Test Success!!")
    }

    // 짧은 선언 사용 예
    for i := 0; i < 5; i++ {
	    fmt.Println("i : ", i)
	  }

   }
  ``` 

* ___상수___
  - 상수 선언 : const 상수명 [자료형] = 초기화
     ```go
     package main

     import "fmt"

     func main(){

      const a string = "Test"
      const b = "Test"
      const c int32 = 10 * 10
      const d = 35.6
      const e = false

      const f string // 초기 값이 없어서 에외 발생 ( missing init expr for g )
      f = "Test2" // 재할당하면 예외 발생 (cannot assign to g)

      fmt.Println("a : ", a, "b : ", b, "c : ", c, "d : ", d, "e : ", e)

     }
     ``` 
  - 상수 여러개 선언
     ```go
     package main

     import "fmt"

     func main(){

      const a, b int = 10, 90
      const c, d, e = true, 0.84, "test"

      const (
        x, y, int16 = 50, 90
        i, k = "Data", 7776
      )
      
      fmt.Println("a : ", a, "b : ", b, "c : ", c, "d : ", d, "e : ", e)
      fmt.Println("x : ", x, "y : ", y, "i : ", i, "k : ", k)

     }
     ```


* ___열거형___
  -  상수를 사용하는 일정한 규칙에 따라 숫자를 계산 및 증가시키는 묶음
   ```go
     package main

     import "fmt"

     func main(){

      const (
        Number_1 = 1
        Number_2 = 2
        Number_3 = 3
      )
      
      fmt.Println("Number_1 : ", Number_1, "Number_2 : ", Number_2, "Number_3 : ", Number_1)

     }
     ```
  -  iota 사용 (시작은 0, 자동으로 1씩 증가, go에서만 존재 enum의 핵심)
   ```go
     package main

     import "fmt"

     func main(){

      const (
        A = iota
        B
        C
      )
      
      fmt.Println("A : ", A, "B : ", B, "C : ", C)

      const (
        D = iota * 10
        E
        F
      )

      fmt.Println("D : ", D, "E : ", E, "F : ", F)

     }
     ```
  -  _ 사용 ( 생략 하고 싶을 때 사용)
  ```go
   package main

   import "fmt"

   func main(){

     const (
       _ = iota
       A
       B
       C
     )
     // iota가 0부터 시작하기때문에 _ 을 사용해서 0을 생략하고 A를 1부터 시작하게끔
     fmt.Println("A : ", A, "B : ", B, "C : ", C)

     const (
       _ = iota * 10
       D
       _
       F
     )
     // _를 중간에 사용 가능하다, 생략했다고 해서 F가 3번째가 아니라 4번째로 유지된다.
     fmt.Println("D : ", D, "F : ", F)

   }
  ```