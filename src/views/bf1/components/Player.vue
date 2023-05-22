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
    <div class="rank" :class="{'rank-100-plus' : player.rank >= 100, 'rank-150' : player.rank === 150}">
      {{ player.rank }}
    </div>
    <div class="name" :class="{'name-VIP' : player.isVIP, 'name-Admin' : player.isAdmin}">{{ player.name }}</div>
    <div class="time">{{ player.playTime }} 分鐘</div>
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
    text-align: right;
    margin-right: @item-margin;
  }

  .rankImage {
    width: 24px;
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

  .rank-100-plus {
    color: black;
    background-color: #FF8F6B;
    border-color: #FF8F6B;
  }

  .rank-150 {
    color: black;
    background-color: #FED700;
    border-color: #FED700;
  }

  .name {
    flex: 1;
  }

  .name-VIP {
    color: #02A0E2;
  }

  .name-Admin {
    color: #FF9900;
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