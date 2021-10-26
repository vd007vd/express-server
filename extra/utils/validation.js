const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail:'trainee2@successive.tech',
        reviewerEmail:'reviewer2@gmail.com'
    }
]

let validateEmail = (email) =>{
    const regex=/@successive.tech$/i;
    return regex.test(email);
}

let validateUsers = (users) => {
    const validUsers = [];
    const invalidUsers = [];
    users.forEach((user)=> {
        const{traineeEmail,reviewerEmail} = user;
        if(validateEmail(traineeEmail)){
            validUsers.push(traineeEmail);
        }
        else{
            invalidUsers.push(traineeEmail);
        }
        if(validateEmail(reviewerEmail)){
            validUsers.push(reviewerEmail)
        }
        else{
            invalidUsers.push(reviewerEmail)
        }
    })

    let validNumber = validUsers.length;
    let invalidNumber = invalidUsers.length;
    console.log(`${validNumber} Users are Valid : \n`, validUsers)
    console.log(`${invalidNumber} Users are Invalid: \n`, invalidUsers)
}
validateUsers(users);