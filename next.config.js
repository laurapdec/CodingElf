/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },

  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },

  images: {
    domains: ['assets.vercel.com','media.graphassets.com','cdn.sanity.io'],
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
  
    return config;
  },
};
