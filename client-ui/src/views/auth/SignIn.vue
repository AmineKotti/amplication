<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <!--Illustration-->
    <div class="d-flex bg-login">
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-500px mb-xl-10 test3 w-25"
        src="svg/authentication/login-geolocation-icon.svg"
        style="z-index: 1; position: absolute; bottom: 5%; left: 0%"
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-500px mb-xl-10 test3 w-25"
        src="svg/authentication/login-community-icon.svg"
        style="position: absolute; bottom: 5%; left: 74%"
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-end bgi-size bgi-position-y-bottom min-h-200px min-h-xl-400px mb-xl-10 test4"
        src="svg/authentication/login-polygon-icon.svg"
        style="position: absolute; bottom: 3%; width: 22%; left: 60%"
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-600px mb-xl-10 test3 square2"
        src="svg/authentication/login-ellipse-icon.svg"
        style="position: absolute; bottom: 0; left: 10%; width: 46%"
      />
    </div>
    <!-- end Illustration-->
    <div class="col-lg-3 mb-10 mb-lg-3 mx-auto mt-5">
      <el-card class="card">
        <div class="card-body py-4 px-sm-3">
          <h5 class="d-flex justify-content-center fw-bold">
            {{ t("login.title") }}
          </h5>
          <div class="d-flex justify-content-center">
            <p class="text-black-50">
              {{ t("login.newHere") }}?
              <el-link type="primary" href="/sign-up" class="fw-bolder">{{
                t("login.register")
              }}</el-link>
            </p>
          </div>
          <div class="mt-2">
            <label class="form-label">{{ t("email") }}</label>
            <el-input size="large" type="email" v-model="email" />
          </div>
          <div class="mt-4">
            <div class="row justify-content-between form-label">
              <div class="col-6 text-start">{{ t("password") }}</div>
              <div class="col-6 text-end">
                <el-link type="primary" href="/email-reset-password"
                  >{{ t("forgotPassword") }} ?</el-link
                >
              </div>
            </div>
            <el-input type="password" size="large" v-model="password" />
          </div>
          <div class="mt-4 d-grid">
            <el-button
              v-on:click="login"
              type="primary"
              size="large"
              class="btn-lg mt-2"
              >{{ t("signIn") }}</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { Components } from "@tekab-dev-team/storybook-devfactory";
import { t } from "../../core/i18n/translate";
let failMessage: string | null;

export default {
  name: "sign-in",
  setup() {
    failMessage = t("messages.loginFailed");
    return { t };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = { email: this.email, password: this.password };
        const headers = {
          apikey:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI3MjA4NTQwLCJleHAiOjE5NzQzNjM3NDB9.pkT3PNpO4DtO45Ac5HK_TKCx8sGLgNtV__pr_ZrRSAU",
        };
        let result = await axios.post(
          "https://8000-wassimtekab-turtle-p696g6rui14.ws-eu45.gitpod.io/auth/v1/token?grant_type=password",
          credentials,
          { headers }
        );

        if (result.data) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        Components.ElMessage.error(failMessage);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
<style lang="scss" scoped>
.el-input {
  background-color: #e9ecef;
}
@media (max-width: 1200px) {
  .bg-login {
    display: none !important;
  }
}
</style>
