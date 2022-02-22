import {Link} from 'react-router-dom';

const NextPage = ({name, url}) => {
    return (
        <section className='next-page'>
            <div className='wrapper'>
                <p>You've reached the end of this page, let me help you get to the next one.</p>
                <button className='btn1'>
                    <span className='shadow'></span>
                    <Link to={url}>{name}</Link>
                </button>
            </div>
        </section>
    )
}

export default NextPage