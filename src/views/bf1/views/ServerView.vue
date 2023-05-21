<script setup>
import {computed, ref} from "vue";

import Server from "@/views/bf1/components/Server.vue";
import Spinner from "@/components/Spinner.vue";
import ScoreModal from "@/views/bf1/components/ScoreModal.vue";

import {
  getMapImageMedium, getRegionImage, isOfficialServer, getPingImage, getPingNumber
} from "@/utils/server"
import {isNotEmptyStr} from "@/utils/player";
import {useConfigStore} from "@/store";
import {bf1_searchServers} from "@/api/bf1";

const store = useConfigStore();

const filterKey = ref("");
const gameServers = ref([])
const selectServer = ref({})

const isLoading = ref(false);
const showModal = ref(false);

const filterGameServers = computed(() => {
  if (filterKey.value === "") return gameServers.value;

  filterKey.value = filterKey.value.toLowerCase();

  return gameServers.value.filter((server) => {
    let name = server.name.toLowerCase();
    return name.indexOf(filterKey.value) !== -1;
  });
});

function searchServers(region) {

  if (!isNotEmptyStr(store.sessionId)) {
    return;
  }

  filterKey.value = "";
  gameServers.value = [];

  isLoading.value = true;

  bf1_searchServers(region).then(res => {

    res.data.result.gameservers.forEach(item => {
      let server = {
        gameId: item.gameId,
        guid: item.guid,
        region: item.region,
        regionImage: getRegionImage(item.region),
        country: item.country,
        name: item.name,
        description: item.description,
        soldier: item.slots.Soldier.current,
        maxSoldier: item.slots.Soldier.max,
        queue: item.slots.Queue.current,
        spectator: item.slots.Spectator.current,
        mapMode: item.mapMode,
        mapModePretty: item.mapModePretty,
        mapName: item.mapName,
        mapNamePretty: item.mapNamePretty,
        mapImage: getMapImageMedium(item.mapName),
        isCustom: item.custom,
        isOfficial: isOfficialServer(item.serverType),
        isFavorite: item.isFavorite,
        tickRate: item.tickRate,
        pingImage: getPingImage(item.region),
        pingNumber: getPingNumber(item.region)
      }

      gameServers.value.push(server);

      // 按照人数降序排序
      gameServers.value.sort((a, b) => {
        if (a.soldier === b.soldier) {
          return b.queue - a.queue;
        }
        return b.soldier - a.soldier;
      });
    })

    isLoading.value = false;

  }).catch(err => {
    console.log(err);
    isLoading.value = false;
  });

}

function getSelectedItem(server) {
  selectServer.value = server;
  showModal.value = true;
}

</script>

<template>
  <div class="content">
    <div class="content-left">
      <Server v-for="(server,index) in filterGameServers" :server="server" :index="index" :key="index"
              @click="getSelectedItem(server)"/>
      <Spinner v-if="isLoading"/>
      <Teleport to="body">
        <ScoreModal :show="showModal" :server="selectServer" @close="showModal = false"/>
      </Teleport>
    </div>
    <div class="content-right">
      <input type="text" v-model="filterKey" placeholder="以名稱篩選..."/>
      <label class="server-count">檢視遊戲 ({{
          filterGameServers.length === undefined ? 0 : filterGameServers.length
        }})</label>
      <button @click="searchServers('all')">全部區域</button>
      <button @click="searchServers('asia')">亞洲</button>
      <button @click="searchServers('eu')">歐洲</button>
      <button @click="searchServers('oc')">大洋洲</button>
      <button @click="searchServers('nam')">北美洲</button>
      <button @click="searchServers('sam')">南美洲</button>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/css/bf1.less";

.content {
  .bf1-view();
  display: flex;
  flex-direction: row;

  .content-right {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input[type="text"] {
      width: 120px;
    }

    .server-count {
      font-size: 14px;
      margin: 10px 0;
    }

    button {
      width: 120px;
      margin-bottom: 5px;
    }
  }

  .content-left {
    flex: 1;
    overflow: auto;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
  }

}
</style>