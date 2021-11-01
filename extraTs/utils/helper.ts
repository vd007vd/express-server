let validateEmail = (email : string):boolean =>{
    const regex=/@successive.tech$/i;
    return regex.test(email);
}

export default validateEmail;