## StoreAdapter

The `StoreAdapter` is an abstract class that will need to be implemented for fetching annotation data. An unimplemented instance of `StoreAdapter` is used as the default adapter. Any call to an umimplemented adapter will result in an `Error` being thrown.

**Usage**

```js
let MyStoreAdapter = new PDFJSAnnotate.StoreAdapter({
  getAnnotations(documentId, pageNumber) {
    /* ... */
  },

  getAnnotation(documentId, annotationId) {
    /* ... */
  },

  addAnnotation(documentId, pageNumber, annotation) {
    /* ... */
  },

  editAnnotation(documentId, pageNumber, annotation) {
    /* ... */
  },

  deleteAnnotation(documentId, annotationId) {
    /* ... */
  },

  addComment(documentId, annotationId, content) {
    /* ... */
  },

  deleteComment(documentId, commentId) {
    /* ... */
  },

  undo(documentId) {
    /* ... */
  },

  redo(documentId) {
    /* ... */
  },

  clearHistory(documentId) {
    /* ... */
  }
});
```

**Table of Contents**

- [StoreAdapter](#storeadapter)
  - [`getAnnotations()`](#getannotations)
  - [`getAnnotation()`](#getannotation)
  - [`addAnnotation()`](#addannotation)
  - [`editAnnotation()`](#editannotation)
  - [`deleteAnnotation()`](#deleteannotation)
  - [`addComment()`](#addcomment)
  - [`deleteComment()`](#deletecomment)
  - [`undo()`](#undo)
  - [`redo()`](#redo)
  - [`clearHistory()`](#clearhistory)

---

### `getAnnotations()`

Get all the annotations for a specific page within a document

**Syntax**

```js
let promise = adapter.getAnnotations(documentId, pageNumber);
```

**Parameters**

| parameter    | description                         |
| ------------ | ----------------------------------- |
| `documentId` | The ID of the document              |
| `pageNumber` | The page number within the document |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Object`
- rejected: `Error`

The fulfilled object will contain the following properties:

| property      | description                                  |
| ------------- | -------------------------------------------- |
| `documentId`  | `String` The ID of the document              |
| `pageNumer`   | `Number` The page number within the document |
| `annotations` | `Array` The annotations for the page         |

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .getAnnotations("example.pdf", 1)
  .then(
    (data) => {
      console.log(data.documentId); // "example.pdf"
      console.log(data.pageNumber); // 1
      console.log(data.annotations); // Array
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `getAnnotation()`

Get a specific annotation

**Syntax**

```js
let promise = adapter.getAnnotation(documentId, annotationId);
```

**Parameters**

| parameter      | description              |
| -------------- | ------------------------ |
| `documentId`   | The ID of the document   |
| `annotationId` | The ID of the annotation |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Object` The annotation
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .getAnnotation("example.pdf", "ef158e68-c54c-4c4d-b10c-7bc8c0c7fe7c")
  .then(
    (annotation) => {
      console.log(annotation); // Object
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `addAnnotation()`

Add an annotation to a document

**Syntax**

```js
let promise = adapter.addAnnotation(documentId, pageNumber, annotation);
```

**Parameters**

| parameter    | description                            |
| ------------ | -------------------------------------- |
| `documentId` | The ID of the document                 |
| `pageNumber` | The page number within the document    |
| `annotation` | The JSON definition for the annotation |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Object` The newly added annotation
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .addAnnotation("example.pdf", 1, {
    type: "area",
    width: 100,
    height: 50,
    x: 75,
    y: 75,
  })
  .then(
    (annotation) => {
      console.log(annotation); // Object
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `editAnnotation()`

Edit an annotation

**Syntax**

```js
let promise = adapter.editAnnotation(documentId, pageNumber, annotation);
```

**Parameters**

| parameter    | description                            |
| ------------ | -------------------------------------- |
| `documentId` | The ID of the document                 |
| `pageNumber` | The page number within the document    |
| `annotation` | The JSON definition for the annotation |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Object` The updated annotation
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .editAnnotation("example.pdf", 1, {
    uuid: "ef158e68-c54c-4c4d-b10c-7bc8c0c7fe7c",
    type: "area",
    width: 100,
    height: 50,
    x: 250,
    y: 100,
  })
  .then(
    (annotation) => {
      console.log(annotation); // Object
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `deleteAnnotation()`

Delete an annotation

**Syntax**

```js
let promise = adapter.deleteAnnotation(documentId, annotationId);
```

**Parameters**

| parameter      | description              |
| -------------- | ------------------------ |
| `documentId`   | The ID of the document   |
| `annotationId` | The ID of the annotation |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Boolean`
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .deleteAnnotation("example.pdf", "ef158e68-c54c-4c4d-b10c-7bc8c0c7fe7c")
  .then(
    () => {
      console.log("deleted");
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `addComment()`

Add a comment to an annotation

**Syntax**

```js
let promise = adapter.addComment(documentId, annotationId, content);
```

**Parameters**

| parameter      | description                |
| -------------- | -------------------------- |
| `documentId`   | The ID of the document     |
| `annotationId` | The ID of the annotation   |
| `content`      | The content of the comment |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Object` The newly added comment
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .addComment(
    "example.pdf",
    "ef158e68-c54c-4c4d-b10c-7bc8c0c7fe7c",
    "Hello world!"
  )
  .then(
    (comment) => {
      console.log(comment); // Object
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `deleteComment()`

Delete a comment

**Syntax**

```js
let promise = adapter.deleteComment(documentId, commentId);
```

**Parameters**

| parameter    | description            |
| ------------ | ---------------------- |
| `documentId` | The ID of the document |
| `commentId`  | The ID of the comment  |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Boolean`
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .deleteComment("example.pdf", "8ce957c4-90fa-475b-bd5c-ae9d5ab7c0ae")
  .then(
    () => {
      console.log("deleted");
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `undo()`

The undo/redo functionalites require the object `history` in `StoreAdapter` maintained properly by the adapter.

An example of `history`:

```js
{
  "example.pdf": {
    "record": [
      [
        {
          "type": "area",
          "x": 69,
          "y": 44,
          "width": 140,
          "height": 62.66666666666666,
          "class": "Annotation",
          "uuid": "bae144ef-69ec-4c6f-a33d-4c8a45b9483b",
          "page": 1
        },
        {
          "type": "highlight",
          "color": "FFFF00",
          "rectangles": [
            {
              "x": 277.3222249348958,
              "y": 76.35556030273438,
              "width": 42.53333536783856,
              "height": 20.66666666666667
            }
          ],
          "class": "Annotation",
          "uuid": "8b164e67-5b24-47ac-a1f7-5780cfe33251",
          "page": 1
        }
      ],
      [
        {
          "type": "area",
          "x": 77,
          "y": 60.666666666666664,
          "width": 140,
          "height": 62.66666666666666,
          "class": "Annotation",
          "uuid": "bae144ef-69ec-4c6f-a33d-4c8a45b9483b",
          "page": 1
        },
        {
          "type": "highlight",
          "color": "FFFF00",
          "rectangles": [
            {
              "x": 277.3222249348958,
              "y": 76.35556030273438,
              "width": 42.53333536783856,
              "height": 20.66666666666667
            }
          ],
          "class": "Annotation",
          "uuid": "8b164e67-5b24-47ac-a1f7-5780cfe33251",
          "page": 1
        }
      ]
    ],
    "idx": 1
  }
}
```

Here `idx` is the current status index. When undoing/redoing, the `idx` changes and the annotation on screen should be updated.

**Syntax**

```js
let promise = adapter.undo(documentId);
```

**Parameters**

| parameter    | description            |
| ------------ | ---------------------- |
| `documentId` | The ID of the document |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Boolean`
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .undo("example.pdf")
  .then(
    () => {
      console.log("undone");
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `redo()`

**Syntax**

```js
let promise = adapter.redo(documentId);
```

**Parameters**

| parameter    | description            |
| ------------ | ---------------------- |
| `documentId` | The ID of the document |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Boolean`
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .redo("example.pdf")
  .then(
    () => {
      console.log("redone");
    },
    (error) => {
      console.log(error.message);
    }
  );
```

### `clearHistory()`

Clear the editing history (`history[doc]`) in adapter.

**Syntax**

```js
let promise = adapter.clearHistory(documentId);
```

**Parameters**

| parameter    | description            |
| ------------ | ---------------------- |
| `documentId` | The ID of the document |

**Returns**

`Promise`

A settled Promise will be either:

- fulfilled: `Boolean`
- rejected: `Error`

**Usage**

```js
PDFJSAnnotate.getStoreAdapter()
  .clearHistory("example.pdf")
  .then(
    () => {
      console.log("history cleared");
    },
    (error) => {
      console.log(error.message);
    }
  );
```
