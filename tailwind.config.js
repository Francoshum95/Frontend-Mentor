/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': "#1d2025",
        'dark-grayish-blue': "#68707d",
        'grayish-blue': "#b6bcc8",
        "light-graylish-blue": "#f7f8fd",
        "orange": "#ff7d1a",
        "aple-orange": "#ffede0",
        'marine-blue': '#02295a',
        'purplish-blue': '#473dff',
        'pastel-blue': '#adbeff',
        'light-blue': '#bfe2fd',
        'strawberry-red': '#ed3548',
        'cool-gray': '#9699ab',
        'light-gray': '#d6d9e6',
        'magnolia': '#f0f6ff',
        'alabaster': '#fafbff',
        'white': '#ffffff'
      },
      fontFamily: {
        'ubuntu': 'ubuntu',
        'kumbh-sans': ['Kumbh', 'Sans']
      },
      backgroundImage: {
        'sidebar-desktop': "url('/asset/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/asset/bg-sidebar-mobile.svg')",
      },
      screens: {
        'mobile': {'max': '767px'},
        'normal-screen': {'min': '376px'},
        'sm-mobile': {'max': '375px'}
      }    
    },
  },
  plugins: [],
}
