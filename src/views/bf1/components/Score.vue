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

    let data = res.data.LGAM[0];

    data.PROS.forEach(item => {
      let player = {
        teamId: item.TIDX,
        pid: item.PID,
        rank: getPlayerRank(item.PATT.rank),
        name: item.NAME,
        playTime: getPlayerTime(item.TIME),
        latency: item.PATT.latency,
        isAdmin: false,
        isVIP: false,
        lifeKD: 0.0,
        lifeKPM: 0.0,
        lifeTime: 0.0,
      };

      // 0 为队伍1
      // 1 为队伍2
      if (player.teamId === 0) {
        team1Player.value.push(player);
      } else {
        team2Player.value.push(player);
      }
    });

    // 按照等级排序
    team1Player.value.sort((a, b) => {
      return b.rank - a.rank;
    });
    team2Player.value.sort((a, b) => {
      return b.rank - a.rank;
    });

    let temp = data.GAME.ATTR;

    let adminString = temp.admins1.concat(temp.admins2, temp.admins3, temp.admins4);
    let adminList = adminString.split(";").map(Number);

    let vipString = temp.vips1.concat(temp.vips2, temp.vips3, temp.vips4);
    let vipList = vipString.split(";").map(Number);

    // console.log(adminList);
    // console.log(vipList);

    // 管理员列表
    team1Player.value.forEach(player => {
      if (adminList.indexOf(player.pid) != -1) {
        player.isAdmin = true;
      }
      if (vipList.indexOf(player.pid) != -1) {
        player.isVIP = true;
      }
    });
    // VIP列表
    team2Player.value.forEach(player => {
      if (adminList.indexOf(player.pid) != -1) {
        player.isAdmin = true;
      }
      if (vipList.indexOf(player.pid) != -1) {
        player.isVIP = true;
      }
    });

    // console.log(team1Player)
    // console.log(team2Player)

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
      <div class="title">{{ server.name }}</div>
      <div class="details">
        <div class="country">
          <img :src="server.countryImage" :title="server.country"/>
        </div>
        <div>{{ server.mapModePretty }} - {{ server.mapNamePretty }}</div>
        <div v-if="server.isCustom">&nbsp;-</div>
        <div class="custom" v-if="server.isCustom">&nbsp;自定</div>
        <div class="tick">&nbsp;- {{ server.tickRate }}HZ</div>
        <div class="official" v-if="server.isOfficial">[官服]</div>
        <div>|</div>
        <div class="count">
          {{ server.soldier }} / {{ server.maxSoldier }} [{{ server.queue }}]
          ({{ server.spectator }})
        </div>
        <div>|</div>
        <div>{{ server.gameId }}</div>
        <div>|</div>
        <div>{{ server.guid }}</div>
      </div>
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
  white-space: nowrap;

  .header {
    margin: 15px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 24px;
    }

    .details {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;

      .country {
        width: 20px;
        height: 14px;
        margin-right: 10px;
        box-shadow: 0 0 3px black;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .custom {
        color: #FF9900;
      }

      .tick{
        margin-right: 10px;
      }

      .tick ~ div {
        margin-right: 10px;
      }

      .official {
        color: #02A0E2;
      }

      .count {
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    padding: 10px 20px 20px 20px;

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