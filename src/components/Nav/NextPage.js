import {Link} from 'react-router-dom';
import ScrollFadein from '../Layout/ScrollFadein';

const NextPage = ({name, url}) => {
    return (
        <section className='next-page'>
            <ScrollFadein>
                <div className='wrapper'>
                    <p>You've reached the end of this page, let me help you get to the next one.</p>
                    <button className='btn1'>
                        <span className='shadow'></span>
                        <Link to={url}>{name}</Link>
                    </button>
                </div>
            </ScrollFadein>
        </section>
    )
}

export default NextPage