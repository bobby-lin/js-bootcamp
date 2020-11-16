let isValidPassword = function(password) {
    return !password.includes("password") && password.length > 8
}


console.log(isValidPassword("123"))
console.log(isValidPassword("password123"))
console.log(isValidPassword("123hraota12313adads"))