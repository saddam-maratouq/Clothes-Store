
import  {UserActionTypes} from './user.type'



export  const setCurentUser = user => ({ 

    type : UserActionTypes.SET_CURRENT_USER ,
    payload : user 
})

     
