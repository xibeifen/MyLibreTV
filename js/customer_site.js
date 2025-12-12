const CUSTOMER_SITES = {
    maotai: {
        api: 'https://mtzy.me/api.php/provide/vod',
        name: '茅台',
    },
    jisu: {
        api: 'https://jszy333.com/api.php/provide/vod',
        name: '极速',
    },
    jinyin: {
        api: 'http://jinyingzy.com/api.php/provide/vod',
        name: '金鹰',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
