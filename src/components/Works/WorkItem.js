import { useEffect, useState } from 'react'
import {FaGlobeAsia} from 'react-icons/fa'

import LazyLoad from 'react-lazyload';

const WorkItem = ({children, url, src}) => {

    const [loaded, setLoad] = useState(false);

    useEffect(()=> {
        setLoad(true);
    },[])

    return (
        <div className={`work-item${(loaded) ? ' loaded' : ''}`}>
            <div className="item-wrap">
                <aside>
                    <LazyLoad height={133}>
                        <img src={"./works-thumb/" + src} alt="Project Thumbnail"/>
                    </LazyLoad>
                </aside>
                <article>
                    {children}
                </article>
                <a href={url} target="_blank" rel="noreferrer" className="visit-btn"><FaGlobeAsia/>Visit</a>
            </div>
        </div>
    )

}

export default WorkItem