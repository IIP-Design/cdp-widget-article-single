import moment from 'moment';
import { setDateLocale } from './localization';

import logoYali from '../assets/logo_yali.svg';
import logoYlai from '../assets/logo_ylai.svg';
import logoShareamerica from '../assets/logo_shareamerica.svg';

const logos = [
  { name: 'yali', logo: logoYali },
  { name: 'ylai', logo: logoYlai },
  { name: 'share', logo: logoShareamerica }
];

const getLogo = ( site ) => {
  const siteLogo = logos.filter( logo => site.indexOf( logo.name ) > -1 );
  if ( siteLogo[0] && siteLogo[0].logo ) {
    return siteLogo[0].logo;
  }
  return '';
};

const getDate = ( lang, date ) => {
  setDateLocale( lang );
  const localizedDate = moment( date ).format( 'LL' );
  return localizedDate;
};

export const normalizeItem = ( data ) => {
  const source = data._source;

  const obj = {
    author: source.author,
    content: source.content,
    date: getDate( source.language.language_code, source.published ),
    id: source.post_id ? source.post_id : source.id,
    language: source.language,
    link: source.link || '',
    logo: getLogo( source.site ),
    modified: source.modified,
    owner: source.owner,
    published: source.published,
    site: source.site,
    slug: source.slug,
    sourcelink: `https://${source.site}`,
    thumbnail: source.thumbnail,
    title: source.title
  };

  return { ...obj };
};
