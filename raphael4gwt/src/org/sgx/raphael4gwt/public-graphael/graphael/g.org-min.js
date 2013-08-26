/*! raphael4gwt 2013-08-26 */
function oc_render(){oc_calc(),oc_draw()}function oc_clone(a){var b=a instanceof Array?[]:{};for(i in a)b[i]=a[i]&&"object"==typeof a[i]?oc_clone(a[i]):a[i];return b}function oc_add2point(a,b){a[0]+=b[0],a[1]+=b[1]}function oc_repeat_str(a,b){for(var c="",d=0;b-1>d;d++)c+=a;return c}function oc_calc(){oc_text_limit(oc_data.root),oc_delete_special_chars(oc_data.root),oc_text_dimensions(oc_data.root),oc_data.root.is_root=!0,oc_boundboxes_dimensions(oc_data.root)}function oc_text_limit(a){if(0!=oc_style.max_text_width&&(a.title=oc_text_limit_obj(a.title),a.subtitle=oc_text_limit_obj(a.subtitle),void 0!==a.children))for(var b=0;b<a.children.length-oc_IE;b++)oc_text_limit(a.children[b])}function oc_text_limit_obj(a){if(void 0==a)return void 0;for(var b=a.split(/[ \n]+/),c=[],d="",e="",f=0;f<b.length-0;f++){var e=d;d+=(0==f?"":" ")+b[f],d.length>oc_style.max_text_width&&(c.push(e),d=b[f])}""!=d&&c.push(d);var g=c.join("\n");return g}function oc_delete_special_chars(a){if(a.title=oc_delete_special_chars_obj(a.title),a.subtitle=oc_delete_special_chars_obj(a.subtitle),void 0!==a.children)for(var b=0;b<a.children.length-oc_IE;b++)oc_delete_special_chars(a.children[b])}function oc_delete_special_chars_obj(a){return void 0===a?void 0:(a=a.replace(/á/g,"a"),a=a.replace(/é/g,"e"),a=a.replace(/í/g,"i"),a=a.replace(/ó/g,"o"),a=a.replace(/ú/g,"u"),a=a.replace(/Á/g,"A"),a=a.replace(/É/g,"E"),a=a.replace(/Í/g,"I"),a=a.replace(/Ó/g,"O"),a=a.replace(/Ú/g,"U"),a=a.replace(/ñ/g,"n"),a=a.replace(/Ñ/g,"N"))}function oc_text_dimensions(a){var b=[0,0],c=[0,0];if(a.title_lines=a.subtitle_lines=0,b=oc_text_dimensions_obj(a.title,oc_style.title_char_size),a.title_lines=b[2],a.title_lines>oc_max_title_lines&&(oc_max_title_lines=a.title_lines),void 0!==a.subtitle&&(c=oc_text_dimensions_obj(a.subtitle,oc_style.subtitle_char_size),a.subtitle_lines=c[2],a.subtitle_lines>oc_max_subtitle_lines&&(oc_max_subtitle_lines=a.subtitle_lines)),b[0]>oc_max_text_width&&(oc_max_text_width=b[0]),oc_style.use_images&&oc_style.images_size[0]>oc_max_text_width&&(oc_max_text_width=oc_style.images_size[0]),c[0]>oc_max_text_width&&(oc_max_text_width=c[0]),b[1]+c[1]>oc_max_text_height&&(oc_max_text_height=b[1]+c[1]),void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++)oc_text_dimensions(a.children[d])}function oc_text_dimensions_obj(a,b){var c=0,d=a.split("\n");if(0==d.length)return[0,0];for(var e=0;e<d.length-0;e++)d[e].length>c&&(c=d[e].length);return[c*b[0],(d.length-0)*b[1],d.length-0]}function oc_boundboxes_dimensions(a){void 0===a.type&&(a.type="subordinate"),a.deltacorner=[0,0];var b=0,c=0;if(void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"staff"==e.type?e.position=0==b++%2?"left":"right":"collateral"==e.type&&(e.position=0==c++%2?"left":"right"),oc_boundboxes_dimensions(e)}a.boundbox=[oc_max_text_width+2*oc_style.inner_padding,oc_max_text_height+2*oc_style.inner_padding],oc_style.use_images&&void 0!==a.image&&(a.boundbox[1]+=1*oc_style.inner_padding+oc_style.images_size[1]);var f=a.boundbox[1];void 0!==a.is_root?(oc_add2point(a.boundbox,[2*oc_style.hline,2*oc_style.vline]),a.deltacenter=[a.boundbox[0]/2,f/2+2*oc_style.vline]):"collateral"==a.type?(oc_add2point(a.boundbox,[2*oc_style.hline,2*oc_style.vline]),a.deltacenter=[a.boundbox[0]/2,f/2+2*oc_style.vline]):"staff"==a.type?(oc_add2point(a.boundbox,[2*oc_style.hline,1*oc_style.vline]),a.deltacenter=[a.boundbox[0]/2,f/2+1*oc_style.vline]):(oc_add2point(a.boundbox,[2*oc_style.hline,2*oc_style.vline]),a.deltacenter=[a.boundbox[0]/2,f/2+2*oc_style.vline]),a.fullbbox=oc_clone(a.boundbox),void 0===a.children&&(a.xoffset=0);var g=a.boundbox[0]/2,h=a.boundbox[0]/2,i=0;if(void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"collateral"==e.type&&(i++,"left"==e.position?g=e.fullbbox[0]+a.boundbox[0]/2:h=e.fullbbox[0]+a.boundbox[0]/2)}var j=0,k=0,l=0,m=0,n=0,o=0;if(void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"staff"==e.type&&(o++,"left"==e.position?(j+=e.fullbbox[1],k=e.fullbbox[1],m<e.fullbbox[0]&&(m=e.fullbbox[0])):(k=e.fullbbox[1],e.fullbbox[1]>k&&(j+=e.fullbbox[1]-k),n<e.fullbbox[0]&&(n=e.fullbbox[0])))}var p=0;if(void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"subordinate"==e.type&&(p+=e.fullbbox[0])}var q=0;g>q&&(q=g),m>q&&(q=m),p/2>q&&(q=p/2);var r=0;if(h>r&&(r=h),n>r&&(r=n),p/2>r&&(r=p/2),a.xoffset=q-a.boundbox[0]/2,void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"collateral"==e.type&&(e.deltacorner="left"==e.position?[q-a.boundbox[0]/2-e.fullbbox[0],0]:[q+a.boundbox[0]/2,0],oc_update_fullbbox(a,e))}if(j=0,k=0,l=0,void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"staff"==e.type&&("left"==e.position?(e.deltacorner=[q-e.fullbbox[0],a.boundbox[1]+j],j+=e.fullbbox[1],k=e.fullbbox[1],1==o&&(a.fullbbox[0]+=a.boundbox[0])):(e.deltacorner=[q,a.boundbox[1]+l],k=e.fullbbox[1],e.fullbbox[1]>k&&(j+=e.fullbbox[1]-k)),oc_update_fullbbox(a,e))}var s=0,t=q-p/2;if(0>t&&(t=0),void 0!==a.children){for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"subordinate"==e.type&&(e.deltacorner=[t+s,a.boundbox[1]+j],s+=e.fullbbox[0])}for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];"subordinate"==e.type&&oc_update_fullbbox(a,e)}}if(OC_DEBUG&&void 0!==a.children)for(var d=0;d<a.children.length-oc_IE;d++){var e=a.children[d];console.log("oc_boundboxes_dimensions ["+e.title+"] "+"boundbox("+e.boundbox[0]+","+e.boundbox[1]+") "+"deltacenter("+e.deltacenter[0]+","+e.deltacenter[1]+") "+"fullbbox("+e.fullbbox[0]+","+e.fullbbox[1]+") "+"deltacorner("+e.deltacorner[0]+","+e.deltacorner[1]+") "+"xoffset("+e.xoffset+")")}}function oc_update_fullbbox(a,b){var c=0,d=0,e=a.fullbbox[0],f=a.fullbbox[1];b.deltacorner[0]<c&&(c=b.deltacorner[0]),b.deltacorner[0]+b.fullbbox[0]>e&&(e=b.deltacorner[0]+b.fullbbox[0]),b.deltacorner[1]+b.fullbbox[1]>f&&(f=b.deltacorner[1]+b.fullbbox[1]),c<a.deltacorner[0]&&(a.deltacorner[0]=c),OC_DEBUG&&console.log("updatefullbbox "+a.title+" <-- "+b.title+" x0="+c+" x1="+e+" y0="+d+" y1="+f),a.fullbbox=[e-c,f-d]}function oc_draw(){oc_paper=new Raphael(document.getElementById(oc_style.container),oc_data.root.fullbbox[0],oc_data.root.fullbbox[1]),oc_draw_obj(oc_data.root,null,0,0)}function oc_draw_obj(a,b,c,d){if(void 0!==a.children)for(var e=0;e<a.children.length-oc_IE;e++)oc_draw_obj(a.children[e],a,a.deltacorner[0]+c,a.deltacorner[1]+d);OC_DEBUG&&console.log("drawing "+a.title+": legacyXoff="+c+" legacyYoff="+d+" dcornerX="+a.deltacorner[0]+" dcornerY="+a.deltacorner[1]+" dcenterX="+a.deltacenter[0]+" dcenterY="+a.deltacenter[1]+" xoff="+a.xoffset);var f=c+a.deltacorner[0]+a.deltacenter[0]+a.xoffset,g=d+a.deltacorner[1]+a.deltacenter[1],h=f-oc_max_text_width/2-oc_style.inner_padding,i=f+oc_max_text_width/2+oc_style.inner_padding;if(oc_style.use_images&&void 0!==a.image)var j=g-oc_max_text_height/2-oc_style.inner_padding-oc_style.images_size[1]/2-oc_style.inner_padding/2,k=g+oc_max_text_height/2+oc_style.inner_padding+oc_style.images_size[1]/2+oc_style.inner_padding/2;else var j=g-oc_max_text_height/2-oc_style.inner_padding,k=g+oc_max_text_height/2+oc_style.inner_padding;var l=oc_paper.rect(h,j,i-h,k-j);l.attr("fill",oc_style.box_color),l.attr("stroke",oc_style.box_border_color),void 0!==a.id&&(l.oc_id=a.id),l.hover(function(){this.attr({fill:oc_style.box_color_hover})},function(){this.attr({fill:oc_style.box_color})}),null!==oc_style.box_click_handler&&l.click(function(a){oc_style.box_click_handler(a,l)});var m=j+oc_style.inner_padding+a.title_lines*oc_style.title_char_size[1]/2+(oc_max_title_lines-a.title_lines)*oc_style.title_char_size[1]/2-2,n=oc_paper.text(f,m,a.title);if(n.attr("font-family",oc_style.text_font),n.attr("font-size",oc_style.title_font_size),n.attr("fill",oc_style.title_color),void 0!==a.subtitle){var o=k-oc_style.inner_padding-a.subtitle_lines*oc_style.subtitle_char_size[1]/2,p=oc_paper.text(f,o,a.subtitle);p.attr("font-family",oc_style.text_font),p.attr("font-size",oc_style.subtitle_font_size),p.attr("fill",oc_style.subtitle_color)}if(oc_style.use_images&&void 0!==a.image&&oc_paper.image(oc_style.images_base_url+a.image,f-oc_style.images_size[0]/2,k-oc_style.images_size[1]-oc_style.inner_padding,oc_style.images_size[0],oc_style.images_size[1]),null!=b){var q=f-a.xoffset-a.deltacorner[0]+b.xoffset+0,r=g-0-a.deltacorner[1]+0+(b.deltacenter[1]-a.deltacenter[1]);q-oc_max_text_width/2-oc_style.inner_padding,q+oc_max_text_width/2+oc_style.inner_padding,r-oc_max_text_height/2-oc_style.inner_padding;var s,t,u=r+oc_max_text_height/2+oc_style.inner_padding;if("collateral"==a.type)if("left"==a.position){var v="M "+i+" "+g+" l "+2*oc_style.hline+" 0";s=oc_paper.path(v),t=oc_paper.path(v)}else{var v="M "+h+" "+g+" l -"+2*oc_style.hline+" 0";s=oc_paper.path(v),t=oc_paper.path(v)}else if("staff"==a.type)if("left"==a.position){var v="M "+i+" "+g+" h "+(q-i)+" v "+(r-g);s=oc_paper.path(v),t=oc_paper.path(v)}else{var v="M "+h+" "+g+" h "+(q-h)+" v "+(r-g);s=oc_paper.path(v),t=oc_paper.path(v)}else if(void 0===a.is_root){var v="M "+f+" "+j+" v -"+oc_style.vline+" h "+(q-f)+" V "+u;s=oc_paper.path(v),t=oc_paper.path(v)}s.attr("stroke",oc_style.line_color),t.attr("stroke",oc_style.line_color)}if(OC_DEBUG){h=c+a.deltacorner[0]+a.xoffset,i=c+a.deltacorner[0]+a.xoffset+a.boundbox[0],j=d+a.deltacorner[1],k=d+a.deltacorner[1]+a.boundbox[1];var w=oc_paper.rect(h+4,j+4,i-h-8,k-j-6);w.attr({stroke:"#00f","stroke-width":.4}),h=c+a.deltacorner[0],i=c+a.deltacorner[0]+a.fullbbox[0],j=d+a.deltacorner[1],k=d+a.deltacorner[1]+a.fullbbox[1];var x=oc_paper.rect(h+2,j+2,i-h-4,k-j-2);x.attr({stroke:"#f00","stroke-width":.4})}}if("Microsoft Internet Explorer"==navigator.appName)var oc_IE=1;else var oc_IE=0;var oc_max_text_width=0,oc_max_text_height=0,oc_max_title_lines=0,oc_max_subtitle_lines=0,oc_paper=null;