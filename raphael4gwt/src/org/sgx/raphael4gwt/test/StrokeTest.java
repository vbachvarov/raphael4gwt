package org.sgx.raphael4gwt.test;

import java.util.LinkedList;
import java.util.List;

import org.sgx.raphael4gwt.raphael.Paper;
import org.sgx.raphael4gwt.raphael.Path;
import org.sgx.raphael4gwt.raphael.event.HoverListener;
import org.sgx.raphael4gwt.test.gallery.GalleryUtil;
import org.sgx.raphael4gwt.test.gallery.IconPaths;

import com.google.gwt.dom.client.NativeEvent;

public class StrokeTest extends Test {

	@Override
	public void test() {
		//we will draw all path in class IconPaths (predefined raphaeljs paths)		

		String[] iconPaths = new String[] {
			IconPaths.question, IconPaths.i, IconPaths.dollar, IconPaths.temp, 
			IconPaths.thunder, IconPaths.snow,  IconPaths.hail,  IconPaths.rain,
			IconPaths.cloudy, IconPaths.sun, IconPaths.undo, IconPaths.merge, 
			IconPaths.split, IconPaths.fork, IconPaths.shuffle, IconPaths.arrowalt, 
			IconPaths.smile, IconPaths.smile2, IconPaths.alarm, IconPaths.clock,
			IconPaths.globeAlt, IconPaths.globe, IconPaths.globeAlt2, IconPaths.warning, IconPaths.arrowleftalt,
			IconPaths.arrow, IconPaths.arrowalt
		};
		List<Path> paths = new LinkedList<Path>();
		int stepX = paperWidth/20;
		int stepY = paperWidth/20;
		int x = 30, y = 100;

		for (int i = 0; i < iconPaths.length; i++) {
			x+=stepX;
			if(x>paperWidth-40) {
				x=0;
				y+=stepY;
			}
			final Path p = paper.path(iconPaths[i]);
			paths.add(p);
			p.translate(x, y);
			
			p.hover(new HoverListener() {				
				@Override
				public void hoverOut(NativeEvent e) {}				
				@Override
				public void hoverIn(NativeEvent e) {
					p.setAttribute("transform", "t200,200s10.0,10.0");
				}
			});			
		}
		
	}


	//test params
	public String[] getTags() {
		return new String[]{GalleryUtil.TAG_SHAPE, GalleryUtil.TAG_EVENT};
	}
	public StrokeTest(Paper paper, int paperWidth, int paperHeight) {
		super(paper, paperWidth, paperHeight);
		this.name="strokes";
		this.description="Show shape strokes";		
	}

	
	@Override
	public String getJavaClassSource() {
		return TestResources.INSTANCE.AllPathIcons().getText();
	}

}
