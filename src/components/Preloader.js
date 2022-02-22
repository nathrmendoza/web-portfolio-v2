import {useEffect} from 'react'
import {FaSpinner} from 'react-icons/fa'

const Preloader = () => {

    useEffect(()=> {
        window.setTimeout(function() {
            document.querySelector('#preloader').classList.add('hide');
        }, 300);
    },[]);

    return (
        <div id="preloader">
            <div className='preloader-wrap'>
                <FaSpinner />
                <h4>Loading, please wait...</h4>
            </div>
        </div>
    )
}

export default Preloader