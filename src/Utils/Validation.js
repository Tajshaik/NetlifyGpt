export function Validation(email,password,signUp,name){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/

    if(!emailRegex.test(email)){
         return("Email ID is not valid")
    }
    if(!passwordRegex.test(password)){
        return("Password is not valid")
    }
    if(signUp === true){
    if(!nameRegex.test(name)){
        return "Name is not valid."
    } }

    return null
}