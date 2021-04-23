export const usersReducer=(state={},action)=>{
    console.log(action.payload,"ygfygygy")
    switch (action.type) {
        case "USER":
            
            return {...action.payload}
    
        default:
            return state;
    }
}