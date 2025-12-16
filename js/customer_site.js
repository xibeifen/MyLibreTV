const CUSTOMER_SITES = {
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8/at/josn',
        name: '茅台'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod/from/jsm3u8/at/json',
        name: '极速'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
