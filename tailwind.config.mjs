/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'

export default {
	// ...rest of the options
	plugins: [animations],
  }
  
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkmode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
	  ],
}
