/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "serif"],
      },
      colors: {
        Tomato: "hsl(4, 100%, 67%)",
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        Greyy: "hsl(231, 7%, 60%)",
        Whitee: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobile: "url('./src/assets/images/illustration-sign-up-mobile.svg')",
        desktop: "url('./src/assets/images/illustration-sign-up-desktop.svg')",
      },
    },
  },
  plugins: [],
};
