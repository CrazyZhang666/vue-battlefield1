<script setup>
import Card from "@/components/Card.vue";

import card_01 from "@/assets/images/card/card-01.png";
import card_02 from "@/assets/images/card/card-02.png";
</script>

<template>
  <div class="content">
    <div class="welcome-msg">CrazyZhang666，快樂星期五。新的每週勛章在等著您。</div>
    <div class="card-box">
      <Card :image="card_01" title="行動模式"
            description="踏上一次大戰的史詩戰役旅途。攻擊方需要佔領旗幟，並且突破由防守方所堅守的防線。"/>
      <Card :image="card_02" title="征服" description="壯闊的全面戰爭：守住多數旗幟並殲滅敵方士兵來獲得勝利。"/>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/css/bf1.less";

.content {
  .bf1-view();
  display: flex;
  flex-direction: column;
}

.welcome-msg {
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
}

.card-box {
  display: flex;
}
</style>