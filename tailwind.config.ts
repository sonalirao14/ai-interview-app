/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/completion/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/interview/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/permissions/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {},
	},
	plugins: [],
  }