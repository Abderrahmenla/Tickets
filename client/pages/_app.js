import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client'

const AppComponent ({Component,pageProps}) => {
  return <Component {...pageProps} />
}

//yolo
AppComponent.getInitialProps = () => {

};
export default AppComponent;