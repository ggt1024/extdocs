import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import MyLayout from './components/MyLayout.vue'

export default defineClientConfig({
  layouts: {
    MyLayout,
  }
})
