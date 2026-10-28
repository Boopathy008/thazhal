/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#090A0F',     // Rich deep obsidian black for primary dark backgrounds & text in light mode
        forest: '#141824',   // Deep slate noir for layered surfaces and cards
        emerald: '#38BDF8',  // Vibrant Cyber Sky Blue (sleek high-tech accent complementing monochrome black & white)
        paper: '#F8FAFC',    // Pure crisp clean white/off-white background
        slate2: '#64748B',   // Balanced cool neutral slate
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
