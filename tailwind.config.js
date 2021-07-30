module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './templates/frontend/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'xxxxsm': '10px',
      'xxxsm': '240px',
      'xxsm': '360px',
      'xxsmm': '460px',
      'xsm': '540px',
      'sm': '640px',
      'md': '768px',
      'mld': '806px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ["'poppins'"],
      },
      colors: {
        primarylight: '#FFFFFF',

        bglight: '#e5e5e5',

        primarydark: '#1A242F',
        // primarydark: '#15161A',

        bgdark: '#283845',

        lighttext: '#000',

        darktext: '#fff',

        btncolor: '#f64c56',

        linkcolor: '#23577E',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
