import {v4 as uuidv4} from "uuid";

import instance from "@/api/index";

import {useConfigStore} from "@/store";
import {getFilterString} from "@/utils/server";

const store = useConfigStore();

function bf1_setLocale() {
    return instance({
        method: "post",
        url: "/gateway/jsonrpc/pc/api",
        headers: {
            "X-GatewaySession": store.sessionId
        },
        data: {
            "jsonrpc": "2.0",
            "method": "CompanionSettings.setLocale",
            "params": {
                "locale": "zh_TW"
            },
            "id": uuidv4()
        }
    });
}

function bf1_welcomeMessage() {
    return instance({
        method: "post",
        url: "/gateway/jsonrpc/pc/api",
        headers: {
            "X-GatewaySession": store.sessionId
        },
        data: {
            "jsonrpc": "2.0",
            "method": "Onboarding.welcomeMessage",
            "params": {
                "game": "tunguska",
                "minutesToUTC": "-480"
            },
            "id": uuidv4()
        }
    });
}

function bf1_searchServers(region) {
    return instance({
        method: "post",
        url: "/gateway/jsonrpc/pc/api",
        headers: {
            "X-GatewaySession": store.sessionId
        },
        data: {
            "jsonrpc": "2.0",
            "method": "GameServer.searchServers",
            "params": {
                "game": "tunguska",
                "filterJson": getFilterString(region),
                "limit": 200
            },
            "id": uuidv4()
        }
    });
}

function bf1_getBlazePlayerList(gameId) {
    return instance({
        method: "post",
        url: '/blaze/GameManager.getFullGameData',
        data: {
            "GIDL List<Integer>": [
                parseInt(gameId)
            ]
        }
    });
}

function bf1_getBlazePlayerCore(pidArray) {
    return instance({
        method: "post",
        url: '/blaze/Stats.getStats',
        data: {
            "CAT String": "player_core",
            "EID List<Integer>": pidArray
        }
    });
}

function bf1_getBlazePlayerStatCategory(pidArray) {
    return instance({
        method: "post",
        url: '/blaze/Stats.getStats',
        data: {
            "CAT String": "player_statcategory",
            "EID List<Integer>": pidArray
        }
    });
}

export {
    bf1_setLocale,
    bf1_welcomeMessage,
    bf1_searchServers,
    bf1_getBlazePlayerList,
    bf1_getBlazePlayerCore,
    bf1_getBlazePlayerStatCategory
}