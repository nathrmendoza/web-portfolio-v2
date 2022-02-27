import Layout from '../components/Layout/Layout'
import Form from '../components/Form'

const Contact = () => {
    return (
        <Layout pagename="contact">
            <section className='contact-me'>
                <div className='wrapper'>
                    <h1>Contact me</h1>
                    <p>If you're interested in the work I do, feel free to reach out to me thru my email and social accounts.</p>

                    <div className='inquiry-request'>
                        <Form/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact