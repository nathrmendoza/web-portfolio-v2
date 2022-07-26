//layout
import Layout from '../components/Layout/Layout'
import ScrollFadein from '../components/Layout/ScrollFadein'

//images
import photo from '../assets/pic-of-me.jpg'

//components
import NextPage from '../components/Nav/NextPage'
import Scene3d from '../components/Scene3d'

import ToolsList from '../components/ToolsList'

//icons
// import {BsMusicNote} from 'react-icons/bs'
// import {GiPaintBrush, GiKnifeFork} from 'react-icons/gi'
// import {CgGym} from 'react-icons/cg'

const Home = () => {
    return (
        <Layout pagename='home'>
            <section className="home-hero">
                <div className='wrapper'>
                    <div className="model">
                        <Scene3d/>
                    </div>

                    <div className="profile">
                        <aside className="photo-cont">
                            <img src={photo} alt='pic-of-me'/>
                            <span className='frame'></span>
                        </aside>
                        <article>
                            <h2>Nath Mendoza</h2>
                            <p>Web developer based&nbsp;in&nbsp;Phil.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className='who'>
                <ScrollFadein>
                    <div className='wrapper'>
                        <h3>Who</h3>
                        <p>Nathaniel Mendoza, Nath in short, is an experienced web developer based in MANILA Philippines. 
                            He has gained experience in building web apps that offer digital services with varying types and complexity. 
                            Nath is quite passionate in the process of creating things. He is creative in how he approaches problems, solving them in unique ways.</p>
                    </div>
                </ScrollFadein>
            </section>

            <section className='bio'>
                <ScrollFadein>
                    <div className='wrapper'>
                        <h3>Bio</h3>
                        <div className='bio-item'>
                            <span className='year'>2016</span>
                            Started a BS in Entertainment and Multimedia Computing degree in CIIT College of Arts and technology.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2019</span>
                            Internship at UP Diliman, College of Social Science and Philosophy.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2019</span>
                            Front-end developer at Optimind Technology Solutions, primarily worked with PH companies but also handled projects from HK.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2021</span>
                            Front-end developer at Sonnet Digital, worked with foreign clients AU and US.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>PRSNT</span>
                            Still at Sonnet Digital. Working on freelance projects.
                        </div>
                    </div>
                </ScrollFadein>
            </section>

            <section className='tools-of-trade'>
                    <div className='wrapper'>
                        <h3>Tools of Trade</h3>
                        <p>Below I've listed the technologies utilized in my projects. Gained proficiency using these tools through experience and interest in adapting to project quality standards.</p>
                        <ToolsList/>
                    </div>
            </section>

            <NextPage name="Works" url="/works"/>
        </Layout>
    )
}

export default Home