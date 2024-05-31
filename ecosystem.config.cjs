module.exports = {
  apps: [
    {
      name: 'soundpy-api',
      script: './build/bin/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
}
