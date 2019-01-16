var env = process.env.NODE_ENV || 'development';

console.log( 'env >>',  env )

if (env.trim() === 'development' || env.trim() === 'test') {

  env = env.trim();

  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

console.log( 'PORT >> ', process.env['PORT'] );
console.log( 'MONGODB_URI >>', process.env['MONGODB_URI'] );
