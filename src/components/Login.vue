<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
                <md-button class="">Action</md-button>
                <md-button class="">Action</md-button>
            </md-card-content>
        </md-card>
    </div>
</template>
<style>
</style>
<script>
var STORAGE_KEY = 'todosvue_token'
var AUTH_CLIENT_ID = 1
var AUTH_REDIRECT_URI = 'http://localhost:8095/todos'
var AUTH_SERVER_URI = 'http://localhost:8095/todos'
export default{
  data () {
    return {
      authorized: false
    }
  },
  methods: {
    extractToken: function (hash) {
      return hash.match(/#(?:access_token)=([\S\s]*?)&/)[1]
    },
    logout: function () {
      window.localStorage.removeItem(STORAGE_KEY)
      this.authorized = false
    }
  }
}
</script>
