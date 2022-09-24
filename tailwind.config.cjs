/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blob-scene': "url('/src/assets/svg/blob-scene-haikei.svg')",
        'blurry-gradient': "url('/src/assets/svg/blurry-gradient-haikei.svg')",
        'circle-scatter': "url('/src/assets/svg/circle-scatter-haikei.svg')",
        'layered-peaks': "url('/src/assets/svg/layered-peaks-haikei.svg')",
        'layered-steps': "url('/src/assets/svg/layered-steps-haikei.svg')",
        'layered-waves': "url('/src/assets/svg/layered-waves-haikei.svg')",
        'low-poly-grid': "url('/src/assets/svg/low-poly-grid-haikei.svg')",
        'low-poly-grid-2': "url('/src/assets/svg/low-poly-grid-haikei2.svg')",
        'stacked-peaks': "url('/src/assets/svg/stacked-peaks-haikei.svg')",
        'stacked-steps': "url('/src/assets/svg/stacked-steps-haikei.svg')",
        'stacked-waves': "url('/src/assets/svg/stacked-waves-haikei.svg')",
        '4dots-03': "url('/src/assets/svg/4dots-opacity03.svg')",
      },
    },
  },
  plugins: [],
};
