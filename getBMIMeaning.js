const { template } = require('@babel/core')

let BMI
function calculateBMI(weight, height) {
  BMI = weight / (height*height)
  return BMI
}
function getBMIMeaning(weight, height) {
  calculateBMI(weight, height)
  if(BMI<18.5){
    return 'Underweight'
  }
  if(18.5< BMI && BMI<24.9){
    return 'Normal weight'
  }
  if(BMI>25.0)
    return 'Overweight'
}
module.exports = getBMIMeaning
