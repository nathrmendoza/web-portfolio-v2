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
                        </aside>
                        <article>
                            <h2>Nath Mendoza</h2>
                            <p>Front-end developer based&nbsp;in&nbsp;Phil.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className='who'>
                <ScrollFadein>
                    <div className='wrapper'>
                        <h3>Who</h3>
                        <p>Nathaniel Mendoza, Nath in short, is an experienced front-end developer based in MANILA Philippines. 
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
                            <span className='year'>1998</span>
                            Born and raised in Marikina, PH
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2016</span>
                            Started a BS in Entertainment and Multimedia Computing degree in CIIT College of Arts and technology.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2019</span>
                            Did internship at UP Diliman, College of Social Science and Philosophy.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2019</span>
                            Worked fulltime as a front-end developer at Optimind Technology Solutions. Stayed for 2 years.
                        </div>
                        <div className='bio-item'>
                            <span className='year'>2021 - Present</span>
                            Working fulltime, front-end developer at Sonnet Digital PH.
                        </div>
                    </div>
                </ScrollFadein>
            </section>

            {/* <section className='hobbies'>
                <ScrollFadein>
                    <div className='wrapper'>
                        <h3>Hobbies</h3>
                        <p>Aside from coding, I've got other stuff that I'm pretty passionate about as well.</p>
                        <div className='hobby-list'>
                            <div className='hobby-item'>
                                <h5 className='topic'>Music<BsMusicNote/></h5>
                                <p>Growing up, music is that one thing that I am deeply passionate in. 
                                I love playing various instruments (very experienced in string instruments btw) and creating my own renditions on songs.
                                Music is my language, and it'll continue to be for a long time.</p>
                            </div>
                            <div className='hobby-item'>
                                <h5 className='topic'>Art<GiPaintBrush/></h5>
                                <p>Art is one of my hobbies that I'd like to get better at. I'm very interested in artstyles that are geometric and proportionate. 
                                I'm currently improving my skills in creating 3d models which I'm very fond of making. I'd like to pick up the art of 
                                photography at some point.</p>
                            </div>
                            <div className='hobby-item'>
                                <h5 className='topic'>Food<GiKnifeFork/></h5>
                                <p>Food is something, I guess, engraved in my genes. I love food from look, smell and taste. I also am fond of cooking food.</p>
                            </div>
                            <div className='hobby-item'>
                                <h5 className='topic'>Excercise / Gym / Outdoor<CgGym/></h5>
                                <p>I'm not that good at sports, but if there's one thing that makes my blood pump it would be excercising. I am fond of going to the gym and
                                the process of developing my body is something I'm passionate in. I also enjoy outdoor sports like biking, running.</p>
                            </div>
                        </div>
                    </div>
                </ScrollFadein>
            </section> */}

            <section className='tools-of-trade'>
                    <div className='wrapper'>
                        <h3>Tools of Trade</h3>
                        <p>Below I've listed the technologies that I work with. I've gained proficient knowledge in these tools thru experience and self learning.</p>
                        <ToolsList/>
                    </div>
            </section>

            <NextPage name="Works" url="/works"/>
        </Layout>
    )
}

export default Home