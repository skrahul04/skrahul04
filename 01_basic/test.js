function generateOTP() {
    // Generate a random 6-digit number
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

// Example usage
const otp = generateOTP();
console.log("Your OTP is:", otp);