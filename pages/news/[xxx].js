import {withRouter} from "next/router"

const xxx = ({router})=> {
    let {asPath} = router;

    return <h1>{asPath}</h1>
}

export default withRouter(xxx);