<script setup>
import Score from "@/views/bf1/components/Score.vue";

const props = defineProps({
  show: Boolean,
  server: Object
})
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <button class="modal-button" @click="$emit('close')">返回</button>
        <Score :server="props.server"/>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(26px);
  transition: opacity 0.3s ease;

  .modal-container {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .modal-button {
      position: fixed;
      top: 20px;
      right: 20px;
      width: auto;
    }
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>