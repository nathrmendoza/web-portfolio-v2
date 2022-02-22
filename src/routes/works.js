
import Layout from "../components/Layout/Layout"
import WorkItem from "../components/Works/WorkItem"

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
                        <WorkItem url="https://usashopper.ph/" src="usashopper.png">
                            <h3>USA Shopper</h3>
                            <p>Very clean site with complex layouts. Built with standard frontend languages.</p>
                        </WorkItem>
                        <WorkItem url="https://isocholdings.com/" src="isocholdings.png">
                            <h3>ISOC Holdings</h3>
                            <p>One of the first sites where I've applied animations on. Has a clean and user friendly design and layout.</p>
                        </WorkItem>
                        <WorkItem url="https://concretemastersinc.com/" src="concrete-masters.png">
                            <h3>Concrete Masters Inc.</h3>
                            <p>Started to improve my animations in this project. Also applied some complex features eg. the counter on banner.</p>
                        </WorkItem>
                        <WorkItem url="https://sapporoproducts.com/" src="sapporo.png">
                            <h3>Sapporo Products</h3>
                            <p>One of the projects I've handled with complex layout/design.</p>
                        </WorkItem>
                        <WorkItem url="https://www.cuadroph.com/" src="cuadro.png">
                            <h3>Cuadro PH</h3>
                            <p>Very intuitive website. Most proud of what I did with the picture cropping and frame changing feature</p>
                        </WorkItem>
                        <WorkItem url="https://stalucialand.com.ph/" src="stalucia.png">
                            <h3>Sta. Lucia Land Inc.</h3>
                            <p>Revamped the look of sta lucia land's site. Pretty neat project.</p>
                        </WorkItem>
                        <WorkItem url="https://www.ayalalandlogistics.com/" src="ayalaland.png">
                            <h3>AyalaLand Logistics Holdings Corp.</h3>
                            <p>Also did a revamp for AyalaLand. Fairly simple conversion.</p>
                        </WorkItem>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Works