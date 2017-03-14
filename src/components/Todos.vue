<template>
    <div>

        <div v-show="!authorized" >
            <md-button class="md-raised md-primary" @click="connect">Connect</md-button>
        </div>
        <div v-show="authorized" >
            <md-button class="md-raised md-primary" @click="logout">Logout</md-button>
        </div>
        <ul v-show="authorized">
            <li v-for="(todo, index) in todos">
                {{  todo.name  }}
            </li>
        </ul>

    </div>
</template>
<style>
</style>
<script>
import todosVue from '../todosVue'
export default{
  data () {
    return {
      todos: [],
      connecting: true,
      total: 0,
      perPage: 0,
      page: 0
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchData()
    }, 500)
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.get(todosVue.API_TASK_URL + '?page=' + page).then((response) => {
        this.connecting = false
        this.todos = response.data.data
        this.total = response.data.total
        this.perPage = response.data.per_page
        this.page = response.data.current_page
      }, (response) => {
        this.connecting = false
        this.showConnectionError()
        this.authorized = false
      })
    },
    showConnectionError () {
      this.$refs.connectionError.open()
    },
    onPagination: function () {
      console.log('pagination todo!')
    }
  }
}
</script>
