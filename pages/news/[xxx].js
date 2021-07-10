import {withRouter} from "next/router"

const xxx = (props)=> {
    let {xxx} = props.router.query;
    console.log(props.thisIs);
    return <h1>{xxx}</h1>
}

export async function getStaticPaths() {
    let get = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await get.json();
    let paths = res.map(item => {
        return {
            params: {xxx : item.username}
        }
    })
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    return {
        props: {thisIs: context.params.xxx}
    }
}

export default withRouter(xxx);