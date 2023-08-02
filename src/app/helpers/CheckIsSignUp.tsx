"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { createAuthDataStore } from "../../../redux/Slices/authSlice";
import { takeData } from "@/Functions";

const CheckIsSignUp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(createAuthDataStore(takeData('Users')))
    }, []);
    return null
};

export default CheckIsSignUp;