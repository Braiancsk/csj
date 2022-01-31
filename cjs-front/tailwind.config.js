module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn': '0px 4px 4px rgba(0, 0, 0, 0.25)',

      },
      backgroundImage: {
        'hero-pattern': "url('./assets/hero-bg.png')",
        'ships': "url('./assets/bg-ships.png')",
        'roadmap': "url('./assets/roadmap.png')",
        'team': "url('./assets/team-bg.png')",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
