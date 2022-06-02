<template>
  <div>
    <h1>Hello User, Welcome on Home Page</h1>
  </div>
</template>

<script lang="ts">import { defineComponent } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
  name: "home",
  components: {

  },
  setup() {
    const router = useRouter();

    let user = localStorage.getItem("user-info");
    if (!user) {
      router.push({ name: "sign-In" });
    }

  }

});
</script>
