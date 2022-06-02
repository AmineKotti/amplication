<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { ElConfigProvider } from 'element-plus'
import fr from 'element-plus/lib/locale/lang/fr'
import en from 'element-plus/lib/locale/lang/en'
import { computed } from 'vue'

const { locale } = useI18n({})

const currentLang = computed(() => {
  if (locale.value === 'en') {
    return en
  } else {
    return fr
  }
})
</script>
 <template>
  <ElConfigProvider :locale="currentLang">
    <router-view />
  </ElConfigProvider>
</template>
