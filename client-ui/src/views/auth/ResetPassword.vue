<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <div class="col-lg-3 mb-10 mb-lg-3 mx-auto mt-5">
      <el-card>
        <div class="card-body py-4 px-sm-3">
          <h5 class="d-flex justify-content-center fw-bold">
            {{ t("resetPasswordInterface.title") }}
          </h5>
          <div class="d-flex justify-content-center text-center">
            <p class="text-black-50">{{ t("resetPasswordInterface.msg") }}</p>
          </div>
          <div class="mt-4">
            <div class="col-6 text-start mb-1">{{ t("newPassword") }}</div>
            <el-input type="password" size="large" v-model="password" />
          </div>
          <div class="row justify-content-center mt-4">
            <el-button
              v-on:click="reset"
              type="primary"
              size="large"
              class="col-3"
              >{{ t("submit") }}</el-button
            >
            <el-button
              size="large"
              type="primary"
              plain
              class="col-3 ms-2"
              style="position: relative"
              ><el-link href="/sign-up" :underline="false" type="primary">{{
                t("cancel")
              }}</el-link></el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { t } from "../../core/i18n/translate";
import { Components } from "@tekab-dev-team/storybook-devfactory";

export default {
  name: "password-reset",
  setup() {
    return { t };
  },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    async reset() {
      try {
        const accessToken = this.$route.hash.substring(
          this.$route.hash.indexOf("=") + 1,
          this.$route.hash.lastIndexOf("&expires_in")
        );
        let res = await axios.post("/api/reset_password", {
          access_token: accessToken,
          password: this.password,
        });
        if (res.data) {
          try {
            const credentials = {
              email: res.data.email,
              password: this.password,
            };
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
          } catch (error: any) {
            Components.ElMessage.error(error.message);
          }
        }
      } catch (error: any) {
        Components.ElMessage.error(error.message);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.el-link:hover {
  color: white;
}
.el-link {
  border-radius: 4px;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
