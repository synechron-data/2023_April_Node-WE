const Email = require('./Email');
const SMS = require('./SMS');

module.exports = { emailClient: new Email(), smsClient: new SMS() };