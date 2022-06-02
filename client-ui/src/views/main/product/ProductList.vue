<template>
  <div>
    <h1>{{ entity }} List</h1>
    <button @click="redirectAddPage" href="#">Add {{ entity }}</button>
    <table border="1">
      <tr>
        <th v-for="(fieldName,index) in fieldsName" :key="index">{{ fieldName }}</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in list" :key="item">
        <td v-for="(field,index) in fieldsName" :key="index">{{ item[field] }}</td>
        <td>
          <router-link :to="'/' + entity + 'Edit/' + item.id">Edit</router-link>
          <button class="remove" @click="remove(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">

import { setCurrentPageBreadcrumbs } from "@/core/helpers/config";
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: 'product-list',
  // data() {
  //   return {
  //     list: [],
  //     entity: "Product",
  //     fieldsName: "name,quantity",
  //   };
  // },
  setup() {
    const router = useRouter();
    const list = ref([])
    const entity = ref("Product")
    const fieldsName = ref(["name", "quantity"])
    const remove = async (id: string) => {
      const url = `/api/${entity.value.toLowerCase()}s/${id}`;
      const token = JSON.parse(localStorage.getItem("user-info")).access_token;
      const headers = {
        Authorization: "Bearer " + token,
      };
      let result = await axios.delete(url, { headers });
      if (result.status == 200) {
        loadData();
      }
    }
    const loadData = async () => {
      const url = `/api/${entity.value.toLowerCase()}s`;
      const token = JSON.parse(localStorage.getItem("user-info")).access_token;
      const headers = {
        Authorization: "Bearer " + token,
      };
      const result = await axios.get(url, { headers });
      if (result.data) {
        list.value = result.data;
      } else {
        alert("code error: " + result.data.code + ", msg: " + result.data.msg);
      }
    }
    const redirectAddPage = () => {
      router.push({ name: "create-" + entity.value });
    }
    onMounted(() => {
      setCurrentPageBreadcrumbs("products", []);
      loadData();
    });
    return {
      remove,
      redirectAddPage,
      fieldsName,
      entity,
      list
    }
  },
});
</script>

<style>
td {
  width: 160px;
  height: 40px;
}

table {
  margin-left: auto;
  margin-right: auto;
}

button {
  width: 120px;
  height: 30px;
  margin: 0 0 20px 0;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}

.remove {
  width: 120px;
  height: 30px;
  margin: 0 20px;
  border: 1px solid skyblue;
  background: skyblue;
  color: rgb(243, 243, 243);
  cursor: pointer;
}
</style>
