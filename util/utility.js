const randomstring = require('randomstring');

exports.generateStoreCode = () =>
  randomstring.generate({
    length: 12,
    charset: 'alphabetic',
    capitalization: 'uppercase',
  });
