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
          color1: "#E2D0F9",
          color2: "#317773",
        },
        timeline: {
          color1: "#F2EDD7",
          color2: "#755139",
        },
        skills: {
          color1: "#99F443",
          color2: "#EC449B",
        },
        project: {
          color1: "#CBCE91",
          color2: "#76528B",
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
