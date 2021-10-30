module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // this tells tailwind to look through all
  // js, jsx, ts, tsx files in teh src, and the index .html
  // to figure out which classes will be used from tailwind, and remove any unused classes
  darkMode: "media",
  // or 'media' or 'class', for the sake of the simplicity,
  // we will keep the fark mode based on users's OS perference
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
