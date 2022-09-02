//IF문(3)

package main

import "fmt"

func main() {
	i := 100

	if i >= 120 {
		fmt.Println("120 이상")
	} else if i >= 100 && i < 120 {
		fmt.Println("100 이상 120미만")

	} else if i < 100 && i >= 50 {
		fmt.Println("50 이상 100미만")

	} else {
		fmt.Println("50 미만")
	}

}
