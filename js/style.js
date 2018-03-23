$('.carousel').carousel({  
    interval: 2000  
});  



var map = new BMap.Map("allmap"); // 创建Map实例
map.centerAndZoom(new BMap.Point(120.698506, 27.994322), 15); // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.setCurrentCity("温州"); // 设置地图显示的城市 此项是必须设置的 
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
var sContent = "地址：温州市 高教园区 温州商学院 2-719";
//	var map = new BMap.Map("l-map");
var point = new BMap.Point(120.698506, 27.924322);
//	map.centerAndZoom(point, 15);
var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
map.openInfoWindow(infoWindow, point); //开启信息窗口