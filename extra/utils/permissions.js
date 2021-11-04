
import {permissions} from '../constants'

 let hasPermission = (moduleName, role, permissionType) => {
    const isModulePresent = permissions[moduleName];
    
    if(!isModulePresent || !isModulePresent[permissionType]){
        console.log(`${moduleName} and/or ${permissionType} is invalid`);
        return false;
    }
    if(!permissions[moduleName].all.includes(role) && !permissions[moduleName][permissionType].includes(role)){
    console.log(`${role} does not have ${permissionType} permissions`)
    return false;
    }
    console.log(`${role} has ${permissionType} permissions`)
    return true;
}

// hasPermission('getUsers','trainee','read')   
// trainee has read permissions

export default hasPermission;