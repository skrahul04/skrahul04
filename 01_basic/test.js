function generateOtp(){

const otp = math.floor(1000 + math.random()* 9000)

return otp;
 }

console.log(generateOtp())