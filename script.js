                                   //task1
// var number1=parseInt(prompt("1ci ededi daxil edin"));
// var number2=parseInt(prompt("2ci ededi daxil edin"));
// var number3=parseInt(prompt("3ci ededi daxil edin"));

// var answer= (number1 + number2 + number3) / 3
// console.log(answer)
                                //task2
// var number1=parseInt(prompt("1ci ededi daxil edin"));
// var number2=parseInt(prompt("2ci ededi daxil edin"));
// var number3=parseInt(prompt("3ci ededi daxil edin"));

// if(number1 + number2 > number3 && number2 + number3 > number1 && number1 + number3 > number1){
//     console.log(true);
// }
// else{
//     console.log(false)
// }
                                //task3
// var ad=prompt("adinizi yazin")
// var soyad=prompt("soyadinizi yazin")
// var fullname=ad + " " + soyad
// console.log(fullname)
                                //task4
var height=parseInt(prompt("insert your height"))
var weight=parseInt(prompt("insert your weight "))
var bmi=weight / (height ** height)
if(bmi > 25){
    console.log("gombulsan")
}
else if(bmi > 18.5 && bmi <24.9){
    console.log("normalsan")
}
else if(bmi < 18.5){
    console.log("olursenki lap")
}