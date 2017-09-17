import React from "react";

class News extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">New Articles</h3>
        </div>
        <div className="panel-body text-center">
          {(this.props.News.data) && this.props.News.data.map((data)=>{
            return(
              <p id ='articlesPost' data-id={data._id}> {data.title} <button data-id={ data._id} data-title={data.title} data-link={data.link} id='saveArticles' style={{position: 'relative', right: -20,}} >Save</button><br /> {data.link} </p>
            )
          }
          )}
        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default News;
