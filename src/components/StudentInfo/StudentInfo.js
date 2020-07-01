import React from 'react'
import './StudentInfo.css'

function StudentInfo(props) {
    return(
        <div className='data'>
            <div>
                <img  className='img' src={props.avatar} alt="avatar"/>
            </div>
            
            <div className='dataInfo'>
                <h1 className='name'>{props.name}</h1>
                <p  className='alamat' >{props.address}</p>
                <p className='motto'>{props.motto}</p>
            </div>
            
        </div>
    )
}

export default StudentInfo