
import { Feature } from "../../components"
import "./whatgpt3.css"
const WhatGPT3 = () => {
  const data = [

    {

      title:"what is gpt3",
      text:"send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3",
      text:"send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3",
      text:"send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter "
    },
    {

      title:"what is gpt3",
      text:"send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter send tg4e code and the4 nameo fth efke ti tthe counter "
    }
  ]
  return (
    <div className="gpt3__whatgpt3 section__margin"


      id="wgpt3">

      <div className="gpt3__what-feature">
        <Feature text={data[0].text} title={data[0].title}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Possibilities beyong your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature text={data[1].text} title={data[1].title} />
        <Feature text={data[2].text} title={data[2].title} />
        <Feature text={data[3].text} title={data[3].title} />
      </div>
    </div>
  )
}

export default WhatGPT3