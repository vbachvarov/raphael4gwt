package org.sgx.raphael4gwt.graphael;

import org.sgx.raphael4gwt.graphael.bar.BarChart;
import org.sgx.raphael4gwt.graphael.bar.BarOpts;
import org.sgx.raphael4gwt.graphael.dot.DotOpts;
import org.sgx.raphael4gwt.graphael.line.LineChart;
import org.sgx.raphael4gwt.graphael.line.LineOpts;
import org.sgx.raphael4gwt.graphael.pie.PieOpts;
import org.sgx.raphael4gwt.graphael.pie.PieChart;
import org.sgx.raphael4gwt.raphael.Paper;
import org.sgx.raphael4gwt.raphael.Set;
import org.sgx.raphael4gwt.raphael.base.Attrs;

/**
 * @author sg
 *
 */
public class GPaper extends Paper {
	
protected GPaper(){}
	
public final native PieChart piechart(double x, double y, double r, 
		double[] vals)/*-{	
	return this.piechart(x, y, r, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::toJsArray([D)(vals));
}-*/;

public final native PieChart piechart(double x, double y, double r,  
		double[] vals, PieOpts opts)/*-{
	return this.piechart(x, y, r, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::toJsArray([D)(vals),
		opts.@org.sgx.raphael4gwt.graphael.pie.PieOpts::toNative()()
	);
}-*/;
 

public final native BarChart barchart(double x, double y, double w, double h, 
		double[][] vals)/*-{
	return this.barchart(x, y, w, h, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(vals)	);
}-*/;
//
public final native BarChart barchart(double x, double y, double w, double h, 
		double[][] vals, BarOpts opts)/*-{	
			
	return this.barchart(x, y, w, h,
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(vals),
		opts.@org.sgx.raphael4gwt.graphael.bar.BarOpts::toNative()()
	);
}-*/;

public final native BarChart hbarchart(double x, double y, double w, double h, 
		double[][] vals)/*-{
	return this.hbarchart(x, y, w, h, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(vals)	);
}-*/;
//
public final native BarChart hbarchart(double x, double y, double w, double h, 
		double[][] vals, BarOpts opts)/*-{	
			
	return this.hbarchart(x, y, w, h,
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(vals),
		opts.@org.sgx.raphael4gwt.graphael.bar.BarOpts::toNative()()
	);
}-*/;


public final native PieChart dotchart(double x, double y, double w, 
		double h, double[] xs, double[] ys, double[] data, DotOpts opts)/*-{	
	return this.dotchart(x, y, w, h, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::toJsArray([D)(xs),
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::toJsArray([D)(ys),
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::toJsArray([D)(data),
		opts.@org.sgx.raphael4gwt.graphael.dot.DotOpts::toNative()()
		);
}-*/;



public final native LineChart linechart(double x, double y, double w, 
		double h, double[][] valuesx, double[][] valuesy, LineOpts opts)/*-{	
		
	return this.linechart(x, y, w, h, 
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(valuesx),
		@org.sgx.raphael4gwt.raphael.jsutil.JsUtil::to2DJsArray([[D)(valuesy),
		opts.@org.sgx.raphael4gwt.graphael.line.LineOpts::toNative()()
	);
				
}-*/;




/**Puts the given `text` into a 'popup' tooltip. The text is given a default style according to getTextAttrs(). @see GShape.popup().
 *  Usagepaper.popup(50, 50, "$9.99", 'down');
 *
 * Note: The `dir` parameter has changed from g.Raphael 0.4.1 to 0.5. The options `0`, `1`, `2`, and `3` has been changed to `'down'`, `'left'`, `'up'`, and `'right'` respectively.
 * @param x (number) x coordinate of the popup's tail
 * @param y (number) y coordinate of the popup's tail
 * @param text (string) text to place inside the popup
 * @param dir (string) location of the text relative to the tail: `'down'`, `'left'`, `'up'` [default], or `'right'`.
 * @param size (number) amount of padding around the Element [default: `5`] 
 * @return (object) set containing the popup path and the text element 
 \*/
public final native Set popup(double x, double y, String text, String dir, int size)/*-{	
	return this.popup(x,y,text,dir,size);
}-*/;
/**Puts the given `text` into a 'popup' tooltip. The text is given a default style according to getTextAttrs(). @see GShape.popup().
 *  Usagepaper.popup(50, 50, "$9.99", 'down');
 *
 * Note: The `dir` parameter has changed from g.Raphael 0.4.1 to 0.5. The options `0`, `1`, `2`, and `3` has been changed to `'down'`, `'left'`, `'up'`, and `'right'` respectively.
 * @param x (number) x coordinate of the popup's tail
 * @param y (number) y coordinate of the popup's tail
 * @param text (string) text to place inside the popup
 * @param dir (string) location of the text relative to the tail: `'down'`, `'left'`, `'up'` [default], or `'right'`.
 * @return (object) set containing the popup path and the text element 
 \*/
public final native Set popup(double x, double y, String text, String dir)/*-{	
	return this.popup(x,y,text,dir);
}-*/;
/**Puts the given `text` into a 'popup' tooltip. The text is given a default style according to getTextAttrs(). @see GShape.popup().
 *  Usagepaper.popup(50, 50, "$9.99", 'down');
 *
 * Note: The `dir` parameter has changed from g.Raphael 0.4.1 to 0.5. The options `0`, `1`, `2`, and `3` has been changed to `'down'`, `'left'`, `'up'`, and `'right'` respectively.
 * @param x (number) x coordinate of the popup's tail
 * @param y (number) y coordinate of the popup's tail
 * @param text (string) text to place inside the popup
 * @return (object) set containing the popup path and the text element 
 \*/
public final native Set popup(double x, double y, String text)/*-{	
	return this.popup(x,y,text);
}-*/;
/**
 * Puts the given text into a 'tag' tooltip. The text is given a default style according to @g.txtattr. See @Element.tag

 @param x (number) x coordinate of the center of the tag loop
 @param y (number) y coordinate of the center of the tag loop
 @param text (string) text to place inside the tag
 @param angle (number) angle of orientation in degrees [default: `0`]
 @param r (number) radius of the loop [default: `5`]

 @return set containing the tag path and the text element
  Usage: paper.tag(50, 50, "$9.99", 60);
 */
public final native Set tag(double x, double y, String text, double angle, double r)/*-{	
	return this.tag(x,y,text,angle,r);
}-*/;
/**
 * Puts the given text into a 'tag' tooltip. The text is given a default style according to @g.txtattr. See @Element.tag

 @param x (number) x coordinate of the center of the tag loop
 @param y (number) y coordinate of the center of the tag loop
 @param text (string) text to place inside the tag
 @param r (number) radius of the loop [default: `5`]

 @return set containing the tag path and the text element
  Usage: paper.tag(50, 50, "$9.99", 60);
 */
public final native Set tag(double x, double y, String text, double angle)/*-{	
	return this.tag(x,y,text,angle);
}-*/;


/**
 * Puts the given `text` into a 'flag' tooltip. The text is given a default style according to @g.txtattr. See @Element.flag
 @param x (number) x coordinate of the flag's point
 @param y (number) y coordinate of the flag's point
 @param text (string) text to place inside the flag
 @param angle (number) angle of orientation in degrees [default: `0`]
 @return set containing the flag path and the text element
 Usage paper.flag(50, 50, "$9.99", 60);
 \*/
public final native Set flag(double x, double y, String text, double angle)/*-{	
	return this.flag(x,y,text,angle);
}-*/;

/**Puts the given text into a 'drop' tooltip. The text is given a default style according to @g.txtattr. See @Element.drop
 @param x (number) x coordinate of the drop's point
 @param y (number) y coordinate of the drop's point
 @param text (string) text to place inside the drop
 @param angle (number) angle of orientation in degrees [default: `0`]
 @return set containing the drop path and the text element
 Usage: paper.drop(50, 50, "$9.99", 60);
 */
public final native Set drop(double x, double y, String text, double angle)/*-{	
	return this.drop(x,y,text,angle);
}-*/;

/**
 * Paper.blob
 Puts the given text into a 'blob' tooltip. The text is given a default style according to @g.txtattr. See @Element.blob
 @param x (number) x coordinate of the blob's tail
 @param y (number) y coordinate of the blob's tail
 @param text (string) text to place inside the blob
 @param angle (number) angle of orientation in degrees [default: `0`] 
 @return set containing the blob path and the text element
 Usage: paper.blob(50, 50, "$9.99", 60);
 \*/
public final native Set blob(double x, double y, String text, double angle)/*-{	
	return this.blob(x,y,text,angle);
}-*/;


/**Puts the given `text` into a 'label' tooltip. The text is given a default style according to @g.txtattr. See @Element.label
 * Usage
  paper.label(50, 50, "$9.99");
 @param x (number) x coordinate of the center of the label
 @param y (number) y coordinate of the center of the label
 @param text (string) text to place inside the label
 @param angle (number) angle of orientation in degrees [default: `0`]
 @return set containing the label path and the text element
  
 \*/
public final native Set label(double x, double y, String text, double angle)/*-{	
	return this.label(x,y,text,angle);
}-*/;
/**Puts the given `text` into a 'label' tooltip. The text is given a default style according to @g.txtattr. See @Element.label
 * Usage
  paper.label(50, 50, "$9.99");
 @param x (number) x coordinate of the center of the label
 @param y (number) y coordinate of the center of the label
 @param text (string) text to place inside the label
 @return set containing the label path and the text element
  
 \*/
public final native Set label(double x, double y, String text)/*-{	
	return this.label(x,y,text);
}-*/;

/**
 * An attribute object that charts and tooltips will set on any generated text<br/>
   Default: { font: '12px Arial, sans-serif', fill: '#fff' }
 */
public final native Attrs getTextAttrs()/*-{
	return Rapahel.g.txtattrs;
}-*/;
/**
 * An attribute object that charts and tooltips will set on any generated text<br/>
   Default: { font: '12px Arial, sans-serif', fill: '#fff' }
 */
public final native void setTextAttrs(Attrs a)/*-{
	Rapahel.g.txtattrs=a;
}-*/;
/**
 * An attribute object that charts will set on all generated shims (shims being the invisible objects that mouse events are bound to)
 */
public final native Attrs getShimAttrs()/*-{
	return Rapahel.g.txtattrs;
}-*/;
/**
 * An attribute object that charts will set on all generated shims (shims being the invisible objects that mouse events are bound to)
 */
public final native void getShimAttrs(Attrs a)/*-{
	Rapahel.g.txtattrs=a;
}-*/;


}
