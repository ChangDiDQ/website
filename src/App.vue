<script setup lang="ts">
import navbar from "@/components/navbar/navbar.vue";
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
  <navbar/>
  <div id="view">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
</style>
