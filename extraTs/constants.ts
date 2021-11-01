import { IPermissions, IUsers } from "./interfaces"

export const permissions : IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    }
}

export const users: IUsers[] = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail:'trainee2@successive.tech',
        reviewerEmail:'reviewer2@gmail.com'
    }
]