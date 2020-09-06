arr=[];
arr.push(`mine1.minenum=0`);
arr.push(`mine1.minenum=479`);
arr.push(`mine1.minenum=478`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl)
		ele.bl=function (map){
			var map = map || play.map;
			if(this.my<0)return com.bylaw.z(this.x,this.y,map,this.my);
			return com.bylaw.c(this.x,this.y,map,this.my);
		};
	return ele;
})`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.pater!=='J')
		ele.my=1;
	return ele;
})`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.pater!=='J'&&ele.my==-1)
		ele.alpha=0;
	return ele;
})
document.getElementById('tyroPlay').onclick=function(){
	play.map[0].length=0;
	play.map[0].length=9;
	play.map[0][4]="J0";
	play.map[2].length=0;
	play.map[2].length=8;
	play.map[3].length=0;
	play.map[3].length=8;
}
document.getElementById('superPlay').onclick=function(){
	play.map[0].length=0;
	play.map[0].length=9;
	play.map[0][4]="J0";
	play.map[2].length=0;
	play.map[2].length=8;
	play.map[3].length=0;
	play.map[3].length=8;
}`);
arr.push(`com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				if(key!=='J0')com.mans[key]=new com.class.Man(key.toLowerCase());
				else com.mans[key]=new com.class.Man(key);
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.childList.push(com.mans[key])
			}
		}
	}
}
onload();`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.pater!=='j')
		ele.my=-1;
	return ele;
})`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.pater!=='j'&&ele.my==1)
		ele.alpha=0;
	return ele;
})
document.getElementById('tyroPlay').onclick=()=>{
	play.map[9].length=0;
	play.map[9].length=9;
	play.map[9][4]="j0";
	play.map[6].length=0;
	play.map[6].length=8;
	play.map[7].length=0;
	play.map[7].length=8;
}
document.getElementById('superPlay').onclick=()=>{
	play.map[9].length=0;
	play.map[9].length=9;
	play.map[9][4]="j0";
	play.map[6].length=0;
	play.map[6].length=8;
	play.map[7].length=0;
	play.map[7].length=8;
}`);
arr.push(`com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				if(key!=='j0')com.mans[key]=new com.class.Man(key.toUpperCase());
				else com.mans[key]=new com.class.Man(key);
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.childList.push(com.mans[key])
			}
		}
	}
}
onload();`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.my==-1)
		ele.alpha=0;
	return ele;
})`);
arr.push(`com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				com.mans[key]=new com.class.Man(key);
				if(com.mans[key].my==1&&com.mans[key].pater!='j')com.mans[key].pater='c';
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.childList.push(com.mans[key])
			}
		}
	}
}
onload();
com.childList.map(ele=>{
	if(ele.bl)
		ele.bl=function (map){
			var map = map || play.map;
			if(this.my<0||this.pater=='j')return com.bylaw[this.pater.toLowerCase()](this.x,this.y,map,this.my);
			return com.bylaw.c(this.x,this.y,map,this.my);
		};
	return ele;
})`);
arr.push(`com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				com.mans[key]=new com.class.Man(key);
				if(com.mans[key].my==1&&com.mans[key].pater!='j')com.mans[key].pater='z';
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.childList.push(com.mans[key])
			}
		}
	}
}
onload();
com.childList.map(ele=>{
	if(ele.bl)
		ele.bl=function (map){
			var map = map || play.map;
			if(this.my<0||this.pater=='j')return com.bylaw[this.pater.toLowerCase()](this.x,this.y,map,this.my);
			return com.bylaw.z(this.x,this.y,map,this.my);
		};
	return ele;
})`);
arr.push(`com.initMap=[["C0","M0","X0","S0","J0","S1","X1","M1","C1"],[null,null,null,null,null,null,null,null],[null,"P0",null,null,null,null,null,"P1"],["Z0",null,"Z1",null,"Z2",null,"Z3",null,"Z4"],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["z0","z5","z1","z6","z2","z7","z3","z8","z4"],["p2","p0","p3","p4","p5","p6","p7","p1","p8"],["c2","c3","c4","c5","c6","c7","c8","c9","c1"],["c0","c10","c12","c13","j0","c11","c14","c15","c16"]]
onload();`);
arr.push(`com.initMap=[["C0","M0","X0","S0","J0","S1","X1","M1","C1"],[null,null,null,null,null,null,null,null],[null,"P0",null,null,null,null,null,"P1"],["Z0",null,"Z1",null,"Z2",null,"Z3",null,"Z4"],[null,null,null,null,null,null,null,null],["z0","z1","z2","z3","z4","z5","z6","z7","z8"],["z9","z10","z11","z12","z13","z14","z15","z16","z17"],["z18","z19","z20","z21","z22","z23","z24","z25","z26"],["z27","z28","z29","z30","z31","z32","z33","z34","z35"],["z36","z37","z38","z39","j0","z40","z41","z42","z43"]]
onload();`);
arr.push(`com.bylaw.Super_c = function (x,y,map,my){
	var d=[];
	for (var i=x-1; i>= 0; i--){d.push([i,y])}
	for (var i=x+1; i <= 8; i++){d.push([i,y])}
	for (var i = y-1 ; i >= 0; i--){d.push([x,i])}
	for (var i = y+1 ; i<= 9; i++){d.push([x,i])}
	return d;
}
com.childList.map(ele=>{
	if(ele.bl)
		ele.bl=function (map,ai=false){
			var map = map || play.map;
			if(!(this.my>0&&this.pater=='c')||ai)return com.bylaw[this.pater.toLowerCase()](this.x,this.y,map,this.my);
			return com.bylaw.Super_c(this.x,this.y,map,this.my);
		};
	return ele;
})
AI.getMoves = function (map, my){
	var manArr = AI.getMapAllMan (map, my);
	var moves = [];
	var foul=play.isFoul;
	for (var i=0; i<manArr.length; i++){
		var man = manArr[i];
		var val=man.bl(map,true);
		for (var n=0; n<val.length; n++){
			var x=man.x;
			var y=man.y;
			var newX=val[n][0];
			var newY=val[n][1];
			if (foul[0]!=x || foul[1]!=y || foul[2]!=newX || foul[3]!=newY ){
				moves.push([x,y,newX,newY,man.key])
			}
		}
	}
	return moves;
}`);
arr.push(`com.bylaw.Super_child = function (x,y,map,my){
	var d=[];
	var push=(x,y)=>{
		d.push([x,y]);
		if(x!==y)d.push([y,x]);
	};
	for(var i=0;i<=9;i++)
		for(var j=0;j<9;j++)
			push(i,j);
	return d;
}
com.childList.map(ele=>{
	if(ele.bl)
		ele.bl=function (map,ai=false){
			var map = map || play.map;
			if(this.my<0||ai)return com.bylaw[this.pater.toLowerCase()](this.x,this.y,map,this.my);
			return com.bylaw.Super_child(this.x,this.y,map,this.my);
		};
	return ele;
})
AI.getMoves = function (map, my){
	var manArr = AI.getMapAllMan (map, my);
	var moves = [];
	var foul=play.isFoul;
	for (var i=0; i<manArr.length; i++){
		var man = manArr[i];
		var val=man.bl(map,true);
		for (var n=0; n<val.length; n++){
			var x=man.x;
			var y=man.y;
			var newX=val[n][0];
			var newY=val[n][1];
			if (foul[0]!=x || foul[1]!=y || foul[2]!=newX || foul[3]!=newY ){
				moves.push([x,y,newX,newY,man.key])
			}
		}
	}
	return moves;
}`);
arr.push(`play.AIhelp=()=>{
    AI.treeDepth=4;
	var val=AI.getAlphaBeta(-99999 ,99999, AI.treeDepth, com.arr2Clone(play.map),1);
	var x=play.map.findIndex(ele=>ele.includes(val.key));
	var y=play.map[x].findIndex(ele=>ele==val.key);
	play.clickMan(play.map[x][y]);
	play.clickPoint(val["x"],val['y']);
};
play.AIPlay = function (){
	play.my = -1 ;
	var pace=AI.init(play.pace.join(""))
	if (!pace) {
		play.showWin (1);
		return ;
	}
	play.pace.push(pace.join(""));
	var key=play.map[pace[1]][pace[0]]
		play.nowManKey = key;
	var key=play.map[pace[3]][pace[2]];
	if (key){
		play.AIclickMan(key,pace[2],pace[3]);	
	}else {
		play.AIclickPoint(pace[2],pace[3]);	
	}
	com.get("clickAudio").play();
	play.AIhelp();
}
com.get('tyroPlay').onclick=com.get('superPlay').onclick=()=>{
	setTimeout(()=>{play.AIhelp()},500);
}`);
arr.push(`play.init = function (){
	play.my				=	1;				//玩家方
	play.map 			=	com.arr2Clone (com.initMap);		//初始化棋盘
	play.nowManKey		=	false;			//现在要操作的棋子
	play.pace 			=	[];				//记录每一步
	play.isPlay 		=	true ;			//是否能走棋
	play.mans 			=	com.mans;
	play.bylaw 			= 	com.bylaw;
	play.show 			= 	com.show;
	play.showPane 		= 	com.showPane;
	play.isOffensive	=	true;			//是否先手
	play.depth			=	play.depth || 1;				//搜索深度
	play.isFoul			=	false;	//是否犯规长将
	com.pane.isShow		=	 false;
	for (var i=0; i<play.map.length; i++){
		for (var n=0; n<play.map[i].length; n++){
			var key = play.map[i][n];
			if (key){
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.mans[key].isShow = true;
			}
		}
	}
	play.show();
	com.canvas.addEventListener("click",play.clickCanvas)
	com.get("regretBn").addEventListener("click", function(e) {
		play.regret();
	})
}`);
arr.push(`AI.evaluate = function (map,my){
	var val=0;
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				val += play.mans[key].value[i][n] * play.mans[key].my;
			}
		}
	}
	AI.number++;
	return -val*my;
}`);
arr.push(`mine1.triggerClick=function(pos,e){
	var theCell = this.cellArr[pos[0]][pos[1]];
	if(theCell.isOpened == true){ //已经打开过的，周边操作。2.如果是经真正事件操作到达这里的。则进行周边操作。否则return
		if(e){
			var aroundMineNum = this.calAround(pos);//周边有几个雷。
			var unknownArr = this.getAroundUnknown(pos)//周边有几个未打开的。
			var tagNum = this.getAroundTag(pos)//获取标记了的数量。

			if(aroundMineNum == tagNum){//标记的数量等于周围雷的数量，则直接点击周围的格子。
				for(var t=0,uLen = unknownArr.length;t<uLen;t++){
					this.triggerClick(unknownArr[t]);
				}
			}else{
				var mousedownArr = this.mousedownArr;
				if(mousedownArr !=""){
					for (var m = 0,mLen = mousedownArr.length; m < mLen; m++) {
						this.drawCell(mousedownArr[m],1);
					};
				}
				this.mousedownArr = "";
			}
		}
		return;
	}
	var tag = theCell.tag;
	if(e && e.button !== 2 && e.button!==0){//右键 标记雷	
		if(tag == 0){
			this.drawCell(pos,3);
			theCell.tag = 1;
			this.notTaged --;
			this.numToImage(this.notTaged,this.tagele);				
		}
		else if(tag == 1){
			this.drawCell(pos,4);
			theCell.tag = 2;
			this.notTaged ++;
			this.numToImage(this.notTaged,this.tagele);		
		}else if(tag == 2){
			this.drawCell(pos,1);
			theCell.tag = 0;
		}
		return;
	}
	if(tag!= 0 ){
		return;
	}
	if(theCell.isMine == true){// 如果点到的这个是雷，就判输。显示所有雷
		this.faceele.src = "img/face_fail.gif";
		this.showMine();
		this.drawCell(pos,6);//点中的雷。
		this.showWrongTag();//将标记错误的显示出来。
		this.ele.onmouseup = '';
		this.ele.onmousedown = '';
		this.ele.onmousemove = '';
		clearInterval(this.timer);
	}else{//不是雷，显示周边有几个雷。
		this.drawNum(pos,0);
		var aroundMineNum = this.calAround(pos); //求数量				
		if(aroundMineNum!=0){
			this.drawNum(pos,aroundMineNum);//绘制不同颜色的数字
		}else{//等于0了，计算周边
			var zeroArr = [];
			zeroArr.push(pos);
			zeroArr = this.calZeroMine(pos,zeroArr);//获取所有的周边雷为0的。
			this.openZeroArr(zeroArr);//将周边雷为0的周边的打开。
		}
	}
	theCell.isOpened = true;
	var okNum = this.panewidth * this.paneheight-this.minenum;
	var openNum = 0 ;
	for(var i=1;i<=this.panewidth;i++){
		for (var j = 1; j <= this.paneheight; j++) {
			if(this.cellArr[i][j].isOpened == true){
				openNum ++;
			}
		};

	}
	if(openNum == okNum){
		this.faceele.src = "img/face_success.gif";
		alert("you win!");
		clearInterval(this.timer);
		this.ele.onmouseup = '';
		this.ele.onmousedown = '';
		this.ele.onmousemove = '';	
	}
}`);
arr.push(`com.childList.map(ele=>{
	if(ele.bl&&ele.my==-1)
		ele.my=2;
	return ele;
})
play.AIPlay=function(){};
play.clickMan = function (key,x,y){
	var man = com.mans[key];
	//吃子
	if (play.nowManKey&&play.nowManKey != key&& man.my != com.mans[play.nowManKey ].my){
		//man为被吃掉的棋子
		if (play.indexOfPs(com.mans[play.nowManKey].ps,[x,y])){
			man.isShow = false;
			var pace=com.mans[play.nowManKey].x+""+com.mans[play.nowManKey].y
			//z(bill.createMove(play.map,man.x,man.y,x,y))
			delete play.map[com.mans[play.nowManKey].y][com.mans[play.nowManKey].x];
			play.map[y][x] = play.nowManKey;
			com.showPane(com.mans[play.nowManKey].x ,com.mans[play.nowManKey].y,x,y)
			com.mans[play.nowManKey].x = x;
			com.mans[play.nowManKey].y = y;
			com.mans[play.nowManKey].alpha = 1
			
			play.pace.push(pace+x+y);
			play.nowManKey = false;
			com.pane.isShow = false;
			com.dot.dots = [];
			com.show()
			com.get("clickAudio").play();
			setTimeout("play.AIPlay()",500);
			if (key == "j0") play.showWin (-1);
			if (key == "J0") play.showWin (1);
		}
	// 选中棋子
	}else{
			if (com.mans[play.nowManKey]) com.mans[play.nowManKey].alpha = 1 ;
			man.alpha = 0.6;
			com.pane.isShow = false;
			play.nowManKey = key;
			com.mans[key].ps = com.mans[key].bl(); //获得所有能着点
			com.dot.dots = com.mans[key].ps
			com.show();
			//com.get("selectAudio").start(0);
			com.get("selectAudio").play();
	}
}`);

var ele=document.createElement('script');
chrome.storage.local.get('choose',res=>{
	if(res.choose=='0')return;
	ele.innerHTML=arr[Number(res.choose)-1];
	document.body.appendChild(ele);
});