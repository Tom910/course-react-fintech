require('babel-register')({
  presets: ['env', 'react'],
  plugins: ['babel-plugin-transform-class-properties', 'babel-plugin-transform-object-rest-spread']
});

require.extensions['.css'] = function() {
  return null;
};

require('./server');
