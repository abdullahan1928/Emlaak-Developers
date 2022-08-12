import './Home.scss'
import EmlaakLogo from '../../assets/EmlaakLogo.png'
import WhatsappBtn from '../../components/WhatsappBtn/WhatsappBtn'

const Home = () => {
    return (
        <div className='home-container'>
            <h2 className='welcome-msg'>
                Welcome to
                <img src={EmlaakLogo} alt="Emlaak Logo" className='welcome-logo' />
                Marketing
            </h2>
            <p className='intro-para'>
                Emlaak Marketing is an expert land advertising firm claims a group of profoundly experts and specialists to give the best venture counsel and land administrations to our significant customers.
            </p>
            <WhatsappBtn />
        </div>
    )
}

export default Home