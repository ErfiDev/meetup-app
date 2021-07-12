const HigherOrder = (props)=>{
    return (
        <div className="higher-order">
            {props.children}
        </div>
    );
}

export async function getStaticProps(){
    return {
        notFound: true
    }
}

export default HigherOrder