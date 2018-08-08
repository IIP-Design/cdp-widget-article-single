import ReactGA from 'react-ga';

const analyticsIds = [
  { name: 'share', id: process.env.GA_ID_SHARE },
  { name: 'yali', id: process.env.GA_ID_YALI },
  { name: 'ylai', id: process.env.GA_ID_YLAI }
];

const getUAIds = ( site ) => {
  const analyticsId = analyticsIds.filter( id => site.indexOf( id.name ) > -1 );  
  if ( analyticsId[0] && analyticsId[0].id ) {
    
    return analyticsId[0].id;
  }
  return '';
};

export const initGA = function( site ) {
  const id = getUAIds( site );
  ReactGA.initialize( id, {
    debug: true
  });
}

export const logPageview = function( url ) {
  ReactGA.pageview( url )
}

export const logCDPEvent = function( title ) {
  ReactGA.event({
    category: 'CDP Embed',
    action: 'Viewed as embedded article',
    label: title
  });  
}

export const referralClickEvent = function( title ) {
  ReactGA.event({
    category: 'CDP Referral',
    action: 'Inbound referral from embedded article',
    label: title
  });  
}