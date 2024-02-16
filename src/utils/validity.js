export const checkValidData = (email, password) => {
    // const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullname);
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    // if(!isValidName)
    //     return "Name is not valid!";
    if(!isValidEmail)
        return "Email Id is not vaild!";
    if(!isPasswordValid)
        return "Password is not valid!";

    return null;
}