import { describe, expect, it } from 'vitest';
import { UI_BASE_ZOOM, windowLayoutForWorkArea } from '../src/main/window-layout.js';

describe('main window accessibility', () => {
  it('uses native 100% as the UI baseline', () => {
    expect(UI_BASE_ZOOM).toBe(1);
  });

  it('caps its initial outer bounds to a small Windows work area', () => {
    const layout = windowLayoutForWorkArea({ x: 120, y: 40, width: 900, height: 520 });

    expect(layout).toMatchObject({
      x: 120,
      y: 40,
      width: 900,
      height: 520,
      useContentSize: false
    });
  });

  it('keeps sensible minimums without making them larger than the display', () => {
    expect(windowLayoutForWorkArea({ x: 0, y: 0, width: 1600, height: 900 })).toMatchObject({
      x: 200,
      y: 70,
      width: 1200,
      height: 760,
      minWidth: 640,
      minHeight: 480,
      resizable: true,
      maximizable: true
    });

    expect(windowLayoutForWorkArea({ x: -500, y: 0, width: 500, height: 360 })).toMatchObject({
      x: -500,
      y: 0,
      width: 500,
      height: 360,
      minWidth: 500,
      minHeight: 360
    });
  });

  it('opens centered at a compact default size on a larger work area', () => {
    expect(windowLayoutForWorkArea({ x: 100, y: 50, width: 1600, height: 900 })).toMatchObject({
      x: 300,
      y: 120,
      width: 1200,
      height: 760
    });
  });
});
