/*What is your letter grade?

Write an if/else statement for the following requirements:

If student gets 90 or higher: console log A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

/* let grade = Math.floor(Math.random()*101);
console.log('Your grade is ' + grade);

if (grade >= 90) {
  console.log("A");
}
else if (grade < 90 && grade >= 80) {
  console.log("B");
}else if (grade < 80 && grade >= 70) {
  console.log("C");
} else if (grade < 69 && grade >= 55) {
  console.log("D");
} else {
  console.log("F");
} 

console.log('Even with extra credit your grade is still ' + grade + ` So it's `)
switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 55 or greater
	case grade >= 55:
		console.log("D");
		break;
	// Anything 55 or below is failing
 	default:
        console.log('F');
}*/

/*let age = Math.floor(Math.random() * 22)
console.log(`Age: ` + age)

if(age >= 18){
	console.log(`Older than 18`)
}else if(age < 18){
	console.log(`Younger than 18`)
}else if (age >= 21){
	console.log(`Adult`)
}*/

let num = Math.floor(Math.random() * 101);

   
    if (num > 0) {
      console.log(num + ` is positive.`);
    } else if (num == 0){
		console.log(num + ` not positive or negative.`);
	}else {
		console.log(num + ` is negative.`)
	}

    /*Test 
	num = Math.floor(Math.random() * 101);
    console.log(num);
	*/

	if (num > 100 ) {
		console.log(num + ` is positive and greater than 100.`);
	  } else if (num == 0){
		  console.log(num + ` not positive or negative.`);
	  }else {
		  console.log(num + ` is negative.`)
	  }