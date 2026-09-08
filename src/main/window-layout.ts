/** User-facing 100% maps to Electron's native 100% zoom. IPC exposes relative zoom only. */
export const UI_BASE_ZOOM = 1;

export interface DisplayWorkArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MainWindowLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  useContentSize: false;
  resizable: true;
  maximizable: true;
}

const MIN_WIDTH = 640;
const MIN_HEIGHT = 480;
const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 760;

/**
 * BrowserWindow bounds and Electron screen work areas are both expressed in DIPs. Keep the
 * outer window inside that work area: using content-size bounds would add the Windows frame
 * on top and can put controls below the taskbar on scaled/small displays.
 */
export function windowLayoutForWorkArea(workArea: DisplayWorkArea): MainWindowLayout {
  const areaWidth = Math.max(1, Math.floor(workArea.width));
  const areaHeight = Math.max(1, Math.floor(workArea.height));
  const width = Math.min(DEFAULT_WIDTH, areaWidth);
  const height = Math.min(DEFAULT_HEIGHT, areaHeight);
  const x = Math.round(workArea.x + (areaWidth - width) / 2);
  const y = Math.round(workArea.y + (areaHeight - height) / 2);

  return {
    x,
    y,
    width,
    height,
    minWidth: Math.min(MIN_WIDTH, width),
    minHeight: Math.min(MIN_HEIGHT, height),
    useContentSize: false,
    resizable: true,
    maximizable: true
  };
}
