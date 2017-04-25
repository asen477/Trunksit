/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var d3=__webpack_require__(1);
	var Turret=__webpack_require__(3);
	var Bullet=__webpack_require__(4);
	var ChinaMap=__webpack_require__(6);


	var svg=__webpack_require__(7);


	var cm=ChinaMap(svg);


	var json={
		'北京':[39.911013,116.413554],
		'上海':[31.236305,121.480237],
		'沈阳':[41.811339,123.438973],
		'深圳':[22.548515,114.066112],
		'重庆':[29.570997,106.557165]
	}

	for(var key in json ){
		cm.addTurret(key,json[key][0],json[key][1]);	
	}





	for(var i=1;i<=10;i++){
		func();
	}


	var res=['北京','上海','深圳','沈阳','重庆'];



	function func(){
		var delay=Math.floor(Math.random()*2000);;
		setTimeout(function(){
			var source=res[Math.floor(Math.random()*res.length)];
			var target=res[Math.floor(Math.random()*res.length)];
			Bullet(cm.getTurret(source),cm.getTurret(target)).send();


			func();
		},delay);
	}



	var ws=new WebSocket('ws://127.0.0.1:8084/hello');
	ws.onopen=function(){
		console.log("连接被建立");
	}

	ws.onmessage=function(d){
		console.log(d);
	}


	/**



	通信完成


	但是 不够

	上海 打北京


	任务基本完成与后端进行通信了






	接下来该真正的
	与后端进行通信了







	*/






















		
		








	//子弹1号
	/*var bullet1=Bullet(layer,turret1,turret3);
	bullet1.send();
	//子弹2号
	var bullet2=Bullet(layer,turret1,turret2);
	bullet2.send();
	*/


























	/**子弹 轨迹运动*/

	/*


	bullet
	.transition()
	.duration(time2)
	.ease('linear')
	.attr({
		transform:'translate(160,160) rotate('+rotate(50,50,160,160)+')'
	}).each('end',function(){
		
		
		
		bullet.transition().duration(time-time2)
		.ease('linear')
		.attr({
			transform:'translate(400,400) rotate('+rotate(50,50,400,400)+') '
		}).each('end',function(){
			//var time2=160/0.005;
			bullet
				.transition()
				.duration(time2)
				.ease('linear')
				.attr({
					transform:'translate('+[400+160-50,400+160-50]+') rotate('+rotate(50,50,400,400)+') '
				}).each('end',function(){
					canvas
						.append('circle')
						.attr({
							cx:400,
							cy:400,
							r:10,
							opacity:1,
							stroke:'red',
							'stroke-width':5,
							fill:'none'
						})
						.transition()
						.duration(2000)
						.ease('linear').attr({opacity:0,r:100});
					
					
				});
				
				
			cliprect
				.transition()
				.duration(time2)
				.ease('linear')
				.attr('x',160);
				
				
		});
		
		
		
		
		
		
	});



	bullet
	.transition()
	.duration(time2)
	.ease('linear')
	.attr({
		transform:'translate(160,160) rotate('+rotate(50,50,400,400)+')'
	});



	/*bullet
	.transition()
	.duration(time)
	.ease('linear')
	.attr({
		transform:'translate(400,400) rotate('+rotate(50,50,400,400)+')'
	}).each('end',function(){
		cliprect
		.attr({width:160})
		.transition().duration(500).attr('width',0);
		
		
		
		
	});*/


	/**子弹2 轨迹运动*/
	/*bullet2
	.transition()
	.duration(1000)
	.ease('linear')
	.attr({
		transform:'translate(400,200) rotate('+rotate(50,50,400,200)+')'
	});

	/**子弹3 轨迹运动*/
	/*bullet3
	.transition()
	.duration(1000)
	.ease('linear')
	.attr({
		transform:'translate(50,50) rotate('+rotate(400,200,50,50)+')'
	});
	*/
	/**子弹4 轨迹运动*/
	/*bullet4
	.transition()
	.duration(1000)
	.ease('linear')
	.attr({
		transform:'translate(50,50) rotate('+rotate(400,400,50,50)+')'
	});
	*/
	/**子弹5 轨迹运动*/
	/*bullet5
	.transition()
	.duration(1000)
	.ease('linear')
	.attr({
		transform:'translate(400,200) rotate('+rotate(400,400,400,200)+')'
	});
	*/




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.5.16"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
	      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }

	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;

	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;

	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;

	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();

	       case "c":
	        exponent = false;

	       case "d":
	        integer = true;
	        precision = 0;
	        break;

	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;

	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;

	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;

	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
	      0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
	      0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var svg=__webpack_require__(7);

	//=============================
	//	炮塔
	//=============================
	function Turret(options){
		var param={
			//坐标
			cx:0,cy:0,
			//半径
			r:10,
			//颜色
			fill:'red',
		};

		;(function(){
			param=_.extend(param,options);
			draw();
		})();


		function draw(){
			svg.animate.append('circle').attr(_.clone(param));	
		}

		//冲击波动画
		function waveAnimate(){
			var conf=_.extend(_.clone(param),{
				fill:'none',
				stroke:'red',
				'stroke-width':5,
				opacity:1,
			});
			svg.animate
				.append('circle')
				.attr(conf)
				.transition()
				.duration(2000)
				.ease('linear')
				.attr({r:100,opacity:0,}).remove();

		}

		//监听 被攻击
		function onHit(){
			waveAnimate();
		}

		//监听 发出攻击
		function onAtk(){
			waveAnimate();
		}

		return{
			cx:param.cx,
			cy:param.cy,
			onAtk:onAtk,
			onHit:onHit
		};
	}



	module.exports=Turret;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	 var svg=__webpack_require__(7);


	/**子弹*/
	function Bullet(source,target){

		//炮弹图形
		var polygon;
		//裁切路径
		var clippath;
		//裁切矩形
		var cliprect;
		//速度   px/ms
		var speed=0.5;
		//两点
		var x1,y1,x2,y2;
		//两点所形成三角形的三条边的长度
		var adjacent,opposite,hypotenuse;
		//图形旋转角度
		var angle;

		;(function(){

			source.onAtk();
			
			x1=source.cx;
			y1=source.cy;
			x2=target.cx;
			y2=target.cy;	

			angle=Math.atan2(y1-y2,x1-x2)*180/Math.PI;

			adjacent=y2-y1;
			opposite=x2-x1;
			hypotenuse=Math.sqrt(Math.pow(adjacent,2)+Math.pow(opposite,2));

			
			

			//初始化炮弹图形
			polygon=svg.animate.append('polygon')
				.attr({
					points:trail().points,
					fill:"#00f",
					'transform':'translate('+[x1,y1]+') rotate('+angle+')'
				});
			initMask();
		})();

		//初始化遮罩
		function initMask(){
			var id= Math.random();
			var clipId = 'clippath-'+id;
			clippath =svg.defs.append('clipPath').attr('id', clipId);
			//建立一个裁切矩形
			cliprect =clippath.append('rect')
				.attr({
					x: -trail().radius,
					y: -trail().radius, 
					width: trail().height, 
					height: trail().base,
				});
			//把裁切路径与炮弹图形关联
			polygon.attr('clip-path','url(#' + clipId + ')');
		}

		
		/**发射炮弹*/
		function send(){
			moveAnimate();
		}
		
		
		
		function moveAnimate(){
			var length=trail().height;

			//开始出现轨迹
			cliprect.attr({width:0})
				.transition()
				.duration(trail().height/speed)
				.ease('linear')
				.attr('width',trail().height);
			
			//炮弹正在飞行
			polygon.transition()
				.duration(trail().height/speed)
				.ease('linear')
				.attr({
					transform:'translate('+[x2,y2]+') rotate('+angle+')'
				}).each('end',function(){
					//轨迹开始消失
					cliprect.transition()
						.duration(trail().height/speed)
						.ease('linear')
						.attr('width',0).each('end',function(){
							target.onHit();
							polygon.remove();
							clippath.remove();
						});
				});
		}


		return {
			send:send
		};
	}


	module.exports=Bullet;





/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"properties": {
					"id": 1,
					"name": "甘肃"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								104.35851932200904,
								37.40123159456249
							],
							[
								104.46450768428224,
								37.440247301072134
							],
							[
								104.68950687084538,
								37.41192861571304
							],
							[
								104.76474775590418,
								37.25049144112714
							],
							[
								104.8553882179919,
								37.218193671200964
							],
							[
								104.92241255059872,
								37.096754055055584
							],
							[
								105.18017459508144,
								36.97213633912071
							],
							[
								105.32166466729058,
								36.78072683457572
							],
							[
								105.22048221188453,
								36.69295441301577
							],
							[
								105.26874799962047,
								36.550224107356684
							],
							[
								105.39277143815133,
								36.38439443615431
							],
							[
								105.44594648644119,
								36.254583237926056
							],
							[
								105.43741987472742,
								36.10668528929466
							],
							[
								105.35148196761867,
								36.0576443552028
							],
							[
								105.31809899297417,
								35.9332075064213
							],
							[
								105.43183881970583,
								35.756422430750604
							],
							[
								105.68696536675827,
								35.66045929605963
							],
							[
								105.8293856140549,
								35.49364777292638
							],
							[
								105.93614912268384,
								35.52480866129068
							],
							[
								106.06508182176867,
								35.48765330675465
							],
							[
								106.11241743441701,
								35.42465973645773
							],
							[
								106.21065433133236,
								35.39515249269334
							],
							[
								106.31338707855087,
								35.27360952376057
							],
							[
								106.37777591372742,
								35.2606645779079
							],
							[
								106.46485070239805,
								35.33236562797137
							],
							[
								106.49508141477554,
								35.5531273457504
							],
							[
								106.4292973174172,
								35.69944916414764
							],
							[
								106.46960493422034,
								35.72743195182309
							],
							[
								106.76710615382592,
								35.7065546743587
							],
							[
								106.91340213380147,
								35.788823554363546
							],
							[
								106.84322553892741,
								35.882202867568225
							],
							[
								106.91484907372575,
								35.907059231398364
							],
							[
								106.9447697286401,
								36.07694550243298
							],
							[
								106.81366662011845,
								36.21164012279348
							],
							[
								106.7449369651689,
								36.206575833507856
							],
							[
								106.6038603050091,
								36.27783763310026
							],
							[
								106.49658003064394,
								36.26835500697797
							],
							[
								106.495391473138,
								36.4367426621441
							],
							[
								106.43999433766857,
								36.51477407516347
							],
							[
								106.49399621005699,
								36.55981008626645
							],
							[
								106.50236779213986,
								36.70651947739199
							],
							[
								106.60215498266638,
								36.7258206237228
							],
							[
								106.64902550732126,
								36.8341861028064
							],
							[
								106.57481815013756,
								36.93133779590261
							],
							[
								106.63393598775559,
								36.997897040515966
							],
							[
								106.64406456902458,
								37.18165843428932
							],
							[
								106.7906706082619,
								37.18966828116629
							],
							[
								106.93293582592759,
								37.107192694687114
							],
							[
								107.18780398966243,
								37.11706289353771
							],
							[
								107.28547244669602,
								37.068461209017585
							],
							[
								107.29963178937561,
								36.90720490248421
							],
							[
								107.5009114927712,
								36.890771795781774
							],
							[
								107.54886722214462,
								36.8400255402465
							],
							[
								107.69547326138195,
								36.82509105121099
							],
							[
								107.88652103072098,
								36.75537954433051
							],
							[
								108.04170535671688,
								36.59774058715834
							],
							[
								108.35636315343675,
								36.54603831631525
							],
							[
								108.44126753087181,
								36.46128896671243
							],
							[
								108.60652876219262,
								36.43198843032184
							],
							[
								108.70368045528875,
								36.35896963154323
							],
							[
								108.64993696531866,
								36.22649709746304
							],
							[
								108.69975304576644,
								36.1255471869531
							],
							[
								108.67711876821659,
								36.00524445236957
							],
							[
								108.49309899292422,
								35.88119517721566
							],
							[
								108.50999718582142,
								35.700870266549515
							],
							[
								108.60373823423208,
								35.547856349990525
							],
							[
								108.6172257833432,
								35.39282705272626
							],
							[
								108.49263390493076,
								35.272498481519676
							],
							[
								108.2767814468063,
								35.26283498824415
							],
							[
								108.1549800963544,
								35.29055939440059
							],
							[
								107.97866010867705,
								35.22345754742793
							],
							[
								107.92284956295703,
								35.26689158807628
							],
							[
								107.74167199066977,
								35.318361314023434
							],
							[
								107.67046186702152,
								35.22797923435422
							],
							[
								107.83034874889563,
								34.976728420879965
							],
							[
								107.71004601431213,
								34.951406969056364
							],
							[
								107.5696411477208,
								34.96541128210495
							],
							[
								107.49688073136076,
								34.92577545797096
							],
							[
								107.32076745015769,
								34.94220856377419
							],
							[
								107.21085167836225,
								34.89177236570208
							],
							[
								107.05153323816836,
								35.038145860043386
							],
							[
								106.91484907372575,
								35.08904714610895
							],
							[
								106.56458621608095,
								35.07961619683002
							],
							[
								106.4912056820965,
								35.03011017474469
							],
							[
								106.549703403889,
								34.862575182098965
							],
							[
								106.4915157413584,
								34.740954697900946
							],
							[
								106.3177278992232,
								34.583341580049876
							],
							[
								106.36837080287029,
								34.52021881854367
							],
							[
								106.49833702983,
								34.52021881854367
							],
							[
								106.61409223816622,
								34.45872386321574
							],
							[
								106.67362348783365,
								34.384671536562195
							],
							[
								106.65600182542386,
								34.2542143822879
							],
							[
								106.55404422366195,
								34.28082774530418
							],
							[
								106.58742719920588,
								34.137451484498456
							],
							[
								106.51373660685891,
								34.10660065449662
							],
							[
								106.43022749160542,
								33.94211457043107
							],
							[
								106.47983686737751,
								33.86819143318809
							],
							[
								106.48174889529531,
								33.700888984539034
							],
							[
								106.55947024905277,
								33.59862132441461
							],
							[
								106.49554650276883,
								33.543585924151046
							],
							[
								106.39265872591949,
								33.61882680920988
							],
							[
								106.17060509604835,
								33.56224111623459
							],
							[
								106.07345340385154,
								33.61750906049474
							],
							[
								105.83243452443372,
								33.49754222269539
							],
							[
								105.74716840999412,
								33.29398875617616
							],
							[
								105.91273969877801,
								33.233682359253436
							],
							[
								105.9105692893412,
								33.031730862289436
							],
							[
								105.88648807186706,
								32.978013210741096
							],
							[
								105.6393196957473,
								32.88548655915733
							],
							[
								105.4985530948494,
								32.90739736629541
							],
							[
								105.43090864461823,
								32.911479804549344
							],
							[
								105.38636355993032,
								32.82337148710451
							],
							[
								105.43524946529055,
								32.77355540575738
							],
							[
								105.2699882339698,
								32.641702989301535
							],
							[
								105.14679162043694,
								32.60834585217927
							],
							[
								105.03181155755732,
								32.63867991824361
							],
							[
								104.89833133312447,
								32.611834011230656
							],
							[
								104.8409704937933,
								32.63981679890611
							],
							[
								104.64542687415093,
								32.657877712686286
							],
							[
								104.55840376232374,
								32.68834096906048
							],
							[
								104.40569990412729,
								32.809367174055836
							],
							[
								104.28885949107269,
								32.8478919541503
							],
							[
								104.32126061378625,
								32.9527175973393
							],
							[
								104.40585493375818,
								33.06327932428141
							],
							[
								104.32823693188885,
								33.14035472289217
							],
							[
								104.28059126177726,
								33.272052109717094
							],
							[
								104.2928902533825,
								33.363571071847446
							],
							[
								104.17465457634756,
								33.49015249344279
							],
							[
								104.15630944172733,
								33.62402029150326
							],
							[
								104.0930058130678,
								33.668539536870156
							],
							[
								103.74512007043484,
								33.67603261980952
							],
							[
								103.52275638220124,
								33.714118150332354
							],
							[
								103.55861982644387,
								33.80687734591277
							],
							[
								103.35067386330815,
								33.75569183990646
							],
							[
								103.18417239763806,
								33.822096055788364
							],
							[
								103.1421077816488,
								33.96154490797116
							],
							[
								103.15239139164942,
								34.108512682414386
							],
							[
								103.12009362172324,
								34.16861237196338
							],
							[
								103.00056603439498,
								34.21398427985062
							],
							[
								102.93059614509599,
								34.295581367186315
							],
							[
								102.78181969642179,
								34.27418732398584
							],
							[
								102.59779992112948,
								34.16546010969634
							],
							[
								102.61764367071879,
								34.08350128805395
							],
							[
								102.44060021442834,
								34.059730129841626
							],
							[
								102.31936730295871,
								33.98735728620983
							],
							[
								102.17121097190886,
								33.9417528352252
							],
							[
								102.34313846207033,
								33.72517690668886
							],
							[
								102.35600589355715,
								33.60939585993103
							],
							[
								102.4818380072183,
								33.540149441043894
							],
							[
								102.4818380072183,
								33.46503774719426
							],
							[
								102.27874962779305,
								33.37775625294876
							],
							[
								102.13095503104978,
								33.28466116058408
							],
							[
								102.09938073063614,
								33.2222360301686
							],
							[
								102.00424441914458,
								33.21879954706148
							],
							[
								101.86368452382175,
								33.12262970589623
							],
							[
								101.83216190025149,
								33.26920990671178
							],
							[
								101.9232157743885,
								33.40638499577091
							],
							[
								101.88399336140452,
								33.54632477526815
							],
							[
								101.77753991113792,
								33.53004669909589
							],
							[
								101.6133638863343,
								33.51185659410652
							],
							[
								101.57688032356805,
								33.63050568319076
							],
							[
								101.49559329639345,
								33.70463552510944
							],
							[
								101.39963016170259,
								33.64507843702029
							],
							[
								101.16026492688496,
								33.66414704025368
							],
							[
								101.12946577372645,
								33.85064728424476
							],
							[
								100.94797814307685,
								33.92976390198248
							],
							[
								100.79170861236253,
								34.15486644133318
							],
							[
								100.81547977057494,
								34.29459951435609
							],
							[
								100.93526574122092,
								34.38632518206148
							],
							[
								101.0358280781033,
								34.33893789346902
							],
							[
								101.25602135600082,
								34.30049062774032
							],
							[
								101.32366580623199,
								34.259511217368754
							],
							[
								101.6116585630923,
								34.19124665041258
							],
							[
								101.64716027212887,
								34.136004544574035
							],
							[
								101.78038211504253,
								34.06750743272184
							],
							[
								101.86254764225981,
								34.141378893121384
							],
							[
								102.01199588360316,
								34.17760407256986
							],
							[
								102.07653974841065,
								34.26697846098722
							],
							[
								102.2123454119112,
								34.351546943436716
							],
							[
								102.15028201670174,
								34.49507823297404
							],
							[
								101.93194909077789,
								34.59111888293009
							],
							[
								101.91391401631881,
								34.661398831490885
							],
							[
								101.7933528993168,
								34.631891587726585
							],
							[
								101.75506066321901,
								34.70367015215584
							],
							[
								101.9232157743885,
								34.78728262019672
							],
							[
								101.912828810701,
								34.844798489158904
							],
							[
								102.00936038617283,
								34.94213104940843
							],
							[
								102.26712242975628,
								35.0558708770393
							],
							[
								102.37559126162739,
								35.20369131130502
							],
							[
								102.31771365835863,
								35.27497895021838
							],
							[
								102.28929162021205,
								35.4069347194617
							],
							[
								102.42644087084955,
								35.43530508076486
							],
							[
								102.53496137866472,
								35.5356348745498
							],
							[
								102.70218631384728,
								35.52403351493476
							],
							[
								102.72130659392417,
								35.619066474538215
							],
							[
								102.67986209465988,
								35.756835841900624
							],
							[
								102.70032596187366,
								35.839466458010634
							],
							[
								102.83752689025374,
								35.860757148423716
							],
							[
								102.97601972892738,
								35.833291123786296
							],
							[
								102.99953250472129,
								35.990749212905826
							],
							[
								102.93328331936976,
								36.08606639334937
							],
							[
								103.0403568872606,
								36.2164977083026
							],
							[
								102.89447431843502,
								36.30941193351396
							],
							[
								102.81856163890848,
								36.32605174399279
							],
							[
								102.76972741129094,
								36.49756582300432
							],
							[
								102.69815555243673,
								36.60887685788063
							],
							[
								102.61082238224708,
								36.657194322460015
							],
							[
								102.67474612763164,
								36.80162995136112
							],
							[
								102.46013390475588,
								36.9556515573735
							],
							[
								102.49584232026689,
								37.08910594338457
							],
							[
								102.55061933811197,
								37.1638300645059
							],
							[
								102.42664757732382,
								37.27806081855195
							],
							[
								102.24552168188006,
								37.38087108013622
							],
							[
								102.14201378830563,
								37.406657619953165
							],
							[
								102.03266645729116,
								37.47890127237579
							],
							[
								102.06723799034091,
								37.548302720893844
							],
							[
								101.93706505690687,
								37.73069468820927
							],
							[
								101.76560265473876,
								37.524970812253144
							],
							[
								101.64654015540378,
								37.61186473197179
							],
							[
								101.29291832901771,
								37.79893341674372
							],
							[
								101.04978071520782,
								37.9637295600711
							],
							[
								100.63574913911145,
								38.10540049943347
							],
							[
								100.55430708230602,
								38.25208405213729
							],
							[
								100.35783328667685,
								38.30704193803501
							],
							[
								100.14079227104645,
								38.48584239441095
							],
							[
								100.08306969560994,
								38.39450429943386
							],
							[
								100.15552005360757,
								38.302778631728444
							],
							[
								100.07903893419939,
								38.27843903273518
							],
							[
								99.79988284741546,
								38.365720526980795
							],
							[
								99.55715864475559,
								38.515375474798304
							],
							[
								99.49633548389545,
								38.60110667633211
							],
							[
								99.0992537784391,
								38.889642035551475
							],
							[
								99.09475792813595,
								38.95777741129845
							],
							[
								98.96210452690241,
								38.98175527598519
							],
							[
								98.78190880744546,
								39.06769318309395
							],
							[
								98.60222985192615,
								38.9475971540854
							],
							[
								98.44456505723156,
								38.957312324204366
							],
							[
								98.32431399859217,
								39.023251451193545
							],
							[
								98.26256066264443,
								38.93168081311896
							],
							[
								98.06861901165803,
								38.80184377736839
							],
							[
								97.36256391819029,
								39.150427151092174
							],
							[
								97.13746137883953,
								39.20316294981029
							],
							[
								97.02646040232571,
								39.196212470129325
							],
							[
								96.96253665604178,
								39.10324656807467
							],
							[
								96.99111372291998,
								38.99679311780818
							],
							[
								96.98119184812532,
								38.74430206998457
							],
							[
								96.94238284719063,
								38.63911469248907
							],
							[
								96.97121829558796,
								38.567258612794774
							],
							[
								96.94548343261437,
								38.35822744404132
							],
							[
								96.84507612536294,
								38.35641876891103
							],
							[
								96.51036787257925,
								38.470106919698566
							],
							[
								96.50261640812067,
								38.54901683186122
							],
							[
								96.31549604740468,
								38.62694489209312
							],
							[
								96.05478844622985,
								38.67882803008956
							],
							[
								96.00760786321234,
								38.75169179923708
							],
							[
								95.89185265487612,
								38.783653673278366
							],
							[
								95.72163048705727,
								38.8747333849378
							],
							[
								95.5657743665937,
								39.01524160431657
							],
							[
								95.46092288588244,
								39.04660919915523
							],
							[
								95.3053251487367,
								39.182776597861675
							],
							[
								95.05717492068607,
								39.1474557559784
							],
							[
								94.72463707913784,
								39.23683014619428
							],
							[
								94.63105106035817,
								39.29537954393078
							],
							[
								94.47932905499187,
								39.31783295342805
							],
							[
								94.11697391221622,
								39.321941230103704
							],
							[
								93.90892459539378,
								39.28563853628947
							],
							[
								93.72206261619681,
								39.3067483595492
							],
							[
								93.50202436703091,
								39.27191844318162
							],
							[
								93.27562991738677,
								39.18871938718996
							],
							[
								93.14034101782369,
								39.19874461477218
							],
							[
								92.93596072810516,
								39.152855942947355
							],
							[
								92.94794966044856,
								39.45247589784444
							],
							[
								92.7724048200264,
								39.810541896791136
							],
							[
								92.77741743426725,
								39.905523180450416
							],
							[
								92.91952762230193,
								40.11806834577749
							],
							[
								92.9258838236795,
								40.42290762049029
							],
							[
								93.03683312424931,
								40.48985443783204
							],
							[
								93.28632693943672,
								40.46926138030838
							],
							[
								93.57747195766478,
								40.58796214533666
							],
							[
								93.75994144114458,
								40.82332245536699
							],
							[
								94.01103722498789,
								41.10402883576222
							],
							[
								94.58092492064856,
								41.58521393477531
							],
							[
								95.05826012630376,
								41.78856069571958
							],
							[
								95.49198042235855,
								41.856024277898115
							],
							[
								95.77191165639778,
								41.82972097414367
							],
							[
								95.86394738156645,
								41.85501658844473
							],
							[
								96.03582319488447,
								41.99529226292756
							],
							[
								96.01783979726889,
								42.138720201476076
							],
							[
								96.04378136581732,
								42.499886785846485
							],
							[
								96.09091027199156,
								42.58690989857294
							],
							[
								96.36633990098284,
								42.722922619141826
							],
							[
								97.19067973399132,
								42.78706149219707
							],
							[
								97.84687544104878,
								41.61926870388754
							],
							[
								97.6476111192577,
								41.45553192775628
							],
							[
								97.70848595606202,
								41.34941437427395
							],
							[
								97.95053836515336,
								41.11981598641867
							],
							[
								98.32653608577169,
								40.855671902136606
							],
							[
								98.23481041896565,
								40.541685898985065
							],
							[
								98.51520674009896,
								40.533546860898895
							],
							[
								98.64584476062714,
								40.56754995406706
							],
							[
								98.82567874577745,
								40.72655833589849
							],
							[
								99.1574414409697,
								40.83631907806301
							],
							[
								99.49602542463361,
								40.84288198501565
							],
							[
								99.66454227100894,
								40.901276354020496
							],
							[
								100.01118777929253,
								40.896289578201475
							],
							[
								100.17603559766468,
								40.735084946712874
							],
							[
								100.20378584224284,
								40.61695262336491
							],
							[
								100.14001712379127,
								40.518095607926
							],
							[
								100.01418501192876,
								40.40249542922069
							],
							[
								99.89935997868008,
								40.204781399242165
							],
							[
								99.62702518126707,
								40.06918244131654
							],
							[
								99.43086144400041,
								39.87880646374728
							],
							[
								99.68614301978448,
								39.876015936686144
							],
							[
								100.0434855492187,
								39.72765290006129
							],
							[
								100.18885135320733,
								39.694890042141765
							],
							[
								100.28662316302854,
								39.62734894469807
							],
							[
								100.3068286478238,
								39.54983429651557
							],
							[
								100.45498497887365,
								39.495574041708636
							],
							[
								100.54345503062518,
								39.408860989143335
							],
							[
								100.78953820202634,
								39.407879137212376
							],
							[
								100.83315311072744,
								39.380077215790806
							],
							[
								100.85196333244181,
								39.16748037451967
							],
							[
								100.88855024619687,
								39.105158595992435
							],
							[
								101.04854048085855,
								39.00082388011796
							],
							[
								101.17995364774265,
								39.02064179128564
							],
							[
								101.24780480264951,
								38.87003082905949
							],
							[
								101.41399620995713,
								38.749211331437834
							],
							[
								101.58018761636538,
								38.68823314094669
							],
							[
								101.83107669463374,
								38.689835110501946
							],
							[
								102.02036746568609,
								38.85693085447528
							],
							[
								102.022847935284,
								38.89271678345284
							],
							[
								101.82549563961209,
								39.06443756803935
							],
							[
								102.393109572149,
								39.23719188140018
							],
							[
								102.59345909955778,
								39.177919013251824
							],
							[
								102.96537438372081,
								39.11936961551535
							],
							[
								103.28395958906378,
								39.292976590497204
							],
							[
								103.46379357331472,
								39.35718455672196
							],
							[
								103.74925418463295,
								39.4248806828972
							],
							[
								104.02396609885636,
								39.44110708312536
							],
							[
								104.05998457183051,
								39.307833564267554
							],
							[
								104.22478071515786,
								39.090689194950386
							],
							[
								104.17155399002456,
								38.95950857206296
							],
							[
								104.04256961499567,
								38.8740615913693
							],
							[
								103.97952436695596,
								38.7589781757022
							],
							[
								103.79431603415765,
								38.59077138948797
							],
							[
								103.47123497941078,
								38.43589712185471
							],
							[
								103.52167117658354,
								38.13984284127409
							],
							[
								103.38808760026257,
								38.101989853848664
							],
							[
								103.38746748263816,
								37.99910207789861
							],
							[
								103.43816206312869,
								37.84239329671328
							],
							[
								103.67871585455305,
								37.7750330673222
							],
							[
								103.86366580583223,
								37.62643748580132
							],
							[
								104.10850874198485,
								37.4618480489483
							],
							[
								104.2624528336313,
								37.3903278669375
							],
							[
								104.35851932200904,
								37.40123159456249
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 2,
					"name": "青海"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								101.77753991113792,
								33.53004669909589
							],
							[
								101.69108524009175,
								33.42028595603202
							],
							[
								101.66514367064383,
								33.32039541271811
							],
							[
								101.72694868433427,
								33.26778880520919
							],
							[
								101.64364627465585,
								33.1277715113462
							],
							[
								101.44515709832143,
								33.235852768690336
							],
							[
								101.22000288302667,
								33.17061127369129
							],
							[
								101.16414065956377,
								33.128081569708655
							],
							[
								101.13142947758837,
								32.93835154908473
							],
							[
								101.23194013942583,
								32.857710476157564
							],
							[
								101.17080691930397,
								32.68834096906048
							],
							[
								100.90219282403956,
								32.63046336489239
							],
							[
								100.69708906480844,
								32.68573131005192
							],
							[
								100.60303795803532,
								32.451223659844004
							],
							[
								100.53120771676265,
								32.40339712257915
							],
							[
								100.47302005423205,
								32.48527842895632
							],
							[
								100.56092166520273,
								32.5633356803973
							],
							[
								100.4984965347872,
								32.669091497774446
							],
							[
								100.3994328146726,
								32.75838837272522
							],
							[
								100.25499718577157,
								32.72580638285831
							],
							[
								100.22316450383875,
								32.63689708153504
							],
							[
								100.11903649264002,
								32.67087433538231
							],
							[
								100.15862063993058,
								32.78226288552375
							],
							[
								100.04689619300484,
								32.93548350675843
							],
							[
								99.84096561057441,
								32.9570067411681
							],
							[
								99.7692903989327,
								32.92176341454987
							],
							[
								99.69854536327784,
								32.744616604572684
							],
							[
								99.50940962095723,
								32.83543793381361
							],
							[
								99.28937137179133,
								32.88714020375744
							],
							[
								99.22529259587657,
								32.99891632752647
							],
							[
								99.10064904241938,
								33.072451891141895
							],
							[
								98.8520854023194,
								33.17487457909857
							],
							[
								98.7729171077383,
								33.30272207346488
							],
							[
								98.7357100772582,
								33.4897649198152
							],
							[
								98.63328738840227,
								33.60771637600993
							],
							[
								98.64584476062714,
								33.676161811018716
							],
							[
								98.45794925265585,
								33.84010529182575
							],
							[
								98.30167972194164,
								33.84584137647835
							],
							[
								98.21181440620984,
								33.939453232780465
							],
							[
								98.03492597865096,
								33.95978790878502
							],
							[
								97.81907352142582,
								33.86418651019929
							],
							[
								97.74507286981708,
								33.86485830286841
							],
							[
								97.69567020141864,
								34.00523733193728
							],
							[
								97.61024905824746,
								33.93087494602193
							],
							[
								97.3835445502408,
								33.86987091710907
							],
							[
								97.3905208683434,
								33.61138540311384
							],
							[
								97.47738895143897,
								33.56224111623459
							],
							[
								97.53929731611834,
								33.45372060841933
							],
							[
								97.7242989442409,
								33.406126614251804
							],
							[
								97.61567508273885,
								33.32837942207263
							],
							[
								97.50053999202703,
								33.19435659438136
							],
							[
								97.504260695075,
								33.04560598412883
							],
							[
								97.36096194863501,
								32.89703624102975
							],
							[
								97.43067345641487,
								32.70032990230317
							],
							[
								97.7157206556837,
								32.544189560999484
							],
							[
								97.63086795509201,
								32.44409231211051
							],
							[
								97.56229332887398,
								32.48434825296948
							],
							[
								97.36085859584756,
								32.50018707957008
							],
							[
								97.32628706279775,
								32.423576768952785
							],
							[
								97.39315636577362,
								32.38497447449237
							],
							[
								97.35977339112912,
								32.260485947968135
							],
							[
								97.25440514468164,
								32.20395193093691
							],
							[
								97.25487023267505,
								32.075794379107236
							],
							[
								97.12407718341524,
								32.009338487281354
							],
							[
								97.01808882024284,
								32.022903550758315
							],
							[
								96.75412560401344,
								31.97383677824473
							],
							[
								96.75288536966406,
								31.83867706989085
							],
							[
								96.79541507364672,
								31.715454617036983
							],
							[
								96.48323774562544,
								31.753462633193948
							],
							[
								96.27818566323776,
								31.909060370339773
							],
							[
								96.18263593969681,
								31.871155706970285
							],
							[
								96.14775434828454,
								31.77992096657931
							],
							[
								96.21291832891774,
								31.735117499473034
							],
							[
								96.21462365126052,
								31.6067532411692
							],
							[
								96.0942175638894,
								31.70054596642322
							],
							[
								95.84885786290005,
								31.714266059530956
							],
							[
								95.5926977879725,
								31.761575832858398
							],
							[
								95.49709638938685,
								31.741654568003867
							],
							[
								95.40676598476233,
								31.810668442894325
							],
							[
								95.35431440598506,
								31.954406439805382
							],
							[
								95.42526614811419,
								32.094759630452614
							],
							[
								95.38211632740655,
								32.1700521923548
							],
							[
								95.259074741706,
								32.24407868148589
							],
							[
								95.06182579972085,
								32.261209418379906
							],
							[
								94.9513415871445,
								32.33722544979463
							],
							[
								94.93893924365113,
								32.428150132722436
							],
							[
								94.75522952672128,
								32.535456243710655
							],
							[
								94.7218465511774,
								32.592868760784654
							],
							[
								94.582216830942,
								32.67219208409742
							],
							[
								94.31685835163165,
								32.54075307879154
							],
							[
								94.17826216017056,
								32.52225291633897
							],
							[
								94.11077273957022,
								32.47822459648796
							],
							[
								93.87740197092415,
								32.495381170904295
							],
							[
								93.7341549013276,
								32.57245657041443
							],
							[
								93.59716067942185,
								32.56457591384728
							],
							[
								93.51039594911373,
								32.51610342143573
							],
							[
								93.34534142516662,
								32.57770172775258
							],
							[
								93.21852745957455,
								32.659789741503346
							],
							[
								93.03125206922755,
								32.663510444551406
							],
							[
								93.00593061740403,
								32.73461721451278
							],
							[
								92.8500228209964,
								32.728881129860184
							],
							[
								92.72729129365831,
								32.760558783061384
							],
							[
								92.64998335195008,
								32.74043081353125
							],
							[
								92.46580854702677,
								32.769421292458674
							],
							[
								92.22137902202428,
								32.74497833887918
							],
							[
								92.19610924704409,
								32.86864004220416
							],
							[
								92.08609012156182,
								32.885641587888955
							],
							[
								91.97684614513349,
								32.84861542456224
							],
							[
								91.81313520742384,
								32.9682722030997
							],
							[
								91.72032433500016,
								32.98250906014505
							],
							[
								91.54266076018592,
								33.08033254680956
							],
							[
								91.37646935377774,
								33.27125112583877
							],
							[
								91.36158654158561,
								33.336957708831164
							],
							[
								91.18919396432995,
								33.336957708831164
							],
							[
								91.12790571457708,
								33.25432709451982
							],
							[
								90.94993208229971,
								33.23939260548434
							],
							[
								90.80404951437367,
								33.14053559004543
							],
							[
								90.66033735588434,
								33.155857651809214
							],
							[
								90.43626834530784,
								33.28218069098608
							],
							[
								90.32320031124539,
								33.28871776041629
							],
							[
								90.2056881037231,
								33.40150157273936
							],
							[
								90.2032076350244,
								33.500074368237534
							],
							[
								90.14057579993317,
								33.57820913314501
							],
							[
								89.97510786303741,
								33.630557359134826
							],
							[
								89.87723270132818,
								33.82274201093509
							],
							[
								89.74189212402234,
								33.909506741243064
							],
							[
								89.63673058494862,
								34.093371486904545
							],
							[
								89.78659223834114,
								34.1985330268777
							],
							[
								89.84028405056841,
								34.38332794942528
							],
							[
								89.79573896677988,
								34.40841685635283
							],
							[
								89.7910880877451,
								34.55411855712569
							],
							[
								89.72390872640653,
								34.73963694918584
							],
							[
								89.82524620964489,
								34.84609040035167
							],
							[
								89.78767744305958,
								34.926395574696045
							],
							[
								89.58360721170345,
								34.9409166534808
							],
							[
								89.57166995620355,
								35.07331167229586
							],
							[
								89.45482954314889,
								35.21283803974367
							],
							[
								89.4843367860139,
								35.34220998840027
							],
							[
								89.73010989815322,
								35.44365082532536
							],
							[
								89.69026736934364,
								35.50858226196186
							],
							[
								89.71507205633037,
								35.642346707234736
							],
							[
								89.78876264777801,
								35.82685740804294
							],
							[
								89.58143680226658,
								35.839776516373064
							],
							[
								89.48464684437636,
								35.88018748596369
							],
							[
								89.43514082229115,
								35.98780365711312
							],
							[
								89.51467085207815,
								36.053251857687144
							],
							[
								89.67781334810746,
								36.081958115774455
							],
							[
								89.8667940607973,
								36.06560252523636
							],
							[
								89.97200727671441,
								36.10492829010852
							],
							[
								90.01376183524053,
								36.25277456279585
							],
							[
								90.16569054618179,
								36.12924205247873
							],
							[
								90.62266523561209,
								36.1111294618552
							],
							[
								90.82937096619708,
								36.010412096241225
							],
							[
								90.91499881404411,
								36.01333181451159
							],
							[
								91.11131758004228,
								36.07392243137514
							],
							[
								91.13576053272249,
								36.14063670472012
							],
							[
								91.0610364116011,
								36.31354604771195
							],
							[
								91.00672448085015,
								36.50348277391089
							],
							[
								90.80528974782356,
								36.55851817507366
							],
							[
								90.68813927640645,
								36.69848379209333
							],
							[
								90.71237552261232,
								36.82149953937221
							],
							[
								90.80777021742165,
								36.910563870326314
							],
							[
								91.05499026858604,
								36.94513540337613
							],
							[
								91.28758589087619,
								37.01350332311986
							],
							[
								91.31631798738522,
								37.118974921455475
							],
							[
								91.23497928336718,
								37.19540436491951
							],
							[
								91.07374881435624,
								37.48794464802705
							],
							[
								90.95721845876483,
								37.519415594753895
							],
							[
								90.83448693232606,
								37.60778229371786
							],
							[
								90.4364750508829,
								37.77857290321691
							],
							[
								90.41006839434095,
								37.84699249890471
							],
							[
								90.43926557794407,
								37.99607900594131
							],
							[
								90.19349246580464,
								38.32567129169675
							],
							[
								90.15091108587785,
								38.43279653643103
							],
							[
								90.31245161325131,
								38.46579193834722
							],
							[
								90.47822960761027,
								38.53250621169232
							],
							[
								90.63599775599164,
								38.6243093937635
							],
							[
								90.65351606561393,
								38.674073798267216
							],
							[
								91.01246056460332,
								38.69867178057822
							],
							[
								91.29440718024716,
								38.7451288931839
							],
							[
								91.49160444538887,
								38.81726919191968
							],
							[
								91.62865034413801,
								38.825666612424214
							],
							[
								92.1227287130597,
								38.94064667440455
							],
							[
								92.3331034689499,
								39.049864814209826
							],
							[
								92.93596072810516,
								39.152855942947355
							],
							[
								93.14034101782369,
								39.19874461477218
							],
							[
								93.27562991738677,
								39.18871938718996
							],
							[
								93.50202436703091,
								39.27191844318162
							],
							[
								93.72206261619681,
								39.3067483595492
							],
							[
								93.90892459539378,
								39.28563853628947
							],
							[
								94.11697391221622,
								39.321941230103704
							],
							[
								94.47932905499187,
								39.31783295342805
							],
							[
								94.63105106035817,
								39.29537954393078
							],
							[
								94.72463707913784,
								39.23683014619428
							],
							[
								95.05717492068607,
								39.1474557559784
							],
							[
								95.3053251487367,
								39.182776597861675
							],
							[
								95.46092288588244,
								39.04660919915523
							],
							[
								95.5657743665937,
								39.01524160431657
							],
							[
								95.72163048705727,
								38.8747333849378
							],
							[
								95.89185265487612,
								38.783653673278366
							],
							[
								96.00760786321234,
								38.75169179923708
							],
							[
								96.05478844622985,
								38.67882803008956
							],
							[
								96.31549604740468,
								38.62694489209312
							],
							[
								96.50261640812067,
								38.54901683186122
							],
							[
								96.51036787257925,
								38.470106919698566
							],
							[
								96.84507612536294,
								38.35641876891103
							],
							[
								96.94548343261437,
								38.35822744404132
							],
							[
								96.97121829558796,
								38.567258612794774
							],
							[
								96.94238284719063,
								38.63911469248907
							],
							[
								96.98119184812532,
								38.74430206998457
							],
							[
								96.99111372291998,
								38.99679311780818
							],
							[
								96.96253665604178,
								39.10324656807467
							],
							[
								97.02646040232571,
								39.196212470129325
							],
							[
								97.13746137883953,
								39.20316294981029
							],
							[
								97.36256391819029,
								39.150427151092174
							],
							[
								98.06861901165803,
								38.80184377736839
							],
							[
								98.26256066264443,
								38.93168081311896
							],
							[
								98.32431399859217,
								39.023251451193545
							],
							[
								98.44456505723156,
								38.957312324204366
							],
							[
								98.60222985192615,
								38.9475971540854
							],
							[
								98.78190880744546,
								39.06769318309395
							],
							[
								98.96210452690241,
								38.98175527598519
							],
							[
								99.09475792813595,
								38.95777741129845
							],
							[
								99.0992537784391,
								38.889642035551475
							],
							[
								99.49633548389545,
								38.60110667633211
							],
							[
								99.55715864475559,
								38.515375474798304
							],
							[
								99.79988284741546,
								38.365720526980795
							],
							[
								100.07903893419939,
								38.27843903273518
							],
							[
								100.15552005360757,
								38.302778631728444
							],
							[
								100.08306969560994,
								38.39450429943386
							],
							[
								100.14079227104645,
								38.48584239441095
							],
							[
								100.35783328667685,
								38.30704193803501
							],
							[
								100.55430708230602,
								38.25208405213729
							],
							[
								100.63574913911145,
								38.10540049943347
							],
							[
								101.04978071520782,
								37.9637295600711
							],
							[
								101.29291832901771,
								37.79893341674372
							],
							[
								101.64654015540378,
								37.61186473197179
							],
							[
								101.76560265473876,
								37.524970812253144
							],
							[
								101.93706505690687,
								37.73069468820927
							],
							[
								102.06723799034091,
								37.548302720893844
							],
							[
								102.03266645729116,
								37.47890127237579
							],
							[
								102.14201378830563,
								37.406657619953165
							],
							[
								102.24552168188006,
								37.38087108013622
							],
							[
								102.42664757732382,
								37.27806081855195
							],
							[
								102.55061933811197,
								37.1638300645059
							],
							[
								102.49584232026689,
								37.08910594338457
							],
							[
								102.46013390475588,
								36.9556515573735
							],
							[
								102.67474612763164,
								36.80162995136112
							],
							[
								102.61082238224708,
								36.657194322460015
							],
							[
								102.69815555243673,
								36.60887685788063
							],
							[
								102.76972741129094,
								36.49756582300432
							],
							[
								102.81856163890848,
								36.32605174399279
							],
							[
								102.89447431843502,
								36.30941193351396
							],
							[
								103.0403568872606,
								36.2164977083026
							],
							[
								102.93328331936976,
								36.08606639334937
							],
							[
								102.99953250472129,
								35.990749212905826
							],
							[
								102.97601972892738,
								35.833291123786296
							],
							[
								102.83752689025374,
								35.860757148423716
							],
							[
								102.70032596187366,
								35.839466458010634
							],
							[
								102.67986209465988,
								35.756835841900624
							],
							[
								102.72130659392417,
								35.619066474538215
							],
							[
								102.70218631384728,
								35.52403351493476
							],
							[
								102.53496137866472,
								35.5356348745498
							],
							[
								102.42644087084955,
								35.43530508076486
							],
							[
								102.28929162021205,
								35.4069347194617
							],
							[
								102.31771365835863,
								35.27497895021838
							],
							[
								102.37559126162739,
								35.20369131130502
							],
							[
								102.26712242975628,
								35.0558708770393
							],
							[
								102.00936038617283,
								34.94213104940843
							],
							[
								101.912828810701,
								34.844798489158904
							],
							[
								101.9232157743885,
								34.78728262019672
							],
							[
								101.75506066321901,
								34.70367015215584
							],
							[
								101.7933528993168,
								34.631891587726585
							],
							[
								101.91391401631881,
								34.661398831490885
							],
							[
								101.93194909077789,
								34.59111888293009
							],
							[
								102.15028201670174,
								34.49507823297404
							],
							[
								102.2123454119112,
								34.351546943436716
							],
							[
								102.07653974841065,
								34.26697846098722
							],
							[
								102.01199588360316,
								34.17760407256986
							],
							[
								101.86254764225981,
								34.141378893121384
							],
							[
								101.78038211504253,
								34.06750743272184
							],
							[
								101.64716027212887,
								34.136004544574035
							],
							[
								101.6116585630923,
								34.19124665041258
							],
							[
								101.32366580623199,
								34.259511217368754
							],
							[
								101.25602135600082,
								34.30049062774032
							],
							[
								101.0358280781033,
								34.33893789346902
							],
							[
								100.93526574122092,
								34.38632518206148
							],
							[
								100.81547977057494,
								34.29459951435609
							],
							[
								100.79170861236253,
								34.15486644133318
							],
							[
								100.94797814307685,
								33.92976390198248
							],
							[
								101.12946577372645,
								33.85064728424476
							],
							[
								101.16026492688496,
								33.66414704025368
							],
							[
								101.39963016170259,
								33.64507843702029
							],
							[
								101.49559329639345,
								33.70463552510944
							],
							[
								101.57688032356805,
								33.63050568319076
							],
							[
								101.6133638863343,
								33.51185659410652
							],
							[
								101.77753991113792,
								33.53004669909589
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 3,
					"name": "广西"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								111.99655439706783,
								24.735673935703687
							],
							[
								111.93247562115312,
								24.698286038070194
							],
							[
								111.93325076660972,
								24.60136688897086
							],
							[
								112.00554609587584,
								24.553075262813195
							],
							[
								111.99092166520262,
								24.46587128293345
							],
							[
								112.04730065260321,
								24.381457831014075
							],
							[
								111.97593550022327,
								24.27676137903447
							],
							[
								111.86932702032573,
								24.231828722517605
							],
							[
								111.8991443215532,
								23.990861518144612
							],
							[
								111.80788374184118,
								23.909238593286545
							],
							[
								111.79331098801185,
								23.849190578782242
							],
							[
								111.65750532361176,
								23.841697495842766
							],
							[
								111.60117801305483,
								23.658013617334632
							],
							[
								111.47100507962091,
								23.613235989549253
							],
							[
								111.46929975817739,
								23.55791636844566
							],
							[
								111.39121666921386,
								23.431257433383934
							],
							[
								111.36284630701164,
								23.27302419700922
							],
							[
								111.36997765474496,
								23.139104723004607
							],
							[
								111.41095706601595,
								23.052598375114997
							],
							[
								111.35121910987402,
								22.908214423057245
							],
							[
								111.18146203004869,
								22.748534246758197
							],
							[
								111.06601688007493,
								22.740576076724665
							],
							[
								111.02379723535421,
								22.638670151806025
							],
							[
								110.75456302336488,
								22.580172430912967
							],
							[
								110.64237348844574,
								22.183452459763316
							],
							[
								110.46672529523619,
								22.150999661105516
							],
							[
								110.33355512916603,
								22.1904546171869
							],
							[
								110.35546593630391,
								22.100770169507825
							],
							[
								110.3558793483532,
								21.888974311215577
							],
							[
								110.21614627533052,
								21.87453074769587
							],
							[
								110.14235233019582,
								21.8974492460859
							],
							[
								109.96722090092396,
								21.866727607293342
							],
							[
								109.91724978994603,
								21.687152004561483
							],
							[
								109.74805748798155,
								21.57493724193023
							],
							[
								109.64966881600026,
								21.520453192000048
							],
							[
								109.57276451900009,
								21.58173248900016
							],
							[
								109.5307723320002,
								21.491644598000107
							],
							[
								109.43824303500008,
								21.455064195000176
							],
							[
								109.31552168100029,
								21.45905182500016
							],
							[
								109.21461022200015,
								21.417425848000164
							],
							[
								109.05014082100013,
								21.43716054900011
							],
							[
								109.1425887380002,
								21.510199286000102
							],
							[
								109.1357528000002,
								21.60297272300005
							],
							[
								109.06674238400007,
								21.636542059000078
							],
							[
								108.9702254570002,
								21.606350002000056
							],
							[
								108.90170332100024,
								21.665187893000052
							],
							[
								108.7515568370003,
								21.650132554000038
							],
							[
								108.57138105600029,
								21.8128115910001
							],
							[
								108.5537215500002,
								21.90375397300005
							],
							[
								108.4487410820002,
								21.86579010600022
							],
							[
								108.50513756600014,
								21.691717841000184
							],
							[
								108.44369550900024,
								21.64394765800006
							],
							[
								108.32154381600014,
								21.709662177000155
							],
							[
								108.25253339900019,
								21.59528229400013
							],
							[
								108.13526451900003,
								21.581854559000135
							],
							[
								107.99122155000009,
								21.48566315300019
							],
							[
								107.85546268800022,
								21.600336406000054
							],
							[
								107.74482344600017,
								21.657542217000184
							],
							[
								107.61320357300019,
								21.60560740200009
							],
							[
								107.34815515200012,
								21.599354553000182
							],
							[
								107.27265588400019,
								21.718313701000113
							],
							[
								107.17235192900023,
								21.715058085000123
							],
							[
								107.06584680200007,
								21.795828349000175
							],
							[
								107.02114668800016,
								21.892256571000075
							],
							[
								106.86477380400015,
								21.968065898000077
							],
							[
								106.72235355700025,
								22.006978251000135
							],
							[
								106.6721757410001,
								22.092502747000083
							],
							[
								106.66292565900022,
								22.223295797000105
							],
							[
								106.6172953700003,
								22.322772929000052
							],
							[
								106.5553353270002,
								22.331971334000144
							],
							[
								106.52691329000015,
								22.427779440000165
							],
							[
								106.56877120000013,
								22.574592183000163
							],
							[
								106.6801855880002,
								22.579449768000075
							],
							[
								106.73553104700022,
								22.6954116820001
							],
							[
								106.73103519700021,
								22.80010813400014
							],
							[
								106.66747318500012,
								22.867520040000073
							],
							[
								106.48779423100024,
								22.92542348300009
							],
							[
								106.31566003400013,
								22.853799947000226
							],
							[
								106.23401127200009,
								22.863851013000158
							],
							[
								106.20238529400007,
								22.946998393000058
							],
							[
								105.99924524000028,
								22.975368754000158
							],
							[
								105.85387943500018,
								22.904649556000038
							],
							[
								105.69032352700015,
								23.043969218000086
							],
							[
								105.55157230700024,
								23.05967885400017
							],
							[
								105.52132535803946,
								23.16314776222967
							],
							[
								105.84804080613827,
								23.519391588351198
							],
							[
								105.983019647339,
								23.46903290554411
							],
							[
								106.12812706890912,
								23.54065644034256
							],
							[
								106.1521566104393,
								23.750411077709117
							],
							[
								106.19375613843516,
								23.86939606447686
							],
							[
								106.15742760619901,
								23.973730781250595
							],
							[
								105.9707723325771,
								24.087728990400592
							],
							[
								105.87222537640008,
								24.024709580782485
							],
							[
								105.78799279163411,
								24.020652980950274
							],
							[
								105.5320910991249,
								24.126305447338495
							],
							[
								105.44718672079063,
								24.037602850691115
							],
							[
								105.32026940331025,
								24.118140570830803
							],
							[
								105.25303836512865,
								24.08550690412045
							],
							[
								105.16994266192427,
								24.1673623720759
							],
							[
								105.17624718555913,
								24.309911811481044
							],
							[
								105.06080203738412,
								24.430679633158547
							],
							[
								104.96106652190258,
								24.416416937691565
							],
							[
								104.7526554707735,
								24.46832591410964
							],
							[
								104.72872928293015,
								24.36419790291086
							],
							[
								104.66702762202715,
								24.339754950230855
							],
							[
								104.59917646712029,
								24.40251597743037
							],
							[
								104.50186974529248,
								24.57819000906173
							],
							[
								104.49463504387222,
								24.69820852280523
							],
							[
								104.53985192302781,
								24.74177175556207
							],
							[
								104.72934939965512,
								24.63139089577328
							],
							[
								104.85187422141837,
								24.705830796953705
							],
							[
								104.87673058524842,
								24.755026759777195
							],
							[
								105.01248457190547,
								24.797478949393962
							],
							[
								105.1000761254129,
								24.954316920889312
							],
							[
								105.20590945805509,
								25.003900458239514
							],
							[
								105.28941857330858,
								24.93318126100644
							],
							[
								105.38073082896466,
								24.95710744884977
							],
							[
								105.44439619283003,
								24.923621121417767
							],
							[
								105.50862999927506,
								24.817451891091935
							],
							[
								105.67533816872151,
								24.789675808092056
							],
							[
								105.78773441011504,
								24.715726834226103
							],
							[
								105.91646040182627,
								24.728723456022635
							],
							[
								106.00115807458559,
								24.648469956723147
							],
							[
								106.17618615107011,
								24.782234401996135
							],
							[
								106.19871707583235,
								24.876802272706755
							],
							[
								106.15572228385639,
								24.960363063904367
							],
							[
								106.3065657900791,
								24.981472887164102
							],
							[
								106.5871171408433,
								25.104359443233818
							],
							[
								106.666802199362,
								25.173502509333474
							],
							[
								106.88596194938441,
								25.196963609183257
							],
							[
								106.99551598507475,
								25.255383815710616
							],
							[
								107.01458458920752,
								25.353414007950107
							],
							[
								106.97458702986762,
								25.4404371197773
							],
							[
								107.0219226416167,
								25.497952988739485
							],
							[
								107.24423465390623,
								25.558595282446475
							],
							[
								107.39786868719034,
								25.387287909009785
							],
							[
								107.49889611206595,
								25.214120185398343
							],
							[
								107.64162641772515,
								25.267527778584224
							],
							[
								107.77603681814469,
								25.152986965276284
							],
							[
								107.86187137336537,
								25.14595897122956
							],
							[
								107.96656782444552,
								25.209030055892356
							],
							[
								108.0677502789523,
								25.21313833346727
							],
							[
								108.1291935574369,
								25.26881968797818
							],
							[
								108.13182905486707,
								25.386435248288223
							],
							[
								108.29336958224042,
								25.538699856013665
							],
							[
								108.40478396990443,
								25.514877020957726
							],
							[
								108.56787478998962,
								25.415864975887985
							],
							[
								108.6946370787382,
								25.602003486471688
							],
							[
								108.77411543168176,
								25.521930854325433
							],
							[
								108.9411853372336,
								25.54882843728265
							],
							[
								109.02438439322515,
								25.594949653104067
							],
							[
								109.08536258281691,
								25.805427760882537
							],
							[
								109.14861453733101,
								25.75065074303737
							],
							[
								109.3004398945854,
								25.743054308209878
							],
							[
								109.39914188039353,
								25.998542589568984
							],
							[
								109.45670942619904,
								26.038850206371933
							],
							[
								109.60316043490621,
								26.052673652267373
							],
							[
								109.67225182506161,
								25.98531342197691
							],
							[
								109.67659264483484,
								25.889066067345198
							],
							[
								109.77203901558823,
								25.90816050900031
							],
							[
								109.78134077365786,
								26.023760687705533
							],
							[
								109.83844323057065,
								26.045025539696894
							],
							[
								109.91166873582358,
								26.181218776825062
							],
							[
								110.06204715405289,
								26.149928697251653
							],
							[
								110.03362511590632,
								26.03649892798316
							],
							[
								110.13821821509862,
								26.051665961015317
							],
							[
								110.2469971053323,
								25.978207913564432
							],
							[
								110.34166832883028,
								26.11274750429385
							],
							[
								110.48455366412043,
								26.17155528444883
							],
							[
								110.53654015490423,
								26.22485952394797
							],
							[
								110.57705447818182,
								26.350794990396594
							],
							[
								110.68862389457706,
								26.332320665466483
							],
							[
								110.72402225082618,
								26.27431387008903
							],
							[
								110.87894819530305,
								26.275218206754857
							],
							[
								110.9354822123342,
								26.382472642698303
							],
							[
								111.12327436661872,
								26.305991523290288
							],
							[
								111.25189700734109,
								26.279714057058186
							],
							[
								111.25670291510744,
								26.210131741386903
							],
							[
								111.20208092689336,
								25.930278021713434
							],
							[
								111.25623782801335,
								25.868989772859862
							],
							[
								111.40832156768636,
								25.907850449738504
							],
							[
								111.41126712437824,
								25.802611396298857
							],
							[
								111.32372724771426,
								25.729825141517097
							],
							[
								111.31582075362496,
								25.503198146977013
							],
							[
								111.2537573593147,
								25.399121811722296
							],
							[
								111.16420210194548,
								25.36493785230016
							],
							[
								111.11376590387334,
								25.238640652444133
							],
							[
								110.99320478687156,
								25.15076487899597
							],
							[
								110.95460249241114,
								25.025346178283485
							],
							[
								111.0062789248326,
								24.93545502413008
							],
							[
								111.0790393411927,
								24.944240017363057
							],
							[
								111.12575483621669,
								25.04446645836049
							],
							[
								111.27437625526,
								25.147664293572376
							],
							[
								111.42692508292618,
								25.106193955886454
							],
							[
								111.46185835208138,
								25.019480903321153
							],
							[
								111.42971561088672,
								24.94341319416364
							],
							[
								111.47364057795028,
								24.7928539087809
							],
							[
								111.42816531817493,
								24.681026109067716
							],
							[
								111.51694542918824,
								24.642656357704766
							],
							[
								111.66711714094339,
								24.779676418931558
							],
							[
								111.79703169195909,
								24.76042694854482
							],
							[
								111.92596439014449,
								24.77487051026594
							],
							[
								111.99655439706783,
								24.735673935703687
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 4,
					"name": "贵州"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								109.25837527859625,
								28.505908922458815
							],
							[
								109.26385298083034,
								28.322225043051304
							],
							[
								109.35428673734299,
								28.265174262082496
							],
							[
								109.29873457224272,
								28.09471955026703
							],
							[
								109.36265831942592,
								28.029633083999613
							],
							[
								109.30989668228608,
								27.970308539007874
							],
							[
								109.32824181510762,
								27.807656969393605
							],
							[
								109.41340457586057,
								27.738953151966427
							],
							[
								109.44725263939773,
								27.65001801222155
							],
							[
								109.41836551325781,
								27.559506741343057
							],
							[
								109.20638878781239,
								27.444759223359426
							],
							[
								109.0149276064239,
								27.26218638799145
							],
							[
								108.90010257407448,
								27.188805854006944
							],
							[
								108.79132368384091,
								27.08312755009638
							],
							[
								108.87421268057074,
								27.018118598194718
							],
							[
								108.95017703694072,
								27.026903591427583
							],
							[
								109.0954911640859,
								27.13444224731188
							],
							[
								109.15564253137774,
								27.079716905410862
							],
							[
								109.23057335807403,
								27.151986396255182
							],
							[
								109.43820926284718,
								27.131031601727074
							],
							[
								109.49918745333832,
								27.062482814830076
							],
							[
								109.50714562427123,
								26.97636404146735
							],
							[
								109.44384199381295,
								26.900993964299943
							],
							[
								109.50528527229744,
								26.824797064832666
							],
							[
								109.39707482284473,
								26.754672145902788
							],
							[
								109.29403201726376,
								26.727309474952335
							],
							[
								109.37723107325536,
								26.646151638087645
							],
							[
								109.40255252507893,
								26.537295234387585
							],
							[
								109.31501264931433,
								26.42572581619342
							],
							[
								109.29656416190653,
								26.312528590921687
							],
							[
								109.39929691002442,
								26.269947210994985
							],
							[
								109.45670942619904,
								26.038850206371933
							],
							[
								109.39914188039353,
								25.998542589568984
							],
							[
								109.3004398945854,
								25.743054308209878
							],
							[
								109.14861453733101,
								25.75065074303737
							],
							[
								109.08536258281691,
								25.805427760882537
							],
							[
								109.02438439322515,
								25.594949653104067
							],
							[
								108.9411853372336,
								25.54882843728265
							],
							[
								108.77411543168176,
								25.521930854325433
							],
							[
								108.6946370787382,
								25.602003486471688
							],
							[
								108.56787478998962,
								25.415864975887985
							],
							[
								108.40478396990443,
								25.514877020957726
							],
							[
								108.29336958224042,
								25.538699856013665
							],
							[
								108.13182905486707,
								25.386435248288223
							],
							[
								108.1291935574369,
								25.26881968797818
							],
							[
								108.0677502789523,
								25.21313833346727
							],
							[
								107.96656782444552,
								25.209030055892356
							],
							[
								107.86187137336537,
								25.14595897122956
							],
							[
								107.77603681814469,
								25.152986965276284
							],
							[
								107.64162641772515,
								25.267527778584224
							],
							[
								107.49889611206595,
								25.214120185398343
							],
							[
								107.39786868719034,
								25.387287909009785
							],
							[
								107.24423465390623,
								25.558595282446475
							],
							[
								107.0219226416167,
								25.497952988739485
							],
							[
								106.97458702986762,
								25.4404371197773
							],
							[
								107.01458458920752,
								25.353414007950107
							],
							[
								106.99551598507475,
								25.255383815710616
							],
							[
								106.88596194938441,
								25.196963609183257
							],
							[
								106.666802199362,
								25.173502509333474
							],
							[
								106.5871171408433,
								25.104359443233818
							],
							[
								106.3065657900791,
								24.981472887164102
							],
							[
								106.15572228385639,
								24.960363063904367
							],
							[
								106.19871707583235,
								24.876802272706755
							],
							[
								106.17618615107011,
								24.782234401996135
							],
							[
								106.00115807458559,
								24.648469956723147
							],
							[
								105.91646040182627,
								24.728723456022635
							],
							[
								105.78773441011504,
								24.715726834226103
							],
							[
								105.67533816872151,
								24.789675808092056
							],
							[
								105.50862999927506,
								24.817451891091935
							],
							[
								105.44439619283003,
								24.923621121417767
							],
							[
								105.38073082896466,
								24.95710744884977
							],
							[
								105.28941857330858,
								24.93318126100644
							],
							[
								105.20590945805509,
								25.003900458239514
							],
							[
								105.1000761254129,
								24.954316920889312
							],
							[
								105.01248457190547,
								24.797478949393962
							],
							[
								104.87673058524842,
								24.755026759777195
							],
							[
								104.85187422141837,
								24.705830796953705
							],
							[
								104.72934939965512,
								24.63139089577328
							],
							[
								104.53985192302781,
								24.74177175556207
							],
							[
								104.54563968272521,
								24.81342112878204
							],
							[
								104.70702518136704,
								25.017310492085528
							],
							[
								104.68904178285203,
								25.10125885691076
							],
							[
								104.71973758322287,
								25.210942083810124
							],
							[
								104.66888797400088,
								25.296828314974732
							],
							[
								104.56584516841974,
								25.38119009005061
							],
							[
								104.55354617681462,
								25.48454295489347
							],
							[
								104.43267500234941,
								25.506815497237426
							],
							[
								104.42244306829298,
								25.579265855235008
							],
							[
								104.30622277196329,
								25.664764512772024
							],
							[
								104.42058271721862,
								25.856923326150564
							],
							[
								104.39293582632729,
								25.94787384750009
							],
							[
								104.49897586544387,
								26.030788683550924
							],
							[
								104.54517459473169,
								26.270412298988447
							],
							[
								104.67550255689741,
								26.379268704487117
							],
							[
								104.55943729019873,
								26.584708360502418
							],
							[
								104.35851932200904,
								26.647831122008654
							],
							[
								104.21806277857439,
								26.626617946860705
							],
							[
								104.15336388593465,
								26.65124176669417
							],
							[
								104.02040042543922,
								26.51419586794495
							],
							[
								103.82924930241342,
								26.547113756394765
							],
							[
								103.75783247319004,
								26.629434312343676
							],
							[
								103.77509240129325,
								26.731701972468073
							],
							[
								103.71731814991267,
								26.798958849071568
							],
							[
								103.77829634040387,
								26.88001333314878
							],
							[
								103.77829634040387,
								26.955874334932616
							],
							[
								103.7008850441095,
								27.052431748826137
							],
							[
								103.69540734277467,
								27.151702175415068
							],
							[
								103.9113114768432,
								27.390369778242643
							],
							[
								103.98112633741056,
								27.399516505782117
							],
							[
								104.17434451708573,
								27.271513984482795
							],
							[
								104.34441165617295,
								27.441193549043078
							],
							[
								104.44368208186262,
								27.347219957535003
							],
							[
								104.59421552882361,
								27.31378530514769
							],
							[
								104.78340294798767,
								27.332207953234473
							],
							[
								104.87089114780821,
								27.30975454373717
							],
							[
								105.08255781489117,
								27.412513129377402
							],
							[
								105.19738284724059,
								27.39863800753801
							],
							[
								105.29696333219198,
								27.721744899807277
							],
							[
								105.36078372568835,
								27.76001129838272
							],
							[
								105.52449466429726,
								27.774635728156312
							],
							[
								105.64691613237358,
								27.678129991106204
							],
							[
								105.87594608034726,
								27.745206000556436
							],
							[
								106.03919192916413,
								27.756807359272273
							],
							[
								106.10358076434073,
								27.788071601323338
							],
							[
								106.24760298119259,
								27.77523000735897
							],
							[
								106.34537479011442,
								27.83494212507904
							],
							[
								106.29896935435215,
								28.00043589949715
							],
							[
								106.21525353442308,
								28.056091417385005
							],
							[
								106.19933719255738,
								28.124252631553674
							],
							[
								106.10942020088152,
								28.17471466714815
							],
							[
								106.00896121588738,
								28.140246486885815
							],
							[
								105.90622846866887,
								28.150581772830577
							],
							[
								105.846800571789,
								28.26915334754895
							],
							[
								105.66722496995635,
								28.31829763442829
							],
							[
								105.62056115087643,
								28.482421983287963
							],
							[
								105.68319298686686,
								28.58344940816366
							],
							[
								105.89191409725777,
								28.60931346324574
							],
							[
								105.98441491131905,
								28.753542384773226
							],
							[
								106.18879520103764,
								28.584612128147143
							],
							[
								106.26868696513134,
								28.556629340471687
							],
							[
								106.38242679186294,
								28.572494005493894
							],
							[
								106.48872521429723,
								28.540971381024434
							],
							[
								106.56241580574482,
								28.76713328757114
							],
							[
								106.62649458165964,
								28.637399603708786
							],
							[
								106.56241580574482,
								28.51074066774757
							],
							[
								106.75000125535365,
								28.50216238008977
							],
							[
								106.76199018769694,
								28.590890815158957
							],
							[
								106.82896284435981,
								28.608693346520653
							],
							[
								106.83506066331893,
								28.730520535394362
							],
							[
								106.88937259317072,
								28.80139476225844
							],
							[
								106.97334679641756,
								28.80452118610384
							],
							[
								107.03070763574874,
								28.88761688930802
							],
							[
								107.16108727385864,
								28.881338202296206
							],
							[
								107.29699629104607,
								28.808371080361013
							],
							[
								107.43683271685637,
								28.877255764042275
							],
							[
								107.49967125932113,
								28.993062649221912
							],
							[
								107.42396528536972,
								29.077011013147768
							],
							[
								107.43047651637806,
								29.182870185110943
							],
							[
								107.49610558500478,
								29.246096300304032
							],
							[
								107.55723880422738,
								29.186823432155705
							],
							[
								107.78347822513996,
								29.13736908601453
							],
							[
								107.78983442561827,
								29.040191555396007
							],
							[
								107.87535892067763,
								28.984070950414065
							],
							[
								108.05457278910296,
								29.064505316866928
							],
							[
								108.28623823360755,
								29.077166042778657
							],
							[
								108.36731855700577,
								28.77702932394419
							],
							[
								108.33031823120137,
								28.689153551395208
							],
							[
								108.58244754381911,
								28.601096909894437
							],
							[
								108.58275760308095,
								28.374159857891186
							],
							[
								108.73003543498731,
								28.475445665185276
							],
							[
								108.78372724811396,
								28.426094671831606
							],
							[
								108.72848514227553,
								28.242229926170126
							],
							[
								108.94294233641966,
								28.199855251818406
							],
							[
								109.09497440014843,
								28.20520376194412
							],
							[
								109.15533247301516,
								28.435525621110543
							],
							[
								109.25837527859625,
								28.505908922458815
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 5,
					"name": "重庆"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								109.59396202962392,
								31.737597968171656
							],
							[
								109.72449669826409,
								31.636079616880778
							],
							[
								109.73260989792846,
								31.56112295176277
							],
							[
								109.92949710470765,
								31.51872243898933
							],
							[
								110.10824588424015,
								31.398032130778205
							],
							[
								110.17485680479768,
								31.18866506613989
							],
							[
								110.1076257666158,
								31.12233836552312
							],
							[
								110.12767622267955,
								30.906408393032876
							],
							[
								110.06623294509433,
								30.828480332801178
							],
							[
								109.99672814288942,
								30.826232408099145
							],
							[
								109.8706893245527,
								30.888580024148837
							],
							[
								109.74857791483885,
								30.835353298116274
							],
							[
								109.63979902640398,
								30.717944444280675
							],
							[
								109.39418094299617,
								30.583740750335323
							],
							[
								109.24824669822652,
								30.59743500412219
							],
							[
								109.17925866085852,
								30.566790879695304
							],
							[
								108.96464643798276,
								30.607486070126043
							],
							[
								108.8684249208734,
								30.5513654651441
							],
							[
								108.71019168539794,
								30.522840074210052
							],
							[
								108.66998742138236,
								30.57384471306301
							],
							[
								108.57314578664875,
								30.497854519170716
							],
							[
								108.43320600805077,
								30.48728668922928
							],
							[
								108.38059939964268,
								30.39969513572194
							],
							[
								108.53201134574698,
								30.315488390276982
							],
							[
								108.53821251839304,
								29.88546295794913
							],
							[
								108.40044315013125,
								29.831073512832347
							],
							[
								108.44684858589352,
								29.73578217170987
							],
							[
								108.51263268415107,
								29.72185537392633
							],
							[
								108.61303999230176,
								29.858022773532156
							],
							[
								108.69603234271847,
								29.698161729180413
							],
							[
								108.87204227113386,
								29.63896637629722
							],
							[
								108.87204227113386,
								29.501610419185482
							],
							[
								108.9205664412882,
								29.34898407625417
							],
							[
								109.01415246006798,
								29.307487901045818
							],
							[
								109.07730105999593,
								29.214134426262746
							],
							[
								109.20659549428666,
								29.104244492889023
							],
							[
								109.27480838439936,
								29.049260769468873
							],
							[
								109.24550784710942,
								28.931257636430814
							],
							[
								109.24674808235807,
								28.785530097236233
							],
							[
								109.28121626172111,
								28.729125271414176
							],
							[
								109.21321007718325,
								28.62879547852853
							],
							[
								109.28462690640663,
								28.573475857424853
							],
							[
								109.25837527859625,
								28.505908922458815
							],
							[
								109.15533247301516,
								28.435525621110543
							],
							[
								109.09497440014843,
								28.20520376194412
							],
							[
								108.94294233641966,
								28.199855251818406
							],
							[
								108.72848514227553,
								28.242229926170126
							],
							[
								108.78372724811396,
								28.426094671831606
							],
							[
								108.73003543498731,
								28.475445665185276
							],
							[
								108.58275760308095,
								28.374159857891186
							],
							[
								108.58244754381911,
								28.601096909894437
							],
							[
								108.33031823120137,
								28.689153551395208
							],
							[
								108.36731855700577,
								28.77702932394419
							],
							[
								108.28623823360755,
								29.077166042778657
							],
							[
								108.05457278910296,
								29.064505316866928
							],
							[
								107.87535892067763,
								28.984070950414065
							],
							[
								107.78983442561827,
								29.040191555396007
							],
							[
								107.78347822513996,
								29.13736908601453
							],
							[
								107.55723880422738,
								29.186823432155705
							],
							[
								107.49610558500478,
								29.246096300304032
							],
							[
								107.43047651637806,
								29.182870185110943
							],
							[
								107.42396528536972,
								29.077011013147768
							],
							[
								107.49967125932113,
								28.993062649221912
							],
							[
								107.43683271685637,
								28.877255764042275
							],
							[
								107.29699629104607,
								28.808371080361013
							],
							[
								107.16108727385864,
								28.881338202296206
							],
							[
								107.03070763574874,
								28.88761688930802
							],
							[
								106.97334679641756,
								28.80452118610384
							],
							[
								106.88937259317072,
								28.80139476225844
							],
							[
								106.83506066331893,
								28.730520535394362
							],
							[
								106.82896284435981,
								28.608693346520653
							],
							[
								106.76199018769694,
								28.590890815158957
							],
							[
								106.75000125535365,
								28.50216238008977
							],
							[
								106.56241580574482,
								28.51074066774757
							],
							[
								106.62649458165964,
								28.637399603708786
							],
							[
								106.56241580574482,
								28.76713328757114
							],
							[
								106.48872521429723,
								28.540971381024434
							],
							[
								106.38242679186294,
								28.572494005493894
							],
							[
								106.29803917836534,
								28.672436224751948
							],
							[
								106.26031538304858,
								28.869323432430434
							],
							[
								106.00844445194986,
								28.973399766785775
							],
							[
								105.87796146015324,
								28.920043850443392
							],
							[
								105.74530805891976,
								28.994767971564613
							],
							[
								105.70060794460096,
								29.223694565851503
							],
							[
								105.64459069240661,
								29.269660752941377
							],
							[
								105.42238203290447,
								29.33355866080359
							],
							[
								105.40517378074532,
								29.429961045965513
							],
							[
								105.31484337791954,
								29.46959686920013
							],
							[
								105.29107221880793,
								29.584783636755418
							],
							[
								105.41168501175383,
								29.703174343421267
							],
							[
								105.55146976072086,
								29.747616075321673
							],
							[
								105.55751590373592,
								29.80391754835614
							],
							[
								105.70996137861476,
								29.86750539785581
							],
							[
								105.73890018069875,
								30.032637437068047
							],
							[
								105.55720584537346,
								30.147591661525922
							],
							[
								105.70866946832126,
								30.274095566956845
							],
							[
								105.79171349468203,
								30.423362942046168
							],
							[
								106.12471642512287,
								30.342334296390675
							],
							[
								106.23902469263544,
								30.22024872509857
							],
							[
								106.38490726056165,
								30.263579412959558
							],
							[
								106.53234012299822,
								30.33765757893417
							],
							[
								106.61781294211352,
								30.268695379987776
							],
							[
								106.71729007427746,
								30.05927663850605
							],
							[
								106.77036176977981,
								30.03656484569106
							],
							[
								107.032929722029,
								30.057855536104142
							],
							[
								107.22873172408981,
								30.238154609247744
							],
							[
								107.37213382421663,
								30.49986989987596
							],
							[
								107.47760542165287,
								30.60950145083129
							],
							[
								107.45667646734512,
								30.760861720991613
							],
							[
								107.5075777534106,
								30.821994941113672
							],
							[
								107.73629764212251,
								30.883179837179767
							],
							[
								107.84988244012249,
								30.809618435142653
							],
							[
								107.92951582179768,
								30.872663683182395
							],
							[
								107.93168623303325,
								30.948783067384596
							],
							[
								108.00677208936037,
								31.038622544694675
							],
							[
								108.03312706905905,
								31.222228908837053
							],
							[
								108.19404747880816,
								31.330930283805543
							],
							[
								108.22308963367965,
								31.46789866818898
							],
							[
								108.4067993506095,
								31.566032213216033
							],
							[
								108.5161983575681,
								31.708271593359342
							],
							[
								108.50069542865106,
								31.790824693304927
							],
							[
								108.28696170491878,
								31.922160345823244
							],
							[
								108.26778974799845,
								31.972906603157213
							],
							[
								108.34473595629936,
								32.0735464544054
							],
							[
								108.41920169500219,
								32.10000478779068
							],
							[
								108.38897098172544,
								32.18428904940015
							],
							[
								108.51836876790429,
								32.19756989203688
							],
							[
								108.78930830313567,
								32.04533112183378
							],
							[
								109.05590701679535,
								31.940634670753468
							],
							[
								109.18887047729072,
								31.84030487696853
							],
							[
								109.25258751799959,
								31.744005846392668
							],
							[
								109.3359932795662,
								31.705248521402126
							],
							[
								109.59396202962392,
								31.737597968171656
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 6,
					"name": "北京"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								117.35679568867022,
								40.25702627244448
							],
							[
								117.31059695758358,
								40.11047191005065
							],
							[
								117.23907677557281,
								40.0926177027448
							],
							[
								116.98767093336699,
								40.03435252494904
							],
							[
								116.82938602104804,
								40.03667796491612
							],
							[
								116.74422326119463,
								39.95900828710273
							],
							[
								116.78143029167472,
								39.88965851542821
							],
							[
								116.92219689257263,
								39.77359324783018
							],
							[
								116.87563642807868,
								39.686466783215565
							],
							[
								116.79341922401795,
								39.60231171281541
							],
							[
								116.60438683538416,
								39.611174221313405
							],
							[
								116.42827355418126,
								39.52141225836911
							],
							[
								116.38662234934213,
								39.44214061100047
							],
							[
								116.24978315616778,
								39.50580597576527
							],
							[
								116.21040571535138,
								39.57190013328457
							],
							[
								115.94540897034784,
								39.575388292335845
							],
							[
								115.75591149282116,
								39.50895823803222
							],
							[
								115.61845218292183,
								39.603732815217285
							],
							[
								115.46342288565768,
								39.643213608821014
							],
							[
								115.43732628837745,
								39.74930532478098
							],
							[
								115.51091352703781,
								39.83849884694433
							],
							[
								115.4964441259956,
								39.92363576927548
							],
							[
								115.42709435432107,
								39.96257396141925
							],
							[
								115.57762780218127,
								40.09631256827052
							],
							[
								115.81983524000441,
								40.151890570893215
							],
							[
								115.9452022638734,
								40.29371653898704
							],
							[
								115.72816124914243,
								40.539593003914035
							],
							[
								115.87445722911787,
								40.610234686781354
							],
							[
								115.99470828685799,
								40.59597199221372
							],
							[
								116.13035892072776,
								40.657983710579884
							],
							[
								116.20730512902855,
								40.75038117095434
							],
							[
								116.29143436100696,
								40.739890855378746
							],
							[
								116.45886600086527,
								40.791567287800234
							],
							[
								116.43819542897586,
								40.8997260613088
							],
							[
								116.65265262312016,
								41.0310100369837
							],
							[
								116.67580366370811,
								40.94013703089922
							],
							[
								116.91041466670356,
								40.74921845097086
							],
							[
								117.0580025569725,
								40.67720734344428
							],
							[
								117.19918256991969,
								40.690023098087465
							],
							[
								117.42852257715526,
								40.66904246693639
							],
							[
								117.41177941298974,
								40.597367255294614
							],
							[
								117.24310753788268,
								40.570159613974965
							],
							[
								117.1841447289961,
								40.49727000640564
							],
							[
								117.2379398949102,
								40.4501927761757
							],
							[
								117.25054894397863,
								40.33782237410338
							],
							[
								117.35679568867022,
								40.25702627244448
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 7,
					"name": "福建"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									119.7802840500002,
									25.617417710000097
								],
								[
									119.81861412900014,
									25.54580312700017
								],
								[
									119.79460696700028,
									25.463039455000143
								],
								[
									119.69605553500008,
									25.509344794000214
								],
								[
									119.7802840500002,
									25.617417710000097
								]
							]
						],
						[
							[
								[
									120.41920496712629,
									27.2063322962116
								],
								[
									120.27613366000014,
									27.316717841000155
								],
								[
									120.22567793100029,
									27.26862213700008
								],
								[
									120.42172285200024,
									27.153143622000186
								],
								[
									120.3579207690002,
									27.098374742000175
								],
								[
									120.28272545700031,
									27.112290757000153
								],
								[
									120.23739668100029,
									26.92723216400009
								],
								[
									120.12574303500014,
									26.92731354400007
								],
								[
									120.02450605600018,
									26.837876695000148
								],
								[
									120.12818444100026,
									26.79694245000013
								],
								[
									120.0796818370003,
									26.646063544000157
								],
								[
									119.98414147200003,
									26.653509833000044
								],
								[
									120.0776473320002,
									26.78558991100016
								],
								[
									119.94629967500009,
									26.79694245000013
								],
								[
									119.85694420700008,
									26.653509833000044
								],
								[
									119.81576582100001,
									26.79759349200009
								],
								[
									119.73267662900014,
									26.763413804000095
								],
								[
									119.58456464900019,
									26.79462311400016
								],
								[
									119.55209394600013,
									26.749090887000193
								],
								[
									119.55420983200031,
									26.6151797550001
								],
								[
									119.67505944100014,
									26.618801174000055
								],
								[
									119.78492272200015,
									26.577826239000046
								],
								[
									119.81885826900009,
									26.453192450000103
								],
								[
									119.65430748800014,
									26.429022528000075
								],
								[
									119.68189537900025,
									26.317124742000175
								],
								[
									119.74708092500009,
									26.327622789000145
								],
								[
									119.82577558700018,
									26.426947333000157
								],
								[
									119.88013756600009,
									26.363104559000135
								],
								[
									119.78492272200015,
									26.296616929000038
								],
								[
									119.67359459700026,
									26.28050364800015
								],
								[
									119.45850670700008,
									25.982489325000216
								],
								[
									119.19516035200013,
									26.087591864000103
								],
								[
									119.24683678500014,
									25.967230536000045
								],
								[
									119.34669030000032,
									25.94037506700016
								],
								[
									119.44092858200031,
									25.963812567000048
								],
								[
									119.5664168630002,
									26.05023834800005
								],
								[
									119.69898522200003,
									25.972560940000108
								],
								[
									119.61646569100003,
									25.892645575000188
								],
								[
									119.59302819100014,
									25.693182684000078
								],
								[
									119.53541100400025,
									25.70587799700013
								],
								[
									119.45972741000026,
									25.63287995000013
								],
								[
									119.55844160200013,
									25.563788153000218
								],
								[
									119.64600670700008,
									25.392564195000233
								],
								[
									119.48324629000024,
									25.371161200000188
								],
								[
									119.50489342500032,
									25.4749209660001
								],
								[
									119.36597741000026,
									25.520697333000186
								],
								[
									119.30518639400032,
									25.60455963700008
								],
								[
									119.23780358200031,
									25.48175690300019
								],
								[
									119.10962975400003,
									25.406805731000134
								],
								[
									119.22315514400032,
									25.316595770000134
								],
								[
									119.28866621200018,
									25.325425523000177
								],
								[
									119.3442488940002,
									25.242377020000106
								],
								[
									119.28882897200015,
									25.18911367400011
								],
								[
									119.17562910200013,
									25.176499742000146
								],
								[
									119.14197462600009,
									25.22097841700017
								],
								[
									118.9873153000002,
									25.22223541900007
								],
								[
									118.8779403000002,
									25.04071686400016
								],
								[
									118.9799910820002,
									25.011786200000074
								],
								[
									118.99732506600009,
									24.95343659100007
								],
								[
									118.71607506600026,
									24.843573309000107
								],
								[
									118.74683678500026,
									24.720689195000205
								],
								[
									118.57113691500012,
									24.568996486000145
								],
								[
									118.42188561300009,
									24.62449778900009
								],
								[
									118.3516544930003,
									24.582342841000155
								],
								[
									118.13095136800018,
									24.620062567000105
								],
								[
									118.04476972700013,
									24.575995184000192
								],
								[
									117.9961043630002,
									24.44696686400016
								],
								[
									118.12647545700031,
									24.26203034100007
								],
								[
									117.98926842500009,
									24.193101304000038
								],
								[
									117.94361412900014,
									24.212591864000103
								],
								[
									117.89364668100029,
									24.02802155200004
								],
								[
									117.69507897200026,
									23.95355866100016
								],
								[
									117.58236738400024,
									23.889308986000117
								],
								[
									117.53736412900025,
									23.919378973000164
								],
								[
									117.46347744400009,
									23.788287134000115
								],
								[
									117.29232832100007,
									23.76215241100016
								],
								[
									117.26364898600008,
									23.655424769000092
								],
								[
									117.17462224764046,
									23.61634769773326
								],
								[
									117.03650516188372,
									23.738267117533525
								],
								[
									116.92483239090234,
									24.077600409131605
								],
								[
									116.96767215414661,
									24.18511322749356
								],
								[
									116.88240604060638,
									24.393989365716806
								],
								[
									116.74856408096753,
									24.551499132578954
								],
								[
									116.74530846591301,
									24.670923367119713
								],
								[
									116.60376671775975,
									24.65583384935269
								],
								[
									116.529559360576,
									24.615371202019446
								],
								[
									116.37210127235585,
									24.841300564569394
								],
								[
									116.11470096217988,
									24.84605479639174
								],
								[
									116.03568769722938,
									24.89357127529425
								],
								[
									115.88753136617959,
									24.916773992725638
								],
								[
									115.8884615421664,
									24.99994721119495
								],
								[
									115.84283125186084,
									25.19474152290303
								],
								[
									115.90799523339342,
									25.23827891723826
								],
								[
									115.97874026904822,
									25.35083018646401
								],
								[
									116.02757449756507,
									25.63636831304717
								],
								[
									116.12369266188682,
									25.764241644936106
								],
								[
									116.13516483029264,
									25.866328437007724
								],
								[
									116.32321536699573,
									25.955108547121768
								],
								[
									116.39726769364916,
									26.061458645500153
								],
								[
									116.41928185357472,
									26.152874253943736
								],
								[
									116.39897301599194,
									26.287543035882436
								],
								[
									116.50165408726639,
									26.40704478568844
								],
								[
									116.59446495969019,
									26.39508169176665
								],
								[
									116.6194763531513,
									26.49207835523191
								],
								[
									116.54232344017453,
									26.562797553364447
								],
								[
									116.50496137916434,
									26.68930145879537
								],
								[
									116.54526899596749,
									26.867869371174635
								],
								[
									116.66970584474893,
									26.986906032987093
								],
								[
									116.92343712782116,
									27.02101247804353
								],
								[
									117.04012251214431,
									27.109534207537763
								],
								[
									117.15381066293185,
									27.27639740751445
								],
								[
									117.10110070173607,
									27.346651515854802
								],
								[
									117.12466515527262,
									27.429928087111676
								],
								[
									117.11226281088017,
									27.567619941007592
								],
								[
									117.22512413936761,
									27.723450222150092
								],
								[
									117.2871358577338,
									27.772620348350415
								],
								[
									117.28424197788496,
									27.857033800269818
								],
								[
									117.54443281512238,
									27.966665351224947
								],
								[
									117.6052559750832,
									27.86615469028675
								],
								[
									117.74555748888702,
									27.81328970035935
								],
								[
									117.82343387317462,
									27.9372614611475
								],
								[
									118.06130049032527,
									27.979016017875068
								],
								[
									118.13070193884346,
									28.040536810725314
								],
								[
									118.36779340963824,
									28.099706326086164
								],
								[
									118.34887983603556,
									28.219802354195366
								],
								[
									118.44644494028171,
									28.288687038775805
								],
								[
									118.49889651905926,
									28.262435410965566
								],
								[
									118.73521284439732,
									28.325971585420376
								],
								[
									118.7970178571884,
									28.21292938888027
								],
								[
									118.76565026324903,
									28.178176987777903
								],
								[
									118.74813195182816,
									27.973202419755893
								],
								[
									118.81980716436931,
									27.909950466141083
								],
								[
									118.88946699440646,
									27.722158310957298
								],
								[
									118.92269494031927,
									27.549998276799045
								],
								[
									119.00527387868658,
									27.48005422592189
								],
								[
									119.18583133334937,
									27.4199286970518
								],
								[
									119.26561974465551,
									27.42411448809321
								],
								[
									119.39036665269896,
									27.51261037916572
								],
								[
									119.46731286010049,
									27.5252969434992
								],
								[
									119.51170291605695,
									27.636711331162985
								],
								[
									119.61583092725562,
									27.665572617981923
								],
								[
									119.68657596201103,
									27.511292630450612
								],
								[
									119.69339725138207,
									27.41104035103143
								],
								[
									119.77008507726453,
									27.31587820111818
								],
								[
									120.06443403460298,
									27.343628444796963
								],
								[
									120.14773644428158,
									27.400214137772338
								],
								[
									120.34400353433568,
									27.379646917771083
								],
								[
									120.40580854712687,
									27.296861273828824
								],
								[
									120.41920496712629,
									27.2063322962116
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 8,
					"name": "安徽"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								119.62978356256133,
								31.13288035704295
							],
							[
								119.57495486877224,
								30.847058010518765
							],
							[
								119.5005408060133,
								30.769388332705375
							],
							[
								119.44312828983868,
								30.639215400170542
							],
							[
								119.35062747577729,
								30.675363064353974
							],
							[
								119.24153852808075,
								30.550848700307313
							],
							[
								119.3208101754492,
								30.518163356753632
							],
							[
								119.36287479143857,
								30.404475205966094
							],
							[
								119.21068769717942,
								30.313731391090926
							],
							[
								119.05751875188889,
								30.31187103911722
							],
							[
								118.93468387266262,
								30.352126979976134
							],
							[
								118.88109541232336,
								30.324350897875718
							],
							[
								118.9094657736265,
								30.222212428960404
							],
							[
								118.85272505102029,
								30.15927053550689
							],
							[
								118.89396284381036,
								29.982588813522966
							],
							[
								118.82011722183222,
								29.880036933457802
							],
							[
								118.74131066335633,
								29.82836050103643
							],
							[
								118.7237406759914,
								29.730201116688193
							],
							[
								118.55692915285806,
								29.625220444767848
							],
							[
								118.37321943592826,
								29.4528278675121
							],
							[
								118.17473025869447,
								29.407869370774904
							],
							[
								118.11344201074019,
								29.518663641713715
							],
							[
								117.98590457563569,
								29.572019558056184
							],
							[
								117.89857140544603,
								29.54897186935625
							],
							[
								117.70767866393919,
								29.555638129096366
							],
							[
								117.64918094304613,
								29.60586762069417
							],
							[
								117.52737959169485,
								29.622352403340727
							],
							[
								117.40216759655743,
								29.773066718354357
							],
							[
								117.40630171075543,
								29.8311768665192
							],
							[
								117.27426842714618,
								29.829471544176386
							],
							[
								117.22553755141678,
								29.906676133996342
							],
							[
								117.1251819192102,
								29.910551865775943
							],
							[
								117.06709761036643,
								29.84058197737633
							],
							[
								117.0790865418104,
								29.710202338367168
							],
							[
								116.95506310417892,
								29.6539008653327
							],
							[
								116.88834882993456,
								29.560521552127938
							],
							[
								116.74856408096753,
								29.544863593579947
							],
							[
								116.64846683207861,
								29.62741669442491
							],
							[
								116.67497684140807,
								29.70800609050866
							],
							[
								116.79791507432122,
								29.755935981460368
							],
							[
								116.88679853722283,
								29.920422065525912
							],
							[
								116.79140384331271,
								30.02201793118263
							],
							[
								116.65048221188454,
								30.0506725124265
							],
							[
								116.49250735882765,
								29.88471365001493
							],
							[
								116.38951622919058,
								29.876057847991262
							],
							[
								116.23619225516842,
								29.78133494675035
							],
							[
								116.14725711542354,
								29.788776352846384
							],
							[
								116.07806237158115,
								29.9687136907842
							],
							[
								116.04049360589516,
								30.221437283503775
							],
							[
								115.91202599480386,
								30.315591742165196
							],
							[
								115.87678266818557,
								30.38979909934892
							],
							[
								115.946649204697,
								30.48829437958196
							],
							[
								115.76784874922032,
								30.68815298147493
							],
							[
								115.77529015531644,
								30.75481557887585
							],
							[
								115.86220991435607,
								30.784839586577647
							],
							[
								115.85864424003955,
								30.860958970779876
							],
							[
								116.0359977555919,
								30.988883979512053
							],
							[
								115.94644249912204,
								31.03404918092494
							],
							[
								115.87693769691714,
								31.129366360469135
							],
							[
								115.76836551315785,
								31.143551541570446
							],
							[
								115.6687333522624,
								31.21721629549566
							],
							[
								115.54998091039067,
								31.18269643838991
							],
							[
								115.37402265791923,
								31.417539985382007
							],
							[
								115.38973229420992,
								31.511746120886755
							],
							[
								115.53153242388225,
								31.736383572244108
							],
							[
								115.6629455907663,
								31.78395172798983
							],
							[
								115.90132897275384,
								31.794493720408838
							],
							[
								115.92814904224451,
								32.02458303557859
							],
							[
								115.8884615421664,
								32.39386282051271
							],
							[
								115.79006961472095,
								32.470705675126794
							],
							[
								115.69384809761158,
								32.49181549748724
							],
							[
								115.64661583865,
								32.40244110817062
							],
							[
								115.56476036979518,
								32.40244110817062
							],
							[
								115.36673628055485,
								32.55951162456185
							],
							[
								115.1993046406966,
								32.59147349680447
							],
							[
								115.18473188686698,
								32.859054063294394
							],
							[
								114.92521284409753,
								32.95824697551757
							],
							[
								114.88655887279367,
								33.08340729381155
							],
							[
								114.96918948800442,
								33.12374074993568
							],
							[
								115.1428222996094,
								33.0842599554326
							],
							[
								115.25098107311806,
								33.12064016451197
							],
							[
								115.3453422382538,
								33.25060639147176
							],
							[
								115.3156799657578,
								33.373983873057256
							],
							[
								115.34642744387145,
								33.45304881395157
							],
							[
								115.44259728413732,
								33.548081773555
							],
							[
								115.63473025909423,
								33.5918258734653
							],
							[
								115.57354536302813,
								33.750188300149915
							],
							[
								115.62992435132782,
								33.83876170468892
							],
							[
								115.56134972510972,
								33.898137926524015
							],
							[
								115.65364383269673,
								34.04841299106664
							],
							[
								115.73296715690867,
								34.06556956638235
							],
							[
								115.84112593041732,
								34.006916815858375
							],
							[
								115.96137698815744,
								34.000147203330755
							],
							[
								115.97067874622718,
								33.90480418626424
							],
							[
								116.07961266519226,
								33.778351955878094
							],
							[
								116.18203535404831,
								33.71832977979548
							],
							[
								116.42067711755487,
								33.79083181373721
							],
							[
								116.44532677581003,
								33.845014553279015
							],
							[
								116.64118045471412,
								33.95322500273164
							],
							[
								116.54294355689962,
								34.12091502500846
							],
							[
								116.57508629809416,
								34.19212514955598
							],
							[
								116.55209028533835,
								34.28684804899822
							],
							[
								116.40098839669713,
								34.2750141462858
							],
							[
								116.15671390222474,
								34.447303372552625
							],
							[
								116.15128787593477,
								34.566727607093384
							],
							[
								116.26688805464005,
								34.57670115783219
							],
							[
								116.37721723758551,
								34.63953970029695
							],
							[
								116.428118523651,
								34.63969472902858
							],
							[
								116.62485070169856,
								34.48500132944778
							],
							[
								116.76954471211889,
								34.45182506037821
							],
							[
								116.80225589409417,
								34.40007111269176
							],
							[
								116.94948205005653,
								34.38929657627608
							],
							[
								116.96953250522097,
								34.275401719913475
							],
							[
								117.03392134039751,
								34.15553823490163
							],
							[
								117.15944339389756,
								34.09117523904604
							],
							[
								117.32129397963342,
								34.07885040901925
							],
							[
								117.39172895692593,
								34.031256414851725
							],
							[
								117.50345340385161,
								34.04975657820364
							],
							[
								117.65088626538886,
								33.98247386317826
							],
							[
								117.74555748888702,
								33.882273261501894
							],
							[
								117.7522237486271,
								33.7243500843889
							],
							[
								118.1236739438973,
								33.76600128832888
							],
							[
								118.17674564029915,
								33.69262075524375
							],
							[
								117.93185102730308,
								33.235129299177856
							],
							[
								118.08073082876479,
								33.14955312817443
							],
							[
								118.21803510993243,
								33.17991303176103
							],
							[
								118.23901574108368,
								32.923701279990155
							],
							[
								118.29968387321219,
								32.77740530001455
							],
							[
								118.39910932763337,
								32.73089651146492
							],
							[
								118.72017500167516,
								32.73213674581419
							],
							[
								118.74823530461572,
								32.83853852013658
							],
							[
								118.85737593005524,
								32.97230296540948
							],
							[
								118.99297488798061,
								32.962045192931384
							],
							[
								119.19037885959676,
								32.71123362902887
							],
							[
								119.19937055930387,
								32.59372142240571
							],
							[
								119.08051476374533,
								32.446081855293414
							],
							[
								118.89132734637997,
								32.595685126267625
							],
							[
								118.75185265487613,
								32.61250580479907
							],
							[
								118.55181318582993,
								32.574446112697956
							],
							[
								118.66787845342787,
								32.45321320212753
							],
							[
								118.68405317591339,
								32.33924083139925
							],
							[
								118.650360142007,
								32.23787750884003
							],
							[
								118.51439944887557,
								32.1997661398955
							],
							[
								118.49905154779071,
								32.13767690716358
							],
							[
								118.38314131072286,
								32.053961087234484
							],
							[
								118.35198042235857,
								31.946680812869317
							],
							[
								118.48106815017502,
								31.858701687532886
							],
							[
								118.47688235913358,
								31.790230414102467
							],
							[
								118.68436323517517,
								31.70085602478585
							],
							[
								118.68074588401538,
								31.64675080050918
							],
							[
								118.86047651637807,
								31.627372138013868
							],
							[
								118.88094038269253,
								31.52244314203739
							],
							[
								118.82724856956588,
								31.397541205262513
							],
							[
								118.75102583167688,
								31.35795705797193
							],
							[
								118.81608646042179,
								31.22633718551279
							],
							[
								119.0747270040481,
								31.23884288179363
							],
							[
								119.16288699833638,
								31.287444566313752
							],
							[
								119.31683108908351,
								31.266722317580985
							],
							[
								119.36277143775169,
								31.192359930766145
							],
							[
								119.62978356256133,
								31.13288035704295
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 9,
					"name": "广东"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									110.38982181100027,
									21.09589264500019
								],
								[
									110.52637780000009,
									21.082098700000103
								],
								[
									110.52076256600026,
									20.97235748900019
								],
								[
									110.24586022200026,
									21.027573960000097
								],
								[
									110.38982181100027,
									21.09589264500019
								]
							]
						],
						[
							[
								[
									112.86255944100014,
									21.769435940000108
								],
								[
									112.7343856130002,
									21.628729559000078
								],
								[
									112.71168053500014,
									21.7025414080002
								],
								[
									112.77751712300028,
									21.772650458000157
								],
								[
									112.86255944100014,
									21.769435940000108
								]
							]
						],
						[
							[
								[
									113.64183151700024,
									22.601623679000056
								],
								[
									113.49136813500002,
									22.705773852000107
								],
								[
									113.52550121900015,
									22.744872770000143
								],
								[
									113.63568652400022,
									22.65647495100015
								],
								[
									113.64183151700024,
									22.601623679000056
								]
							]
						],
						[
							[
								[
									113.9275476417103,
									25.44811106987001
								],
								[
									114.01209028483879,
									25.435114448073392
								],
								[
									114.02604292194326,
									25.267656968893988
								],
								[
									114.11497806168825,
									25.30842967369057
								],
								[
									114.27884402902868,
									25.291815700734077
								],
								[
									114.42922244725821,
									25.385970160294676
								],
								[
									114.56931725458765,
									25.406873277080166
								],
								[
									114.58047936373163,
									25.360054430167793
								],
								[
									114.7069315941178,
									25.28956777603213
								],
								[
									114.68305708221862,
									25.163451443329535
								],
								[
									114.72930748924932,
									25.118880520219818
								],
								[
									114.54823326974963,
									25.054465847520817
								],
								[
									114.4135128109674,
									24.97969005045553
								],
								[
									114.38359215695255,
									24.88468292927388
								],
								[
									114.30163333531016,
									24.75864411093704
								],
								[
									114.19233768113918,
									24.695262966112978
								],
								[
									114.28938602144785,
									24.595630805217553
								],
								[
									114.42488162568645,
									24.499590156160878
								],
								[
									114.4981071309395,
									24.555839952351903
								],
								[
									114.74046959839342,
									24.62524140087004
								],
								[
									114.8626843608946,
									24.587827663915647
								],
								[
									114.94464318163762,
									24.669967352711183
								],
								[
									115.0469625177061,
									24.706657620153123
								],
								[
									115.13910159656155,
									24.684152532913117
								],
								[
									115.23966393434307,
									24.746112576234395
								],
								[
									115.42058312421193,
									24.784559841063924
								],
								[
									115.59917687411337,
									24.609066677485202
								],
								[
									115.70578535401091,
									24.545711371082916
								],
								[
									115.7992163431598,
									24.572738145249247
								],
								[
									115.74909020434939,
									24.747740383312077
								],
								[
									115.78727908676052,
									24.86091177016209
								],
								[
									115.88753136617959,
									24.916773992725638
								],
								[
									116.03568769722938,
									24.89357127529425
								],
								[
									116.11470096217988,
									24.84605479639174
								],
								[
									116.37210127235585,
									24.841300564569394
								],
								[
									116.529559360576,
									24.615371202019446
								],
								[
									116.60376671775975,
									24.65583384935269
								],
								[
									116.74530846591301,
									24.670923367119713
								],
								[
									116.74856408096753,
									24.551499132578954
								],
								[
									116.88240604060638,
									24.393989365716806
								],
								[
									116.96767215414661,
									24.18511322749356
								],
								[
									116.92483239090234,
									24.077600409131605
								],
								[
									117.03650516188372,
									23.738267117533525
								],
								[
									117.17462224764046,
									23.61634769773326
								],
								[
									117.0234481130002,
									23.658677476000094
								],
								[
									116.9175724620003,
									23.63792552300012
								],
								[
									116.8549910820002,
									23.524888414000173
								],
								[
									116.86662820400034,
									23.45023293100016
								],
								[
									116.74863483000013,
									23.326288333000093
								],
								[
									116.73129316500012,
									23.257717190000193
								],
								[
									116.53364811400013,
									23.109134538000205
								],
								[
									116.56325009500017,
									23.01877372100006
								],
								[
									116.494687913,
									22.939352413000165
								],
								[
									116.37960727900008,
									22.928984413000194
								],
								[
									116.2984870700003,
									22.96324673700019
								],
								[
									116.17098930300017,
									22.864465269000164
								],
								[
									116.07617780700025,
									22.86787148000019
								],
								[
									115.95801360200028,
									22.804743209000037
								],
								[
									115.80990644600024,
									22.808335679000095
								],
								[
									115.65333092500009,
									22.893744208000044
								],
								[
									115.58399498800031,
									22.88031647300005
								],
								[
									115.5239363940002,
									22.741766669000185
								],
								[
									115.37350802300011,
									22.6941772670001
								],
								[
									115.33057039700032,
									22.788540419000213
								],
								[
									115.24561608200031,
									22.835353908000144
								],
								[
									115.06547548000003,
									22.79598479800012
								],
								[
									114.86581619100025,
									22.601744611000214
								],
								[
									114.74377585100012,
									22.60940429200008
								],
								[
									114.75254524100023,
									22.7496618670001
								],
								[
									114.71673233300021,
									22.79080340000013
								],
								[
									114.56332441500012,
									22.732733466000184
								],
								[
									114.52378006100025,
									22.68721393200019
								],
								[
									114.5371199880002,
									22.567206122000186
								],
								[
									114.61768639400032,
									22.51414622600018
								],
								[
									114.5158162140001,
									22.452642803000174
								],
								[
									114.47958418100029,
									22.54621002800016
								],
								[
									114.39559980600006,
									22.613511460000183
								],
								[
									114.22982832100013,
									22.555812893000137
								],
								[
									114.08236738400024,
									22.52936432500016
								],
								[
									113.95193877700024,
									22.52384115100014
								],
								[
									113.89034489800031,
									22.452712399000063
								],
								[
									113.77293351100008,
									22.672447513000208
								],
								[
									113.74439537900014,
									22.761175848000107
								],
								[
									113.66260826900009,
									22.79808177300015
								],
								[
									113.58383222700013,
									22.978461005000128
								],
								[
									113.50384399300003,
									22.989832793000176
								],
								[
									113.36793053500026,
									22.880682684000135
								],
								[
									113.49423261800013,
									22.77484772300005
								],
								[
									113.43954511800018,
									22.739447333000044
								],
								[
									113.59916999500012,
									22.575179846000196
								],
								[
									113.5463548370002,
									22.43758548800008
								],
								[
									113.58765470100002,
									22.237882255000045
								],
								[
									113.48374549000027,
									22.1551421690001
								],
								[
									113.30274498800014,
									22.183294989000046
								],
								[
									113.23056074300007,
									22.043158270000163
								],
								[
									113.15746661600019,
									22.024699645000112
								],
								[
									113.11060631600014,
									22.099188544000185
								],
								[
									113.0266139480002,
									22.143212451000068
								],
								[
									113.0286183420003,
									21.96114836100014
								],
								[
									112.95708123400004,
									21.875653459000148
								],
								[
									112.87940514400032,
									21.87518952000005
								],
								[
									112.82601972700007,
									21.96613190300019
								],
								[
									112.64511152400007,
									21.849351304000038
								],
								[
									112.6080021490003,
									21.775091864000103
								],
								[
									112.44320722700024,
									21.82843659100007
								],
								[
									112.36329186300009,
									21.73334381700016
								],
								[
									112.24488366000026,
									21.70652903900009
								],
								[
									112.17269941500007,
									21.81443919500012
								],
								[
									111.99195397200003,
									21.763820705000114
								],
								[
									111.69044030000009,
									21.603827216000155
								],
								[
									111.63046308700018,
									21.529852606000077
								],
								[
									111.4379988940002,
									21.53408437700017
								],
								[
									111.30128014400003,
									21.499335028000132
								],
								[
									111.20630944100014,
									21.532049872000158
								],
								[
									110.86939537900008,
									21.384711005000156
								],
								[
									110.79053795700003,
									21.40375397300005
								],
								[
									110.67628014400009,
									21.30963776200022
								],
								[
									110.63648522200026,
									21.23016998900013
								],
								[
									110.48145592500009,
									21.21718984600011
								],
								[
									110.4195255870003,
									21.377427476000037
								],
								[
									110.36280358200003,
									21.28766510600019
								],
								[
									110.3940535820002,
									21.16254303600016
								],
								[
									110.26929772200026,
									21.089178778000132
								],
								[
									110.1567488940002,
									20.98602936400013
								],
								[
									110.1567488940002,
									20.84886302300015
								],
								[
									110.3862410820002,
									20.825995184000163
								],
								[
									110.33749433700018,
									20.725816148000035
								],
								[
									110.40853925900024,
									20.585923570000205
								],
								[
									110.47885175900007,
									20.567694403000132
								],
								[
									110.53419030000009,
									20.478257554000038
								],
								[
									110.3999943370003,
									20.30076732000012
								],
								[
									110.2802840500002,
									20.252997137000165
								],
								[
									110.12753339900019,
									20.247992255000128
								],
								[
									110.02711022200003,
									20.30076732000012
								],
								[
									110.01547285200013,
									20.418402411000187
								],
								[
									109.82211347700024,
									20.51654694200016
								],
								[
									109.80201256600003,
									20.61627838700008
								],
								[
									109.74586022200003,
									20.629787502000056
								],
								[
									109.77320397200026,
									20.821519273000092
								],
								[
									109.68946373800009,
									20.835394598000164
								],
								[
									109.66122480600018,
									20.927557684000135
								],
								[
									109.70980879000024,
									21.057196356000134
								],
								[
									109.67017662900014,
									21.123236395000163
								],
								[
									109.77320397200026,
									21.215399481000134
								],
								[
									109.80738366000026,
									21.355943101000122
								],
								[
									109.9047957690002,
									21.390692450000074
								],
								[
									109.91797936300009,
									21.489406643000137
								],
								[
									109.80274498800003,
									21.47333405200004
								],
								[
									109.74805748798155,
									21.57493724193023
								],
								[
									109.91724978994603,
									21.687152004561483
								],
								[
									109.96722090092396,
									21.866727607293342
								],
								[
									110.14235233019582,
									21.8974492460859
								],
								[
									110.21614627533052,
									21.87453074769587
								],
								[
									110.3558793483532,
									21.888974311215577
								],
								[
									110.35546593630391,
									22.100770169507825
								],
								[
									110.33355512916603,
									22.1904546171869
								],
								[
									110.46672529523619,
									22.150999661105516
								],
								[
									110.64237348844574,
									22.183452459763316
								],
								[
									110.75456302336488,
									22.580172430912967
								],
								[
									111.02379723535421,
									22.638670151806025
								],
								[
									111.06601688007493,
									22.740576076724665
								],
								[
									111.18146203004869,
									22.748534246758197
								],
								[
									111.35121910987402,
									22.908214423057245
								],
								[
									111.41095706601595,
									23.052598375114997
								],
								[
									111.36997765474496,
									23.139104723004607
								],
								[
									111.36284630701164,
									23.27302419700922
								],
								[
									111.39121666921386,
									23.431257433383934
								],
								[
									111.46929975817739,
									23.55791636844566
								],
								[
									111.47100507962091,
									23.613235989549253
								],
								[
									111.60117801305483,
									23.658013617334632
								],
								[
									111.65750532361176,
									23.841697495842766
								],
								[
									111.79331098801185,
									23.849190578782242
								],
								[
									111.80788374184118,
									23.909238593286545
								],
								[
									111.8991443215532,
									23.990861518144612
								],
								[
									111.86932702032573,
									24.231828722517605
								],
								[
									111.97593550022327,
									24.27676137903447
								],
								[
									112.04730065260321,
									24.381457831014075
								],
								[
									111.99092166520262,
									24.46587128293345
								],
								[
									112.00554609587584,
									24.553075262813195
								],
								[
									111.93325076660972,
									24.60136688897086
								],
								[
									111.93247562115312,
									24.698286038070194
								],
								[
									111.99655439706783,
									24.735673935703687
								],
								[
									112.06636925673592,
									24.796574611828873
								],
								[
									112.1447624040618,
									24.793551540771034
								],
								[
									112.16476118418154,
									24.91199392338092
								],
								[
									112.12099124584938,
									24.949278469126057
								],
								[
									112.21395714700475,
									25.200374253868773
								],
								[
									112.45838667200735,
									25.164252428107147
								],
								[
									112.66333540160758,
									25.113144436466598
								],
								[
									112.71408165894161,
									24.999507962522586
								],
								[
									112.8078227073521,
									24.942844754281964
								],
								[
									112.98889692595242,
									24.963928738220716
								],
								[
									112.95876956636232,
									25.056145331441996
								],
								[
									112.9690531763631,
									25.18058218022344
								],
								[
									112.88910973542608,
									25.241457017927075
								],
								[
									112.91737674394165,
									25.3248627794938
								],
								[
									113.08976932209657,
									25.41415965444446
								],
								[
									113.21746178593276,
									25.505575262888158
								],
								[
									113.42163537007639,
									25.383799749958598
								],
								[
									113.52343794220735,
									25.38558258756646
								],
								[
									113.58245242703799,
									25.325947984212064
								],
								[
									113.7138655948213,
									25.360907090889555
								],
								[
									113.82807051044563,
									25.356747138269867
								],
								[
									113.9275476417103,
									25.44811106987001
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 10,
					"name": "西藏"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								89.67781334810746,
								36.081958115774455
							],
							[
								89.51467085207815,
								36.053251857687144
							],
							[
								89.43514082229115,
								35.98780365711312
							],
							[
								89.48464684437636,
								35.88018748596369
							],
							[
								89.58143680226658,
								35.839776516373064
							],
							[
								89.78876264777801,
								35.82685740804294
							],
							[
								89.71507205633037,
								35.642346707234736
							],
							[
								89.69026736934364,
								35.50858226196186
							],
							[
								89.73010989815322,
								35.44365082532536
							],
							[
								89.4843367860139,
								35.34220998840027
							],
							[
								89.45482954314889,
								35.21283803974367
							],
							[
								89.57166995620355,
								35.07331167229586
							],
							[
								89.58360721170345,
								34.9409166534808
							],
							[
								89.78767744305958,
								34.926395574696045
							],
							[
								89.82524620964489,
								34.84609040035167
							],
							[
								89.72390872640653,
								34.73963694918584
							],
							[
								89.7910880877451,
								34.55411855712569
							],
							[
								89.79573896677988,
								34.40841685635283
							],
							[
								89.84028405056841,
								34.38332794942528
							],
							[
								89.78659223834114,
								34.1985330268777
							],
							[
								89.63673058494862,
								34.093371486904545
							],
							[
								89.74189212402234,
								33.909506741243064
							],
							[
								89.87723270132818,
								33.82274201093509
							],
							[
								89.97510786303741,
								33.630557359134826
							],
							[
								90.14057579993317,
								33.57820913314501
							],
							[
								90.2032076350244,
								33.500074368237534
							],
							[
								90.2056881037231,
								33.40150157273936
							],
							[
								90.32320031124539,
								33.28871776041629
							],
							[
								90.43626834530784,
								33.28218069098608
							],
							[
								90.66033735588434,
								33.155857651809214
							],
							[
								90.80404951437367,
								33.14053559004543
							],
							[
								90.94993208229971,
								33.23939260548434
							],
							[
								91.12790571457708,
								33.25432709451982
							],
							[
								91.18919396432995,
								33.336957708831164
							],
							[
								91.36158654158561,
								33.336957708831164
							],
							[
								91.37646935377774,
								33.27125112583877
							],
							[
								91.54266076018592,
								33.08033254680956
							],
							[
								91.72032433500016,
								32.98250906014505
							],
							[
								91.81313520742384,
								32.9682722030997
							],
							[
								91.97684614513349,
								32.84861542456224
							],
							[
								92.08609012156182,
								32.885641587888955
							],
							[
								92.19610924704409,
								32.86864004220416
							],
							[
								92.22137902202428,
								32.74497833887918
							],
							[
								92.46580854702677,
								32.769421292458674
							],
							[
								92.64998335195008,
								32.74043081353125
							],
							[
								92.72729129365831,
								32.760558783061384
							],
							[
								92.8500228209964,
								32.728881129860184
							],
							[
								93.00593061740403,
								32.73461721451278
							],
							[
								93.03125206922755,
								32.663510444551406
							],
							[
								93.21852745957455,
								32.659789741503346
							],
							[
								93.34534142516662,
								32.57770172775258
							],
							[
								93.51039594911373,
								32.51610342143573
							],
							[
								93.59716067942185,
								32.56457591384728
							],
							[
								93.7341549013276,
								32.57245657041443
							],
							[
								93.87740197092415,
								32.495381170904295
							],
							[
								94.11077273957022,
								32.47822459648796
							],
							[
								94.17826216017056,
								32.52225291633897
							],
							[
								94.31685835163165,
								32.54075307879154
							],
							[
								94.582216830942,
								32.67219208409742
							],
							[
								94.7218465511774,
								32.592868760784654
							],
							[
								94.75522952672128,
								32.535456243710655
							],
							[
								94.93893924365113,
								32.428150132722436
							],
							[
								94.9513415871445,
								32.33722544979463
							],
							[
								95.06182579972085,
								32.261209418379906
							],
							[
								95.259074741706,
								32.24407868148589
							],
							[
								95.38211632740655,
								32.1700521923548
							],
							[
								95.42526614811419,
								32.094759630452614
							],
							[
								95.35431440598506,
								31.954406439805382
							],
							[
								95.40676598476233,
								31.810668442894325
							],
							[
								95.49709638938685,
								31.741654568003867
							],
							[
								95.5926977879725,
								31.761575832858398
							],
							[
								95.84885786290005,
								31.714266059530956
							],
							[
								96.0942175638894,
								31.70054596642322
							],
							[
								96.21462365126052,
								31.6067532411692
							],
							[
								96.21291832891774,
								31.735117499473034
							],
							[
								96.14775434828454,
								31.77992096657931
							],
							[
								96.18263593969681,
								31.871155706970285
							],
							[
								96.27818566323776,
								31.909060370339773
							],
							[
								96.48323774562544,
								31.753462633193948
							],
							[
								96.79541507364672,
								31.715454617036983
							],
							[
								96.75288536966406,
								31.83867706989085
							],
							[
								96.75412560401344,
								31.97383677824473
							],
							[
								97.01808882024284,
								32.022903550758315
							],
							[
								97.12407718341524,
								32.009338487281354
							],
							[
								97.25487023267505,
								32.075794379107236
							],
							[
								97.25440514468164,
								32.20395193093691
							],
							[
								97.35977339112912,
								32.260485947968135
							],
							[
								97.39315636577362,
								32.38497447449237
							],
							[
								97.32628706279775,
								32.423576768952785
							],
							[
								97.36085859584756,
								32.50018707957008
							],
							[
								97.56229332887398,
								32.48434825296948
							],
							[
								97.63086795509201,
								32.44409231211051
							],
							[
								97.7157206556837,
								32.544189560999484
							],
							[
								98.01415205307472,
								32.46450450338011
							],
							[
								98.2057682640941,
								32.355648097881414
							],
							[
								98.22018598829271,
								32.252191881150424
							],
							[
								98.30958621603105,
								32.12871104587808
							],
							[
								98.45298831615781,
								31.984094549823624
							],
							[
								98.42084557496327,
								31.8781837019163
							],
							[
								98.44549523321848,
								31.803614610425967
							],
							[
								98.55871829601256,
								31.677110704095668
							],
							[
								98.59215294839987,
								31.59882090955739
							],
							[
								98.88495161302654,
								31.354081326192244
							],
							[
								98.76780114071005,
								31.230367946923195
							],
							[
								98.68269005680071,
								31.315918281303652
							],
							[
								98.61137658126415,
								31.256180325161864
							],
							[
								98.62026492728461,
								31.187941595728063
							],
							[
								98.80304446822765,
								30.990976874583083
							],
							[
								98.77508751807454,
								30.90222260199147
							],
							[
								98.95430138470113,
								30.747865099194996
							],
							[
								98.90536380429614,
								30.663813381582287
							],
							[
								98.96070926292208,
								30.459975694222862
							],
							[
								98.98675418515751,
								30.144361883993753
							],
							[
								99.03408979690664,
								30.05532339146137
							],
							[
								99.05631066330642,
								29.91533193602001
							],
							[
								99.005461053185,
								29.8200922708416
							],
							[
								98.98675418515751,
								29.650903631797206
							],
							[
								99.04199629099605,
								29.562459418467398
							],
							[
								99.0625118350531,
								29.30828888582343
							],
							[
								99.10881391802786,
								29.223772081116635
							],
							[
								98.99016482984302,
								29.201990465187862
							],
							[
								99.00628787638436,
								29.07316111889051
							],
							[
								98.87347944462061,
								28.811807563468335
							],
							[
								98.7850093928692,
								29.000245672899467
							],
							[
								98.6648100119724,
								28.97417491314178
							],
							[
								98.63871341289365,
								28.878651028022517
							],
							[
								98.67814253055332,
								28.757056383145596
							],
							[
								98.58920739080844,
								28.670291652837506
							],
							[
								98.64041873613576,
								28.42413096796986
							],
							[
								98.5758231953842,
								28.317548326494006
							],
							[
								98.48988528827545,
								28.248069362710936
							],
							[
								98.40999352418174,
								28.250601508253055
							],
							[
								98.29976769402384,
								28.354807033817593
							],
							[
								98.23015953993087,
								28.20287832287633
							],
							[
								98.11500227621707,
								28.14388835708101
							],
							[
								97.9910518800001,
								28.21401540100004
							],
							[
								97.9929122320001,
								28.268921611000053
							],
							[
								97.8975175380001,
								28.355324605000135
							],
							[
								97.74000777200007,
								28.382609762000044
							],
							[
								97.69959680200009,
								28.488029683000093
							],
							[
								97.61360721800003,
								28.481983541000147
							],
							[
								97.52772098800011,
								28.529525859000074
							],
							[
								97.44534875500011,
								28.382971497000142
							],
							[
								97.43666711400004,
								28.286414083000096
							],
							[
								97.32349572800013,
								28.217477723000087
							],
							[
								97.11554976400004,
								28.36656423000008
							],
							[
								96.96579146400012,
								28.33046824200008
							],
							[
								96.88491343033621,
								28.4280400801797
							],
							[
								96.69867768434011,
								28.589108833473546
							],
							[
								96.6131099091528,
								28.609242427635365
							],
							[
								96.52754213396537,
								28.533741449528804
							],
							[
								96.4268741631567,
								28.518641253907532
							],
							[
								96.43517785700004,
								28.611226298000076
							],
							[
								96.59800971353144,
								28.709910398444038
							],
							[
								96.57666792800012,
								28.80852691700008
							],
							[
								96.45760542900013,
								28.994587911000025
							],
							[
								96.36656829155606,
								29.03653656346893
							],
							[
								96.35137318505014,
								29.09748208605737
							],
							[
								96.19533783029675,
								29.027014506491355
							],
							[
								96.17462528500005,
								29.108844503000086
							],
							[
								96.31642541500008,
								29.171863912000106
							],
							[
								96.36686161300008,
								29.244210917000146
							],
							[
								96.20542443800014,
								29.25694915800011
							],
							[
								96.14196578000008,
								29.36846689900011
							],
							[
								95.95373470035588,
								29.359218810159945
							],
							[
								95.86313352662813,
								29.323985020376853
							],
							[
								95.7447807210001,
								29.340432435000082
							],
							[
								95.71716496895556,
								29.218283651027747
							],
							[
								95.59233524600006,
								29.24968861900004
							],
							[
								95.51533736200014,
								29.209432679000088
							],
							[
								95.51130660000013,
								29.13178883900011
							],
							[
								95.30681276189614,
								29.13619233330698
							],
							[
								95.19153283800006,
								29.096829733000106
							],
							[
								94.98906457600003,
								29.153983867000136
							],
							[
								94.77657108500011,
								29.166696269000084
							],
							[
								94.70422408000013,
								29.284699402000058
							],
							[
								94.6304301350001,
								29.319451803000106
							],
							[
								94.52862756400003,
								29.231240133000114
							],
							[
								94.39643925000013,
								29.207081400000078
							],
							[
								94.27078578096348,
								29.097929973215656
							],
							[
								94.34731050114596,
								29.0243485115017
							],
							[
								94.2501829716835,
								28.93310749897637
							],
							[
								94.02684940600011,
								28.86418243500009
							],
							[
								93.62553023300006,
								28.672359518000064
							],
							[
								93.44621301300003,
								28.671894430000066
							],
							[
								93.15537805200012,
								28.49485097300004
							],
							[
								93.09315962700009,
								28.366641744000106
							],
							[
								92.85028039600013,
								28.191949565000044
							],
							[
								92.77917362500011,
								28.195902812000014
							],
							[
								92.65484012900009,
								28.10583079000014
							],
							[
								92.70134891800006,
								28.037824606000072
							],
							[
								92.62848514800004,
								27.915764873000114
							],
							[
								92.43903934800016,
								27.82328989700008
							],
							[
								92.30385380100006,
								27.786160380000098
							],
							[
								92.23491744000012,
								27.821171164000106
							],
							[
								92.06965621000012,
								27.794041037000028
							],
							[
								91.97508833800003,
								27.726577454000108
							],
							[
								91.77375695800004,
								27.763810323000115
							],
							[
								91.63288700400005,
								27.75944366500005
							],
							[
								91.62172489400012,
								27.950723979000088
							],
							[
								91.41884322100009,
								27.994726461000056
							],
							[
								91.26970503800004,
								28.07286122700009
							],
							[
								91.17586063600015,
								28.057487488000106
							],
							[
								91.09255822800003,
								27.971678772000104
							],
							[
								90.97514937400013,
								27.98209157300002
							],
							[
								90.90952030400018,
								28.03265696300008
							],
							[
								90.6839010010001,
								28.08707224500006
							],
							[
								90.47523156719149,
								28.07234446286344
							],
							[
								90.58772553344886,
								28.23329780452852
							],
							[
								90.2618041781983,
								28.33535398647564
							],
							[
								90.07086035391018,
								28.345230391180195
							],
							[
								89.86291752100004,
								28.295793356000075
							],
							[
								89.75584395400011,
								28.1843789670001
							],
							[
								89.56148889100012,
								28.13464040100007
							],
							[
								89.44454512600004,
								28.031184184000068
							],
							[
								89.33602461800007,
								27.869075216000113
							],
							[
								89.22492028800008,
								27.807812806000072
							],
							[
								89.1273589238333,
								27.62728988843898
							],
							[
								89.05095371551772,
								27.608281690950264
							],
							[
								88.97295541963888,
								27.51765939342627
							],
							[
								88.95105955131027,
								27.433144260415162
							],
							[
								88.99701872918376,
								27.330869457273195
							],
							[
								88.89233077000011,
								27.315543111000125
							],
							[
								88.77357832900003,
								27.40850901300007
							],
							[
								88.7410221770001,
								27.54570994100007
							],
							[
								88.80566939300007,
								27.655108948000077
							],
							[
								88.85388350400007,
								27.84367624900011
							],
							[
								88.81771000200013,
								27.994726461000056
							],
							[
								88.61048750800012,
								28.10583079000014
							],
							[
								88.50207035300008,
								28.028884583000035
							],
							[
								88.3787703860001,
								27.98263417600006
							],
							[
								88.12669274900009,
								27.95043975900012
							],
							[
								88.09573856600008,
								27.865328675000086
							],
							[
								87.82588423700014,
								27.90656646700009
							],
							[
								87.75637943500016,
								27.820370179000093
							],
							[
								87.53158695500008,
								27.83680328400004
							],
							[
								87.38678959100014,
								27.80440216100004
							],
							[
								87.15579593900009,
								27.825796204000056
							],
							[
								87.03053226700013,
								27.93808909100008
							],
							[
								86.89307295800012,
								27.95418630000006
							],
							[
								86.76997969600006,
								28.012089743000075
							],
							[
								86.66197595200009,
								28.106838481000125
							],
							[
								86.54415368700012,
								28.093015036000054
							],
							[
								86.49692142700007,
								27.93788238500011
							],
							[
								86.4388371170001,
								27.910855611000073
							],
							[
								86.20303755700013,
								28.002581279000083
							],
							[
								86.1559603280001,
								28.156525371000015
							],
							[
								86.06873050900003,
								28.076762797000043
							],
							[
								86.11286218300012,
								27.926797791000098
							],
							[
								85.98026045800009,
								27.885172424000103
							],
							[
								85.84827885000004,
								28.158928325000062
							],
							[
								85.7566048590001,
								28.203240866000016
							],
							[
								85.67505944900006,
								28.30638702400003
							],
							[
								85.61180749500005,
								28.251144918000136
							],
							[
								85.43156010000018,
								28.297059428000097
							],
							[
								85.25958093300005,
								28.266932068000102
							],
							[
								85.08021203600003,
								28.318789368000097
							],
							[
								85.07757653800013,
								28.435681457000072
							],
							[
								85.16801029400011,
								28.583191833000058
							],
							[
								85.05494226100006,
								28.638692322000026
							],
							[
								84.91872318600014,
								28.53567535400012
							],
							[
								84.79914392100005,
								28.546630758000106
							],
							[
								84.67775598100008,
								28.604405009000118
							],
							[
								84.6072176510001,
								28.698197734000104
							],
							[
								84.45084476800014,
								28.733880310000103
							],
							[
								84.3540031330001,
								28.86128855400011
							],
							[
								84.23514733900004,
								28.90002004000013
							],
							[
								84.2314266360001,
								29.02598134300007
							],
							[
								84.13225956200006,
								29.14380360900006
							],
							[
								84.09913496900009,
								29.24700144500011
							],
							[
								83.94555261300013,
								29.291830750000088
							],
							[
								83.71972660300008,
								29.233591411000077
							],
							[
								83.65600956200007,
								29.160779318000095
							],
							[
								83.51705163600013,
								29.191707662000084
							],
							[
								83.32796757000006,
								29.48502309200009
							],
							[
								83.16208622200014,
								29.625169576000076
							],
							[
								83.03289514200009,
								29.62046702100008
							],
							[
								82.89972497600007,
								29.68842152900004
							],
							[
								82.83657637600004,
								29.659792786000082
							],
							[
								82.61850183100006,
								29.83983347600008
							],
							[
								82.54181400500005,
								29.923239238000065
							],
							[
								82.39443282100007,
								30.003131002000146
							],
							[
								82.14452559400007,
								30.06943186500007
							],
							[
								82.15568770300013,
								30.18136301700008
							],
							[
								82.09589807100008,
								30.213454082000112
							],
							[
								82.08876672400004,
								30.33008778900009
							],
							[
								81.77901818800007,
								30.358044739000093
							],
							[
								81.59158776800007,
								30.414268697000068
							],
							[
								81.48306726100009,
								30.331896464000096
							],
							[
								81.38751753800011,
								30.373909403000084
							],
							[
								81.35728682500007,
								30.17355987600007
							],
							[
								81.27770511900007,
								30.131856995000135
							],
							[
								81.19450606300006,
								30.00447458900004
							],
							[
								81.09776778200006,
								30.016928609000104
							],
							[
								80.97601810700007,
								30.255208638000056
							],
							[
								80.78166304500007,
								30.32099273700004
							],
							[
								80.72306197200015,
								30.392047832000117
							],
							[
								80.57526737500012,
								30.466255188000076
							],
							[
								80.52514123600008,
								30.458607076000106
							],
							[
								80.2528064380001,
								30.56500885100013
							],
							[
								80.16692020700015,
								30.661902161000057
							],
							[
								80.23141239400007,
								30.724947408000077
							],
							[
								80.16929732200009,
								30.785253804000064
							],
							[
								80.06253381400012,
								30.78478871700014
							],
							[
								79.83350386600006,
								30.961522115000065
							],
							[
								79.73903934800012,
								30.97924713100008
							],
							[
								79.5296464440001,
								30.9535639450001
							],
							[
								79.29565555900012,
								31.12414784700013
							],
							[
								79.19840051300008,
								31.32491078700008
							],
							[
								79.06331831900019,
								31.433638001000133
							],
							[
								78.97619185400004,
								31.320001526000055
							],
							[
								78.86198693800009,
								31.29147613500001
							],
							[
								78.73848026600012,
								31.334987691000038
							],
							[
								78.76256148300007,
								31.445110169000145
							],
							[
								78.69951623500015,
								31.510015768000073
							],
							[
								78.81888879400009,
								31.607374166000056
							],
							[
								78.7313489180001,
								31.668042298000017
							],
							[
								78.67088749200008,
								31.77051666300008
							],
							[
								78.74457808500011,
								31.96419993100008
							],
							[
								78.64928674300012,
								32.03644358300002
							],
							[
								78.51306766800008,
								32.207570089000114
							],
							[
								78.45798059100014,
								32.22966176400013
							],
							[
								78.44878218600013,
								32.42678151500007
							],
							[
								78.38098270679342,
								32.528041484263525
							],
							[
								78.44754195200011,
								32.56625620500009
							],
							[
								78.6301664630002,
								32.57801259400006
							],
							[
								78.7132621670001,
								32.63751800600005
							],
							[
								78.77144982900012,
								32.46166310600006
							],
							[
								78.94342899600014,
								32.34637298600012
							],
							[
								79.0917403570001,
								32.39055633500004
							],
							[
								79.11292769400006,
								32.472385967000065
							],
							[
								79.27601851500009,
								32.490188497000105
							],
							[
								79.47641971900003,
								32.645424500000075
							],
							[
								79.49998417100005,
								32.74683949800004
							],
							[
								79.41275435400013,
								32.8865467330001
							],
							[
								79.33420617700011,
								32.95682668100008
							],
							[
								79.38185184700006,
								33.127333069000116
							],
							[
								78.97329797400005,
								33.30957000800004
							],
							[
								78.82426314300005,
								33.461059469000105
							],
							[
								78.7813717040001,
								33.552785136000125
							],
							[
								78.79408410700006,
								33.743910421000066
							],
							[
								78.7211169840001,
								33.9943860890001
							],
							[
								78.73010868400007,
								34.07926462900008
							],
							[
								78.90322473100008,
								34.15812286400009
							],
							[
								78.97619185400004,
								34.21716318800014
							],
							[
								78.95693951587305,
								34.33996090528569
							],
							[
								79.20449913922386,
								34.43944855440728
							],
							[
								79.33839277480666,
								34.430818589905954
							],
							[
								79.51264570493532,
								34.4716946483893
							],
							[
								79.71733605301642,
								34.412783515446876
							],
							[
								79.79397220205544,
								34.43102529638031
							],
							[
								79.95628787578482,
								34.68475657855328
							],
							[
								79.88383751778724,
								34.91960012554537
							],
							[
								80.04692833877186,
								35.01770783125144
							],
							[
								80.01416547995296,
								35.08592072226355
							],
							[
								80.1761710962191,
								35.253249010233674
							],
							[
								80.31921146024064,
								35.50925405553028
							],
							[
								80.48602298427335,
								35.40424754518804
							],
							[
								80.85845503057521,
								35.34714508737588
							],
							[
								80.97886111794622,
								35.29340159830508
							],
							[
								81.06092329327538,
								35.38856374821836
							],
							[
								81.21021650588705,
								35.316914374099014
							],
							[
								81.3573393090619,
								35.33239146639309
							],
							[
								81.54507978740224,
								35.25177623098827
							],
							[
								81.71142622344144,
								35.24565257450672
							],
							[
								82.00220950736292,
								35.319446520540424
							],
							[
								82.0860286800795,
								35.44799164509831
							],
							[
								82.28916873634807,
								35.54496247014188
							],
							[
								82.3189343607321,
								35.63374258115513
							],
							[
								82.42817833895919,
								35.689759833349655
							],
							[
								82.71043501206611,
								35.650175686059015
							],
							[
								82.78459069240648,
								35.68454051443322
							],
							[
								82.9358992857234,
								35.67407603637997
							],
							[
								82.97842898970606,
								35.600773016761366
							],
							[
								82.97176272996603,
								35.49044383381582
							],
							[
								83.0986800483455,
								35.41277415600251
							],
							[
								83.24611290898355,
								35.421249090872834
							],
							[
								83.56480146711402,
								35.36071015085281
							],
							[
								83.87067426970174,
								35.37453359584879
							],
							[
								83.98441409733272,
								35.41602977105711
							],
							[
								84.13319054600686,
								35.377530829384284
							],
							[
								84.21468427875641,
								35.38895132094666
							],
							[
								84.56344852143212,
								35.559483548027345
							],
							[
								84.77764733315786,
								35.600488796820514
							],
							[
								84.92363325387157,
								35.68932058377791
							],
							[
								85.14976932199664,
								35.7498078478539
							],
							[
								85.26025353367362,
								35.73040334693687
							],
							[
								85.3893412623894,
								35.75670665069134
							],
							[
								85.61976647344403,
								35.67539378509511
							],
							[
								85.71686648969671,
								35.75926463555447
							],
							[
								85.92992841986063,
								35.76169342740974
							],
							[
								86.0874381858236,
								35.87558828377226
							],
							[
								86.2123401216993,
								36.1159353705209
							],
							[
								86.39951216015817,
								36.17004059479757
							],
							[
								86.45940514503138,
								36.219443264095304
							],
							[
								86.71385989761615,
								36.23145803486045
							],
							[
								86.78698205008152,
								36.260267645735325
							],
							[
								87.19383060070169,
								36.3039600688021
							],
							[
								87.34560428291132,
								36.37405915020963
							],
							[
								87.57091352693772,
								36.333803209350634
							],
							[
								87.92453535422317,
								36.382559923501674
							],
							[
								88.00008629764454,
								36.428371080061254
							],
							[
								88.45923139831035,
								36.44888662411836
							],
							[
								88.71172244703325,
								36.36840057992279
							],
							[
								88.82809777209445,
								36.373671576581955
							],
							[
								88.95827070462929,
								36.28729441990154
							],
							[
								89.22362918483907,
								36.2635749367339
							],
							[
								89.67781334810746,
								36.081958115774455
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 11,
					"name": "新疆"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								96.36633990098284,
								42.722922619141826
							],
							[
								96.09091027199156,
								42.58690989857294
							],
							[
								96.04378136581732,
								42.499886785846485
							],
							[
								96.01783979726889,
								42.138720201476076
							],
							[
								96.03582319488447,
								41.99529226292756
							],
							[
								95.86394738156645,
								41.85501658844473
							],
							[
								95.77191165639778,
								41.82972097414367
							],
							[
								95.49198042235855,
								41.856024277898115
							],
							[
								95.05826012630376,
								41.78856069571958
							],
							[
								94.58092492064856,
								41.58521393477531
							],
							[
								94.01103722498789,
								41.10402883576222
							],
							[
								93.75994144114458,
								40.82332245536699
							],
							[
								93.57747195766478,
								40.58796214533666
							],
							[
								93.28632693943672,
								40.46926138030838
							],
							[
								93.03683312424931,
								40.48985443783204
							],
							[
								92.9258838236795,
								40.42290762049029
							],
							[
								92.91952762230193,
								40.11806834577749
							],
							[
								92.77741743426725,
								39.905523180450416
							],
							[
								92.7724048200264,
								39.810541896791136
							],
							[
								92.94794966044856,
								39.45247589784444
							],
							[
								92.93596072810516,
								39.152855942947355
							],
							[
								92.3331034689499,
								39.049864814209826
							],
							[
								92.1227287130597,
								38.94064667440455
							],
							[
								91.62865034413801,
								38.825666612424214
							],
							[
								91.49160444538887,
								38.81726919191968
							],
							[
								91.29440718024716,
								38.7451288931839
							],
							[
								91.01246056460332,
								38.69867178057822
							],
							[
								90.65351606561393,
								38.674073798267216
							],
							[
								90.63599775599164,
								38.6243093937635
							],
							[
								90.47822960761027,
								38.53250621169232
							],
							[
								90.31245161325131,
								38.46579193834722
							],
							[
								90.15091108587785,
								38.43279653643103
							],
							[
								90.19349246580464,
								38.32567129169675
							],
							[
								90.43926557794407,
								37.99607900594131
							],
							[
								90.41006839434095,
								37.84699249890471
							],
							[
								90.4364750508829,
								37.77857290321691
							],
							[
								90.83448693232606,
								37.60778229371786
							],
							[
								90.95721845876483,
								37.519415594753895
							],
							[
								91.07374881435624,
								37.48794464802705
							],
							[
								91.23497928336718,
								37.19540436491951
							],
							[
								91.31631798738522,
								37.118974921455475
							],
							[
								91.28758589087619,
								37.01350332311986
							],
							[
								91.05499026858604,
								36.94513540337613
							],
							[
								90.80777021742165,
								36.910563870326314
							],
							[
								90.71237552261232,
								36.82149953937221
							],
							[
								90.68813927640645,
								36.69848379209333
							],
							[
								90.80528974782356,
								36.55851817507366
							],
							[
								91.00672448085015,
								36.50348277391089
							],
							[
								91.0610364116011,
								36.31354604771195
							],
							[
								91.13576053272249,
								36.14063670472012
							],
							[
								91.11131758004228,
								36.07392243137514
							],
							[
								90.91499881404411,
								36.01333181451159
							],
							[
								90.82937096619708,
								36.010412096241225
							],
							[
								90.62266523561209,
								36.1111294618552
							],
							[
								90.16569054618179,
								36.12924205247873
							],
							[
								90.01376183524053,
								36.25277456279585
							],
							[
								89.97200727671441,
								36.10492829010852
							],
							[
								89.8667940607973,
								36.06560252523636
							],
							[
								89.67781334810746,
								36.081958115774455
							],
							[
								89.22362918483907,
								36.2635749367339
							],
							[
								88.95827070462929,
								36.28729441990154
							],
							[
								88.82809777209445,
								36.373671576581955
							],
							[
								88.71172244703325,
								36.36840057992279
							],
							[
								88.45923139831035,
								36.44888662411836
							],
							[
								88.00008629764454,
								36.428371080061254
							],
							[
								87.92453535422317,
								36.382559923501674
							],
							[
								87.57091352693772,
								36.333803209350634
							],
							[
								87.34560428291132,
								36.37405915020963
							],
							[
								87.19383060070169,
								36.3039600688021
							],
							[
								86.78698205008152,
								36.260267645735325
							],
							[
								86.71385989761615,
								36.23145803486045
							],
							[
								86.45940514503138,
								36.219443264095304
							],
							[
								86.39951216015817,
								36.17004059479757
							],
							[
								86.2123401216993,
								36.1159353705209
							],
							[
								86.0874381858236,
								35.87558828377226
							],
							[
								85.92992841986063,
								35.76169342740974
							],
							[
								85.71686648969671,
								35.75926463555447
							],
							[
								85.61976647344403,
								35.67539378509511
							],
							[
								85.3893412623894,
								35.75670665069134
							],
							[
								85.26025353367362,
								35.73040334693687
							],
							[
								85.14976932199664,
								35.7498078478539
							],
							[
								84.92363325387157,
								35.68932058377791
							],
							[
								84.77764733315786,
								35.600488796820514
							],
							[
								84.56344852143212,
								35.559483548027345
							],
							[
								84.21468427875641,
								35.38895132094666
							],
							[
								84.13319054600686,
								35.377530829384284
							],
							[
								83.98441409733272,
								35.41602977105711
							],
							[
								83.87067426970174,
								35.37453359584879
							],
							[
								83.56480146711402,
								35.36071015085281
							],
							[
								83.24611290898355,
								35.421249090872834
							],
							[
								83.0986800483455,
								35.41277415600251
							],
							[
								82.97176272996603,
								35.49044383381582
							],
							[
								82.97842898970606,
								35.600773016761366
							],
							[
								82.9358992857234,
								35.67407603637997
							],
							[
								82.78459069240648,
								35.68454051443322
							],
							[
								82.71043501206611,
								35.650175686059015
							],
							[
								82.42817833895919,
								35.689759833349655
							],
							[
								82.3189343607321,
								35.63374258115513
							],
							[
								82.28916873634807,
								35.54496247014188
							],
							[
								82.0860286800795,
								35.44799164509831
							],
							[
								82.00220950736292,
								35.319446520540424
							],
							[
								81.71142622344144,
								35.24565257450672
							],
							[
								81.54507978740224,
								35.25177623098827
							],
							[
								81.3573393090619,
								35.33239146639309
							],
							[
								81.21021650588705,
								35.316914374099014
							],
							[
								81.06092329327538,
								35.38856374821836
							],
							[
								80.97886111794622,
								35.29340159830508
							],
							[
								80.85845503057521,
								35.34714508737588
							],
							[
								80.48602298427335,
								35.40424754518804
							],
							[
								80.31921146024064,
								35.50925405553028
							],
							[
								80.1761710962191,
								35.253249010233674
							],
							[
								80.01416547995296,
								35.08592072226355
							],
							[
								80.04692833877186,
								35.01770783125144
							],
							[
								79.88383751778724,
								34.91960012554537
							],
							[
								79.95628787578482,
								34.68475657855328
							],
							[
								79.79397220205544,
								34.43102529638031
							],
							[
								79.71733605301642,
								34.412783515446876
							],
							[
								79.51264570493532,
								34.4716946483893
							],
							[
								79.33839277480666,
								34.430818589905954
							],
							[
								79.20449913922386,
								34.43944855440728
							],
							[
								78.95693951587305,
								34.33996090528569
							],
							[
								78.80173221800004,
								34.415006409000085
							],
							[
								78.6073254800001,
								34.54647125300011
							],
							[
								78.37943241400006,
								34.57866567000005
							],
							[
								78.2731856690001,
								34.65886749300006
							],
							[
								78.21138065600013,
								34.848261617000105
							],
							[
								78.14812870300005,
								34.9431395470001
							],
							[
								78.13004195100012,
								35.055432434000096
							],
							[
								78.0011609290001,
								35.268907776000106
							],
							[
								78.0556278900001,
								35.452875875000075
							],
							[
								77.98586470600014,
								35.494165344000095
							],
							[
								77.88313195800004,
								35.43106842000006
							],
							[
								77.80034631400014,
								35.495405579000135
							],
							[
								77.66061324100008,
								35.45809519500011
							],
							[
								77.41277307100012,
								35.46941233300009
							],
							[
								77.25081913300005,
								35.53070058200012
							],
							[
								77.10529829900008,
								35.53798695900011
							],
							[
								77.03904911300009,
								35.58501251200008
							],
							[
								76.89642216000004,
								35.589611715000046
							],
							[
								76.57075728400014,
								35.751255595000146
							],
							[
								76.56527958200007,
								35.865460511000094
							],
							[
								76.43205773900007,
								35.86049957300014
							],
							[
								76.31196171000005,
								35.80964996300011
							],
							[
								76.16602746600017,
								35.8062393190001
							],
							[
								76.11466109200012,
								35.94178660100005
							],
							[
								76.06143436700006,
								35.991602682000064
							],
							[
								75.9223214110001,
								36.03165191700006
							],
							[
								75.89431278500007,
								36.097384339000115
							],
							[
								76.01440881400009,
								36.23039947500004
							],
							[
								75.96883020000013,
								36.301971334000086
							],
							[
								75.9765816650002,
								36.46263336200013
							],
							[
								75.87477909400013,
								36.61947133400005
							],
							[
								75.79054650900008,
								36.68783925400004
							],
							[
								75.5705082610001,
								36.76674916600007
							],
							[
								75.49258020000019,
								36.720705465000066
							],
							[
								75.41051802600003,
								36.7473188270001
							],
							[
								75.35129683500014,
								36.91578399700006
							],
							[
								75.10014937300008,
								36.99412546800005
							],
							[
								74.91049686700006,
								36.96255116800009
							],
							[
								74.66244999200006,
								37.05448354100005
							],
							[
								74.54235396300004,
								37.02166900600014
							],
							[
								74.36613732900014,
								37.14775950100011
							],
							[
								74.48726688600004,
								37.225945943000056
							],
							[
								74.6232792560001,
								37.23080352800005
							],
							[
								74.7214644770001,
								37.297776185000146
							],
							[
								74.78326949100017,
								37.21966725700014
							],
							[
								75.06842004400005,
								37.31214223300006
							],
							[
								75.16412479700006,
								37.40063812300011
							],
							[
								74.89189335200018,
								37.599204814000075
							],
							[
								74.88610559100005,
								37.65346506800009
							],
							[
								74.9651705330001,
								37.767463278000065
							],
							[
								74.88321171100006,
								37.84386688300012
							],
							[
								74.89282352800006,
								37.99401275700012
							],
							[
								74.79071089700011,
								38.0814492800001
							],
							[
								74.77107385300008,
								38.29153981600007
							],
							[
								74.83825321400013,
								38.37941558800014
							],
							[
								74.77634484900011,
								38.51067372700001
							],
							[
								74.33420129400008,
								38.66699493400009
							],
							[
								74.14041467300012,
								38.669217021000094
							],
							[
								73.93288212100003,
								38.529664815000075
							],
							[
								73.79738651500008,
								38.602838644000144
							],
							[
								73.68369836500011,
								38.85494211900004
							],
							[
								73.81599003200006,
								38.993770854000076
							],
							[
								73.69816776600004,
								39.07841685000008
							],
							[
								73.60225630700012,
								39.235771587000045
							],
							[
								73.64132369000009,
								39.335274557000076
							],
							[
								73.63264204900014,
								39.448342590000095
							],
							[
								73.82074426200006,
								39.46818634100006
							],
							[
								73.92678430200016,
								39.59288157200007
							],
							[
								73.89350468000004,
								39.71039377900007
							],
							[
								73.82301802600006,
								39.80568512000008
							],
							[
								74.00398889100006,
								40.06081166600009
							],
							[
								74.16759647600009,
								40.10639027900007
							],
							[
								74.36985803300007,
								40.10582183900004
							],
							[
								74.70575484200003,
								40.33128611300009
							],
							[
								74.83091516100012,
								40.31991729800009
							],
							[
								74.78740360500012,
								40.420738017000076
							],
							[
								74.83535933500013,
								40.511636861000085
							],
							[
								75.03906783100007,
								40.44109853100011
							],
							[
								75.19389042200004,
								40.44125356100005
							],
							[
								75.48183150200009,
								40.61411122700014
							],
							[
								75.55986291500011,
								40.63286977200002
							],
							[
								75.66693648300009,
								40.450245260000116
							],
							[
								75.64016809100019,
								40.367304586000074
							],
							[
								75.68181929600013,
								40.29170196600012
							],
							[
								75.92149458900013,
								40.30911692400005
							],
							[
								76.07611047400007,
								40.39195424400006
							],
							[
								76.1513513590001,
								40.368131409000085
							],
							[
								76.24416223100013,
								40.441201884000066
							],
							[
								76.33015181500008,
								40.348080953000135
							],
							[
								76.44911096200019,
								40.41551869700007
							],
							[
								76.62419071400006,
								40.62754709900008
							],
							[
								76.6308052980001,
								40.72888458300011
							],
							[
								76.77084843000011,
								40.86711903900007
							],
							[
								76.76681766800004,
								40.944685364000065
							],
							[
								76.86097212800013,
								41.013208313000064
							],
							[
								77.00773319500007,
								41.044214173000086
							],
							[
								77.11883752500006,
								41.011658021000045
							],
							[
								77.33298466000014,
								41.02064971900009
							],
							[
								77.4748881430001,
								40.982047425000104
							],
							[
								77.66557417800004,
								41.00127105800004
							],
							[
								77.86669885300006,
								41.064057922000075
							],
							[
								78.07495487500006,
								41.0395116170001
							],
							[
								78.17603397600004,
								41.10550242200014
							],
							[
								78.35969201700004,
								41.28745513900009
							],
							[
								78.35989872300007,
								41.377527161000046
							],
							[
								78.61921106000005,
								41.47808949900008
							],
							[
								78.67212772700003,
								41.53844757100009
							],
							[
								78.97619185400004,
								41.64180043500005
							],
							[
								79.30413049300012,
								41.78755381300007
							],
							[
								79.41099735600005,
								41.77858795200012
							],
							[
								79.61098514800011,
								41.86762644500001
							],
							[
								79.7475142830001,
								41.879744568
							],
							[
								79.84290897700004,
								42.00183013900008
							],
							[
								79.93086226400004,
								42.02327585900011
							],
							[
								80.18190637200013,
								42.020976258000076
							],
							[
								80.2565271410001,
								42.084357401
							],
							[
								80.21032841000005,
								42.189518941000074
							],
							[
								80.26841272000013,
								42.23796559700014
							],
							[
								80.14004846200004,
								42.62295501800014
							],
							[
								80.22748498600004,
								42.790980937000086
							],
							[
								80.47615197800008,
								42.86389638300011
							],
							[
								80.36814823400005,
								43.02845998200013
							],
							[
								80.57588749200016,
								43.11941050200005
							],
							[
								80.77339481600012,
								43.11292511000008
							],
							[
								80.73546431500012,
								43.28888336200009
							],
							[
								80.64286014800007,
								43.32621958500005
							],
							[
								80.71272668500006,
								43.458872986000074
							],
							[
								80.47615197800008,
								43.91024078400011
							],
							[
								80.3451005450001,
								44.1030972290001
							],
							[
								80.37300581900007,
								44.27021881200011
							],
							[
								80.33290490700006,
								44.41739329100011
							],
							[
								80.37631311000007,
								44.6712796030001
							],
							[
								80.47615197800008,
								44.73541005400011
							],
							[
								80.21828658100003,
								44.81809234600007
							],
							[
								79.99173710100007,
								44.793649394000056
							],
							[
								79.86864384000012,
								44.84935658800006
							],
							[
								79.8582052000001,
								44.90372019500006
							],
							[
								80.06170699100005,
								45.01895863900006
							],
							[
								80.36504764900008,
								45.04319488600004
							],
							[
								80.42509566300009,
								45.092132467000056
							],
							[
								80.69712040200011,
								45.14365387000004
							],
							[
								80.85385502200012,
								45.126497295000064
							],
							[
								81.1441732180001,
								45.20468373600002
							],
							[
								81.73927901200017,
								45.33806060800006
							],
							[
								81.80728519700006,
								45.18871571900007
							],
							[
								81.95011885600007,
								45.14448069300008
							],
							[
								82.19175785300013,
								45.22220204700008
							],
							[
								82.29459395300006,
								45.228196513000114
							],
							[
								82.47582320100008,
								45.11569692000003
							],
							[
								82.58522220800012,
								45.17683014000005
							],
							[
								82.63384973100005,
								45.3393525190001
							],
							[
								82.61571130400011,
								45.43541900700012
							],
							[
								82.36265181500005,
								45.48120432600007
							],
							[
								82.29149336800003,
								45.533190817000076
							],
							[
								82.37221195500007,
								45.73416046200009
							],
							[
								82.48894901500006,
								45.901695455000095
							],
							[
								82.56827233900003,
								46.196509501
							],
							[
								82.67436405500013,
								46.33112660700007
							],
							[
								82.83895349200009,
								46.73244578100011
							],
							[
								82.98550785300017,
								46.94251047800009
							],
							[
								83.01351648000008,
								47.1945881150001
							],
							[
								83.1503556720001,
								47.21153798500009
							],
							[
								83.52449304200013,
								47.06710235700007
							],
							[
								83.90534834800013,
								46.973955587000034
							],
							[
								84.06962772600014,
								46.96442128500004
							],
							[
								84.15907963100005,
								46.993256735000074
							],
							[
								84.6635449630001,
								46.983851624000124
							],
							[
								84.73165450100004,
								46.947755636000124
							],
							[
								84.73961267100009,
								46.814766337000094
							],
							[
								84.91603601100013,
								46.85055226600011
							],
							[
								85.2051139730001,
								47.03371938100008
							],
							[
								85.49863610900013,
								47.0518319710001
							],
							[
								85.55682377100004,
								47.17874928800009
							],
							[
								85.65965987200008,
								47.20652537000012
							],
							[
								85.67035689300008,
								47.384343974000046
							],
							[
								85.57997481300004,
								47.52376698900014
							],
							[
								85.59542606600013,
								47.624070944000096
							],
							[
								85.51537927200008,
								47.92028025300007
							],
							[
								85.58638269000005,
								48.14124867700011
							],
							[
								85.71867435700011,
								48.35883229600012
							],
							[
								85.78368330900008,
								48.407589010000066
							],
							[
								86.00599532100006,
								48.42955149400004
							],
							[
								86.19203047700012,
								48.41823435500007
							],
							[
								86.33383060700004,
								48.49040049300007
							],
							[
								86.5650826420001,
								48.52732330300009
							],
							[
								86.74450321400013,
								48.70353993700007
							],
							[
								86.78946171100006,
								48.83913889600012
							],
							[
								86.71804488100014,
								48.91251943000006
							],
							[
								86.7275016690001,
								48.99034413700011
							],
							[
								86.88733687400003,
								49.10682281600006
							],
							[
								87.11631514500004,
								49.129767151000095
							],
							[
								87.40043217000004,
								49.071011048000116
							],
							[
								87.52528243000006,
								49.119793600000094
							],
							[
								87.81632409700006,
								49.165837301000096
							],
							[
								87.82190515100007,
								49.02873972600014
							],
							[
								87.87259973200014,
								48.96801991800004
							],
							[
								87.7568961990001,
								48.9203742470001
							],
							[
								87.80588545800003,
								48.80058827800005
							],
							[
								88.03377852400013,
								48.72911977200005
							],
							[
								88.06385420800012,
								48.682610982000085
							],
							[
								87.94282800400003,
								48.59948944100012
							],
							[
								88.16596683800014,
								48.493733622000065
							],
							[
								88.23562666800007,
								48.49319102000004
							],
							[
								88.4167008880001,
								48.394101461000105
							],
							[
								88.56511560100012,
								48.342993470000124
							],
							[
								88.58077356000007,
								48.21199371400013
							],
							[
								88.8054110110001,
								48.10595367500011
							],
							[
								88.9323283280001,
								48.096961975000085
							],
							[
								89.04555139200005,
								47.992988994000115
							],
							[
								89.24398889200006,
								47.980224915000065
							],
							[
								89.33426761900017,
								48.032366435000114
							],
							[
								89.54180017100009,
								48.03102284800005
							],
							[
								89.75129642700011,
								47.824317119000085
							],
							[
								89.88906579600012,
								47.824317119000085
							],
							[
								90.04461185800011,
								47.879765931000065
							],
							[
								90.08285241700008,
								47.756104228000055
							],
							[
								90.32743697200004,
								47.62303741500011
							],
							[
								90.44122847500006,
								47.493045350000074
							],
							[
								90.46872033700004,
								47.308922221000046
							],
							[
								90.71211633400009,
								47.014702454000115
							],
							[
								90.82818160000011,
								46.982301331000116
							],
							[
								90.9327746990001,
								46.8747885140001
							],
							[
								91.00481164500007,
								46.74042979000009
							],
							[
								90.99592329900008,
								46.59462473600007
							],
							[
								91.04749637900011,
								46.5664094040001
							],
							[
								90.89618778500005,
								46.30203277600009
							],
							[
								90.99592329900008,
								46.11372385700011
							],
							[
								91.00243452900003,
								46.02184316000006
							],
							[
								90.71077274600009,
								45.75219553700009
							],
							[
								90.65113814300008,
								45.49314158100009
							],
							[
								90.73795454900016,
								45.44172353100004
							],
							[
								90.79655562400012,
								45.29284373000007
							],
							[
								90.9054895430001,
								45.185976868000125
							],
							[
								90.97514937400013,
								45.2148639940001
							],
							[
								91.13503625500016,
								45.19786244700006
							],
							[
								91.24913781800007,
								45.12970123300005
							],
							[
								91.45605025300011,
								45.13745269800006
							],
							[
								91.52178267400006,
								45.077456361000145
							],
							[
								91.66296268700012,
								45.059524638000084
							],
							[
								92.00940149000013,
								45.076216126000105
							],
							[
								92.19367964700012,
								45.01451446500005
							],
							[
								92.47510949800017,
								44.99746124300012
							],
							[
								92.75271529200012,
								45.037975566000114
							],
							[
								92.94505497300014,
								45.005832825000084
							],
							[
								93.1657133380001,
								45.00764150000009
							],
							[
								93.52527795500004,
								44.951262513000074
							],
							[
								93.71400028500011,
								44.87457468700012
							],
							[
								93.87450728300013,
								44.714222718000144
							],
							[
								93.97506962100005,
								44.65996246400002
							],
							[
								94.19500451700009,
								44.65432973300008
							],
							[
								94.33845829300009,
								44.51211619100013
							],
							[
								94.58805546100007,
								44.43610015900009
							],
							[
								94.69822961400013,
								44.343495992000044
							],
							[
								95.03681359900003,
								44.25497426400008
							],
							[
								95.37942834500012,
								44.28711700500011
							],
							[
								95.32144738800014,
								44.14841746000013
							],
							[
								95.32754520700013,
								44.00666900700011
							],
							[
								95.51027307200013,
								43.97912546800012
							],
							[
								95.5892346600001,
								43.869493918000046
							],
							[
								95.69248417200015,
								43.630542094000106
							],
							[
								95.83283736200008,
								43.4089018760001
							],
							[
								95.85495487500009,
								43.28454254200011
							],
							[
								95.90849165900005,
								43.21454681400007
							],
							[
								96.29430790200007,
								42.93327199400005
							],
							[
								96.36633990098284,
								42.722922619141826
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 12,
					"name": "海南"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								110.68506920700003,
								20.15330638200004
							],
							[
								110.71094811300014,
								20.07518138200001
							],
							[
								110.78834069100003,
								20.010402736000117
							],
							[
								110.93458092500003,
								19.995062567000048
							],
							[
								111.00001061300009,
								19.72166575700004
							],
							[
								110.96583092500009,
								19.635972398000064
							],
							[
								110.87647545700014,
								19.539780992000118
							],
							[
								110.82178795700003,
								19.554103908000116
							],
							[
								110.75757897200009,
								19.430894273000035
							],
							[
								110.69825280000009,
								19.416937567000048
							],
							[
								110.58904056100005,
								19.176703192000048
							],
							[
								110.56324303500003,
								19.055650132000068
							],
							[
								110.46558678500003,
								18.88190338700008
							],
							[
								110.46900475400014,
								18.777167059000107
							],
							[
								110.42676842500003,
								18.680894273000092
							],
							[
								110.2272241550001,
								18.642157294000043
							],
							[
								110.10328209700009,
								18.53937409100004
							],
							[
								110.05258222700013,
								18.39020416900007
							],
							[
								109.91537519600007,
								18.4168154970001
							],
							[
								109.83545983200008,
								18.382269598000107
							],
							[
								109.74610436300003,
								18.39590078300006
							],
							[
								109.67725670700008,
								18.245062567000048
							],
							[
								109.56804446700005,
								18.19318268400005
							],
							[
								109.43995201900009,
								18.28896719000008
							],
							[
								109.21810957100013,
								18.30565013200004
							],
							[
								109.16260826900009,
								18.287827867000146
							],
							[
								109.09164472700019,
								18.36859772300005
							],
							[
								109.00074303500003,
								18.36717357000009
							],
							[
								108.79558353000004,
								18.48655833500007
							],
							[
								108.6949975920001,
								18.504828192000048
							],
							[
								108.69361412900003,
								18.71987539300008
							],
							[
								108.62745201900003,
								18.835882880000014
							],
							[
								108.65381920700003,
								18.92104726800011
							],
							[
								108.61524498800014,
								19.101629950000103
							],
							[
								108.66309655000009,
								19.15623607000009
							],
							[
								108.63168379000007,
								19.28628164300008
							],
							[
								108.69434655000003,
								19.380316473000022
							],
							[
								108.7706811860001,
								19.394354559000078
							],
							[
								108.94076582100013,
								19.514105536000073
							],
							[
								109.01587975400003,
								19.601263739000103
							],
							[
								109.15650475400003,
								19.649644273
							],
							[
								109.16684004000018,
								19.80548737200013
							],
							[
								109.30372155000003,
								19.921698309000135
							],
							[
								109.46501712300011,
								19.834051825000103
							],
							[
								109.52702884200005,
								19.86196523600006
							],
							[
								109.52702884200005,
								19.951361395000077
							],
							[
								109.59571373800003,
								19.99315013200001
							],
							[
								109.71900475400003,
								20.010646877000056
							],
							[
								109.80762780000003,
								19.951361395000077
							],
							[
								109.88331139400009,
								19.984849351000037
							],
							[
								110.01368248800003,
								19.957505601000065
							],
							[
								110.08961022200003,
								19.97809479400007
							],
							[
								110.15699303500014,
								20.06736888200004
							],
							[
								110.26099694100009,
								20.033148505000042
							],
							[
								110.38298587300005,
								20.081040757000068
							],
							[
								110.58033287900008,
								19.979722398
							],
							[
								110.56934655000003,
								20.079779364000046
							],
							[
								110.68506920700003,
								20.15330638200004
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 13,
					"name": "宁夏"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								107.65764611237813,
								37.85293528913229
							],
							[
								107.60674482631265,
								37.765731310151835
							],
							[
								107.50943810358558,
								37.764284369328124
							],
							[
								107.43605756960119,
								37.66346365002741
							],
							[
								107.31720177584123,
								37.590186468830495
							],
							[
								107.32216271413796,
								37.52763214810511
							],
							[
								107.2380334821595,
								37.3013668887709
							],
							[
								107.32495324119913,
								37.16357168208742
							],
							[
								107.28547244669602,
								37.068461209017585
							],
							[
								107.18780398966243,
								37.11706289353771
							],
							[
								106.93293582592759,
								37.107192694687114
							],
							[
								106.7906706082619,
								37.18966828116629
							],
							[
								106.64406456902458,
								37.18165843428932
							],
							[
								106.63393598775559,
								36.997897040515966
							],
							[
								106.57481815013756,
								36.93133779590261
							],
							[
								106.64902550732126,
								36.8341861028064
							],
							[
								106.60215498266638,
								36.7258206237228
							],
							[
								106.50236779213986,
								36.70651947739199
							],
							[
								106.49399621005699,
								36.55981008626645
							],
							[
								106.43999433766857,
								36.51477407516347
							],
							[
								106.495391473138,
								36.4367426621441
							],
							[
								106.49658003064394,
								36.26835500697797
							],
							[
								106.6038603050091,
								36.27783763310026
							],
							[
								106.7449369651689,
								36.206575833507856
							],
							[
								106.81366662011845,
								36.21164012279348
							],
							[
								106.9447697286401,
								36.07694550243298
							],
							[
								106.91484907372575,
								35.907059231398364
							],
							[
								106.84322553892741,
								35.882202867568225
							],
							[
								106.91340213380147,
								35.788823554363546
							],
							[
								106.76710615382592,
								35.7065546743587
							],
							[
								106.46960493422034,
								35.72743195182309
							],
							[
								106.4292973174172,
								35.69944916414764
							],
							[
								106.49508141477554,
								35.5531273457504
							],
							[
								106.46485070239805,
								35.33236562797137
							],
							[
								106.37777591372742,
								35.2606645779079
							],
							[
								106.31338707855087,
								35.27360952376057
							],
							[
								106.21065433133236,
								35.39515249269334
							],
							[
								106.11241743441701,
								35.42465973645773
							],
							[
								106.06508182176867,
								35.48765330675465
							],
							[
								105.93614912268384,
								35.52480866129068
							],
							[
								105.8293856140549,
								35.49364777292638
							],
							[
								105.68696536675827,
								35.66045929605963
							],
							[
								105.43183881970583,
								35.756422430750604
							],
							[
								105.31809899297417,
								35.9332075064213
							],
							[
								105.35148196761867,
								36.0576443552028
							],
							[
								105.43741987472742,
								36.10668528929466
							],
							[
								105.44594648644119,
								36.254583237926056
							],
							[
								105.39277143815133,
								36.38439443615431
							],
							[
								105.26874799962047,
								36.550224107356684
							],
							[
								105.22048221188453,
								36.69295441301577
							],
							[
								105.32166466729058,
								36.78072683457572
							],
							[
								105.18017459508144,
								36.97213633912071
							],
							[
								104.92241255059872,
								37.096754055055584
							],
							[
								104.8553882179919,
								37.218193671200964
							],
							[
								104.76474775590418,
								37.25049144112714
							],
							[
								104.68950687084538,
								37.41192861571304
							],
							[
								104.46450768428224,
								37.440247301072134
							],
							[
								104.35851932200904,
								37.40123159456249
							],
							[
								104.4252335962534,
								37.498589993233566
							],
							[
								104.52238528934959,
								37.5299575871729
							],
							[
								104.64697716686271,
								37.50659984011051
							],
							[
								104.94432335773678,
								37.54571889940763
							],
							[
								105.08488325395899,
								37.660673122966244
							],
							[
								105.3544275252101,
								37.75263133376896
							],
							[
								105.53410647983014,
								37.72498444287777
							],
							[
								105.65869835824259,
								37.73981557912569
							],
							[
								105.78809614532082,
								37.805057075023996
							],
							[
								105.82473473501994,
								38.005484116798556
							],
							[
								105.75564334486444,
								38.135502021501026
							],
							[
								105.82809370286213,
								38.22681427715713
							],
							[
								105.84121951676724,
								38.57128937420518
							],
							[
								105.89661665223667,
								38.73618887032012
							],
							[
								106.06027591400226,
								38.97906810171153
							],
							[
								106.11319257987361,
								39.12081655543966
							],
							[
								106.2834147476924,
								39.156524970051265
							],
							[
								106.27566328323394,
								39.269153754542174
							],
							[
								106.49694176584978,
								39.28579356502101
							],
							[
								106.61409223816622,
								39.358321438283724
							],
							[
								106.78912031465075,
								39.36095693571397
							],
							[
								106.80824059472775,
								39.199054674034016
							],
							[
								106.91185184108957,
								39.06919179896235
							],
							[
								106.97784264492208,
								39.03560211784347
							],
							[
								106.93174726842165,
								38.92113882070004
							],
							[
								106.70442264189137,
								38.63722850209365
							],
							[
								106.64499474501156,
								38.45920319297298
							],
							[
								106.47012169815781,
								38.290686347497
							],
							[
								106.82916954993476,
								38.150384832793804
							],
							[
								107.06083499623804,
								38.114934801499885
							],
							[
								107.16263756657042,
								38.138602606924735
							],
							[
								107.3241780948432,
								38.06594554335217
							],
							[
								107.40468997566182,
								37.9216649440819
							],
							[
								107.65764611237813,
								37.85293528913229
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 14,
					"name": "陕西"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								111.11004520082531,
								39.38519318281914
							],
							[
								111.22487023317473,
								39.31054657606359
							],
							[
								111.11800337085884,
								39.06743480157485
							],
							[
								110.99501346200162,
								39.0038469511758
							],
							[
								110.98033735628394,
								38.816649075194675
							],
							[
								110.87181684756939,
								38.62136383707144
							],
							[
								110.89941206341592,
								38.545451158444166
							],
							[
								110.85977623928198,
								38.468039863049256
							],
							[
								110.77425174422257,
								38.426233629478475
							],
							[
								110.67120893774222,
								38.31698965125136
							],
							[
								110.57968997561187,
								38.28732737875555
							],
							[
								110.51121870308066,
								38.20219045732378
							],
							[
								110.5150427589162,
								37.95499624278236
							],
							[
								110.58930179204407,
								37.919132799439126
							],
							[
								110.65338056795883,
								37.813196113110166
							],
							[
								110.75306440569778,
								37.74575836845386
							],
							[
								110.78877282120874,
								37.56142853389966
							],
							[
								110.74634647001358,
								37.480296536356065
							],
							[
								110.63028120331484,
								37.39663239237095
							],
							[
								110.66500776599554,
								37.2822724471157
							],
							[
								110.46005903459678,
								37.051278795280155
							],
							[
								110.38946902857282,
								37.02195242046784
							],
							[
								110.39753055229312,
								36.78137278882315
							],
							[
								110.4831584010393,
								36.593012192858424
							],
							[
								110.49612918531363,
								36.48407827389326
							],
							[
								110.45897382987835,
								36.34940949195445
							],
							[
								110.4472432799534,
								36.141876939069476
							],
							[
								110.51096032066226,
								35.88685374570383
							],
							[
								110.56041466680341,
								35.84918162723031
							],
							[
								110.61984256368339,
								35.597259020187636
							],
							[
								110.42481570797861,
								35.2942284215045
							],
							[
								110.33541548113948,
								35.19800690439513
							],
							[
								110.25965783124394,
								34.94476654683868
							],
							[
								110.23743696484405,
								34.80139028603287
							],
							[
								110.25226810109194,
								34.66325918256521
							],
							[
								110.33603559786457,
								34.615846056450295
							],
							[
								110.32766401578164,
								34.47980784805375
							],
							[
								110.47866255073609,
								34.32638052034474
							],
							[
								110.43380740768566,
								34.2613974068648
							],
							[
								110.60666507383405,
								34.17049856235883
							],
							[
								110.5936426127164,
								34.06533702238568
							],
							[
								110.64237348844574,
								33.980303452842094
							],
							[
								110.5937976423474,
								33.87974111595966
							],
							[
								110.7492403498623,
								33.80279490855821
							],
							[
								110.79213178905076,
								33.70512645152451
							],
							[
								110.96824507025383,
								33.59882802998959
							],
							[
								111.01061974460555,
								33.50015188170403
							],
							[
								111.01558068200296,
								33.37444896105072
							],
							[
								110.97460127163134,
								33.266471056494055
							],
							[
								110.82344770704606,
								33.19892995905036
							],
							[
								110.71125817302624,
								33.108108628910145
							],
							[
								110.60449466439724,
								33.153893947947296
							],
							[
								110.5473922056857,
								33.2453353948126
							],
							[
								110.43225711497382,
								33.17306590396828
							],
							[
								110.23443973220782,
								33.15632273980259
							],
							[
								110.09429324803494,
								33.21332184482728
							],
							[
								109.65969445193741,
								33.26409394058294
							],
							[
								109.51567223508562,
								33.23706716641661
							],
							[
								109.49102257683046,
								33.145005601926954
							],
							[
								109.75725955618356,
								33.08007416439116
							],
							[
								109.73958621603106,
								32.93000580542352
							],
							[
								109.89911136269916,
								32.91442536124143
							],
							[
								110.09584353984746,
								32.84125153283199
							],
							[
								110.15496137926425,
								32.72957876185032
							],
							[
								110.16829389874442,
								32.62235016522794
							],
							[
								110.0738293799219,
								32.61656240553057
							],
							[
								110.0008622579868,
								32.55194102635724
							],
							[
								109.87952599462898,
								32.591628526435386
							],
							[
								109.63483808810736,
								32.59064667450443
							],
							[
								109.57944095263781,
								32.54121816678497
							],
							[
								109.56130252539117,
								32.40502492875743
							],
							[
								109.48740522657005,
								32.33593353950121
							],
							[
								109.54765994664916,
								32.23361420343275
							],
							[
								109.61902509992842,
								32.18891408911395
							],
							[
								109.66630903483411,
								32.043005682765994
							],
							[
								109.61018842985209,
								31.927302151273295
							],
							[
								109.59396202962392,
								31.737597968171656
							],
							[
								109.3359932795662,
								31.705248521402126
							],
							[
								109.25258751799959,
								31.744005846392668
							],
							[
								109.18887047729072,
								31.84030487696853
							],
							[
								109.05590701679535,
								31.940634670753468
							],
							[
								108.78930830313567,
								32.04533112183378
							],
							[
								108.51836876790429,
								32.19756989203688
							],
							[
								108.47940473823809,
								32.25027985323257
							],
							[
								108.2367322124216,
								32.2626563583043
							],
							[
								108.05178226114242,
								32.22661204690846
							],
							[
								107.96005659433638,
								32.15834747995228
							],
							[
								107.84352623874497,
								32.22816234051962
							],
							[
								107.65919640508997,
								32.388617662275294
							],
							[
								107.45962202403717,
								32.4086422799173
							],
							[
								107.44830488526219,
								32.522227077917364
							],
							[
								107.37053185376203,
								32.51982412448379
							],
							[
								107.28412885865998,
								32.452928982186705
							],
							[
								107.20217003791686,
								32.452773953455164
							],
							[
								107.06998172377752,
								32.52292470990747
							],
							[
								107.09623335158784,
								32.669246528304626
							],
							[
								107.06533084474273,
								32.708313909859044
							],
							[
								106.71258751839923,
								32.73782115272397
							],
							[
								106.60396365779667,
								32.67552521441709
							],
							[
								106.3639783062539,
								32.63867991824361
							],
							[
								106.22894778910916,
								32.591964423219565
							],
							[
								106.05650353411079,
								32.71355906809657
							],
							[
								106.08234174987189,
								32.873523464336444
							],
							[
								105.87548099235397,
								32.84471385346157
							],
							[
								105.81341759624502,
								32.76210907577317
							],
							[
								105.63327355273225,
								32.70746124913737
							],
							[
								105.56826460173005,
								32.73045726189309
							],
							[
								105.4985530948494,
								32.90739736629541
							],
							[
								105.6393196957473,
								32.88548655915733
							],
							[
								105.88648807186706,
								32.978013210741096
							],
							[
								105.9105692893412,
								33.031730862289436
							],
							[
								105.91273969877801,
								33.233682359253436
							],
							[
								105.74716840999412,
								33.29398875617616
							],
							[
								105.83243452443372,
								33.49754222269539
							],
							[
								106.07345340385154,
								33.61750906049474
							],
							[
								106.17060509604835,
								33.56224111623459
							],
							[
								106.39265872591949,
								33.61882680920988
							],
							[
								106.49554650276883,
								33.543585924151046
							],
							[
								106.55947024905277,
								33.59862132441461
							],
							[
								106.48174889529531,
								33.700888984539034
							],
							[
								106.47983686737751,
								33.86819143318809
							],
							[
								106.43022749160542,
								33.94211457043107
							],
							[
								106.51373660685891,
								34.10660065449662
							],
							[
								106.58742719920588,
								34.137451484498456
							],
							[
								106.55404422366195,
								34.28082774530418
							],
							[
								106.65600182542386,
								34.2542143822879
							],
							[
								106.67362348783365,
								34.384671536562195
							],
							[
								106.61409223816622,
								34.45872386321574
							],
							[
								106.49833702983,
								34.52021881854367
							],
							[
								106.36837080287029,
								34.52021881854367
							],
							[
								106.3177278992232,
								34.583341580049876
							],
							[
								106.4915157413584,
								34.740954697900946
							],
							[
								106.549703403889,
								34.862575182098965
							],
							[
								106.4912056820965,
								35.03011017474469
							],
							[
								106.56458621608095,
								35.07961619683002
							],
							[
								106.91484907372575,
								35.08904714610895
							],
							[
								107.05153323816836,
								35.038145860043386
							],
							[
								107.21085167836225,
								34.89177236570208
							],
							[
								107.32076745015769,
								34.94220856377419
							],
							[
								107.49688073136076,
								34.92577545797096
							],
							[
								107.5696411477208,
								34.96541128210495
							],
							[
								107.71004601431213,
								34.951406969056364
							],
							[
								107.83034874889563,
								34.976728420879965
							],
							[
								107.67046186702152,
								35.22797923435422
							],
							[
								107.74167199066977,
								35.318361314023434
							],
							[
								107.92284956295703,
								35.26689158807628
							],
							[
								107.97866010867705,
								35.22345754742793
							],
							[
								108.1549800963544,
								35.29055939440059
							],
							[
								108.2767814468063,
								35.26283498824415
							],
							[
								108.49263390493076,
								35.272498481519676
							],
							[
								108.6172257833432,
								35.39282705272626
							],
							[
								108.60373823423208,
								35.547856349990525
							],
							[
								108.50999718582142,
								35.700870266549515
							],
							[
								108.49309899292422,
								35.88119517721566
							],
							[
								108.67711876821659,
								36.00524445236957
							],
							[
								108.69975304576644,
								36.1255471869531
							],
							[
								108.64993696531866,
								36.22649709746304
							],
							[
								108.70368045528875,
								36.35896963154323
							],
							[
								108.60652876219262,
								36.43198843032184
							],
							[
								108.44126753087181,
								36.46128896671243
							],
							[
								108.35636315343675,
								36.54603831631525
							],
							[
								108.04170535671688,
								36.59774058715834
							],
							[
								107.88652103072098,
								36.75537954433051
							],
							[
								107.69547326138195,
								36.82509105121099
							],
							[
								107.54886722214462,
								36.8400255402465
							],
							[
								107.5009114927712,
								36.890771795781774
							],
							[
								107.29963178937561,
								36.90720490248421
							],
							[
								107.28547244669602,
								37.068461209017585
							],
							[
								107.32495324119913,
								37.16357168208742
							],
							[
								107.2380334821595,
								37.3013668887709
							],
							[
								107.32216271413796,
								37.52763214810511
							],
							[
								107.31720177584123,
								37.590186468830495
							],
							[
								107.43605756960119,
								37.66346365002741
							],
							[
								107.50943810358558,
								37.764284369328124
							],
							[
								107.60674482631265,
								37.765731310151835
							],
							[
								107.65764611237813,
								37.85293528913229
							],
							[
								107.88497073800909,
								37.80164643033848
							],
							[
								107.99111412991311,
								37.7257079132896
							],
							[
								108.03870812408064,
								37.632509467238066
							],
							[
								108.33295372863165,
								37.6335946719565
							],
							[
								108.49635460797873,
								37.66860545547735
							],
							[
								108.76434858561868,
								37.68188629811419
							],
							[
								108.79070356711594,
								37.94176707608969
							],
							[
								108.86330895384515,
								37.98760407197037
							],
							[
								108.95425947519459,
								37.9255406758615
							],
							[
								109.02795006664223,
								38.11095571513414
							],
							[
								108.9534843279394,
								38.19906403347835
							],
							[
								108.98635053864638,
								38.335205592863815
							],
							[
								109.15998335205006,
								38.5421438674455
							],
							[
								109.3131522973406,
								38.62048533792796
							],
							[
								109.42394656827958,
								38.76905508102715
							],
							[
								109.5379964542729,
								38.78520396599026
							],
							[
								109.63530317610065,
								38.905816758936226
							],
							[
								109.67426720576702,
								39.01121084200679
							],
							[
								109.8205631857424,
								39.0544640164012
							],
							[
								109.96334516824493,
								39.18127798109393
							],
							[
								110.1768721864023,
								39.28519928581835
							],
							[
								110.10917606022707,
								39.42839468037019
							],
							[
								110.22524132692564,
								39.424053859697864
							],
							[
								110.33810265541325,
								39.31814301179051
							],
							[
								110.49416548055251,
								39.37431529451524
							],
							[
								110.60340945788016,
								39.267215888202685
							],
							[
								110.68485151558491,
								39.26437368429811
							],
							[
								110.84566857344595,
								39.46518829970023
							],
							[
								111.01310021420346,
								39.56487213833856
							],
							[
								111.13707197499161,
								39.564949652704314
							],
							[
								111.04100548661387,
								39.42296865497943
							],
							[
								111.11004520082531,
								39.38519318281914
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 15,
					"name": "山西"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								113.72104861939818,
								36.35586904611952
							],
							[
								113.67288618355053,
								36.22145864480055
							],
							[
								113.68714887901751,
								36.05573232728503
							],
							[
								113.62756595340602,
								35.95323212316393
							],
							[
								113.58472619016158,
								35.68686595350093
							],
							[
								113.60994428919759,
								35.64606741028271
							],
							[
								113.49129520101269,
								35.52548045485909
							],
							[
								113.32841108560314,
								35.46300364849958
							],
							[
								113.12956017496208,
								35.35228689192655
							],
							[
								113.01979943189832,
								35.32859324807998
							],
							[
								112.90275231326859,
								35.240588284321916
							],
							[
								112.80761600087772,
								35.2419835483021
							],
							[
								112.68245568168436,
								35.31117829034588
							],
							[
								112.52597944539508,
								35.22027944583971
							],
							[
								112.05846276264634,
								35.23449046536271
							],
							[
								112.06109826097594,
								35.108477485447594
							],
							[
								111.8294328146726,
								35.08256175442145
							],
							[
								111.62221032104952,
								34.94727285395902
							],
							[
								111.55766645714124,
								34.8634020052983
							],
							[
								111.39426557779416,
								34.823275254749234
							],
							[
								111.33127200659777,
								34.84092275648001
							],
							[
								111.02570926327195,
								34.747491767331184
							],
							[
								110.88380577991279,
								34.66610138646979
							],
							[
								110.5305456887325,
								34.583677476834055
							],
							[
								110.33603559786457,
								34.615846056450295
							],
							[
								110.25226810109194,
								34.66325918256521
							],
							[
								110.23743696484405,
								34.80139028603287
							],
							[
								110.25965783124394,
								34.94476654683868
							],
							[
								110.33541548113948,
								35.19800690439513
							],
							[
								110.42481570797861,
								35.2942284215045
							],
							[
								110.61984256368339,
								35.597259020187636
							],
							[
								110.56041466680341,
								35.84918162723031
							],
							[
								110.51096032066226,
								35.88685374570383
							],
							[
								110.4472432799534,
								36.141876939069476
							],
							[
								110.45897382987835,
								36.34940949195445
							],
							[
								110.49612918531363,
								36.48407827389326
							],
							[
								110.4831584010393,
								36.593012192858424
							],
							[
								110.39753055229312,
								36.78137278882315
							],
							[
								110.38946902857282,
								37.02195242046784
							],
							[
								110.46005903459678,
								37.051278795280155
							],
							[
								110.66500776599554,
								37.2822724471157
							],
							[
								110.63028120331484,
								37.39663239237095
							],
							[
								110.74634647001358,
								37.480296536356065
							],
							[
								110.78877282120874,
								37.56142853389966
							],
							[
								110.75306440569778,
								37.74575836845386
							],
							[
								110.65338056795883,
								37.813196113110166
							],
							[
								110.58930179204407,
								37.919132799439126
							],
							[
								110.5150427589162,
								37.95499624278236
							],
							[
								110.51121870308066,
								38.20219045732378
							],
							[
								110.57968997561187,
								38.28732737875555
							],
							[
								110.67120893774222,
								38.31698965125136
							],
							[
								110.77425174422257,
								38.426233629478475
							],
							[
								110.85977623928198,
								38.468039863049256
							],
							[
								110.89941206341592,
								38.545451158444166
							],
							[
								110.87181684756939,
								38.62136383707144
							],
							[
								110.98033735628394,
								38.816649075194675
							],
							[
								110.99501346200162,
								39.0038469511758
							],
							[
								111.11800337085884,
								39.06743480157485
							],
							[
								111.22487023317473,
								39.31054657606359
							],
							[
								111.11004520082531,
								39.38519318281914
							],
							[
								111.34269249905952,
								39.44441437412402
							],
							[
								111.42118899917295,
								39.52213572878085
							],
							[
								111.42537479021439,
								39.62538523993686
							],
							[
								111.48991865412256,
								39.65215363258406
							],
							[
								111.67486860630117,
								39.63592723235587
							],
							[
								111.7611682477164,
								39.59804840830739
							],
							[
								111.92146853984127,
								39.688843899126624
							],
							[
								112.09897708502444,
								40.00543956218607
							],
							[
								112.16507124164451,
								40.05931224246595
							],
							[
								112.27927615816822,
								40.22896596950389
							],
							[
								112.39921715664639,
								40.28834219043969
							],
							[
								112.59584598190656,
								40.237776801158475
							],
							[
								112.7342354677927,
								40.17284536452195
							],
							[
								112.84378950438224,
								40.225658678505226
							],
							[
								112.96140506379265,
								40.35585744946175
							],
							[
								113.0864620301985,
								40.40443329556018
							],
							[
								113.22986413032532,
								40.41665477100091
							],
							[
								113.33414717025562,
								40.3187279324481
							],
							[
								113.51832197517899,
								40.343739325909155
							],
							[
								113.6766068865985,
								40.428540351456036
							],
							[
								113.80848514237545,
								40.43422475836593
							],
							[
								114.04376793803988,
								40.48799408585833
							],
							[
								114.07554894402847,
								40.55018667317648
							],
							[
								114.02697309793007,
								40.63516856497725
							],
							[
								114.15409712098545,
								40.7425780305517
							],
							[
								114.15172000507414,
								40.67358999318361
							],
							[
								114.25755333861571,
								40.54997996670224
							],
							[
								114.28576867118727,
								40.37856924137745
							],
							[
								114.43366661981861,
								40.360534166018965
							],
							[
								114.45030643119696,
								40.293768214931276
							],
							[
								114.08536746603579,
								40.18501516401872
							],
							[
								113.99596723829745,
								40.13181427730706
							],
							[
								113.93591922379323,
								40.01572317218668
							],
							[
								114.08598758276082,
								39.91691783269192
							],
							[
								114.38281701059674,
								39.86105561012829
							],
							[
								114.40214399624841,
								39.65845815711822
							],
							[
								114.54094689328451,
								39.53123078127564
							],
							[
								114.42033410033844,
								39.29997874612232
							],
							[
								114.3939791197406,
								39.169340724694734
							],
							[
								114.21631554582575,
								39.069036770230895
							],
							[
								114.08908816908377,
								39.074359442834094
							],
							[
								114.01271040156382,
								39.11882701315622
							],
							[
								113.85334028542593,
								39.07229238528532
							],
							[
								113.76021935374018,
								38.909201565200135
							],
							[
								113.82512495285437,
								38.81026703539547
							],
							[
								113.66901045087172,
								38.66027619079358
							],
							[
								113.60896243726677,
								38.644463201715524
							],
							[
								113.53449669766451,
								38.537286281936474
							],
							[
								113.51801191591721,
								38.37760610653663
							],
							[
								113.55790612157023,
								38.24342825011371
							],
							[
								113.790656772592,
								38.15286530239189
							],
							[
								113.89147749189294,
								37.94946686550355
							],
							[
								114.02635298120526,
								37.75077098179543
							],
							[
								114.1004053078587,
								37.69819021270823
							],
							[
								114.053121372953,
								37.50057953551726
							],
							[
								113.88672326096969,
								37.29612173143286
							],
							[
								113.8576811060982,
								37.20894358997484
							],
							[
								113.7543282412554,
								37.11494415914558
							],
							[
								113.77603234281844,
								36.89061676705023
							],
							[
								113.67924238492822,
								36.871599839760904
							],
							[
								113.60777387886151,
								36.769073798117375
							],
							[
								113.45393314000256,
								36.73662099945966
							],
							[
								113.45873904776897,
								36.635800279259456
							],
							[
								113.5473641300506,
								36.54851878501387
							],
							[
								113.53511681528892,
								36.48338064190321
							],
							[
								113.72104861939818,
								36.35586904611952
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 16,
					"name": "湖北"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								115.37402265791923,
								31.417539985382007
							],
							[
								115.54998091039067,
								31.18269643838991
							],
							[
								115.6687333522624,
								31.21721629549566
							],
							[
								115.76836551315785,
								31.143551541570446
							],
							[
								115.87693769691714,
								31.129366360469135
							],
							[
								115.94644249912204,
								31.03404918092494
							],
							[
								116.0359977555919,
								30.988883979512053
							],
							[
								115.85864424003955,
								30.860958970779876
							],
							[
								115.86220991435607,
								30.784839586577647
							],
							[
								115.77529015531644,
								30.75481557887585
							],
							[
								115.76784874922032,
								30.68815298147493
							],
							[
								115.946649204697,
								30.48829437958196
							],
							[
								115.87678266818557,
								30.38979909934892
							],
							[
								115.91202599480386,
								30.315591742165196
							],
							[
								116.04049360589516,
								30.221437283503775
							],
							[
								116.07806237158115,
								29.9687136907842
							],
							[
								116.14725711542354,
								29.788776352846384
							],
							[
								115.99899742978761,
								29.744127916270287
							],
							[
								115.85590538892262,
								29.73859853809202
							],
							[
								115.70516523638656,
								29.86081329969403
							],
							[
								115.48621219283837,
								29.864275621222987
							],
							[
								115.41686242116378,
								29.711700955135
							],
							[
								115.35433393796086,
								29.64762217922018
							],
							[
								115.14018680217919,
								29.58752248787252
							],
							[
								114.97275516232082,
								29.559953111347
							],
							[
								114.895188837295,
								29.520188096903155
							],
							[
								114.81824262899408,
								29.39386505772623
							],
							[
								114.70868859330392,
								29.389524237953253
							],
							[
								114.46953006406119,
								29.31792654157661
							],
							[
								114.30814456631873,
								29.354539292854042
							],
							[
								114.2465462591025,
								29.248912664887513
							],
							[
								114.06345665889773,
								29.203153185171345
							],
							[
								113.902381220417,
								29.066339830418826
							],
							[
								113.77282840370788,
								29.125302639305346
							],
							[
								113.65490278503557,
								29.12403656743365
							],
							[
								113.64136355998028,
								29.22175670041139
							],
							[
								113.5877234227977,
								29.293793647259037
							],
							[
								113.72936852373834,
								29.437092393699004
							],
							[
								113.63469730024025,
								29.68482920970024
							],
							[
								113.53615034406323,
								29.685733547265443
							],
							[
								113.51951053268493,
								29.841667182094795
							],
							[
								113.41584761037882,
								29.764565945062316
							],
							[
								113.18624922072496,
								29.531737778775465
							],
							[
								113.14568322060416,
								29.47207733789884
							],
							[
								113.0081205588167,
								29.518095200932777
							],
							[
								112.92781538267377,
								29.49522838028554
							],
							[
								112.90848839702198,
								29.600803331408628
							],
							[
								112.94559207561377,
								29.70929800080208
							],
							[
								112.8861641787338,
								29.791773587281256
							],
							[
								112.64814253105294,
								29.626899928688744
							],
							[
								112.4439172709653,
								29.641369329730793
							],
							[
								112.36309533088479,
								29.5721745876871
							],
							[
								112.17003217994113,
								29.64904328072288
							],
							[
								112.12631391755326,
								29.707153428887608
							],
							[
								111.92363895107673,
								29.85639496555521
							],
							[
								111.76860965381246,
								29.91959524232658
							],
							[
								111.58489993688261,
								29.90435069402926
							],
							[
								111.4149878283256,
								29.92579641407326
							],
							[
								111.24616092268843,
								30.03173310040222
							],
							[
								110.74185062060963,
								30.096173611522943
							],
							[
								110.7155989927993,
								30.029640204431928
							],
							[
								110.5433614442752,
								30.055013333098856
							],
							[
								110.46315962091973,
								30.013982244984675
							],
							[
								110.50057335787415,
								29.862570298880172
							],
							[
								110.59116214401769,
								29.77136139601157
							],
							[
								110.44672651601587,
								29.726687120114462
							],
							[
								110.3616671080506,
								29.65010264701951
							],
							[
								110.10390506356777,
								29.78541738500431
							],
							[
								109.7832011247321,
								29.73492951098811
							],
							[
								109.70000206874045,
								29.65573537888463
							],
							[
								109.47221235601535,
								29.568169663798926
							],
							[
								109.43231815036233,
								29.533908189111656
							],
							[
								109.33816368990239,
								29.289685370583385
							],
							[
								109.26922733027715,
								29.24234975793496
							],
							[
								109.20659549428666,
								29.104244492889023
							],
							[
								109.07730105999593,
								29.214134426262746
							],
							[
								109.01415246006798,
								29.307487901045818
							],
							[
								108.9205664412882,
								29.34898407625417
							],
							[
								108.87204227113386,
								29.501610419185482
							],
							[
								108.87204227113386,
								29.63896637629722
							],
							[
								108.69603234271847,
								29.698161729180413
							],
							[
								108.61303999230176,
								29.858022773532156
							],
							[
								108.51263268415107,
								29.72185537392633
							],
							[
								108.44684858589352,
								29.73578217170987
							],
							[
								108.40044315013125,
								29.831073512832347
							],
							[
								108.53821251839304,
								29.88546295794913
							],
							[
								108.53201134574698,
								30.315488390276982
							],
							[
								108.38059939964268,
								30.39969513572194
							],
							[
								108.43320600805077,
								30.48728668922928
							],
							[
								108.57314578664875,
								30.497854519170716
							],
							[
								108.66998742138236,
								30.57384471306301
							],
							[
								108.71019168539794,
								30.522840074210052
							],
							[
								108.8684249208734,
								30.5513654651441
							],
							[
								108.96464643798276,
								30.607486070126043
							],
							[
								109.17925866085852,
								30.566790879695304
							],
							[
								109.24824669822652,
								30.59743500412219
							],
							[
								109.39418094299617,
								30.583740750335323
							],
							[
								109.63979902640398,
								30.717944444280675
							],
							[
								109.74857791483885,
								30.835353298116274
							],
							[
								109.8706893245527,
								30.888580024148837
							],
							[
								109.99672814288942,
								30.826232408099145
							],
							[
								110.06623294509433,
								30.828480332801178
							],
							[
								110.12767622267955,
								30.906408393032876
							],
							[
								110.1076257666158,
								31.12233836552312
							],
							[
								110.17485680479768,
								31.18866506613989
							],
							[
								110.10824588424015,
								31.398032130778205
							],
							[
								109.92949710470765,
								31.51872243898933
							],
							[
								109.73260989792846,
								31.56112295176277
							],
							[
								109.72449669826409,
								31.636079616880778
							],
							[
								109.59396202962392,
								31.737597968171656
							],
							[
								109.61018842985209,
								31.927302151273295
							],
							[
								109.66630903483411,
								32.043005682765994
							],
							[
								109.61902509992842,
								32.18891408911395
							],
							[
								109.54765994664916,
								32.23361420343275
							],
							[
								109.48740522657005,
								32.33593353950121
							],
							[
								109.56130252539117,
								32.40502492875743
							],
							[
								109.57944095263781,
								32.54121816678497
							],
							[
								109.63483808810736,
								32.59064667450443
							],
							[
								109.87952599462898,
								32.591628526435386
							],
							[
								110.0008622579868,
								32.55194102635724
							],
							[
								110.0738293799219,
								32.61656240553057
							],
							[
								110.16829389874442,
								32.62235016522794
							],
							[
								110.15496137926425,
								32.72957876185032
							],
							[
								110.09584353984746,
								32.84125153283199
							],
							[
								109.89911136269916,
								32.91442536124143
							],
							[
								109.73958621603106,
								32.93000580542352
							],
							[
								109.75725955618356,
								33.08007416439116
							],
							[
								109.49102257683046,
								33.145005601926954
							],
							[
								109.51567223508562,
								33.23706716641661
							],
							[
								109.65969445193741,
								33.26409394058294
							],
							[
								110.09429324803494,
								33.21332184482728
							],
							[
								110.23443973220782,
								33.15632273980259
							],
							[
								110.43225711497382,
								33.17306590396828
							],
							[
								110.5473922056857,
								33.2453353948126
							],
							[
								110.60449466439724,
								33.153893947947296
							],
							[
								110.71125817302624,
								33.108108628910145
							],
							[
								110.82344770704606,
								33.19892995905036
							],
							[
								110.97460127163134,
								33.266471056494055
							],
							[
								111.00266157367264,
								33.20753408512991
							],
							[
								111.10880496557667,
								33.14802867298479
							],
							[
								111.21634362236023,
								32.97648875645089
							],
							[
								111.21014244971428,
								32.93021251099859
							],
							[
								111.36331139500481,
								32.824766751084695
							],
							[
								111.50743696464417,
								32.68206228294801
							],
							[
								111.53162153490598,
								32.61108470329637
							],
							[
								111.71119713763773,
								32.600232652514904
							],
							[
								111.77925499901903,
								32.52036672594363
							],
							[
								112.0533467956181,
								32.45484101010456
							],
							[
								112.14460737533022,
								32.39463796596934
							],
							[
								112.28578738827736,
								32.350635484539936
							],
							[
								112.53393761632799,
								32.37675792114115
							],
							[
								112.75087527917071,
								32.349782822918996
							],
							[
								113.06568810372312,
								32.41737559720602
							],
							[
								113.18299360567028,
								32.41331899737389
							],
							[
								113.4359497423867,
								32.28875295738308
							],
							[
								113.52767540919274,
								32.296685288994894
							],
							[
								113.61640384336266,
								32.38567210558321
							],
							[
								113.72921349500677,
								32.4192617858028
							],
							[
								113.78275027940191,
								32.359368800929474
							],
							[
								113.7816650737841,
								32.19371999777971
							],
							[
								113.75236453739342,
								32.13759939189842
							],
							[
								113.79437747563998,
								31.97251902952962
							],
							[
								113.86171186660931,
								31.862706611420947
							],
							[
								113.95958703011729,
								31.831829942098096
							],
							[
								113.97198937361065,
								31.74656382945713
							],
							[
								114.08547081882318,
								31.78379669925829
							],
							[
								114.14396854061556,
								31.847539578388876
							],
							[
								114.26737186062286,
								31.808730577454213
							],
							[
								114.36183637944538,
								31.73426483785198
							],
							[
								114.55567467674484,
								31.737675483436874
							],
							[
								114.54787153544294,
								31.572879340109523
							],
							[
								114.63820193916808,
								31.56802175549967
							],
							[
								114.76656619657263,
								31.49048126889548
							],
							[
								114.99885175960094,
								31.477613837408654
							],
							[
								115.12855960504169,
								31.5945317648291
							],
							[
								115.21346398337607,
								31.545594184424004
							],
							[
								115.21852827356088,
								31.44748647691938
							],
							[
								115.28622439973623,
								31.395138250929477
							],
							[
								115.37402265791923,
								31.417539985382007
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 17,
					"name": "湖南"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								113.902381220417,
								29.066339830418826
							],
							[
								113.9051717465789,
								28.955984809051756
							],
							[
								114.01209028483873,
								28.912912502709815
							],
							[
								114.14272830626629,
								28.788501492350008
							],
							[
								114.11280765225126,
								28.615514634992422
							],
							[
								114.05694542878854,
								28.564277452142676
							],
							[
								114.17704145689771,
								28.50730418553971
							],
							[
								114.22685753824476,
								28.40896393493759
							],
							[
								114.18448286299372,
								28.29307953539228
							],
							[
								114.09187869704431,
								28.257707018464117
							],
							[
								114.0137956080809,
								28.106475937714322
							],
							[
								113.91648888625309,
								28.021183987551012
							],
							[
								113.7368099298343,
								27.981574001838737
							],
							[
								113.70099816333448,
								27.81894826884752
							],
							[
								113.56209191261172,
								27.590564276919878
							],
							[
								113.60012576719032,
								27.368226427107885
							],
							[
								113.66746015815977,
								27.329546617382505
							],
							[
								113.78275027940191,
								27.370784410172377
							],
							[
								113.85096316861535,
								27.345902207920517
							],
							[
								113.82357466014247,
								27.22867422123835
							],
							[
								113.7540181819935,
								27.141857814986196
							],
							[
								113.89240766787964,
								26.945332343412872
							],
							[
								113.83163618386277,
								26.827484239106354
							],
							[
								113.86470910014492,
								26.65586680820661
							],
							[
								114.08505740767316,
								26.577499498403085
							],
							[
								114.06841759629515,
								26.45370860386899
							],
							[
								114.01488081279922,
								26.38508230170686
							],
							[
								113.99860273572773,
								26.283098863321896
							],
							[
								113.93948489810958,
								26.209434109396682
							],
							[
								114.06283654217259,
								26.17778229371794
							],
							[
								114.16215864470564,
								26.221371364896584
							],
							[
								114.21352501786521,
								26.169772446840966
							],
							[
								114.04144249897212,
								26.068848374752747
							],
							[
								114.01829145658542,
								25.934618842385674
							],
							[
								113.90718712818341,
								25.749772243893972
							],
							[
								113.91793582617748,
								25.660191148103024
							],
							[
								113.98242801324216,
								25.58166881046722
							],
							[
								113.9275476417103,
								25.44811106987001
							],
							[
								113.82807051044563,
								25.356747138269867
							],
							[
								113.7138655948213,
								25.360907090889555
							],
							[
								113.58245242703799,
								25.325947984212064
							],
							[
								113.52343794220735,
								25.38558258756646
							],
							[
								113.42163537007639,
								25.383799749958598
							],
							[
								113.21746178593276,
								25.505575262888158
							],
							[
								113.08976932209657,
								25.41415965444446
							],
							[
								112.91737674394165,
								25.3248627794938
							],
							[
								112.88910973542608,
								25.241457017927075
							],
							[
								112.9690531763631,
								25.18058218022344
							],
							[
								112.95876956636232,
								25.056145331441996
							],
							[
								112.98889692595242,
								24.963928738220716
							],
							[
								112.8078227073521,
								24.942844754281964
							],
							[
								112.71408165894161,
								24.999507962522586
							],
							[
								112.66333540160758,
								25.113144436466598
							],
							[
								112.45838667200735,
								25.164252428107147
							],
							[
								112.21395714700475,
								25.200374253868773
							],
							[
								112.12099124584938,
								24.949278469126057
							],
							[
								112.16476118418154,
								24.91199392338092
							],
							[
								112.1447624040618,
								24.793551540771034
							],
							[
								112.06636925673592,
								24.796574611828873
							],
							[
								111.99655439706783,
								24.735673935703687
							],
							[
								111.92596439014449,
								24.77487051026594
							],
							[
								111.79703169195909,
								24.76042694854482
							],
							[
								111.66711714094339,
								24.779676418931558
							],
							[
								111.51694542918824,
								24.642656357704766
							],
							[
								111.42816531817493,
								24.681026109067716
							],
							[
								111.47364057795028,
								24.7928539087809
							],
							[
								111.42971561088672,
								24.94341319416364
							],
							[
								111.46185835208138,
								25.019480903321153
							],
							[
								111.42692508292618,
								25.106193955886454
							],
							[
								111.27437625526,
								25.147664293572376
							],
							[
								111.12575483621669,
								25.04446645836049
							],
							[
								111.0790393411927,
								24.944240017363057
							],
							[
								111.0062789248326,
								24.93545502413008
							],
							[
								110.95460249241114,
								25.025346178283485
							],
							[
								110.99320478687156,
								25.15076487899597
							],
							[
								111.11376590387334,
								25.238640652444133
							],
							[
								111.16420210194548,
								25.36493785230016
							],
							[
								111.2537573593147,
								25.399121811722296
							],
							[
								111.31582075362496,
								25.503198146977013
							],
							[
								111.32372724771426,
								25.729825141517097
							],
							[
								111.41126712437824,
								25.802611396298857
							],
							[
								111.40832156768636,
								25.907850449738504
							],
							[
								111.25623782801335,
								25.868989772859862
							],
							[
								111.20208092689336,
								25.930278021713434
							],
							[
								111.25670291510744,
								26.210131741386903
							],
							[
								111.25189700734109,
								26.279714057058186
							],
							[
								111.12327436661872,
								26.305991523290288
							],
							[
								110.9354822123342,
								26.382472642698303
							],
							[
								110.87894819530305,
								26.275218206754857
							],
							[
								110.72402225082618,
								26.27431387008903
							],
							[
								110.68862389457706,
								26.332320665466483
							],
							[
								110.57705447818182,
								26.350794990396594
							],
							[
								110.53654015490423,
								26.22485952394797
							],
							[
								110.48455366412043,
								26.17155528444883
							],
							[
								110.34166832883028,
								26.11274750429385
							],
							[
								110.2469971053323,
								25.978207913564432
							],
							[
								110.13821821509862,
								26.051665961015317
							],
							[
								110.03362511590632,
								26.03649892798316
							],
							[
								110.06204715405289,
								26.149928697251653
							],
							[
								109.91166873582358,
								26.181218776825062
							],
							[
								109.83844323057065,
								26.045025539696894
							],
							[
								109.78134077365786,
								26.023760687705533
							],
							[
								109.77203901558823,
								25.90816050900031
							],
							[
								109.67659264483484,
								25.889066067345198
							],
							[
								109.67225182506161,
								25.98531342197691
							],
							[
								109.60316043490621,
								26.052673652267373
							],
							[
								109.45670942619904,
								26.038850206371933
							],
							[
								109.39929691002442,
								26.269947210994985
							],
							[
								109.29656416190653,
								26.312528590921687
							],
							[
								109.31501264931433,
								26.42572581619342
							],
							[
								109.40255252507893,
								26.537295234387585
							],
							[
								109.37723107325536,
								26.646151638087645
							],
							[
								109.29403201726376,
								26.727309474952335
							],
							[
								109.39707482284473,
								26.754672145902788
							],
							[
								109.50528527229744,
								26.824797064832666
							],
							[
								109.44384199381295,
								26.900993964299943
							],
							[
								109.50714562427123,
								26.97636404146735
							],
							[
								109.49918745333832,
								27.062482814830076
							],
							[
								109.43820926284718,
								27.131031601727074
							],
							[
								109.23057335807403,
								27.151986396255182
							],
							[
								109.15564253137774,
								27.079716905410862
							],
							[
								109.0954911640859,
								27.13444224731188
							],
							[
								108.95017703694072,
								27.026903591427583
							],
							[
								108.87421268057074,
								27.018118598194718
							],
							[
								108.79132368384091,
								27.08312755009638
							],
							[
								108.90010257407448,
								27.188805854006944
							],
							[
								109.0149276064239,
								27.26218638799145
							],
							[
								109.20638878781239,
								27.444759223359426
							],
							[
								109.41836551325781,
								27.559506741343057
							],
							[
								109.44725263939773,
								27.65001801222155
							],
							[
								109.41340457586057,
								27.738953151966427
							],
							[
								109.32824181510762,
								27.807656969393605
							],
							[
								109.30989668228608,
								27.970308539007874
							],
							[
								109.36265831942592,
								28.029633083999613
							],
							[
								109.29873457224272,
								28.09471955026703
							],
							[
								109.35428673734299,
								28.265174262082496
							],
							[
								109.26385298083034,
								28.322225043051304
							],
							[
								109.25837527859625,
								28.505908922458815
							],
							[
								109.28462690640663,
								28.573475857424853
							],
							[
								109.21321007718325,
								28.62879547852853
							],
							[
								109.28121626172111,
								28.729125271414176
							],
							[
								109.24674808235807,
								28.785530097236233
							],
							[
								109.24550784710942,
								28.931257636430814
							],
							[
								109.27480838439936,
								29.049260769468873
							],
							[
								109.20659549428666,
								29.104244492889023
							],
							[
								109.26922733027715,
								29.24234975793496
							],
							[
								109.33816368990239,
								29.289685370583385
							],
							[
								109.43231815036233,
								29.533908189111656
							],
							[
								109.47221235601535,
								29.568169663798926
							],
							[
								109.70000206874045,
								29.65573537888463
							],
							[
								109.7832011247321,
								29.73492951098811
							],
							[
								110.10390506356777,
								29.78541738500431
							],
							[
								110.3616671080506,
								29.65010264701951
							],
							[
								110.44672651601587,
								29.726687120114462
							],
							[
								110.59116214401769,
								29.77136139601157
							],
							[
								110.50057335787415,
								29.862570298880172
							],
							[
								110.46315962091973,
								30.013982244984675
							],
							[
								110.5433614442752,
								30.055013333098856
							],
							[
								110.7155989927993,
								30.029640204431928
							],
							[
								110.74185062060963,
								30.096173611522943
							],
							[
								111.24616092268843,
								30.03173310040222
							],
							[
								111.4149878283256,
								29.92579641407326
							],
							[
								111.58489993688261,
								29.90435069402926
							],
							[
								111.76860965381246,
								29.91959524232658
							],
							[
								111.92363895107673,
								29.85639496555521
							],
							[
								112.12631391755326,
								29.707153428887608
							],
							[
								112.17003217994113,
								29.64904328072288
							],
							[
								112.36309533088479,
								29.5721745876871
							],
							[
								112.4439172709653,
								29.641369329730793
							],
							[
								112.64814253105294,
								29.626899928688744
							],
							[
								112.8861641787338,
								29.791773587281256
							],
							[
								112.94559207561377,
								29.70929800080208
							],
							[
								112.90848839702198,
								29.600803331408628
							],
							[
								112.92781538267377,
								29.49522838028554
							],
							[
								113.0081205588167,
								29.518095200932777
							],
							[
								113.14568322060416,
								29.47207733789884
							],
							[
								113.18624922072496,
								29.531737778775465
							],
							[
								113.41584761037882,
								29.764565945062316
							],
							[
								113.51951053268493,
								29.841667182094795
							],
							[
								113.53615034406323,
								29.685733547265443
							],
							[
								113.63469730024025,
								29.68482920970024
							],
							[
								113.72936852373834,
								29.437092393699004
							],
							[
								113.5877234227977,
								29.293793647259037
							],
							[
								113.64136355998028,
								29.22175670041139
							],
							[
								113.65490278503557,
								29.12403656743365
							],
							[
								113.77282840370788,
								29.125302639305346
							],
							[
								113.902381220417,
								29.066339830418826
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 18,
					"name": "四川"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								105.4985530948494,
								32.90739736629541
							],
							[
								105.56826460173005,
								32.73045726189309
							],
							[
								105.63327355273225,
								32.70746124913737
							],
							[
								105.81341759624502,
								32.76210907577317
							],
							[
								105.87548099235397,
								32.84471385346157
							],
							[
								106.08234174987189,
								32.873523464336444
							],
							[
								106.05650353411079,
								32.71355906809657
							],
							[
								106.22894778910916,
								32.591964423219565
							],
							[
								106.3639783062539,
								32.63867991824361
							],
							[
								106.60396365779667,
								32.67552521441709
							],
							[
								106.71258751839923,
								32.73782115272397
							],
							[
								107.06533084474273,
								32.708313909859044
							],
							[
								107.09623335158784,
								32.669246528304626
							],
							[
								107.06998172377752,
								32.52292470990747
							],
							[
								107.20217003791686,
								32.452773953455164
							],
							[
								107.28412885865998,
								32.452928982186705
							],
							[
								107.37053185376203,
								32.51982412448379
							],
							[
								107.44830488526219,
								32.522227077917364
							],
							[
								107.45962202403717,
								32.4086422799173
							],
							[
								107.65919640508997,
								32.388617662275294
							],
							[
								107.84352623874497,
								32.22816234051962
							],
							[
								107.96005659433638,
								32.15834747995228
							],
							[
								108.05178226114242,
								32.22661204690846
							],
							[
								108.2367322124216,
								32.2626563583043
							],
							[
								108.47940473823809,
								32.25027985323257
							],
							[
								108.51836876790429,
								32.19756989203688
							],
							[
								108.38897098172544,
								32.18428904940015
							],
							[
								108.41920169500219,
								32.10000478779068
							],
							[
								108.34473595629936,
								32.0735464544054
							],
							[
								108.26778974799845,
								31.972906603157213
							],
							[
								108.28696170491878,
								31.922160345823244
							],
							[
								108.50069542865106,
								31.790824693304927
							],
							[
								108.5161983575681,
								31.708271593359342
							],
							[
								108.4067993506095,
								31.566032213216033
							],
							[
								108.22308963367965,
								31.46789866818898
							],
							[
								108.19404747880816,
								31.330930283805543
							],
							[
								108.03312706905905,
								31.222228908837053
							],
							[
								108.00677208936037,
								31.038622544694675
							],
							[
								107.93168623303325,
								30.948783067384596
							],
							[
								107.92951582179768,
								30.872663683182395
							],
							[
								107.84988244012249,
								30.809618435142653
							],
							[
								107.73629764212251,
								30.883179837179767
							],
							[
								107.5075777534106,
								30.821994941113672
							],
							[
								107.45667646734512,
								30.760861720991613
							],
							[
								107.47760542165287,
								30.60950145083129
							],
							[
								107.37213382421663,
								30.49986989987596
							],
							[
								107.22873172408981,
								30.238154609247744
							],
							[
								107.032929722029,
								30.057855536104142
							],
							[
								106.77036176977981,
								30.03656484569106
							],
							[
								106.71729007427746,
								30.05927663850605
							],
							[
								106.61781294211352,
								30.268695379987776
							],
							[
								106.53234012299822,
								30.33765757893417
							],
							[
								106.38490726056165,
								30.263579412959558
							],
							[
								106.23902469263544,
								30.22024872509857
							],
							[
								106.12471642512287,
								30.342334296390675
							],
							[
								105.79171349468203,
								30.423362942046168
							],
							[
								105.70866946832126,
								30.274095566956845
							],
							[
								105.55720584537346,
								30.147591661525922
							],
							[
								105.73890018069875,
								30.032637437068047
							],
							[
								105.70996137861476,
								29.86750539785581
							],
							[
								105.55751590373592,
								29.80391754835614
							],
							[
								105.55146976072086,
								29.747616075321673
							],
							[
								105.41168501175383,
								29.703174343421267
							],
							[
								105.29107221880793,
								29.584783636755418
							],
							[
								105.31484337791954,
								29.46959686920013
							],
							[
								105.40517378074532,
								29.429961045965513
							],
							[
								105.42238203290447,
								29.33355866080359
							],
							[
								105.64459069240661,
								29.269660752941377
							],
							[
								105.70060794460096,
								29.223694565851503
							],
							[
								105.74530805891976,
								28.994767971564613
							],
							[
								105.87796146015324,
								28.920043850443392
							],
							[
								106.00844445194986,
								28.973399766785775
							],
							[
								106.26031538304858,
								28.869323432430434
							],
							[
								106.29803917836534,
								28.672436224751948
							],
							[
								106.38242679186294,
								28.572494005493894
							],
							[
								106.26868696513134,
								28.556629340471687
							],
							[
								106.18879520103764,
								28.584612128147143
							],
							[
								105.98441491131905,
								28.753542384773226
							],
							[
								105.89191409725777,
								28.60931346324574
							],
							[
								105.68319298686686,
								28.58344940816366
							],
							[
								105.62056115087643,
								28.482421983287963
							],
							[
								105.66722496995635,
								28.31829763442829
							],
							[
								105.846800571789,
								28.26915334754895
							],
							[
								105.90622846866887,
								28.150581772830577
							],
							[
								106.00896121588738,
								28.140246486885815
							],
							[
								106.10942020088152,
								28.17471466714815
							],
							[
								106.19933719255738,
								28.124252631553674
							],
							[
								106.21525353442308,
								28.056091417385005
							],
							[
								106.29896935435215,
								28.00043589949715
							],
							[
								106.34537479011442,
								27.83494212507904
							],
							[
								106.24760298119259,
								27.77523000735897
							],
							[
								106.10358076434073,
								27.788071601323338
							],
							[
								106.03919192916413,
								27.756807359272273
							],
							[
								105.87594608034726,
								27.745206000556436
							],
							[
								105.64691613237358,
								27.678129991106204
							],
							[
								105.52449466429726,
								27.774635728156312
							],
							[
								105.36078372568835,
								27.76001129838272
							],
							[
								105.29696333219198,
								27.721744899807277
							],
							[
								105.2281303235556,
								27.855793565021003
							],
							[
								105.28239057836248,
								28.000745957859692
							],
							[
								105.17190636578619,
								28.061672472406684
							],
							[
								105.05573774629994,
								28.088130804892785
							],
							[
								104.96618248893071,
								28.047797350567294
							],
							[
								104.9582759948413,
								27.95653676995596
							],
							[
								104.89740115803704,
								27.901113796064806
							],
							[
								104.70237430233226,
								27.88294953129588
							],
							[
								104.604757522142,
								27.845845851804626
							],
							[
								104.3753658389623,
								27.961678575405898
							],
							[
								104.3338179869105,
								28.0467379833712
							],
							[
								104.44461225784943,
								28.09988719323934
							],
							[
								104.3765027196248,
								28.282304998976485
							],
							[
								104.26849897664641,
								28.333800564244626
							],
							[
								104.25005049013811,
								28.530791123811298
							],
							[
								104.43996137881453,
								28.605360216201007
							],
							[
								104.41422651584111,
								28.640112616404167
							],
							[
								104.05678063361933,
								28.63047496244954
							],
							[
								103.83669070761016,
								28.604920965729974
							],
							[
								103.79524621014446,
								28.53117869743889
							],
							[
								103.88030561721052,
								28.32573904142359
							],
							[
								103.7089465678298,
								28.215874946471615
							],
							[
								103.66626183511562,
								28.263288071687157
							],
							[
								103.57179731719248,
								28.243185940578655
							],
							[
								103.45903934059311,
								28.13476878555099
							],
							[
								103.43464806475635,
								28.06815786409419
							],
							[
								103.5142297713868,
								27.971445421469014
							],
							[
								103.50854536267832,
								27.86452688230972
							],
							[
								103.41475263922297,
								27.742906399011076
							],
							[
								103.21812381396279,
								27.56687063217393
							],
							[
								103.12076541529166,
								27.412254746959007
							],
							[
								102.97741499200828,
								27.388896999896616
							],
							[
								102.88946170509365,
								27.29148692528139
							],
							[
								102.9138529809303,
								27.112298896177123
							],
							[
								102.87819624226279,
								27.031967882511765
							],
							[
								102.90134728375011,
								26.92473928499001
							],
							[
								102.97529625941479,
								26.831127427788545
							],
							[
								103.05792687372627,
								26.55724233676446
							],
							[
								102.99581180167326,
								26.485412096391144
							],
							[
								103.00325320776926,
								26.400352688425784
							],
							[
								102.87819624226279,
								26.3650576849642
							],
							[
								102.7202730651498,
								26.237623603546467
							],
							[
								102.60994388220433,
								26.26020620425288
							],
							[
								102.62648034079507,
								26.345136420109668
							],
							[
								102.56813764863352,
								26.378648586862766
							],
							[
								102.2520845888327,
								26.228864447835946
							],
							[
								102.1125582213848,
								26.08442881893484
							],
							[
								101.92156212798983,
								26.09887238245446
							],
							[
								101.84952518114216,
								26.034845282483758
							],
							[
								101.7756795591643,
								26.106520494125533
							],
							[
								101.76374230276502,
								26.17633535379352
							],
							[
								101.6766158390497,
								26.227701727852462
							],
							[
								101.59491539892662,
								26.208684801462397
							],
							[
								101.57998090989105,
								26.306921699277012
							],
							[
								101.64364627465585,
								26.34947723988273
							],
							[
								101.54416914339123,
								26.49497223597993
							],
							[
								101.41244591724524,
								26.569670517780168
							],
							[
								101.50287967285857,
								26.766428534249457
							],
							[
								101.37069135871923,
								26.774645086701383
							],
							[
								101.34242435110292,
								26.871047471863392
							],
							[
								101.1414547060698,
								27.04486115242028
							],
							[
								101.17282230000916,
								27.191053778708977
							],
							[
								101.00384036743901,
								27.197513332874053
							],
							[
								100.99174808140884,
								27.330812690153493
							],
							[
								100.94084679624262,
								27.434733994878002
							],
							[
								100.86694949742133,
								27.494652818173023
							],
							[
								100.87211714129302,
								27.561987210041764
							],
							[
								100.6609155622034,
								27.875094713150446
							],
							[
								100.53260298074292,
								27.816261095473237
							],
							[
								100.29592492109816,
								27.852615465231537
							],
							[
								100.20208051990011,
								27.898788356997102
							],
							[
								100.05883344940412,
								28.066142483388944
							],
							[
								100.04689619300484,
								28.18709117311917
							],
							[
								100.16203128461609,
								28.236261298420203
							],
							[
								100.14306603417009,
								28.341577867124812
							],
							[
								100.00095584523609,
								28.45619619389916
							],
							[
								99.93387983578583,
								28.569367580749287
							],
							[
								99.84561648960926,
								28.603809923489194
							],
							[
								99.82840823834948,
								28.672565415961145
							],
							[
								99.73234174997174,
								28.745015773958755
							],
							[
								99.70474653502453,
								28.844647934854265
							],
							[
								99.62867882676653,
								28.814623928051844
							],
							[
								99.53436933757484,
								28.680807806834792
							],
							[
								99.50289839084809,
								28.5793669699097
							],
							[
								99.39313764868348,
								28.54278005615464
							],
							[
								99.38864179927964,
								28.334317328182124
							],
							[
								99.41644371890254,
								28.25476146087277
							],
							[
								99.38151045064677,
								28.184533189155303
							],
							[
								99.27474694201783,
								28.277318224056813
							],
							[
								99.16255740799795,
								28.438161119440167
							],
							[
								99.16948205015649,
								28.602492173874708
							],
							[
								99.11770226404832,
								28.70871308014449
							],
							[
								99.0992537784391,
								28.85604258889441
							],
							[
								99.1210612327896,
								28.96466644949706
							],
							[
								99.10881391802786,
								29.223772081116635
							],
							[
								99.0625118350531,
								29.30828888582343
							],
							[
								99.04199629099605,
								29.562459418467398
							],
							[
								98.98675418515751,
								29.650903631797206
							],
							[
								99.005461053185,
								29.8200922708416
							],
							[
								99.05631066330642,
								29.91533193602001
							],
							[
								99.03408979690664,
								30.05532339146137
							],
							[
								98.98675418515751,
								30.144361883993753
							],
							[
								98.96070926292208,
								30.459975694222862
							],
							[
								98.90536380429614,
								30.663813381582287
							],
							[
								98.95430138470113,
								30.747865099194996
							],
							[
								98.77508751807454,
								30.90222260199147
							],
							[
								98.80304446822765,
								30.990976874583083
							],
							[
								98.62026492728461,
								31.187941595728063
							],
							[
								98.61137658126415,
								31.256180325161864
							],
							[
								98.68269005680071,
								31.315918281303652
							],
							[
								98.76780114071005,
								31.230367946923195
							],
							[
								98.88495161302654,
								31.354081326192244
							],
							[
								98.59215294839987,
								31.59882090955739
							],
							[
								98.55871829601256,
								31.677110704095668
							],
							[
								98.44549523321848,
								31.803614610425967
							],
							[
								98.42084557496327,
								31.8781837019163
							],
							[
								98.45298831615781,
								31.984094549823624
							],
							[
								98.30958621603105,
								32.12871104587808
							],
							[
								98.22018598829271,
								32.252191881150424
							],
							[
								98.2057682640941,
								32.355648097881414
							],
							[
								98.01415205307472,
								32.46450450338011
							],
							[
								97.7157206556837,
								32.544189560999484
							],
							[
								97.43067345641487,
								32.70032990230317
							],
							[
								97.36096194863501,
								32.89703624102975
							],
							[
								97.504260695075,
								33.04560598412883
							],
							[
								97.50053999202703,
								33.19435659438136
							],
							[
								97.61567508273885,
								33.32837942207263
							],
							[
								97.7242989442409,
								33.406126614251804
							],
							[
								97.53929731611834,
								33.45372060841933
							],
							[
								97.47738895143897,
								33.56224111623459
							],
							[
								97.3905208683434,
								33.61138540311384
							],
							[
								97.3835445502408,
								33.86987091710907
							],
							[
								97.61024905824746,
								33.93087494602193
							],
							[
								97.69567020141864,
								34.00523733193728
							],
							[
								97.74507286981708,
								33.86485830286841
							],
							[
								97.81907352142582,
								33.86418651019929
							],
							[
								98.03492597865096,
								33.95978790878502
							],
							[
								98.21181440620984,
								33.939453232780465
							],
							[
								98.30167972194164,
								33.84584137647835
							],
							[
								98.45794925265585,
								33.84010529182575
							],
							[
								98.64584476062714,
								33.676161811018716
							],
							[
								98.63328738840227,
								33.60771637600993
							],
							[
								98.7357100772582,
								33.4897649198152
							],
							[
								98.7729171077383,
								33.30272207346488
							],
							[
								98.8520854023194,
								33.17487457909857
							],
							[
								99.10064904241938,
								33.072451891141895
							],
							[
								99.22529259587657,
								32.99891632752647
							],
							[
								99.28937137179133,
								32.88714020375744
							],
							[
								99.50940962095723,
								32.83543793381361
							],
							[
								99.69854536327784,
								32.744616604572684
							],
							[
								99.7692903989327,
								32.92176341454987
							],
							[
								99.84096561057441,
								32.9570067411681
							],
							[
								100.04689619300484,
								32.93548350675843
							],
							[
								100.15862063993058,
								32.78226288552375
							],
							[
								100.11903649264002,
								32.67087433538231
							],
							[
								100.22316450383875,
								32.63689708153504
							],
							[
								100.25499718577157,
								32.72580638285831
							],
							[
								100.3994328146726,
								32.75838837272522
							],
							[
								100.4984965347872,
								32.669091497774446
							],
							[
								100.56092166520273,
								32.5633356803973
							],
							[
								100.47302005423205,
								32.48527842895632
							],
							[
								100.53120771676265,
								32.40339712257915
							],
							[
								100.60303795803532,
								32.451223659844004
							],
							[
								100.69708906480844,
								32.68573131005192
							],
							[
								100.90219282403956,
								32.63046336489239
							],
							[
								101.17080691930397,
								32.68834096906048
							],
							[
								101.23194013942583,
								32.857710476157564
							],
							[
								101.13142947758837,
								32.93835154908473
							],
							[
								101.16414065956377,
								33.128081569708655
							],
							[
								101.22000288302667,
								33.17061127369129
							],
							[
								101.44515709832143,
								33.235852768690336
							],
							[
								101.64364627465585,
								33.1277715113462
							],
							[
								101.72694868433427,
								33.26778880520919
							],
							[
								101.66514367064383,
								33.32039541271811
							],
							[
								101.69108524009175,
								33.42028595603202
							],
							[
								101.77753991113792,
								33.53004669909589
							],
							[
								101.88399336140452,
								33.54632477526815
							],
							[
								101.9232157743885,
								33.40638499577091
							],
							[
								101.83216190025149,
								33.26920990671178
							],
							[
								101.86368452382175,
								33.12262970589623
							],
							[
								102.00424441914458,
								33.21879954706148
							],
							[
								102.09938073063614,
								33.2222360301686
							],
							[
								102.13095503104978,
								33.28466116058408
							],
							[
								102.27874962779305,
								33.37775625294876
							],
							[
								102.4818380072183,
								33.46503774719426
							],
							[
								102.4818380072183,
								33.540149441043894
							],
							[
								102.35600589355715,
								33.60939585993103
							],
							[
								102.34313846207033,
								33.72517690668886
							],
							[
								102.17121097190886,
								33.9417528352252
							],
							[
								102.31936730295871,
								33.98735728620983
							],
							[
								102.44060021442834,
								34.059730129841626
							],
							[
								102.61764367071879,
								34.08350128805395
							],
							[
								102.59779992112948,
								34.16546010969634
							],
							[
								102.78181969642179,
								34.27418732398584
							],
							[
								102.93059614509599,
								34.295581367186315
							],
							[
								103.00056603439498,
								34.21398427985062
							],
							[
								103.12009362172324,
								34.16861237196338
							],
							[
								103.15239139164942,
								34.108512682414386
							],
							[
								103.1421077816488,
								33.96154490797116
							],
							[
								103.18417239763806,
								33.822096055788364
							],
							[
								103.35067386330815,
								33.75569183990646
							],
							[
								103.55861982644387,
								33.80687734591277
							],
							[
								103.52275638220124,
								33.714118150332354
							],
							[
								103.74512007043484,
								33.67603261980952
							],
							[
								104.0930058130678,
								33.668539536870156
							],
							[
								104.15630944172733,
								33.62402029150326
							],
							[
								104.17465457634756,
								33.49015249344279
							],
							[
								104.2928902533825,
								33.363571071847446
							],
							[
								104.28059126177726,
								33.272052109717094
							],
							[
								104.32823693188885,
								33.14035472289217
							],
							[
								104.40585493375818,
								33.06327932428141
							],
							[
								104.32126061378625,
								32.9527175973393
							],
							[
								104.28885949107269,
								32.8478919541503
							],
							[
								104.40569990412729,
								32.809367174055836
							],
							[
								104.55840376232374,
								32.68834096906048
							],
							[
								104.64542687415093,
								32.657877712686286
							],
							[
								104.8409704937933,
								32.63981679890611
							],
							[
								104.89833133312447,
								32.611834011230656
							],
							[
								105.03181155755732,
								32.63867991824361
							],
							[
								105.14679162043694,
								32.60834585217927
							],
							[
								105.2699882339698,
								32.641702989301535
							],
							[
								105.43524946529055,
								32.77355540575738
							],
							[
								105.38636355993032,
								32.82337148710451
							],
							[
								105.43090864461823,
								32.911479804549344
							],
							[
								105.4985530948494,
								32.90739736629541
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 19,
					"name": "云南"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								105.29696333219198,
								27.721744899807277
							],
							[
								105.19738284724059,
								27.39863800753801
							],
							[
								105.08255781489117,
								27.412513129377402
							],
							[
								104.87089114780821,
								27.30975454373717
							],
							[
								104.78340294798767,
								27.332207953234473
							],
							[
								104.59421552882361,
								27.31378530514769
							],
							[
								104.44368208186262,
								27.347219957535003
							],
							[
								104.34441165617295,
								27.441193549043078
							],
							[
								104.17434451708573,
								27.271513984482795
							],
							[
								103.98112633741056,
								27.399516505782117
							],
							[
								103.9113114768432,
								27.390369778242643
							],
							[
								103.69540734277467,
								27.151702175415068
							],
							[
								103.7008850441095,
								27.052431748826137
							],
							[
								103.77829634040387,
								26.955874334932616
							],
							[
								103.77829634040387,
								26.88001333314878
							],
							[
								103.71731814991267,
								26.798958849071568
							],
							[
								103.77509240129325,
								26.731701972468073
							],
							[
								103.75783247319004,
								26.629434312343676
							],
							[
								103.82924930241342,
								26.547113756394765
							],
							[
								104.02040042543922,
								26.51419586794495
							],
							[
								104.15336388593465,
								26.65124176669417
							],
							[
								104.21806277857439,
								26.626617946860705
							],
							[
								104.35851932200904,
								26.647831122008654
							],
							[
								104.55943729019873,
								26.584708360502418
							],
							[
								104.67550255689741,
								26.379268704487117
							],
							[
								104.54517459473169,
								26.270412298988447
							],
							[
								104.49897586544387,
								26.030788683550924
							],
							[
								104.39293582632729,
								25.94787384750009
							],
							[
								104.42058271721862,
								25.856923326150564
							],
							[
								104.30622277196329,
								25.664764512772024
							],
							[
								104.42244306829298,
								25.579265855235008
							],
							[
								104.43267500234941,
								25.506815497237426
							],
							[
								104.55354617681462,
								25.48454295489347
							],
							[
								104.56584516841974,
								25.38119009005061
							],
							[
								104.66888797400088,
								25.296828314974732
							],
							[
								104.71973758322287,
								25.210942083810124
							],
							[
								104.68904178285203,
								25.10125885691076
							],
							[
								104.70702518136704,
								25.017310492085528
							],
							[
								104.54563968272521,
								24.81342112878204
							],
							[
								104.53985192302781,
								24.74177175556207
							],
							[
								104.49463504387222,
								24.69820852280523
							],
							[
								104.50186974529248,
								24.57819000906173
							],
							[
								104.59917646712029,
								24.40251597743037
							],
							[
								104.66702762202715,
								24.339754950230855
							],
							[
								104.72872928293015,
								24.36419790291086
							],
							[
								104.7526554707735,
								24.46832591410964
							],
							[
								104.96106652190258,
								24.416416937691565
							],
							[
								105.06080203738412,
								24.430679633158547
							],
							[
								105.17624718555913,
								24.309911811481044
							],
							[
								105.16994266192427,
								24.1673623720759
							],
							[
								105.25303836512865,
								24.08550690412045
							],
							[
								105.32026940331025,
								24.118140570830803
							],
							[
								105.44718672079063,
								24.037602850691115
							],
							[
								105.5320910991249,
								24.126305447338495
							],
							[
								105.78799279163411,
								24.020652980950274
							],
							[
								105.87222537640008,
								24.024709580782485
							],
							[
								105.9707723325771,
								24.087728990400592
							],
							[
								106.15742760619901,
								23.973730781250595
							],
							[
								106.19375613843516,
								23.86939606447686
							],
							[
								106.1521566104393,
								23.750411077709117
							],
							[
								106.12812706890912,
								23.54065644034256
							],
							[
								105.983019647339,
								23.46903290554411
							],
							[
								105.84804080613827,
								23.519391588351198
							],
							[
								105.52132535803946,
								23.16314776222967
							],
							[
								105.43085616100012,
								23.267805685000013
							],
							[
								105.33225752800013,
								23.31795766200014
							],
							[
								105.21753584900017,
								23.265351055000053
							],
							[
								105.06105961100008,
								23.232459005000123
							],
							[
								104.9452010500001,
								23.159827779000068
							],
							[
								104.87006351800005,
								23.163548482000095
							],
							[
								104.79792321800005,
								23.085568746
							],
							[
								104.82701704900006,
								22.95428477000013
							],
							[
								104.72821171100003,
								22.839098002000128
							],
							[
								104.66273767200005,
								22.810934346000096
							],
							[
								104.55354537000005,
								22.836049093000014
							],
							[
								104.34017338100011,
								22.686368306000134
							],
							[
								104.24948124200006,
								22.72832957000014
							],
							[
								104.21325606300013,
								22.825016175000115
							],
							[
								104.07331628500009,
								22.782667339000113
							],
							[
								104.02381026300003,
								22.71918284100005
							],
							[
								103.9853629970001,
								22.52715321900007
							],
							[
								103.86681726100011,
								22.57541900700008
							],
							[
								103.64693404200005,
								22.799048768000148
							],
							[
								103.59003829000017,
								22.76801707000004
							],
							[
								103.55091923000003,
								22.640789694000148
							],
							[
								103.47314620000003,
								22.59164540600011
							],
							[
								103.4017293710001,
								22.737838033000116
							],
							[
								103.30964196800011,
								22.787938334000046
							],
							[
								103.25248783400008,
								22.678565165000123
							],
							[
								103.14174524000009,
								22.607044983000094
							],
							[
								103.14200362100013,
								22.53779856400007
							],
							[
								102.9890930580001,
								22.43759796200004
							],
							[
								102.8936983640001,
								22.48736236600007
							],
							[
								102.8451741940001,
								22.585237529000068
							],
							[
								102.69272871900006,
								22.670503642000114
							],
							[
								102.53578739400012,
								22.695825094000014
							],
							[
								102.44271814000012,
								22.765174866000052
							],
							[
								102.37688236500009,
								22.61557159500009
							],
							[
								102.25254886900007,
								22.495475566000067
							],
							[
								102.2180290120001,
								22.41067454000003
							],
							[
								102.01457889800014,
								22.446072896000146
							],
							[
								101.81779504400004,
								22.40633372000005
							],
							[
								101.7131502680001,
								22.491548157000096
							],
							[
								101.65454919500007,
								22.446124573000077
							],
							[
								101.60612837700012,
								22.284842427000058
							],
							[
								101.51822676600005,
								22.228205058000043
							],
							[
								101.60680017100003,
								21.967600810000135
							],
							[
								101.67366947500011,
								21.931375631
							],
							[
								101.75154585800004,
								21.806370341000047
							],
							[
								101.72854984500009,
								21.7175385540001
							],
							[
								101.79355879700006,
								21.58824412100006
							],
							[
								101.73475101700006,
								21.554396057000076
							],
							[
								101.72250370300009,
								21.304230448000112
							],
							[
								101.82373783400016,
								21.23446726500015
							],
							[
								101.75599003200006,
								21.14325836200007
							],
							[
								101.68829390500014,
								21.14584218300007
							],
							[
								101.58395918800011,
								21.224390360000115
							],
							[
								101.4951274010001,
								21.242838847000115
							],
							[
								101.27529585800005,
								21.17410919200006
							],
							[
								101.20899499500013,
								21.245526021000046
							],
							[
								101.23478153500014,
								21.363658345000147
							],
							[
								101.17142622900013,
								21.403397522000148
							],
							[
								101.17385502100007,
								21.61191192600009
							],
							[
								101.06869348200013,
								21.762031962000094
							],
							[
								100.79703047700008,
								21.626122946000066
							],
							[
								100.70396122300014,
								21.516413879000055
							],
							[
								100.62174401800007,
								21.46907826800009
							],
							[
								100.45668949400005,
								21.455022278000087
							],
							[
								100.32651656100006,
								21.5242686980001
							],
							[
								100.18714522300007,
								21.427892151
							],
							[
								100.08999353000007,
								21.528919577000067
							],
							[
								100.11572839400009,
								21.62948191400008
							],
							[
								100.08234541900003,
								21.68446563800012
							],
							[
								99.95026045800012,
								21.721155904000085
							],
							[
								99.92018477400006,
								21.85200063100004
							],
							[
								99.96566003400011,
								21.9630016080001
							],
							[
								99.94240564000012,
								22.045528869000123
							],
							[
								99.82101770100013,
								22.01777862600008
							],
							[
								99.73916223200007,
								22.066767884000086
							],
							[
								99.43861210200009,
								22.124232076000112
							],
							[
								99.36492150900011,
								22.098858948000014
							],
							[
								99.16638065600006,
								22.132086894000054
							],
							[
								99.16638065600006,
								22.204640605000066
							],
							[
								99.28275598100015,
								22.41191477500007
							],
							[
								99.35779016200013,
								22.495475566000067
							],
							[
								99.35499963400008,
								22.608543600000104
							],
							[
								99.30787072800007,
								22.71959625200006
							],
							[
								99.41442753200005,
								22.856900533000072
							],
							[
								99.42993046000004,
								22.93674062200006
							],
							[
								99.53462691200008,
								22.94932383200009
							],
							[
								99.47819624900006,
								23.065750834000113
							],
							[
								99.35096887200018,
								23.119261780000073
							],
							[
								99.21661014900008,
								23.057379252000146
							],
							[
								99.0749133710001,
								23.101665955000072
							],
							[
								99.02644087800013,
								23.16044789700004
							],
							[
								98.85900923700012,
								23.179387309000106
							],
							[
								98.91068566900009,
								23.297597148000108
							],
							[
								98.87554569500003,
								23.446425273000045
							],
							[
								98.78087447100012,
								23.53285410600003
							],
							[
								98.8573555910001,
								23.60434845000006
							],
							[
								98.77787723800009,
								23.769299621000073
							],
							[
								98.66367232300013,
								23.79694651300008
							],
							[
								98.66325891200012,
								23.96954579700008
							],
							[
								98.85621871000006,
								24.083802388000038
							],
							[
								98.86696740800011,
								24.14325612400009
							],
							[
								98.7161755780001,
								24.121345317000134
							],
							[
								98.58522749900004,
								24.07571502700003
							],
							[
								98.50326867700005,
								24.12126780200012
							],
							[
								98.33066939300005,
								24.099486186000092
							],
							[
								98.18153120900013,
								24.1186581420001
							],
							[
								97.88997277800013,
								24.022617493000013
							],
							[
								97.63706831900004,
								23.863557435000075
							],
							[
								97.51645552600013,
								23.942829081000127
							],
							[
								97.70765832500018,
								24.125298564000104
							],
							[
								97.71840702300011,
								24.27766652400001
							],
							[
								97.6398588460001,
								24.4392845670001
							],
							[
								97.51955611200009,
								24.430783794
							],
							[
								97.53609257000011,
								24.745028178000098
							],
							[
								97.66394006400003,
								24.829777527000118
							],
							[
								97.74848270700011,
								24.826470235000016
							],
							[
								97.70331750500003,
								24.9604155480001
							],
							[
								97.73752730300009,
								25.090510967000057
							],
							[
								97.82362023900009,
								25.261611633000143
							],
							[
								97.88893925000013,
								25.205646057000138
							],
							[
								98.04489872300013,
								25.31194447900012
							],
							[
								98.10835738100008,
								25.38889068600014
							],
							[
								98.09946903500008,
								25.49332875600001
							],
							[
								98.15021529100005,
								25.61306305000005
							],
							[
								98.2766158450001,
								25.55244659400006
							],
							[
								98.3326330970001,
								25.566967672000118
							],
							[
								98.46130741400009,
								25.794654033000086
							],
							[
								98.50946984900008,
								25.83806223600007
							],
							[
								98.61003218700006,
								25.800596822000102
							],
							[
								98.69240441900007,
								25.878989971000095
							],
							[
								98.5824369720001,
								25.982291159000056
							],
							[
								98.54553999900008,
								26.10564280300008
							],
							[
								98.7055302330001,
								26.174940898000102
							],
							[
								98.65778120900006,
								26.311625061000143
							],
							[
								98.7172091060001,
								26.408725077000042
							],
							[
								98.72113651600006,
								26.5388980110001
							],
							[
								98.7555530190001,
								26.6250426230001
							],
							[
								98.74924849500019,
								26.771441956000075
							],
							[
								98.71452193200008,
								26.862030741000098
							],
							[
								98.67256066900006,
								27.175603332000094
							],
							[
								98.70418664600004,
								27.304174296000042
							],
							[
								98.67442102100006,
								27.386598206000116
							],
							[
								98.67927860500009,
								27.577335918000045
							],
							[
								98.40001916500012,
								27.67572784400008
							],
							[
								98.38327600100007,
								27.555786845000085
							],
							[
								98.29470259600009,
								27.536614889000077
							],
							[
								98.20437219300004,
								27.727300924000104
							],
							[
								98.17667362500003,
								27.898117371000097
							],
							[
								98.10711714700011,
								27.97307403600007
							],
							[
								98.11500227621707,
								28.14388835708101
							],
							[
								98.23015953993087,
								28.20287832287633
							],
							[
								98.29976769402384,
								28.354807033817593
							],
							[
								98.40999352418174,
								28.250601508253055
							],
							[
								98.48988528827545,
								28.248069362710936
							],
							[
								98.5758231953842,
								28.317548326494006
							],
							[
								98.64041873613576,
								28.42413096796986
							],
							[
								98.58920739080844,
								28.670291652837506
							],
							[
								98.67814253055332,
								28.757056383145596
							],
							[
								98.63871341289365,
								28.878651028022517
							],
							[
								98.6648100119724,
								28.97417491314178
							],
							[
								98.7850093928692,
								29.000245672899467
							],
							[
								98.87347944462061,
								28.811807563468335
							],
							[
								99.00628787638436,
								29.07316111889051
							],
							[
								98.99016482984302,
								29.201990465187862
							],
							[
								99.10881391802786,
								29.223772081116635
							],
							[
								99.1210612327896,
								28.96466644949706
							],
							[
								99.0992537784391,
								28.85604258889441
							],
							[
								99.11770226404832,
								28.70871308014449
							],
							[
								99.16948205015649,
								28.602492173874708
							],
							[
								99.16255740799795,
								28.438161119440167
							],
							[
								99.27474694201783,
								28.277318224056813
							],
							[
								99.38151045064677,
								28.184533189155303
							],
							[
								99.41644371890254,
								28.25476146087277
							],
							[
								99.38864179927964,
								28.334317328182124
							],
							[
								99.39313764868348,
								28.54278005615464
							],
							[
								99.50289839084809,
								28.5793669699097
							],
							[
								99.53436933757484,
								28.680807806834792
							],
							[
								99.62867882676653,
								28.814623928051844
							],
							[
								99.70474653502453,
								28.844647934854265
							],
							[
								99.73234174997174,
								28.745015773958755
							],
							[
								99.82840823834948,
								28.672565415961145
							],
							[
								99.84561648960926,
								28.603809923489194
							],
							[
								99.93387983578583,
								28.569367580749287
							],
							[
								100.00095584523609,
								28.45619619389916
							],
							[
								100.14306603417009,
								28.341577867124812
							],
							[
								100.16203128461609,
								28.236261298420203
							],
							[
								100.04689619300484,
								28.18709117311917
							],
							[
								100.05883344940412,
								28.066142483388944
							],
							[
								100.20208051990011,
								27.898788356997102
							],
							[
								100.29592492109816,
								27.852615465231537
							],
							[
								100.53260298074292,
								27.816261095473237
							],
							[
								100.6609155622034,
								27.875094713150446
							],
							[
								100.87211714129302,
								27.561987210041764
							],
							[
								100.86694949742133,
								27.494652818173023
							],
							[
								100.94084679624262,
								27.434733994878002
							],
							[
								100.99174808140884,
								27.330812690153493
							],
							[
								101.00384036743901,
								27.197513332874053
							],
							[
								101.17282230000916,
								27.191053778708977
							],
							[
								101.1414547060698,
								27.04486115242028
							],
							[
								101.34242435110292,
								26.871047471863392
							],
							[
								101.37069135871923,
								26.774645086701383
							],
							[
								101.50287967285857,
								26.766428534249457
							],
							[
								101.41244591724524,
								26.569670517780168
							],
							[
								101.54416914339123,
								26.49497223597993
							],
							[
								101.64364627465585,
								26.34947723988273
							],
							[
								101.57998090989105,
								26.306921699277012
							],
							[
								101.59491539892662,
								26.208684801462397
							],
							[
								101.6766158390497,
								26.227701727852462
							],
							[
								101.76374230276502,
								26.17633535379352
							],
							[
								101.7756795591643,
								26.106520494125533
							],
							[
								101.84952518114216,
								26.034845282483758
							],
							[
								101.92156212798983,
								26.09887238245446
							],
							[
								102.1125582213848,
								26.08442881893484
							],
							[
								102.2520845888327,
								26.228864447835946
							],
							[
								102.56813764863352,
								26.378648586862766
							],
							[
								102.62648034079507,
								26.345136420109668
							],
							[
								102.60994388220433,
								26.26020620425288
							],
							[
								102.7202730651498,
								26.237623603546467
							],
							[
								102.87819624226279,
								26.3650576849642
							],
							[
								103.00325320776926,
								26.400352688425784
							],
							[
								102.99581180167326,
								26.485412096391144
							],
							[
								103.05792687372627,
								26.55724233676446
							],
							[
								102.97529625941479,
								26.831127427788545
							],
							[
								102.90134728375011,
								26.92473928499001
							],
							[
								102.87819624226279,
								27.031967882511765
							],
							[
								102.9138529809303,
								27.112298896177123
							],
							[
								102.88946170509365,
								27.29148692528139
							],
							[
								102.97741499200828,
								27.388896999896616
							],
							[
								103.12076541529166,
								27.412254746959007
							],
							[
								103.21812381396279,
								27.56687063217393
							],
							[
								103.41475263922297,
								27.742906399011076
							],
							[
								103.50854536267832,
								27.86452688230972
							],
							[
								103.5142297713868,
								27.971445421469014
							],
							[
								103.43464806475635,
								28.06815786409419
							],
							[
								103.45903934059311,
								28.13476878555099
							],
							[
								103.57179731719248,
								28.243185940578655
							],
							[
								103.66626183511562,
								28.263288071687157
							],
							[
								103.7089465678298,
								28.215874946471615
							],
							[
								103.88030561721052,
								28.32573904142359
							],
							[
								103.79524621014446,
								28.53117869743889
							],
							[
								103.83669070761016,
								28.604920965729974
							],
							[
								104.05678063361933,
								28.63047496244954
							],
							[
								104.41422651584111,
								28.640112616404167
							],
							[
								104.43996137881453,
								28.605360216201007
							],
							[
								104.25005049013811,
								28.530791123811298
							],
							[
								104.26849897664641,
								28.333800564244626
							],
							[
								104.3765027196248,
								28.282304998976485
							],
							[
								104.44461225784943,
								28.09988719323934
							],
							[
								104.3338179869105,
								28.0467379833712
							],
							[
								104.3753658389623,
								27.961678575405898
							],
							[
								104.604757522142,
								27.845845851804626
							],
							[
								104.70237430233226,
								27.88294953129588
							],
							[
								104.89740115803704,
								27.901113796064806
							],
							[
								104.9582759948413,
								27.95653676995596
							],
							[
								104.96618248893071,
								28.047797350567294
							],
							[
								105.05573774629994,
								28.088130804892785
							],
							[
								105.17190636578619,
								28.061672472406684
							],
							[
								105.28239057836248,
								28.000745957859692
							],
							[
								105.2281303235556,
								27.855793565021003
							],
							[
								105.29696333219198,
								27.721744899807277
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 20,
					"name": "河北"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									118.64873628100008,
									39.04465116700004
								],
								[
									118.51430835400004,
									38.919445031000066
								],
								[
									118.4706979660001,
									38.970550754000044
								],
								[
									118.64873628100008,
									39.04465116700004
								]
							]
						],
						[
							[
								[
									116.87563642807868,
									39.686466783215565
								],
								[
									116.92219689257263,
									39.77359324783018
								],
								[
									116.78143029167472,
									39.88965851542821
								],
								[
									116.74422326119463,
									39.95900828710273
								],
								[
									116.82938602104804,
									40.03667796491612
								],
								[
									116.98767093336699,
									40.03435252494904
								],
								[
									117.23907677557281,
									40.0926177027448
								],
								[
									117.14750613839749,
									39.94800120669046
								],
								[
									117.20290327386704,
									39.76160431638621
								],
								[
									117.15277713415753,
									39.61840892183437
								],
								[
									116.87563642807868,
									39.686466783215565
								]
							]
						],
						[
							[
								[
									119.23099653476226,
									41.27339834195993
								],
								[
									119.1635071150613,
									41.17640167939405
								],
								[
									118.96475955630865,
									41.074702460050446
								],
								[
									118.85468875488232,
									40.82060944357107
								],
								[
									119.06790571467707,
									40.651343289261376
								],
								[
									119.18975874197258,
									40.620104884732655
								],
								[
									119.29362837075269,
									40.53070465789378
								],
								[
									119.56368940594132,
									40.5400580919075
								],
								[
									119.58012251174455,
									40.37340159840505
								],
								[
									119.63474450085812,
									40.20907054307125
								],
								[
									119.74259321510476,
									40.20519481129165
								],
								[
									119.73804568885737,
									40.09951650738088
								],
								[
									119.85020852377716,
									39.986320477390166
								],
								[
									119.53559238800017,
									39.89082558800004
								],
								[
									119.33961022200026,
									39.715562242000146
								],
								[
									119.26198127500027,
									39.535084241000106
								],
								[
									119.30507538100028,
									39.432977787000226
								],
								[
									119.18480422500033,
									39.354814110000206
								],
								[
									119.01563561300014,
									39.18976471600013
								],
								[
									118.94198652400019,
									39.15912506700013
								],
								[
									118.8589787120003,
									39.20750560100004
								],
								[
									118.7959905920003,
									39.151777127000116
								],
								[
									118.61935987000015,
									39.16104245200006
								],
								[
									118.344269586,
									39.030708618000176
								],
								[
									118.23528462200011,
									39.053097566000105
								],
								[
									118.14052807300016,
									39.172835107000225
								],
								[
									118.00956331411487,
									39.21855181203543
								],
								[
									118.00791873556125,
									39.342663478836585
								],
								[
									117.89712446462227,
									39.3986807319302
								],
								[
									117.89278364484949,
									39.56461375592016
								],
								[
									117.63088748616872,
									39.57587921785165
								],
								[
									117.62251590408562,
									39.66641632715175
								],
								[
									117.53311567634745,
									39.75041636792113
								],
								[
									117.50128299441474,
									39.98872223644207
								],
								[
									117.76555626810728,
									39.96407257728771
								],
								[
									117.74974327992857,
									40.06347219508575
								],
								[
									117.4510535010183,
									40.22669220638022
								],
								[
									117.35679568867022,
									40.25702627244448
								],
								[
									117.25054894397863,
									40.33782237410338
								],
								[
									117.2379398949102,
									40.4501927761757
								],
								[
									117.1841447289961,
									40.49727000640564
								],
								[
									117.24310753788268,
									40.570159613974965
								],
								[
									117.41177941298974,
									40.597367255294614
								],
								[
									117.42852257715526,
									40.66904246693639
								],
								[
									117.19918256991969,
									40.690023098087465
								],
								[
									117.0580025569725,
									40.67720734344428
								],
								[
									116.91041466670356,
									40.74921845097086
								],
								[
									116.67580366370811,
									40.94013703089922
								],
								[
									116.65265262312016,
									41.0310100369837
								],
								[
									116.43819542897586,
									40.8997260613088
								],
								[
									116.45886600086527,
									40.791567287800234
								],
								[
									116.29143436100696,
									40.739890855378746
								],
								[
									116.20730512902855,
									40.75038117095434
								],
								[
									116.13035892072776,
									40.657983710579884
								],
								[
									115.99470828685799,
									40.59597199221372
								],
								[
									115.87445722911787,
									40.610234686781354
								],
								[
									115.72816124914243,
									40.539593003914035
								],
								[
									115.9452022638734,
									40.29371653898704
								],
								[
									115.81983524000441,
									40.151890570893215
								],
								[
									115.57762780218127,
									40.09631256827052
								],
								[
									115.42709435432107,
									39.96257396141925
								],
								[
									115.4964441259956,
									39.92363576927548
								],
								[
									115.51091352703781,
									39.83849884694433
								],
								[
									115.43732628837745,
									39.74930532478098
								],
								[
									115.46342288565768,
									39.643213608821014
								],
								[
									115.61845218292183,
									39.603732815217285
								],
								[
									115.75591149282116,
									39.50895823803222
								],
								[
									115.94540897034784,
									39.575388292335845
								],
								[
									116.21040571535138,
									39.57190013328457
								],
								[
									116.24978315616778,
									39.50580597576527
								],
								[
									116.38662234934213,
									39.44214061100047
								],
								[
									116.42827355418126,
									39.52141225836911
								],
								[
									116.60438683538416,
									39.611174221313405
								],
								[
									116.79341922401795,
									39.60231171281541
								],
								[
									116.79124881368182,
									39.49293854427839
								],
								[
									116.85346723762302,
									39.34142324538661
								],
								[
									116.82613040599335,
									39.21654714613396
								],
								[
									116.89181115056431,
									39.10252309856227
								],
								[
									116.71218387278759,
									39.01183096053052
								],
								[
									116.6806095723739,
									38.91594534020541
								],
								[
									116.71084028475138,
									38.82052480697428
								],
								[
									116.88075239510715,
									38.69939525009079
								],
								[
									117.02105390801142,
									38.708231920167094
								],
								[
									117.09489952998928,
									38.61175202153868
								],
								[
									117.27132286955475,
									38.559248765917886
								],
								[
									117.54354902418424,
									38.62132396011637
								],
								[
									117.71608248500002,
									38.378510932000154
								],
								[
									117.83715902947193,
									38.27090758202854
								],
								[
									117.77981896357426,
									38.16444082268592
								],
								[
									117.68731815041247,
									38.07266347903635
								],
								[
									117.56866906132825,
									38.04891815924566
								],
								[
									117.42061608306585,
									37.846682441441544
								],
								[
									116.83951460231702,
									37.83365998032383
								],
								[
									116.74391320193274,
									37.79929515194979
								],
								[
									116.60872765515717,
									37.63940827097497
								],
								[
									116.4106002140287,
									37.4846373561291
								],
								[
									116.35008711063165,
									37.620908108522514
								],
								[
									116.21991417899619,
									37.46236481378517
								],
								[
									116.25557091676444,
									37.38733063430129
								],
								[
									115.97501956600024,
									37.32170156477537
								],
								[
									115.85182295066886,
									37.057221585507904
								],
								[
									115.62641035385491,
									36.793568426741615
								],
								[
									115.47784061075572,
									36.753570868300955
								],
								[
									115.34162153520583,
									36.5997559678637
								],
								[
									115.27573408416072,
									36.47420807504275
								],
								[
									115.34332685844777,
									36.352148342172285
								],
								[
									115.44885013182812,
									36.249157213434756
								],
								[
									115.46032230023388,
									36.15787079530108
								],
								[
									115.34968305892608,
									36.08219065977113
								],
								[
									115.24524498936495,
									36.16135895435235
								],
								[
									115.10608035712289,
									36.18456167358241
								],
								[
									115.0338367047001,
									36.10094920554144
								],
								[
									114.93069054633168,
									36.05655915048436
								],
								[
									114.89317345569054,
									36.11957855920329
								],
								[
									114.70724165158106,
									36.152780666694554
								],
								[
									114.54838830027995,
									36.13903473606436
								],
								[
									114.34307783367512,
									36.24471303997484
								],
								[
									114.15626753132153,
									36.24667674383676
								],
								[
									114.06314659963584,
									36.277062485845164
								],
								[
									113.98930097855737,
									36.35902130838673
								],
								[
									113.80827843590112,
									36.33938426437231
								],
								[
									113.72104861939818,
									36.35586904611952
								],
								[
									113.53511681528892,
									36.48338064190321
								],
								[
									113.5473641300506,
									36.54851878501387
								],
								[
									113.45873904776897,
									36.635800279259456
								],
								[
									113.45393314000256,
									36.73662099945966
								],
								[
									113.60777387886151,
									36.769073798117375
								],
								[
									113.67924238492822,
									36.871599839760904
								],
								[
									113.77603234281844,
									36.89061676705023
								],
								[
									113.7543282412554,
									37.11494415914558
								],
								[
									113.8576811060982,
									37.20894358997484
								],
								[
									113.88672326096969,
									37.29612173143286
								],
								[
									114.053121372953,
									37.50057953551726
								],
								[
									114.1004053078587,
									37.69819021270823
								],
								[
									114.02635298120526,
									37.75077098179543
								],
								[
									113.89147749189294,
									37.94946686550355
								],
								[
									113.790656772592,
									38.15286530239189
								],
								[
									113.55790612157023,
									38.24342825011371
								],
								[
									113.51801191591721,
									38.37760610653663
								],
								[
									113.53449669766451,
									38.537286281936474
								],
								[
									113.60896243726677,
									38.644463201715524
								],
								[
									113.66901045087172,
									38.66027619079358
								],
								[
									113.82512495285437,
									38.81026703539547
								],
								[
									113.76021935374018,
									38.909201565200135
								],
								[
									113.85334028542593,
									39.07229238528532
								],
								[
									114.01271040156382,
									39.11882701315622
								],
								[
									114.08908816908377,
									39.074359442834094
								],
								[
									114.21631554582575,
									39.069036770230895
								],
								[
									114.3939791197406,
									39.169340724694734
								],
								[
									114.42033410033844,
									39.29997874612232
								],
								[
									114.54094689328451,
									39.53123078127564
								],
								[
									114.40214399624841,
									39.65845815711822
								],
								[
									114.38281701059674,
									39.86105561012829
								],
								[
									114.08598758276082,
									39.91691783269192
								],
								[
									113.93591922379323,
									40.01572317218668
								],
								[
									113.99596723829745,
									40.13181427730706
								],
								[
									114.08536746603579,
									40.18501516401872
								],
								[
									114.45030643119696,
									40.293768214931276
								],
								[
									114.43366661981861,
									40.360534166018965
								],
								[
									114.28576867118727,
									40.37856924137745
								],
								[
									114.25755333861571,
									40.54997996670224
								],
								[
									114.15172000507414,
									40.67358999318361
								],
								[
									114.15409712098545,
									40.7425780305517
								],
								[
									114.06014936699978,
									40.81365896299084
								],
								[
									114.01860151584731,
									40.9236005723086
								],
								[
									113.90796227364024,
									41.028141995556666
								],
								[
									113.88067711795463,
									41.09930044236148
								],
								[
									113.96382449800228,
									41.15335398979491
								],
								[
									113.98490848194086,
									41.240893867358096
								],
								[
									113.90889244962705,
									41.2940172388046
								],
								[
									113.92796105375965,
									41.41835073479854
								],
								[
									114.0272831562927,
									41.53128957855125
								],
								[
									114.19709191296135,
									41.593585516858155
								],
								[
									114.21352501786532,
									41.76690827099998
								],
								[
									114.25569298664209,
									41.860080877730354
								],
								[
									114.41971398271414,
									41.956302394839724
								],
								[
									114.48131229082958,
									42.0752615422864
								],
								[
									114.59634402875395,
									42.14127818544
								],
								[
									114.75194176589969,
									42.13985708303804
								],
								[
									114.80485843267058,
									42.178407701554136
								],
								[
									114.9203035826443,
									41.93687205729964
								],
								[
									114.87581017479982,
									41.81166006126284
								],
								[
									114.88898766464905,
									41.61004446108302
								],
								[
									115.09739871577824,
									41.61616811846392
								],
								[
									115.22586632686955,
									41.58583405239966
								],
								[
									115.347357618959,
									41.624074612553414
								],
								[
									115.33976118413125,
									41.720838731122626
								],
								[
									115.5275016615725,
									41.77233429639068
								],
								[
									115.85879926967067,
									41.92746694644251
								],
								[
									115.93734744662743,
									41.92746694644251
								],
								[
									116.03785810756563,
									41.80062714332806
								],
								[
									116.20715010029687,
									41.88400706647306
								],
								[
									116.37752729684735,
									42.009684150503205
								],
								[
									116.46610070228564,
									41.94762075529371
								],
								[
									116.59973595634938,
									41.92372040497281
								],
								[
									116.8581181166578,
									42.01950267251044
								],
								[
									116.87889204313319,
									42.220213935125
								],
								[
									116.82659549398682,
									42.30816722293903
								],
								[
									116.88710859558512,
									42.39537120191949
								],
								[
									117.05593550032319,
									42.46283478499731
								],
								[
									117.24388268423849,
									42.48226512343669
								],
								[
									117.41239952971455,
									42.45808055317505
								],
								[
									117.45043338429332,
									42.54928945604368
								],
								[
									117.5936287779457,
									42.55158905668958
								],
								[
									117.7426119321949,
									42.591095688715086
								],
								[
									117.80048953726225,
									42.56882314727051
								],
								[
									118.02424848767754,
									42.38263296254115
								],
								[
									118.04021650638663,
									42.288762722022
								],
								[
									117.98931522032115,
									42.22160919910527
								],
								[
									118.08600182542386,
									42.18166331570947
								],
								[
									118.13390587795413,
									42.02190562594393
								],
								[
									118.26785119038016,
									42.073866279205504
								],
								[
									118.3221631211311,
									41.8635431992592
								],
								[
									118.27823815316833,
									41.75269725237635
								],
								[
									118.15938235940837,
									41.719133408779925
								],
								[
									118.244390089631,
									41.59234528340809
								],
								[
									118.31363650941739,
									41.569555976227434
								],
								[
									118.37027387923615,
									41.313964342080766
								],
								[
									118.47843265184542,
									41.35509878208313
								],
								[
									119.15265506427988,
									41.31220734289451
								],
								[
									119.23099653476226,
									41.27339834195993
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 21,
					"name": "河南"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								115.46032230023388,
								36.15787079530108
							],
							[
								115.42399376799801,
								35.99459910716308
							],
							[
								115.33387006984788,
								35.93114044887261
							],
							[
								115.3176436714183,
								35.79151072773803
							],
							[
								115.4163973331705,
								35.82375682171994
							],
							[
								115.46822879432352,
								35.91292450636098
							],
							[
								115.73870324066206,
								35.96860586177115
							],
							[
								115.8287235860247,
								36.031030992186516
							],
							[
								115.92690880699593,
								36.02198761743455
							],
							[
								116.07728722522529,
								36.10311961497834
							],
							[
								116.03367231742357,
								35.965815334710015
							],
							[
								115.96571780793067,
								35.985917466717694
							],
							[
								115.76133751821192,
								35.849181627230394
							],
							[
								115.65498742073294,
								35.74634552722432
							],
							[
								115.50424726819688,
								35.7228327505311
							],
							[
								115.39505496591403,
								35.61575918174091
							],
							[
								115.34503217989129,
								35.49625743283437
							],
							[
								115.22653812133734,
								35.416236477531555
							],
							[
								115.06835656090664,
								35.38011465087055
							],
							[
								114.941749301789,
								35.21883250591537
							],
							[
								114.86428632955045,
								35.18870514632556
							],
							[
								114.83421064680397,
								35.01618337696124
							],
							[
								114.99776655488267,
								35.007785956456786
							],
							[
								115.1744999528106,
								34.9441722685354
							],
							[
								115.21604780486234,
								34.83572927508601
							],
							[
								115.3176436714183,
								34.84283478439778
							],
							[
								115.42926476375794,
								34.77971202199228
							],
							[
								115.43577599476646,
								34.67571320200281
							],
							[
								115.54171268109542,
								34.57752798103161
							],
							[
								115.7067672059419,
								34.60026561136891
							],
							[
								115.81642459531884,
								34.57143016207232
							],
							[
								116.04374922094985,
								34.60021393542485
							],
							[
								116.15128787593477,
								34.566727607093384
							],
							[
								116.15671390222474,
								34.447303372552625
							],
							[
								116.40098839669713,
								34.2750141462858
							],
							[
								116.55209028533835,
								34.28684804899822
							],
							[
								116.57508629809416,
								34.19212514955598
							],
							[
								116.54294355689962,
								34.12091502500846
							],
							[
								116.64118045471412,
								33.95322500273164
							],
							[
								116.44532677581003,
								33.845014553279015
							],
							[
								116.42067711755487,
								33.79083181373721
							],
							[
								116.18203535404831,
								33.71832977979548
							],
							[
								116.07961266519226,
								33.778351955878094
							],
							[
								115.97067874622718,
								33.90480418626424
							],
							[
								115.96137698815744,
								34.000147203330755
							],
							[
								115.84112593041732,
								34.006916815858375
							],
							[
								115.73296715690867,
								34.06556956638235
							],
							[
								115.65364383269673,
								34.04841299106664
							],
							[
								115.56134972510972,
								33.898137926524015
							],
							[
								115.62992435132782,
								33.83876170468892
							],
							[
								115.57354536302813,
								33.750188300149915
							],
							[
								115.63473025909423,
								33.5918258734653
							],
							[
								115.44259728413732,
								33.548081773555
							],
							[
								115.34642744387145,
								33.45304881395157
							],
							[
								115.3156799657578,
								33.373983873057256
							],
							[
								115.3453422382538,
								33.25060639147176
							],
							[
								115.25098107311806,
								33.12064016451197
							],
							[
								115.1428222996094,
								33.0842599554326
							],
							[
								114.96918948800442,
								33.12374074993568
							],
							[
								114.88655887279367,
								33.08340729381155
							],
							[
								114.92521284409753,
								32.95824697551757
							],
							[
								115.18473188686698,
								32.859054063294394
							],
							[
								115.1993046406966,
								32.59147349680447
							],
							[
								115.36673628055485,
								32.55951162456185
							],
							[
								115.56476036979518,
								32.40244110817062
							],
							[
								115.64661583865,
								32.40244110817062
							],
							[
								115.69384809761158,
								32.49181549748724
							],
							[
								115.79006961472095,
								32.470705675126794
							],
							[
								115.8884615421664,
								32.39386282051271
							],
							[
								115.92814904224451,
								32.02458303557859
							],
							[
								115.90132897275384,
								31.794493720408838
							],
							[
								115.6629455907663,
								31.78395172798983
							],
							[
								115.53153242388225,
								31.736383572244108
							],
							[
								115.38973229420992,
								31.511746120886755
							],
							[
								115.37402265791923,
								31.417539985382007
							],
							[
								115.28622439973623,
								31.395138250929477
							],
							[
								115.21852827356088,
								31.44748647691938
							],
							[
								115.21346398337607,
								31.545594184424004
							],
							[
								115.12855960504169,
								31.5945317648291
							],
							[
								114.99885175960094,
								31.477613837408654
							],
							[
								114.76656619657263,
								31.49048126889548
							],
							[
								114.63820193916808,
								31.56802175549967
							],
							[
								114.54787153544294,
								31.572879340109523
							],
							[
								114.55567467674484,
								31.737675483436874
							],
							[
								114.36183637944538,
								31.73426483785198
							],
							[
								114.26737186062286,
								31.808730577454213
							],
							[
								114.14396854061556,
								31.847539578388876
							],
							[
								114.08547081882318,
								31.78379669925829
							],
							[
								113.97198937361065,
								31.74656382945713
							],
							[
								113.95958703011729,
								31.831829942098096
							],
							[
								113.86171186660931,
								31.862706611420947
							],
							[
								113.79437747563998,
								31.97251902952962
							],
							[
								113.75236453739342,
								32.13759939189842
							],
							[
								113.7816650737841,
								32.19371999777971
							],
							[
								113.78275027940191,
								32.359368800929474
							],
							[
								113.72921349500677,
								32.4192617858028
							],
							[
								113.61640384336266,
								32.38567210558321
							],
							[
								113.52767540919274,
								32.296685288994894
							],
							[
								113.4359497423867,
								32.28875295738308
							],
							[
								113.18299360567028,
								32.41331899737389
							],
							[
								113.06568810372312,
								32.41737559720602
							],
							[
								112.75087527917071,
								32.349782822918996
							],
							[
								112.53393761632799,
								32.37675792114115
							],
							[
								112.28578738827736,
								32.350635484539936
							],
							[
								112.14460737533022,
								32.39463796596934
							],
							[
								112.0533467956181,
								32.45484101010456
							],
							[
								111.77925499901903,
								32.52036672594363
							],
							[
								111.71119713763773,
								32.600232652514904
							],
							[
								111.53162153490598,
								32.61108470329637
							],
							[
								111.50743696464417,
								32.68206228294801
							],
							[
								111.36331139500481,
								32.824766751084695
							],
							[
								111.21014244971428,
								32.93021251099859
							],
							[
								111.21634362236023,
								32.97648875645089
							],
							[
								111.10880496557667,
								33.14802867298479
							],
							[
								111.00266157367264,
								33.20753408512991
							],
							[
								110.97460127163134,
								33.266471056494055
							],
							[
								111.01558068200296,
								33.37444896105072
							],
							[
								111.01061974460555,
								33.50015188170403
							],
							[
								110.96824507025383,
								33.59882802998959
							],
							[
								110.79213178905076,
								33.70512645152451
							],
							[
								110.7492403498623,
								33.80279490855821
							],
							[
								110.5937976423474,
								33.87974111595966
							],
							[
								110.64237348844574,
								33.980303452842094
							],
							[
								110.5936426127164,
								34.06533702238568
							],
							[
								110.60666507383405,
								34.17049856235883
							],
							[
								110.43380740768566,
								34.2613974068648
							],
							[
								110.47866255073609,
								34.32638052034474
							],
							[
								110.32766401578164,
								34.47980784805375
							],
							[
								110.33603559786457,
								34.615846056450295
							],
							[
								110.5305456887325,
								34.583677476834055
							],
							[
								110.88380577991279,
								34.66610138646979
							],
							[
								111.02570926327195,
								34.747491767331184
							],
							[
								111.33127200659777,
								34.84092275648001
							],
							[
								111.39426557779416,
								34.823275254749234
							],
							[
								111.55766645714124,
								34.8634020052983
							],
							[
								111.62221032104952,
								34.94727285395902
							],
							[
								111.8294328146726,
								35.08256175442145
							],
							[
								112.06109826097594,
								35.108477485447594
							],
							[
								112.05846276264634,
								35.23449046536271
							],
							[
								112.52597944539508,
								35.22027944583971
							],
							[
								112.68245568168436,
								35.31117829034588
							],
							[
								112.80761600087772,
								35.2419835483021
							],
							[
								112.90275231326859,
								35.240588284321916
							],
							[
								113.01979943189832,
								35.32859324807998
							],
							[
								113.12956017496208,
								35.35228689192655
							],
							[
								113.32841108560314,
								35.46300364849958
							],
							[
								113.49129520101269,
								35.52548045485909
							],
							[
								113.60994428919759,
								35.64606741028271
							],
							[
								113.58472619016158,
								35.68686595350093
							],
							[
								113.62756595340602,
								35.95323212316393
							],
							[
								113.68714887901751,
								36.05573232728503
							],
							[
								113.67288618355053,
								36.22145864480055
							],
							[
								113.72104861939818,
								36.35586904611952
							],
							[
								113.80827843590112,
								36.33938426437231
							],
							[
								113.98930097855737,
								36.35902130838673
							],
							[
								114.06314659963584,
								36.277062485845164
							],
							[
								114.15626753132153,
								36.24667674383676
							],
							[
								114.34307783367512,
								36.24471303997484
							],
							[
								114.54838830027995,
								36.13903473606436
							],
							[
								114.70724165158106,
								36.152780666694554
							],
							[
								114.89317345569054,
								36.11957855920329
							],
							[
								114.93069054633168,
								36.05655915048436
							],
							[
								115.0338367047001,
								36.10094920554144
							],
							[
								115.10608035712289,
								36.18456167358241
							],
							[
								115.24524498936495,
								36.16135895435235
							],
							[
								115.34968305892608,
								36.08219065977113
							],
							[
								115.46032230023388,
								36.15787079530108
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 22,
					"name": "辽宁"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									121.35254967500032,
									39.48240794500012
								],
								[
									121.44239342500032,
									39.462876695000034
								],
								[
									121.40349368600016,
									39.37059153900009
								],
								[
									121.29615319100009,
									39.39142487200007
								],
								[
									121.35254967500032,
									39.48240794500012
								]
							]
						],
						[
							[
								[
									125.70408969199298,
									40.859194624916114
								],
								[
									125.56006677300007,
									40.77833892900014
								],
								[
									125.53309167500026,
									40.72180491200018
								],
								[
									125.36359297700028,
									40.646719055000176
								],
								[
									125.02511234500014,
									40.534374492000154
								],
								[
									125.02630090400015,
									40.45737660700013
								],
								[
									124.89550785400013,
									40.48362823500017
								],
								[
									124.71246993000011,
									40.31030548100017
								],
								[
									124.6426033940001,
									40.294285787000035
								],
								[
									124.35824629000024,
									40.08905670800013
								],
								[
									124.35230553500014,
									39.99896881700016
								],
								[
									124.20215905000009,
									39.87860748900013
								],
								[
									123.98568769600024,
									39.810248114000046
								],
								[
									123.6225692070002,
									39.87173086100012
								],
								[
									123.5914005870003,
									39.78432851800005
								],
								[
									123.41041100400003,
									39.796616929000095
								],
								[
									123.26351972700002,
									39.76764557500019
								],
								[
									123.26587975400025,
									39.70107656500011
								],
								[
									123.17432701900032,
									39.66575755400018
								],
								[
									123.00912519600024,
									39.68048737200007
								],
								[
									122.63656660200002,
									39.508449611000174
								],
								[
									122.58790123800031,
									39.46698639500019
								],
								[
									122.39633222700002,
									39.41103750200014
								],
								[
									122.11500084700026,
									39.200751044000185
								],
								[
									122.1274520190002,
									39.1419945330002
								],
								[
									121.8115340500002,
									38.97284577000005
								],
								[
									121.77247155000015,
									39.02195872600018
								],
								[
									121.64926191500007,
									38.99445221600013
								],
								[
									121.6547957690002,
									38.85785553600007
								],
								[
									121.48495527400019,
									38.80988190300016
								],
								[
									121.34473717500032,
									38.81464264500005
								],
								[
									121.15308678500003,
									38.72760651200019
								],
								[
									121.09042402400019,
									38.89907461100012
								],
								[
									121.67408287900014,
									39.08803945500017
								],
								[
									121.60165449300018,
									39.22125885600016
								],
								[
									121.73609459700026,
									39.31175364800012
								],
								[
									121.7177840500002,
									39.37148672100017
								],
								[
									121.54892011800018,
									39.36188385600019
								],
								[
									121.49195397200026,
									39.38898346600013
								],
								[
									121.4360457690002,
									39.50861237200016
								],
								[
									121.30616295700008,
									39.501776434000135
								],
								[
									121.30616295700008,
									39.59796784100007
								],
								[
									121.44980538500022,
									39.615098025000094
								],
								[
									121.50684655000032,
									39.69432200700018
								],
								[
									121.45728600400003,
									39.748480536000045
								],
								[
									121.53589928500003,
									39.86176178600013
								],
								[
									121.70712324300018,
									39.926947333000044
								],
								[
									121.7744246750002,
									39.92084381700005
								],
								[
									121.99566779300005,
									40.123895275000194
								],
								[
									121.99146569100026,
									40.186997789000145
								],
								[
									122.09164569300026,
									40.227207388000096
								],
								[
									122.10611612000002,
									40.31012281700015
								],
								[
									122.21102949300018,
									40.38060130400015
								],
								[
									122.30184980600006,
									40.50234609600017
								],
								[
									122.13758565700005,
									40.62402028600022
								],
								[
									122.04908287900014,
									40.746079820000176
								],
								[
									121.85108483200008,
									40.83226146000004
								],
								[
									121.57504316500024,
									40.84149811400019
								],
								[
									121.3613387380002,
									40.93964264500016
								],
								[
									121.29932701900015,
									40.899603583000044
								],
								[
									121.17579186300031,
									40.92230866100019
								],
								[
									120.99097741000003,
									40.83128489800015
								],
								[
									120.94019490100015,
									40.69124623900012
								],
								[
									120.82532081500017,
									40.67403348000013
								],
								[
									120.79843183700018,
									40.59967682500016
								],
								[
									120.62094160200024,
									40.474432684000135
								],
								[
									120.50175764500011,
									40.32690995200011
								],
								[
									120.5048934250002,
									40.24909088700008
								],
								[
									120.43604576900032,
									40.19448476800014
								],
								[
									119.95027692000019,
									40.05650213300004
								],
								[
									119.85020852377716,
									39.986320477390166
								],
								[
									119.73804568885737,
									40.09951650738088
								],
								[
									119.74259321510476,
									40.20519481129165
								],
								[
									119.63474450085812,
									40.20907054307125
								],
								[
									119.58012251174455,
									40.37340159840505
								],
								[
									119.56368940594132,
									40.5400580919075
								],
								[
									119.29362837075269,
									40.53070465789378
								],
								[
									119.18975874197258,
									40.620104884732655
								],
								[
									119.06790571467707,
									40.651343289261376
								],
								[
									118.85468875488232,
									40.82060944357107
								],
								[
									118.96475955630865,
									41.074702460050446
								],
								[
									119.1635071150613,
									41.17640167939405
								],
								[
									119.23099653476226,
									41.27339834195993
								],
								[
									119.36163455618976,
									41.37499420851594
								],
								[
									119.38974653507455,
									41.472559311862796
								],
								[
									119.31559085473418,
									41.657819322403896
								],
								[
									119.29864098499354,
									41.777346909732245
								],
								[
									119.32174034963742,
									41.965397447334425
								],
								[
									119.36587202407475,
									42.10047964132244
								],
								[
									119.24525923112867,
									42.19194692571017
								],
								[
									119.33574466358539,
									42.28940867806807
								],
								[
									119.56275923085389,
									42.371832586804544
								],
								[
									119.62942182825486,
									42.25054800118926
								],
								[
									119.82145145132336,
									42.20861257640928
								],
								[
									119.80822228373131,
									42.12022003812433
								],
								[
									119.89188642771649,
									41.99945221644663
								],
								[
									119.96015099467274,
									41.97175364781273
								],
								[
									120.03032759044606,
									41.860597643466605
								],
								[
									120.02640018092359,
									41.73383535381865
								],
								[
									120.14076012617909,
									41.789284166131324
								],
								[
									120.34017947760083,
									41.96581085938362
								],
								[
									120.46880211832308,
									42.03800283496301
								],
								[
									120.50916141196956,
									42.14869375311423
								],
								[
									120.62786217699795,
									42.16037262619574
								],
								[
									120.91259931880359,
									42.29656586422328
								],
								[
									121.03424563962454,
									42.26010814077813
								],
								[
									121.36885053872129,
									42.49999013953342
								],
								[
									121.54444705598678,
									42.53523346615157
								],
								[
									121.64609459758765,
									42.45358470287181
								],
								[
									121.72366092261348,
									42.45766714112574
								],
								[
									121.87776004389093,
									42.539574285924516
								],
								[
									121.91827436716835,
									42.6465961778714
								],
								[
									122.04503665591699,
									42.720855210999275
								],
								[
									122.2993880557143,
									42.63646759750168
								],
								[
									122.4256852555701,
									42.72204376940448
								],
								[
									122.36687747631458,
									42.79909332869414
								],
								[
									122.47637983606069,
									42.84963288045313
								],
								[
									122.72794070879667,
									42.74100901985048
								],
								[
									122.8927885280682,
									42.74493642847341
								],
								[
									123.13127526284313,
									42.826378486178214
								],
								[
									123.1818664896469,
									42.94409739837627
								],
								[
									123.35441409743271,
									43.01231028938838
								],
								[
									123.61196943634047,
									43.08135000270045
								],
								[
									123.69625369705051,
									43.353478095437765
								],
								[
									123.80653120315253,
									43.45422130037281
								],
								[
									124.00641564256796,
									43.31012156825588
								],
								[
									124.28185102810255,
									43.22599233717659
								],
								[
									124.29580366430775,
									43.15656505023685
								],
								[
									124.41889692595248,
									43.081866767537406
								],
								[
									124.37590213397641,
									42.9855677351629
								],
								[
									124.51956261562225,
									42.87167287880038
								],
								[
									124.76569746296764,
									43.105586248906405
								],
								[
									124.88842899030573,
									43.08672435214717
								],
								[
									124.86031701142088,
									42.88769257345359
								],
								[
									124.94212080343254,
									42.80369253178506
								],
								[
									125.0189119812029,
									42.646854560289796
								],
								[
									125.09575483581716,
									42.576677965415854
								],
								[
									125.10195600756373,
									42.4938664821525
								],
								[
									125.20871951709205,
									42.40583567997271
								],
								[
									125.28396040305017,
									42.23445079217038
								],
								[
									125.48053755056753,
									42.15143260423133
								],
								[
									125.29543256965752,
									41.957232570826534
								],
								[
									125.30628462133825,
									41.68037608468859
								],
								[
									125.44953169183412,
									41.67993683511685
								],
								[
									125.4698922062604,
									41.574568590468175
								],
								[
									125.65075971928559,
									41.28626577434602
								],
								[
									125.73767947832539,
									41.24523468713113
								],
								[
									125.7664115739351,
									41.13947886795543
								],
								[
									125.69173912965732,
									41.004060777183156
								],
								[
									125.57644900931427,
									40.91261933031785
								],
								[
									125.70408969199298,
									40.859194624916114
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 23,
					"name": "山东"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								119.28029535679576,
								35.076608741968954
							],
							[
								119.17559940019237,
								35.105919501483925
							],
							[
								119.07627729675994,
								35.04982473402427
							],
							[
								118.86678104091231,
								35.036311347390836
							],
							[
								118.75944909060308,
								34.748628647993854
							],
							[
								118.68074588401538,
								34.683852240988244
							],
							[
								118.47719241659695,
								34.68920075111379
							],
							[
								118.39104780481233,
								34.44373769823619
							],
							[
								118.16542850062501,
								34.39924429039172
							],
							[
								118.05044844044335,
								34.65147695579685
							],
							[
								117.91469445198754,
								34.676953437251456
							],
							[
								117.7900508967316,
								34.65116689743439
							],
							[
								117.77330773256574,
								34.52654918149963
							],
							[
								117.65321170535594,
								34.5261099310286
							],
							[
								117.59068322215307,
								34.47159129470256
							],
							[
								117.4690369004328,
								34.47533783617223
							],
							[
								117.33695193908073,
								34.58861257580975
							],
							[
								117.2739066919404,
								34.56367869671456
							],
							[
								117.18181928902902,
								34.450145575557855
							],
							[
								117.06058637935814,
								34.70945791275258
							],
							[
								116.9414205263364,
								34.879628403727935
							],
							[
								116.8276290218621,
								34.95830577189389
							],
							[
								116.63187869664466,
								34.937945258366994
							],
							[
								116.47002811090874,
								34.89825775828896
							],
							[
								116.42021202956153,
								34.83425649673998
							],
							[
								116.37721723758551,
								34.63953970029695
							],
							[
								116.26688805464005,
								34.57670115783219
							],
							[
								116.15128787593477,
								34.566727607093384
							],
							[
								116.04374922094985,
								34.60021393542485
							],
							[
								115.81642459531884,
								34.57143016207232
							],
							[
								115.7067672059419,
								34.60026561136891
							],
							[
								115.54171268109542,
								34.57752798103161
							],
							[
								115.43577599476646,
								34.67571320200281
							],
							[
								115.42926476375794,
								34.77971202199228
							],
							[
								115.3176436714183,
								34.84283478439778
							],
							[
								115.21604780486234,
								34.83572927508601
							],
							[
								115.1744999528106,
								34.9441722685354
							],
							[
								114.99776655488267,
								35.007785956456786
							],
							[
								114.83421064680397,
								35.01618337696124
							],
							[
								114.86428632955045,
								35.18870514632556
							],
							[
								114.941749301789,
								35.21883250591537
							],
							[
								115.06835656090664,
								35.38011465087055
							],
							[
								115.22653812133734,
								35.416236477531555
							],
							[
								115.34503217989129,
								35.49625743283437
							],
							[
								115.39505496591403,
								35.61575918174091
							],
							[
								115.50424726819688,
								35.7228327505311
							],
							[
								115.65498742073294,
								35.74634552722432
							],
							[
								115.76133751821192,
								35.849181627230394
							],
							[
								115.96571780793067,
								35.985917466717694
							],
							[
								116.03367231742357,
								35.965815334710015
							],
							[
								116.07728722522529,
								36.10311961497834
							],
							[
								115.92690880699593,
								36.02198761743455
							],
							[
								115.8287235860247,
								36.031030992186516
							],
							[
								115.73870324066206,
								35.96860586177115
							],
							[
								115.46822879432352,
								35.91292450636098
							],
							[
								115.4163973331705,
								35.82375682171994
							],
							[
								115.3176436714183,
								35.79151072773803
							],
							[
								115.33387006984788,
								35.93114044887261
							],
							[
								115.42399376799801,
								35.99459910716308
							],
							[
								115.46032230023388,
								36.15787079530108
							],
							[
								115.44885013182812,
								36.249157213434756
							],
							[
								115.34332685844777,
								36.352148342172285
							],
							[
								115.27573408416072,
								36.47420807504275
							],
							[
								115.34162153520583,
								36.5997559678637
							],
							[
								115.47784061075572,
								36.753570868300955
							],
							[
								115.62641035385491,
								36.793568426741615
							],
							[
								115.85182295066886,
								37.057221585507904
							],
							[
								115.97501956600024,
								37.32170156477537
							],
							[
								116.25557091676444,
								37.38733063430129
							],
							[
								116.21991417899619,
								37.46236481378517
							],
							[
								116.35008711063165,
								37.620908108522514
							],
							[
								116.4106002140287,
								37.4846373561291
							],
							[
								116.60872765515717,
								37.63940827097497
							],
							[
								116.74391320193274,
								37.79929515194979
							],
							[
								116.83951460231702,
								37.83365998032383
							],
							[
								117.42061608306585,
								37.846682441441544
							],
							[
								117.56866906132825,
								38.04891815924566
							],
							[
								117.68731815041247,
								38.07266347903635
							],
							[
								117.77981896357426,
								38.16444082268592
							],
							[
								117.83715902947193,
								38.27090758202854
							],
							[
								117.94169775100022,
								38.23394647100022
							],
							[
								118.08480879000007,
								38.138739325000074
							],
							[
								118.21583092500032,
								38.144964911000045
							],
							[
								118.44892844400022,
								38.10778712200005
							],
							[
								118.54297936300031,
								38.06834544500015
							],
							[
								118.65487094300033,
								38.14569459600011
							],
							[
								118.84009850400025,
								38.152573960000154
							],
							[
								118.99659264400009,
								37.963120835000126
							],
							[
								119.243083071,
								37.76948233600007
							],
							[
								119.03712772600011,
								37.7220888260002
							],
							[
								118.97665449300018,
								37.61090729400013
							],
							[
								118.94459069100003,
								37.3781192080001
							],
							[
								118.97242272200015,
								37.28066640800006
							],
							[
								119.1455184250002,
								37.17885976800011
							],
							[
								119.44117272200026,
								37.12055084800011
							],
							[
								119.77059980600006,
								37.15184153900017
							],
							[
								119.89730879000012,
								37.24941640800017
							],
							[
								119.8588973320002,
								37.36017487200016
							],
							[
								120.05982506600003,
								37.44041575700018
							],
							[
								120.29761803500026,
								37.59788646000004
							],
							[
								120.31185957100001,
								37.68626536700009
							],
							[
								120.73804772200015,
								37.83397044500012
							],
							[
								120.9257918630002,
								37.819281317000105
							],
							[
								121.03256269600001,
								37.71039459800011
							],
							[
								121.13795006600003,
								37.70115794500006
							],
							[
								121.1914982430003,
								37.575181382000096
							],
							[
								121.38168379000001,
								37.56610748900019
							],
							[
								121.47689863400024,
								37.46800364800009
							],
							[
								121.59164472700013,
								37.424465236000174
							],
							[
								121.65943444100003,
								37.47272370000019
							],
							[
								122.12989342500032,
								37.48346588700022
							],
							[
								122.29647871200018,
								37.418158270000134
							],
							[
								122.45704186300031,
								37.418158270000134
							],
							[
								122.65609785200024,
								37.38458893400019
							],
							[
								122.54908287900014,
								37.31085846600007
							],
							[
								122.60287519600001,
								37.20990631700013
							],
							[
								122.44760175900012,
								37.14744700700018
							],
							[
								122.46119225400025,
								37.03082916900007
							],
							[
								122.5254012380002,
								36.94448476800005
							],
							[
								122.3198348320002,
								36.82294342700018
							],
							[
								122.20028730600006,
								36.842759507000096
							],
							[
								122.21119225400014,
								36.91844310100018
							],
							[
								122.0396427740003,
								36.984605210000154
							],
							[
								121.78598066500012,
								36.891180731000105
							],
							[
								121.73715254000012,
								36.83917877800022
							],
							[
								121.5600692070002,
								36.767645575000074
							],
							[
								121.15772545700031,
								36.6686058610002
							],
							[
								121.02352949300018,
								36.5839297550001
							],
							[
								120.92025800900001,
								36.55329010600008
							],
							[
								120.94996178500003,
								36.45917389500016
							],
							[
								120.75058027400007,
								36.45917389500016
							],
							[
								120.64771569100014,
								36.33087799700016
							],
							[
								120.6967879570002,
								36.14398834800011
							],
							[
								120.55160566500001,
								36.1137149110001
							],
							[
								120.35352623800031,
								36.04083893400008
							],
							[
								120.29200280000009,
								36.06810130400015
							],
							[
								120.36158287900025,
								36.19163646000018
							],
							[
								120.32276451900015,
								36.226385809000135
							],
							[
								120.10531660200007,
								36.200873114000046
							],
							[
								120.10018964900007,
								36.096096096000196
							],
							[
								120.24276777400019,
								35.97357819200005
							],
							[
								120.03882897200026,
								35.84284088700019
							],
							[
								120.00294030000009,
								35.727769273000035
							],
							[
								119.90015709700015,
								35.736273505000156
							],
							[
								119.90455162900014,
								35.624579169000214
							],
							[
								119.81161543100006,
								35.64789459800011
							],
							[
								119.64795983200031,
								35.58392975500013
							],
							[
								119.55152428500014,
								35.38003164300011
							],
							[
								119.42392011800018,
								35.313462632000125
							],
							[
								119.3580021490003,
								35.097113348000164
							],
							[
								119.28029535679576,
								35.076608741968954
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 24,
					"name": "天津"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								118.00956331411487,
								39.21855181203543
							],
							[
								117.88559004000001,
								39.20111725500013
							],
							[
								117.7182723320002,
								39.093003648000035
							],
							[
								117.70875084700003,
								38.981024481000134
							],
							[
								117.58399498800009,
								38.811590887000165
							],
							[
								117.54354902418424,
								38.62132396011637
							],
							[
								117.27132286955475,
								38.559248765917886
							],
							[
								117.09489952998928,
								38.61175202153868
							],
							[
								117.02105390801142,
								38.708231920167094
							],
							[
								116.88075239510715,
								38.69939525009079
							],
							[
								116.71084028475138,
								38.82052480697428
							],
							[
								116.6806095723739,
								38.91594534020541
							],
							[
								116.71218387278759,
								39.01183096053052
							],
							[
								116.89181115056431,
								39.10252309856227
							],
							[
								116.82613040599335,
								39.21654714613396
							],
							[
								116.85346723762302,
								39.34142324538661
							],
							[
								116.79124881368182,
								39.49293854427839
							],
							[
								116.79341922401795,
								39.60231171281541
							],
							[
								116.87563642807868,
								39.686466783215565
							],
							[
								117.15277713415753,
								39.61840892183437
							],
							[
								117.20290327386704,
								39.76160431638621
							],
							[
								117.14750613839749,
								39.94800120669046
							],
							[
								117.23907677557281,
								40.0926177027448
							],
							[
								117.31059695758358,
								40.11047191005065
							],
							[
								117.35679568867022,
								40.25702627244448
							],
							[
								117.4510535010183,
								40.22669220638022
							],
							[
								117.74974327992857,
								40.06347219508575
							],
							[
								117.76555626810728,
								39.96407257728771
							],
							[
								117.50128299441474,
								39.98872223644207
							],
							[
								117.53311567634745,
								39.75041636792113
							],
							[
								117.62251590408562,
								39.66641632715175
							],
							[
								117.63088748616872,
								39.57587921785165
							],
							[
								117.89278364484949,
								39.56461375592016
							],
							[
								117.89712446462227,
								39.3986807319302
							],
							[
								118.00791873556125,
								39.342663478836585
							],
							[
								118.00956331411487,
								39.21855181203543
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 25,
					"name": "江西"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								118.17473025869447,
								29.407869370774904
							],
							[
								118.13235558524207,
								29.297927761457117
							],
							[
								118.05199873315507,
								29.275319322328926
							],
							[
								118.00078738782759,
								29.14393199296717
							],
							[
								118.06393598775571,
								29.05055267976246
							],
							[
								118.22904219034479,
								28.95453786912745
							],
							[
								118.30288781142337,
								28.83578542725573
							],
							[
								118.37166914321642,
								28.798604234298097
							],
							[
								118.42551598507487,
								28.69519969351117
							],
							[
								118.41585249179911,
								28.604042467485954
							],
							[
								118.45791710778832,
								28.51738108996537
							],
							[
								118.47626224240861,
								28.332250271532814
							],
							[
								118.44644494028171,
								28.288687038775805
							],
							[
								118.34887983603556,
								28.219802354195366
							],
							[
								118.36779340963824,
								28.099706326086164
							],
							[
								118.13070193884346,
								28.040536810725314
							],
							[
								118.06130049032527,
								27.979016017875068
							],
							[
								117.82343387317462,
								27.9372614611475
							],
							[
								117.74555748888702,
								27.81328970035935
							],
							[
								117.6052559750832,
								27.86615469028675
							],
							[
								117.54443281512238,
								27.966665351224947
							],
							[
								117.28424197788496,
								27.857033800269818
							],
							[
								117.2871358577338,
								27.772620348350415
							],
							[
								117.22512413936761,
								27.723450222150092
							],
							[
								117.11226281088017,
								27.567619941007592
							],
							[
								117.12466515527262,
								27.429928087111676
							],
							[
								117.10110070173607,
								27.346651515854802
							],
							[
								117.15381066293185,
								27.27639740751445
							],
							[
								117.04012251214431,
								27.109534207537763
							],
							[
								116.92343712782116,
								27.02101247804353
							],
							[
								116.66970584474893,
								26.986906032987093
							],
							[
								116.54526899596749,
								26.867869371174635
							],
							[
								116.50496137916434,
								26.68930145879537
							],
							[
								116.54232344017453,
								26.562797553364447
							],
							[
								116.6194763531513,
								26.49207835523191
							],
							[
								116.59446495969019,
								26.39508169176665
							],
							[
								116.50165408726639,
								26.40704478568844
							],
							[
								116.39897301599194,
								26.287543035882436
							],
							[
								116.41928185357472,
								26.152874253943736
							],
							[
								116.39726769364916,
								26.061458645500153
							],
							[
								116.32321536699573,
								25.955108547121768
							],
							[
								116.13516483029264,
								25.866328437007724
							],
							[
								116.12369266188682,
								25.764241644936106
							],
							[
								116.02757449756507,
								25.63636831304717
							],
							[
								115.97874026904822,
								25.35083018646401
							],
							[
								115.90799523339342,
								25.23827891723826
							],
							[
								115.84283125186084,
								25.19474152290303
							],
							[
								115.8884615421664,
								24.99994721119495
							],
							[
								115.88753136617959,
								24.916773992725638
							],
							[
								115.78727908676052,
								24.86091177016209
							],
							[
								115.74909020434939,
								24.747740383312077
							],
							[
								115.7992163431598,
								24.572738145249247
							],
							[
								115.70578535401091,
								24.545711371082916
							],
							[
								115.59917687411337,
								24.609066677485202
							],
							[
								115.42058312421193,
								24.784559841063924
							],
							[
								115.23966393434307,
								24.746112576234395
							],
							[
								115.13910159656155,
								24.684152532913117
							],
							[
								115.0469625177061,
								24.706657620153123
							],
							[
								114.94464318163762,
								24.669967352711183
							],
							[
								114.8626843608946,
								24.587827663915647
							],
							[
								114.74046959839342,
								24.62524140087004
							],
							[
								114.4981071309395,
								24.555839952351903
							],
							[
								114.42488162568645,
								24.499590156160878
							],
							[
								114.28938602144785,
								24.595630805217553
							],
							[
								114.19233768113918,
								24.695262966112978
							],
							[
								114.30163333531016,
								24.75864411093704
							],
							[
								114.38359215695255,
								24.88468292927388
							],
							[
								114.4135128109674,
								24.97969005045553
							],
							[
								114.54823326974963,
								25.054465847520817
							],
							[
								114.72930748924932,
								25.118880520219818
							],
							[
								114.68305708221862,
								25.163451443329535
							],
							[
								114.7069315941178,
								25.28956777603213
							],
							[
								114.58047936373163,
								25.360054430167793
							],
							[
								114.56931725458765,
								25.406873277080166
							],
							[
								114.42922244725821,
								25.385970160294676
							],
							[
								114.27884402902868,
								25.291815700734077
							],
							[
								114.11497806168825,
								25.30842967369057
							],
							[
								114.02604292194326,
								25.267656968893988
							],
							[
								114.01209028483879,
								25.435114448073392
							],
							[
								113.9275476417103,
								25.44811106987001
							],
							[
								113.98242801324216,
								25.58166881046722
							],
							[
								113.91793582617748,
								25.660191148103024
							],
							[
								113.90718712818341,
								25.749772243893972
							],
							[
								114.01829145658542,
								25.934618842385674
							],
							[
								114.04144249897212,
								26.068848374752747
							],
							[
								114.21352501786521,
								26.169772446840966
							],
							[
								114.16215864470564,
								26.221371364896584
							],
							[
								114.06283654217259,
								26.17778229371794
							],
							[
								113.93948489810958,
								26.209434109396682
							],
							[
								113.99860273572773,
								26.283098863321896
							],
							[
								114.01488081279922,
								26.38508230170686
							],
							[
								114.06841759629515,
								26.45370860386899
							],
							[
								114.08505740767316,
								26.577499498403085
							],
							[
								113.86470910014492,
								26.65586680820661
							],
							[
								113.83163618386277,
								26.827484239106354
							],
							[
								113.89240766787964,
								26.945332343412872
							],
							[
								113.7540181819935,
								27.141857814986196
							],
							[
								113.82357466014247,
								27.22867422123835
							],
							[
								113.85096316861535,
								27.345902207920517
							],
							[
								113.78275027940191,
								27.370784410172377
							],
							[
								113.66746015815977,
								27.329546617382505
							],
							[
								113.60012576719032,
								27.368226427107885
							],
							[
								113.56209191261172,
								27.590564276919878
							],
							[
								113.70099816333448,
								27.81894826884752
							],
							[
								113.7368099298343,
								27.981574001838737
							],
							[
								113.91648888625309,
								28.021183987551012
							],
							[
								114.0137956080809,
								28.106475937714322
							],
							[
								114.09187869704431,
								28.257707018464117
							],
							[
								114.18448286299372,
								28.29307953539228
							],
							[
								114.22685753824476,
								28.40896393493759
							],
							[
								114.17704145689771,
								28.50730418553971
							],
							[
								114.05694542878854,
								28.564277452142676
							],
							[
								114.11280765225126,
								28.615514634992422
							],
							[
								114.14272830626629,
								28.788501492350008
							],
							[
								114.01209028483873,
								28.912912502709815
							],
							[
								113.9051717465789,
								28.955984809051756
							],
							[
								113.902381220417,
								29.066339830418826
							],
							[
								114.06345665889773,
								29.203153185171345
							],
							[
								114.2465462591025,
								29.248912664887513
							],
							[
								114.30814456631873,
								29.354539292854042
							],
							[
								114.46953006406119,
								29.31792654157661
							],
							[
								114.70868859330392,
								29.389524237953253
							],
							[
								114.81824262899408,
								29.39386505772623
							],
							[
								114.895188837295,
								29.520188096903155
							],
							[
								114.97275516232082,
								29.559953111347
							],
							[
								115.14018680217919,
								29.58752248787252
							],
							[
								115.35433393796086,
								29.64762217922018
							],
							[
								115.41686242116378,
								29.711700955135
							],
							[
								115.48621219283837,
								29.864275621222987
							],
							[
								115.70516523638656,
								29.86081329969403
							],
							[
								115.85590538892262,
								29.73859853809202
							],
							[
								115.99899742978761,
								29.744127916270287
							],
							[
								116.14725711542354,
								29.788776352846384
							],
							[
								116.23619225516842,
								29.78133494675035
							],
							[
								116.38951622919058,
								29.876057847991262
							],
							[
								116.49250735882765,
								29.88471365001493
							],
							[
								116.65048221188454,
								30.0506725124265
							],
							[
								116.79140384331271,
								30.02201793118263
							],
							[
								116.88679853722283,
								29.920422065525912
							],
							[
								116.79791507432122,
								29.755935981460368
							],
							[
								116.67497684140807,
								29.70800609050866
							],
							[
								116.64846683207861,
								29.62741669442491
							],
							[
								116.74856408096753,
								29.544863593579947
							],
							[
								116.88834882993456,
								29.560521552127938
							],
							[
								116.95506310417892,
								29.6539008653327
							],
							[
								117.0790865418104,
								29.710202338367168
							],
							[
								117.06709761036643,
								29.84058197737633
							],
							[
								117.1251819192102,
								29.910551865775943
							],
							[
								117.22553755141678,
								29.906676133996342
							],
							[
								117.27426842714618,
								29.829471544176386
							],
							[
								117.40630171075543,
								29.8311768665192
							],
							[
								117.40216759655743,
								29.773066718354357
							],
							[
								117.52737959169485,
								29.622352403340727
							],
							[
								117.64918094304613,
								29.60586762069417
							],
							[
								117.70767866393919,
								29.555638129096366
							],
							[
								117.89857140544603,
								29.54897186935625
							],
							[
								117.98590457563569,
								29.572019558056184
							],
							[
								118.11344201074019,
								29.518663641713715
							],
							[
								118.17473025869447,
								29.407869370774904
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 26,
					"name": "江苏"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								121.34094130672383,
								31.49093327643905
							],
							[
								121.1867944681901,
								31.457511705400975
							],
							[
								121.12628136569242,
								31.276954250738072
							],
							[
								121.0586369163608,
								31.248403022281764
							],
							[
								121.03471072761818,
								31.143758246246023
							],
							[
								120.88298872315124,
								31.140037543198048
							],
							[
								120.9093437028497,
								31.01172496173757
							],
							[
								120.69209598164423,
								30.97655915038456
							],
							[
								120.70945926343427,
								30.89108633126918
							],
							[
								120.57789106691928,
								30.845791937747805
							],
							[
								120.49097130698044,
								30.763703924896305
							],
							[
								120.44694298712932,
								30.889691067288993
							],
							[
								120.3616768735888,
								30.938757838903285
							],
							[
								120.21341718975145,
								30.920541897290832
							],
							[
								120.12861616420457,
								30.943176173941396
							],
							[
								119.9430977721446,
								31.086578274068188
							],
							[
								119.93193566300044,
								31.15003693325795
							],
							[
								119.74011274640623,
								31.176495265743938
							],
							[
								119.62978356256133,
								31.13288035704295
							],
							[
								119.36277143775169,
								31.192359930766145
							],
							[
								119.31683108908351,
								31.266722317580985
							],
							[
								119.16288699833638,
								31.287444566313752
							],
							[
								119.0747270040481,
								31.23884288179363
							],
							[
								118.81608646042179,
								31.22633718551279
							],
							[
								118.75102583167688,
								31.35795705797193
							],
							[
								118.82724856956588,
								31.397541205262513
							],
							[
								118.88094038269253,
								31.52244314203739
							],
							[
								118.86047651637807,
								31.627372138013868
							],
							[
								118.68074588401538,
								31.64675080050918
							],
							[
								118.68436323517517,
								31.70085602478585
							],
							[
								118.47688235913358,
								31.790230414102467
							],
							[
								118.48106815017502,
								31.858701687532886
							],
							[
								118.35198042235857,
								31.946680812869317
							],
							[
								118.38314131072286,
								32.053961087234484
							],
							[
								118.49905154779071,
								32.13767690716358
							],
							[
								118.51439944887557,
								32.1997661398955
							],
							[
								118.650360142007,
								32.23787750884003
							],
							[
								118.68405317591339,
								32.33924083139925
							],
							[
								118.66787845342787,
								32.45321320212753
							],
							[
								118.55181318582993,
								32.574446112697956
							],
							[
								118.75185265487613,
								32.61250580479907
							],
							[
								118.89132734637997,
								32.595685126267625
							],
							[
								119.08051476374533,
								32.446081855293414
							],
							[
								119.19937055930387,
								32.59372142240571
							],
							[
								119.19037885959676,
								32.71123362902887
							],
							[
								118.99297488798061,
								32.962045192931384
							],
							[
								118.85737593005524,
								32.97230296540948
							],
							[
								118.74823530461572,
								32.83853852013658
							],
							[
								118.72017500167516,
								32.73213674581419
							],
							[
								118.39910932763337,
								32.73089651146492
							],
							[
								118.29968387321219,
								32.77740530001455
							],
							[
								118.23901574108368,
								32.923701279990155
							],
							[
								118.21803510993243,
								33.17991303176103
							],
							[
								118.08073082876479,
								33.14955312817443
							],
							[
								117.93185102730308,
								33.235129299177856
							],
							[
								118.17674564029915,
								33.69262075524375
							],
							[
								118.1236739438973,
								33.76600128832888
							],
							[
								117.7522237486271,
								33.7243500843889
							],
							[
								117.74555748888702,
								33.882273261501894
							],
							[
								117.65088626538886,
								33.98247386317826
							],
							[
								117.50345340385161,
								34.04975657820364
							],
							[
								117.39172895692593,
								34.031256414851725
							],
							[
								117.32129397963342,
								34.07885040901925
							],
							[
								117.15944339389756,
								34.09117523904604
							],
							[
								117.03392134039751,
								34.15553823490163
							],
							[
								116.96953250522097,
								34.275401719913475
							],
							[
								116.94948205005653,
								34.38929657627608
							],
							[
								116.80225589409417,
								34.40007111269176
							],
							[
								116.76954471211889,
								34.45182506037821
							],
							[
								116.62485070169856,
								34.48500132944778
							],
							[
								116.428118523651,
								34.63969472902858
							],
							[
								116.37721723758551,
								34.63953970029695
							],
							[
								116.42021202956153,
								34.83425649673998
							],
							[
								116.47002811090874,
								34.89825775828896
							],
							[
								116.63187869664466,
								34.937945258366994
							],
							[
								116.8276290218621,
								34.95830577189389
							],
							[
								116.9414205263364,
								34.879628403727935
							],
							[
								117.06058637935814,
								34.70945791275258
							],
							[
								117.18181928902902,
								34.450145575557855
							],
							[
								117.2739066919404,
								34.56367869671456
							],
							[
								117.33695193908073,
								34.58861257580975
							],
							[
								117.4690369004328,
								34.47533783617223
							],
							[
								117.59068322215307,
								34.47159129470256
							],
							[
								117.65321170535594,
								34.5261099310286
							],
							[
								117.77330773256574,
								34.52654918149963
							],
							[
								117.7900508967316,
								34.65116689743439
							],
							[
								117.91469445198754,
								34.676953437251456
							],
							[
								118.05044844044335,
								34.65147695579685
							],
							[
								118.16542850062501,
								34.39924429039172
							],
							[
								118.39104780481233,
								34.44373769823619
							],
							[
								118.47719241659695,
								34.68920075111379
							],
							[
								118.68074588401538,
								34.683852240988244
							],
							[
								118.75944909060308,
								34.748628647993854
							],
							[
								118.86678104091231,
								35.036311347390836
							],
							[
								119.07627729675994,
								35.04982473402427
							],
							[
								119.17559940019237,
								35.105919501483925
							],
							[
								119.28029535679576,
								35.076608741968954
							],
							[
								119.19288170700031,
								35.00043366100007
							],
							[
								119.20191491000014,
								34.78497955900019
							],
							[
								119.34669030000032,
								34.78082916900007
							],
							[
								119.64096113400024,
								34.55052317900018
							],
							[
								119.82618248800009,
								34.4704043640001
							],
							[
								119.93995201900032,
								34.4579125020002
							],
							[
								120.1181746750002,
								34.359605210000154
							],
							[
								120.25709069100014,
								34.31183502800019
							],
							[
								120.37134850400003,
								34.03603750200014
							],
							[
								120.40707441500024,
								33.85976797100014
							],
							[
								120.49830162900014,
								33.75332265800006
							],
							[
								120.51172936300031,
								33.65672435100012
							],
							[
								120.62777754000007,
								33.47801341400017
							],
							[
								120.66195722700024,
								33.33803945500017
							],
							[
								120.73788496200018,
								33.279282945000176
							],
							[
								120.73023522200015,
								33.20490143400008
							],
							[
								120.80697675900012,
								33.13776276200022
							],
							[
								120.83375084700003,
								33.025620835000154
							],
							[
								120.89576256600014,
								33.01357656500008
							],
							[
								120.90780683700018,
								32.843898830000114
							],
							[
								120.86142011800018,
								32.71967194200016
							],
							[
								120.91119932700019,
								32.63012129600017
							],
							[
								121.12020918100029,
								32.507391669000185
							],
							[
								121.35413965600026,
								32.41482275900012
							],
							[
								121.41928144600001,
								32.250311591000184
							],
							[
								121.44336998800031,
								32.114325262000165
							],
							[
								121.65536543100018,
								32.06293366100016
							],
							[
								121.82194511600028,
								31.952486444000186
							],
							[
								121.92205718300033,
								31.75437812900023
							],
							[
								121.81730624900024,
								31.690949425000184
							],
							[
								121.67555427200011,
								31.723572594000075
							],
							[
								121.28641836400004,
								31.890589166000098
							],
							[
								121.11508706100005,
								31.796333603000193
							],
							[
								120.97781679200011,
								31.814365316000078
							],
							[
								120.9448348320002,
								31.884588934000135
							],
							[
								120.81080162900003,
								32.022609768000194
							],
							[
								120.63437647600028,
								32.07700959800013
							],
							[
								120.49075762900014,
								32.08245338200015
							],
							[
								120.36158287900025,
								32.025580145000106
							],
							[
								120.26710045700031,
								31.948675848000107
							],
							[
								120.13135826900032,
								31.943182684000078
							],
							[
								119.99203535200002,
								32.015855210000154
							],
							[
								119.90845787900014,
								32.13886139500019
							],
							[
								119.92115319100003,
								32.19647858300016
							],
							[
								119.8183699880002,
								32.313706773000035
							],
							[
								119.69239342500032,
								32.319769598000136
							],
							[
								119.6904403000002,
								32.23533763200015
							],
							[
								119.78858483200008,
								32.19863515800006
							],
							[
								119.78492272200015,
								32.114325262000165
							],
							[
								119.85556074300018,
								32.08698151200019
							],
							[
								120.00639553200017,
								31.950304999000167
							],
							[
								120.22999108200031,
								31.908880927000126
							],
							[
								120.51783287900003,
								32.018744208000186
							],
							[
								120.75035387400033,
								31.978336276000192
							],
							[
								120.82479860100023,
								31.828702466000095
							],
							[
								120.8953628510003,
								31.763320274000165
							],
							[
								121.14440229000007,
								31.68465829100012
							],
							[
								121.34094130672383,
								31.49093327643905
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 27,
					"name": "上海"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									121.34094130672383,
									31.49093327643905
								],
								[
									121.54623457100013,
									31.366115627000113
								],
								[
									121.72516399500012,
									31.2815671500002
								],
								[
									121.87702454800024,
									31.099135878000084
								],
								[
									121.97738292300016,
									30.914923436000038
								],
								[
									121.90739924100006,
									30.85708552400021
								],
								[
									121.63113225500024,
									30.83655553300011
								],
								[
									121.41059758600022,
									30.767388095000143
								],
								[
									121.2748085699094,
									30.69124055395892
								],
								[
									121.25614423986497,
									30.74406688088189
								],
								[
									121.10437055855436,
									30.83434560776368
								],
								[
									120.98101891539056,
									30.83204600711761
								],
								[
									120.96918501177902,
									31.009451199513393
								],
								[
									120.9093437028497,
									31.01172496173757
								],
								[
									120.88298872315124,
									31.140037543198048
								],
								[
									121.03471072761818,
									31.143758246246023
								],
								[
									121.0586369163608,
									31.248403022281764
								],
								[
									121.12628136569242,
									31.276954250738072
								],
								[
									121.1867944681901,
									31.457511705400975
								],
								[
									121.34094130672383,
									31.49093327643905
								]
							]
						],
						[
							[
								[
									121.91288969500033,
									31.45633220700006
								],
								[
									121.85137350400032,
									31.439178905000205
								],
								[
									121.31446373800014,
									31.655585028000132
								],
								[
									121.17628760400021,
									31.78432289200012
								],
								[
									121.26406453300001,
									31.84107679400006
								],
								[
									121.47530402100028,
									31.770769919000145
								],
								[
									121.6632225950002,
									31.6523516700002
								],
								[
									121.844075352,
									31.607946968000192
								],
								[
									121.98008567500005,
									31.540295811000107
								],
								[
									121.91288969500033,
									31.45633220700006
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 28,
					"name": "浙江"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									121.28535242000021,
									28.10194563100012
								],
								[
									121.18640047700012,
									28.043700183000112
								],
								[
									121.13062584700009,
									28.103461005000185
								],
								[
									121.23058760400033,
									28.219732518000114
								],
								[
									121.28535242000021,
									28.10194563100012
								]
							]
						],
						[
							[
								[
									122.17359459700015,
									30.102240302000126
								],
								[
									122.2895613940002,
									30.06732819200019
								],
								[
									122.29363040500016,
									29.93378327000019
								],
								[
									122.18474368600016,
									29.994452216000155
								],
								[
									122.01221764400009,
									30.031927802000183
								],
								[
									121.97461998800009,
									30.148016669000214
								],
								[
									122.08741295700008,
									30.14752838700022
								],
								[
									122.17359459700015,
									30.102240302000126
								]
							]
						],
						[
							[
								[
									120.9093437028497,
									31.01172496173757
								],
								[
									120.96918501177902,
									31.009451199513393
								],
								[
									120.98101891539056,
									30.83204600711761
								],
								[
									121.10437055855436,
									30.83434560776368
								],
								[
									121.25614423986497,
									30.74406688088189
								],
								[
									121.2748085699094,
									30.69124055395892
								],
								[
									121.13086998800031,
									30.59975820500017
								],
								[
									120.97775867700011,
									30.5433175940002
								],
								[
									120.9395451180003,
									30.421942450000216
								],
								[
									120.78743319500018,
									30.293625282000136
								],
								[
									120.6849411410002,
									30.27178091900018
								],
								[
									120.89281215100027,
									30.169796399000063
								],
								[
									120.99439537900014,
									30.211086330000114
								],
								[
									121.14969672600012,
									30.325753330000197
								],
								[
									121.25410242800024,
									30.34839323400007
								],
								[
									121.37738414700016,
									30.32506357900013
								],
								[
									121.50684671500017,
									30.220026009000122
								],
								[
									121.67775592200019,
									30.000640952000083
								],
								[
									121.91487649700014,
									29.91869584300011
								],
								[
									121.98303901000008,
									29.823175763000194
								],
								[
									121.70411217500009,
									29.572007554000123
								],
								[
									121.45834394600024,
									29.525213934000135
								],
								[
									121.46507415900021,
									29.42088645200016
								],
								[
									121.91578209700009,
									29.640855210000183
								],
								[
									121.9663192070002,
									29.60248444200016
								],
								[
									121.90585371200018,
									29.284613348000136
								],
								[
									121.93970787900025,
									29.210109768000166
								],
								[
									121.84058678500003,
									29.161118882000125
								],
								[
									121.74569746200007,
									29.201605536000045
								],
								[
									121.61475670700008,
									29.206000067000133
								],
								[
									121.58871504000001,
									29.291489976000037
								],
								[
									121.47120201900009,
									29.191351630000128
								],
								[
									121.49683678500014,
									29.104437567000133
								],
								[
									121.62142988400012,
									29.11326732000009
								],
								[
									121.68173261800007,
									29.0267601580002
								],
								[
									121.6699324880002,
									28.82534414300011
								],
								[
									121.60556074300018,
									28.724676825000216
								],
								[
									121.51012813400013,
									28.657059309000232
								],
								[
									121.60774270100023,
									28.477202856000105
								],
								[
									121.65634199300013,
									28.339300848000192
								],
								[
									121.40894616000008,
									28.304917710000154
								],
								[
									121.28785241000003,
									28.18089427300015
								],
								[
									121.2368270190002,
									28.306097723000164
								],
								[
									121.14429772200015,
									28.343573309000192
								],
								[
									121.11946677900016,
									28.21893617000015
								],
								[
									121.00937821800028,
									28.10313263500018
								],
								[
									120.96522777500024,
									27.98714491700008
								],
								[
									120.83529707100024,
									27.955959377000113
								],
								[
									120.80748625600017,
									27.834826693000196
								],
								[
									120.66648375600005,
									27.625357910000048
								],
								[
									120.59657442500009,
									27.57028277800009
								],
								[
									120.67684980600029,
									27.49461497600018
								],
								[
									120.62256920700008,
									27.380357164000202
								],
								[
									120.5459090500002,
									27.403265692000133
								],
								[
									120.51783287900003,
									27.201605536000187
								],
								[
									120.41920496712629,
									27.2063322962116
								],
								[
									120.40580854712687,
									27.296861273828824
								],
								[
									120.34400353433568,
									27.379646917771083
								],
								[
									120.14773644428158,
									27.400214137772338
								],
								[
									120.06443403460298,
									27.343628444796963
								],
								[
									119.77008507726453,
									27.31587820111818
								],
								[
									119.69339725138207,
									27.41104035103143
								],
								[
									119.68657596201103,
									27.511292630450612
								],
								[
									119.61583092725562,
									27.665572617981923
								],
								[
									119.51170291605695,
									27.636711331162985
								],
								[
									119.46731286010049,
									27.5252969434992
								],
								[
									119.39036665269896,
									27.51261037916572
								],
								[
									119.26561974465551,
									27.42411448809321
								],
								[
									119.18583133334937,
									27.4199286970518
								],
								[
									119.00527387868658,
									27.48005422592189
								],
								[
									118.92269494031927,
									27.549998276799045
								],
								[
									118.88946699440646,
									27.722158310957298
								],
								[
									118.81980716436931,
									27.909950466141083
								],
								[
									118.74813195182816,
									27.973202419755893
								],
								[
									118.76565026324903,
									28.178176987777903
								],
								[
									118.7970178571884,
									28.21292938888027
								],
								[
									118.73521284439732,
									28.325971585420376
								],
								[
									118.49889651905926,
									28.262435410965566
								],
								[
									118.44644494028171,
									28.288687038775805
								],
								[
									118.47626224240861,
									28.332250271532814
								],
								[
									118.45791710778832,
									28.51738108996537
								],
								[
									118.41585249179911,
									28.604042467485954
								],
								[
									118.42551598507487,
									28.69519969351117
								],
								[
									118.37166914321642,
									28.798604234298097
								],
								[
									118.30288781142337,
									28.83578542725573
								],
								[
									118.22904219034479,
									28.95453786912745
								],
								[
									118.06393598775571,
									29.05055267976246
								],
								[
									118.00078738782759,
									29.14393199296717
								],
								[
									118.05199873315507,
									29.275319322328926
								],
								[
									118.13235558524207,
									29.297927761457117
								],
								[
									118.17473025869447,
									29.407869370774904
								],
								[
									118.37321943592826,
									29.4528278675121
								],
								[
									118.55692915285806,
									29.625220444767848
								],
								[
									118.7237406759914,
									29.730201116688193
								],
								[
									118.74131066335633,
									29.82836050103643
								],
								[
									118.82011722183222,
									29.880036933457802
								],
								[
									118.89396284381036,
									29.982588813522966
								],
								[
									118.85272505102029,
									30.15927053550689
								],
								[
									118.9094657736265,
									30.222212428960404
								],
								[
									118.88109541232336,
									30.324350897875718
								],
								[
									118.93468387266262,
									30.352126979976134
								],
								[
									119.05751875188889,
									30.31187103911722
								],
								[
									119.21068769717942,
									30.313731391090926
								],
								[
									119.36287479143857,
									30.404475205966094
								],
								[
									119.3208101754492,
									30.518163356753632
								],
								[
									119.24153852808075,
									30.550848700307313
								],
								[
									119.35062747577729,
									30.675363064353974
								],
								[
									119.44312828983868,
									30.639215400170542
								],
								[
									119.5005408060133,
									30.769388332705375
								],
								[
									119.57495486877224,
									30.847058010518765
								],
								[
									119.62978356256133,
									31.13288035704295
								],
								[
									119.74011274640623,
									31.176495265743938
								],
								[
									119.93193566300044,
									31.15003693325795
								],
								[
									119.9430977721446,
									31.086578274068188
								],
								[
									120.12861616420457,
									30.943176173941396
								],
								[
									120.21341718975145,
									30.920541897290832
								],
								[
									120.3616768735888,
									30.938757838903285
								],
								[
									120.44694298712932,
									30.889691067288993
								],
								[
									120.49097130698044,
									30.763703924896305
								],
								[
									120.57789106691928,
									30.845791937747805
								],
								[
									120.70945926343427,
									30.89108633126918
								],
								[
									120.69209598164423,
									30.97655915038456
								],
								[
									120.9093437028497,
									31.01172496173757
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 29,
					"name": "吉林"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								131.25284846284336,
								43.46916859112878
							],
							[
								131.28090621000007,
								43.380221456000186
							],
							[
								131.16721805900016,
								43.18155141200003
							],
							[
								131.18985233600011,
								43.139150899000185
							],
							[
								131.08546594300014,
								43.04210256000013
							],
							[
								131.10303592900016,
								42.91043101000014
							],
							[
								130.9924483650002,
								42.848729350000184
							],
							[
								130.76951623600024,
								42.86580841100013
							],
							[
								130.5864783130002,
								42.81725840300004
							],
							[
								130.4071610920002,
								42.73537709600009
							],
							[
								130.57190555900024,
								42.621818136000144
							],
							[
								130.43124231000002,
								42.56151173900014
							],
							[
								130.24303674300006,
								42.743361105000076
							],
							[
								130.2390059820001,
								42.90224029600003
							],
							[
								130.1404073490001,
								42.907123719000055
							],
							[
								130.12149377400016,
								42.98184784000006
							],
							[
								129.9813472900001,
								42.96673248400006
							],
							[
								129.879751425,
								42.99603302000011
							],
							[
								129.76130904200016,
								42.74604827900009
							],
							[
								129.70332808500012,
								42.44237172400008
							],
							[
								129.51708622300015,
								42.390953674000116
							],
							[
								129.3630904540001,
								42.44500722300009
							],
							[
								129.2430977790001,
								42.37870636100007
							],
							[
								129.2111617430001,
								42.21995636000014
							],
							[
								129.119797812,
								42.14936635300006
							],
							[
								128.96383833800013,
								42.088517355000135
							],
							[
								128.94006718000009,
								42.0353681440001
							],
							[
								128.72095910700006,
								42.047589621000014
							],
							[
								128.50236779900013,
								41.99609405500013
							],
							[
								128.2619690350001,
								42.03286183700001
							],
							[
								128.03459273300012,
								41.9937427780001
							],
							[
								128.0399670820001,
								41.87958953900008
							],
							[
								128.15913293500006,
								41.71182200100009
							],
							[
								128.30300012200007,
								41.583406067000084
							],
							[
								128.1856946210001,
								41.40445058200007
							],
							[
								128.06415165200013,
								41.3884308880001
							],
							[
								127.94421065300008,
								41.47085479800012
							],
							[
								127.84886763600008,
								41.43132232700006
							],
							[
								127.63833785000014,
								41.42987538700007
							],
							[
								127.47411014900007,
								41.498811747000104
							],
							[
								127.26905806500014,
								41.50496124300008
							],
							[
								127.04545414300009,
								41.66800038700009
							],
							[
								127.03315515200012,
								41.73158823700007
							],
							[
								126.88711755400004,
								41.78491831500014
							],
							[
								126.78862227400009,
								41.69590566100007
							],
							[
								126.61788334200008,
								41.665933330000115
							],
							[
								126.50130131100002,
								41.43437123600009
							],
							[
								126.26069584200008,
								41.14312286400008
							],
							[
								126.14742110200007,
								41.092273255000066
							],
							[
								126.00784305900004,
								40.89931345700012
							],
							[
								125.70408969199298,
								40.859194624916114
							],
							[
								125.57644900931427,
								40.91261933031785
							],
							[
								125.69173912965732,
								41.004060777183156
							],
							[
								125.7664115739351,
								41.13947886795543
							],
							[
								125.73767947832539,
								41.24523468713113
							],
							[
								125.65075971928559,
								41.28626577434602
							],
							[
								125.4698922062604,
								41.574568590468175
							],
							[
								125.44953169183412,
								41.67993683511685
							],
							[
								125.30628462133825,
								41.68037608468859
							],
							[
								125.29543256965752,
								41.957232570826534
							],
							[
								125.48053755056753,
								42.15143260423133
							],
							[
								125.28396040305017,
								42.23445079217038
							],
							[
								125.20871951709205,
								42.40583567997271
							],
							[
								125.10195600756373,
								42.4938664821525
							],
							[
								125.09575483581716,
								42.576677965415854
							],
							[
								125.0189119812029,
								42.646854560289796
							],
							[
								124.94212080343254,
								42.80369253178506
							],
							[
								124.86031701142088,
								42.88769257345359
							],
							[
								124.88842899030573,
								43.08672435214717
							],
							[
								124.76569746296764,
								43.105586248906405
							],
							[
								124.51956261562225,
								42.87167287880038
							],
							[
								124.37590213397641,
								42.9855677351629
							],
							[
								124.41889692595248,
								43.081866767537406
							],
							[
								124.29580366430775,
								43.15656505023685
							],
							[
								124.28185102810255,
								43.22599233717659
							],
							[
								124.00641564256796,
								43.31012156825588
							],
							[
								123.80653120315253,
								43.45422130037281
							],
							[
								123.69625369705051,
								43.353478095437765
							],
							[
								123.60592329332536,
								43.365053615731796
							],
							[
								123.378133579701,
								43.453161933176716
							],
							[
								123.36139041643457,
								43.53977163295443
							],
							[
								123.48996137941418,
								43.59144806627526
							],
							[
								123.52215579565342,
								43.6969713414542
							],
							[
								123.32227135623816,
								44.041859850551646
							],
							[
								123.35906497556812,
								44.15133637097668
							],
							[
								123.25757246269899,
								44.20407217149355
							],
							[
								123.12378217990363,
								44.49439036742149
							],
							[
								123.04451053343439,
								44.51325226507993
							],
							[
								122.95531701127095,
								44.44684804919811
							],
							[
								122.71538333477304,
								44.33556285274341
							],
							[
								122.3766443223775,
								44.2199626740381
							],
							[
								122.25406782377104,
								44.245930081008396
							],
							[
								122.28186974519264,
								44.428657945108085
							],
							[
								122.08818647662451,
								44.61967987692478
							],
							[
								122.04596683190368,
								44.69494660130459
							],
							[
								122.03806033691501,
								44.934363512066454
							],
							[
								122.01077518122969,
								45.118331611414675
							],
							[
								122.19184939982983,
								45.20103974099126
							],
							[
								122.2340173686066,
								45.287055162465805
							],
							[
								122.13645226436057,
								45.449086616254334
							],
							[
								122.02705325740186,
								45.484510810025824
							],
							[
								121.96390465657464,
								45.56750316044253
							],
							[
								121.93439741370963,
								45.689950466041125
							],
							[
								121.7849491723664,
								45.675971992313634
							],
							[
								121.66640343606969,
								45.715762844279794
							],
							[
								121.81476647269449,
								45.913709418254996
							],
							[
								121.77368371043485,
								46.01034434741368
							],
							[
								121.99599572182501,
								45.98029450129016
							],
							[
								122.23980512920332,
								45.81348297815691
							],
							[
								122.3985551286163,
								45.94918528887001
							],
							[
								122.49787723204872,
								45.82542023455619
							],
							[
								122.64696373908532,
								45.72506460234953
							],
							[
								122.77341596857218,
								45.788471584695856
							],
							[
								122.79873742129496,
								46.089331773042915
							],
							[
								123.06890180927098,
								46.1086587586947
							],
							[
								123.16166100485151,
								46.220073147257864
							],
							[
								123.25834760995417,
								46.26508331993932
							],
							[
								123.35611941887606,
								46.235162665025
							],
							[
								123.91939253074065,
								46.272343857982634
							],
							[
								124.0340625352577,
								46.01848338549985
							],
							[
								123.97944054614425,
								45.978124090954
							],
							[
								124.06196780766811,
								45.87167064068751
							],
							[
								124.0178361350296,
								45.78172780969069
							],
							[
								124.14103275036115,
								45.63220205308227
							],
							[
								124.22356001188501,
								45.635509344980306
							],
							[
								124.39559085483415,
								45.45148956968791
							],
							[
								124.56307417243511,
								45.41526439113872
							],
							[
								124.61185672410858,
								45.447923896270765
							],
							[
								124.87246097159652,
								45.44859568893989
							],
							[
								125.0277486512793,
								45.49836009434287
							],
							[
								125.10350630117483,
								45.39531728786247
							],
							[
								125.30742150290001,
								45.41696971348151
							],
							[
								125.43247846930592,
								45.477250271083136
							],
							[
								125.6987154477597,
								45.51091746746715
							],
							[
								125.70491662040575,
								45.35971222603834
							],
							[
								125.84072228390625,
								45.23481028926338
							],
							[
								126.15047081917294,
								45.14117259453957
							],
							[
								126.42104861919836,
								45.22845408788589
							],
							[
								126.55933475139761,
								45.246747544763366
							],
							[
								126.78898481699571,
								45.14933747014817
							],
							[
								126.95269575380598,
								45.13419627553762
							],
							[
								127.07661583865001,
								44.93400177686047
							],
							[
								126.97827558804795,
								44.8261013857703
							],
							[
								127.03227746043643,
								44.73055166312872
							],
							[
								127.04498986229225,
								44.598234157780155
							],
							[
								127.14725752241668,
								44.654690660445624
							],
							[
								127.23309207583867,
								44.6159591738768
							],
							[
								127.37520226477261,
								44.64882538548309
							],
							[
								127.5592737160091,
								44.57379120510004
							],
							[
								127.49281782418313,
								44.41090709148901
							],
							[
								127.71471642532276,
								44.161490789768095
							],
							[
								127.74437869691934,
								44.085629787984374
							],
							[
								127.84959191283644,
								44.05591583954438
							],
							[
								128.05206017463735,
								44.12578237605578
							],
							[
								128.042965123042,
								44.340704658193374
							],
							[
								128.15525800984926,
								44.35300364799994
							],
							[
								128.20693444227066,
								44.44049184782051
							],
							[
								128.35870812358104,
								44.501676743886605
							],
							[
								128.4187561380852,
								44.450103665152085
							],
							[
								128.45069217280547,
								44.3155382351014
							],
							[
								128.4459379418825,
								44.15394603088458
							],
							[
								128.52877526266826,
								44.08010040980602
							],
							[
								128.63150800988677,
								43.91217784353262
							],
							[
								128.74741824785383,
								43.80218455737142
							],
							[
								128.76447147038203,
								43.70906362568576
							],
							[
								128.8828621770478,
								43.55615306281359
							],
							[
								129.014895460657,
								43.5396682810663
							],
							[
								129.22893924365115,
								43.60839793601593
							],
							[
								129.24924808213325,
								43.78616486271821
							],
							[
								129.53491539902643,
								43.870319933118395
							],
							[
								129.75242150265012,
								43.87416982737565
							],
							[
								129.80213423120978,
								43.96548208303176
							],
							[
								129.9129285021486,
								44.02160268801359
							],
							[
								130.0001066427074,
								43.98356883433419
							],
							[
								130.03317955898956,
								43.85561798807967
							],
							[
								130.1036145371811,
								43.84543772996727
							],
							[
								130.28019290637747,
								43.96444855425736
							],
							[
								130.33279951388636,
								43.927809964558236
							],
							[
								130.41408654196027,
								43.669169420032716
							],
							[
								130.58870120729478,
								43.62772492076843
							],
							[
								130.9165881689088,
								43.45047475800365
							],
							[
								130.99461958192813,
								43.50773224544673
							],
							[
								131.14949384956157,
								43.43610870974911
							],
							[
								131.25284846284336,
								43.46916859112878
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 30,
					"name": "内蒙古"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								121.41327478505161,
								53.317334824121446
							],
							[
								121.60718224476477,
								53.240729885275954
							],
							[
								121.80019371976425,
								53.02358551685808
							],
							[
								121.69151818231819,
								52.908347073358726
							],
							[
								121.50274417520347,
								52.77468598087333
							],
							[
								121.17392703670339,
								52.594981187831564
							],
							[
								121.49091027159176,
								52.444680283967955
							],
							[
								121.69234500461823,
								52.388533841463584
							],
							[
								121.83125125534116,
								52.26936798844193
							],
							[
								122.01790652896307,
								52.28311391907212
							],
							[
								122.17365929573992,
								52.47963939154465
							],
							[
								122.3386104677989,
								52.453697822096785
							],
							[
								122.49177941308938,
								52.29484446899707
							],
							[
								122.73073123585783,
								52.248904120328916
							],
							[
								122.77512129091474,
								52.20001821586797
							],
							[
								122.63766198101558,
								52.09496002958167
							],
							[
								122.75419233570778,
								51.84748159420025
							],
							[
								122.71445315968549,
								51.70167654153914
							],
							[
								122.83553104062503,
								51.567757065735975
							],
							[
								122.83894168531054,
								51.510551256035626
							],
							[
								122.95624718635855,
								51.38606273130995
							],
							[
								123.08812544213538,
								51.31247549085123
							],
							[
								123.27168012943434,
								51.26669017181396
							],
							[
								123.43833662293673,
								51.273098050034974
							],
							[
								123.56964643793282,
								51.203903307091906
							],
							[
								123.78875451111173,
								51.232816270754284
							],
							[
								123.86626915929423,
								51.31343150525976
							],
							[
								124.16206505655703,
								51.328365994295154
							],
							[
								124.35078738772768,
								51.27862742821324
							],
							[
								124.50188927636901,
								51.36058624895625
							],
							[
								124.66622033080353,
								51.33526479803194
							],
							[
								124.82062951134287,
								51.36585724471604
							],
							[
								125.06061486198621,
								51.53437409109145
							],
							[
								125.12753584180564,
								51.615738634430386
							],
							[
								125.33331139460518,
								51.58274323251419
							],
							[
								125.48663537042592,
								51.507398993768504
							],
							[
								125.7194893742352,
								51.25371938753969
							],
							[
								125.84340945907928,
								51.206228746159724
							],
							[
								125.98438276555214,
								51.104219469352955
							],
							[
								126.05626468276887,
								50.98027354608723
							],
							[
								126.00102257693044,
								50.90175120755217
							],
							[
								125.82403079568462,
								50.766798203873975
							],
							[
								125.80940636591112,
								50.56223704700207
							],
							[
								125.5307670430646,
								50.39304840795762
							],
							[
								125.41842247941389,
								50.1946109084667
							],
							[
								125.26442671092394,
								50.10572744376651
							],
							[
								125.29522586498172,
								50.01446686495382
							],
							[
								125.22577273962025,
								49.91827118626625
							],
							[
								125.23569461531417,
								49.55439158830117
							],
							[
								125.267372267616,
								49.43848135033406
							],
							[
								125.22287885977153,
								49.22004507072347
							],
							[
								125.15812829028835,
								49.1511087101988
							],
							[
								124.86393436078208,
								49.175396633248
							],
							[
								124.82155968643036,
								49.060881660160504
							],
							[
								124.62183027574656,
								48.74198639645499
							],
							[
								124.53806277897405,
								48.571686713371065
							],
							[
								124.52069949808339,
								48.36903758441693
							],
							[
								124.56224734923569,
								48.236177476709145
							],
							[
								124.42556318569245,
								48.17437246391805
							],
							[
								124.32717125914627,
								48.33219228824356
							],
							[
								124.30076460170494,
								48.49187246454258
							],
							[
								124.2340503283599,
								48.53083649420881
							],
							[
								124.07793582637726,
								48.44830923088628
							],
							[
								123.72694949832072,
								48.191063951240324
							],
							[
								123.57755293202223,
								48.05432811085356
							],
							[
								123.29328087820994,
								47.94565257430685
							],
							[
								123.20682620716366,
								47.81382599537338
							],
							[
								122.79734215731469,
								47.64355215071117
							],
							[
								122.56536665264889,
								47.53115591111643
							],
							[
								122.4052213892557,
								47.33168488195176
							],
							[
								122.57404829309428,
								47.13112864806865
							],
							[
								122.79734215731469,
								47.03371857435272
							],
							[
								122.99624474479924,
								46.84029368820319
							],
							[
								123.18682742704402,
								46.76164215845881
							],
							[
								123.33048790869003,
								46.83264557653209
							],
							[
								123.37999393077524,
								46.89806793958377
							],
							[
								123.60871382038653,
								46.77463878025546
							],
							[
								123.39725385977772,
								46.59782786706242
							],
							[
								123.29152387902388,
								46.58635569955587
							],
							[
								123.01970584464902,
								46.6123489449478
							],
							[
								122.98890669239006,
								46.40657339124897
							],
							[
								123.16166100485151,
								46.220073147257864
							],
							[
								123.06890180927098,
								46.1086587586947
							],
							[
								122.79873742129496,
								46.089331773042915
							],
							[
								122.77341596857218,
								45.788471584695856
							],
							[
								122.64696373908532,
								45.72506460234953
							],
							[
								122.49787723204872,
								45.82542023455619
							],
							[
								122.3985551286163,
								45.94918528887001
							],
							[
								122.23980512920332,
								45.81348297815691
							],
							[
								121.99599572182501,
								45.98029450129016
							],
							[
								121.77368371043485,
								46.01034434741368
							],
							[
								121.81476647269449,
								45.913709418254996
							],
							[
								121.66640343606969,
								45.715762844279794
							],
							[
								121.7849491723664,
								45.675971992313634
							],
							[
								121.93439741370963,
								45.689950466041125
							],
							[
								121.96390465657464,
								45.56750316044253
							],
							[
								122.02705325740186,
								45.484510810025824
							],
							[
								122.13645226436057,
								45.449086616254334
							],
							[
								122.2340173686066,
								45.287055162465805
							],
							[
								122.19184939982983,
								45.20103974099126
							],
							[
								122.01077518122969,
								45.118331611414675
							],
							[
								122.03806033691501,
								44.934363512066454
							],
							[
								122.04596683190368,
								44.69494660130459
							],
							[
								122.08818647662451,
								44.61967987692478
							],
							[
								122.28186974519264,
								44.428657945108085
							],
							[
								122.25406782377104,
								44.245930081008396
							],
							[
								122.3766443223775,
								44.2199626740381
							],
							[
								122.71538333477304,
								44.33556285274341
							],
							[
								122.95531701127095,
								44.44684804919811
							],
							[
								123.04451053343439,
								44.51325226507993
							],
							[
								123.12378217990363,
								44.49439036742149
							],
							[
								123.25757246269899,
								44.20407217149355
							],
							[
								123.35906497556812,
								44.15133637097668
							],
							[
								123.32227135623816,
								44.041859850551646
							],
							[
								123.52215579565342,
								43.6969713414542
							],
							[
								123.48996137941418,
								43.59144806627526
							],
							[
								123.36139041643457,
								43.53977163295443
							],
							[
								123.378133579701,
								43.453161933176716
							],
							[
								123.60592329332536,
								43.365053615731796
							],
							[
								123.69625369705051,
								43.353478095437765
							],
							[
								123.61196943634047,
								43.08135000270045
							],
							[
								123.35441409743271,
								43.01231028938838
							],
							[
								123.1818664896469,
								42.94409739837627
							],
							[
								123.13127526284313,
								42.826378486178214
							],
							[
								122.8927885280682,
								42.74493642847341
							],
							[
								122.72794070879667,
								42.74100901985048
							],
							[
								122.47637983606069,
								42.84963288045313
							],
							[
								122.36687747631458,
								42.79909332869414
							],
							[
								122.4256852555701,
								42.72204376940448
							],
							[
								122.2993880557143,
								42.63646759750168
							],
							[
								122.04503665591699,
								42.720855210999275
							],
							[
								121.91827436716835,
								42.6465961778714
							],
							[
								121.87776004389093,
								42.539574285924516
							],
							[
								121.72366092261348,
								42.45766714112574
							],
							[
								121.64609459758765,
								42.45358470287181
							],
							[
								121.54444705598678,
								42.53523346615157
							],
							[
								121.36885053872129,
								42.49999013953342
							],
							[
								121.03424563962454,
								42.26010814077813
							],
							[
								120.91259931880359,
								42.29656586422328
							],
							[
								120.62786217699795,
								42.16037262619574
							],
							[
								120.50916141196956,
								42.14869375311423
							],
							[
								120.46880211832308,
								42.03800283496301
							],
							[
								120.34017947760083,
								41.96581085938362
							],
							[
								120.14076012617909,
								41.789284166131324
							],
							[
								120.02640018092359,
								41.73383535381865
							],
							[
								120.03032759044606,
								41.860597643466605
							],
							[
								119.96015099467274,
								41.97175364781273
							],
							[
								119.89188642771649,
								41.99945221644663
							],
							[
								119.80822228373131,
								42.12022003812433
							],
							[
								119.82145145132336,
								42.20861257640928
							],
							[
								119.62942182825486,
								42.25054800118926
							],
							[
								119.56275923085389,
								42.371832586804544
							],
							[
								119.33574466358539,
								42.28940867806807
							],
							[
								119.24525923112867,
								42.19194692571017
							],
							[
								119.36587202407475,
								42.10047964132244
							],
							[
								119.32174034963742,
								41.965397447334425
							],
							[
								119.29864098499354,
								41.777346909732245
							],
							[
								119.31559085473418,
								41.657819322403896
							],
							[
								119.38974653507455,
								41.472559311862796
							],
							[
								119.36163455618976,
								41.37499420851594
							],
							[
								119.23099653476226,
								41.27339834195993
							],
							[
								119.15265506427988,
								41.31220734289451
							],
							[
								118.47843265184542,
								41.35509878208313
							],
							[
								118.37027387923615,
								41.313964342080766
							],
							[
								118.31363650941739,
								41.569555976227434
							],
							[
								118.244390089631,
								41.59234528340809
							],
							[
								118.15938235940837,
								41.719133408779925
							],
							[
								118.27823815316833,
								41.75269725237635
							],
							[
								118.3221631211311,
								41.8635431992592
							],
							[
								118.26785119038016,
								42.073866279205504
							],
							[
								118.13390587795413,
								42.02190562594393
							],
							[
								118.08600182542386,
								42.18166331570947
							],
							[
								117.98931522032115,
								42.22160919910527
							],
							[
								118.04021650638663,
								42.288762722022
							],
							[
								118.02424848767754,
								42.38263296254115
							],
							[
								117.80048953726225,
								42.56882314727051
							],
							[
								117.7426119321949,
								42.591095688715086
							],
							[
								117.5936287779457,
								42.55158905668958
							],
							[
								117.45043338429332,
								42.54928945604368
							],
							[
								117.41239952971455,
								42.45808055317505
							],
							[
								117.24388268423849,
								42.48226512343669
							],
							[
								117.05593550032319,
								42.46283478499731
							],
							[
								116.88710859558512,
								42.39537120191949
							],
							[
								116.82659549398682,
								42.30816722293903
							],
							[
								116.87889204313319,
								42.220213935125
							],
							[
								116.8581181166578,
								42.01950267251044
							],
							[
								116.59973595634938,
								41.92372040497281
							],
							[
								116.46610070228564,
								41.94762075529371
							],
							[
								116.37752729684735,
								42.009684150503205
							],
							[
								116.20715010029687,
								41.88400706647306
							],
							[
								116.03785810756563,
								41.80062714332806
							],
							[
								115.93734744662743,
								41.92746694644251
							],
							[
								115.85879926967067,
								41.92746694644251
							],
							[
								115.5275016615725,
								41.77233429639068
							],
							[
								115.33976118413125,
								41.720838731122626
							],
							[
								115.347357618959,
								41.624074612553414
							],
							[
								115.22586632686955,
								41.58583405239966
							],
							[
								115.09739871577824,
								41.61616811846392
							],
							[
								114.88898766464905,
								41.61004446108302
							],
							[
								114.87581017479982,
								41.81166006126284
							],
							[
								114.9203035826443,
								41.93687205729964
							],
							[
								114.80485843267058,
								42.178407701554136
							],
							[
								114.75194176589969,
								42.13985708303804
							],
							[
								114.59634402875395,
								42.14127818544
							],
							[
								114.48131229082958,
								42.0752615422864
							],
							[
								114.41971398271414,
								41.956302394839724
							],
							[
								114.25569298664209,
								41.860080877730354
							],
							[
								114.21352501786532,
								41.76690827099998
							],
							[
								114.19709191296135,
								41.593585516858155
							],
							[
								114.0272831562927,
								41.53128957855125
							],
							[
								113.92796105375965,
								41.41835073479854
							],
							[
								113.90889244962705,
								41.2940172388046
							],
							[
								113.98490848194086,
								41.240893867358096
							],
							[
								113.96382449800228,
								41.15335398979491
							],
							[
								113.88067711795463,
								41.09930044236148
							],
							[
								113.90796227364024,
								41.028141995556666
							],
							[
								114.01860151584731,
								40.9236005723086
							],
							[
								114.06014936699978,
								40.81365896299084
							],
							[
								114.15409712098545,
								40.7425780305517
							],
							[
								114.02697309793007,
								40.63516856497725
							],
							[
								114.07554894402847,
								40.55018667317648
							],
							[
								114.04376793803988,
								40.48799408585833
							],
							[
								113.80848514237545,
								40.43422475836593
							],
							[
								113.6766068865985,
								40.428540351456036
							],
							[
								113.51832197517899,
								40.343739325909155
							],
							[
								113.33414717025562,
								40.3187279324481
							],
							[
								113.22986413032532,
								40.41665477100091
							],
							[
								113.0864620301985,
								40.40443329556018
							],
							[
								112.96140506379265,
								40.35585744946175
							],
							[
								112.84378950438224,
								40.225658678505226
							],
							[
								112.7342354677927,
								40.17284536452195
							],
							[
								112.59584598190656,
								40.237776801158475
							],
							[
								112.39921715664639,
								40.28834219043969
							],
							[
								112.27927615816822,
								40.22896596950389
							],
							[
								112.16507124164451,
								40.05931224246595
							],
							[
								112.09897708502444,
								40.00543956218607
							],
							[
								111.92146853984127,
								39.688843899126624
							],
							[
								111.7611682477164,
								39.59804840830739
							],
							[
								111.67486860630117,
								39.63592723235587
							],
							[
								111.48991865412256,
								39.65215363258406
							],
							[
								111.42537479021439,
								39.62538523993686
							],
							[
								111.42118899917295,
								39.52213572878085
							],
							[
								111.34269249905952,
								39.44441437412402
							],
							[
								111.11004520082531,
								39.38519318281914
							],
							[
								111.04100548661387,
								39.42296865497943
							],
							[
								111.13707197499161,
								39.564949652704314
							],
							[
								111.01310021420346,
								39.56487213833856
							],
							[
								110.84566857344595,
								39.46518829970023
							],
							[
								110.68485151558491,
								39.26437368429811
							],
							[
								110.60340945788016,
								39.267215888202685
							],
							[
								110.49416548055251,
								39.37431529451524
							],
							[
								110.33810265541325,
								39.31814301179051
							],
							[
								110.22524132692564,
								39.424053859697864
							],
							[
								110.10917606022707,
								39.42839468037019
							],
							[
								110.1768721864023,
								39.28519928581835
							],
							[
								109.96334516824493,
								39.18127798109393
							],
							[
								109.8205631857424,
								39.0544640164012
							],
							[
								109.67426720576702,
								39.01121084200679
							],
							[
								109.63530317610065,
								38.905816758936226
							],
							[
								109.5379964542729,
								38.78520396599026
							],
							[
								109.42394656827958,
								38.76905508102715
							],
							[
								109.3131522973406,
								38.62048533792796
							],
							[
								109.15998335205006,
								38.5421438674455
							],
							[
								108.98635053864638,
								38.335205592863815
							],
							[
								108.9534843279394,
								38.19906403347835
							],
							[
								109.02795006664223,
								38.11095571513414
							],
							[
								108.95425947519459,
								37.9255406758615
							],
							[
								108.86330895384515,
								37.98760407197037
							],
							[
								108.79070356711594,
								37.94176707608969
							],
							[
								108.76434858561868,
								37.68188629811419
							],
							[
								108.49635460797873,
								37.66860545547735
							],
							[
								108.33295372863165,
								37.6335946719565
							],
							[
								108.03870812408064,
								37.632509467238066
							],
							[
								107.99111412991311,
								37.7257079132896
							],
							[
								107.88497073800909,
								37.80164643033848
							],
							[
								107.65764611237813,
								37.85293528913229
							],
							[
								107.40468997566182,
								37.9216649440819
							],
							[
								107.3241780948432,
								38.06594554335217
							],
							[
								107.16263756657042,
								38.138602606924735
							],
							[
								107.06083499623804,
								38.114934801499885
							],
							[
								106.82916954993476,
								38.150384832793804
							],
							[
								106.47012169815781,
								38.290686347497
							],
							[
								106.64499474501156,
								38.45920319297298
							],
							[
								106.70442264189137,
								38.63722850209365
							],
							[
								106.93174726842165,
								38.92113882070004
							],
							[
								106.97784264492208,
								39.03560211784347
							],
							[
								106.91185184108957,
								39.06919179896235
							],
							[
								106.80824059472775,
								39.199054674034016
							],
							[
								106.78912031465075,
								39.36095693571397
							],
							[
								106.61409223816622,
								39.358321438283724
							],
							[
								106.49694176584978,
								39.28579356502101
							],
							[
								106.27566328323394,
								39.269153754542174
							],
							[
								106.2834147476924,
								39.156524970051265
							],
							[
								106.11319257987361,
								39.12081655543966
							],
							[
								106.06027591400226,
								38.97906810171153
							],
							[
								105.89661665223667,
								38.73618887032012
							],
							[
								105.84121951676724,
								38.57128937420518
							],
							[
								105.82809370286213,
								38.22681427715713
							],
							[
								105.75564334486444,
								38.135502021501026
							],
							[
								105.82473473501994,
								38.005484116798556
							],
							[
								105.78809614532082,
								37.805057075023996
							],
							[
								105.65869835824259,
								37.73981557912569
							],
							[
								105.53410647983014,
								37.72498444287777
							],
							[
								105.3544275252101,
								37.75263133376896
							],
							[
								105.08488325395899,
								37.660673122966244
							],
							[
								104.94432335773678,
								37.54571889940763
							],
							[
								104.64697716686271,
								37.50659984011051
							],
							[
								104.52238528934959,
								37.5299575871729
							],
							[
								104.4252335962534,
								37.498589993233566
							],
							[
								104.35851932200904,
								37.40123159456249
							],
							[
								104.2624528336313,
								37.3903278669375
							],
							[
								104.10850874198485,
								37.4618480489483
							],
							[
								103.86366580583223,
								37.62643748580132
							],
							[
								103.67871585455305,
								37.7750330673222
							],
							[
								103.43816206312869,
								37.84239329671328
							],
							[
								103.38746748263816,
								37.99910207789861
							],
							[
								103.38808760026257,
								38.101989853848664
							],
							[
								103.52167117658354,
								38.13984284127409
							],
							[
								103.47123497941078,
								38.43589712185471
							],
							[
								103.79431603415765,
								38.59077138948797
							],
							[
								103.97952436695596,
								38.7589781757022
							],
							[
								104.04256961499567,
								38.8740615913693
							],
							[
								104.17155399002456,
								38.95950857206296
							],
							[
								104.22478071515786,
								39.090689194950386
							],
							[
								104.05998457183051,
								39.307833564267554
							],
							[
								104.02396609885636,
								39.44110708312536
							],
							[
								103.74925418463295,
								39.4248806828972
							],
							[
								103.46379357331472,
								39.35718455672196
							],
							[
								103.28395958906378,
								39.292976590497204
							],
							[
								102.96537438372081,
								39.11936961551535
							],
							[
								102.59345909955778,
								39.177919013251824
							],
							[
								102.393109572149,
								39.23719188140018
							],
							[
								101.82549563961209,
								39.06443756803935
							],
							[
								102.022847935284,
								38.89271678345284
							],
							[
								102.02036746568609,
								38.85693085447528
							],
							[
								101.83107669463374,
								38.689835110501946
							],
							[
								101.58018761636538,
								38.68823314094669
							],
							[
								101.41399620995713,
								38.749211331437834
							],
							[
								101.24780480264951,
								38.87003082905949
							],
							[
								101.17995364774265,
								39.02064179128564
							],
							[
								101.04854048085855,
								39.00082388011796
							],
							[
								100.88855024619687,
								39.105158595992435
							],
							[
								100.85196333244181,
								39.16748037451967
							],
							[
								100.83315311072744,
								39.380077215790806
							],
							[
								100.78953820202634,
								39.407879137212376
							],
							[
								100.54345503062518,
								39.408860989143335
							],
							[
								100.45498497887365,
								39.495574041708636
							],
							[
								100.3068286478238,
								39.54983429651557
							],
							[
								100.28662316302854,
								39.62734894469807
							],
							[
								100.18885135320733,
								39.694890042141765
							],
							[
								100.0434855492187,
								39.72765290006129
							],
							[
								99.68614301978448,
								39.876015936686144
							],
							[
								99.43086144400041,
								39.87880646374728
							],
							[
								99.62702518126707,
								40.06918244131654
							],
							[
								99.89935997868008,
								40.204781399242165
							],
							[
								100.01418501192876,
								40.40249542922069
							],
							[
								100.14001712379127,
								40.518095607926
							],
							[
								100.20378584224284,
								40.61695262336491
							],
							[
								100.17603559766468,
								40.735084946712874
							],
							[
								100.01118777929253,
								40.896289578201475
							],
							[
								99.66454227100894,
								40.901276354020496
							],
							[
								99.49602542463361,
								40.84288198501565
							],
							[
								99.1574414409697,
								40.83631907806301
							],
							[
								98.82567874577745,
								40.72655833589849
							],
							[
								98.64584476062714,
								40.56754995406706
							],
							[
								98.51520674009896,
								40.533546860898895
							],
							[
								98.23481041896565,
								40.541685898985065
							],
							[
								98.32653608577169,
								40.855671902136606
							],
							[
								97.95053836515336,
								41.11981598641867
							],
							[
								97.70848595606202,
								41.34941437427395
							],
							[
								97.6476111192577,
								41.45553192775628
							],
							[
								97.84687544104878,
								41.61926870388754
							],
							[
								97.19067973399132,
								42.78706149219707
							],
							[
								97.84999217484966,
								42.723044566226775
							],
							[
								98.66223386000013,
								42.6436217400001
							],
							[
								99.47447554500013,
								42.56419891400009
							],
							[
								100.01697473100006,
								42.67651763900011
							],
							[
								101.21871016400007,
								42.52983408700004
							],
							[
								101.41073978700013,
								42.544871929000124
							],
							[
								101.63759932500011,
								42.51544220000005
							],
							[
								101.73537113500004,
								42.4611561080001
							],
							[
								101.88647302300012,
								42.278014832000025
							],
							[
								102.03416426600012,
								42.18460968100004
							],
							[
								103.07348067300012,
								42.00451731400011
							],
							[
								103.6914274500001,
								41.75923512800006
							],
							[
								103.72098636900006,
								41.755566101000085
							],
							[
								104.50078373200012,
								41.87059783900011
							],
							[
								104.49799320500006,
								41.665778300000085
							],
							[
								104.60124271700005,
								41.64544362400005
							],
							[
								104.8923360600001,
								41.64477183000008
							],
							[
								105.01480920400019,
								41.59614430800005
							],
							[
								105.20089603700006,
								41.74347381600009
							],
							[
								105.27448327700006,
								41.75546274900006
							],
							[
								105.86860721900007,
								41.99348439500011
							],
							[
								106.76782881800011,
								42.286618958000076
							],
							[
								108.17735518400008,
								42.454308981000025
							],
							[
								108.3197754310001,
								42.43255320200012
							],
							[
								108.53645471300007,
								42.435111186000114
							],
							[
								108.7968522540001,
								42.39836924300002
							],
							[
								108.99446293200009,
								42.44952891100013
							],
							[
								109.25341353400006,
								42.425938620000125
							],
							[
								109.48513065600014,
								42.44929636700007
							],
							[
								109.66734175700003,
								42.548980204000145
							],
							[
								109.91270145700008,
								42.62882029300005
							],
							[
								110.07486210100006,
								42.64352223800003
							],
							[
								110.4067281500001,
								42.768605041000114
							],
							[
								110.44941288300004,
								42.837334696000084
							],
							[
								110.60816288300003,
								42.94466664700005
							],
							[
								110.68009647600007,
								43.05765716600007
							],
							[
								110.93372440600012,
								43.287772319000084
							],
							[
								111.09609175600013,
								43.36665639300011
							],
							[
								111.59724979700007,
								43.523391012000104
							],
							[
								111.75382938700005,
								43.66320160000009
							],
							[
								111.93335331300011,
								43.696636251000086
							],
							[
								111.94430871600008,
								43.786372376000145
							],
							[
								111.83878544100003,
								43.93879201300007
							],
							[
								111.63445682800011,
								44.06594187500011
							],
							[
								111.51942508900004,
								44.188570048000116
							],
							[
								111.4063570560001,
								44.416463115000056
							],
							[
								111.5438163660001,
								44.601258036000075
							],
							[
								111.55136112500003,
								44.69319041000006
							],
							[
								111.73853316300017,
								44.966300354000055
							],
							[
								111.84333296700004,
								45.03952585900004
							],
							[
								112.01148807900006,
								45.08748158800009
							],
							[
								112.10760624200014,
								45.06737945600011
							],
							[
								112.44133264200002,
								45.052393290000055
							],
							[
								112.6142419840001,
								44.908836161000124
							],
							[
								112.74849735600009,
								44.86527293000009
							],
							[
								113.10485803200004,
								44.79437286400014
							],
							[
								113.47320764200009,
								44.770705058
							],
							[
								113.6350582280001,
								44.746262105000056
							],
							[
								113.88930627500014,
								44.90826772100007
							],
							[
								114.05529097500005,
								44.94056549100014
							],
							[
								114.1636047770001,
								45.040145976000105
							],
							[
								114.41888635300006,
								45.20147979700005
							],
							[
								114.53371138500006,
								45.38549957300006
							],
							[
								114.73731652900005,
								45.42503204400009
							],
							[
								114.93885461400015,
								45.37376902300005
							],
							[
								115.33727990800008,
								45.39469797800004
							],
							[
								115.63783003800006,
								45.444359030000044
							],
							[
								116.0119674070001,
								45.67855662000008
							],
							[
								116.16989058400009,
								45.709097392000075
							],
							[
								116.25164270100004,
								45.803251852000045
							],
							[
								116.21319543500016,
								45.90815500900007
							],
							[
								116.3571659750001,
								46.10555898100009
							],
							[
								116.60355920500007,
								46.30931915300005
							],
							[
								116.80458052600017,
								46.38290639300004
							],
							[
								117.30170780500015,
								46.35014353500014
							],
							[
								117.3530741780001,
								46.379495748000124
							],
							[
								117.39379520700004,
								46.57137034100006
							],
							[
								117.582000773,
								46.59198923800005
							],
							[
								117.69620568900012,
								46.5122525030001
							],
							[
								117.79759484900006,
								46.52026235000008
							],
							[
								117.8783134360001,
								46.59638173500005
							],
							[
								118.2382914640001,
								46.715392558000076
							],
							[
								118.43517867100002,
								46.6911563110001
							],
							[
								118.60937992400005,
								46.70578074200009
							],
							[
								118.7200708420001,
								46.676738587000074
							],
							[
								118.81624068200006,
								46.758180644000106
							],
							[
								118.9672392170001,
								46.74045562800009
							],
							[
								119.06237552900012,
								46.66095143700011
							],
							[
								119.31693363500011,
								46.611677958000115
							],
							[
								119.45294600400013,
								46.6274909470001
							],
							[
								119.68011560100007,
								46.59162750300007
							],
							[
								119.90418461200017,
								46.70893300400013
							],
							[
								119.9028927010001,
								46.84241322800011
							],
							[
								119.7701359460001,
								46.992998352000114
							],
							[
								119.69995935100013,
								47.15952565500007
							],
							[
								119.32065433800011,
								47.407029928000014
							],
							[
								119.31011234600015,
								47.47609548000008
							],
							[
								119.15756351700009,
								47.51766917000006
							],
							[
								119.08345951400014,
								47.66156219500007
							],
							[
								118.76740645400008,
								47.75615590400008
							],
							[
								118.5422522390001,
								47.96624644000005
							],
							[
								118.18248091600003,
								48.02820648200009
							],
							[
								117.97277795400015,
								47.99789825500005
							],
							[
								117.81516483600006,
								48.004822896000036
							],
							[
								117.685163036419,
								47.95467936496519
							],
							[
								117.360825643,
								47.650865174000074
							],
							[
								117.31710738200002,
								47.65406911200003
							],
							[
								117.06968062300007,
								47.81015777600004
							],
							[
								116.8532597250001,
								47.87211781800008
							],
							[
								116.49968957600004,
								47.83635772800005
							],
							[
								116.24389123600014,
								47.86289357500007
							],
							[
								116.08431441300007,
								47.80692799900007
							],
							[
								115.97290002500017,
								47.70905283700009
							],
							[
								115.8527006430001,
								47.705564678000115
							],
							[
								115.56186568200019,
								47.93319936200007
							],
							[
								115.51453007100014,
								48.12210256000009
							],
							[
								115.77084517400016,
								48.224085999000096
							],
							[
								115.80929244000004,
								48.273953756000054
							],
							[
								115.8004040940001,
								48.530372213000135
							],
							[
								116.0281938080002,
								48.76746368500005
							],
							[
								116.0378056240001,
								48.87014475500004
							],
							[
								116.68427779200016,
								49.82326487300011
							],
							[
								117.05758833800013,
								49.672886454000064
							],
							[
								117.25292525200007,
								49.622450256000064
							],
							[
								117.47286014900016,
								49.61428538100003
							],
							[
								117.75883752500016,
								49.51274119100006
							],
							[
								117.89381636600001,
								49.54664093100007
							],
							[
								118.16863163300007,
								49.67149119100009
							],
							[
								118.52127160700002,
								49.894061585000145
							],
							[
								118.64436486800003,
								49.954574687000104
							],
							[
								119.09167606600016,
								49.986562398000075
							],
							[
								119.20851648000013,
								50.01513946600005
							],
							[
								119.31621016500009,
								50.09265411400011
							],
							[
								119.35290043100014,
								50.34550689700012
							],
							[
								119.14123376500004,
								50.37661611000007
							],
							[
								119.24365645400007,
								50.44550079300009
							],
							[
								119.29357588700015,
								50.599238179000054
							],
							[
								119.49666426700003,
								50.73705922500011
							],
							[
								119.5179549560001,
								50.904800924000085
							],
							[
								119.74827681500011,
								51.083394674
							],
							[
								119.75814701300015,
								51.19902069200003
							],
							[
								119.91565677900007,
								51.33074391700012
							],
							[
								120.10820316600007,
								51.66519378700008
							],
							[
								120.15378178000009,
								51.663979390000065
							],
							[
								120.49314091000008,
								51.87572357200008
							],
							[
								120.64760176600015,
								51.91101857500007
							],
							[
								120.70563440000001,
								52.06103525800003
							],
							[
								120.77916996300007,
								52.117595114000096
							],
							[
								120.75808597900004,
								52.237406922000076
							],
							[
								120.626156047,
								52.346805929000084
							],
							[
								120.72397953300009,
								52.54216868100008
							],
							[
								120.4299406340001,
								52.63609059700008
							],
							[
								120.17595096800011,
								52.583742371000056
							],
							[
								120.05642338100012,
								52.60051137400012
							],
							[
								120.0329622800001,
								52.760656637000125
							],
							[
								120.2801823320001,
								52.86592153000004
							],
							[
								120.45030114700006,
								53.00834177700003
							],
							[
								120.65220096800016,
								53.12283091300014
							],
							[
								120.8742545980001,
								53.28015981100009
							],
							[
								121.20348514900007,
								53.27674916600006
							],
							[
								121.41327478505161,
								53.317334824121446
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 31,
					"name": "黑龙江"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								131.25284846284336,
								43.46916859112878
							],
							[
								131.14949384956157,
								43.43610870974911
							],
							[
								130.99461958192813,
								43.50773224544673
							],
							[
								130.9165881689088,
								43.45047475800365
							],
							[
								130.58870120729478,
								43.62772492076843
							],
							[
								130.41408654196027,
								43.669169420032716
							],
							[
								130.33279951388636,
								43.927809964558236
							],
							[
								130.28019290637747,
								43.96444855425736
							],
							[
								130.1036145371811,
								43.84543772996727
							],
							[
								130.03317955898956,
								43.85561798807967
							],
							[
								130.0001066427074,
								43.98356883433419
							],
							[
								129.9129285021486,
								44.02160268801359
							],
							[
								129.80213423120978,
								43.96548208303176
							],
							[
								129.75242150265012,
								43.87416982737565
							],
							[
								129.53491539902643,
								43.870319933118395
							],
							[
								129.24924808213325,
								43.78616486271821
							],
							[
								129.22893924365115,
								43.60839793601593
							],
							[
								129.014895460657,
								43.5396682810663
							],
							[
								128.8828621770478,
								43.55615306281359
							],
							[
								128.76447147038203,
								43.70906362568576
							],
							[
								128.74741824785383,
								43.80218455737142
							],
							[
								128.63150800988677,
								43.91217784353262
							],
							[
								128.52877526266826,
								44.08010040980602
							],
							[
								128.4459379418825,
								44.15394603088458
							],
							[
								128.45069217280547,
								44.3155382351014
							],
							[
								128.4187561380852,
								44.450103665152085
							],
							[
								128.35870812358104,
								44.501676743886605
							],
							[
								128.20693444227066,
								44.44049184782051
							],
							[
								128.15525800984926,
								44.35300364799994
							],
							[
								128.042965123042,
								44.340704658193374
							],
							[
								128.05206017463735,
								44.12578237605578
							],
							[
								127.84959191283644,
								44.05591583954438
							],
							[
								127.74437869691934,
								44.085629787984374
							],
							[
								127.71471642532276,
								44.161490789768095
							],
							[
								127.49281782418313,
								44.41090709148901
							],
							[
								127.5592737160091,
								44.57379120510004
							],
							[
								127.37520226477261,
								44.64882538548309
							],
							[
								127.23309207583867,
								44.6159591738768
							],
							[
								127.14725752241668,
								44.654690660445624
							],
							[
								127.04498986229225,
								44.598234157780155
							],
							[
								127.03227746043643,
								44.73055166312872
							],
							[
								126.97827558804795,
								44.8261013857703
							],
							[
								127.07661583865001,
								44.93400177686047
							],
							[
								126.95269575380598,
								45.13419627553762
							],
							[
								126.78898481699571,
								45.14933747014817
							],
							[
								126.55933475139761,
								45.246747544763366
							],
							[
								126.42104861919836,
								45.22845408788589
							],
							[
								126.15047081917294,
								45.14117259453957
							],
							[
								125.84072228390625,
								45.23481028926338
							],
							[
								125.70491662040575,
								45.35971222603834
							],
							[
								125.6987154477597,
								45.51091746746715
							],
							[
								125.43247846930592,
								45.477250271083136
							],
							[
								125.30742150290001,
								45.41696971348151
							],
							[
								125.10350630117483,
								45.39531728786247
							],
							[
								125.0277486512793,
								45.49836009434287
							],
							[
								124.87246097159652,
								45.44859568893989
							],
							[
								124.61185672410858,
								45.447923896270765
							],
							[
								124.56307417243511,
								45.41526439113872
							],
							[
								124.39559085483415,
								45.45148956968791
							],
							[
								124.22356001188501,
								45.635509344980306
							],
							[
								124.14103275036115,
								45.63220205308227
							],
							[
								124.0178361350296,
								45.78172780969069
							],
							[
								124.06196780766811,
								45.87167064068751
							],
							[
								123.97944054614425,
								45.978124090954
							],
							[
								124.0340625352577,
								46.01848338549985
							],
							[
								123.91939253074065,
								46.272343857982634
							],
							[
								123.35611941887606,
								46.235162665025
							],
							[
								123.25834760995417,
								46.26508331993932
							],
							[
								123.16166100485151,
								46.220073147257864
							],
							[
								122.98890669239006,
								46.40657339124897
							],
							[
								123.01970584464902,
								46.6123489449478
							],
							[
								123.29152387902388,
								46.58635569955587
							],
							[
								123.39725385977772,
								46.59782786706242
							],
							[
								123.60871382038653,
								46.77463878025546
							],
							[
								123.37999393077524,
								46.89806793958377
							],
							[
								123.33048790869003,
								46.83264557653209
							],
							[
								123.18682742704402,
								46.76164215845881
							],
							[
								122.99624474479924,
								46.84029368820319
							],
							[
								122.79734215731469,
								47.03371857435272
							],
							[
								122.57404829309428,
								47.13112864806865
							],
							[
								122.4052213892557,
								47.33168488195176
							],
							[
								122.56536665264889,
								47.53115591111643
							],
							[
								122.79734215731469,
								47.64355215071117
							],
							[
								123.20682620716366,
								47.81382599537338
							],
							[
								123.29328087820994,
								47.94565257430685
							],
							[
								123.57755293202223,
								48.05432811085356
							],
							[
								123.72694949832072,
								48.191063951240324
							],
							[
								124.07793582637726,
								48.44830923088628
							],
							[
								124.2340503283599,
								48.53083649420881
							],
							[
								124.30076460170494,
								48.49187246454258
							],
							[
								124.32717125914627,
								48.33219228824356
							],
							[
								124.42556318569245,
								48.17437246391805
							],
							[
								124.56224734923569,
								48.236177476709145
							],
							[
								124.52069949808339,
								48.36903758441693
							],
							[
								124.53806277897405,
								48.571686713371065
							],
							[
								124.62183027574656,
								48.74198639645499
							],
							[
								124.82155968643036,
								49.060881660160504
							],
							[
								124.86393436078208,
								49.175396633248
							],
							[
								125.15812829028835,
								49.1511087101988
							],
							[
								125.22287885977153,
								49.22004507072347
							],
							[
								125.267372267616,
								49.43848135033406
							],
							[
								125.23569461531417,
								49.55439158830117
							],
							[
								125.22577273962025,
								49.91827118626625
							],
							[
								125.29522586498172,
								50.01446686495382
							],
							[
								125.26442671092394,
								50.10572744376651
							],
							[
								125.41842247941389,
								50.1946109084667
							],
							[
								125.5307670430646,
								50.39304840795762
							],
							[
								125.80940636591112,
								50.56223704700207
							],
							[
								125.82403079568462,
								50.766798203873975
							],
							[
								126.00102257693044,
								50.90175120755217
							],
							[
								126.05626468276887,
								50.98027354608723
							],
							[
								125.98438276555214,
								51.104219469352955
							],
							[
								125.84340945907928,
								51.206228746159724
							],
							[
								125.7194893742352,
								51.25371938753969
							],
							[
								125.48663537042592,
								51.507398993768504
							],
							[
								125.33331139460518,
								51.58274323251419
							],
							[
								125.12753584180564,
								51.615738634430386
							],
							[
								125.06061486198621,
								51.53437409109145
							],
							[
								124.82062951134287,
								51.36585724471604
							],
							[
								124.66622033080353,
								51.33526479803194
							],
							[
								124.50188927636901,
								51.36058624895625
							],
							[
								124.35078738772768,
								51.27862742821324
							],
							[
								124.16206505655703,
								51.328365994295154
							],
							[
								123.86626915929423,
								51.31343150525976
							],
							[
								123.78875451111173,
								51.232816270754284
							],
							[
								123.56964643793282,
								51.203903307091906
							],
							[
								123.43833662293673,
								51.273098050034974
							],
							[
								123.27168012943434,
								51.26669017181396
							],
							[
								123.08812544213538,
								51.31247549085123
							],
							[
								122.95624718635855,
								51.38606273130995
							],
							[
								122.83894168531054,
								51.510551256035626
							],
							[
								122.83553104062503,
								51.567757065735975
							],
							[
								122.71445315968549,
								51.70167654153914
							],
							[
								122.75419233570778,
								51.84748159420025
							],
							[
								122.63766198101558,
								52.09496002958167
							],
							[
								122.77512129091474,
								52.20001821586797
							],
							[
								122.73073123585783,
								52.248904120328916
							],
							[
								122.49177941308938,
								52.29484446899707
							],
							[
								122.3386104677989,
								52.453697822096785
							],
							[
								122.17365929573992,
								52.47963939154465
							],
							[
								122.01790652896307,
								52.28311391907212
							],
							[
								121.83125125534116,
								52.26936798844193
							],
							[
								121.69234500461823,
								52.388533841463584
							],
							[
								121.49091027159176,
								52.444680283967955
							],
							[
								121.17392703670339,
								52.594981187831564
							],
							[
								121.50274417520347,
								52.77468598087333
							],
							[
								121.69151818231819,
								52.908347073358726
							],
							[
								121.80019371976425,
								53.02358551685808
							],
							[
								121.60718224476477,
								53.240729885275954
							],
							[
								121.41327478505161,
								53.317334824121446
							],
							[
								121.64102950100005,
								53.38490793900013
							],
							[
								121.88897302300012,
								53.43058990500006
							],
							[
								122.08162276200005,
								53.42950470000005
							],
							[
								122.33783451400006,
								53.49130971300005
							],
							[
								122.47121138500012,
								53.46474802700004
							],
							[
								122.85966312700015,
								53.47394643200005
							],
							[
								123.15359867400002,
								53.513117167000075
							],
							[
								123.25255904200003,
								53.56779083300003
							],
							[
								123.48551639800013,
								53.52598460000007
							],
							[
								123.63956384300008,
								53.55125437400005
							],
							[
								123.73216801000007,
								53.50376373300014
							],
							[
								123.97055139200012,
								53.455187887000136
							],
							[
								124.12180830900002,
								53.3526876840001
							],
							[
								124.23270593300003,
								53.381652323000054
							],
							[
								124.40819909700014,
								53.235692241000095
							],
							[
								124.6786735440001,
								53.19933787000011
							],
							[
								124.72016971900007,
								53.14882415800011
							],
							[
								125.01942793800009,
								53.210732524000036
							],
							[
								125.12743168100013,
								53.206546733000096
							],
							[
								125.52130944900006,
								53.042422384000076
							],
							[
								125.62135502200016,
								53.06213694300004
							],
							[
								125.83736250800013,
								52.906720073000116
							],
							[
								126.03512821500016,
								52.72711863300003
							],
							[
								125.97316817300015,
								52.631568909000066
							],
							[
								126.21232670100011,
								52.53304779100009
							],
							[
								126.34368819200012,
								52.39137685200009
							],
							[
								126.31573124200008,
								52.31621348100006
							],
							[
								126.42120284000015,
								52.28730051700012
							],
							[
								126.31671309500007,
								52.199760641000125
							],
							[
								126.53117028800006,
								52.15265757200012
							],
							[
								126.514427125,
								52.04253509600011
							],
							[
								126.44605920400011,
								51.9825387570001
							],
							[
								126.8074324960001,
								51.53421986900011
							],
							[
								126.80030114800007,
								51.418955587000085
							],
							[
								126.9546069750001,
								51.329581198000085
							],
							[
								126.90541101100013,
								51.16426829100007
							],
							[
								126.93176599200007,
								51.06378346800008
							],
							[
								127.14425948100012,
								50.90350901300013
							],
							[
								127.287351522,
								50.7510118620001
							],
							[
								127.36481449400014,
								50.55474477200008
							],
							[
								127.28895349200013,
								50.46601633700007
							],
							[
								127.35850997000006,
								50.41511505100004
							],
							[
								127.33065637200008,
								50.32819529200003
							],
							[
								127.57839318800006,
								50.22055328400006
							],
							[
								127.57017663600004,
								50.130222880000105
							],
							[
								127.48666752200006,
								50.025629782000095
							],
							[
								127.53400313300011,
								49.92248362200007
							],
							[
								127.5081132410001,
								49.82233469700006
							],
							[
								127.64428064000009,
								49.76714426700008
							],
							[
								127.7220019940001,
								49.64859853100006
							],
							[
								127.83088423700008,
								49.59387318900008
							],
							[
								127.99159794100007,
								49.5987307740001
							],
							[
								128.09247033800006,
								49.54157664000007
							],
							[
								128.3447546800001,
								49.547984518000106
							],
							[
								128.38351200400012,
								49.57935211300014
							],
							[
								128.66618208900013,
								49.60947947200003
							],
							[
								128.79692346200005,
								49.57247914600009
							],
							[
								128.879192342,
								49.47971995100008
							],
							[
								129.05055139200016,
								49.37667714500009
							],
							[
								129.19390181500012,
								49.38969960500003
							],
							[
								129.3620569260001,
								49.349805400000065
							],
							[
								129.50241011600014,
								49.41078359000005
							],
							[
								129.57175988900008,
								49.279835510000055
							],
							[
								129.71118290200008,
								49.27415110300012
							],
							[
								129.75562463400007,
								49.18428578700011
							],
							[
								129.91344445800013,
								49.03954010000007
							],
							[
								130.24934126800008,
								48.864512024000106
							],
							[
								130.38680057800013,
								48.896293030000066
							],
							[
								130.56487756400014,
								48.855882060000084
							],
							[
								130.67432824800005,
								48.87081654900004
							],
							[
								130.53325158700005,
								48.63579213500009
							],
							[
								130.71587609900013,
								48.499056295000116
							],
							[
								130.8194356690001,
								48.28188608800011
							],
							[
								130.6633728440001,
								48.11644399000008
							],
							[
								130.68238977100015,
								48.050349834000116
							],
							[
								130.90697554600007,
								47.88426178000009
							],
							[
								130.94180546100011,
								47.717967021000106
							],
							[
								131.0233508710001,
								47.68228444500011
							],
							[
								131.41836552000012,
								47.74261667900009
							],
							[
								131.57742557800015,
								47.66856435200006
							],
							[
								131.70299930900006,
								47.69615956700008
							],
							[
								131.89430546100004,
								47.670011292000055
							],
							[
								132.16167932100018,
								47.6900100710001
							],
							[
								132.33241825400006,
								47.73651886000005
							],
							[
								132.5246545820001,
								47.707528381000145
							],
							[
								132.65880660100015,
								47.86981821800006
							],
							[
								132.6746195890001,
								47.950614319000096
							],
							[
								132.82065718600012,
								47.94237192800006
							],
							[
								133.09195845600004,
								48.106780497000045
							],
							[
								133.18518273900008,
								48.124815573000035
							],
							[
								133.46371871000014,
								48.08952056900006
							],
							[
								133.55994022700008,
								48.113291728
							],
							[
								133.72127404800005,
								48.244756572000114
							],
							[
								133.9824467370001,
								48.285167542000096
							],
							[
								134.05717085800012,
								48.32718048200013
							],
							[
								134.38634973185174,
								48.381337382904746
							],
							[
								134.54261926300012,
								48.35730784100019
							],
							[
								134.70085249900012,
								48.261525574000075
							],
							[
								134.68297245300016,
								48.13551259400006
							],
							[
								134.56721724500017,
								48.04037628200018
							],
							[
								134.7725793870003,
								47.71073232100022
							],
							[
								134.68266239500014,
								47.58784576400012
							],
							[
								134.48463830600014,
								47.430180970000094
							],
							[
								134.29281539000033,
								47.40971710300005
							],
							[
								134.15411584500026,
								47.257891744000176
							],
							[
								134.2272896730002,
								47.117745260000106
							],
							[
								134.12424686700024,
								47.070513001000165
							],
							[
								134.02048059100014,
								46.83404164600012
							],
							[
								134.04466516200011,
								46.772004090000166
							],
							[
								133.98802779200014,
								46.62516550700008
							],
							[
								133.84932824800012,
								46.480290630000184
							],
							[
								133.92146854700025,
								46.41013987200006
							],
							[
								133.86338423700022,
								46.3392914840002
							],
							[
								133.9024516200002,
								46.258986308000175
							],
							[
								133.68737430900012,
								46.14183583600004
							],
							[
								133.71931034400018,
								46.079307353000075
							],
							[
								133.6581254480002,
								45.93450999000012
							],
							[
								133.51436161300023,
								45.8792678840002
							],
							[
								133.4877999270002,
								45.68666982000008
							],
							[
								133.41348921800022,
								45.57334340500017
							],
							[
								133.20213260900016,
								45.51128000900022
							],
							[
								133.14022424400014,
								45.435419007000206
							],
							[
								133.09753951000027,
								45.243544413000166
							],
							[
								133.11541955600023,
								45.12303497300013
							],
							[
								132.95336226400008,
								45.02438466400022
							],
							[
								132.83977746600033,
								45.05916290300007
							],
							[
								132.7987004157403,
								45.18971711881747
							],
							[
								132.72216574268617,
								45.25035612900652
							],
							[
								132.42014814824904,
								45.33719354651035
							],
							[
								132.19584268337468,
								45.33395554111195
							],
							[
								131.99194433639423,
								45.229353898096576
							],
							[
								131.81803104700032,
								45.33278961200011
							],
							[
								131.72315311800014,
								45.215329082000096
							],
							[
								131.62775842400015,
								45.19848256500012
							],
							[
								131.60905155500012,
								45.08970367400008
							],
							[
								131.41950240100016,
								44.95896230100007
							],
							[
								131.3294820560002,
								44.96764394200011
							],
							[
								131.15801965400016,
								44.901704814000084
							],
							[
								131.05156620300028,
								44.909042867000096
							],
							[
								130.93343387900018,
								44.84170847600018
							],
							[
								131.06582889900017,
								44.6820283010002
							],
							[
								131.26447310400022,
								44.05421132500004
							],
							[
								131.17031864400025,
								43.78110138000011
							],
							[
								131.19202274600013,
								43.58863250700011
							],
							[
								131.166908,
								43.52106557300016
							],
							[
								131.25284846284336,
								43.46916859112878
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 32,
					"name": "香港"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									114.0517684250002,
									22.32851797100014
								],
								[
									113.92839603000016,
									22.210760809000078
								],
								[
									113.89250735800033,
									22.292710679000038
								],
								[
									114.0517684250002,
									22.32851797100014
								]
							]
						],
						[
							[
								[
									114.22982832100013,
									22.555812893000137
								],
								[
									114.33806399800017,
									22.446356512000165
								],
								[
									114.27800540500016,
									22.390977281000175
								],
								[
									114.27833092500009,
									22.27045319200016
								],
								[
									114.18165123800014,
									22.294419664000202
								],
								[
									114.11101321700028,
									22.365952867000175
								],
								[
									113.91439863400012,
									22.37612539300011
								],
								[
									113.9986271490003,
									22.488552151000192
								],
								[
									114.08236738400024,
									22.52936432500016
								],
								[
									114.22982832100013,
									22.555812893000137
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 33,
					"name": "澳门"
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						[
							[
								[
									113.55860436300031,
									22.163031317000048
								],
								[
									113.56942793100006,
									22.16075267100007
								],
								[
									113.57406660200024,
									22.16075267100007
								],
								[
									113.57406660200024,
									22.156113999000127
								],
								[
									113.5717879570002,
									22.152899481000077
								],
								[
									113.5678817070002,
									22.150580145000106
								],
								[
									113.56324303500026,
									22.150580145000106
								],
								[
									113.56023196700016,
									22.141546942000105
								],
								[
									113.56763756600014,
									22.139064846000167
								],
								[
									113.57252037900014,
									22.137315171000182
								],
								[
									113.57797285200024,
									22.139634507000068
								],
								[
									113.57797285200024,
									22.1380882830002
								],
								[
									113.57488040500027,
									22.135036526000192
								],
								[
									113.57976321700016,
									22.131903387000136
								],
								[
									113.5859481130002,
									22.131944078000117
								],
								[
									113.58668053500014,
									22.129543361000174
								],
								[
									113.58749433700007,
									22.12722402600022
								],
								[
									113.58749433700007,
									22.12486399900007
								],
								[
									113.5859481130002,
									22.124090887000136
								],
								[
									113.58358808700018,
									22.12331777600022
								],
								[
									113.57748457100007,
									22.126654364000046
								],
								[
									113.57797285200024,
									22.120917059000078
								],
								[
									113.57406660200024,
									22.11937083500004
								],
								[
									113.57097415500027,
									22.120143947000145
								],
								[
									113.56674238400024,
									22.123358466000212
								],
								[
									113.56666100400025,
									22.117377020000106
								],
								[
									113.56519616000014,
									22.11261627800019
								],
								[
									113.56633548300033,
									22.107692776000135
								],
								[
									113.56324303500026,
									22.106919664000202
								],
								[
									113.55738366000014,
									22.111151434000135
								],
								[
									113.5522567070002,
									22.107692776000135
								],
								[
									113.55152428500026,
									22.106146552000098
								],
								[
									113.54916425900012,
									22.105373440000164
								],
								[
									113.54680423300016,
									22.105373440000164
								],
								[
									113.54371178500008,
									22.107692776000135
								],
								[
									113.54110761800018,
									22.113267320000148
								],
								[
									113.54525800900024,
									22.11424388200004
								],
								[
									113.54232832100013,
									22.14073314000018
								],
								[
									113.54224694100014,
									22.140814520000163
								],
								[
									113.53410892000022,
									22.14878978100012
								],
								[
									113.53223717500032,
									22.152533270000163
								],
								[
									113.53223717500032,
									22.152614651000135
								],
								[
									113.53443444100014,
									22.161200262000165
								],
								[
									113.54143313900022,
									22.162339585000097
								],
								[
									113.54297936300014,
									22.16380442900015
								],
								[
									113.55290774800017,
									22.165838934000078
								],
								[
									113.55860436300031,
									22.163031317000048
								]
							]
						],
						[
							[
								[
									113.55380293100006,
									22.21149323100022
								],
								[
									113.55559329500022,
									22.207546291000227
								],
								[
									113.55681399800017,
									22.203558661000073
								],
								[
									113.55152428500026,
									22.20441315300016
								],
								[
									113.5484318370003,
									22.202053127000198
								],
								[
									113.54916425900012,
									22.199733791000142
								],
								[
									113.55071048300033,
									22.198960679000123
								],
								[
									113.55713951900009,
									22.20246002800019
								],
								[
									113.55380293100006,
									22.196641343000067
								],
								[
									113.55380293100006,
									22.195868231000134
								],
								[
									113.5522567070002,
									22.19741445500017
								],
								[
									113.55071048300033,
									22.195868231000134
								],
								[
									113.55152428500026,
									22.19419993700012
								],
								[
									113.55152428500026,
									22.19188060100015
								],
								[
									113.55152428500026,
									22.191107489000046
								],
								[
									113.55152428500026,
									22.18956126500018
								],
								[
									113.5484318370003,
									22.188055731000134
								],
								[
									113.54297936300014,
									22.184190171000125
								],
								[
									113.53988691500007,
									22.182643947000088
								],
								[
									113.53598066500001,
									22.182643947000088
								],
								[
									113.53288821700028,
									22.178697007000096
								],
								[
									113.5289005870003,
									22.178697007000096
								],
								[
									113.52483157600005,
									22.173814195000233
								],
								[
									113.52475019600007,
									22.17373281500005
								],
								[
									113.51986738400012,
									22.18370189000015
								],
								[
									113.51986738400012,
									22.183742580000143
								],
								[
									113.52019290500004,
									22.184881903000075
								],
								[
									113.52214603000027,
									22.19049713700008
								],
								[
									113.52483157600005,
									22.19306061400019
								],
								[
									113.52540123800031,
									22.193630276000135
								],
								[
									113.53036543100018,
									22.20152415600012
								],
								[
									113.53524824300007,
									22.207546291000227
								],
								[
									113.5337020190002,
									22.210760809000078
								],
								[
									113.53207441500001,
									22.210760809000078
								],
								[
									113.53288821700028,
									22.20917389500005
								],
								[
									113.52735436300009,
									22.207546291000227
								],
								[
									113.52434329500034,
									22.21255117400017
								],
								[
									113.5289005870003,
									22.213853257000153
								],
								[
									113.5289005870003,
									22.214626369000086
								],
								[
									113.53524824300007,
									22.214626369000086
								],
								[
									113.53646894600024,
									22.21706777600022
								],
								[
									113.53891035200002,
									22.220770575000074
								],
								[
									113.5445255870003,
									22.21767812700017
								],
								[
									113.5445255870003,
									22.216131903000132
								],
								[
									113.55071048300033,
									22.213853257000153
								],
								[
									113.55380293100006,
									22.21149323100022
								]
							]
						]
					]
				}
			},
			{
				"type": "Feature",
				"properties": {
					"id": 34,
					"name": "台湾"
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								121.63599694100014,
								25.222805080000114
							],
							[
								121.71851647200015,
								25.15200429900011
							],
							[
								121.89283287900003,
								25.113674221000167
							],
							[
								121.9057723320002,
								24.95010000200014
							],
							[
								121.82349694100014,
								24.854925848000164
							],
							[
								121.81495201900032,
								24.644354559000192
							],
							[
								121.85596764400032,
								24.550523179000123
							],
							[
								121.78003991000003,
								24.43268463700008
							],
							[
								121.77271569100003,
								24.30923086100006
							],
							[
								121.66285241000014,
								24.193101304000038
							],
							[
								121.60743248800014,
								24.07684967700004
							],
							[
								121.62891686300009,
								24.026190497000158
							],
							[
								121.52149498800031,
								23.658677476000094
							],
							[
								121.46216881600026,
								23.34300364800015
							],
							[
								121.4088647800001,
								23.254584052000126
							],
							[
								121.40007571700005,
								23.145493882000153
							],
							[
								121.29957116000003,
								22.95917389500019
							],
							[
								121.19027754000001,
								22.843166408000144
							],
							[
								121.14144941500001,
								22.741766669000185
							],
							[
								121.02100670700008,
								22.647894598000136
							],
							[
								120.9482528000002,
								22.52680084800005
							],
							[
								120.87501061300014,
								22.289252020000134
							],
							[
								120.87924238400001,
								22.055812893000052
							],
							[
								120.84156334700009,
								21.925482489000103
							],
							[
								120.70435631600014,
								21.98139069200016
							],
							[
								120.69695071700016,
								22.113226630000156
							],
							[
								120.62126712300017,
								22.29507070500017
							],
							[
								120.51197350400025,
								22.42475006700016
							],
							[
								120.33122806100027,
								22.51972077000019
							],
							[
								120.17554772200015,
								22.88410065300016
							],
							[
								120.17025800900024,
								23.013373114000046
							],
							[
								120.05941816500012,
								23.151027736000174
							],
							[
								120.1301491600002,
								23.360960244000154
							],
							[
								120.12426153300032,
								23.520020550000083
							],
							[
								120.18921959700026,
								23.774807033000116
							],
							[
								120.29224694100003,
								23.911932684000192
							],
							[
								120.34009850400014,
								24.02179596600007
							],
							[
								120.4931746750002,
								24.23065827000005
							],
							[
								120.57081139400032,
								24.404933986000202
							],
							[
								120.64893639400009,
								24.48387278900023
							],
							[
								120.70215905000032,
								24.60700104400013
							],
							[
								120.84750410200013,
								24.710842190000108
							],
							[
								120.90235436300031,
								24.836818752000056
							],
							[
								121.05933678500003,
								25.050238348000164
							],
							[
								121.37875410200007,
								25.157945054000038
							],
							[
								121.43628991000026,
								25.24144114800012
							],
							[
								121.53972415500004,
								25.28742096600007
							],
							[
								121.63599694100014,
								25.222805080000114
							]
						]
					]
				}
			}
		]
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var data=__webpack_require__(5);
	var Turret=__webpack_require__(3);
	var svg=__webpack_require__(7);


	function ChinaMap(){

		var projection,path;
		//炮塔集合
		var turretSet={};
	    
		;(function(){
			//生成经纬度到直角坐标系的映射函数
	        projection=d3.geo.mercator().center([104,37]).scale(800)
	        .translate([svg.width/2,svg.height/2]);
	        //建立路径生成器
	        path=d3.geo.path().projection(projection);
	        draw();
		})();

		//添加炮塔
		function addTurret(key,latitude,longitude){
			var arr=projection([longitude,latitude])
			var x=arr[0],y=arr[1];
			var turret=Turret({cx:x,cy:y,r:5});
			turretSet[key]=turret;
			return turret;
		}
		
	    /**获取炮塔*/
		function getTurret(key){
			return turretSet[key];
		}

		/**对地图进行绘制*/
	    function draw(){
	        svg.map
	        	//生成足够的路径
	        	.selectAll('path')
	        	.data(data.features)
	        	.enter()
	        	.append('path')
	        	//设定路径的样式
	        	.attr('stroke','#000')
	        	.attr('stroke-width',1)
	        	.attr('fill',function(d,i){
	            	return 'rgba(128,128,255,0.5)';
	        	})
	        	//进行数据到图形的转换
	        	.attr('d',function(d,i){
	            	return path(d);
	        	})
	        	//注册必要的事件
	        	.on('mouseover',function(d,i){
	            	d3.select(this).attr('fill','red');
	        	})
	        	.on('mouseout',function(d,i){
	            	d3.select(this).attr('fill','rgba(128,128,255,0.5)');
	        	})
	    }

	    return {
	    	addTurret:addTurret,
	    	getTurret:getTurret
	    }

	}

	module.exports=ChinaMap;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var d3=__webpack_require__(1);

	function SVG(){
		//动画层次
		var animate,map;
		//宽高
		var width,height;
		var defs;

		;(function(){
			width=document.body.scrollWidth;
			height=document.body.scrollHeight;
			var svg=d3.select('#map').append('svg').attr({
					width:width,
					height:height
				});
			map=svg.append('g').classed('map',true);
			animate=svg.append('g').classed('animate',true);	
			defs=svg.append('defs');
		})();

		return {
			animate:animate,
			map:map,
			width:width,
			height:height,
			defs:defs
		};
	}

	//单例化
	module.exports=SVG();

/***/ }
/******/ ]);