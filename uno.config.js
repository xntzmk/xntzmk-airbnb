import { defineConfig, presetAttributify, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  theme: {},
  shortcuts: {
    // 全局样式

  },
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ]
})