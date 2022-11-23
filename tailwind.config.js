module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        home: {
          color1: "#FFF548",
          color2: "#3C1A5B",
        },
        "about-me": {
          color1: "#E2D0F9",
          color2: "#317773",
        },
        timeline: {
          color1: "#99F443",
          color2: "#EC449B",
        },
        skills: {
          color1: "green",
          color2: "gray",
        },
        project: {
          color1: "green",
          color2: "gray",
        },
      },
      secondary: {
        bgColor: "bg-secondary-500",
        color: "text-white",
        outline:
          "border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-10",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
