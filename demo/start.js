
/**
* 实体
*/
function Entity(){
	/**自身所处于的位置*/
	var x,y;
	
	;(function(){
		
	})();
	
	return {
		x:x,
		y:y,
	}
}




function Bullet(){
	
	/**自身所处位置*/
	var x,y;
	
	/**自身的图元*/
	var $el;
	
	
	/**来自实体*/
	var srcEntity;
	/**目标实体*/
	var targetEntity;
	
	;(function(){
		
	})();
	
	function move(){
		
	}
	
	/**
	* 自身会进行变换
	*/
	
	
	return {};
}


/**
lat 与lng 

是经纬度的缩写





*/



/**
问题lx 与 ly 是什么东西
*/

/**
  /**这是目的地的关键*/
          locs = {
            source: {
              key: (lat = d.latitude) + '_' + (lng = d.longitude), 
              latLng: [+lat, +lng], 
              country: d.country, 
              locString: (d.city&&d.city+', '||'')+d.country
            },
            target: {
              key: (lat = d.latitude2) + '_' + (lng = d.longitude2), 
              latLng: [+lat, +lng], 
              country: d.country2, 
              locString: (d.city2&&d.city2+', '||'')+d.country2
            }
          };


*/


/**
封装了经纬度数据

但是

这个不是关键

*/



function start(){
	
	//这是目的地
	var dest = this.destination,
	
	//这是距离
	var distance = this.distance;
	
	//痕迹高
	var height = trail.height,
	
	//到达目标之后所做的过渡
	target = 'translate(' + [dest.lx+this.offset.x, dest.ly+this.offset.y] + ') rotate(' + this.svgRotation() + ')';
	
	
	
	if (distance < height*1.2) {
		var pos = 1,
		size = distance;
	} else {
		var pos = height / distance;
        var size = height;
	}
	
	
  var time = this.time;

  var vec = [
        this.dx * pos + this.x, 
        this.dy * pos + this.y
      ];
	  
  var that = this;
  
  
  /**增长时间*/
  var growthTime = ~~(time * pos);
  
  
  this.cliprect
    .attr('width', 0)
  .transition().duration(growthTime)
    .ease('linear')
    .attr('width', size);
	
	  /**如果没错的话 这就是 炮弹飞行的轨迹 */
  
  
  
  
	this.obj
		.transition()
		.duration(growthTime)
		.ease('linear')
		.attr('transform', 'translate(' + vec + ') rotate(' + this.svgRotation() + ')')
		//过渡结束之后
		.each('end',end);
		
	function end(){
		/**再次过渡*/
		that.obj
			.transition()
			.duration(time)
			.ease('linear')
			.attr('transform', target)
			//过渡结束之后
			.each('end',callback);
			
		function callback(){
			//对裁切进行过渡
			that.cliprect
				.transition()
				.duration(growthTime)
				.ease('linear')
				//让裁切的宽度变为0 等同的效果就是 痕迹消失
				.attr('width', 0)
				
				.each('end', function () {
					//然后自毁
					/**
					现在你对我已经没有秘密了
					*/
			  that.animating = false;
              that.x = dest.lx;
              that.y = dest.ly;
              that.die();
            });
			
		}
		
	}
	
	
}



/**
可以证明

良好的效果是

变幻加旋转



*/


