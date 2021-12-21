import 'element-ui/lib/theme-chalk/index.css'

import { Input, Loading, MessageBox } from 'element-ui'

const components = [Input]

export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.use(component)
    })
    Vue.use(Loading)

    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
  },
}
