export const tailwindConfig = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['./**/*.{js,ts,jsx,tsx}'],
  },
  fontSize: {
    '2.5xl': '1.6875rem',
  },
  spacing: {
    '100vw': '100vw',
    '50vw': '50vw',
    '56.25vw': '56.25vw',
    '2px': '2px',
    '3px': '3px',
    '5.5px': '5.5px',
    '6px': '6px',
    '11px': '11px',
    '12px': '12px',
    '14px': '14px',
    7: '1.75rem',
    9: '2.25rem',
    11: '2.75rem',
    14: '3.5rem',
    17: '4.25rem',
    18: '4.5rem',
    22: '5.5rem',
    30: '7.5rem',
    72: '18rem',
    78: '19.5rem',
    80: '20rem',
    82: '20.5rem',
    92: '23rem',
    98: '24.5rem',
    100: '25rem',
    104: '26rem',
    106: '26.5rem',
    108: '27rem',
  },
  inset: {
    '-26': '-6.5rem',
    '-16': '-4rem',
    '-14': '-3.5rem',
    '-11': '-2.75rem',
    '-8': '-2rem',
    '-px': '-1px',
    px: '1px',
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    5: '1.25rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    18: '4.5rem',
  },
  rotate: {
    225: '225deg',
    135: '135deg',
  },
  borderRadius: {
    full: '50%',
  },
  stroke: (theme: any): Record<string, unknown> => ({
    primary: theme('colors.primary'),
  }),
  fill: (theme: any): Record<string, unknown> => ({
    primary: theme('colors.primary'),
  }),
  plugin: ({ addUtilities, config }: any): void => {
    addUtilities({
      '.text-stroke': {
        '-webkit-text-stroke-width': '1px',
      },
      '.text-stroke-white': {
        '-webkit-text-stroke-color': 'white',
      },
      '.text-fill-transparent': {
        '-webkit-text-fill-color': 'transparent',
      },
      '.border-t-transparent': {
        'border-top-color': 'transparent',
      },
      '.border-r-transparent': {
        'border-right-color': 'transparent',
      },
      '.border-b-transparent': {
        'border-bottom-color': 'transparent',
      },
      '.border-l-transparent': {
        'border-left-color': 'transparent',
      },
      '.blend-screen': {
        'mix-blend-mode': 'screen',
      },
      '.blend-overlay': {
        'mix-blend-mode': 'overlay',
      },
      '.blend-exclusion': {
        'mix-blend-mode': 'exclusion',
      },
      '.w-side': {
        width: `calc(100% - ${config('theme.spacing.8')})`,
      },
      '.h-side': {
        height: `calc((100vw - ${config('theme.spacing.8')}) / 16 * 9)`,
      },
      '.w-inner': {
        width: `calc(100% - ${config('theme.spacing.16')})`,
      },
      '.will-transform-opacity': {
        'will-change': 'transform, opacity',
      },
      '.will-transform': {
        'will-change': 'transform',
      },
      '.will-opacity': {
        'will-change': 'opacity',
      },
      '.flex-scroll': {
        flex: `0 0 calc(100% - ${config('theme.spacing.16')})`,
      },
      '.snap-x': {
        'scroll-snap-type': 'x mandatory',
      },
      '.snap-center': {
        'scroll-snap-align': 'center',
      },
      '.stroke-2': {
        'stroke-width': '2',
      },
      'stroke-round': {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      '.fill-opacity-0': {
        'fill-opacity': '0',
      },
    })
  },
}
