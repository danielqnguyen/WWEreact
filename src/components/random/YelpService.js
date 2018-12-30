import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class YelpApi {
  static yelpTen(food, location, dollars, onSuccess, onError) {
    const config = {
      'Authorization': process.env.REACT_APP_KEY,
    }
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${food}&open_now=true&location=${location}&price=${dollars}`, { headers: config })
      .then(onSuccess)
      .catch(onError);
  }

  static yelpById(id, onSuccess, onError) {
    const config = {
      'Authorization': process.env.REACT_APP_KEY,
    }
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, { headers: config })
      .then(onSuccess)
      .catch(onError);
  }
}

export default YelpApi;