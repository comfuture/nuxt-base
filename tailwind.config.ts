import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color, #1E90FF)',
        'secondary': '#FFA500',
        'success': colors.green['200'],
        'success-text': colors.green['800'],
        'info': colors.blue['200'],
        'info-text': colors.blue['800'],
        'warning': colors.yellow['200'],
        'warning-text': colors.yellow['800'],
        'error': colors.red['200'],
        'error-text': colors.red['800'],
        'danger': colors.red['200'],
        'danger-text': colors.red['800'],
      },
    },
  },
}

