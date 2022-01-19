## PDFJSAnnotate

`PDFJSAnnotate` is the object that will be imported into your project. It contains all the other functions and objects that you will be working with.

**Table of Contents**

- [PDFJSAnnotate](#pdfjsannotate)
  - [`render()`](#render)
  - [`getAnnotations()`](#getannotations)
  - [`setStoreAdapter()`](#setstoreadapter)
  - [`getStoreAdapter()`](#getstoreadapter)
  - [`StoreAdapter`](#storeadapter)
  - [LocalStoreAdapter](#localstoreadapter)
  - [LocalUserStoreAdapter](#localuserstoreadapter)
  - [`UI`](#ui)

---

### `render()`

This is the main entry point into `PDFJSAnnotate`. It is used to render annotation data to an `SVGElement`.

**Syntax**

```js
let promise = PDFJSAnnotate.render(svg, viewport, annotations);
```

**Parameters**

| parameter     | description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `svg`         | The SVG node that the annotations should be rendered to                                                                  |
| `viewport`    | The viewport data that is returned from `PDFJS.getDocument(documentId).getPage(pageNumber).getViewPort(scale, rotation)` |
| `annotations` | The annotation data that is returned from `PDFJSAnnotation.getAnnotations(documentId, pageNumber)`                       |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `SVGElement`
- rejected: `Error`

### `getAnnotations()`

This is a helper for fetching annotations.

See [StoreAdapter.getAnnotations()](https://github.com/Submitty/pdf-annotate.js/blob/master/docs/api/StoreAdapter.md#getannotations).

### `setStoreAdapter()`

Sets the implementation of the `StoreAdapter` to be used by `PDFJSAnnotate`.

**Syntax**

```js
PDFJSAnnotate.setStoreAdapter(adapter);
```

**Parameters**

| parameter | description                                 |
| --------- | ------------------------------------------- |
| `adapter` | The StoreAdapter implementation to be used. |

See [StoreAdapter](https://github.com/Submitty/pdf-annotate.js/blob/master/docs/api/StoreAdapter.md).

### `getStoreAdapter()`

Gets the implementation of `StoreAdapter` being used by `PDFJSAnnotate`.

**Syntax**

```js
let adapter = PDFJSAnnotate.getStoreAdapter();
```

**Returns**

`StoreAdapter`

### `StoreAdapter`

An abstract class that describes how `PDFJSAnnotate` communicates with your backend.

See [StoreAdapter](https://github.com/Submitty/pdf-annotate.js/blob/master/docs/api/StoreAdapter.md).

### LocalStoreAdapter

An implementation of `StoreAdapter` that uses `localStorage` as the backend. This is useful for prototyping or testing.

**Usage**

```js
PDFJSAnnotate.setStoreAdapter(new PDFJSAnnotate.LocalStoreAdapter());
```

### LocalUserStoreAdapter

An implementation of `StoreAdapter` that uses `localStorage` as the backend. And also, it uses a `userId` variable to differentiate between users.

### `UI`

This object contains helper functions for managing UI interactions for creating, editing, and deleting annotations.

See [UI](https://github.com/Submitty/pdf-annotate.js/blob/master/docs/api/UI.md).
