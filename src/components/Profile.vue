<template>
    <md-card md-with-hover>
        <md-card-header>
            <md-avatar>
                <img :src="avatar" :alt="name">
            </md-avatar>

            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
        </md-card-content>

        <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
        </md-card-actions>
    </md-card>
</template>
<style>
</style>
<script>
var API_PROFILE_URL = 'http://todos.dev:8000/api/v1/user'
var STORAGE_KEY = 'todosvue_token'
export default{
  data () {
    return {
      avatar: 'https://en.gravatar.com/images/gravatars/no_gravatar.gif',
      id: null,
      name: null,
      email: null,
      createdAt: null,
      connecting: true
    }
  },
  computed: {
    avatarHash: function () {
      return '895468975648'
    }
  },
  created () {
    console.log('Component profile created')
    this.fetchUserProfile()
  },
  methods: {
    fetchUserProfile: function () {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem(STORAGE_KEY)
      this.$http.get(API_PROFILE_URL).then((response) => {
        this.connecting = false
        console.log(response.data)
      }, (response) => {
        console.log('ERROR DATA: ' + response.data)
        this.connecting = true
        this.showConnectionError()
      })
    },
    showConnectionError: function () {
    }

  }
}
</script>
