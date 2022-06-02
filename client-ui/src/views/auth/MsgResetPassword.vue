<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh">
    <div class="col-lg-5 mb-10 mb-lg-3 mx-auto mt-5">
      <el-card>
        <div class="card-body py-4 px-sm-3">
          <h5
            class="d-flex justify-content-center fw-bold"
          >{{ t("msgResetPasswordInterface.title") }}</h5>
          <div class="d-flex justify-content-center text-center">
            <p class="text-black-50">{{ t("msgResetPasswordInterface.msg") }}</p>
          </div>
          <div class="mt-2 d-flex justify-content-center">
            <el-link href="/sign-up" :underline="false">
              <el-button type="primary" size="large">
                {{
                  t("signUp")
                }}
              </el-button>
            </el-link>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { t } from "../../core/i18n/translate";
export default {
  name: "msg-reset-password",
  setup() {
    return { t };
  },
};
</script>
