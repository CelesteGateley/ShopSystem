/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./app/View/Components/**/**/*.php",
      "./app/Livewire/**/**/*.php",
      "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui"),
  ],
}

