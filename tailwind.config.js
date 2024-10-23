/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark blue
        secondary: '#F59E0B', // Bold yellow
        accent: '#10B981', // Vibrant green
        neutral: '#374151', // Dark gray
      }
    }
  },
  plugins: []
};