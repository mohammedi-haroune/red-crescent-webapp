import ReactGA from 'react-ga';

export default function initializeReactGA() {
    ReactGA.initialize('UA-153112247-1');
    ReactGA.pageview('/homepage');
}
