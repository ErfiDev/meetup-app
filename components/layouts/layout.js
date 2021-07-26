import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({children}){
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout