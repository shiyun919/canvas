var canvas = document.getElementById('canvas');
		setCanvasSize()
		
		function setCanvasSize(){
			var pageWidth = document.documentElement.clientWidth
			var pageHeight = document.documentElement.clientHeight
			
			canvas.width = pageWidth
			canvas.height = pageHeight
		}
		window.onresize = function(){
			setCanvasSize()
		}

		//声明变量
		var context = canvas.getContext('2d');//2d是二次元的意思
		var using = false
		var lastPoint = {'x':undefined, 'y':undefined}
		var lineWidth = 2

		//特性检测
		if(document.body.ontouchstart !== undefined){
			//触屏设备（一般指手机平板）
			//监听触摸屏幕
			canvas.ontouchstart = function(aaa){
				var x = aaa.touches[0].clientX
				var y = aaa.touches[0].clientY
				if(eraserEnabled){
					using = true
					context.clearRect(x-5,y-5,10,10)
				}else{
					using = true
					lastPoint = {'x':x, 'y':y}
				}
			}
			//监听边触摸边移动
			canvas.ontouchmove = function(aaa){
				var x = aaa.touches[0].clientX
				var y = aaa.touches[0].clientY
				if(eraserEnabled){
					if(using){
						context.clearRect(x-5,y-5,10,10)
					}				
				}else{
					if(using){
				
					var newPoint = {'x':x, 'y':y}
					drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
					lastPoint = newPoint
					}else{
				
					}
				}
			}
			//监听松开触屏
			canvas.ontouchend = function(aaa){
				using = false
			}
		}else{
			//非触屏设备（一般指电脑）
			//监听鼠标按下
			canvas.onmousedown = function(aaa){
				var x = aaa.clientX
				var y = aaa.clientY
				if(eraserEnabled){
					using = true
					context.clearRect(x-5,y-5,10,10)
				}else{
					using = true
					lastPoint = {'x':x, 'y':y}
				}
			}
			//监听鼠标移动
			canvas.onmousemove = function(aaa){
				var x = aaa.clientX
				var y = aaa.clientY
				if(eraserEnabled){
					if(using){
						context.clearRect(x-5,y-5,10,10)
					}				
				}else{
					if(using){
				
					var newPoint = {'x':x, 'y':y}
					drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
					lastPoint = newPoint
					}else{
				
					}
				}
			}
			//监听鼠标松开
			canvas.onmouseup = function(aaa){
				using = false
			}
		}		
		
		//绘制圆形
		function drawCircle(x,y,radius){
			context.beginPath()
			context.arc(x,y,radius,0,Math.PI*2)
			context.fill()
		}
		//绘制线
		function drawLine(x1,y1,x2,y2){
			context.beginPath()
			context.moveTo(x1,y1)//起点
			context.lineWidth = lineWidth
			context.lineTo(x2,y2)//终点
			context.stroke()
			context.closePath()
		}
		
		//监听是否在使用橡皮擦
		var eraserEnabled = false
		  eraser.onclick = function() {
		  eraserEnabled =true
		  eraser.classList.add('active')
		  pen.classList.remove('active')
		
		}
		  pen.onclick = function(){
		  eraserEnabled = false
		  pen.classList.add('active')
		  eraser.classList.remove('active')
		}

		//监听点击哪个颜色画笔就是哪种颜色
		black.onclick = function(){
			context.fillStyle = 'black'
			context.strokeStyle = 'black'
			black.classList.add('active')
			red.classList.remove('active')
			blue.classList.remove('active')
			green.classList.remove('active')
			grey.classList.remove('active')
			yellow.classList.remove('active')
			orange.classList.remove('active')
		}
		red.onclick = function(){
			context.fillStyle = 'red'
			context.strokeStyle = 'red'
			red.classList.add('active')
			black.classList.remove('active')
			blue.classList.remove('active')
			green.classList.remove('active')
			grey.classList.remove('active')
			yellow.classList.remove('active')
			orange.classList.remove('active')
		}
		blue.onclick = function(){
			context.fillStyle = 'blue'
			context.strokeStyle = 'blue'
			black.classList.remove('active')
			red.classList.remove('active')
			blue.classList.add('active')
			green.classList.remove('active')
			grey.classList.remove('active')
			yellow.classList.remove('active')
			orange.classList.remove('active')
		}
		green.onclick = function(){
			context.fillStyle = 'green'
			context.strokeStyle = 'green'
			black.classList.remove('active')
			red.classList.remove('active')
			blue.classList.remove('active')
			green.classList.add('active')
			grey.classList.remove('active')
			yellow.classList.remove('active')
			orange.classList.remove('active')
		}
		grey.onclick = function(){
			context.fillStyle = 'grey'
			context.strokeStyle = 'grey'
			black.classList.remove('active')
			red.classList.remove('active')
			blue.classList.remove('active')
			green.classList.remove('active')
			grey.classList.add('active')
			yellow.classList.remove('active')
			orange.classList.remove('active')
		}
		yellow.onclick = function(){
			context.fillStyle = 'yellow'
			context.strokeStyle = 'yellow'
			black.classList.remove('active')
			red.classList.remove('active')
			blue.classList.remove('active')
			green.classList.remove('active')
			grey.classList.remove('active')
			yellow.classList.add('active')
			orange.classList.remove('active')
		}
		orange.onclick = function(){
			context.fillStyle = 'orange'
			context.strokeStyle = 'orange'
			black.classList.remove('active')
			red.classList.remove('active')
			blue.classList.remove('active')
			green.classList.remove('active')
			grey.classList.remove('active')
			yellow.classList.remove('active')
			orange.classList.add('active')
		}

		//监听使用粗/细线
		thin.onclick = function(){
			lineWidth = 2
		}
		thick.onclick = function(){
			lineWidth = 5
		}
		
		//清除内容
		clear.onclick = function(){
			context.clearRect(0, 0, canvas.width, canvas.height);
		}

		//下载保存为图片
		download.onclick = function(){
			var url = canvas.toDataURL("image/png")
			var a = document.createElement('a')
			document.body.appendChild(a)
			a.href = url
			a.download = '我的图片'
			a.target = '_blank'
			a.click()
		}
