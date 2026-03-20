<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed, onMounted, type Ref, ref} from "vue";
import {marked} from "marked";

const targetMdFiles= import.meta.glob('@/views/maintenanceTargetView/md/**/*.md', {
  eager: true,
  as: 'url'
});

const route = useRoute();
const meta = computed(() => ({
  markdownRelativePath: route.meta.markdownRelativePath as string,
}));

const content:Ref<HTMLDivElement|null> = ref(null);
async function mdLoad(){
  if (content.value){
    content.value.innerHTML=marked.parse(
        await (async ()=>{
          const res = await fetch(targetMdFiles[`/src/views/maintenanceTargetView/md/${meta.value.markdownRelativePath}`] as string)
          return res.text();
        })()
    ) as string;
  }
}

onMounted(async ()=>{
  await mdLoad();
});
</script>

<template>
<div class="container">
  <div class="row mt-4">
    <div class="col-12">
      <div ref="content"></div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>