<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">My App</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon >move_to_inbox</md-icon>
          <router-link to="/todos"><span>Todos</span></router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>send</md-icon>
          <router-link to="/tokens"><span>Tokens</span></router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>profile</md-icon>
          <router-link to="/profile"><span>Profile</span></router-link>
        </md-list-item>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>Cordova</md-icon>
          <router-link to="/cordova"><span>Cordova</span></router-link>
        </md-list-item>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>android</md-icon>
          <router-link to="/deviceinfo"><span>Device</span></router-link>
        </md-list-item>

        <md-list-item>
          <md-avatar class="md-avatar-icon md-large">
            <md-icon>home</md-icon>
          </md-avatar>

          <span>Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar class="md-avatar-icon md-large">
            <md-icon>Gravatar</md-icon>
          </md-avatar>

          <span>Gravatar</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">Gravatar</md-icon>
          </md-button>
        </md-list-item>

      </md-list>
    </md-sidenav>

    <router-view></router-view>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style>

</style>
