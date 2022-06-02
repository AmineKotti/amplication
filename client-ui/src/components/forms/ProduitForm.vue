<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <div class="d-flex justify-content-end">
      <el-button>Cancel</el-button>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
export default defineComponent({
  setup() {
    const form = reactive({ name: "" });

    const onSubmit = () => {
      console.log("submit!", form);
    };
    return {
      onSubmit,
      form,
    };
  },
});
</script>
