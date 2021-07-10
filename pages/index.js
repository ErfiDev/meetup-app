import Link from "next/link";
import {useEffect} from "react";

const HomePage = ()=> {
    useEffect(()=> {
        console.log("use effect has working");
    } , []);
    return (
        <>
            <title>hello</title>
            <Link href="/news">
                link
            </Link>&nbsp;
            <Link href="/news/somthing">
                link2
            </Link>&nbsp;
            <Link href={`/news/salam`}>
                link3
            </Link>
        </>
    )
}

export default HomePage;