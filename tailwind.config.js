/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    colors: {
      transparent: "transparent",
      primary: {
        DEFAULT: "#5a4bd2",
      },
      secondary: {
        DEFAULT: "#FBBA00",
      },
      dark: {
        DEFAULT: "#212128",
      },
      border: {
        DEFAULT: "#1a1a1f"
      },
      silver: {
        DEFAULT: "#EEEEEE",
        light: "#F8F8F8",
        dark: "#D4D8DB",
      },
      negative: {
        DEFAULT: "#FF0110",
        light: "#FF011017"
      },
      positive: {
        DEFAULT: "#24DD79",
        light: "#24DD7918"
      },
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
}

