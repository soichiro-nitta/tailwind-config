export const tailwindConfig = {
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
