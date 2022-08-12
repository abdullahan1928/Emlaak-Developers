import Navbar from '../Navbar/Navbar'
import WhatsappBtn from '../WhatsappBtn/WhatsappBtn'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <WhatsappBtn />
        </>
    )
}

export default Layout