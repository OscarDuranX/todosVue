/**
 * Created by oscar on 18/05/17.
 */
// Profile Mixin
import todosVue from '../todosVue'
import gravatar from 'gravatar'
import VuePullRefresh from 'vue-pull-refresh'
import auth from '../services/auth'

export default {
  components: {
    'vue-pull-refresh': VuePullRefresh
  },
  data () {
    return {
      PulltoRefreshConfig: {
        errorLabel: 'Error Try again',
        startLabel: 'Swipe to refresh',
        readyLabel: 'Swipe to refresh',
        loadingLabel: 'Reloading Components'
      }
    }
  },
  methods: {
    avatarUrl: function () {
      return 'http:' + gravatar.url(this.email)
    },
    fetchUserProfile: function () {
      this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
        this.connecting = false
        this.id = response.data.id
        this.name = response.data.name
        this.email = response.data.email
        this.createdAt = response.data.created_at
        this.updatedAt = response.data.updated_at
        this.avatar = this.avatarUrl()
        this.latitude = auth.getLatitude()
        this.longitude = auth.getLongitude()
      }, (response) => {
        this.connecting = false
        this.showConnectionError()
      })
    },
    showConnectionError () {
      this.$refs.connectionError.open()
    },
    onRefresh: function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, 1000)
      }).then(() => {
        this.fetchUserProfile()
      })
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchUserProfile()
    }, 2500)
  }
}
