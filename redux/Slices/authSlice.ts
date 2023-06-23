import { findUserByEmail } from "@/Functions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

    type recipeType = {
        id: number,
        title: string,
        description: string,
        ingredients: string[],
        image: string,
    };

    type authDataState = UserType[];    

    type RecipeDataProps = {
        data: recipeType,
        isAuth: string,
    };

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

        },
    });

    export const {
        signUp,
        createAuthDataStore,
        signIn,
        signOut,
    } = authorization.actions;
    export default authorization.reducer;



