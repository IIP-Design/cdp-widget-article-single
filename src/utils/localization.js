import moment from 'moment';

require('moment/locale/ar.js');
require('moment/locale/es.js');
require('moment/locale/fr.js');
require('moment/locale/pt-br.js');
require('moment/locale/ru.js');
require('moment/locale/zh-cn.js');

export function setLocale( locale ) {
  moment.locale( locale );
}