var x = document.getElementById('site');

getLocation :function(){
	if (navigator.geolocation){/*若該物件可用，即可進行地理位置定位服務。因此可先測試地理位置定位是否存在：*/
		
			navigator.geolocation.getCurrentPosition(showPosition);
		/*緯度:position.coords.latitude 經度：position.coords.longitude*/
		}
		
		

}
cal : function(){
	var here  = new GeoPoint({lat: position.coords.latitude, lng: position.coords.longitude});
	var there = new GeoPoint({lat:there.position.coords.latitude , lng: there.position.coords.latitude});
	var distBew   = new GeoPoint.distanceBetween(here, there, {type: 'miles'})
	return (
		distBew
	);

}


refresh :function(){
	window.location.reload();


}
setTimeout('refresh()',600000); 
