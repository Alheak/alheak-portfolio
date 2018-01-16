import Home from './assets/home/Home.vue'
import Anomaly from './assets/anomaly/Anomaly.vue'
import Cloud from './assets/cloud/Cloud.vue'
import Water from './assets/water/Water.vue'
import Loneliness from './assets/loneliness/Loneliness.vue'
import Leak from './assets/leak/Leak.vue'
import Textures from './assets/textures/Textures.vue'
import Uploading from './assets/uploading/Uploading.vue'
import Contact from './assets/Contact.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/anomaly',
    component: Anomaly
  },
  {
    path: '/the-cloud',
    component: Cloud
  },
  {
    path: '/water-sampling',
    component: Water
  },
  {
    path: '/virtual-loneliness',
    component: Loneliness
  },
  {
    path: '/data-leak',
    component: Leak
  },
  {
    path: '/textures',
    component: Textures
  },
  {
    path: '/uploading',
    component: Uploading
  },
  {
    path: '/contact',
    component: Contact
  }
]
