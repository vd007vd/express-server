import validateEmail from "./helper";
import {users} from "../constants"



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
// validateUsers(users);

export default validateUsers;