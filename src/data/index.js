import "mockjs"

// 首页数据
export const musicListData = Mock.mock({
    "code": 200,
    "msg": "success",
    "data": [{
            "name": "春日暖心歌单",
            "tip": "精灵为你用心推荐",
            "hot": "@integer(100,5000)"
        },
        {
            "name": "夏日暖心歌单",
            "tip": "精灵为你用心推荐",
            "hot": "@integer(100,5000)"
        },
        {
            "name": "秋日暖心歌单",
            "tip": "精灵为你用心推荐",
            "hot": "@integer(100,5000)"
        },
        {
            "name": "冬日暖心歌单",
            "tip": "精灵为你用心推荐",
            "hot": "@integer(100,5000)"
        }
    ]
})

// 添加设备列表
export const deviceListData = Mock.mock({
    "code": 200,
    "msg": "success",
    "data": [{
        "name": "热门推荐",
        "device|10": [{
            "name|1": ["智能音箱", "家居照明", "家居安防", "生活电器", "娱乐影音"],
            "img": "/src/assets/我家/图片 3 (@integer(3,7)).png",
        }]
    }, {
        name: "家居照明",
        "device|20": [{
            "name": "家居照明",
            "img": "/src/assets/我家/图片 3 (4).png",
        }]
    }, {
        name: "家居安防",
        "device|15": [{
            "name": "家居安防",
            "img": "/src/assets/我家/图片 3 (5).png",
        }]
    }, {
        name: "生活电器",
        "device|18": [{
            "name": "生活电器",
            "img": "/src/assets/我家/图片 3 (6).png",
        }]
    }, {
        name: "娱乐影音",
        "device|10": [{
            "name": "娱乐影音",
            "img": "/src/assets/我家/图片 3 (7).png",
        }]
    }]
})

// 获取已添加的设备页列表
export const hasDeviceListData = Mock.mock({
    "code": 200,
    "msg": "success",
    "data|5": [{
        "name|1": ["智能音箱", "家居照明", "家居安防", "生活电器", "娱乐影音"],
        "img": "/src/assets/我家/图片 3 (@integer(3,7)).png",
    }]
})