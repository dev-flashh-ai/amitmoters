const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { externalDir: true },
  outputFileTracingRoot: path.join(__dirname, '..'),
  turbopack: { root: path.join(__dirname, '..') },
  webpack: (config) => {
    config.resolve.modules = [
      path.join(__dirname, 'node_modules'),
      ...(config.resolve.modules || ['node_modules']),
    ];
    return config;
  },
};
