<template>
  <div class="nav">
    <a v-on:click="redirectHomePage">Home</a>
    <a
      href="#"
      v-for="entitie in entities.split(',')"
      :key="entitie"
      v-on:click="() => entityRedirect(entitie)"
      >{{ entitie }}</a
    >
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entities: "Produit,Category",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
    redirectHomePage() {
      this.$router.push({ name: "HomePage" });
    },
    entityRedirect(entity) {
      const routerName = entity + "List";
      this.$router.push({ name: routerName });
    },
  },
  name: "Header",
};
</script>

<style>
.nav {
  background-color: black;
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: white;
  color: black;
}
</style>
