const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withFonts = require('next-fonts');

// Composable Pyramid of Death!
module.exports = withTypescript(
  withImages(
    withFonts(
      withLess({
        target: 'serverless',
        cssModules: true,
      })
    )
  )
);
