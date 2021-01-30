import axios from 'axios'

export default ({ req }) => {
  // window is an object that only exist on the browser
  // it doesn't not exist in nodeJS
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    return axios.create({
      baseURL: '/'
    });
  }
}