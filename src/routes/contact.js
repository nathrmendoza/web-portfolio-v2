import Layout from '../components/Layout/Layout'
import Form from '../components/Form'
import ScrollFadein from '../components/Layout/ScrollFadein'

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
        </Layout>
    )
}

export default Contact