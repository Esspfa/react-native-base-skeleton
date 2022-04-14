// tailwind.config.js
const {plugin} = require('twrnc');

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        btn: {
          padding: 3,
          borderRadius: 10,
          textTranform: 'uppercase',
        },
        'resize-repeat': {
          resizeMode: 'repeat',
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        red: '#6f59cf',
      },
    },
  },
};
