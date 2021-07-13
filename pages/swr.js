import useSwr from "swr";

const SwrComponent = ()=> {
    const {data , error} = useSwr("https://jsonplaceholder.typicode.com/users" , fetch);

    if(error) return <h1>Error</h1>
    if(!data) return <h1>Loading....</h1>
    if(data) {
        data.json().then(res => console.log(res))
            .catch(err => console.log(err));
        return (
            <h1>
                json
            </h1>
        )
    }

}

export default SwrComponent