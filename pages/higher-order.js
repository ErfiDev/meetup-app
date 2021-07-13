import {useRouter} from "next/router";
import {useEffect} from "react";

const HigherOrder = (props)=>{
    let router = useRouter();

    useEffect(()=> {
        console.log(router)
    }  , []);

    return (
        <div className="higher-order">
            {props.children}
        </div>
    );
}

export default HigherOrder