# [Golang] - 03.제어문 반복문

* __제어문 ( IF ~ ELSIF ~ ELSE )__
  - 반드시 Boolean 검사 -> 1. 0 ( 사용불가 : 자동 형 변환 불가)
  - 소괄호 사용 X
    ```go
    package main

    import "fmt"

    func main(){

      var a int = 20
      b := 20

      if a >= 15 {
        fmt.Println("15이상")
      }

      /*/// 에러 발생 1
      if a >= 15
      {
        fmt.Println("15이상")
      }
      //*///

      /*/// 에러 발생 2
      if a >= 15
        fmt.Println("15이상")
      //*///

      /*/// 에러 발생 3
      if c := 1; c {
        fmt.Println("15이상")
      }
      //*///

      /*/// 에러 발생 4
      if c := 40; c >= 35 {
        fmt.Println("35이상")
      }
      c += 20 // 여기서 에러 (c는 if문 안에서만 유효)
      //*///

      var c int = 50
      if c >= 65 {
         fmt.Println("65이상")
      } else {
         fmt.Println("65미만")
      }

      d int = 100
      if d >= 120 {
         fmt.Println("120이상")
      } else if i >= 100 && i < 120 {
         fmt.Println("100이상 ~ 120미만")
      }
      else {
         fmt.Println("100미만")
      }
    }
    ``` 

* __제어문 ( SWITCH )__
  - 뒤 표현식(Exprestion) 생략 가능
  - case 뒤 표현식 사용 가능
  - 자동 break 때문에 fallthrouth whswo
  - Type 분기 -> 값이 아닌 변수 Type으로 분기 가능
    ```go
    package main

    import "fmt"

    func main(){

      a := -7

      // switch의 표현식 생략 가능
      switch {
        case a < 0:
          fmt.Println(a, "는 음수")
        case a == 0:
          fmt.Println(a, "는 0")
        case a > 0:
          fmt.Println(a, "는 양수")
      }

      // switch 표현식에서 변수 선언 가능
      switch b := 27; {
        case b < 0:
          fmt.Println(b, "는 음수")
        case b == 0:
          fmt.Println(b, "는 0")
        case b > 0:
          fmt.Println(b, "는 양수")
      }

      // switch 표현식에 문자열 변수 선언 가능, case에 표현식 생략 가능
      switch c := "go"; c {
        case "go":
          fmt.Println("Go!")
        case "java":
          fmt.Println("Java!")
        default:
          fmt.Println("일치하는 값 없음!!")
      }

      // switch 표현식에 선언한 변수의 연산 가능
      switch c := "go"; c + "lang" {
        case "golang":
          fmt.Println("Go!")
        case "java":
          fmt.Println("Java!")
        default:
          fmt.Println("일치하는 값 없음!!")
      }

      // switch 내에서 다중 변수 선언 가능
      switch i, j := 20, 30; {
        case i < j :
          fmt.Println("i < j ")
        case i == j :
          fmt.Println("i == j")
        default:
          fmt.Println("i > j")
      }

      // case에 연산자(&&) 사용 가능
      switch i := 100; {
        case i > 50 && i < 100 :
          fmt.Println("50보다 크고 100보다 작다")
        default:
          fmt.Println("50보다 작거나 100보다 크다")
      }

      // case에 병렬로 정의 가능
      switch a := 30 / 15; a {
        case 2, 4, 6 :
          fmt.Println("짝수")
        case 1, 3, 5 :
          fmt.Println("홀수")
      }

      // fallthrough 자동 break므로 실행이 안되는데 해당 keyword를 사용하면 아래 문도 실행.
      switch e := "go"; e {
        case "java":
           fmt.Println("java")
        case "go":
           fmt.Println("go")
           fallthrough
        case "python":
           fmt.Println("python")
        case "c":
           fmt.Println("c")
      }
    }
    ``` 

* __반복문 ( FOR )__
  - go에서의 유일한 반복문
  
    ```go
    package main

    import "fmt"

    func main(){

      for i := 0; i < 5; i++ {
        fmt.Println("ex1 : ", i)
      }

      /*/// 에러발생 1
      for i := 0; i < 5; i++
      {
        fmt.Println("ex1 : ", i)
      }
      //*///

      /*/// 에러발생 2
      for i := 0; i < 5; i++
        fmt.Println("ex1 : ", i)
      //*///

      // 무한 루프 (조건식을 표현 안함)
      for {
        fmt.Println("무한 루프!!")
      }

      // Range 용법
      loc := []string{"Seoul", "Busan", "Incheon"}
      for index, name := range loc {
        fmt.Println("지역 : ", index, name)
      }

      sum1 := 0
      for i := 0; i <=100; i++ {
        sum1 += 1
      }
      fmt.Println("값: ", sum1)

      sum2, i := 0, 0
      for i <=100 {
        sum2 += i
        i++
        // j := i++ // 후치 연산은 반환 값이 없다. (에러 발생)
      }
      fmt.Println("값: ", sum2)

      // while문처럼 사용하는 형태
      sum3, i := 0, 0
      for {
        if i > 100 {
            break
        }
        sum3 += 1
        i++
      }
      fmt.Println("값: ", sum3)

      for i, j := 0, 0; i <= 10; i, j = i+1, j+10 {
        fmt.Println(i, j)
      }

      // continue 사용
      for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue
        }
        fmt.Println(i)
      }

     // 레이블 +  break ( 레이블 밑의 for문을 완전히 빠져나간다.)
      Loop1:
       for i := 0; i < 5; i++ {
         for j := 0; j < 5; j++ {
            if i == 2 && j == 4{
                break Loop1
            }
            fmt.Println(i, j)
         }
       }

      // 레이블 + Continue ( 레이블 밑의 for문 이어서 실행. )
      Loop2:
       // Loop 레이블 다음에 관련 없는 소스 코드는 에러 발생.
       for i := 0; i < 3; i++ {
         for j := 0; j < 3; j++ {
            if i == 1 && j == 2 {
                continue Loop2
            }
            fmt.Println(i, j)
         }

       }

    }
    ``` 

