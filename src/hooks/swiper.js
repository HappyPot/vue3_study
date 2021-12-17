import {
    reactive,
} from "vue";

// 轮播图组件
function rotationChart(params) {
    // 获取dom
    let state = reactive({
        imgArr: [
            "/src/assets/首页/3-轮播/swiper1.png",
            "/src/assets/首页/3-轮播/swiper2.jpg",
            "/src/assets/首页/3-轮播/swiper3.jpg",
        ],
        nowIndex: 0,
        refs: "",
    });
    const setRef = (el) => {
        state.refs = el;
    };

    function changeSwiper(index) {
        state.refs.style = `left:-${
        (state.nowIndex + 1) * 3.45
      }rem;transition: 0.5s all ease-in-out`;
        if (index == 0) {
            let node = state.refs.childNodes[1].cloneNode(true); //赋值dom节点
            state.refs.appendChild(node);
            state.refs.style.left = -state.imgArr.length * 3.45 + "rem";
            state.nowIndex = index;
            setTimeout(() => {
                state.refs.style = "left:0px;transition:none";
                state.refs.removeChild(node);
            }, 500);
        } else {
            state.nowIndex = index;
        }
    }
    // 模拟手动
    let conut = 0;
    // setInterval(() => {
    //     conut += 1;
    //     if (conut == 3) {
    //         conut = 0;
    //     }
    //     changeSwiper(conut);
    // }, 2000);
    return {
        state,
        changeSwiper,
        setRef
    };
}
export default rotationChart