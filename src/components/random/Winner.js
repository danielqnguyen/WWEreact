import React from "react";
import YelpApi from "./YelpService";

class Winner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      information: [],
      address: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    if (!("info" in this.props.location)) {
      this.props.history.push("/");
    } else {
      YelpApi.yelpById(this.props.location.info, response => {
        this.setState({
          information: response.data,
          address: response.data.location.display_address,
          categories: response.data.categories
        });
      }, error => console.error(error),
        this.setState({ isLoading: false }))
    };
  }

  render() {
    const list = this.state.address.map((item, idx) => {
      return <p key={idx}>{item}</p>
    });
    const cat = this.state.categories.map((item, idx) => {
      return <p key={idx}>{item.title}</p>
    });
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4 col-md-5 offset-md-3 p2">
            <div className="card-header">
              <h2>{this.state.information.name}</h2>
              <div className="card-body">
                <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                <hr />
                <h5>Telephone: {this.state.information.display_phone}</h5>
                <h5>Address: {list}</h5>
                <h5>Categories: {cat}</h5>
                <h5><a href={(this.state.information.url)} target="_blank" rel="noopener noreferrer"> Yelp </a></h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Winner;