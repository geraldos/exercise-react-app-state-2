
import React, { Component } from 'react'
import StudentInfo from '../../StudentInfo/StudentInfo'
import image from '../../assets/Images/Heading.jpg'
import CardCourses from '../../CardCourses/CardCourses'
import './LandingPage.css'


//class component
class LandingPages extends Component {
    state = {
        name:'Geraldo Sepdwijaya',
        avatar:image,
        address:'Kp Bojong Binong No.114',
        motto:'Watch and Learn, Programming membuatku Bahagia dan selalu berpikir',
        card: [{
            iframe:'https://www.youtube.com/embed/DLX62G4lc44',
            cardTitle: 'React JS',
            cardDescription: 'Learn React JS for building Powerfull Website'
        },
        {
            iframe:'https://www.youtube.com/embed/qSRrxpdMpVc',
            cardTitle: 'React Native',
            cardDescription: 'Learn React Native for building Powerfull mobile applications'
        }]
    }

    render() {
        let cards = this.state.card.map((card, index) => {
            return <CardCourses key={index} iframe={card.iframe} cardsTitle={card.cardTitle} cardsDescription={card.cardDescription}/>
        })

        return (
            <div>
                <StudentInfo avatar={this.state.avatar} name={this.state.name} address={this.state.address} motto={this.state.motto}/>
                <div className='position'>
                    {cards}
                </div>                
            </div>
        )
    }
}

export default LandingPages;