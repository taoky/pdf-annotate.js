function DefaultTextLayerFactory() {}
DefaultTextLayerFactory.prototype.createTextLayerBuilder = function() {
  return {
    setTextContent: function() {},
    render: function() {}
  };
};

class EventBus {
  constructor(options) {
    this._listeners = Object.create(null);
  }

  on(eventName, listener) {}

  off(eventName, listener) {}

  dispatch(eventName) {}

  _on(eventName, listener, options = null) {}

  _off(eventName, listener, options = null) {}
}

export default function mockPDFJSViewer() {
  return {
    DefaultTextLayerFactory,
    EventBus
  };
};
