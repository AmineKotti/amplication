<template>
  <div
    class="col-12 col-md-8 mx-auto mt-4 border border-secondary p-5 bg-white"
  >
    <h3 class="text-center text-primary my-4">Create Produit</h3>
    <ProduitForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProduitForm from "@/components/forms/ProduitForm.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/config";
import { onMounted } from "vue";
export default defineComponent({
  name: "create-produit",
  components: {
    ProduitForm,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("create produit", ["produits"]);
    });
    return {};
  },
});
</script>
