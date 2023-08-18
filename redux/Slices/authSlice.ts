import { checkFavoriteRecipe, findAuthUser, findUserByEmail } from "@/Functions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

    type authDataState = UserType[];    

    const initialState: authDataState = [];

    export const authorization = createSlice({
        name: "Users",
        initialState,   
        reducers: {
            createAuthDataStore: (state, action: PayloadAction<authDataState>) =>{
                if (action.payload !== null) {
                    action.payload.map(item => state.push(item))
                }
            },
            
            signUp: (state, action: PayloadAction<UserType>) => {
                const newUser = {...action.payload, favorite:[], isAuth: false}
                state.push(newUser);
                localStorage.setItem('Users', JSON.stringify(state));
            },

            signIn: (state, action: PayloadAction<string>) => {
                const User = state[findUserByEmail(state, action.payload)];
                User.isAuth = true;
                localStorage.setItem('Users', JSON.stringify(state));
            },

            signOut: (state, action: PayloadAction<string>) => {
                const User = state[findUserByEmail(state, action.payload)];
                User.isAuth = false;
                localStorage.setItem('Users', JSON.stringify(state));
            }, 

            addUserFavorite: (state, action: PayloadAction<recipeType>) => {

                const User = findAuthUser(state);
                const test = checkFavoriteRecipe(state, action.payload.id)
                
                if ( test  === null) {
                    User?.favorite?.push(action.payload);
                }
                
                localStorage.setItem('Users', JSON.stringify(state));
            },
        },
    });

    export const {
        signUp,
        createAuthDataStore,
        signIn,
        signOut,
        addUserFavorite,
    } = authorization.actions;
    export default authorization.reducer;



