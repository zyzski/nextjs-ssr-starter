module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/p': { page: '/posts' },
      '/posts': { page: '/posts' },
    };
  },
};
