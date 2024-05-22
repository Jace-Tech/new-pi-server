module.exports = {
  apps: [
    {
      name: 'soundpy-api',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}
