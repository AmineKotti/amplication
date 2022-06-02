<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <!--Illustration-->
    <div class="d-flex bg-login">
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-600px mb-xl-10 test3 square2"
        src="svg/authentication/login-ellipse-icon.svg"
        style="
          position: absolute;
          top: 0;
          left: -12%;
          width: 40%;
          transform: rotate(180deg);
        "
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-600px mb-xl-10 test3 square2"
        src="svg/authentication/admin-registre-icon.svg"
        style="position: absolute; top: 21%; left: 5%; width: 20%"
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-600px mb-xl-10 test3 square2"
        src="svg/authentication/member-registre-icon.svg"
        style="position: absolute; bottom: 0; left: 70%; width: 20%"
      />
      <el-image
        class="bgi-no-repeat bgi-position-x-center bgi-size bgi-position-center min-h-200px min-h-xl-600px mb-xl-10 test3 square2"
        src="svg/authentication/login-ellipse-icon.svg"
        style="position: absolute; bottom: 0; left: 55%; width: 46%"
      />
    </div>
    <!-- end Illustration-->
    <div class="col-lg-3 mb-10 mb-lg-3 mx-auto mt-5">
      <el-card class="card">
        <div class="card-body py-4 px-sm-3">
          <h5 class="d-flex justify-content-center fw-bold">
            {{ t("signUpInterface.title") }}
          </h5>
          <div class="d-flex justify-content-center">
            <p class="text-black-50">
              {{ t("alreadyHaveAnAccount") }}?
              <el-link type="primary" href="/login" class="fw-bolder">
                {{ t("signUpInterface.signUp") }}
              </el-link>
            </p>
          </div>
          <div class="mt-2">
            <label class="form-label">{{ t("email") }}</label>
            <el-input size="large" type="email" v-model="email" />
          </div>

          <div class="mt-4">
            <div class="col-6 text-start">{{ t("password") }}</div>
            <el-input type="password" size="large" v-model="password" />
          </div>

          <div class="mt-4">
            <div class="col-6 text-start">{{ t("role") }}</div>
            <el-select
              class="w-100"
              v-model="role"
              size="large"
              placeholder="Choisir role"
              style="width: auto"
            >
              <el-option
                v-for="item in roles"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>

          <div class="mt-4 d-grid">
            <el-button
              v-on:click="signUp"
              type="primary"
              size="large"
              class="mt-2"
              >{{ t("signUp") }}</el-button
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
let failMessage: string;
const roles = [
  {
    value: "user",
    label: "User",
  },
  {
    value: "admin",
    label: "Admin",
    disabled: true,
  },
];
export default {
  name: "sign-up",
  setup() {
    failMessage = t("messages.signUpFailed");
    return { t };
  },
  data() {
    return {
      email: "",
      password: "",
      role: "user",
      roles,
    };
  },
  methods: {
    async signUp() {
      try {
        let result = await axios.post("https://3005-wassimtekab-turtle-p696g6rui14.ws-eu46.gitpod.io/api/sign_up", {
          email: this.email,
          password: this.password,
          role: this.role,
        });
        if (result.data.id) {
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
            Components.ElMessage.error(error);
          }
        } else {
          console.log(
            "code error: " + result.data.code + ", msg: " + result.data.msg
          );
          Components.ElMessage.error(result.data.msg);
        }
      } catch (error) {
        Components.ElMessage.error(failMessage);
        console.log(error);
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
