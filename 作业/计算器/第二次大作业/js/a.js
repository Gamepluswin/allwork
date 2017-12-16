function  initialize(container){
    var contain=document.getElementById(container);
    
    var box=document.createElement("div");
    box.className='box';
    contain.appendChild(box);
    //蓝框
    var val = document.createElement("input");
    val.type="text";
    val.value="0";
    val.id="textbox";
    val.className="head";
    val.disabled="disabled";
    val.name="valve";//创建input
    box.appendChild(val);
    //把input插入蓝框
    var ul=document.createElement("ul");
    //创建Ul
    box.appendChild(ul);
    //把Ul插入蓝框
    var baifen=document.createElement("li");
    ul.appendChild(baifen);
    var baifen2=document.createElement("buttom");
    baifen2.innerHTML= "%";
    baifen.appendChild(baifen2);
    //百分号
    var  gen=document.createElement("li");
    ul.appendChild(gen);
    var gen2=document.createElement("buttom");
    gen2.innerHTML="√";
    gen2.className="root";
    gen2.onclick=function(){twoback(this)};
    gen.appendChild(gen2);
    //根号
    var xfang=document.createElement("li");
    ul.appendChild(xfang);
    var xfang2=document.createElement("buttom");    
    xfang2.innerHTML="x²";
    xfang.appendChild(xfang2);
    //x2
    var daoshu=document.createElement("li");
    ul.appendChild(daoshu);
    var daoshu2=document.createElement("buttom");
    daoshu2.innerHTML="1/x";
    daoshu2.className="upDown";
    daoshu2.onclick=function(){back(this)};
    daoshu.appendChild(daoshu2);
    //1/x
    var ce=document.createElement("li");
    ul.appendChild(ce);
    var ce2=document.createElement("buttom");
    ce2.innerHTML="CE";
    ce2.className="CE";
    ce2.onclick=function(){deleteword(this)};
    ce.appendChild(ce2);
    //ce
    var c=document.createElement("li");
    ul.appendChild(c);
    var c2=document.createElement("buttom");
    c2.innerHTML="C";
    c2.className="C";
    c2.onclick=function(){deleteall(this)};
    c.appendChild(c2);
    //c
    var che=document.createElement("li");
    ul.appendChild(che);
    var che2=document.createElement("buttom");
    che2.innerHTML="←";
    che2.className="back";
    che2.onclick=function(){deleteone(this)};
    che.appendChild(che2);
    //←
    var chu=document.createElement("li");
    ul.appendChild(chu);
    var chu2=document.createElement("buttom");
    chu2.innerHTML="÷";
    chu2.className="div";
    chu2.onclick=function(){operatorIn(this)};
    chu.appendChild(chu2);
    //÷
    var qi=document.createElement("li");
    ul.appendChild(qi);
    var qi2=document.createElement("buttom");
    qi2.innerHTML="7";
    qi2.className="seven";
    qi2.onclick=function(){numIn(this)};
    qi.appendChild(qi2);
    //7
    var ba=document.createElement("li");
    ul.appendChild(ba);
    var ba2=document.createElement("buttom");
    ba2.innerHTML="8";
    ba2.className="eight";
    ba2.onclick=function(){numIn(this)};
    ba.appendChild(ba2);
    //8
    var jiu=document.createElement("li");
    ul.appendChild(jiu);
    var jiu2=document.createElement("buttom");
    jiu2.innerHTML="9";
    jiu2.className="nine";
    jiu2.onclick=function(){numIn(this)};
    jiu.appendChild(jiu2);
    //9
    var cheng=document.createElement("li");
    ul.appendChild(cheng);
    var cheng2=document.createElement("buttom");
    cheng2.innerHTML="×";
    cheng2.className="multi";
    cheng2.onclick=function(){operatorIn(this)};
    cheng.appendChild(cheng2);
    //×
    var si=document.createElement("li");
    ul.appendChild(si);
    var si2=document.createElement("buttom");
    si2.innerHTML="4";
    si2.className="four";
    si2.onclick=function(){numIn(this)};
    si.appendChild(si2);
    //4
    var wu=document.createElement("li");
    ul.appendChild(wu);
    var wu2=document.createElement("buttom");
    wu2.innerHTML="5";
    wu2.className="five";
    wu2.onclick=function(){numIn(this)};
    wu.appendChild(wu2);
    //5
    var liu=document.createElement("li");
    ul.appendChild(liu);
    var liu2=document.createElement("buttom");
    liu2.innerHTML="6";
    liu2.className="six";
    liu2.onclick=function(){numIn(this)};
    liu.appendChild(liu2);
    //6
    var jian=document.createElement("li");
    ul.appendChild(jian);
    var jian2=document.createElement("buttom");
    jian2.innerHTML="-";
    jian2.className="minus";
    jian2.onclick=function(){operatorIn(this)};
    jian.appendChild(jian2);
    //-
    var yi=document.createElement("li");
    ul.appendChild(yi);
    var yi2=document.createElement("buttom");
    yi2.innerHTML="1";
    yi2.className="one";
    yi2.onclick=function(){numIn(this)};
    yi.appendChild(yi2);
    //1
    var er=document.createElement("li");
    ul.appendChild(er);
    var er2=document.createElement("buttom");
    er2.innerHTML="2";
    er2.className="two";
    er2.onclick=function(){numIn(this)};
    er.appendChild(er2);
    //2
    var san=document.createElement("li");
    ul.appendChild(san);
    var san2=document.createElement("buttom");
    san2.innerHTML="3";
    san2.className="three";
    san2.onclick=function(){numIn(this)};
    san.appendChild(san2);
    //3
    var jia=document.createElement("li");
    ul.appendChild(jia);
    var jia2=document.createElement("buttom");
    jia2.innerHTML="+";
    jia2.className="plus";
    jia2.onclick=function(){operatorIn(this)};
    jia.appendChild(jia2);
    //+
    var fan=document.createElement("li");
    ul.appendChild(fan);
    var fan2=document.createElement("buttom");
    fan2.innerHTML="±";
    fan2.className="oppo";
    fan2.onclick=function(){opposite(this)};
    fan.appendChild(fan2);
    //±
    var ling=document.createElement("li");
    ul.appendChild(ling);
    var ling2=document.createElement("buttom");
    ling2.innerHTML="0";
    ling2.className="zero";
    ling2.onclick=function(){numIn(this)};
    ling.appendChild(ling2);
    //0
    var dian=document.createElement("li");
    ul.appendChild(dian);
    var dian2=document.createElement("buttom");
    dian2.innerHTML=".";
    dian2.className="dot";
    dian2.onclick=function(){point(this)};
    dian.appendChild(dian2);
    //.
    var deng=document.createElement("li");
    ul.appendChild(deng);
    var deng2=document.createElement("buttom");
    deng2.innerHTML="=";
    deng2.className="equal";
    deng2.onclick=function(){orderIn(this)};
    deng.appendChild(deng2);
    //=



    var inputTemp;//来接受并暂时保存待处理的输入框内容
    var first;//第一操作数
    var second;//第二操作数
    var pointer=1;//指针
    var operator;//存储操作符
    var afterCaculation=false;//存储'刚刚是否进行了运算'的真假性
    var pointsym;
    var rooter;
    var backer;

    inputTemp = document.getElementById("textbox");
    
    function numIn(obj){//这里的obj代表传入的参数，可以和外部实际调用时不一致，但是函数块内部的要与这儿的obj一致
            if (isNaN(inputTemp.value)==true) {}


			else{
				if (pointer==1&&rooter) {
					deleteall(obj);
				}
				else if (pointer==2&&rooter) {
                    deleteword(obj);
                    rooter=0;
				}//开根后直接按数

                if (pointer==1&&backer) {
					deleteall(obj)
				}
				else if (pointer==2&&backer) {
                    deleteword(obj);
                    backer=0;
				}//取倒数后直接按数
				

				if( afterCaculation == false && operator && first && (!second) ){
				//如果刚才并没有发生运算且仅输入了第一操作数 和 运算符号 而第二操作数未定义 则清空显示区域并开始对第二操作数进行操作
				
				pointer = 2;
				//指向第二操作数
				document.getElementById("textbox").value = 0;
				//清空显示区域
				pointsym=0;
			    }
    
			    if(afterCaculation == true && pointer == 1){
			    	//请自行理解...可以先不关注
                    
			    	document.getElementById("textbox").value = 0;
    
			    	afterCaculation = false;
			    	operator=0;
			    	rooter=0;
			    	backer=0;
			    	second=0;
			    	pointsym=0;

                    
			    }//防止1+1=2后又按2----22
    
			    inputTemp = document.getElementById("textbox");
    
			    if( inputTemp.value == "0" ){ //如过inputTemp对应的标签的value属性为"0" 通常标签的value属性读取出来会是 字符串
			    	//没有编程基础注意... js下进行等于判断用的是双等号
    
			    	inputTemp.value = obj.innerHTML; //那么这个数调成1
			    	//要注意 inputTemp.value这个对象的属性，既可以被提取出来，用作上面的等于等于比较，也可以在后面加个等号对他赋值！
			    }
			    else{//否则的话
    
			    	inputTemp.value = inputTemp.value + obj.innerHTML;
			    	//obj.innerHTML将获得obj这个标签对象的内容比如<h1>啊啊啊</h1>中的"啊啊啊"
			    	//这个地方偷个懒 字符串 + 字符串 = 合并后的字符串
			    	//这个地方进行了两个对于属性的操作 后面是取出了属性和输入的字符拼接 前面的则是把这个拼接了的字串取过来变成自己的属性值
    
			    }
    
    
			    if(pointer == 1){//当指针指向第一个操作数时
    
			    	first = inputTemp.value;//将最终值赋给first，相当于真正的把值输入了
			    
			    } 
			    else if(pointer == 2){//没有编程基础的注意下这里的else if 代表着前面一个不发生的前提下，若后面这个事件成真则执行下列块
			    //当指针指向第二个操作数时
			    
			    	second = inputTemp.value;//同上
			    
			    }
			   /* alert(first);
			    alert(second);*/
			   
            }
            console.log('first'+first);
			console.log('second'+second);
            
		}//这是一个函数 函数包含了参数和函数块，参数代表了函数中可以调用的变量，函数块内放函数所执行的任务
		 //通常是结合各种变量数据完成特定的任务
		function point(obj){
            if (isNaN(inputTemp.value)==true) {}//如果字符串是字
		 	

		 	else if (afterCaculation == true) {
                pointsym=obj.innerHTML;
                inputTemp.value="0"+obj.innerHTML;
                first=inputTemp.value;
                afterCaculation = false;
				operator=0;
				second=0;  
		 	}
		 	else if (afterCaculation == false) {
		 		if (inputTemp.value=="0") {
		 		pointsym=obj.innerHTML;
		 		inputTemp.value="0"+obj.innerHTML;
		 		if (pointer==1) {first=inputTemp.value}
		 	    else if (pointer==2) {second=inputTemp.value}		
		 	    }
		 	    else {
		 		    if ((!pointsym)) {
		 		    	if (first&&operator&&(!second)) {
                            
                            pointsym=obj.innerHTML;
		 		    		inputTemp.value="0"+obj.innerHTML;
		 		    		second=inputTemp.value;
		 		    	}
		 		    	else{
		 		    	    pointsym=obj.innerHTML;
		 		    	    inputTemp.value=inputTemp.value+obj.innerHTML;
		 		    	}
		 		    }
		 		    else{
		 		    }
		 	    }
		 	}
		}//小数点
		function twoback(obj){

		 	if (isNaN(inputTemp.value)==true) {}
		 	

		 	else if (afterCaculation == true) {
		 		rooter=obj.innerHTML;
		 		if ((inputTemp.value-0)<0) {
		 			deleteall(obj);
		 			inputTemp.value="Error";
		 		}
		 		else{    
		 		    afterCaculation = false;		 		
		 		    document.getElementById("textbox").value = 0;
		 		    second=0
		 		    first=Math.sqrt(first);
		 		    inputTemp = document.getElementById("textbox");
		 	        inputTemp.value = first;
		 	    }    
		 	}//如果进行一次运算后
		 	else if ( afterCaculation == false&&first&&(!operator)&&(!second)) {
		 		rooter=obj.innerHTML;
		 		if ((inputTemp.value-0)<0) {
		 			deleteall(obj);
		 			afterCaculation = true;
		 			inputTemp.value="Error";
		 			
		 		}
		 		else{
		 			first=Math.sqrt(first);
		 		   
		 		    inputTemp = document.getElementById("textbox");
		 	        inputTemp.value = first;
		 		    }
		 	}
		 	else if (afterCaculation == false&&first&&operator&&(!second)) {
		 		rooter=obj.innerHTML;
		 		if ((first-0)<0) {
		 			deleteall(obj);
		 			afterCaculation = true;
		 			inputTemp.value="Error";
		 		}
                else{
                	second=Math.sqrt(first);
                    inputTemp = document.getElementById("textbox");
		 	        inputTemp.value = second;
		 	    }
		 	}
		 	else if (afterCaculation == false&&first&&operator&&second) {
		 		rooter=obj.innerHTML;
		 		if ((second-0)<0) {
		 			deleteall(obj);
		 			afterCaculation = true;
		 			inputTemp.value="Error";
		 		}
		 		else{
		 			second=Math.sqrt(second);
		 		    inputTemp = document.getElementById("textbox");
		 	        inputTemp.value = second;
		 	    }    
		 	}//没有进行运算时

		}//开根号
		function opposite(obj){
		 	
		 	if (isNaN(inputTemp.value)==true) {}//如果字符串是字


		 	else if (afterCaculation == true) {
		 		
		 		afterCaculation = false;		 		
		 		document.getElementById("textbox").value = 0;
		 		second=0
		 		/*if(inputTemp.value.substring(inputTemp.value.length-1,inputTemp.value.length)=="."){
		 	      
		 	      if ((inputTemp.value-0)==0) {
                      if (inputTemp.value.substring(0,1)==0) {
                      	  
                      	  first="-"+first;
                      }//0.
                      else{
                      	first=(first-0)+"."//-0.
                      }
		 	      }//0.的情况
		 	      else {first=(first - 0)*(-1)+"."}
		        }*/
		        first=(first - 0)*(-1)
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = first;
		 	    operator=0;
		 	}//如果进行一次运算后
		 	else if ( afterCaculation == false&&first&&(!operator)&&(!second)) {
		 		
		 		if(inputTemp.value.substring(inputTemp.value.length-1,inputTemp.value.length)=="."){
		 	      if ((inputTemp.value-0)==0) {
                      if (inputTemp.value.substring(0,1)==0) {
                      	  first="-"+first;
                      }//0.
                      else{
                      	first=(first-0)+".";//-0.
                      }
		 	      }//0.的情况
		 	      else {first=(first - 0)*(-1)+".";}
		        }
		        else{first=(first - 0)*(-1);}
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = first;
		 	}
		 	else if (afterCaculation == false&&first&&operator&&(!second)) {               
		        
		        second=(first - 0)*(-1);
                inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = second;
		 	}
		 	else if (afterCaculation == false&&first&&operator&&second) {
		 		
		 		if(inputTemp.value.substring(inputTemp.value.length-1,inputTemp.value.length)=="."){		 	       
		 	       if ((inputTemp.value-0)==0) {
                      if (inputTemp.value.substring(0,1)==0) {
                      	  second="-"+second;
                      	 
                      }//0.
                      else{
                      	second=(second-0)+"."//-0.
                      }
                      
		 	      }//0.的情况
		 	      else {second=(second - 0)*(-1)+"."}
		        }
		        else{second=(second - 0)*(-1)}
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = second;
		 	}//没有进行运算时
		}//取相反数
        function back(obj){
         	if (isNaN(inputTemp.value)==true) {}//如果字符串是字
            
            else if ((inputTemp.value-0)==0) {
            	backer=obj.innerHTML;
            	deleteall(obj);
		        afterCaculation = true;
		 	    inputTemp.value="Error";
            }
         	else if (afterCaculation == true) {
		 		backer=obj.innerHTML;
		 		afterCaculation = false;		 		
		 		document.getElementById("textbox").value = 0;
		 		second=0
		 		first=1/(first - 0);
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = first;
		 	}//如果进行一次运算后
		 	else if ( afterCaculation == false&&first&&(!operator)&&(!second)) {
		 		backer=obj.innerHTML;
		 		first=1/(first - 0);
		 		
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = first;
		 	}
		 	else if (afterCaculation == false&&first&&operator&&(!second)) {
                backer=obj.innerHTML;
                second=1/(first - 0);
                inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = second;
		 	}
		 	else if (afterCaculation == false&&first&&operator&&second) {
		 		backer=obj.innerHTML;
		 		second=1/(second-0);
		 		inputTemp = document.getElementById("textbox");
		 	    inputTemp.value = second;
		 	}//没有进行运算时
        }//取倒数     
		function operatorIn(obj){//函数名的意思是操作符读入 
            rooter=0;
            backer=0;
            pointsym=0;
            if (isNaN(inputTemp.value)==true) {}//如果字符串不是字
            else{
            	if (inputTemp.value.substring(inputTemp.value.length-1,inputTemp.value.length)==".") {
		 	    	inputTemp.value=inputTemp.value.substring(0,inputTemp.value.length-1);
		 	    	inputTemp.value=inputTemp.value-0
		 	    }
		 	    else if (inputTemp.value.substring(inputTemp.value.length-2,inputTemp.value.length)==".0") {
		 	    	inputTemp.value=inputTemp.value.substring(0,inputTemp.value.length-2);
		 	    	inputTemp.value=inputTemp.value-0
		 	    }

		 	    if (!operator) {
		 	    	operator = obj.innerHTML;
		 	    //将这个标签的内容（即符号读入并把这个字符赋值给operator变量）
    
		 	    if(pointer == 1){
		 	    //如果第一操作数已经有定义，则转而指向第二操作数
		 	    	pointer=2;
		 	    }
    
		 	    second = 0;
		 	    //清空第二操作数，具体是为了已经进行了一遍运算后，清除残留变量用的
    
		 	    afterCaculation = false;
		 	    //根据前面的定义 清楚可能的"计算后"状态 以避免造成错误的覆盖
		 	    if (!first) {
		 	    	first=0;
		 	    }
		 	    }//如果直接一步算
		 	    else if (second&&operator&&afterCaculation == false) {
    
		 	    	orderIn(obj);
		 	    	operator=0;
		 	    	afterCaculation = false;
		 	    	operator = obj.innerHTML;
		 	    	second=0;
    
		 	    }//如果1加2加直接算3
		 	   // else if (true) {}
		 	    else if (!second) {
		 	    	operator = obj.innerHTML;
		 	    }//如果1加2加 算出3 减--连按两个
		 	    else if (afterCaculation == true) {
		 	    	second = 0;
		 	    	operator = obj.innerHTML;               
		 	        if(pointer == 1){
		 	    		pointer=2;
		 	        }
		 	        
		 	        afterCaculation = false;
		 	    }//如果=后加的情况
            } 
            console.log('符号：first:'+first+'second:'+second);	
		}
        function deleteone(obj){
         	if (isNaN(inputTemp.value)==true) {}//如果字符串是字 
         	else{
         	    if (afterCaculation == true||(first&&operator&&(!second))||rooter||backer) {}
         	    /*if (afterCaculation == true) {
         	    }//按了=
         	    if (first&&operator&&(!second)) {
         	    }//1234+的时候不能按
         	    if (rooter) {
         	    }
         	    if (backer) {        	    	
         	    }*/
         	    else{
         	    	if (inputTemp.value.substring(inputTemp.value.length-1,inputTemp.value.length)==".") {
         	    	        pointsym=0;
         	            }

         	    	if (pointer==1) {         	    		
                	    
                	    if ((inputTemp.value-0)<=0) {
                	    	if (inputTemp.value=="-0.") {
                	        	inputTemp.value=0;
                	        	first=0;
                	        }//如果一开始就是-0.
                	        inputTemp.value=inputTemp.value.substring(0,inputTemp.value.length-1);
                	        first=inputTemp.value;
                	        if (inputTemp.value.length==1) {
                	            inputTemp.value=0;
                	        	first=0;	
                	        }//防止只剩减号
                	    }//防止只剩减号	value值小于0或者为-0.时
                	    else{
                	    	inputTemp.value=inputTemp.value.substring(0,inputTemp.value.length-1);
                	        first=inputTemp.value;
                	    }
                	    if (inputTemp.value.length==0) {
                	    	inputTemp.value=0;
                	    	first="0";
                	    }
                    }
                    else  if (pointer==2) {
                    	
                    	inputTemp.value=inputTemp.value.substring(0,inputTemp.value.length-1);
                    	
                    	second=inputTemp.value;
                    	
                    	
                    	if (inputTemp.value.length==0) {
                	    	inputTemp.value=0;
                	    	second="0";
                	    }
                    }
                    /*if (inputTemp.value.length==0) {
                    	inputTemp.value=0;
                    }*/
         	    }

            }
        }
        function deleteall(obj){
            inputTemp.value=0;
            first=second=0;
            pointer=1; 
            operator=0;
            afterCaculation == false;
            pointsym=0;
            backer=0;
            rooter=0;
        }
        function deleteword(obj){
         	if (isNaN(inputTemp.value)==true) {}//如果字符串是字    
         	else{
         	    if (second) {
         	    	second="0";
         	    	inputTemp.value=0;
         	    	pointsym=0;
         	    	rooter=0;
         	    	backer=0;
         	    }
         	    else if (first&&(!operator)){
         	    	first=0;
         	    	inputTemp.value=0;
         	    	pointsym=0;
         	    	rooter=0;
         	    	backer=0;
         	    }
         	    else if (first&&operator&&(!second)) {
         	    	inputTemp.value=0;
         	    	second="0";
         	    }
         	}    
        }
		function orderIn(obj){

            if (isNaN(inputTemp.value)==true) {}
		
            else{ 	
                

		 		if(operator=="+"){
		 		//若操作符为 "+"
		 			
		 			if(!second){
		 				
		 				//例如摁下 1 + = 此时二操作数没有，则将一操作数赋给二操作数 完成自加
		 				second = first;

		 			}
		 			
		 			first = (first - 0) + (second - 0);
		 			//此处 有个问题 first或者second里面存储的可能是字符串 用first-0可以使得其必被隐式转换成数字类型，避免变成字符串连接运算
		 			
		 			inputTemp = document.getElementById("textbox");

		 			inputTemp.value = first;
		 			//将结算结果送到标签的value属性里面，反作用于这个标签对象 使得其显示出first里面存储的结果值

		 			pointer = 1;
		 			//因为将计算结果保存在first中并显示 所以指针指向first
		 		}
		 		if(operator=="-"){
		 		//若操作符为 "-"	 			
		 			if(!second){
		 				second = first;
		 			}

		 			first = (first - 0) - (second - 0);		 			
		 			inputTemp = document.getElementById("textbox");
		 			inputTemp.value = first;
		 			pointer = 1;
		 		}
		 		if(operator=="×"){
		 		//若操作符为 "*"		 			
		 			if(!second){
		 				second = first;
		 			}
		 			first = (first - 0) * (second - 0);
		 			inputTemp = document.getElementById("textbox");
		 			inputTemp.value = first;
		 			pointer = 1;
		 		}
		 		if(operator=="÷"){
		 		//若操作符为 "/"
		 		    if(!second){
		 				second = first;
		 			}
		 			if ((second-0)==0) {
		 				
		 			deleteall(obj)	
		 			inputTemp = document.getElementById("textbox");
		 			inputTemp.value = "Error";		 			
		 			}
		 			else {
		 				first = (first - 0) / (second - 0);		 			
		 			    inputTemp = document.getElementById("textbox");
		 			    inputTemp.value = first;
		 			    pointer = 1;
		 			}
		 		}

		 		if (isNaN(inputTemp.value)==false) {
		 			inputTemp.value=inputTemp.value-0;
		 		}
		 			
            }
		 	afterCaculation = true;
		 		//无条件的置为true 以便后续判断
		 }
    
   
}	
initialize("container5");
initialize("container6");
