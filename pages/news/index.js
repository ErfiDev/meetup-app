import {useState , useEffect} from "react";
import Link from "next/link";

export async function getStaticProps(){
    let get = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await get.json();

    if(!res){
        return {
            redirect : {
                destination: "/news/somthing",
            }
        }
    } else {
        return {
            props: {res}
        }
    }
}

const Index = (props)=> {
    let {res} = props;
    return (
        <ul>
            {res.map((item) => (
                <li key={item.id}>
                    <Link href={`/news/${encodeURIComponent(item.username)}`}>
                        <a>
                            {item.id}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default Index