import React from "react";

// Import sub-components
import Saved from "./children/Saved";
import News from "./children/News";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      News: "",
      Saved: ""
    };

    // this.setTerm = this.setTerm.bind(this);
  }

  componentDidMount(){
    helpers.getNews().then((data) => {
      if (data !== "") {
        this.setState({ News: data });
      }
    });
    helpers.getSavedNews().then((data) => {
      if (data !== "") {
        this.setState({ Saved: data });
      }
    });
  }

  // setTerm(term) {
  //   this.setState({
  //     searchTerm: term
  //   });
  // }

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">News Scrapping!</h2>
            <p className="text-center">
              <em>Save the news that you like!</em>
            </p>
          </div>

          <div className="row">

            <News News={this.state.News} />

          </div>

          <div className="row">

            <Saved Saved={this.state.Saved} />

          </div>

        </div>

      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;
