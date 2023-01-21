
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      },
      colors:{
        main:"#462D91",
        para:"#404042",
        mpara:"#662D91",
      },
      maxWidth:{
        container:"1044px",
      },
    },
  },
  plugins: [],
}
