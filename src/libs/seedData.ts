import UserRepositories from "../repositories/user/UserRepository";

const userRepository : UserRepository = New UserRepository();

export default() => {
    userRepository.count()
    .then((res) => {
        if(res === 0){
            console.log('Inserting Data');
            userRepository.create({
                name: 'Head-Trainer',
                email: 'head.trainer@successive.tech',
                role: 'head-trainer',
                password: 'head'
            })
        }
    })
}