/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#212121',
        'white': '#FFFFFF',
        'greyone': '#FAFAFA',
        'greytwo': "#BDBDBD",
        'greythree': "#9E9E9E",
        'greyfour': "#757575",
        'greyfive': "#797979",
        'blueone': "#E8EAF6",
        'bluetwo': "#64B5F6",
        'bluethree': "#2196F3",
        'bluefour': "#0288D1",
        'bluefive': "#304FFE",
        'redone': "#FCE4EC",
        'redtwo': "#F48FB1",
        'redthree': "#EC407A",
        'redfour': "#E91E63",
        'redfive': "#F50057",
        'greenone': "#E8F5E9",
        'greentwo': "#A5D6A7",
        'greenthree': "#66BB6A",
        'greenfour': "#43A047",
        'greenfive': "#00E676",
      }
    },
  },
  plugins: [],
}