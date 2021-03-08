import axios from 'axios';

export default ({ req }) => {
// window is an object that only exist on the browser
  // it doesn't not exist in nodeJS
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};