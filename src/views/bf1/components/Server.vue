<script setup>
defineProps(["server", "index"]);
</script>

<template>
  <div class="server">
    <!-- 服务器地图 -->
    <div class="server-image">
      <img :src="server.mapImage" :title="server.mapNamePretty"/>
      <div class="index">{{ index + 1 }}</div>
    </div>
    <!-- 服务器信息 -->
    <div class="server-info">
      <div class="title">{{ server.name }}</div>
      <div class="description">
        {{ server.description }}
        <div class="tooltip">
          <div>{{ server.name }}</div>
          <div>{{ server.description }}</div>
        </div>
      </div>
      <div class="details">
        <img :src="server.regionImage" :title="server.region"/>
        <div>{{ server.mapModePretty }} - {{ server.mapNamePretty }}</div>
        <div v-if="server.isCustom">&nbsp;-</div>
        <div class="custom" v-if="server.isCustom">&nbsp;自定</div>
        <div>&nbsp;- {{ server.tickRate }}HZ</div>
        <div class="official" v-if="server.isOfficial">[官服]</div>
      </div>
    </div>
    <!-- 服务器人数 -->
    <div class="server-count">
      {{ server.soldier }} / {{ server.maxSoldier }} [{{ server.queue }}]
      ({{ server.spectator }})
    </div>
    <!-- 服务器Ping -->
    <div class="server-ping">
      <img :src="server.pingImage">
      <div>{{ server.pingNumber }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.server {
  height: 80px;
  color: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--bf1-line-color);
  position: relative;

  &:hover {
    color: #000;
    background-color: #FFF;
  }

  .server-image {
    object-fit: cover;
    box-shadow: 0 0 5px black;
    position: relative;
    display: flex;
    margin-left: 10px;

    img {
      height: 70px;
    }

    .index {
      color: rgba(255, 255, 255, .5);
      position: absolute;
      left: 3px;
      bottom: 3px;
      font-size: 12px;
      font-weight: normal;
      transform: scale(0.8);
    }
  }

  .server-info {
    flex: 1;
    margin: 0px 10px;

    .title,
    .description {
      word-wrap: break-word;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .title {
      font-size: 16px;
      font-weight: bold;
      -webkit-line-clamp: 1;
    }

    .description {
      height: 34px;
      font-size: 12px;
      -webkit-line-clamp: 2;

      .tooltip {
        margin: 10px;
        padding: 10px;
        position: absolute;
        left: 40%;
        top: 60%;
        box-shadow: 0 0 10px #000;
        background-color: #FFF;
        visibility: collapse;
        z-index: 99;

        :nth-child(1) {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          padding-bottom: 5px;
          border-bottom: 1px solid gray;
        }
      }

      &:hover {
        .tooltip {
          visibility: visible;
        }
      }
    }

    .details {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;

      img {
        width: 20px;
        margin-right: 10px;
        box-shadow: 0 0 3px black;
      }

      .custom {
        color: #FF9900;
      }

      .official {
        color: #02A0E2;
        margin-left: 10px;
      }
    }
  }

  .server-count {
    width: 120px;
    font-size: 14px;
    text-align: right;
    margin-right: 20px;
  }

  .server-ping {
    display: flex;
    align-items: center;
    margin-right: 20px;

    img{
      height: 14px;
      margin-right: 10px;
    }

    div {
      width: 25px;
      text-align: left;
      font-size: 12px;
    }
  }
}

</style>
