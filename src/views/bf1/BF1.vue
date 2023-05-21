<script setup>
import {useRouter} from 'vue-router';
import {ref, onMounted} from "vue";

import {getRandomBackData} from '@/utils/back'
import Header from "@/views/bf1/components/Header.vue";

const router = useRouter();

// 动画名称
const transitionName = ref("");

const back_image = ref("");
const back_video = ref("");

const video_pos_left = ref("-150px");

onMounted(() => {
  let back = getRandomBackData();
  back_image.value = back.image;
  back_video.value = back.video;
});

function changeMessage(data) {
  video_pos_left.value = data;
}

router.beforeEach((to, from) => {
  // 根据路由标记判断触发哪个动画
  if (to.meta.index > from.meta.index) {
    // 从右往左动画
    transitionName.value = "slide-right";
  } else if (to.meta.index < from.meta.index) {
    // 从左往右动画
    transitionName.value = "slide-left";
  } else {
    transitionName.value = "";
  }
});

</script>

<template>
  <div class="bf1">
    <video class="main-video" autoplay loop muted preload="auto" :poster="back_image">
      <source :src="back_video" type="video/mp4"/>
    </video>
    <div class="main-container">
      <Header @change-msg="changeMessage"/>
      <div class="main-view">
        <router-view v-slot="{ Component }">
          <transition :name="transitionName">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.bf1 {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;

  .main-video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: v-bind(video_pos_left);
    z-index: -999;
    object-fit: cover;
    scale: 1.3;
    transition: all .2s;
  }

  .main-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(18px);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .main-view {
      flex: 1;
      width: 200%;
      display: flex;
      overflow: hidden;
    }
  }

  @slide-duration: 0.2s;

  .slide-left-enter-active {
    animation: slide-left-in @slide-duration;
  }

  .slide-left-leave-active {
    animation: slide-left-out @slide-duration;
  }

  .slide-right-enter-active {
    animation: slide-right-in @slide-duration;
  }

  .slide-right-leave-active {
    animation: slide-right-out @slide-duration;
  }

  @keyframes slide-left-in {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-left-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes slide-right-in {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-right-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}

</style>
