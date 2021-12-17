import "mockjs"
import {
    musicListData,
    deviceListData,
    hasDeviceListData
} from "../data/index"
Mock.setup({
    timeout: "200 - 400",
});

// 首页数据
Mock.mock("/app/homePage/musiclist", "get", musicListData);
Mock.mock("/app/AddDevice/deviceList", "get", deviceListData);
Mock.mock("/app/AddDevice/HasDeviceList", "get", hasDeviceListData);

export default Mock