<script setup>
import {onMounted, ref} from "vue";
import {bf1_getBlazePlayerList} from "@/api/bf1";
import {getPlayerRank, getPlayerTime} from "@/utils/player";

import Player from "@/views/bf1/components/Player.vue";
import Spinner from "@/components/Spinner.vue";

const props = defineProps({
  server: Object
})

const isLoading = ref(false);

const team1Player = ref([]);
const team2Player = ref([]);

onMounted(() => {
  isLoading.value = true;

  bf1_getBlazePlayerList(props.server.gameId).then(res => {

    res.data.LGAM[0].PROS.forEach(item => {
      let player = {
        teamId: item.TIDX,
        pid: item.EXID,
        rank: getPlayerRank(item.PATT.rank),
        name: item.NAME,
        time: getPlayerTime(item.TIME),
        latency: item.PATT.latency,
      };

      if (player.teamId === 0) {
        team1Player.value.push(player);
      } else {
        team2Player.value.push(player);
      }
    });

    team1Player.value.sort((a, b) => {
      return b.rank - a.rank;
    });
    team2Player.value.sort((a, b) => {
      return b.rank - a.rank;
    });

    isLoading.value = false;

  }).catch(err => {
    console.log(err);
    isLoading.value = false;
  });
})

</script>

<template>
  <div class="score-main">
    <div class="header">
      <div>{{ server.name }}</div>
    </div>
    <div class="content">
      <div class="team team1">
        <Player v-for="(player,index) in team1Player" :player="player" :index="index" :key="index"/>
        <Spinner v-if="isLoading"/>
      </div>
      <div class="team team2">
        <Player v-for="(player,index) in team2Player" :player="player" :index="index" :key="index"/>
        <Spinner v-if="isLoading"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.score-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    font-size: 24px;
    margin: 20px;
    text-align: center;
  }

  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    padding: 20px;

    .team {
      flex: 1;
      border: 1px solid var(--bf1-border-color);
      overflow: auto;
      position: relative;
    }

    .team1 {
      margin-right: 5px;
    }

    .team2 {
      margin-left: 5px;
    }
  }
}
</style>