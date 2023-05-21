<script setup>
import NavMenu from "@/components/menu/NavMenu.vue";
import NavParty from "@/components/party/NavParty.vue";

</script>

<template>
  <main>
    <div class="main-left">
      <NavMenu/>
    </div>
    <div class="main-view">
      <router-view/>
    </div>
    <div class="main-right">
      <NavParty/>
    </div>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100%;
  height: 100%;

  .main-left {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
  }

  .main-view {
    width: 100%;
    height: 100%;
  }

  .main-right {
    position: fixed;
    top: 20px;
    bottom: 20px;
    right: 0px;
    z-index: 99;
    width: 100px;
    overflow: hidden;
    transition: all .1s;

    &:hover {
      width: 200px;
      background-color: rgba(0, 0, 0, .8);
    }
  }
}
</style>
