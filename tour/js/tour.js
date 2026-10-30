   var myChart = echarts.init(document.getElementById('chinaMap'));
   var oBack = document.getElementById("goBack");

   var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu',
    'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi',
    'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang',
    'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'
   ];
   var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北',
    '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'
   ];

   // 省级数据：1=去过，0=未去过
   var seriesData = [{
    name: '北京',
    value: 1
   }, {
    name: '天津',
    value: 1
   }, {
    name: '上海',
    value: 1
   }, {
    name: '重庆',
    value: 0
   }, {
    name: '河北',
    value: 1
   }, {
    name: '河南',
    value: 1
   }, {
    name: '云南',
    value: 0
   }, {
    name: '辽宁',
    value: 1
   }, {
    name: '黑龙江',
    value: 1
   }, {
    name: '湖南',
    value: 0
   }, {
    name: '安徽',
    value: 1
   }, {
    name: '山东',
    value: 1
   }, {
    name: '新疆',
    value: 0
   }, {
    name: '江苏',
    value: 1
   }, {
    name: '浙江',
    value: 1
   }, {
    name: '江西',
    value: 0
   }, {
    name: '湖北',
    value: 1
   }, {
    name: '广西',
    value: 0
   }, {
    name: '甘肃',
    value: 1
   }, {
    name: '山西',
    value: 1
   }, {
    name: '内蒙古',
    value: 1
   }, {
    name: '陕西',
    value: 1
   }, {
    name: '吉林',
    value: 1
   }, {
    name: '福建',
    value: 0
   }, {
    name: '贵州',
    value: 0
   }, {
    name: '广东',
    value: 1
   }, {
    name: '青海',
    value: 1
   }, {
    name: '西藏',
    value: 0
   }, {
    name: '四川',
    value: 1
   }, {
    name: '宁夏',
    value: 0
   }, {
    name: '海南',
    value: 0
   }, {
    name: '台湾',
    value: 0
   }, {
    name: '香港',
    value: 0
   }, {
    name: '澳门',
    value: 0
   }];

   // 市级数据配置：按省份名称配置每个市的 value/link，未配置的城市默认 value=0
   // 示例：
   var cityDataByProvince = {
     '黑龙江': {
      '哈尔滨市': { value: 1, link: './cities/哈尔滨.html' },
     },
     '吉林':{
     '长春市': {value:1,link: './cities/长春.html' },
     '吉林市':{value:1,link: './cities/吉林.html' },
     '通化市':{value:1,link: './cities/通化.html' },
    },
     '辽宁':{
     '沈阳市': {value:1,link: './cities/沈阳.html' },
     '大连市':{value:1,link: './cities/大连.html' },
     '丹东市':{value:1,link: './cities/丹东.html' },
    },
     '北京':{
     '海淀区': {value:1,link: './cities/海淀区.html' },
     '石景山区':{value:1,link: './cities/石景山区.html' },
     '丰台区':{value:1,link: './cities/丰台区.html' },
     '东城区':{value:1,link: './cities/东城区.html' },
     '西城区':{value:1,link: './cities/西城区.html' },
     '朝阳区':{value:1,link: './cities/朝阳区.html' },
    },
   '天津':{
     '河西区': {value:1,link: './cities/河西区.html' },
     '河东区':{value:1,link: './cities/河东区.html' },
     '和平区':{value:1,link: './cities/和平区.html' },
     '滨海新区':{value:1,link: './cities/滨海新区.html' },
    },
    '河北':{
     '石家庄市': {value:1,link: './city/石家庄.html' },
     '衡水市':{value:1,link: './city/衡水.html' },
    },
    '山西':{
     '晋城市': {value:1,link: './cities/晋城.html' },
    },
    '内蒙古':{
     '赤峰市': {value:1,link: './cities/赤峰.html' },
     '包头市': {value:1,link: './cities/包头.html' },
     '鄂尔多斯市': {value:1,link: './cities/鄂尔多斯.html' },
    },
    '山东':{
     '济南市': {value:1,link: './cities/济南.html' },
     '青岛市': {value:1,link: './cities/青岛.html' },
     '烟台市': {value:1,link: './cities/烟台.html' },
     '枣庄市': {value:1,link: './cities/枣庄.html' },
    },
    '陕西':{
     '西安市': {value:1,link: './cities/西安.html' },
     '渭南市':{value:1,link: './cities/渭南.html' },
    },
   '河南':{
     '郑州市': {value:1,link: './cities/郑州.html' },
     '洛阳市':{value:1,link: './cities/洛阳.html' },
     '开封市':{value:1,link: './cities/开封.html' },
     '焦作市':{value:1,link: './cities/焦作.html' },
     '平顶山市':{value:1,link: './cities/平顶山.html' },
     '三门峡市':{value:1,link: './cities/三门峡.html' },
     '新乡市':{value:1,link: './cities/新乡.html' },
     '许昌市':{value:1,link: './cities/许昌.html' },
     '济源市':{value:1,link: './cities/济源.html' },
     '南阳市':{value:1,link: './cities/南阳.html' },
     '安阳市':{value:1,link: './cities/安阳.html' },
    },
    '甘肃':{
     '兰州市': {value:1,link: './cities/兰州.html' },
     '嘉峪关市':{value:1,link: './cities/嘉峪关.html' },
     '酒泉市':{value:1,link: './cities/酒泉.html' },
    },
    '四川':{
     '成都市': {value:1,link: './cities/四川.html' },
    },
    '安徽':{
     '芜湖市': {value:1,link: './cities/芜湖.html' },
    },
    '江苏':{
     '南京市': {value:1,link: './cities/南京.html' },
     '苏州市':{value:1,link: './cities/苏州.html' },
    },
    '上海':{
     '徐汇区': {value:1,link: './cities/徐汇.html' },
     '静安区': {value:1,link: './cities/静安.html' },
     '浦东新区': {value:1,link: './cities/浦东' },
    },
    '浙江':{
     '杭州市': {value:1,link: './cities/杭州.html' },
     '绍兴市':{value:1,link: './cities/绍兴.html' },
    },
    '湖北':{
     '襄阳市': {value:1,link: './cities/襄阳.html' },
     '武汉市': {value:1,link: './cities/武汉.html' },
    },
    '广东':{
     '广州市': {value:1,link: './cities/广州.html' },
     '深圳市': {value:1,link: './cities/深圳.html' },
     '惠州市': {value:1,link: './cities/惠州.html' },
    },
    '青海':{
     '海西蒙古族藏族自治州': {value:1,link: './cities/海西蒙古族藏族自治州.html' },
     '西宁市': {value:1,link: './cities/西宁.html' },
    },
    };

   function buildSeriesData(pName) {
    if (pName === "china") {
     return seriesData;
    }
    var map = echarts.getMap(pName);
    if (!map || !map.geoJson || !map.geoJson.features) {
     return [];
    }
    var cityMeta = cityDataByProvince[pName] || {};
    return map.geoJson.features.map(function(feature) {
     var name = (feature.properties && feature.properties.name) || feature.name;
     var meta = cityMeta[name];
     return {
      name: name,
      value: meta ? meta.value : 0
     };
    });
   }

   //  更新统计面板
   function updateStats(pName, Chinese_) {
    var visited, unvisited, total;
    if (pName === "china") {
     // 全国：统计省级（排除无数据的台湾等按 seriesData 计）
     total = seriesData.length;
     visited = seriesData.filter(function(d) { return d.value === 1; }).length;
     unvisited = total - visited;
    } else {
     // 省级：统计该省下所有市/区
     var map = echarts.getMap(pName);
     if (!map || !map.geoJson || !map.geoJson.features) {
      total = 0; visited = 0; unvisited = 0;
     } else {
      var cityMeta = cityDataByProvince[Chinese_] || cityDataByProvince[pName] || {};
      total = map.geoJson.features.length;
      visited = 0;
      map.geoJson.features.forEach(function(feature) {
       var name = (feature.properties && feature.properties.name) || feature.name;
       var meta = cityMeta[name];
       if (meta && meta.value === 1) visited++;
      });
      unvisited = total - visited;
     }
    }
    var unit = pName === "china" ? "省" : "市/区";
    var scopeText = pName === "china" ? "全国省级" : (Chinese_ || pName) + " 市/区";
    document.getElementById('statsPanel').innerHTML =
     '<div class="stat-title">' + scopeText + ' 统计</div>' +
     '去过：<span class="stat-visited">' + visited + '</span> 个' + unit + '<br/>' +
     '未去过：<span class="stat-unvisited">' + unvisited + '</span> 个' + unit + '<br/>' +
     '总共：' + total + ' 个' + unit;
   }

   oBack.onclick = function() {
    initEcharts("china", "中国");
   };
   initEcharts("china", "中国");
   // 初始化echarts
   function initEcharts(pName, Chinese_) {
    var tmpSeriesData = buildSeriesData(pName);
    var currentCityMeta = pName === "china" ? null : (cityDataByProvince[pName] || {});

    var option = {
     title: {
      text: Chinese_ || pName,
      left: 'center',
      textStyle: {
      		color: 'white'  // 设置字体颜色，支持十六进制、RGB、颜色名称等
    	}
     },
     tooltip: {
      trigger: 'item',
      formatter: function(params) {
       if (params.value === undefined || params.value === null) {
        return params.name;
       }
       return params.name + '<br/>' + (params.value === 1 ? '去过' : '未去过');
      },
      extraCssText: 'box-shadow: 0 3px 6px rgba(109, 130, 188,0.6);',
     },
     visualMap: {
      min: 0,
      max: 1,
      show: false,
      inRange: {
       color: ['#6c7a89', '#26a69a']
      }
     },
     legend: { //闪点提示
      orient: 'vertical',
      x: 'left',
      y: 'bottom',
      textStyle: {
       color: 'yellow'
      }
     },
     geo: {
      itemStyle: {
       normal: {
        shadowColor: 'rgba(1, 39, 44, 1)',
        shadowOffsetX: 0,
        shadowOffsetY: 8
       }
      }
     },
     series: [{
      name: Chinese_ || pName,
      type: 'map',
      mapType: pName,
      roam: false, //是否开启鼠标缩放和平移漫游
      data: tmpSeriesData,
      top: "3%", //组件距离容器的距离
      selectedMode: 'single',
      label: {
       normal: {
        show: true, //显示省份标签
        textStyle: {
         color: "#fbfdfe" //省份标签字体颜色
        },
        position: 'top'
       },
       emphasis: { //对应的鼠标悬浮效果
        show: true,
        textStyle: {
         color: "#323232"
        }
       }
      },
      itemStyle: {
       normal: {
        borderWidth: 0.5,
        borderColor: '#51d2ea',
        shadowBlur: 100, // 阴影大小
        shadowColor: 'rgba(255, 255, 255, 0.3)', // 阴影颜色
        shadowOffsetX: 0,
        shadowOffsetY: 8
       },
       emphasis: {
        areaColor: '#fff',
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowBlur: 5,
        borderWidth: 2,
        shadowColor: "#1abfdd",
        borderColor: 'rgba(0, 0, 0, 0.1)',
       }
      },
     }]
    };
    myChart.setOption(option);

    updateStats(pName, Chinese_);

    myChart.off("click");
    // 全国时，添加click 进入省级
    if (pName === "china") {
     myChart.on('click', function(param) {
      // 遍历取到provincesText 中的下标  去拿到对应的省js
      for (var i = 0; i < provincesText.length; i++) {
       if (param.name === provincesText[i]) {
        //显示对应省份的方法
        showProvince(provinces[i], provincesText[i]);
        break;
       }
      }
      if (param.componentType === 'series') {
       var provinceName = param.name;
       $('#box').css('display', 'block');
       $("#box-title").html(provinceName);
      }
     });
    } else {
     // 省份，点击市高亮并跳转链接（若配置）
     myChart.on("click", function(param) {
      if (param.componentType !== 'series') {
       return;
      }
      var meta = currentCityMeta[param.name];
      if (meta && meta.link) {
       window.open(meta.link, '_blank');
      }
     });
     // 省份，添加双击 回退到全国
     myChart.on("dblclick", function() {
      initEcharts("china", "中国");
     });
    }
   }
   // 展示对应的省
   function showProvince(pName, Chinese_) {
    //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
    loadBdScript('$' + pName + 'JS', './js/map/province/' + pName + '.js', function() {
     initEcharts(Chinese_);
    });
   }

   // 加载对应的JS
   function loadBdScript(scriptId, url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
     script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
       script.onreadystatechange = null;
       callback();
      }
     };
    } else {
     script.onload = function() {
      callback();
     };
    }
    script.src = url;
    script.id = scriptId;
    document.getElementsByTagName("head")[0].appendChild(script);
   };
