module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11'],
        },
        modules: process.env.NODE_ENV === 'test' && 'commonjs',
      },
    ],
  ],
};
