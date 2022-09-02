//For문(1)

package main

import "fmt"

func main() {

	// Go에서 유일하게 제고되는 반복문

	for i := 0; i < 5; i++ {
		fmt.Println("ex1 : ", i)
	}

	/*/// 에러 발생1
	for i := 0; i < 5; i++
	{
		fmt.Println("ex1 : ", i)
	}
	//*/ //

	/*/// 에러 발생2
	for i := 0; i < 5; i++
		fmt.Println("ex1 : ", i)
	//*/ //

	/*/// 에러 발생3(무한루프)
	for {
		fmt.Println("Hello, Golang!")
	}
	//*/

	// 예제3 ( Rnage용법)
	loc := []string{"Seoul", "Busan", "Incheon"}
	for index, name := range loc {
		fmt.Println("ex3 : ", index, name)
	}

	for _, name := range loc {
		fmt.Println("ex3 : ", name)
	}

	fmt.Println("1")
}
