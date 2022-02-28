import Layout from '../components/Layout/Layout'
import Form from '../components/Form'
import ScrollFadein from '../components/Layout/ScrollFadein'

import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const Contact = () => {
    return (
        <Layout pagename="contact">
            <section className='contact-me'>
                <ScrollFadein>
                <div className='wrapper'>
                    <h1>Contact me</h1>
                    <p>If you're interested in the work I do, feel free to reach out thru this form. Alternatively, you could also get in touch with my social accounts.</p>

                    <div className='inquiry-request'>
                        <Form/>
                    </div>
                </div>
                </ScrollFadein>
            </section>

            <section className='social-plug'>
                <ScrollFadein>
                    <div className='wrapper'>
                        <h2>Here's my socials</h2>
                        <p>Fairly active on these mediums, feel free to reach&nbsp;out.</p>
                        <ul>
                            <li>
                                <button type="button" className='soc-icons fb-icon'>
                                    <span className='shadow'></span>
                                    <a href="https://www.facebook.com/neil328/" target="_blank" rel='noreferrer'><FaFacebookF/></a>
                                </button>
                            </li>
                            <li>
                                <button type="button" className='soc-icons tw-icon'>
                                    <span className='shadow'></span>
                                    <a href="https://twitter.com/thanrx98" target="_blank" rel='noreferrer'><FaTwitter/></a>
                                </button>
                            </li>
                            <li>
                                <button type="button" className='soc-icons ig-icon'>
                                    <span className='shadow'></span>
                                    <a href="https://www.instagram.com/mndoza.nath/" target="_blank" rel='noreferrer'><FaInstagram/></a>
                                </button>
                            </li>
                            <li>
                                <button type="button" className='soc-icons in-icon'>
                                    <span className='shadow'></span>
                                    <a href="https://www.linkedin.com/in/nathaniel-mendoza-425203163/" target="_blank" rel='noreferrer'><FaLinkedinIn/></a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </ScrollFadein>
            </section>
        </Layout>
    )
}

export default Contact