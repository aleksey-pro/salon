module.exports = {
  apps : [{
    name: 'slavsalon-mailer',
    script: './mailer.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      "APP_PORT"      : "4000",
      "SENDMAIL_USER" : "anxieter@gmail.com",
      "SENDMAIL_PASS" : "tdvbgkxjkbhpyzlh",
    }
  }]
};
