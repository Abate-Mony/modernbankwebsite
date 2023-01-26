
import "./blog.css"
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
const Blogs = () => {
  const ARTICLE_DATA = [
    {
      imgUrl: blog01,
      title: "send the cod ena dt the nameof the ffile to the count4er",
      date:"Sept 26,2021"
    },
    {
      imgUrl: blog02,
      title: "send the cod ena dt the nameof the ffile to the count4er",
      date:"Sept 26,2021"
    },
    {
      imgUrl: blog03,
      title: "send the cod ena dt the nameof the ffile to the count4er",
      date:"Sept 26,2021"
    },
    {
      imgUrl: blog04,
      title: "send the cod ena dt the nameof the ffile to the count4er",
      date:"Sept 26,2021"
    },
    {
      imgUrl: blog05,
      title: "send the cod ena dt the nameof the ffile to the count4er",
      date:"Sept 26,2021"
    }

  ]
  return (
    <div className="gpt3__blog section__padding">

      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening ,
          We are blogging about it .
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} alt="blogo1" />
        </div>
        <div className="gpt3__blog-container_groupB">
      {
      ARTICLE_DATA.map(({imgUrl,title,date},index)=> index!==0&&<Article index={index} imgUrl={imgUrl} title={title} date={date}/>)}
        </div>

      </div>

    </div>
  )
}

export default Blogs