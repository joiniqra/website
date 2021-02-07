const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~comp': path.resolve(__dirname, './src/components'),
        '~nav': path.resolve(__dirname, './src/components/nav'),
        '~stk': path.resolve(__dirname, './src/stacks'),
      },
    },
  });
};
