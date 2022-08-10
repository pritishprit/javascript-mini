function bmiCal(weight, height){

    var bmi = weight/(height*height);
    return bmi;
}
var bmi = Math.round(bmiCal(80, 1.5));
console.log(bmi)