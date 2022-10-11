# [Golang] - 05.데이터 타입

* ___Bool___
  ```go
  package main

  import "fmt"

  func main(){

    var b1 bool = true
	  var b2 bool = false
	  b3 := true
	
	  fmt.Println("ex1 : ", b1)	// true
	  fmt.Println("ex2 : ", b2)	// false
	  fmt.Println("ex3 : ", b3)	// true
	
	  // 조건부 논리 연사자랑 주로 사용 : !(not), ||(or), &&(and)
	  fmt.Println("ex4 : ", b1 && b3) // true
	  fmt.Println("ex5 : ", b1 || b2) // true
	  fmt.Println("ex6 : ", !b1) // false
	
	  // 암묵적 형변환X : 0, Nil -> false 변환 없음.
	  b4 : =1
	  if b4 { // non-boolean condition in if statementcompilerInvalidCond
		  fmt.Println("ex7 : ", true!)
	  }
	
	  // 조건부 비교 연사자랑 사용 : > , < , == , >=, <=
	  num1 := 15
	  num2 := 37
	  fmt.Println("ex8 : ", num1 > num2) // false
	  fmt.Println("ex9 : ", num1 < num2) // true
	  fmt.Println("ex10 : ", num1 == num2) // false
	  fmt.Println("ex11 : ", num1 >= num2) // false
	  fmt.Println("ex12 : ", num1 <= num2) // true
  }
  ``` 

* ___숫자형 기초___
  ```go
  package main

  import "fmt"

  func main(){

    // 정수, 실수, 복소수
	  // 32bit, 64bit, unsigned(양수)
	  // 정수 : 8진수(0), 16진수(0x), 10진수
	
	  var num1 int = 17
	  var num2 int = -68
	  var num3 int = 0631
	  var num4 int = 0x32fa2c75
	
	  fmt.Println("num1 : ", num1) // 17
	  fmt.Println("num2 : ", num2) // -68
	  fmt.Println("num3 : ", num3) // 409
	  fmt.Println("num4 : ", num4) // 855256181
	
	  // byte => uint8, rune => int32
	
	  // 아스키(영문)
	  var char1 byte = 72
	  var char2 byte =0110
	  var char3 byte = 0x48
	  fmt.Printf("char1 : %c %d %o %x\n", char1, char1, char1, char1)
	  fmt.Printf("char2 : %c %d %o %x\n", char2, char2, char2, char2)
	  fmt.Printf("char3 : %c %d %o %x\n", char3, char3, char3, char3)
	
	  // 유니코드(한글)
	  var char4 rune = 50556
	  var char5 rune = 0142574
	  var char6 rune = 0xC57C
	  fmt.Printf("char4 : %c %d %o %x\n", char4, char4, char4, char4)
	  fmt.Printf("char5 : %c %d %o %x\n", char5, char5, char5, char5)
	  fmt.Printf("char6 : %c %d %o %x\n", char6, char6, char6, char6)
	
	  // 실수(부동소수점)
	  //float32(7자리), float64(15자리)
	  var f1 float32 = 0.14
	  var f2 float32 = .75647
	  var f3 float32 = 442.0378373
	  var f4 float32 = 10.0
	  fmt.Println("f1 : ", f1) // 0.14
	  fmt.Println("f2 : ", f2) // 0.75647
	  fmt.Println("f3 : ", f3) // 442.03784
	  fmt.Println("f4 : ", f4) // 10
	
  	// 지수 표기법
	  var f5 float32 = 14e6
	  var f6 float64 = .156875E+3
	  var f7 float64 = 5.32521e-10
	  fmt.Println("f5 : ", f5) // 1.4e+07
	  fmt.Println("f6 : ", f6) // 156.875
	  fmt.Println("f7 : ", f7) // 5.32521e-10
  }
  ``` 

* ___숫자형 연산___
  ```go
  package main

  import (
	"fmt"
	"math"
  )

  func main(){

    var n1 uint8 math.MaxUint8
	  var n2 uint16 math.MaxUint16
	  var n3 uint32 math.MaxUint32
	  var n4 uint64 math.MaxUint64
	  fmt.Println("n1 : ", n1) // 255
	  fmt.Println("n2 : ", n2) // 655352
	  fmt.Println("n3 : ", n3) // 4294967295
	  fmt.Println("n4 : ", n4) // 18446744073709551615
	
	  // 숫자 연산(산술, 비교)
	  // 타입이 같아야 가능
	  // 다른 타입끼리는 반드시 형 변환 후 연산, 형변환 없을 경우 에러 발생.
	  // +, -, *, %, /, <<, >>, &, ^
	  n5 := 100000 // int
	  n6 := int16(10000)
	  // fmt.Println("n5 + n6 : ", n5 + n6) 에러발생.
	  fmt.Println("n5 + n6 : ", n5 + int(n6)) // 110000
	
	  // 오버플로우 에러 : 범위 초과
	  var o1 uint8 = math.MaxUint8 + 1
	  var o2 uint16 = math.MaxUint16 + 1
	  var o3 uint32 = math.MaxUint32 + 1
	  var o4 uint64 = math.MaxUint64 + 1
	
	  // 오버플로우 에러 : 범위 미만
	  var o5 uint8 = - 1
	  var o6 uint16 = - 1
	  var o7 uint32 = - 1
	  var o8 uint64 = - 1
  }
  ``` 

* ___문자열 기초___
  ```go
  package main

  import (
	"fmt"
	"unicode/utf8"
  )

  func main(){

    // 큰 따옴표, 백스쿼트(문자를 그대로사용할때) 사용
	  // char 타입 존재 X -> rune 형으로 문자 코드 값으로 표현
	  // 문자는 작은 따옴표로 작성.
	  // 자주 사용하는 escape : \\ , \', \", \a(콘솔벨), \b(백스페이스), \f(쪽바꿈), \n(줄바꿈), \r(복귀), \t(탭) 
	
	  var str1 string = "c:\\go_study\\src\\"
	  str2 := `c:\go_study\src\`
	  fmt.Println("str1 : ", str1)
	  fmt.Println("str2 : ", str2)
	
	  var str3 = "Hello World!"
	  var str4 = "안녕하세요!"
	  fmt.Println("str3 바이트수 : ", len(str3))
	  fmt.Println("str4 바이트수 : ", len(str4))
	  fmt.Println("str3 길이 : ", utf8.RuneCountInString(str3))
	  fmt.Println("str3 길이 : ", len([]rune(str3)))
	  fmt.Println("str4 길이 : ", utf8.RuneCountInString(str4))
	  fmt.Println("str4 길이 : ", len([]rune(str4)))
	
	  var str5 string = "Golang"
	  var str6 string = "World"
	  var str7 string = "고프로그래밍"
	  fmt.Println(str5[0],str5[1],str5[2],str5[3],str5[4],str5[5])
	  fmt.Printf("%c %c %c %c %c %c", str5[0],str5[1],str5[2],str5[3],str5[4],str5[5])
	  fmt.Println(str6[0],str6[1],str6[2],str6[3],str6[4])
	  fmt.Printf("%c %c %c %c %c ", str6[0],str6[1],str6[2],str6[3],str6[4])
	  fmt.Println(str7[0],str7[1],str7[2],str7[3],str7[4],str7[5])
	  fmt.Printf("%c %c %c %c %c %c", str7[0],str7[1],str7[2],str7[3],str7[4],str7[5])
	  fmt.Println()
	  // 한글이 깨지므로
	  koStr := []rune(str7)
	  fmt.Printf("%c %c %c %c %c %c", koStr[0],koStr[1],koStr[2],koStr[3],koStr[4],koStr[5])
	  fmt.Println()
	
	  for i, char := range koStr {
		  fmt.Printf("%c(%d)\t", char, i)
	  }
	  fmt.Println()
  }
  ``` 
* ___문자열 연산___
  ```go
  package main

  import (
	"fmt"
	"string"
  )

  func main(){

    // 추출, 비교, 조합(결합)
	  var str1 string = "Golang"
	  var str2 string = "World"
	
	  // 추출
	  fmt.Println("", str1[0:2])
	  fmt.Println("", str2[3:])
	  fmt.Println("", str1[1:3])
	  fmt.Println("", str2[:4])
	
	  // 비교
	  fmt.Println("", str1 == str2) // false
	  fmt.Println("", str1 != str2) // true
	  // 문자열 비교할때 아스키 코드에 대한 사전식 비교
	  fmt.Println("", str1 > str2) // false
	  fmt.Println("", str1 < str2) // true
	
	  // 결합 : 일반 연산
	  str3 := "abcdefg" + "hijklmn"
	  str4 := "opqrstuvwxyz"
	  fmt.Println(str3 + str4)
	  // 결합 : join함수 사용, 추천방법 (일반연산보다 속도가 빠르다)
	  strSet := []string{} // 슬라이스 선언
	  strSet = append(strSet, str3)
	  strSet = append(strSet, str4)
	
	  fmt.Println(strings.Join(strSet, ""))
	  fmt.Println(strings.Join(strSet, "------"))
  }
  ``` 
