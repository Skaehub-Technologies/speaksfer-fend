import axios from 'axios';

export default axios.create({
  baseURL: 'https://speaksfer-bend.herokuapp.com/api/'
});
