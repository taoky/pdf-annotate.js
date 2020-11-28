import { addEventListener, removeEventListener, fireEvent, removeAllEventListener, enableUI, disableUI } from './event';
import { disableEdit, enableEdit, createEditOverlay } from './edit';
import { disablePen, enablePen, setPen } from './pen';
import { disableArrow, enableArrow, setArrow } from './arrow';
import { disableEraser, enableEraser } from './eraser';
import { disablePoint, enablePoint } from './point';
import { disableRect, enableRect } from './rect';
import { disableCircle, enableCircle, setCircle, addCircle } from './circle';
import { disableText, enableText, setText } from './text';
import { createPage, renderPage, rerenderAnnotations } from './page';

export default {
  addEventListener,
  removeEventListener,
  fireEvent,
  removeAllEventListener,
  enableUI,
  disableUI,

  disableEdit,
  enableEdit,
  createEditOverlay,

  disablePen,
  enablePen,
  setPen,

  disablePoint,
  enablePoint,

  disableRect,
  enableRect,

  disableCircle,
  enableCircle,
  setCircle,
  addCircle,

  disableArrow,
  enableArrow,
  setArrow,

  disableEraser,
  enableEraser,

  disableText,
  enableText,
  setText,

  createPage,
  renderPage,
  rerenderAnnotations
};
