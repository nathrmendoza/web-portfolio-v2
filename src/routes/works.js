
import Layout from "../components/Layout/Layout"
import WorkItem from "../components/Works/WorkItem"
import NextPage from "../components/Nav/NextPage"

const Works = () => {

    return (
        <Layout pagename="works">
            <section className="text-hero">
                <div className="wrapper">
                    <h1>Works</h1>
                    <p>I've listed below some of the projects I've made throughout my career as a developer. 
                        Some are works of my own and others are works I've made for the company I've worked for. Go ahead, take a gander.</p>
                </div>
            </section>

            <section className="works-list">
                <div className="wrapper">
                    <div className="inner-wrap">
                        <WorkItem url="https://stalucialand.com.ph/" src="stalucia.png">
                            <h3>Sta. Lucia Land Inc.</h3>
                            <p>Well known real estate company in the PH. A Revamped Wordpress site, worked primarily on the front-end however still did some improvements on the backend.</p>
                        </WorkItem>
                        <WorkItem url="https://www.ayalalandlogistics.com/" src="ayalaland.png">
                            <h3>AyalaLand Logistics Holdings Corp.</h3>
                            <p>A developer and operator of industrial parks, real estate logistics facilities and commercial centers. Revamped the front-end and optimized the backend.</p>
                        </WorkItem>
                        <WorkItem url="https://usashopper.ph/" src="usashopper.png">
                            <h3>USA Shopper</h3>
                            <p>Built a landing site and dashboard for a shipping company. Primarily used Wordpress as the&nbsp;CMS.</p>
                        </WorkItem>
                        <WorkItem url="https://isocholdings.com/" src="isocholdings.png">
                            <h3>ISOC Holdings</h3>
                            <p>An investment management company, built the site using Wordpress as the&nbsp;CMS.</p>
                        </WorkItem>
                        <WorkItem url="https://concretemastersinc.com/" src="concrete-masters.png">
                            <h3>Concrete Masters Inc.</h3>
                            <p>Pre-mixed concrete company, started to improve animations here, still using Wordpress for the&nbsp;backend</p>
                        </WorkItem>
                        <WorkItem url="https://sapporoproducts.com/" src="sapporo.png">
                            <h3>Sapporo Products</h3>
                            <p>A Wordpress website built for a noodles manufacturing company.</p>
                        </WorkItem>
                        <WorkItem url="https://www.cuadroph.com/" src="cuadro.png">
                            <h3>Cuadro PH</h3>
                            <p>Small local company providing customized frames, built with CodeIgniter. Worked on the front-end of the site most notably the photo editing feature.</p>
                        </WorkItem>
                        <WorkItem url="#" src="The_Economist_Logo.svg">
                            <h3>The Economist</h3>
                            <p>Worked on a few landing pages for The Economist, most notable ones are Huawei, Asia hub HK</p>
                        </WorkItem>
                    </div>
                </div>
            </section>

            <NextPage name="Contact me" url="/contact"/>
        </Layout>
    )
}

export default Works