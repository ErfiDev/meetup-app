import Link from "next/link";

const HomePage = ()=> {
    return (
        <>
            <title>hello</title>
            <Link href="/news">
                link to news
            </Link>{"  "}
            <Link href={`/news/salam`}>
                dynamic route
            </Link>{"  "}
            <Link href={"/news/something"}>
                Something
            </Link>
        </>
    )
}

export default HomePage;