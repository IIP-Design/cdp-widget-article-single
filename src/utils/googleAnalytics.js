import ReactGA from 'react-ga';

const analyticsIds = [
  { name: 'share', id: `${process.env.REACT_APP_GA_ID_SHARE}` },
  { name: 'yali', id: `${process.env.REACT_APP_GA_ID_YALI}` },
  { name: 'ylai', id: `${process.env.REACT_APP_GA_ID_YLAI}` }
];

const getUAIds = ( site ) => {
  const analyticsId = analyticsIds.filter( id => site.indexOf( id.name ) > -1 );
  if ( analyticsId[0] && analyticsId[0].id ) {
    return analyticsId[0].id;
  }
  return '';
};

function initGA( site ) {
  const id = getUAIds( site );
  ReactGA.initialize( id, {
    debug: true
  } );
}

function logPageview( url ) {
  ReactGA.pageview( url );
}

function logCDPEvent( title ) {
  ReactGA.event( {
    category: 'CDP Embed',
    action: 'Viewed as embedded article',
    label: title
  } );
}

export function initiateAnalytics( data ) {
  initGA( data.site );
  logPageview( data.slug );
  logCDPEvent( data.title );
}

export function referralClickEvent( title ) {
  ReactGA.event( {
    category: 'CDP Referral',
    action: 'Inbound referral from embedded article',
    label: title
  } );
}
