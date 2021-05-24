## Table of Contents

Original docs: <https://github.com/Submitty/pdf-annotate.js/tree/master/docs>

- Introduction
- API
  - [PDFJSAnnotate](https://github.com/taoky/pdf-annotate.js/blob/master/docs/api/PDFJSAnnotate.md)
    - [StoreAdapter](https://github.com/taoky/pdf-annotate.js/blob/master/docs/api/StoreAdapter.md)
    - AbstractStoreAdapter
    - [UI](https://github.com/taoky/pdf-annotate.js/blob/master/docs/api/UI.md)
- Annotations
  - [Area](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Area.md)
  - [Drawing](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Drawing.md)
  - [Highlight](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Highlight.md)
  - [Point](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Point.md)
  - [Strikeout](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Strikeout.md)
  - [Textbox](https://github.com/taoky/pdf-annotate.js/blob/master/docs/annotations/Textbox.md)

## Appendix

### Features

(Probably) working:
- Basic cursor (Annotation selection, text selection, annotation eraser)
- Highlight & Strikeout on text
- Rectangle, text, draw and point (comment) annotation
  - Only draw & text color supported
  - "Draw" not tested on touch device
- Scale
- Undo/Redo/Clear all annotations
- Local Storage (LocalStoreAdapter)

Not tested:
- A11y
- Other not mentioned annotations
  - Like circle, arrow, etc.

(Probably) Broken:
- LocalUserStoreAdapter (No support for undo/redo, etc)
- Rotate
- Moving pen annotation when selecting it

### An example of integrating to React

<https://github.com/MS-ASE-2020/team-ai-research/blob/main/src/pdf-module/index.js>