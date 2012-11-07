/*!
 * g.Raphael 0.51 - Charting library, based on Raphaël
 *
 * Copyright (c) 2009-2012 Dmitry Baranovskiy (http://g.raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
(function(){function b(o,h,g,u,e,q){q=q||{};var c=this,s=[],l=o.set(),t=o.set(),n=o.set(),A=[],C=e.length,D=0,G=0,F=0,f=q.maxSlices||100,x=parseFloat(q.minPercent)||1,E=Boolean(x);function y(K,J,i,M,I,R){var O=Math.PI/180,p=K+i*Math.cos(-M*O),j=K+i*Math.cos(-I*O),L=K+i/2*Math.cos(-(M+(I-M)/2)*O),Q=J+i*Math.sin(-M*O),P=J+i*Math.sin(-I*O),H=J+i/2*Math.sin(-(M+(I-M)/2)*O),N=["M",K,J,"L",p,Q,"A",i,i,0,+(Math.abs(I-M)>180),1,j,P,"z"];N.middle={x:L,y:H};return N}t.covers=l;if(C==1){n.push(o.circle(h,g,u).attr({fill:q.colors&&q.colors[0]||c.colors[0],stroke:q.stroke||"#fff","stroke-width":q.strokewidth==null?1:q.strokewidth}));l.push(o.circle(h,g,u).attr(c.shim));G=e[0];e[0]={value:e[0],order:0,valueOf:function(){return this.value}};q.href&&q.href[0]&&l[0].attr({href:q.href[0]});n[0].middle={x:h,y:g};n[0].mangle=180}else{for(var B=0;B<C;B++){G+=e[B];e[B]={value:e[B],order:B,valueOf:function(){return this.value}}}e.sort(function(j,i){return i.value-j.value});for(B=0;B<C;B++){if(E&&e[B]*100/G<x){f=B;E=false}if(B>f){E=false;e[f].value+=e[B];e[f].others=true;F=e[f].value}}C=Math.min(f+1,e.length);F&&e.splice(C)&&(e[f].others=true);for(B=0;B<C;B++){var k=D-360*e[B]/G/2;if(!B){D=90-k;k=D-360*e[B]/G/2}if(q.init){var m=y(h,g,1,D,D-360*e[B]/G).join(",")}var w=y(h,g,u,D,D-=360*e[B]/G);var z=(q.matchColors&&q.matchColors==true)?e[B].order:B;var v=o.path(q.init?m:w).attr({fill:q.colors&&q.colors[z]||c.colors[z]||"#666",stroke:q.stroke||"#fff","stroke-width":(q.strokewidth==null?1:q.strokewidth),"stroke-linejoin":"round"});v.value=e[B];v.middle=w.middle;v.mangle=k;s.push(v);n.push(v);q.init&&v.animate({path:w.join(",")},(+q.init-1)||1000,">")}for(B=0;B<C;B++){v=o.path(s[B].attr("path")).attr(c.shim);var z=e[B].order;q.href&&q.href[z]&&v.attr({href:q.href[z]});v.attr=function(){};l.push(v);n.push(v)}}t.hover=function(H,p){p=p||function(){};var r=this;for(var j=0;j<C;j++){(function(I,J,i){var K={sector:I,cover:J,cx:h,cy:g,mx:I.middle.x,my:I.middle.y,mangle:I.mangle,r:u,value:e[i],total:G,label:r.labels&&r.labels[i]};J.mouseover(function(){H.call(K)}).mouseout(function(){p.call(K)})})(n[j],l[j],j)}return this};t.each=function(r){var p=this;for(var j=0;j<C;j++){(function(H,I,i){var J={sector:H,cover:I,cx:h,cy:g,x:H.middle.x,y:H.middle.y,mangle:H.mangle,r:u,value:e[i],total:G,label:p.labels&&p.labels[i]};r.call(J)})(n[j],l[j],j)}return this};t.click=function(r){var p=this;for(var j=0;j<C;j++){(function(H,I,i){var J={sector:H,cover:I,cx:h,cy:g,mx:H.middle.x,my:H.middle.y,mangle:H.mangle,r:u,value:e[i],total:G,label:p.labels&&p.labels[i]};I.click(function(){r.call(J)})})(n[j],l[j],j)}return this};t.inject=function(i){i.insertBefore(l[0])};var d=function(M,H,r,p){var Q=h+u+u/5,P=g,L=P+10;M=M||[];p=(p&&p.toLowerCase&&p.toLowerCase())||"east";r=o[r&&r.toLowerCase()]||"circle";t.labels=o.set();for(var K=0;K<C;K++){var R=n[K].attr("fill"),I=e[K].order,J;e[K].others&&(M[I]=H||"Others");M[I]=c.labelise(M[I],e[K],G);t.labels.push(o.set());t.labels[K].push(o[r](Q+5,L,5).attr({fill:R,stroke:"none"}));t.labels[K].push(J=o.text(Q+20,L,M[I]||e[I]).attr(c.txtattr).attr({fill:q.legendcolor||"#000","text-anchor":"start"}));l[K].label=t.labels[K];L+=J.getBBox().height*1.2}var N=t.labels.getBBox(),O={east:[0,-N.height/2],west:[-N.width-2*u-20,-N.height/2],north:[-u-N.width/2,-u-N.height-10],south:[-u-N.width/2,u+10]}[p];t.labels.translate.apply(t.labels,O);t.push(t.labels)};if(q.legend){d(q.legend,q.legendothers,q.legendmark,q.legendpos)}t.push(n,l);t.series=n;t.covers=l;return t}var a=function(){};a.prototype=Raphael.g;b.prototype=new a;Raphael.fn.piechart=function(c,g,f,d,e){return new b(this,c,g,f,d,e)}})();