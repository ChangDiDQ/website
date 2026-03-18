<script setup lang="ts">
import testCp from "@/components/test/testCp.vue";
import {isServer} from "@/ts/env/ssr.ts";
import { useHead } from '@unhead/vue';

if (isServer) {
  useHead({
    htmlAttrs: {
      lang: 'zh',//html的lang静态值设置为zh
    }
  });
}
</script>

<template>
  <div id="view">
    <router-view/>
  </div>
  <testCp/>
  <p class="bc">demo by hgnim :)</p>
</template>

<style scoped lang="scss">
.bc {
  color: blue;
}
</style>
