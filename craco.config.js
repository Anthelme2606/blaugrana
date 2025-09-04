const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/features/pages'),
      '@layouts': path.resolve(__dirname, 'src/features/layouts'),
      '@hooks': path.resolve(__dirname, 'src/features/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@contexts': path.resolve(__dirname, 'src/contexts')

    }
  }
};
  