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

export const normalizeItem = ( data ) => {
  const source = data._source;

  const obj = {
    id: source.post_id ? source.post_id : source.id,
    site: source.site,
    sourcelink: `https://${source.site}`,
    title: source.title,
    author: source.author,
    content: source.content,
    thumbnail: source.thumbnail,
    language: source.language,
    link: source.link || '',
    published: source.published,
    modified: source.modified,
    owner: source.owner,
    logo: getLogo( source.site )
  };

  return { ...obj };
};
