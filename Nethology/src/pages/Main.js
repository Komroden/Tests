import React from 'react';
import {Loader} from "../components/Loader/Loader";
import {useFetch} from "../hooks/useFetch";
import {Content} from "../components/Content/Content";

export const Main = () => {
    const {data,loading}=useFetch('https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json');
    return (
        <>
            {loading?<Loader/>:<Content data={data.length!==0?data:{data:[]}}/>}

        </>
    );
};

