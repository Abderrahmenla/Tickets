import axios from 'axios';

export default ({ req }) => {
  // window is an object that only exist on the browser
  // it doesn't not exist in nodeJS...
  if (typeof window === 'undefined') {
    // We are on the serverr
    return axios.create({
      baseURL: 'http://www.ticketing-abderrahmen.club',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
