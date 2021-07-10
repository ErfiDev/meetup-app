import Link from "next/link";

const homePage = ()=> {
    return (
        <>
            <title>hello</title>
            <Link href="/news">
                link
            </Link>
            <Link href="/news/somthing">
                link2
            </Link>
            <Link href={`/news/salam`}>
                link3
            </Link>
        </>
    )
}

export default homePage;