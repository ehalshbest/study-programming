package main

import "fmt"

func main() {
	// 짤은 선언
	// 함수 안에서만 사용(전역X), 선언 재 할당 예외 발생.
	// 주로 제한된 범위의 함수내에서 사용 할 경우 코드 가독성을 높일 수 있다 -> 추천

	shortVar1 := 3
	shortVar2 := "Test"
	shortVar3 := false

	// shortVar1 := 10

	fmt.Println("shortVar1 : ", shortVar1, "shortVar2 : ", shortVar2, "shortVar3 : ", shortVar3)

	// Example
	if i := 10; i < 11 {
		fmt.Println("Short Variable Test Success!!")
	}
	for i := 0; i < 10; i++ {
		fmt.Println("i : ", i)
	}
}
