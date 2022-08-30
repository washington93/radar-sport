const { sportData } = require('radar-sport-api');

const betfair = new sportData('betfair', { 
  languageId: '514d1e14ad5c11eeebf17ba7f5dc97ad', 
  server: 'gismo', 
  getCommonContents: false, 
  lang: 'en'
});

betfair.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(JSON.stringify(data,null,2));
})