module.exports = {
  webpack: {
    ignoreWarnings: [
      {
        module: /react-datepicker/,
        message: /Critical dependency: the request of a dependency is an expression/,
      },
    ],
  },
};
