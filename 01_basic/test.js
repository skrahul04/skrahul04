function generateOTP() {
  
 const otp = Math.floor(1000 + Math.random() * 9000)
 return otp;
}


const otp = generateOTP();
console.log("Your OTP is:", otp);