# @soichiro_nitta/tailwind-config

tailwind.config.jsに記述する設定をパッケージ化しました。

https://www.npmjs.com/package/@soichiro_nitta/tailwind-config


```
const { tailwindConfig } = require('@soichiro_nitta/tailwind-config')

module.exports = {
  future: tailwindConfig.future,
  purge: tailwindConfig.purge,
  theme: {
    extend: {
      colors: {
        // colors
      },
      fontSize: tailwindConfig.fontSize,
      spacing: tailwindConfig.spacing,
      inset: tailwindConfig.inset,
      rotate: tailwindConfig.rotate,
      borderRadius: tailwindConfig.borderRadius,
      stroke: tailwindConfig.stroke,
      fill: tailwindConfig.fill,
    },
  },
  variants: {},
  plugins: [tailwindConfig.plugin],
}

```
