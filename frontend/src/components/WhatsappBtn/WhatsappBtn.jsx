import './WhatsappBtn.scss'
import FloatingWhatsApp from 'react-floating-whatsapp'
import EmlaakLogo from "../../assets/EmlaakLogo.jpg";

const WhatsappBtn = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+923366364016"
            accountName='Emlaak Developers'
            avatar={EmlaakLogo}
            statusMessage='Typically replies within 1 hour'
            chatMessage={'Hi,I am from Emlaak Developers.\nHow can I help you?😊'}
            placeholder={'Type your message here'}
            darkMode={true}
            allowClickAway={true}
            allowEsc={true}
            className='whatsapp-btn'
        />
    )
}

export default WhatsappBtn