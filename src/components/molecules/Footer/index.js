import React from 'react'
import { icDc, icFb, icGh, icIn, icTe, icTw, logo } from '../../../assets'
import './footer.scss'

const Icon = ({ image }) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={image} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img className='logo' src={logo} alt='logo' />
                </div>
                <div className='social-wrapper'>
                    <Icon image={icFb} />
                    <Icon image={icTw} />
                    <Icon image={icIn} />
                    <Icon image={icTe} />
                    <Icon image={icDc} />
                    <Icon image={icGh} />
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer