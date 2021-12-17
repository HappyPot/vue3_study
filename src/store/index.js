import {
    createStore
} from "vuex";
import device from "./modules/device"
import robot from "./modules/robot"
import getters from "./getters"
//顺序actions=>mutations
export default createStore({
    modules: {
        device,
        robot
    },
    getters
});