<script setup>
import {ref} from "vue";
import {useConfigStore} from "@/store";
import {bf1_welcomeMessage} from "@/api/bf1"
import {isNotEmptyStr} from "@/utils/player";

const store = useConfigStore();

const welcomeMsg = ref("CrazyZhang666，快樂星期五。")

async function checkSessionId() {
  if (!isNotEmptyStr(store.sessionId)) {
    welcomeMsg.value = "SessionId 為空或不正確";
    return;
  }

  welcomeMsg.value = "正在驗證中，請稍後...";

  bf1_welcomeMessage().then((res) => {
    welcomeMsg.value = res.data.result.firstMessage;
  }).catch((err) => {
    welcomeMsg.value = `${err.response.status}  ${err.response.data.error.message}`;
  });

}
</script>

<template>
  <div class="content">
    <div class="title">玩家 SessionId</div>
    <input type="text" placeholder="显示获取到的玩家 sessionId" v-model="store.sessionId"/>
    <div class="welcome-msg">{{ welcomeMsg }}</div>
    <div class="make">
      <button @click="checkSessionId">验证</button>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/assets/css/bf1.less";

.content {
  .bf1-view();
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  input[type="text"] {
    width: 400px;
  }

  .welcome-msg {
    color: white;
    font-size: 20px;
    margin: 10px 0;
  }

  .make {
    width: 400px;
    display: flex;
    flex-direction: row-reverse;

    button {
      width: 196px;
    }
  }
}
</style>