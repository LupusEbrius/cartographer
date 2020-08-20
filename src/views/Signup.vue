<template>
  <div class="signup">
   <amplify-authenticator>
    <amplify-sign-up
      slot="sign-up"
      :form-fields.prop="formFields"
    ></amplify-sign-up>
    <amplify-sign-in slot="sign-in" :handleSubmit.prop="signIn"></amplify-sign-in>
    <amplify-sign-out></amplify-sign-out>
    {{$store.state.signedIn}}
  </amplify-authenticator>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
  data: function () {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      headerText: 'Sign Up',
      usernameAlias: 'email',
      formFields: [
        { type: 'email', label: 'Email' },
        { type: 'username', label: 'Username' },
        { type: 'password', label: 'Password' }
      ]
    }
  },
  methods: {
    signIn: async function () {
      console.log('WHAT THE FUCK!!!')
      const username = 'demo'
      const password = 'P@ssw0rd'
      try {
        const user = await Auth.signIn(username, password)
        console.log(user)
      } catch (error) {
        console.log('error signing in', error)
      }
    }
  }
}
</script>

<style lang="scss">
// .signup {
//   background-color: #ddd;
//   height: 100%;
//   width: 100%;
//   position: fixed;
// }
// form {
//   width: 20%;
//   display: flex;
//   height: max-content;
//   flex-direction: column;
//   background-color: #fff;
//   height: 60%;
//   margin: auto;
//   margin-top: 8%;
//   box-sizing: border-box;
// }
</style>
