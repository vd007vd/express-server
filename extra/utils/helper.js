let validateEmail = (email) =>{
    const regex=/@successive.tech$/i;
    return regex.test(email);
}

export default validateEmail;