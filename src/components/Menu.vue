<script setup>
defineProps({
  icon: String,
  isActive: {
    type: Boolean,
    default: false
  },
  hint: String,
  marBottom: {
    type: String,
    default: "15px"
  }
});
</script>

<template>
  <div class="menu" :class="{'menu-active':isActive }">
    <img :src="icon">
    <div class="hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.menu {
  height: 36px;
  width: 66px;
  margin-bottom: v-bind(marBottom);
  display: flex;
  justify-content: center;
  position: relative;
}

.menu-active {
  border-left: 2px solid #FF9900;
}

.menu img {
  width: 36px;
  height: 36px;
  opacity: 0.5;
}

.menu img:hover {
  opacity: 0.9;
}

.menu img:hover ~ .hint {
  display: block;
}

.hint {
  display: none;
  position: absolute;
  left: 56px;
  top: 7px;
  background-color: black;
  color: white;
  font-size: 14px;
  white-space: nowrap;
}

.menu-active img {
  opacity: 0.7;
}
</style>