const ServerSide = (props)=> {
    console.log(props);
    return (
        <h1>
           server side fetching data
        </h1>
    )
}

export async function getServerSideProps(context){
    let get = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await get.json();
    if(!res){
        return {
            notFound: true
        }
    } else {
        return {
            props: {res}
        }
    }
}

export default  ServerSide;