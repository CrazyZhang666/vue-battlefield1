<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from 'vue-router';

const router = useRouter();

const line_left = ref("0px");
const line_width = ref("36px");

let video_pos_left = "-150px";

const emit = defineEmits(['changeMsg'])

onMounted(() => {

})

function onChangeRadio(id, event) {
  switch (id) {
    case "home":
      video_pos_left = "-150px";
      router.push("/bf1/home");
      break;
    case "auth":
      video_pos_left = "-100px";
      router.push("/bf1/auth");
      break;
    case "server":
      video_pos_left = "-50px";
      router.push("/bf1/server");
      break;
    case "record":
      video_pos_left = "0px";
      router.push("/bf1/record");
      break;
    case "admin":
      video_pos_left = "50px";
      router.push("/bf1/admin");
      break;
    case "music":
      video_pos_left = "100px";
      router.push("/bf1/music");
      break;
    case "about":
      video_pos_left = "150px";
      router.push("/bf1/about");
      break;
  }

  emit('changeMsg', video_pos_left)

  let element = event.currentTarget.nextElementSibling;
  line_left.value = element.offsetLeft + "px";
  line_width.value = element.offsetWidth + "px";
}
</script>

<template>
  <div class="header">
    <div class="tab-header">
      <input type="radio" name="nav" id="home" @change="onChangeRadio('home', $event)" checked>
      <label for="home">首頁</label>

      <input type="radio" name="nav" id="auth" @change="onChangeRadio('auth', $event)">
      <label for="auth">授權</label>

      <input type="radio" name="nav" id="server" @change="onChangeRadio('server', $event)">
      <label for="server">服務器</label>

      <input type="radio" name="nav" id="record" @change="onChangeRadio('record', $event)">
      <label for="record">戰績</label>

      <input type="radio" name="nav" id="admin" @change="onChangeRadio('admin', $event)">
      <label for="admin">管理員</label>

      <input type="radio" name="nav" id="music" @change="onChangeRadio('music', $event)">
      <label for="music">音樂</label>

      <input type="radio" name="nav" id="about" @change="onChangeRadio('about', $event)">
      <label for="about">關於</label>

      <div class="line"></div>
    </div>
    <div class="logo">
      <div class="rank">
        <img class="rank-logo" src="@/assets/images/rank/rank-150.png">
      </div>
      <img class="logo-premium" src="@/assets/images/logo/logo-premium-pc.png">
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--bf1-view-padding);

  .tab-header {
    flex: 1;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--bf1-line-color);
    position: relative;

    input {
      display: none;
    }

    input:checked + label {
      color: #FFFFFF;
    }

    label {
      color: #EDEDED;
      padding: 10px 0px;
      margin-right: 26px;
      font-size: 18px;
    }

    label:hover {
      text-shadow: 0 0 15px white;
    }

    .line {
      position: absolute;
      background-color: white;
      width: v-bind(line_width);
      height: 1px;
      left: v-bind(line_left);
      top: 45px;
      transition: all 0.3s;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 20px;

    .rank {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #FF9800;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      .rank-logo {
        width: 100%;
        height: 100%;
        padding: 10px;
      }

      &:after {
        position: absolute;
        top: 65px;
        border: 1px solid gray;
        padding: 0 3px;
        transform: scale(0.5);
        content: "150";
      }
    }

    .logo-premium {
      margin: 20px 0px 20px 20px;
      height: 50px;
    }
  }
}

</style>