const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    if(!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
}

module.exports = nextConfig

// module.exports = {
//   env: {
//     'MYSQL_HOST': '127.0.0.1',
//     'MYSQL_PORT': '3306',
//     'MYSQL_DATABASE': {novcomm_tour_crs},
//     'MYSQL_USER': {hetarth},
//     'MYSQL_PASSWORD': {Alliswell},
//   }
// }
