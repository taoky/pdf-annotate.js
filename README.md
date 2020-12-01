# pdf-annotate.js

[![Build Status](https://github.com/taoky/pdf-annotate.js/workflows/Test/badge.svg?branch=master&event=push)](https://github.com/taoky/pdf-annotate.js/actions?query=workflow%3ATest+event%3Apush+branch%3Amaster)
[![codecov](https://codecov.io/gh/taoky/pdf-annotate.js/branch/master/graph/badge.svg)](https://codecov.io/gh/taoky/pdf-annotate.js)

Annotation layer for [PDF.js](https://github.com/mozilla/pdf.js).

Combined fork of archived [instructure/pdf-annotate.js](https://github.com/instructure/pdf-annotate.js/) and deleted DynamicEnvironmentSystems/pdf-annotate.js. And forked from [Submitty](https://github.com/Submitty/Submitty)'s development branch.

This modified pdf-annotate.js fixes a lot of bugs in Submitty's branch, and adds some features (such as undo/redo) that we need in [Papera](https://github.com/MS-ASE-2020/team-ai-research) -- a software-enginnering class project.

I cannot promise to continue maintaining this after class ends, but it's welcome to create issue/pr if you find something wrong. pdf-annotate.js is buggy and broken compared with commerical and expensive PDF javascript libraries, but it is the best open-source PDF annotation javascript library working with PDF.js you can find on the web (especially the version maintained here, at least in 2020 it is).

## Objectives

- Provide a low level annotation layer for [PDF.js](https://github.com/mozilla/pdf.js).
- Optional high level UI for managing annotations.
- Agnostic of backend, just supply your own `StoreAdapter` to fetch/store data.
- Prescribe annotation format.

## Example

```js
import pdfjsLib from 'pdfjs-dist/build/pdf';
import PDFJSAnnotate from 'pdfjs-annotate';

const { UI } = PDFJSAnnotate;
const VIEWER = document.getElementById('viewer');
const RENDER_OPTIONS = {
  documentId: 'MyPDF.pdf',
  pdfDocument: null,
  scale: 1,
  rotate: 0
};

pdfjsLib.workerSrc = 'pdf.worker.js';
PDFJSAnnotate.setStoreAdapter(PDFJSAnnotate.LocalStoreAdapter);

pdfjsLib.getDocument(RENDER_OPTIONS.documentId).promise.then((pdf) => {
  RENDER_OPTIONS.pdfDocument = pdf;
  VIEWER.appendChild(UI.createPage(1));
  UI.renderPage(1, RENDER_OPTIONS);
});
```

See [/web](https://github.com/taoky/pdf-annotate.js/tree/master/web) for an example web client for annotating PDFs.

## Documentation

[View the docs](https://github.com/taoky/pdf-annotate.js/tree/master/docs).

## Developing

```bash
# clone the repo
$ git clone https://github.com/taoky/pdf-annotate.js.git
$ cd pdf-annotate.js

# intall dependencies
$ npm install

# start example server
$ npm start
$ open http://127.0.0.1:8080

# run tests
$ npm test

# lint the code
$ npm run lint
```
