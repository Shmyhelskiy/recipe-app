"use client"
import { takeData } from "@/Functions";
import { createAuthDataStore } from "../../../redux/Slices/authSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";

const LoudingData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(createAuthDataStore(takeData('Users')))
    }, [dispatch]);
    return null;
};

export default LoudingData;