import {defineStore} from 'pinia'
import {ref} from "vue";

export const useConfigStore = defineStore("storeId", () => {
    const sessionId = ref("");

    return {sessionId};
}, {
    persist: true
});