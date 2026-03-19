<script setup lang="ts">

</script>

<template>
  <div class="w-100 pt-5 pb-5" id="home_title">
    <div class="w-100 d-flex justify-content-center">
      <h1>畅的电器维修服务中心</h1>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <h4>子标题</h4>
    </div>
    <div class="background"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header">
            图像
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header">
            图像
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header">
            图像
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header">
            图像
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h3>标题</h3>
      </div>
      <div class="col-12 col-md-7 order-1 order-md-2">
        <p>文本</p>
      </div>
      <div class="col-12 col-md-5 order-2 order-md-1">
        图像
      </div>
      <div class="col-12 col-md-7">
        <p>文本</p>
      </div>
      <div class="col-12 col-md-5">
        图像
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h3>标题</h3>
      </div>
      <div class="col-12">
        <p>文本</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home_title{
  position: relative;
  .background{
    background-color: var(--bs-secondary-bg);
    position: absolute;
    width: 100%;
    height: 150%;
    top: 0;
    z-index: -1;
  }
}
</style>