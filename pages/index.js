import Link from "next/link";

const HomePage = ()=> {
    return (
        <>
            <title>hello</title>
            <Link href="/news">
                link to news
            </Link><br />
            <Link href={`/news/salam`}>
                dynamic route
            </Link><br />
            <Link href={"/news/something"}>
                Something
            </Link><br />
            <Link href="/serverSide">Server Side Props</Link>
            <br />
            <Link href={"/swr"}>
                SWR
            </Link>
        </>
    )
}

export default HomePage;