const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'eduwork-cruds-v2',
  host: 'localhost',
  username: 'root',
  password: '',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('connection has been successfully');
  } catch (error) {
    console.error('unable to connect', error);
  }
})();

module.exports = sequelize;
