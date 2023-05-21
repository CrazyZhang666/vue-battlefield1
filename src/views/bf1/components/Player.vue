<script setup>
import {getRankImage} from "@/utils/server";

const props = defineProps({
  player: [],
  index: Number
})

</script>

<template>
  <div class="player-main">
    <div class="index">{{ index + 1 }}</div>
    <img class="rankImage" :src="getRankImage(player.rank)">
    <div class="rank">{{ player.rank }}</div>
    <div class="name">{{ player.name }}</div>
    <div class="time">{{ player.time }} 分鐘</div>
    <div class="latency">{{ player.latency }} ms</div>
  </div>
</template>

<style scoped lang="less">
@item-margin: 14px;

.player-main {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px;
  font-size: 14px;

  &:hover {
    color: black;
    background-color: white;
  }

  .index {
    width: 16px;
    font-size: 12px;
    margin-right: @item-margin;
  }

  .rankImage {
    height: 24px;
    margin-right: @item-margin;
  }

  .rank {
    width: 34px;
    font-size: 12px;
    text-align: center;
    margin-right: @item-margin;
    border: 1px solid gray;
  }

  .name {
    flex: 1;
  }

  .time {
    width: 70px;
    white-space: nowrap;
    text-align: right;
    margin-left: @item-margin;
  }

  .latency {
    width: 60px;
    text-align: right;
  }
}
</style>