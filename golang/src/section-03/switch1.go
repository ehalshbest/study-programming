//Switch문(1)

package main

import "fmt"

func main() {
	//제어문(조거문)
	// switch 뒤 표현식 생략 가능
	// case 뒤 표현식 사용 가능
	// 자동 break 때문에 fallthrouth whswo
	// Type 분기 -> 값이 아닌 변수 Type으로 분기 가능
	a := -7
	switch {
	case a < 0:
		fmt.Println(a, "는 음수")
	case a == 0:
		fmt.Println(a, "는 0")
	case a > 0:
		fmt.Println(a, "는 양수")
	}

	switch b := 27; {
	case b < 0:
		fmt.Println(b, "는 음수")
	case b == 0:
		fmt.Println(b, "는 0")
	case b > 0:
		fmt.Println(b, "는 양수")
	}

	switch c := "go"; c {
	case "go":
		fmt.Println("go")
	case "java":
		fmt.Println("java")
	default:
		fmt.Println("일치하는 값 없음")
	}

	switch c := "go"; c + "lang" {
	case "golang":
		fmt.Println("golang!")
	case "java":
		fmt.Println("java!")
	default:
		fmt.Println("None!")
	}

	switch i, j := 20, 30; {
	case i < j:
		fmt.Println("i < j")
	case i == j:
		fmt.Println("i == j")
	case i > j:
		fmt.Println("i > j")
	}

}
