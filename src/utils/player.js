import {differenceInMinutes} from "date-fns";

function isNotEmptyStr(str) {
    if (typeof str == 'string' && str.length > 0) {
        return true
    }
    return false
}

function getPlayerRank(rank) {
    let result = parseInt(rank);
    return isNaN(result) ? 0 : result;
}

function getPlayerTime(time) {
    if (time <= 0)
        return 0;

    return differenceInMinutes(Date.now(), time / 1000)
}

export {
    isNotEmptyStr,
    getPlayerRank,
    getPlayerTime
}