module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
        "colors": {
          "black-gray": "#333333"
        },
      },

      "fontFamily": {
        "staatliches": "Staatliches",
        "open-sans": "Open Sans"
      },
      // Ici vos familles de polices exportées de Figma
      // Ne pas oublier de les charger dans '/index.html' !
      "fontSize": {
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.5rem",
        "6xl": "4rem"
      },

      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.3125rem",
        "default": "0.625rem",
        "lg": "0.9375rem",
        "xl": "1.5625rem",
        "2xl": "2.1875rem",
        "3xl": "2.8271484375rem",
        "4xl": "5.0888671875rem",
        "full": "9999px"
      }
    },

  },
  plugins: [],
}
