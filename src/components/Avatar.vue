<script setup>
defineProps({
  icon: String,
  color: {
    type: String,
    default: "#2898C4"
  }
});
</script>

<template>
  <div class="border">
    <div class="line"></div>
    <div class="avatar">
      <img :src="icon">
    </div>
  </div>
</template>

<style scoped lang="less">
.border {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;

  .line {
    width: 2px;
    background-color: v-bind(color);
    margin-right: 2px;
  }

  .avatar {
    width: 36px;
    height: 36px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>