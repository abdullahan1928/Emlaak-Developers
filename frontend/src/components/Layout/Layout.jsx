import Navbar from '../Navbar/Navbar'
import WhatsappBtn from '../WhatsappBtn/WhatsappBtn'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <WhatsappBtn />
            <Footer />
        </>
    )
}

export default Layout