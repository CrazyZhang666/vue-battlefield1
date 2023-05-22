<script setup>
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <div class="party-box">
    <div class="party-content">
      <div class="party">
        <img src="/public/images/party/party-minimized.png">
      </div>
      <div class="add">
        <Avatar icon="images/party/icon-add-white.png" color="translate"/>
      </div>
      <div class="playing">
        <img src="/public/images/party/playing-minimized.png">
      </div>
      <div class="playing-list">
        <Avatar icon="images/menu/menu-icon-player.png" v-for="index of 20" :key="index"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.img-cover {
  width: 100%;
  height: 100%;
}

.party-box {
  width: 100%;
  height: 100%;
  margin-left: 20px;
}

.party-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .party {
    width: 10px;
    height: 10px;
    margin-bottom: 20px;

    img {
      .img-cover();
    }
  }

  .add {
    width: 36px;
    height: 36px;
    margin-bottom: 20px;

    img {
      .img-cover();
    }
  }

  .playing {
    width: 10px;
    height: 10px;
    margin-bottom: 20px;

    img {
      .img-cover();
    }
  }

  .playing-list {
    flex: 1;
  }
}
</style>