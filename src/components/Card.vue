<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="item">
    <img :src="image">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 330px;
  height: 220px;
  color: white;
  background-color: rgba(0, 0, 0, .4);
  margin-right: 8px;
  transition: all .1s;
}

.item:hover {
  color: black;
  background-color: white;
}

.item:hover > img {
  height: 100px;
}

.item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: all .1s;
}

.content {
  display: flex;
  flex-direction: column;
  margin: 15px;
  justify-content: center;
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
}

.description {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>