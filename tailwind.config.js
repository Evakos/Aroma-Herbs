module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './app/**/*.php',
      './resources/**/*.{php,vue,js}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundSize: {
        

       '200%': '200%',

      },
     
  
  
      
    backgroundImage: {

      'home-hero': "url('../images/home-hero.jpg')",
      'products-hero': "url('../images/products-hero.jpg')",
      'recipes-hero': "url('../images/recipes-hero.jpg')",
      'product-detail-hero': "url('../images/product-detail-hero.jpg')",
      'modal-product-bg': "url('../images/modal-prod-bg.png')",
      'blog-hero': "url('../images/blog-hero.jpg')",
      'home-main': "url('../images/vine.jpg')",
      'sec-c': "url('../images/sec-c.jpg')",
      'sec-d': "url('../images/sec-d.jpg')",
      
 
     },
    fontFamily: {
      'takhie': ['takhie', 'sans-serif'],
      'advent-pro-regular': ['advent-pro-regular', 'sans-serif'],
      'advent-pro-light': ['advent-pro-light', 'sans-serif'],
      'advent-pro-semi-bold': ['advent-pro-semi-bold', 'sans-serif']
    },
    colors: {
      primary: '#525ddc',
      white: '#ffffff',
      // gray: {
      //   100: '#f7fafc',
      //   200: '#edf2f7',
      //   300: '#e2e8f0',
      //   400: '#cbd5e0',
      //   500: '#a0aec0',
      //   600: '#718096',
      //   700: '#4a5568',
      //   800: '#2d3748',
      //   900: '#1a202c',
      // },
      transparent: 'transparent',
      'dark-green': '#7E9A3E',
      'light-green': '#B5D963',
      'pink': '#EB3766',
      'grey': '#797979',
      'aroma-grey': '#A39F9F',
      'aroma-light-grey': '#ECECEC',
      'aroma-x-light-grey': '#FCFCFC',  
      'black': '#252525',
      
      
      
    },
    shadows: {
      outline: '0 0 0 3px rgba(82,93,220,0.3)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    },
  },
  
  variants: [
    `responsive`,
    `dark`,
    `motion-safe`,
    `motion-reduce`,
    `first`,
    `last`,
    `odd`,
    `even`,
    `visited`,
    `checked`,
    `group-hover`,
    `group-focus`,
    `focus-within`,
    `hover`,
    `focus`,
    `focus-visible`,
    `active`,
    `disabled`,
  ],

  variants: {
    
      animation: ['hover', 'group-hover'],
      transform: ['hover', 'focus'],
      padding: ['first'],
    
  },
  plugins: [require('@tailwindcss/typography')],
};


