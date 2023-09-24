// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      //preset icons
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
