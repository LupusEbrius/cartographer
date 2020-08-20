<template>
  <div id="nav">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="right-nav" v-if="$store.state.isLoggedIn === false">
      <!-- <router-link to="/world/1">World</router-link> -->
      <router-link to="/login">Login/Signup</router-link>
    </div>
    <div class="right-nav" v-else>
        <router-link to='/auth/'>Profile</router-link>
        <router-link to='/signout'>Signout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: #2c3e50;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    a {
      font-weight: bold;
      color: #2c3e50;
      display: block;
      padding: 15px;
      background-color: #42b983;
      text-decoration: none;
      box-sizing: border-box;
      &.router-link-exact-active {
        //background-color: #fab;
      }
    }
    a:hover {
      background-color: #2c3e50;
      color: #42b983;
    }
  }
}
</style>
