<template>
    <div id="app">

      <!-- <div v-if="$store.state.isLoggedIn === false"> -->
        <Nav />
        <router-view />
      <!-- </div> -->
    </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import Nav from './components/Nav'

export default {
  created () {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  data: () => {
    return {
      user: undefined,
      authState: undefined
    }
  },
  components: {
    Nav
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap');

amplify-authenticator {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
}

amplify-sign-up {

}
.section {
  background-color: #2c3e50;
}
html {
  width: 100%;
  margin: 0;
}
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
