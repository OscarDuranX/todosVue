import Todos from '../components/Todos'
import Tokens from '../components/Tokens'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import Cordova from '../components/Cordova'
import DeviceInfo from '../components/DeviceInfo'

const routes = [
  { path: '/todos',
    component: Todos,
    meta: { auth: false }
  },
  { path: '/tokens',
    component: Tokens,
    meta: { auth: true }
  },
  { path: '/profile',
    component: Profile,
    meta: { auth: true }
  },
  { path: '/login',
    component: Login,
    meta: { auth: false }
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: false }
  },
  { path: '/deviceinfo',
    component: DeviceInfo,
    meta: { auth: false }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
