/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#F8F9FD",
      },
      backgroundImage: {
        "custom-btn-gradient":
          "linear-gradient(135deg, rgb(20, 173, 214), rgb(56, 66, 149) 100%)",
      },
      borderColor: {
        "input-color": "rgb(208, 208, 208)",
      },
    },
  },
  plugins: [],
};
