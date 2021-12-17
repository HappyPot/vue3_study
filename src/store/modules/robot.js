const state = {
    msgList: []
}
const actions = {
    set_msgList({
        commit
    }, msgList) {
        commit("SET_MSGLIST", msgList)
    }
}
const mutations = {
    SET_MSGLIST: (state, msgList) => {
        state.msgList = msgList
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}