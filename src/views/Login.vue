<template>
  <div>
    <div class="form-group">
      <label>Login:</label>
      <input v-model="loginName" class="form-control" placeholder="Login" />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" v-model="loginPassword" class="form-control" placeholder="Password" />
    </div>
    <div class="form-actions">
      <button type="submit" @click="addLogin" class="btn btn-form btn-primary">OK</button>
    </div>
  </div>
</template>

<script>
import { authetification } from "@/utils/db";

export default {
  name: "LoginAuthentication",
  data() {
    return {
      loginName: "",
      loginPassword: ""
    };
  },
  methods: {
    addLogin() {
      authetification(this.loginName, this.loginPassword).then(result => {
        if (result) {
          this.$router.push("/home");
        }
      });
    }
  }
};
</script>

<style>
</style>