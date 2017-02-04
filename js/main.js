//上移
var aaaa = document.getElementsByClassName('foot')[0];
aaaa.style.opacity = 1;
aaaa.style.bottom = 50 + 'px';
var oNav = document.getElementsByClassName('nav')[0];
var aA = oNav.getElementsByTagName('a');
var aP = oNav.getElementsByTagName('p');
for(var i = 0;i<aA.length;i++){
    aA[i].index = i;
    aA[i].onmouseenter = function () {
        if(this.index!==2){
            aP[this.index].style.opacity = 1 ;
            aP[this.index].style.width = 192 + 'px' ;
        }
    }
    aA[i].onmouseout = function () {
        if(this.index!==2){
            aP[this.index].style.opacity = 0 ;
            aP[this.index].style.width = 0 + 'px' ;
        }
    }
}
//点击翻页
var aH6 = document.getElementsByTagName('h6');
for(var i = 0;i<aH6.length;i++){
    aH6[i].index = i;
    aH6[i].onclick = function () {
        window.scrollTo(0,(this.index + 1) * cY);
    }
}
//鼠标滚轮，翻页
   document.onmousewheel = function () {
        var ev = event;
        var s = event.wheelDelta;
        var l = event.pageY - event.clientY;
        var w = window;
        if(s>0){
            w.scrollTo(0,l - cY);
            close();
        }else{
            w.scrollTo(0,l + cY);
        }
   }
   document.addEventListener('DOMMouseScroll',function(ev){
        var s = ev.detail;
        var l = ev.pageY - ev.clientY;
        var w = window;
        if(s>0){
            w.scrollTo(0,l + cY);
        }else{
            w.scrollTo(0,l - cY);
        }
   },false)
//折纸
var oWap = document.getElementById('wrap');
var aDiv = oWap.getElementsByTagName('div');
var i =0;
var timer = null;
var oH3 = oWap.getElementsByTagName('h3')[0];
oH3.onclick = function() {
    clearInterval(timer);
    timer = setInterval(function(){
        aDiv[i].className = 'show';
        i++;
        if(i===aDiv.length){
            clearInterval(timer);
        }
    },200)
}
// html5--canvas
var canvashtml5 = document.getElementById("html5").getContext("2d");
var canvascss3=document.getElementById("css3").getContext("2d");
var canvasjs=document.getElementById("js").getContext("2d");
var canvasjq=document.getElementById("jq").getContext("2d");
var canvasbs=document.getElementById("bs").getContext("2d");
var canvasang=document.getElementById("angular").getContext("2d");
var canvasrea=document.getElementById("react").getContext("2d");
var canvasnode=document.getElementById("node").getContext("2d");
var canwidth=160;
var radius=70;
var canhtml5=function(){
    var deg = 0;
    var html5T = function(deg){
        var r = deg*Math.PI/180;   
        canvashtml5.clearRect(0,0,canwidth,canwidth);   
        canvashtml5.beginPath();  
        canvashtml5.strokeStyle = "#F1652A"; 
        canvashtml5.lineWidth = 10; 
        canvashtml5.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); 
        canvashtml5.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            html5T(deg);
            if(deg>324){
                clearInterval(time);
            }    
    },20);
}
var cancss3=function(){
    var deg = 0;
    var css3T = function(deg){
        var r = deg*Math.PI/180;   
        canvascss3.clearRect(0,0,canwidth,canwidth);   
        canvascss3.beginPath();  
        canvascss3.strokeStyle = "#409AD8"; 
        canvascss3.lineWidth = 10; 
        canvascss3.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvascss3.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            css3T(deg);
            if(deg>324){
                clearInterval(time);
            }   
    },20);
}
var canvasTotal=function(){

}
var canjs=function(){
    var deg = 0;
    var jsT = function(deg){
        var r = deg*Math.PI/180;   
        canvasjs.clearRect(0,0,canwidth,canwidth);   
        canvasjs.beginPath();  
        canvasjs.strokeStyle = "#ECB12C"; 
        canvasjs.lineWidth = 10; 
        canvasjs.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasjs.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            jsT(deg);
            if(deg>324){
                clearInterval(time);
            }   
    },20);
}
var canjq=function(){
    var deg = 0;
    var jqT = function(deg){
        var r = deg*Math.PI/180;   
        canvasjq.clearRect(0,0,canwidth,canwidth);   
        canvasjq.beginPath();  
        canvasjq.strokeStyle = "#75B143"; 
        canvasjq.lineWidth = 10; 
        canvasjq.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasjq.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            jqT(deg);
            if(deg>252){
                clearInterval(time);
            }    
    },20);
}
var canbs=function(){
    var deg = 0;
    var bsT = function(deg){
        var r = deg*Math.PI/180;   
        canvasbs.clearRect(0,0,canwidth,canwidth);   
        canvasbs.beginPath();  
        canvasbs.strokeStyle = "#583F85"; 
        canvasbs.lineWidth = 10; 
        canvasbs.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasbs.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            bsT(deg);
            if(deg>252){
                clearInterval(time);
            }   
    },20);
}

var angular=function(){
    var deg = 0;
    var psT = function(deg){
        var r = deg*Math.PI/180;   
        canvasang.clearRect(0,0,canwidth,canwidth);   
        canvasang.beginPath();  
        canvasang.strokeStyle = "#031A3A"; 
        canvasang.lineWidth = 10; 
        canvasang.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasang.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            psT(deg);
            if(deg>252){
                clearInterval(time);
            }   
    },20);
}

var react=function(){
    var deg = 0;
    var psT = function(deg){
        var r = deg*Math.PI/180;   
        canvasrea.clearRect(0,0,canwidth,canwidth);   
        canvasrea.beginPath();  
        canvasrea.strokeStyle = "#25CF25"; 
        canvasrea.lineWidth = 10; 
        canvasrea.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasrea.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            psT(deg);
            if(deg>252){
                clearInterval(time);
            }   
    },20);
}
var node=function(){
    var deg = 0;
    var psT = function(deg){
        var r = deg*Math.PI/180;   
        canvasnode.clearRect(0,0,canwidth,canwidth);   
        canvasnode.beginPath();  
        canvasnode.strokeStyle = "#DF129F"; 
        canvasnode.lineWidth = 10; 
        canvasnode.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasnode.stroke();
    };
    var time = setInterval(function(){
        var con=document.getElementsByTagName("section")[2];
            deg+=4;
            psT(deg);
            if(deg>270){
                clearInterval(time);
            }   
    },20);
}
canhtml5();
cancss3();
canjs();
canjq();
canbs();
angular();
react();
node();






