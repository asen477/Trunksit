
/**
* ʵ��
*/
function Entity(){
	/**���������ڵ�λ��*/
	var x,y;
	
	;(function(){
		
	})();
	
	return {
		x:x,
		y:y,
	}
}




function Bullet(){
	
	/**��������λ��*/
	var x,y;
	
	/**�����ͼԪ*/
	var $el;
	
	
	/**����ʵ��*/
	var srcEntity;
	/**Ŀ��ʵ��*/
	var targetEntity;
	
	;(function(){
		
	})();
	
	function move(){
		
	}
	
	/**
	* �������б任
	*/
	
	
	return {};
}


/**
lat ��lng 

�Ǿ�γ�ȵ���д





*/



/**
����lx �� ly ��ʲô����
*/

/**
  /**����Ŀ�ĵصĹؼ�*/
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
��װ�˾�γ������

����

������ǹؼ�

*/



function start(){
	
	//����Ŀ�ĵ�
	var dest = this.destination,
	
	//���Ǿ���
	var distance = this.distance;
	
	//�ۼ���
	var height = trail.height,
	
	//����Ŀ��֮�������Ĺ���
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
  
  
  /**����ʱ��*/
  var growthTime = ~~(time * pos);
  
  
  this.cliprect
    .attr('width', 0)
  .transition().duration(growthTime)
    .ease('linear')
    .attr('width', size);
	
	  /**���û��Ļ� ����� �ڵ����еĹ켣 */
  
  
  
  
	this.obj
		.transition()
		.duration(growthTime)
		.ease('linear')
		.attr('transform', 'translate(' + vec + ') rotate(' + this.svgRotation() + ')')
		//���ɽ���֮��
		.each('end',end);
		
	function end(){
		/**�ٴι���*/
		that.obj
			.transition()
			.duration(time)
			.ease('linear')
			.attr('transform', target)
			//���ɽ���֮��
			.each('end',callback);
			
		function callback(){
			//�Բ��н��й���
			that.cliprect
				.transition()
				.duration(growthTime)
				.ease('linear')
				//�ò��еĿ�ȱ�Ϊ0 ��ͬ��Ч������ �ۼ���ʧ
				.attr('width', 0)
				
				.each('end', function () {
					//Ȼ���Ի�
					/**
					����������Ѿ�û��������
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
����֤��

���õ�Ч����

��ü���ת



*/


