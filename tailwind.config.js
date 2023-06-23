/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Importante para cambiar entre temas oscuros y claros
  theme: {
    extend: {
      colors: {
        orange: '#ffa700',
        dark: {
          DEFAULT: '#1F2937',
          100: '#111827',
          200: '#1F2937',
          300: '#374151',
          400: '#4B5563',
          500: '#6B7280',
          600: '#9CA3AF',
          700: '#D1D5DB',
          800: '#E5E7EB',
          900: '#F3F4F6',
        },
        light: {
          DEFAULT: '#F3F4F6',
          100: '#FFFFFF',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        },
        // Aquí puedes agregar más temas personalizados
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
