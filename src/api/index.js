// LOT不良率查询接口
import requestGet from "../untils/index";

// 首页音乐列表
export function getMusicList() {
    return requestGet({
        url: "/app/homePage/musiclist"
    })
}

// 添加设备页
export function getDeviceList() {
    return requestGet({
        url: "/app/AddDevice/deviceList"
    })
}

// 获取设备列表
export function getHasDeviceList() {
    return requestGet({
        url: "/app/AddDevice/HasDeviceList"
    })
}
// 机器人对话接口
export function robotChat(query) {
    return requestGet({
        url: "http://api.tianapi.com/txapi/robot/index",
        params: query
    })
}