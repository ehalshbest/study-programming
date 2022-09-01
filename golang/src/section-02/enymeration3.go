// 열거형1
package main

import "fmt"

func main() {

	const (
		_ = iota // _은 스킵처리.
		A
		_
		C
	)

	fmt.Println(A, C)

	const (
		_ = iota + 0.75*2
		DEFAULT
		SILVER
		GOLD
		PLATINUM
	)

	fmt.Println(DEFAULT, SILVER, GOLD, PLATINUM)
}
