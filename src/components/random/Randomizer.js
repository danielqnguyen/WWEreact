import React from "react";
import Slider from "react-slick";
import "./index.css";
import YelpApi from './YelpService';

class FoodRandomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurant: [],
      activeSlide: 0,
      price: ''
    };
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentWillMount() {
    if (!("location" in this.props.location && "food" in this.props.location)) {
      YelpApi.yelpTen('food', 'irivne', '', response => {
        this.setState({ restaurant: response.data.businesses });
      }, error => console.error(error));
    } else {
      YelpApi.yelpTen(this.props.location.food, this.props.location.location, this.props.location.price, response => {
        this.setState({ restaurant: response.data.businesses });
      }, error => console.error(error));
    }
  }

  pause() {
    this.slider.slickPause();
  }

  play() {
    this.slider.slickPlay();
  }

  onClick = item => this.props.history.push({
    pathname: '/winner',
    info: item.id
  })

  render() {
    const list = this.state.restaurant.map((item, index) => {
      return <div key={index}>
        <img src={item.image_url}
          className="sImg"
          height="300px"
          width="300px"
          alt={item.name}
          onClick={() => this.onClick(item)}
        />
      </div >
    });
    const settings = {
      className: "center",
      dots: false,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 100,
      arrows: false,
      slidesToShow: 1,
      centerPadding: "10px",
      useTransform: false,
      beforeChange: (next) => this.setState({ activeSlide: next })
    };
    return (
      <React.Fragment>
        <div className="container" style={{ overflow: "hidden" }}>
          <h2><label className="form-label" style={{ color: "Green", alignItems: "center" }}>Randomizer</label></h2>
          <h5 style={{ color: 'white' }}>Press the pause button <br />
            and if you like the choice
           <br /> click on the image</h5>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {list}
          </Slider>
          <div className="btn-group" style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-success" onClick={this.play}>
              <i className="fa fa-fw fa-play" />
            </button>
            <button className="btn btn-danger" onClick={this.pause}>
              <i className="fa fa-fw fa-pause" />
            </button>
          </div>
        </div>
      </React.Fragment >
    );
  };
}

export default FoodRandomizer;
