// Go 특징 (1)

package main

import "fmt"

func main() {
	// Go : 모호하거나, 애매한 문법 금지
	// 후치(후의) 연산자 허용 { i++ }, 전치(전위) 연산자 비허용 ( ++i ) -> X
	// 증감연산 반환 값 없음 ( a = b++ ) -> X
	// 포인터( Pointer 허용, 연산 비허용)
	// 주석 ( //, /**/)

	//예제 1
	sum, i := 0, 0

	for i <= 100 {
		//sum += i++ // 컴파일 에러
		sum += i
		i++
		//++i 는 컴파일 에러
	}
	fmt.Println("ex1 : ", sum)
}
