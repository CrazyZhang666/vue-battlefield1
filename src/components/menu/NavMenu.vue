<script setup>
import Menu from "@/components/Menu.vue";
</script>

<template>
  <div class="main-nav">
    <div class="menu-top">
      <Menu icon="images/menu/menu-icon-bfv.png" hint="《戰地風雲5》"/>
      <Menu icon="images/menu/menu-icon-bf1.png" is-active="true" hint="《BATTLEFIELD 1》"/>
      <Menu icon="images/menu/menu-icon-bf4.png" hint="《戰地風雲4》"/>
      <Menu icon="images/menu/menu-icon-bfh.png" hint="《戰地風雲 : HARDLINE》"/>
      <Menu icon="images/menu/menu-icon-player.png" hint="《職涯》"/>
      <Menu icon="images/menu/menu-icon-platoons.png" hint="《戰隊》"/>
      <Menu icon="images/menu/menu-icon-video.png" hint="《觀賞》"/>
      <Menu icon="images/menu/menu-icon-news.png" hint="《最新消息》"/>
    </div>
    <div class="menu-bottom">
      <Menu icon="images/menu/menu-icon-help.png" mar-bottom="0px" hint="《幫助》"/>
      <Menu icon="images/menu/menu-icon-quit.png" mar-bottom="0px" hint="《離開》"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--bf1-line-color);

  .menu-top {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .menu-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>