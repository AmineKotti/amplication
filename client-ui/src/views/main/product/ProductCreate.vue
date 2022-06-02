<template>
    <div class="col-12 col-md-8 mx-auto my-4 border border-secondary p-5 bg-white">
        <h3 class="text-center text-primary my-4">{{ $t("entityForm.title.create") }} Product</h3>
        <EntityForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EntityForm from '@/components/forms/EntityForm.vue';
import { setCurrentPageBreadcrumbs } from "@/core/helpers/config";
import { onMounted } from "vue";

export default defineComponent({
    name: "create-product",
    components: {
        EntityForm
    },
    setup() {
        onMounted(() => {
            setCurrentPageBreadcrumbs("create product", ["products"]);
        });
    },
});
</script>
