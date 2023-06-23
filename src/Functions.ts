export const takeData = (name:string) => {
    const storedUsers = localStorage.getItem(name);
    
    if (storedUsers !== null) {
        return JSON.parse(storedUsers)
    } 
        else return null
}
export const findUserByEmail = (state: authDataState, email: string) => {
    return state.findIndex(item => item.email === email)
}

export const findAuthUser = ( state: authDataState) => {
    return state.find(item => item.isAuth === true)
}
