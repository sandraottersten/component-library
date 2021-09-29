const config = {
	/* mode: "jit", */
	purge: [
		"./src/**/*.{html|svelte}",
	],
    theme: {
        extend: {
            spacing: {
                input: '20.5rem'
            },
        },
        minWidth: {
            buttonLarge: '11rem',
            buttonSmall: '7rem',
        },
        colors: {
            white: '#fff',
            black: '#000',
            warning: '#FFAB07',
            error: '#ED2E7E',
            form: {
                100: 'var(--color-form-100, #EFF0F6)',
                500: 'var(--color-form-500, ##A0A3BD)'
            },
            dark: {
                100: 'var(--color-dark-100, #BBC1CE)',
                500: 'var(--color-dark-500, #66738F)',
                900: 'var(--color-dark-900, #404859)'
            },
            gray: {
                300: 'var(--color-gray-300, #EDEDED)',
                500: 'var(--color-gray-500, #BBC1CE)'
            },
            primary: {
                100: 'var(--color-primary-100, #C7A3F5)',
                500: 'var(--color-primary-500, #5F2EEA)',
                900: 'var(--color-primary-900, #450F89)'
            }
        }
    },
    variants: {
        extend: {
            boxShadow: ['hover', 'focus', 'disabled'],
            borderWidth: ['hover', 'focus', 'disabled'],
            borderColor: ['hover', 'focus', 'disabled'],
            backgroundColor: ['disabled'],
            textColor: ['disabled']
        }
    },
    plugins: [],
};

module.exports = config;
