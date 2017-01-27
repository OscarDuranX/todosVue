import Todos from 'components/Todos.vue'
import Tokens from 'components/Tokens.vue'
import Profile from 'components/Profile.vue'
import NotFound from 'components/NotFound.vue'
import Login from 'components/Login.vue'

const routes = [
  { path: '/todos',
    component: Todos,
    auth: true
  },
  { path: '/tokens',
    component: Tokens,
    auth: false
  },
  { path: '/profile',
    component: Profile,
    auth: true
  },
  { path: '/login',
    component: Login,
    auth: false
  },
  { path: '/*',
    component: NotFound,
    auth: false
  }
]

export default routes
