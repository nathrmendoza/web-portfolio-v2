import { useEffect, useState } from 'react'
import {FaGlobeAsia} from 'react-icons/fa'

const WorkItem = ({children, url, src}) => {

    const [loaded, setLoad] = useState(false);

    useEffect(()=> {
        setLoad(true);
    },[])

    return (
        <div className={`work-item${(loaded) ? ' loaded' : ''}`}>
            <div className="item-wrap">
                <aside>
                    <img src={"./works-thumb/" + src} alt="project_thumbnail"/>
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