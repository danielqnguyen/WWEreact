import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class YelpApi {
  static yelpTen(food, location, dollars, onSuccess, onError) {
    const config = {
      'Authorization': "Bearer 8svEkFic2Wd44Apmc7Cu8jWY1OmvjgVcsIjNteDVJ_phS7QuY8ruisHvYny_ZUywKwJ86cMlpBftmleMpn5dWXM-kVpapbkx-JWiDzyTZyr5ukJ8DIqMQXgCIw_-W3Yx",
    }
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${food}&open_now=true&location=${location}&price=${dollars}`, { headers: config })
      .then(onSuccess)
      .catch(onError);
  }

  static yelpById(id, onSuccess, onError) {
    const config = {
      'Authorization': "Bearer 8svEkFic2Wd44Apmc7Cu8jWY1OmvjgVcsIjNteDVJ_phS7QuY8ruisHvYny_ZUywKwJ86cMlpBftmleMpn5dWXM-kVpapbkx-JWiDzyTZyr5ukJ8DIqMQXgCIw_-W3Yx",
    }
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, { headers: config })
      .then(onSuccess)
      .catch(onError);
  }
}

export default YelpApi;