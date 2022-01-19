## UI

`UI` is the object that enables user interactions for management of annotations in the browser

**Table of Contents**

- [UI](#ui)
  - [`addEventListener()`](#addeventlistener)
  - [`removeEventListener()`](#removeeventlistener)
  - [`disableEdit()`](#disableedit)
  - [`enableEdit()`](#enableedit)
  - [`disablePen()`](#disablepen)
  - [`enablePen()`](#enablepen)
  - [`setPen()`](#setpen)
  - [`disablePoint()`](#disablepoint)
  - [`enablePoint()`](#enablepoint)
  - [`disableRect()`](#disablerect)
  - [`enableRect()`](#enablerect)
  - [`disableText()`](#disabletext)
  - [`enableText()`](#enabletext)
  - [`setText()`](#settext)
  - [`enableUI()`](#enableui)
  - [`disableUI()`](#disableui)
  - [`rerenderAnnotations()`](#rerenderannotations)
  - [`no-annotation` CSS class](#no-annotation-css-class)

---

### `addEventListener()`

Adds an event handler to handle a specific type of event

**Syntax**

```js
UI.addEventListener(type, handler);
```

**Parameters**

| parameter | description                                  |
| --------- | -------------------------------------------- |
| `type`    | The type of event that will be subscribed to |
| `handler` | The function that will handle the event      |

Types of events:

- annotation:blur
- annotation:click
- annotation:add
- annotation:edit
- annotation:delete
- comment:add
- comment:delete

### `removeEventListener()`

Removes an event handler from handling a specific type of event

**Syntax**

```js
UI.removeEventListener(type, handler);
```

**Parameters**

| parameter | description                                      |
| --------- | ------------------------------------------------ |
| `type`    | The type of event that will be unsubscribed from |
| `handler` | The function that handled the event              |

### `disableEdit()`

Disables the ability to edit annotations from the UI

**Syntax**

```js
UI.disableEdit();
```

### `enableEdit()`

Enables the ability to edit annoations from the UI

**Syntax**

```js
UI.enableEdit();
```

### `disablePen()`

Disables the ability to draw with the pen in the UI

**Syntax**

```js
UI.disablePen();
```

### `enablePen()`

Enables the ability to draw with the pen in the UI

**Syntax**

```js
UI.enablePen();
```

### `setPen()`

Sets the size and color of the pen

**Syntax**

```js
UI.setPen([size[, color]])
```

**Parameters**

| parameter | description                                 |
| --------- | ------------------------------------------- |
| `size`    | The size of the pen (defaults to 12)        |
| `color`   | The color of the pen (defaults to "000000") |

### `disablePoint()`

Disables the ability to create a point annotation from the UI

**Syntax**

```js
UI.disablePoint();
```

### `enablePoint()`

Enables the ability to create a point annotation from the UI

**Syntax**

```js
UI.enablePoint();
```

### `disableRect()`

Disables the ability to create a rectangular annotation from the UI

**Syntax**

```js
UI.disableRect();
```

### `enableRect()`

Enables the ability to create a rectangular annotation from the UI

**Syntax**

```js
UI.enableRect(type);
```

**Parameters**

| parameter | description                                                  |
| --------- | ------------------------------------------------------------ |
| `type`    | The type of rectangle (one of area, highlight, or strikeout) |

### `disableText()`

Disables the ability to enter free form text from the UI

**Syntax**

```js
UI.disableText();
```

### `enableText()`

Enables the ability to enter free form text from the UI

**Syntax**

```js
UI.enableText();
```

### `setText()`

Sets the size and color of the text

**Syntax**

```js
UI.setText([size[, color]])
```

**Parameters**

| parameter | description                                  |
| --------- | -------------------------------------------- |
| `size`    | The size of the text (defaults to 12)        |
| `color`   | The color of the text (defaults to "000000") |

### `enableUI()`

Enable annotations to be selected.

**Syntax**

```js
UI.enableUI();
```

### `disableUI()`

Disable annotations and they cannot be selected.

**Syntax**

```js
UI.disableUI();
```

### `rerenderAnnotations()`

Re-render annotations on specific page number.

**Syntax**

```js
UI.rerenderAnnotations(pageNumber, renderOptions);
```

**Parameters**

| parameter       | description                    |
| --------------- | ------------------------------ |
| `pageNumber`    | The page number to be rendered |
| `renderOptions` | The options for rendering      |

### `no-annotation` CSS class

`no-annotation` CSS class should be assigned to elements that may be overlapped with the PDF annotation layer. Otherwise annotations may accidentally be moved/created when clicking on the above HTML layer.
