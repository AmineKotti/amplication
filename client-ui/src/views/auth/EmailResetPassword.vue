<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <div class="col-lg-3 mb-10 mb-lg-3 mx-auto mt-5">
      <el-card>
        <div class="card-body py-4 px-sm-3">
          <h5 class="d-flex justify-content-center fw-bold">
            {{ t("emailResetPasswordInterface.title") }} ?
          </h5>
          <div class="d-flex justify-content-center text-center">
            <p class="text-black-50">
              {{ t("emailResetPasswordInterface.msg") }}.
            </p>
          </div>
          <div class="mt-2">
            <label class="form-label">{{ t("email") }}</label>
            <el-input size="large" type="email" v-model="email" />
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
  name: "email-reset-password",
  setup() {
    return { t };
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async reset() {
      try {
        let result = await axios.post(
          "/api/send_email_reset_password",
          {
            email: this.email,
          }
        );
        if (result.data.message) {
          Components.ElMessage.error(result.data.message);
        } else {
          this.$router.push({ name: "msg-reset-password" });
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
