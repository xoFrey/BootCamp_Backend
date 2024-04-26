/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      mainText: "#2A9D8F",
      headline: "#A16171",
      subcolor: "#264653",
      white: "#ffffff",
      yellow: "#E9C46A",
    },
    extend: {
      backgroundImage: {
        home: "url('/img/moviemagic.png')",
      },
    },
  },
  plugins: [],
};
