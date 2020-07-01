import React from 'react'
import './CardCourses.css'

function CardCourses(props) {
    console.log(props)
    return(
        <div>
            <div className="column">
                <div className="card">
                <iframe width="100" height="100" title='Youtubes' src={props.iframe} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <div className='text'>
                        <p className='description'>{props.cardsTitle}</p>
                        <p className='description'>{props.cardsDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCourses