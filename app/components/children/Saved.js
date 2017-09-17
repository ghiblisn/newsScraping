import React from "react";

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   var newState = {};
  //   newState[event.target.id] = event.target.value;
  //   this.setState(newState);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("CLICK");
  //   console.log(this.state.term);
  //   this.props.setTerm(this.state.term);
  //   this.setState({ term: "" });
  // }

  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          {(this.props.Saved.data) && this.props.Saved.data.map((data)=>{
            return(
              <p id ='savedArticlesPost' data-id={data._id}> {data.title} <button data-id={ data._id} data-title={data.title} data-link={data.link} id='removeArticles' style={{position: 'relative', right: -20,}} >Remove</button><br /> {data.link} </p>
            )
          }
          )}
        </div>
      </div>
    );
  }
}

export default Saved;
