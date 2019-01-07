<script type="text/javascript">
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
		
		
		/*context.fillStyle = 'green';//填充矩形颜色
		context.fillRect(10, 10, 100, 100);//填充矩形
		
		context.strokeStyle = 'red';//绘制矩形颜色（指描边）
		context.strokeRect(10, 10, 100, 100);//绘制矩形
		
		context.clearRect(30,30,20,20);//清除（擦掉）矩形，橡皮擦
		
		
		//绘制三角形
		context.beginPath();
		context.moveTo(600,600);
		context.lineTo(900,600);
		context.lineTo(900,1000);
		context.fill();
		
		//绘制圆形
		context.beginPath();
		context.arc(300,300,50,0,Math.PI*2);
		context.stroke();
		context.fill();
		
		//绘制线
		context.beginPath()
		context.moveTo(0,0)//起点
		context.lineWidth = 10
		context.lineTo(600,0)//终点
		context.stroke()
		context.closePath()*/
		
		/****/
		var context = canvas.getContext('2d');//2d是二次元的意思
		var using = false
		var lastPoint = {'x':undefined, 'y':undefined}
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
				console.log(lastPoint)
				/*drawCircle(x,y,1)*/
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
				/*drawCircle(x,y,1)*/
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
		
		function drawCircle(x,y,radius){
			context.beginPath()
			context.fillStyle = 'black'
			context.arc(x,y,radius,0,Math.PI*2)
			context.fill()
		}
		
		function drawLine(x1,y1,x2,y2){
			context.beginPath()
			context.strokeStyle = 'black'
			context.moveTo(x1,y1)//起点
			context.lineWidth = 5
			context.lineTo(x2,y2)//终点
			context.stroke()
			context.closePath()
		}
		
		//监听是否在使用橡皮擦
		var eraserEnabled = false
		  eraser.onclick = function() {
		  eraserEnabled =true
		  actions.className = 'actions x'
		
		}
		brush.onclick = function(){
		  eraserEnabled = false
		  actions.className = 'actions'
        }
    </script>