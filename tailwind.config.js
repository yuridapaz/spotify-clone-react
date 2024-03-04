/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
        secondary: {
          1: '#000000',
          2: '#191414',
          3: '#FFFFFF'
        },
        neutral: {
          1: '#B2B2B2',
          2: '#777777',
          3: '#535353',
          4: '#242424'
        },
        genre: {
          1: '#55A891',
          2: '#27856A',
          3: '#5F8109',
          4: '#F037A5',
          5: '#AF2896',
          6: '#AF2896',
          7: '#477D95',
          8: '#509BF5',
          9: '#1D3164',
          10: '#E8115B',
          11: '#E13300',
          12: '#BA5D07'
        }
      }
    }
  },
  plugins: []
};
