const state = {
    deviceList: []
}
const actions = {
    set_device({
        commit
    }, device) {
        commit("SET_DEVICE", device)
    },
    set_deviceList({
        commit
    }, deviceList) {
        commit("SET_DEVICELIST", deviceList)
    }
}
const mutations = {
    SET_DEVICE: (state, device) => {
        state.deviceList.push(device)
    },
    SET_DEVICELIST: (state, deviceList) => {
        state.deviceList = deviceList
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}