/*
 * @Author: your name
 * @Date: 2020-08-04 17:25:52
 * @LastEditTime: 2020-08-06 13:48:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mos-management-front\src\store\getters.js
 */
const getters = {
    deviceList: state => state.device.deviceList,
    msgList: state => state.robot.msgList,
}
export default getters