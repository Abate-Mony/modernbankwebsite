import React from 'react'
import { Feature } from '../../components'
import "./features.css"
const Features = () => {
  const featuresData = [

    {

      title:"what is gpt3 send the code and the name of the code",
      text:"nameo fth efke ti tthe counter nameo fth efke ti tthe counter nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3 send the code and the name of the code",
      text:"nameo fth efke ti tthe counter nameo fth efke ti tthe counter nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3 send the code and the name of the code",
      text:"nameo fth efke ti tthe counter nameo fth efke ti tthe counter nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3 send the code and the name of the code",
      text:"nameo fth efke ti tthe counter nameo fth efke ti tthe counter nameo fth efke ti tthe counter "
    }
  ]
  return (
    <div className='gpt3__features section__padding' id='features'>

      <div className="gpt3__features-heading">

        <h1 className="gradient__text">
          The future is Now and You Just to realixe it .step into future  today & make it happen
        </h1>
        <p>Request earlier access to get started</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map(({title,text},index)=><Feature title={title} text={text}/>)}
      
      </div>
    </div>
  )
}

export default Features