import { useState } from "react";
import { House } from "../types/house";
import config from "../config";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate, useNavigation } from "react-router-dom";

const useFetchHouses = () =>{
        return useQuery<House[], AxiosError>("houses",() => 
        axios.get(`${config.baseAPIURL}/houses`).then(
        (resp)=> resp.data)
    );
}

const useFetchHouse = (id:number) =>{
    return useQuery<House, AxiosError>(["houses",id], () =>
    axios.get(`${config.baseAPIURL}/house/${id}`).then(
        (resp)=> resp.data)
    );
}


const useAddHouse =() =>{
    const nav = useNavigate();
    const queryClient = useQueryClient()
    return useMutation<AxiosResponse, AxiosError, House>(
        (h) => axios.post(`${config.baseAPIURL}/houses`, h),
        {
            onSuccess: ()=>
            {
                queryClient.invalidateQueries("houses");
                nav("/");
            } 
        }
    )
}

const useUpdateHouse =() =>{
    const nav = useNavigate();
    const queryClient = useQueryClient()
    return useMutation<AxiosResponse, AxiosError, House>(
        (h) => axios.put(`${config.baseAPIURL}/houses`, h),
        {
            onSuccess: (_,house)=>
            {
                queryClient.invalidateQueries("houses");
                nav(`/house/${house.id}`);
            } 
        }
    )
}

const useDeleteHouse =() =>{
    const nav = useNavigate();
    const queryClient = useQueryClient()
    return useMutation<AxiosResponse, AxiosError, House>(
        (h) => axios.put(`${config.baseAPIURL}/houses${h.id}`),
        {
            onSuccess: ()=>
            {
                queryClient.invalidateQueries("houses");
                nav(`/`);
            } 
        }
    )
}


export default useFetchHouses;
export {useFetchHouse, useAddHouse,useUpdateHouse,useDeleteHouse};