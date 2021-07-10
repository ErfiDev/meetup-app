import {useState , useEffect} from "react";
import Link from "next/link";

const index = (props)=> {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const xhr = new XMLHttpRequest();
            xhr.open("get", "https://jsonplaceholder.typicode.com/users");
            xhr.send();

            xhr.onreadystatechange = async () => {
                if (xhr.readyState === 4) {
                    let toJSON = JSON.parse(xhr.responseText);
                    await setData(toJSON);
                }
            }
        }

        getData()
    }, []);

    return (
        <div>
            {data.map((item) => (
                <li key={item.id}>
                    <Link href={`/news/${encodeURIComponent(item.username)}`}>
                        {item.username}
                    </Link>
                </li>
            ))}
        </div>
    )
}
export default index