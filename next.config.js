const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
   
  /** @type {import('next').NextConfig} */
  const nextConfig = {}
   
  module.exports = withBundleAnalyzer(nextConfig)
 
  module.exports = {
    webpack: (config, options) => {
      config.resolve.alias['@hooks'] = path.join(__dirname, 'hooks');
      return config;
    },
  }; 