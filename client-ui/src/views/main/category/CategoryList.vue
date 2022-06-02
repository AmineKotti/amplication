<template>
  <div>
    <div class="mx-auto mt-5 ms-4 me-4">
      <el-card shadow="never">
        <el-table :data="list" highlight-current-row>
          <el-table-column
            v-for="fieldName in fieldsName"
            :key="fieldName"
            :prop="fieldName"
            :label="fieldName.charAt(0).toUpperCase() + fieldName.slice(1)"
          />
          <el-table-column prop="actions" align="right" width="150">
            <template #default="scope">
              <router-link
                :to="/categories/deit"
                :underline="false"
                type="primary"
                class="me-3"
              >
                <el-button icon="Edit" circle plain link type="success" />
              </router-link>

              <el-button
                @click="handleRemoveEntity"
                icon="Delete"
                circle
                plain
                type="danger"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/config";
export default defineComponent({
  name: "List",
  components: {},
  setup() {
    const entity = "categories";
    const fieldsName = ref([name]);
    const handleRemoveEntity = () => {};
    const list = [];
    onMounted(() => {
      setCurrentPageBreadcrumbs(entity, []);
    });
    return {
      list,
      fieldsName,
      handleRemoveEntity,
      entity,
    };
  },
});
</script>

<style scoped="">
.el-table {
  --el-table-border: 1px dashed var(--el-table-border-color) !important;
}
</style>
