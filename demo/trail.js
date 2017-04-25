//===============================================
//			痕迹(纯函数)
//===============================================
function trail() {
	
	/**半径*/
	var radius = 2;
	/**半径乘2*/
	var base = radius * 2;
	/**高度*/
	var height = base * 40;
	/**细节*/
	var detail = 6;
	/**头部*/
	var head = {x: radius, y: radius};
	/**角度1*/
	var angle1 = Math.PI/2;
	/**角度2*/
	var angle2 = Math.PI*3/2;
	/**点集合*/
	var points = [];
	
	for (var i = 0; i <= detail; ++i) {
		var a = angle1+(angle2-angle1) * (i/detail);
		var x = head.x + radius * Math.cos(a),
		y = head.y + radius * Math.sin(a);
		points.push([x-radius, y-radius]);
	}
	points.push([height, base/2], points[0]);
	return {
		points: points,
		base: base,
		height: radius + height,
		radius: radius,
		center: {x: height/2, y: base/2}
	};
};

