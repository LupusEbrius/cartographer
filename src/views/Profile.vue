<template>
<!-- <amplify-authenticator> -->
        <!-- <amplify-sign-up
        slot="sign-up"
        :header-text="this.signUpConfig.headerText"
        :formFields.prop="this.signUpConfig.formFields"
        :handleSubmit="this.authenticated"
        ></amplify-sign-up> -->
  <div class="profile">
    <div class="container">
      <div class="details">{{ username }}</div>
        <amplify-sign-out></amplify-sign-out>
      <div class="worlds">
        <router-link :to="{ name: 'World', params: { id: world.id }}" v-for="world in worlds" :key="world.id" >
          <div class="card">
            <div>{{ world.name }}</div>
            <div class="card-desc">{{ world.overview }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
<!-- </amplify-authenticator> -->
</template>

<script>
import profile from '../data/profile.json'
export default {
  data: () => {
    return {
      username: '',
      email: '',
      worlds: [],
      signUpConfig: {
        headerText: 'TEST',
        usernameAlias: 'email',
        formFields: [
          { type: 'email', label: 'Email' },
          { type: 'password' },
          { type: 'username' }
        ]
      }
    }
  },
  methods: {
    getData: async function () {
      console.log(this.$store.state.isLoggedIn)
      this.username = profile.username
      this.email = profile.email
      this.worlds = profile.worlds
    },
    authenticated: function () {
      this.$store.commit('toggleLoggedInState')
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.profile {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ddd;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.card {
  border: 1px #555 solid;
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  margin: 10px;
}

.card-desc {
  overflow: hidden;
  padding: 0px 15px;
  height: 150px;
  width: 200px;
  margin: auto;
  transition: all 0.2s ease-in-out;
}
.card-desc:hover {
  transform: scale(1.1);
  width: 200px;
  height: 175px;
  background-color: #fff;
  padding: 0px;
  overflow: auto;
}
a {
  text-decoration: none;
}
a:visited {
  color: #000;
}
@media screen and (max-width: 920px) {

}

</style>
