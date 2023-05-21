<script setup>
import Menu from "@/components/Menu.vue";

import icon_bfv from "@/assets/images/menu/menu-icon-bfv.png";
import icon_bf1 from "@/assets/images/menu/menu-icon-bf1.png";
import icon_bf4 from "@/assets/images/menu/menu-icon-bf4.png";
import icon_bfh from "@/assets/images/menu/menu-icon-bfh.png";

import icon_player from "@/assets/images/menu/menu-icon-player.png";

import icon_platoons from "@/assets/images/menu/menu-icon-platoons.png";
import icon_video from "@/assets/images/menu/menu-icon-video.png";
import icon_news from "@/assets/images/menu/menu-icon-news.png";

import icon_help from "@/assets/images/menu/menu-icon-help.png";
import icon_quit from "@/assets/images/menu/menu-icon-quit.png";

</script>

<template>
  <div class="main-nav">
    <div class="menu-top">
      <Menu :icon="icon_bfv" hint="《戰地風雲5》"/>
      <Menu :icon="icon_bf1" is-active="true" hint="《BATTLEFIELD 1》"/>
      <Menu :icon="icon_bf4" hint="《戰地風雲4》"/>
      <Menu :icon="icon_bfh" hint="《戰地風雲 : HARDLINE》"/>
      <Menu :icon="icon_player" hint="《職涯》"/>
      <Menu :icon="icon_platoons" hint="《戰隊》"/>
      <Menu :icon="icon_video" hint="《觀賞》"/>
      <Menu :icon="icon_news" hint="《最新消息》"/>
    </div>
    <div class="menu-bottom">
      <Menu :icon="icon_help" mar-bottom="0px" hint="《幫助》"/>
      <Menu :icon="icon_quit" mar-bottom="0px" hint="《離開》"/>
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