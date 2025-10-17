window = (function(){
  var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


  function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 }
    }), e && Object.setPrototypeOf(t, e) }
  Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
  });
  var v_new_toggle = true
  var v_console_logger = console.log
  var v_allow_types = ["string", "number", "boolean"]
  console.log=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "log")
  console.debug=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "debug")
  console.warn=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "warn")
  console.info=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "info")
  var v_console_log = function(){}
  var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
  var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


  Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
  Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
  Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
  Document = v_saf(function Document(){;}); _inherits(Document, Node)
  HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
  Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
  HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
  HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
  HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
  HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
  Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
  PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
    this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
    this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
    this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
  Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
  MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
  WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    function WebGLBuffer(){}
    function WebGLProgram(){}
    function WebGLShader(){}
    this._toggle = {}
    this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
    this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
    this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
    this.getSupportedExtensions = function(){
      v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
      return [
        "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
        "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
        "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
        "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
        "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
        "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
      ]
    }
    var self = this
    this.getExtension = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
      class WebGLDebugRendererInfo{
        get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
        get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
      }
      class EXTTextureFilterAnisotropic{}
      class WebGLLoseContext{
        loseContext(){}
        restoreContext(){}
      }
      if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
      if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
      if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
      else{ var r = new WebGLDebugRendererInfo }
      return r
    }
    this.getParameter = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
      if (this._toggle[key]){
        if (key == 37445){ return "Google Inc. (NVIDIA)" }
        if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
      }else{
        if (key == 33902){ return new Float32Array([1,1]) }
        if (key == 33901){ return new Float32Array([1,1024]) }
        if (key == 35661){ return 32 }
        if (key == 34047){ return 16 }
        if (key == 34076){ return 16384 }
        if (key == 36349){ return 1024 }
        if (key == 34024){ return 16384 }
        if (key == 34930){ return 16 }
        if (key == 3379){ return 16384 }
        if (key == 36348){ return 30 }
        if (key == 34921){ return 16 }
        if (key == 35660){ return 16 }
        if (key == 36347){ return 4095 }
        if (key == 3386){ return new Int32Array([32767, 32767]) }
        if (key == 3410){ return 8 }
        if (key == 7937){ return "WebKit WebGL" }
        if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
        if (key == 3415){ return 0 }
        if (key == 7936){ return "WebKit" }
        if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
        if (key == 3411){ return 8 }
        if (key == 3412){ return 8 }
        if (key == 3413){ return 8 }
        if (key == 3414){ return 24 }
        return null
      }
    }
    this.getContextAttributes = function(){
      v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
      return {
        alpha: true,
        antialias: true,
        depth: true,
        desynchronized: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
        xrCompatible: false,
      }
    }
    this.getShaderPrecisionFormat = function(a,b){
      v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
      function WebGLShaderPrecisionFormat(){}
      var r1 = v_new(WebGLShaderPrecisionFormat)
      r1.rangeMin = 127
      r1.rangeMax = 127
      r1.precision = 23
      var r2 = v_new(WebGLShaderPrecisionFormat)
      r2.rangeMin = 31
      r2.rangeMax = 30
      r2.precision = 0
      if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
      if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
      if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
      if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
      throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
  CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
  PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
  PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
  PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
  PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
  PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
  PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
  PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
  PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
  PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
  HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
  HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
  HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
  XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
  XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
  Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
  TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
  Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
  PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
  Object.defineProperties(Window.prototype, {
    PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Screen.prototype, {
    availWidth: {"enumerable":true,"configurable":true,"get":function(){return 2560},"set":function(){return true}},
    availHeight: {"enumerable":true,"configurable":true,"get":function(){return 1049},"set":function(){return true}},
    width: {"enumerable":true,"configurable":true,"get":function(){return 2560},"set":function(){return true}},
    height: {"enumerable":true,"configurable":true,"get":function(){return 1080},"set":function(){return true}},
    colorDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    pixelDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    availLeft: {"enumerable":true,"configurable":true,"get":function(){return -495},"set":function(){return true}},
    availTop: {"enumerable":true,"configurable":true,"get":function(){return -1049},"set":function(){return true}},
    isExtended: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Node.prototype, {
    nodeType: {"enumerable":true,"configurable":true,"get":function(){return 9},"set":function(){return true}},
    nodeName: {"enumerable":true,"configurable":true,"get":function(){return "#document"},"set":function(){return true}},
    baseURI: {"enumerable":true,"configurable":true,"get":function(){return "https://www.google.com.hk/search?q=%E7%88%B1%E6%83%85%E5%85%AC&sei=1OXwaMCgO5S05NoPjNHX4Qc"},"set":function(){return true}},
    isConnected: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
    COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
    NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Document.prototype, {
    URL: {"enumerable":true,"configurable":true,"get":function(){return "https://www.google.com.hk/search?q=%E7%88%B1%E6%83%85%E5%85%AC&sei=1OXwaMCgO5S05NoPjNHX4Qc"},"set":function(){return true}},
    documentURI: {"enumerable":true,"configurable":true,"get":function(){return "https://www.google.com.hk/search?q=%E7%88%B1%E6%83%85%E5%85%AC&sei=1OXwaMCgO5S05NoPjNHX4Qc"},"set":function(){return true}},
    compatMode: {"enumerable":true,"configurable":true,"get":function(){return "CSS1Compat"},"set":function(){return true}},
    characterSet: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    charset: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    inputEncoding: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    contentType: {"enumerable":true,"configurable":true,"get":function(){return "text/html"},"set":function(){return true}},
    xmlStandalone: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    domain: {"enumerable":true,"configurable":true,"get":function(){return "www.google.com.hk"},"set":function(){return true}},
    referrer: {"enumerable":true,"configurable":true,"get":function(){return "https://www.google.com/"},"set":function(){return true}},
    lastModified: {"enumerable":true,"configurable":true,"get":function(){return "10/17/2025 00:12:42"},"set":function(){return true}},
    readyState: {"enumerable":true,"configurable":true,"get":function(){return "complete"},"set":function(){return true}},
    title: {"enumerable":true,"configurable":true,"get":function(){return "爱情公 - Google 搜索"},"set":function(){return true}},
    dir: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    designMode: {"enumerable":true,"configurable":true,"get":function(){return "off"},"set":function(){return true}},
    fgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    linkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    vlinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    alinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    bgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    hidden: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    visibilityState: {"enumerable":true,"configurable":true,"get":function(){return "hidden"},"set":function(){return true}},
    wasDiscarded: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    prerendering: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitVisibilityState: {"enumerable":true,"configurable":true,"get":function(){return "hidden"},"set":function(){return true}},
    webkitHidden: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    fullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    fullscreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitIsFullScreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitFullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    pictureInPictureEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    childElementCount: {"enumerable":true,"configurable":true,"get":function(){return 1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Navigator.prototype, {
    vendorSub: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    productSub: {"enumerable":true,"configurable":true,"get":function(){return "20030107"},"set":function(){return true}},
    vendor: {"enumerable":true,"configurable":true,"get":function(){return "Google Inc."},"set":function(){return true}},
    maxTouchPoints: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    pdfViewerEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    hardwareConcurrency: {"enumerable":true,"configurable":true,"get":function(){return 8},"set":function(){return true}},
    cookieEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    appCodeName: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla"},"set":function(){return true}},
    appName: {"enumerable":true,"configurable":true,"get":function(){return "Netscape"},"set":function(){return true}},
    appVersion: {"enumerable":true,"configurable":true,"get":function(){return "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"},"set":function(){return true}},
    platform: {"enumerable":true,"configurable":true,"get":function(){return "MacIntel"},"set":function(){return true}},
    product: {"enumerable":true,"configurable":true,"get":function(){return "Gecko"},"set":function(){return true}},
    userAgent: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"},"set":function(){return true}},
    language: {"enumerable":true,"configurable":true,"get":function(){return "zh-CN"},"set":function(){return true}},
    languages: {"enumerable":true,"configurable":true,"get":function(){return ["zh-CN","zh"]},"set":function(){return true}},
    onLine: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    webdriver: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deprecatedRunAdAuctionEnforcesKAnonymity: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deviceMemory: {"enumerable":true,"configurable":true,"get":function(){return 8},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CSSStyleDeclaration.prototype, {
    [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(WebGLRenderingContext.prototype, {
    DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
    COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
    LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
    DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
    DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
    FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
    FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
    FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
    BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
    STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
    STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
    FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
    BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
    FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
    BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
    DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
    INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
    INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
    INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
    OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
    CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
    CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
    LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
    FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
    VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
    COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
    COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
    PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
    MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
    SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
    RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
    GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
    BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
    ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
    SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
    COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
    DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
    FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
    NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
    GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
    BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
    SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
    INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
    FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
    ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
    RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
    RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
    SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
    DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
    LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
    VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
    ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
    SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
    NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
    LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
    EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
    LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
    GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
    NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
    GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
    ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
    KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
    REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
    INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
    DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
    INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
    INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
    DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
    VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
    RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
    VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
    NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
    LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
    REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
    CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
    MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
    BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
    COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
    LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
    HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
    LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
    HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
    RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
    RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
    RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
    MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
    INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
    CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
    BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
    RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
    RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Performance.prototype, {
    timeOrigin: {"enumerable":true,"configurable":true,"get":function(){return 1760629311362.7},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEntry.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceResourceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceObserver.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceObserverEntryList.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Image.prototype, {
    [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLMediaElement.prototype, {
    NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequest.prototype, {
    OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DOMTokenList.prototype, {
    [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Event.prototype, {
    CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
  })




  if (typeof __dirname != 'undefined'){ __dirname = undefined }
  if (typeof __filename != 'undefined'){ __filename = undefined }
  if (typeof require != 'undefined'){ require = undefined }
  if (typeof exports != 'undefined'){ exports = undefined }
  if (typeof module != 'undefined'){ module = undefined }
  if (typeof Buffer != 'undefined'){ Buffer = undefined }
  var avoid_log = ['Symbol','Object','Number','RegExp','Boolean','String','constructor']
  var __globalThis__ = typeof global != 'undefined' ? global : this
  var window = new Proxy(v_new(Window), {
    get(a,b){ if(b=='global'){return}
      var r = a[b] || __globalThis__[b]
      if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
        v_console_log('  [*] [window get '+b+'] ==>', r)
      }
      return r
    },
    set(a,b,c){
      if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
      if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
      if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
      __globalThis__[b] = a[b] = c
      return true
    },
  })
  function v_proxy(obj, name, func){
    return new Proxy(obj, {
      get(a,b){ if(b=='global'){return}
        var r = a[b]
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' get '+b+'] ==>', r)
        }
        if (func && typeof r == 'undefined'){
          r = func(name)
        }
        return r
      },
      set(a,b,c){
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' set '+b+'] <--', c)
        }
        a[b] = c
        return true
      },
    })
  }
  var v_hasOwnProperty = Object.prototype.hasOwnProperty
  Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
    var r;
    if (this === window){ r = v_hasOwnProperty.apply(__globalThis__, arguments) }
    else{ r = v_hasOwnProperty.apply(this, arguments) }
    v_console_log('  [*] [hasOwnProperty]', this===window?window:this, [].slice.call(arguments), r)
    return r
  })
  Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
  Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
  Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
  window.parent = window
  window.top = window
  window.frames = window
  window.self = window
  window.document = v_proxy(v_new(HTMLDocument), "document")
  window.location = v_proxy(v_new(Location), "location")
  window.navigator = v_proxy(v_new(Navigator), "navigator")
  window.screen = v_proxy(v_new(Screen), "screen")
  window.clientInformation = navigator
  window.performance = v_proxy(v_new(Performance), "performance")
  window.sessionStorage = v_proxy(v_new(Storage), "sessionStorage")
  window.localStorage = v_proxy(v_new(Storage), "localStorage")
  window.__smm_0 = v_proxy(v_new(Window), "__smm_0")

  var win = {
    window: window,
    frames: window,
    parent: window,
    self: window,
    top: window,
  }
  function v_repair_this(){
    win = {
      window: __globalThis__,
      frames: __globalThis__,
      parent: __globalThis__,
      self: __globalThis__,
      top: __globalThis__,
    }
  }
  Object.defineProperties(window, {
    window: {get:function(){return win.window},set:function(e){return true}},
    frames: {get:function(){return win.frames},set:function(e){return true}},
    parent: {get:function(){return win.parent},set:function(e){return true}},
    self:   {get:function(){return win.self},  set:function(e){return true}},
    top:    {get:function(){return win.top},   set:function(e){return true}},
  })

  function _createElement(name){
    var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLAnchorElement":["a"],"HTMLImageElement":["img"],"HTMLFontElement":["font"],"HTMLOutputElement":["output"],"HTMLAreaElement":["area"],"HTMLInputElement":["input"],"HTMLFormElement":["form"],"HTMLParagraphElement":["p"],"HTMLAudioElement":["audio"],"HTMLLabelElement":["label"],"HTMLFrameElement":["frame"],"HTMLParamElement":["param"],"HTMLBaseElement":["base"],"HTMLLegendElement":["legend"],"HTMLFrameSetElement":["frameset"],"HTMLPictureElement":["picture"],"HTMLBodyElement":["body"],"HTMLLIElement":["li"],"HTMLHeadingElement":["h1","h2","h3","h4","h5","h6"],"HTMLPreElement":["listing","pre","xmp"],"HTMLBRElement":["br"],"HTMLLinkElement":["link"],"HTMLHeadElement":["head"],"HTMLProgressElement":["progress"],"HTMLButtonElement":["button"],"HTMLMapElement":["map"],"HTMLHRElement":["hr"],"HTMLQuoteElement":["blockquote","q"],"HTMLCanvasElement":["canvas"],"HTMLMarqueeElement":["marquee"],"HTMLHtmlElement":["html"],"HTMLScriptElement":["script"],"HTMLDataElement":["data"],"HTMLMediaElement":[],"HTMLIFrameElement":["iframe"],"HTMLTimeElement":["time"],"HTMLDataListElement":["datalist"],"HTMLMenuElement":["menu"],"HTMLSelectElement":["select"],"HTMLTitleElement":["title"],"HTMLDetailsElement":["details"],"HTMLMetaElement":["meta"],"HTMLSlotElement":["slot"],"HTMLTableRowElement":["tr"],"HTMLDialogElement":["dialog"],"HTMLMeterElement":["meter"],"HTMLSourceElement":["source"],"HTMLTableSectionElement":["thead","tbody","tfoot"],"HTMLDirectoryElement":["dir"],"HTMLModElement":["del","ins"],"HTMLSpanElement":["span"],"HTMLTemplateElement":["template"],"HTMLDivElement":["div"],"HTMLObjectElement":["object"],"HTMLStyleElement":["style"],"HTMLTextAreaElement":["textarea"],"HTMLDListElement":["dl"],"HTMLOListElement":["ol"],"HTMLTableCaptionElement":["caption"],"HTMLTrackElement":["track"],"HTMLEmbedElement":["embed"],"HTMLOptGroupElement":["optgroup"],"HTMLTableCellElement":["th","td"],"HTMLUListElement":["ul"],"HTMLFieldSetElement":["fieldset"],"HTMLOptionElement":["option"],"HTMLTableColElement":["col","colgroup"],"HTMLUnknownElement":[],"HTMLTableElement":["table"],"HTMLVideoElement":["video"]}
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
      if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
        if (!window[htmlmapkeys[i]]){
          break
        }
        ret = v_new(window[htmlmapkeys[i]])
        break
      }
    }
    if (!ret){ ret = v_proxy(v_new(HTMLUnknownElement), 'HTMLUnknownElement', function(a){return function(){v_console_log(a,...arguments)}}) }
    if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_proxy(v_new(CSSStyleDeclaration), 'style') }
    ret.v_tagName = name.toUpperCase()
    return ret
  }
  function init_cookie(cookie){
    var cache = (cookie || "").trim();
    if (!cache){
      cache = ''
    }else if (cache.charAt(cache.length-1) != ';'){
      cache += '; '
    }else{
      cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
      get: function() {
        var r = cache.slice(0,cache.length-2);
        v_console_log('  [*] document -> cookie[get]', r)
        return r
      },
      set: function(c) {
        v_console_log('  [*] document -> cookie[set]', c)
        var ncookie = c.split(";")[0].split("=");
        if (!ncookie.slice(1).join('')){
          return c
        }
        var key = ncookie[0].trim()
        var val = ncookie.slice(1).join('').trim()
        var newc = key+'='+val
        var flag = false;
        var temp = cache.split("; ").map(function(a) {
          if (a.split("=")[0] === key) {
            flag = true;
            return newc;
          }
          return a;
        })
        cache = temp.join("; ");
        if (!flag) {
          cache += newc + "; ";
        }
        return cache;
      }
    });
  }
  function v_hook_href(obj, name, initurl){
    var r = Object.defineProperty(obj, 'href', {
      get: function(){
        if (!(this.protocol) && !(this.hostname)){
          r = ''
        }else{
          r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
        }
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
        return r
      },
      set: function(href){
        href = href.trim()
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
        if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
        else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
        else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
        var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
        this.protocol = a[1] ? a[1] : "";
        this.hostname = a[2] ? a[2] : "";
        this.port     = a[3] ? a[3] : "";
        this.pathname = a[4] ? a[4] : "";
        this.search   = a[5] ? a[5] : "";
        this.hash     = a[6] ? a[6] : "";
        this.host     = this.hostname + (this.port?":"+this.port:"") ;
        this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
      }
    });
    if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
    return r
  }
  function v_hook_storage(){
    Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
    Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
    Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
    Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
    Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {get: function(){
      if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
    }})
    window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
    window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  }
  function v_init_document(){
    Document.prototype.documentElement = v_proxy(_createElement('html'), 'documentElement')
    Document.prototype.createElement = v_saf(function createElement(){ return v_proxy(_createElement(arguments[0]), 'createElement '+arguments[0]) })
    Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
    Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
      head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_proxy(v_head, 'document.head') }},
      body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_proxy(v_body, 'document.body') }},
    })
  }
  function v_init_canvas(){
    HTMLCanvasElement.prototype.getContext = function(){
      if (arguments[0]=='2d'){var r = v_proxy(v_new(CanvasRenderingContext2D), 'canvas2d', function(a){return function(){v_console_log(a,...arguments)}}); return r};
      if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_proxy(v_new(WebGLRenderingContext), 'webgl', function(a){return function(){v_console_log(a,...arguments)}}); r._canvas = this; return r};
      return null
    }
    HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
  }
  var v_start_stamp = +new Date
  var v_fake_stamp = +new Date
  function v_init_event_target(){
    v_events = {}
    function add_event(_this, x){
      if (!v_events[x[0]]){
        v_events[x[0]] = []
      }
      v_events[x[0]].push([_this, x[1].bind(_this)])
    }
    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
      if (type == 'click'){
        var m = new v_saf(function PointerEvent(){})
        m.pointerType = "mouse"
      }else{
        var m = new v_saf(function MouseEvent(){})
      }
      m.isTrusted = true
      m.type = type
      m.canBubble = canBubble
      m.cancelable = cancelable
      m.view = view
      m.detail = detail
      m.screenX = screenX; m.movementX = screenX
      m.screenY = screenY; m.movementY = screenY
      m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
      m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
      m.ctrlKey = ctrlKey
      m.altKey = altKey
      m.shiftKey = shiftKey
      m.metaKey = metaKey
      m.button = button
      m.relatedTarget = relatedTarget
      return m
    }
    function make_mouse(type, x, y){
      return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }
    function mouse_click(x, y){
      for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
      for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
      for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
    }
    var offr = Math.random()
    function make_touch(_this, type, x, y, timeStamp){
      var offx = Math.random()
      var offy = Math.random()
      var t = v_new(new v_saf(function Touch(){}))
      t = clientX = offx + x
      t = clientY = offy + y
      t = force = 1
      t = identifier = 0
      t = pageX = offx + x
      t = pageY = offy + y
      t = radiusX = 28 + offr
      t = radiusY = 28 + offr
      t = rotationAngle = 0
      t = screenX = 0
      t = screenY = 0
      var e = v_new(new v_saf(function TouchEvent(){}))
      e.isTrusted = true
      e.altKey = false
      e.bubbles = true
      e.cancelBubble = false
      e.cancelable = false
      e.changedTouches = e.targetTouches = e.touches = [t]
      e.composed = true
      e.ctrlKey = false
      e.currentTarget = null
      e.defaultPrevented = false
      e.detail = 0
      e.eventPhase = 0
      e.metaKey = false
      e.path = _this == window ? [window] : [_this, window]
      e.returnValue = true
      e.shiftKey = false
      e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
      e.srcElement = _this
      e.target = _this
      e.type = type
      e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
      e.view = window
      e.which = 0
      return e
    }
    function make_trace(x1, y1, x2, y2){
      // 贝塞尔曲线
      function step_len(x1, y1, x2, y2){
        var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
        return (ln / 10) ^ 0
      }
      var slen = step_len(x1, y1, x2, y2)
      if (slen < 3){
        return []
      }
      function factorial(x){
        for(var y = 1; x > 1;  x--) {
          y *= x
        }
        return y;
      }
      var lp = Math.random()
      var rp = Math.random()
      var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
      var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
      var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
      var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
      var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
      var N = points.length
      var n = N - 1
      var traces = []
      var step = slen
      for (var T = 0; T < step+1; T++) {
        var t = T*(1/step)
        var x = 0
        var y = 0
        for (var i = 0; i < N; i++) {
          var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
          x += points[i][0]*B
          y += points[i][1]*B
        }
        traces.push([x^0, y^0])
      }
      return traces
    }
    function touch(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
      }
      for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
    }
    function mouse_move(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
      }
    }
    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  }
  function v_init_Element_prototype(){
    Element.prototype.appendChild            = Element.prototype.appendChild            || v_saf(function appendChild(){v_console_log("  [*] Element -> appendChild[func]", [].slice.call(arguments));})
    Element.prototype.removeChild            = Element.prototype.removeChild            || v_saf(function removeChild(){v_console_log("  [*] Element -> removeChild[func]", [].slice.call(arguments));})
    Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
    Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
    Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
    Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
    Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
    Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
    Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
    Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
  }
  function v_init_HTMLElement(){
    try{
      Object.defineProperties(HTMLElement.prototype, {
        style: {set: undefined, enumerable: true, configurable: true, get: v_saf(function style(){v_console_log("  [*] HTMLElement -> style[get]", [].slice.call(arguments)); return this.v_style })},
      })
    }catch(e){
      v_console_log(e)
    }
  }
  function v_init_DOMTokenList_prototype(){
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
  }
  function v_init_CSSStyleDeclaration_prototype(){
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
  }
  function v_init_PointerEvent_prototype(){
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
  }
  function v_init_PerformanceTiming_prototype(){
    try{
      Object.defineProperties(PerformanceTiming.prototype, {
        connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
        connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
        domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
        domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
        domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
        domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
        domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
        domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
        domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
        fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
        loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
        loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
        navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
        redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
        redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
        requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
        responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
        responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
        secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
        unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
        unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
      })
    }catch(e){}
  }
  function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
  var atob_btoa = mk_atob_btoa()
  window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
  window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')
  window.postMessage = v_saf(function(){v_console_log('  [*] [postMessage]', arguments)}, 'postMessage')
  window.matchMedia = v_saf(function(){v_console_log('  [*] [matchMedia]', arguments); return v_proxy({}, 'matchMedia{}')}, 'matchMedia')

  init_cookie("")
  v_hook_href(window.location, 'location', "https://www.google.com.hk/search?q=%E7%88%B1%E6%83%85%E5%85%AC&sei=1OXwaMCgO5S05NoPjNHX4Qc")
  Location.prototype.toString = v_saf(function toString(){ return "https://www.google.com.hk/search?q=%E7%88%B1%E6%83%85%E5%85%AC&sei=1OXwaMCgO5S05NoPjNHX4Qc" })
  window.alert = v_saf(function alert(){})
  v_hook_storage()
  v_init_HTMLElement()
  v_init_document()
  v_init_canvas()
  v_init_event_target()
  v_init_Element_prototype()
  v_init_DOMTokenList_prototype()
  v_init_CSSStyleDeclaration_prototype()
  v_init_PointerEvent_prototype()
  v_init_PerformanceTiming_prototype()
  window.innerWidth = 762
  window.innerHeight = 958
  window.outerHeight = 958
  window.outerWidth = 2560
  window.isSecureContext = true
  window.origin = location.origin
  function v_getele(name, func){
    return null
  }
  function v_geteles(name, func){
    return null
  }
  var v_Date = Date;
  var v_base_time = +new Date;
  (function(){
    function ftime(){
      return new v_Date() - v_base_time + v_to_time
    }
    Date = function(_Date) {
      var bind = Function.bind;
      var unbind = bind.bind(bind);
      function instantiate(constructor, args) {
        return new (unbind(constructor, null).apply(null, args));
      }
      var names = Object.getOwnPropertyNames(_Date);
      for (var i = 0; i < names.length; i++) {
        if (names[i]in Date)
          continue;
        var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
        Object.defineProperty(Date, names[i], desc);
      }
      function Date() {
        var date = instantiate(_Date, [ftime()]);
        return date;
      }
      Date.prototype = _Date.prototype
      return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now(){ return ftime() })
  })();
  var v_to_time = +new v_Date
  // var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

  v_repair_this() // 修复 window 指向global
  v_new_toggle = false




  // v_console_log = function(){} // 关闭日志输出
  // setTimeout = function(){} // 关闭定时器
  // setInterval = function(){} // 关闭定时器
  return window

})();
Image = function (){}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjogMywic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJuYW1lcyI6WyJjbG9zdXJlRHluYW1pY0J1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEifQ==
!(function(){var v=function(F,p,X,L,x,g,V,P,I,w){{I=35;while(I!=49)if(I==41)I=(X+3&7)==1?98:78;else if(I==F)w=L,I=41;else{if(I==78)return w;if(I==98){if(V=(P=U.trustedTypes,x),P&&P.createPolicy){try{V=P.createPolicy(g,{createHTML:m,createScript:m,createScriptURL:m})}catch(y){if(U.console)U.console[L](y.message)}w=V}else w=V;I=78}else I==35?I=14:I==14&&(I=X-p&6?41:F)}}},U=this||self,m=function(F){return v.call(this,63,9,9,F)};(0,eval)(function(F,p){return(p=v(63,9,6,"error",null,"ks"))&&F.eval(p.createScript("1"))===1?function(X){return p.createScript(X)}:function(X){return""+X}}(U)(Array(Math.random()*7824|0).join("\n")+['//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjogMywic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJuYW1lcyI6WyJjbG9zdXJlRHluYW1pY0J1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEifQ==',
'(function(){/*',
'',
' Copyright Google LLC',
' SPDX-License-Identifier: Apache-2.0',
'*/',
'var UM=function(I,F,p,P,V,U,w,m,L,y,v){for(v=90;v!=70;)if(v==24){for(w in m=p,V.i){for(U=(L=V.i[w],p);U<L.length;U++)++m,Pw(15,P,11,L[U]);delete V.i[V.vD--,w]}v=23}else{if(v==23)return y;if(v==25)v=I;else if(v==84){a:{for(w=[P==typeof globalThis&&globalThis,U,(m=V,P==typeof window&&window),P==typeof self&&self,P==typeof global&&global];m<w.length;++m)if((L=w[m])&&L[p]==Math){y=L;break a}throw Error("Cannot find global object");}v=42}else v==I?v=(F+4&47)<F&&(F-9|53)>=F?72:16:v==16?v=(F>>1&6)>=4&&(F<<1&14)<6?24:23:v==72?(this.Y=this.Y,this.aB=this.aB,v=16):v==42?v=(F|56)==F?25:I:v==55?v=F-6<26&&(F-5&15)>=6?84:42:v==90&&(v=55)}},pG=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x){g=35;{X=69;while({})try{if(g==49)break;else if(g==63)this[this+""]=this,v=Promise.resolve(),g=41;else if(g==66)g=U&&w.G?65:17;else if(g==12)w.G=null,m=w.K.pop(),g=81;else if(g==87)X=69,F$(x,8,P,w),g=39;else if(g==75)g=w.K.length?12:34;else if(g==14)g=I>>2&3?41:63;else if(g==35)g=14;else if(g==65)L=w.G,L(function(){C(65,F,p,p,w)}),g=34;else if(g==39)X=69,g=66;else{if(g==78)return v;g==17?g=75:g==41?g=(I|6)>>3==1?98:78:g==34?(v=y,g=78):g==81?(X=92,y=X$(null,m,V,w),g=39):g==98&&(g=75)}}catch(a){if(X==69)throw a;X==92&&(x=a,g=87)}}},e=function(I,F,p,P,V,U,w,m){{m=31;while(m!=0){if(m==68)return w;if(m==94){if((V=(U=R.trustedTypes,p),U)&&U.createPolicy){try{V=U.createPolicy(P,{createHTML:mU,createScript:mU,createScriptURL:mU})}catch(L){if(R.console)R.console[F](L.message)}w=V}else w=V;m=68}else m==98?(n(F,p,P),P[LG]=2796,m=75):m==22?m=(I|8)==I?98:75:m==31?m=22:m==75&&(m=(I^3)&3?68:94)}}},Ww=function(I,F,p,P,V,U,w,m,L,y,v,X){for(v=68;v!=10;)if(v==5)X=(y=Sh[F.substring(0,3)+"_"])?y(F.substring(3),p,P,V,U,w,m,L):D7(p,F,3),v=56;else{if(v==43)return X;v==56?v=I+3>>4?43:35:v==65?v=(I<<1&15)<7&&I+2>>3>=2?75:37:v==68?v=65:v==37?v=(I|16)==I?5:56:v==75?(this.X=F,v=37):v==35&&(v=43)}},Z7=function(I,F,p,P,V,U,w,m,L,y,v,X){{v=74;while(v!=11)if(v==59)v=(F-9|53)<F&&(F-4|65)>=F?72:68;else if(v==25)U=window.btoa,v=2;else if(v==75)v=m<I.length?41:26;else if(v==2)v=U?80:76;else if(v==26)w+=w<<3,w^=w>>11,L=w+(w<<15)>>>0,V=new Number(L&(y=1<<p,(y|1)-3*(y&1)-2*~(y&1)+2*(y|-2))),V[0]=(L>>>p)%P,X=V,v=68;else{if(v==57)return X;v==23?v=(F|7)>>3==1?84:59:v==46?v=75:v==71?(X=p,v=98):v==44?v=27:v==68?v=F+9>=-40&&((F^16)&16)<2?25:98:v==78?(p=U(P).replace(/\\+/g,"-").replace(/\\//g,"_").replace(/=/g,""),v=71):v==72?(m=w=0,v=46):v==52?(p=I[hF],X=p instanceof eh?p:null,v=57):v==84?(X=!!(P=p.K6,-2*~I+~(P|I)+(P&~I)+(P|~I)),v=59):v==40?(m++,v=75):v==80?(P="",V=0,v=44):v==95?(P+=String.fromCharCode.apply(null,I.slice(V,V+8192)),v=64):v==64?(V+=8192,v=27):v==76?(p=void 0,v=71):v==74?v=23:v==41?(w+=I.charCodeAt(m),w+=w<<10,w=(U=w>>6,(w&U)+~U-(~w^U)+(~w&U)),v=40):v==98?v=F<<2&15?57:52:v==27&&(v=V<I.length?95:78)}}},Tj=function(I,F,p,P,V,U){for(U=I;U!=31;)if(U==62)U=F<<1&5?28:33;else{if(U==28)return V;U==33?U=28:U==I?U=52:U==52?U=F-4<<1>=F&&(F-8|15)<F?85:62:U==85&&(P.BD&&P.BD.forEach(p,void 0),U=62)}},kw=function(I,F,p,P,V,U,w,m,L){for(L=63;L!=3;)if(L==85)$w.call(this),p||Bw||(Bw=new JF),this.iq=void 0,this.Tc=this.Ac=false,this.fl=this.qI=this.W=this.cD=this.BD=null,L=43;else if(L==95)m=CG[P](CG.prototype,{prototype:p,console:p,replace:p,splice:p,document:p,parent:p,floor:p,propertyIsEnumerable:p,length:p,stack:p,call:p,pop:p}),L=7;else if(L==86)L=(F+6&8)<8&&F-5>=19?97:24;else if(L==24)L=(F<<1&10)==2?95:7;else{if(L==7)return m;L==34?L=(F<<1&16)<8&&F-9>>4>=3?85:43:L==97?(m=Math.floor(this.L()),L=24):L==6?(m=Z7(U,11,P)&&RD(P,U,28,2)!=V&&(!(w=P.hc,2*(U|p)-(w|U)+(w&~U)-(~w&U))||P.dispatchEvent(u7(50,19,I,16,8,1,V,U)))&&!P.Y,L=86):L==43?L=(F&15)==F?6:86:L==63&&(L=34)}},fG=function(I,F,p,P,V,U,w,m,L,y){for(L=84;L!=10;){if(L==25)return y;L==31?L=(p^31)&I?63:46:L==84?L=31:L==63?L=p-I<10&&p>>1>=0?62:25:L==46?(m=P,m^=m<<13,m^=m>>17,m=(w=m<<I,(m|0)-(m|w)+(m&~w)+F*(~m&w)),(m&=U)||(m=1),y=V^m,L=63):L==62&&(U=V,y=function(){return U<P.length?{done:false,value:P[U++]}:{done:true}},L=25)}},C=function(I,F,p,P,V,U,w,m,L,y,v){{v=49;while(v!=93){if(v==87)return y;if(v==61)v=I+4>>3==3?79:31;else if(v==16)v=I-9>>3==3?81:87;else if(v==81)jh.call(this),this.B=new eh(this),this.p6=this,this.hF=null,v=87;else if(v==46){a:if(typeof P==="string")y=typeof p!=="string"||p.length!=F?-1:P.indexOf(p,0);else{for(V=0;V<P.length;V++)if(V in P&&P[V]===p){y=V;break a}y=-1}v=16}else if(v==79)y=Math.floor(this.oB+(this.L()-this.bq)),v=31;else if(v==39){if(V.K.length){(V.J&&":TQR:TQR:"(),V.v$=p,V).J=true;try{m=V.L(),V.Cl=F,V.bq=m,V.Kl=F,V.Ll=m,w=pG(8,0,true,"~",4,p,V),L=P?0:10,U=V.L()-V.bq,V.oB+=U,V.dl&&V.dl(U-V.N,V.j,V.U,V.Cl),V.U=false,V.N=F,V.j=false,U<L||V.HD--<=F||(U=Math.floor(U),V.Gc.push(U<=254?U:254))}finally{V.J=false}y=w}v=61}else v==31?v=(I^58)>>4?16:46:v==22?v=(I&113)==I?39:61:v==49&&(v=22)}}},aD=function(I,F,p,P,V,U,w,m,L,y,v,X){{X=59;while(X!=48)if(X==44)this.src=p,this.i={},this.vD=0,X=18;else{if(X==4)return v;X==I?(m=gD,U in m?w.setAttribute(y,m[U]):w.removeAttribute(y),X=83):X==36?X=gD?I:7:X==59?X=78:X==64?(U=P.type,X=89):X==83?X=((F^50)&6)<4&&(F|6)>>3>=0?44:18:X==20?(Pw(15,true,10,P),X=60):X==80?X=V===""||V==void 0?36:68:X==91?(delete V.i[U],V.vD--,X=4):X==13?(Array.isArray(V)&&(V=V.join(" ")),y=p+U,X=80):X==68?(w.setAttribute(y,V),X=83):X==60?X=V.i[U].length==p?91:4:X==78?X=(F+3&7)==1?13:83:X==18?X=F-I<<1<F&&(F-3|59)>=F?64:4:X==89?X=U in V.i&&yj(22,P,24,p,V.i[U])?20:4:X==7&&(L={},gD=(L.atomic=false,L.autocomplete="none",L.dropeffect="none",L.haspopup=false,L.live="off",L.multiline=false,L.multiselectable=false,L.orientation="vertical",L.readonly=false,L.relevant="additions text",L.required=false,L.sort="none",L.busy=false,L.disabled=false,L[P]=false,L.invalid="false",L),X=I)}}},nG=function(I,F,p,P,V,U,w,m,L,y,v,X,g){{X=48;while(X!=55)if(X==52)X=(U=P)?45:83;else if(X==5)m=typeof U,w=m!=P?m:U?Array.isArray(U)?"array":m:"null",g=w==p||w==P&&typeof U.length==V,X=54;else if(X==28)g=this.n===0?0:Math.sqrt(this.WD/this.n),X=18;else if(X==12)w=(y=Object.getPrototypeOf(w.prototype))&&y.constructor,X=53;else if(X==83)w=this.constructor,X=44;else if(X==48)X=20;else if(X==84)b7.call(this,V),X=52;else if(X==I)X=(L=dD[m])?89:12;else{if(X==41)return g;X==45?(this.T=U,X=77):X==54?X=(F|72)==F?24:41:X==44?X=72:X==24?(g=P.classList?P.classList:sM(64,"string",41,p,P).match(/\\S+/g)||[],X=41):X==79?(U=L?typeof L.IB==="function"?L.IB():new L:null,X=45):X==20?X=(F&94)==F?28:18:X==93?X=(F-2^19)<F&&(F+6^14)>=F?5:54:X==18?X=(F|1)>>4?77:84:X==59?(v=function(x){return p.call(v.src,v.listener,x)},p=Qj,g=v,X=93):X==77?X=(F-6^21)<F&&(F+6^24)>=F?59:93:X==19?(m=Hw(6,5,w),X=I):X==72?X=w?19:79:X==53?X=72:X==89&&(X=79)}}},RD=function(I,F,p,P,V,U,w,m,L,y){for(L=68;L!=40;)if(L==68)L=61;else{if(L==75)return y;if(L==16)y=!!(V=I.Mh,P*(V|0)-(V|F)+~V-~F),L=75;else if(L==61)L=(p-8^2)<p&&(p-1^28)>=p?10:57;else if(L==57)L=p+5>>5<3&&(p-2&3)>=2?16:75;else if(L==10){a:{for(m=P;m<F.length;++m)if(w=F[m],!w.Da&&w.listener==V&&w.capture==!!I&&w.xn==U){y=m;break a}y=-1}L=57}}},Pw=function(I,F,p,P,V,U,w,m,L,y){{L=18;while(L!=0)if(L==I)P.Da=F,P.listener=null,P.proxy=null,P.src=null,P.xn=null,L=62;else if(L==4)m=V.classList.contains(U),L=76;else if(L==66)L=((p^3)&1)>=0&&(p+6&7)<4?I:62;else if(L==62)L=(p+5&45)>=p&&(p-5^18)<p?61:84;else{if(L==84)return y;L==76?(y=m,L=84):L==18?L=66:L==61?L=V.classList?4:12:L==12&&(w=nG(34,73,P,V),m=C(51,F,U,w)>=0,L=76)}}},KG=function(I,F,p,P,V,U,w,m,L,y,v,X){{X=99;while(X!=96)if(X==82)X=18;else if(X==81)X=18;else if(X==48)v=F&&F.parentNode?F.parentNode.removeChild(F):null,X=52;else if(X==70)X=50;else if(X==89)V=[],m=L=0,X=70;else if(X==7)L+=p,w=(P=w<<p,y=F[m],-2*~P+~y-2*(~P^y)+3*(~P|y)),X=82;else if(X==84)X=(I|4)>>3?52:48;else if(X==57)this[this+""]=this,X=84;else if(X==5)v=V,X=77;else if(X==18)X=L>7?58:6;else if(X==77)X=I-4>=10&&I+1>>5<2?57:84;else if(X==97)X=(I|8)==I?89:77;else if(X==99)X=97;else if(X==6)m++,X=50;else if(X==50)X=m<F.length?7:5;else{if(X==52)return v;X==58&&(L-=8,V.push((U=w>>L,255+(~U^255)-(~U|255))),X=81)}}},u7=function(I,F,p,P,V,U,w,m,L,y){for(L=58;L!=96;)if(L==65)L=(F|4)>=23&&(F+2&8)<1?44:77;else{if(L==18)return y;if(L==62)typeof P.className==p?P.className=V:P.setAttribute&&P.setAttribute("class",V),L=18;else if(L==77)L=(F&125)==F?62:18;else if(L==84)L=F<<2&7?65:I;else if(L==58)L=84;else if(L==44){a:{switch(m){case U:y=w?"disable":"enable";break a;case 2:y=w?"highlight":"unhighlight";break a;case 4:y=w?"activate":"deactivate";break a;case V:y=w?"select":"unselect";break a;case P:y=w?"check":"uncheck";break a;case p:y=w?"focus":"blur";break a;case 64:y=w?"open":"close";break a}throw Error("Invalid component state");}L=77}else L==I&&(this.VX=R.document||document,L=65)}},AF=function(I,F,p,P,V,U){for(V=65;V!=68;)if(V==34)this.type=p,this.currentTarget=this.target=P,this.defaultPrevented=this.yX=false,V=79;else if(V==39)V=25;else if(V==54)V=P?28:I;else if(V==33)V=F+1>>3==1?34:79;else{if(V==22)return U;if(V==28)V=typeof p!=="function"?57:22;else{if(V==I)throw Error("Invalid class name "+P);if(V==57)throw Error("Invalid decorator function "+p);V==65?V=33:V==25?V=(F>>1&5)==1?54:22:V==79&&(V=(F|48)==F?39:25)}}},Q=function(I,F,p,P,V,U,w,m,L,y,v){I+((I|64)==I&&(v=(U=P[F]<<24|P[(F|0)+1]<<16,V=P[~F-3*~(F|2)+(F&-3)+2*(~F^2)]<<p,(V|0)+~(U&V)-~U)|P[(F&3)+~F-2*~(F|3)+(F|-4)]),I-9>>3||(P=CG[F.A](F.xX),P[F.A]=function(){return p},P.concat=function(X){p=X},v=P),8)>>2<I&&I+8>>1>=I&&(m=qA,P=[9,91,2,-7,96,-35,P,73,-25,43],y=V&7,L=CG[F.A](F.Db),L[F.A]=function(X){w=X;while("C")if(false!=(y+=p+7*V,null))break;if(true)y=-1-~y-(y&-8)},L.concat=function(X,g,x,a){return(w=(g=(X=(a=U%16+1,-168*U*U*w+4*U*U*a+42*w*w)+P[y+27&7]*U*a-3822*U*w-630*w+(m()|0)*a-a*w+y,P[X]),void 0),P)[(x=y+29,~(x&7)- -1-2*~x+2*(~x|7))+(V&2)]=g,P[y+(-2*~(V&2)-1+~V+(V&-3))]=91,g},v=L);switch(!((I+8&49)>=I&&(I-7^20)<I)){case true:NaN;break;case false:V=b(P,102);{U=p;while(F>p)U=U<<8|EM(8,P,true),F--}n(V,P,U);break}return v},yj=function(I,F,p,P,V,U,w,m,L,y,v,X,g){{v=10;while(v!=1)if(v==92)v=Array.isArray(U)?42:71;else if(v==71)L=zj(L,6),V&&V[i7]?V.B.add(String(U),L,P,zj(null,5,m)?!!m.capture:!!m,w):NA(null,w,48,U,P,false,m,V,L),v=93;else if(v==79)v=(p|24)==p?18:59;else if(v==59)v=(p|9)>=23&&(p^63)<28?92:93;else if(v==30)v=y<U.length?63:93;else if(v==53)X=function(){},w=void 0,V=Yw(P,function(x,a){for(a=91;a!=23;)a==91?a=X?81:23:a==81&&(F&&oD(F),w=x,X(),X=void 0,a=23)},!!F),m=V[0],U=V[1],g={top:function(x,a,f,A,c,Z,B){for(B=87;B!=I;)if(B==27)B=a?80:29;else if(B==31)A=X,X=function(){(A(),oD)(Z)},B=I;else{if(B==29)return c=m(f),x&&x(c),c;B==87?(Z=function(){w(function(d){oD(function(){x(d)})},f)},B=27):B==50?(Z(),B=I):B==80&&(B=w?50:31)}},pe:function(x){U&&U(x)}},v=46;else{if(v==46)return g;v==42?(y=F,v=11):v==10?v=49:v==11?v=30:v==93?v=p-4>>3?46:53:v==18?(U=C(53,1,F,V),(w=U>=P)&&Array.prototype.splice.call(V,U,1),g=w,v=59):v==74?(y++,v=30):v==49?v=(p-1&11)==1?32:79:v==63?(yj(22,0,36,true,V,U[y],w,m,L),v=74):v==32&&(P.classList?Array.prototype.forEach.call(F,function(x){S("string",3,"class",1," ",x,P)}):u7(50,5,"string",P,Array.prototype.filter.call(nG(34,79,"class",P),function(x){return!(C(50,1,x,F)>=0)}).join(" ")),v=79)}}},NA=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x,a){for(a=26;a!=21;)if(a==54)a=m.addListener&&m.removeListener?60:82;else if(a==47)a=(p&25)==p?16:56;else if(a==38)a=L<m.length?33:56;else{if(a==82)throw Error("addEventListener and attachEvent are unavailable.");if(a==72)yj(22,0,37,U,w,m,P,F,V),a=56;else if(a==0){if(w=U.B.i[String(P)]){for(X=(w=w.concat(),m=0,I);m<w.length;++m)(v=w[m])&&!v.Da&&v.capture==V&&(y=v.xn||v.src,L=v.listener,v.zc&&aD(9,12,0,v,U.B),X=L.call(y,F)!==false&&X);x=X&&!F.defaultPrevented}else x=I;a=23}else if(a==12)m.attachEvent(S("on",9,P.toString()),v),a=27;else{if(a==76)return x;if(a==17)X=zj(I,13,w)?!!w.capture:!!w,(g=Z7(m,32))||(m[hF]=g=new eh(m)),y=g.add(P,L,V,X,F),a=50;else if(a==29)V=zj(V,10),w&&w[i7]?w.B.add(String(m),V,false,zj(I,37,F)?!!F.capture:!!F,P):NA(null,P,49,m,false,false,F,w,V),a=56;else if(a==68)a=m.attachEvent?12:54;else if(a==19)a=Array.isArray(m)?83:29;else if(a==16)a=F&&F.once?72:19;else if(a==71)p_||(w=X),w===void 0&&(w=U),m.addEventListener(P.toString(),v,w),a=27;else{if(a==96)throw Error("Invalid event type");a==50?a=y.proxy?76:1:a==60?(m.addListener(v),a=27):a==56?a=(p&39)==p?0:23:a==27?(Gj++,a=76):a==1?(v=nG(34,34),y.proxy=v,v.src=m,v.listener=y,a=79):a==4?(L++,a=38):a==43?a=38:a==99?a=P?17:96:a==83?(L=0,a=43):a==33?(NA(null,F,9,P,V,true,w,m[L]),a=4):a==26?a=47:a==23?a=(p|48)==p?99:76:a==79&&(a=m.addEventListener?71:68)}}}},Hw=function(I,F,p,P,V,U,w,m,L,y,v){{y=28;while(y!=32)if(y==14)y=(F+5^30)<F&&F-I<<1>=F?0:91;else if(y==I)y=U.vD==p?87:91;else if(y==15)y=(F|64)==F?18:90;else if(y==33)aD(9,5,p,V,m.B),y=91;else if(y==7)aD(9,7,p,V,U),y=I;else if(y==51)Array.prototype.forEach.call(P,function(X,g,x){for(x=15;x!=71;)x==15?x=p.classList?24:41:x==75?(g=sM(64,"string",40,"class",p),u7(50,13,"string",p,g+(g.length>0?" "+X:X)),x=71):x==24?(p.classList.add(X),x=71):x==41&&(x=Pw(15,1,30,"class",p,X)?71:75)}),y=90;else if(y==87)U.src=P,m[hF]=P,y=91;else if(y==82){for(U in V=(Array.prototype.forEach.call(nG(34,77,(w={},"class"),p),function(X){w[X]=true}),Array.prototype.forEach.call(P,function(X){w[X]=true}),""),w)V+=V.length>0?" "+U:U;y=(u7(50,9,"string",p,V),90)}else if(y==70)L=V.type,w=V.proxy,m.removeEventListener?m.removeEventListener(L,w,V.capture):m.detachEvent?m.detachEvent(S("on",20,L),w):m.addListener&&m.removeListener&&m.removeListener(w),Gj--,U=Z7(m,36),y=17;else if(y==90)y=F>>2<20&&(F>>2&7)>=5?60:14;else if(y==84)y=m&&m[i7]?33:70;else if(y==53)y=(F&71)==F?37:15;else if(y==0)y=typeof V!=="number"&&V&&!V.Da?24:91;else if(y==17)y=U?7:10;else if(y==18)y=p.classList?51:82;else if(y==24)m=V.src,y=84;else if(y==37)v=Object.prototype.hasOwnProperty.call(p,F1)&&p[F1]||(p[F1]=++X1),y=15;else{if(y==91)return v;y==60?(P.tF(function(X){U=X},p,V),v=U,y=14):y==28?y=53:y==10&&(Pw(15,true,5,V),y=91)}}},tF=function(I,F,p,P,V,U,w,m){for(w=4;w!=97;){if(w==I)return m;w==2?w=(P&62)==P?36:41:w==36?(this.n++,V=p-this.S,this.S+=V/this.n,this.WD+=V*(p-this.S),w=41):w==41?w=(P^5)>>4>=I&&(P+F&4)<F?24:I:w==24?(MA.call(this,p,V||l7.IB(),U),w=I):w==4&&(w=2)}},S=function(I,F,p,P,V,U,w,m,L){{m=26;while(m!=33)if(m==98)L=p in w8?w8[p]:w8[p]=I+p,m=75;else if(m==63)w.classList?w.classList.remove(U):Pw(15,P,31,p,w,U)&&u7(50,17,I,w,Array.prototype.filter.call(nG(34,75,p,w),function(y){return y!=U}).join(V)),m=16;else if(m==60)P.K.splice(I,I,p),m=22;else if(m==16)m=(F-2^12)<F&&F-5<<1>=F?60:22;else if(m==68)m=(F&61)==F?98:75;else if(m==75)m=(F+7&44)>=F&&F+5>>2<F?63:16;else if(m==26)m=68;else if(m==22)return L}},OM=function(I,F,p,P,V,U,w,m){for(m=22;m!=84;)if(m==44)U=F,m=I;else{if(m==I)return U;m==54?(w=function(){},w.prototype=V.prototype,P.D=V.prototype,P.prototype=new w,P.prototype.constructor=P,P.ja=function(L,y,v){for(var X=27;X!=29;)if(X==27)var g=Array((X=81,arguments.length)-F),x=F;else{if(X==5)return V.prototype[y].apply(L,g);X==81?X=0:X==61?(g[x-F]=arguments[x],X=9):X==9?(x++,X=0):X==0&&(X=x<arguments.length?61:5)}},m=5):m==22?m=14:m==14?m=(p&119)==p?54:5:m==5&&(m=(p|1)>>4?I:44)}},sM=function(I,F,p,P,V,U,w,m,L){{m=22;while(m!=63)if(m==65)m=this.O.length<50?98:29;else if(m==I)m=(p|56)==p?16:2;else if(m==19)m=(p>>1&13)==4?50:33;else{if(m==6)return L;if(m==11)m=(p&31)==p?59:19;else if(m==49)this.n++,m=65;else if(m==16)Vx.call(this,F?F.type:""),this.relatedTarget=this.currentTarget=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0,this.key="",this.charCode=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=false,this.state=null,this.pointerId=0,this.pointerType="",this.timeStamp=0,this.gl=null,F&&this.init(F,P),m=2;else if(m==33)m=(p-4^27)<p&&(p-2^30)>=p?49:I;else if(m==29)P=Math.floor(Math.random()*this.n),P<50&&(this.O[P]=F),m=I;else if(m==98)this.O.push(F),m=I;else if(m==59){if((U=P.length,U)>F){for(V=(w=Array(U),F);V<U;V++)w[V]=P[V];L=w}else L=[];m=19}else m==2?m=(p-3&13)==1?54:6:m==54?(this.listener=F,this.proxy=null,this.src=w,this.type=U,this.capture=!!V,this.xn=P,this.key=++PX,this.zc=this.Da=false,m=6):m==22?m=11:m==50&&(L=typeof V.className==F?V.className:V.getAttribute&&V.getAttribute(P)||"",m=33)}}},D7=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x){for(x=94;x!=12;)if(x==96)L=w[y],x=97;else if(x==30)x=(p>>1&6)>=0&&((p^52)&8)<4?41:71;else if(x==4)x=27;else{if(x==84)return X;if(x==42)g(L),x=62;else if(x==71)x=(p|16)==p?65:84;else if(x==62)y++,x=27;else if(x==86){a:{if(L&&typeof L.length==V){if(zj(I,21,L)){v=typeof L.item=="function"||typeof L.item=="string";break a}if(typeof L==="function"){v=typeof L.item=="function";break a}}v=false}x=(US(P,5,0,g,v?sM(64,0,5,L):L),62)}else if(x==41)I(function(a){a(F)}),X=[function(){return F},function(){}],x=71;else if(x==94)x=93;else if(x==97)x=!nG(34,19,"array","object",V,L)||zj(I,29,L)&&L.nodeType>0?42:86;else if(x==65)g=function(a){a&&m.appendChild(typeof a==="string"?U.createTextNode(a):a)},y=F,x=4;else if(x==93)x=(p-8|35)<p&&p-6<<2>=p?9:30;else if(x==9){a:{for(U in P)if(V.call(void 0,P[U],U,P)){X=I;break a}X=F}x=30}else x==27&&(x=y<w.length?96:84)}},b=function(I,F,p,P,V,U,w,m,L,y,v){switch(!((F^55)>=18&&F+9<22)){case true:true;break;case NaN===NaN:if(U=md("object","null",P)==="array"?P:[P],this.v)I(this.v);else try{V=!this.K.length&&!this.J,w=[],S(0,15,[L_,w,U],this),S(0,43,[vX,I,w],this),p&&!V||C(16,0,p,true,this)}catch(X){F$(X,8,"~",this),I(this.v)}break}return(F+((F&(((F^((F|80)==F&&(U=EM(8,p,true),(U|0)- -129+~(U|I)&&(U=(V=2*(U|127)- -2+~(U|127)+(~U^127),P=EM(8,p,true)<<7,2*~(V&P)- -1-3*~(V|P)+2*(~V^P))),v=U),36))&23)==2&&(I.C?v=xZ(I.F,I):(V=D(true,8,I),(V|0)- -129+~(V|128)&&(V=-256+2*(V|128)-(V|-129)+(~V|128),P=D(true,2,I),V=(p=V<<2,4*~(p&P)-3*~p-3*~P+2*(~p^P))),v=V)),(F|40)==F&&(I.C?v=xZ(I.F,I):(V=D(true,8,I),(V|0)- -129+~(V|128)&&(V=-256+2*(V|128)-(V|-129)+(~V|128),P=D(true,2,I),V=(p=V<<2,4*~(p&P)-3*~p-3*~P+2*(~p^P))),v=V)),90))==F&&(v=y=function(){for(var X=29;X!=24;)if(X==0)X=U==2?3:4;else if(X==89){var g=X$(null,x,4,V);X=78}else if(X==3)S(0,46,x,V),g=C(17,0,I,I,V),X=78;else if(X==83)m&&L&&m.removeEventListener(L,y,g8),X=24;else if(X==39)var x=[yx,w,P,void 0,(X=0,m),L,arguments];else if(X==48)X=V.g?39:83;else if(X==31){var a=!V.K.length&&!V.J;X=(S(0,11,x,V),a&&C(32,0,I,I,V),78)}else if(X==29)X=V.X==V?48:24;else{if(X==78)return g;X==4&&(X=U==p?31:89)}}),8)^14)>=F&&(F-1|26)<F&&(I.C?v=xZ(I.F,I):(p=D(true,8,I),(p|0)- -129+~(p|128)&&(p=-256+2*(p|128)-(p|-129)+(~p|128),V=D(true,2,I),p=(P=p<<2,4*~(P&V)-3*~P-3*~V+2*(~P^V))),v=p)),v},$Z=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x,a,f){{f=64;while(f!=6)if(f==64)f=72;else{if(f==54)return a;if(f==75){a:{for(g=(y=f_,U.split(P)),v=F;v<g.length-V;v++){if(!(x=g[v],x in y))break a;y=y[x]}(X=(m=y[L=g[g.length-V],L],w)(m),X)!=m&&X!=p&&A1(y,L,{configurable:true,writable:true,value:X})}f=8}else f==52?(this.n===0?a=[0,0]:(this.O.sort(function(A,c){return A-c}),a=[this.n,this.O[this.O.length>>1]]),f=54):f==72?f=I-5>>3?8:59:f==59?f=w?75:8:f==8&&(f=(I+2&26)>=I&&(I+3^19)<I?52:54)}}},zj=function(I,F,p,P,V,U){{V=6;while(V!=45){if(V==37)return U;V==79?V=((F^28)&7)==1?42:60:V==42?(P=typeof p,U=P=="object"&&p!=I||P=="function",V=60):V==6?V=79:V==24?(typeof I==="function"?U=I:(I[J1]||(I[J1]=function(w){return I.handleEvent(w)}),U=I[J1]),V=37):V==60&&(V=F<<2&6?37:24)}}},F$=function(I,F,p,P,V,U,w,m,L,y,v,X,g){{X=65;while(X!=81){if(X==93)return g;if(X==32){if(I.X=((I.H+=(m=(y=(L=(v=(P||I.Kl++,I.m1>p&&I.J&&I.v$&&I.uq<=1&&!I.C&&!I.G&&(!P||I.yq-V>1))&&document.hidden==0,I.Kl==4))||v?I.L():I.Ll,y)-I.Ll,m>>14>p),I.h)&&(I.h^=(I.H+1>>2)*(m<<2)),I).H+1>>2!=p||I.X,L||v)I.Ll=y,I.Kl=p;X=(v?(I.m1>I.Cl&&(I.Cl=I.m1),y-I.bq<I.m1-(U?255:P?5:2)?g=false:(I.yq=V,w=W(P?508:473,I),K(473,I,I.R),I.K.push([aT,w,P?V+1:V,I.j,I.U]),I.G=oD,g=true)):g=false,93)}else X==67?X=F+8&7?1:35:X==35?(P.v=((P.v?P.v+p:"E:")+I.message+":"+I.stack).slice(0,2048),X=1):X==1?X=(F+2&3)==1?32:93:X==65&&(X=67)}}},BX=function(I,F){return sM.call(this,64,I,56,F)},cX=function(I,F,p,P,V){return sM.call(this,64,V,36,p,F,I,P)},W=function(I,F,p){p=F.g[I];switch(!(p===void 0)){case 0==![]:NaN;break;case false:throw[kZ,30,I];break}while(p.value){return p.create();if(0===-0)break}return(p.create(I*4*I+91*I+15),p).prototype},C_=function(I,F,p,P,V){return Hw.call(this,6,72,I,F,p,P,V)},bx=function(I,F,p,P,V,U,w,m){switch(!!p.v){case !null:false;break;case false:p.uq++;try{for(U=(w=0,m=p.R,void 0);--P;)try{if((V=void 0,p).C)U=xZ(p.C,p);else{if((w=Y(473,p),w)>=m)break;V=(K(508,p,w),b(p,31)),U=Y(V,p)}F$(p,3,0,(U&&U[h1]&2048?U(p,P):eG([kZ,21,V],p,469,0),false),P,false)}catch(L){W(I,p)?eG(L,p,469,F):K(I,p,L)}while(!P){while(p.IA){bx(229,22,(p.uq--,p),822957477519);return;if(false==0)break}if(eG([kZ,33],p,469,0),true)break}}catch(L){try{eG(L,p,469,F)}catch(y){F$(y,16,"~",p)}}p.uq--;break}},US=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x){for(x=73;x!=70;)if(x==13)v=zj(p,5,V)?!!V.capture:!!V,U=zj(U,8),x=69;else{if(x==42)return g;x==24?x=m?92:16:x==94?(w in U&&P.call(void 0,U[w],w,V),x=19):x==75?((y=L.ey(v,U,w,P))&&Hw(6,13,0,null,y),x=16):x==81?x=Array.isArray(w)?72:13:x==39?x=99:x==72?(X=I,x=89):x==21?x=(F-2^5)<F&&F-2<<2>=F?81:16:x==76?(X++,x=55):x==33?(U=new BX(p,this),P=I.xn||I.src,w=I.listener,I.zc&&Hw(6,14,0,null,I),V=w.call(P,U),x=26):x==40?x=L?75:16:x==69?x=m&&m[i7]?87:24:x==99?x=w<m?94:42:x==52?(m=V.length,U=typeof V==="string"?V.split(I):V,w=p,x=39):x==15?(US(0,38,null,P,V,U,w[X],m),x=76):x==89?x=55:x==55?x=X<w.length?15:16:x==26?(g=V,x=21):x==8?x=I.Da?80:33:x==16?x=(F+5&63)<F&&(F-3^30)>=F?49:97:x==80?(V=true,x=26):x==87?(m.B.remove(String(w),U,v,P),x=16):x==92?(L=Z7(m,40),x=40):x==49?(I.IB=function(){return I.RB?I.RB:I.RB=new I},I.RB=void 0,x=97):x==97?x=(F&31)==F?52:42:x==19?(w++,x=99):x==73?x=22:x==22&&(x=(F&59)==F?8:21)}},mU=function(I){return OM.call(this,7,I,8)},n_=function(I,F,p){{p=16;while(p!=78)if(p==47)p=63;else{if(p==3)return F;p==22?p=63:p==63?p=I--?76:3:p==16?(F=[],p=22):p==76&&(F.push(Math.random()*255|0),p=47)}}},ux=function(I,F,p,P,V,U,w,m,L,y){for(U=(w=((L=b(P,(y=P[RT]||{},I)),y.L6=b(P,47),y).Z=[],P).X==P?(EM(8,P,p)|0)-V:1,m=b(P,70),0);U<w;U++)y.Z.push(b(P,F));for(y.MI=T(m,P);w--;)y.Z[w]=Y(y.Z[w],P);return y.gm=Y(L,P),y},Z5=function(I){return KG.call(this,3,I)},t,Nk=function(){return Ww.call(this,3)},$w=function(){return C.call(this,34)},A1=typeof Object.defineProperties=="function"?Object.defineProperty:function(I,F,p,P){{P=27;while(P!=63)if(P==27)P=I==Array.prototype||I==Object.prototype?34:99;else{if(P==34)return I;if(P==99)return I[F]=p.value,I}}},X$=function(I,F,p,P,V,U,w,m,L,y,v,X){X=F[0];switch(!(X==L_)){case true:switch(!(X==vX)){case Number()===-0:switch(!(X==aT)){case true:if(X==WX)P.j=true,P.l(F);else switch(!(X==K_)){case false==![]:for(undefined;X==yx;Number(undefined)){return L=F[2],n(437,P,F[6]),n(504,P,L),P.l(F);if(true)break}X==h1?(P.l(F),P.qh=[],P.Gc=[],P.g=I):X==LG&&R.document.readyState==="loading"&&(P.G=function(g,x){function a(f){{f=25;while(f!=70)f==25?f=x?70:45:f==45&&(x=true,R.document.removeEventListener("DOMContentLoaded",a,g8),R.removeEventListener("load",a,g8),g(),f=70)}}if(x=false,{})R.document.addEventListener("DOMContentLoaded",a,g8);R.addEventListener("load",a,g8)});break;case false:try{{V=0;while(V<P.lq.length){try{v=P.lq[V],v[0][v[1]](v[2])}catch(g){}V++}}}catch(g){}(0,F[1])(function(g,x){P.tF(g,true,x)},function(g){(g=!P.K.length&&!P.J,S(0,10,[h1],P),g)&&C(64,0,true,false,P)},function(g){return P.kn(g)},(m=(P.lq=[],P).L(),function(g,x,a){return P.mN(g,x,a)})),P.N+=P.L()-m;break}break;case NaN===Number(undefined)==null:F[3]&&(P.j=true),F[p]&&(P.U=true),P.l(F);break}break;case ![]:y=F[1];while(true){try{U=P.v||P.l(F)}catch(g){F$(g,24,"~",P),U=P.v}if(![]==Number())break}((w=P.L(),y)(U),P).N+=P.L()-w;break}break;case Number(undefined)===NaN:P.U=true,P.HD=25,P.l(F);break}},Tk=function(I,F,p,P,V,U,w,m,L,y,v){for(y=(L=((w.Db=kw(32,19,{get:function(){return this.concat()}},(w.W$=sS,(w.l2=d8,w).P$=w[vX],w.A)),w).xX=CG[w.A](w.Db,{value:{value:{}}}),0),[]);L<340;L++)y[L]=String.fromCharCode(L);w.Kl=((w.uq=0,w.qh=[],w).C6=(v=window.performance||{},[]),void 0);while([])if(w.B$=function(X){return Ww.call(this,32,X)},true)break;w.X=(w.F=void 0,((w.Ez=false,w.dl=V,w).H=1,w.u=((w.K=[],w).lq=(w.bq=0,[]),w.v=(w.g=[],void 0),void 0),w).yq=(w.h=void 0,w.U=false,w.wl=(w.j=false,false),10001),w.QX=[],w.Ll=0,w.m1=(w.G=null,0),w.wm=p,w.Cl=0,w.Gc=[],w.Yn=void 0,w.HD=25,w.N=0,(w.R=0,w).Vq=(w.C=void 0,[]),w);while({})if(w.oA=0,true)break;w.oB=0,w.J=!(w.v$=(w.Oz=void 0,w.u2=v.timeOrigin||(v.timing||{}).navigationStart||0,false),I&&I.length==2&&(w.Vq=I[1],w.C6=I[0]),1);for(![]!=true;P;false){try{w.Oz=JSON.parse(P)}catch(X){w.Oz={}}if(![undefined]==0)break}e(12,(n(339,w,(e(12,319,(n(221,w,[0,(K(440,w,(K((O(188,w,n_((n(113,w,(n(270,w,(e(14,139,(K(79,w,(e(26,370,(e(10,464,(e(24,106,w,(e(28,(e(30,477,(e(12,123,w,(O(229,(e(25,(e(13,(K((e(24,(K(484,w,(e(29,((n(473,w,(e(29,(e(24,(e(28,239,w,function(X,g,x,a,f,A,c,Z,B){for(B=7;B!=60;)B==75?B=1:B==7?(c=b(X,106),x=b(128,85,X),a=[],Z=Y(445,X),f=Z.length,g=0,B=75):B==87?B=1:B==33?(K(c,X,a),B=60):B==1?B=x--?71:33:B==71&&(g=(A=b(128,84,X),2*~(g&A)-3*~g-~A+2*(~g|A))%f,a.push(Z[g]),B=87)}),155),w,function(X,g,x,a,f,A,c,Z,B){{B=79;while(B!=56)B==79?(A=b(X,32),f=b(X,28),c=b(X,96),Z=W(f,X),x=W(A,X),a="",g=0,B=74):B==5?(g++,B=10):B==10?B=g<Z.length?93:32:B==74?B=10:B==32?(O(c,X,x[a]),B=56):B==93&&(a+=String.fromCharCode(Z[g]^121),B=5)}}),321),w,function(X,g,x,a,f,A,c,Z,B){{B=61;while(B!=26)B==61?(g=b(X,42),Z=b(X,96),x=b(X,104),A=T(g,X),f=T(Z,X),c="",a=0,B=41):B==36?B=a<A.length?13:77:B==77?(O(x,X,c in f|0),B=26):B==41?B=36:B==53?(a++,B=36):B==13&&(c+=String.fromCharCode(A[a]^121),B=53)}}),0)),n)(508,w,0),312),w,function(X){HX(4,X)}),n_(4))),311),w,function(X,g,x,a,f,A){{A=86;while(A!=94)A==92?(g++,A=61):A==53?(O(f,X,x),A=94):A==4?(x.push(EM(8,X,true)),A=92):A==61?A=g<a?4:53:A==86?(f=b(X,78),a=b(128,83,X),g=0,x=[],A=8):A==8&&(A=61)}}),504),w,{}),235),w,function(X,g,x,a,f,A,c,Z,B){{B=38;while(B!=92)B==88?(O(c,X,x),B=92):B==18?B=55:B==55?B=A--?5:88:B==38?(c=b(X,28),A=b(128,86,X),x="",a=W(445,X),g=a.length,Z=0,B=68):B==68?B=55:B==5&&(Z=(f=b(128,81,X),-2*~Z+(Z^f)+2*(~Z|f))%g,x+=y[a[Z]],B=18)}}),98),w,function(X,g,x,a,f){for(f=71;f!=82;)f==66?(a[339]=X.g[339],a[270]=X.g[270],X.g=a,f=82):f==55?f=x>0?3:66:f==69?(x=EM(8,X,true),f=50):f==10?(x--,f=55):f==71?(a=X.QX.pop(),f=62):f==3?(g=b(X,14),a[g]=X.g[g],f=10):f==15?(K(473,X,X.R),f=82):f==62?f=a?69:15:f==50&&(f=55)}),w),702),function(X,g,x,a){K((g=b(X,(a=b(X,31),x=b(X,28),42)),g),X,Y(a,X)||W(x,X))})),w),function(X,g,x){n((g=b((x=b(X,41),X),14),g),X,""+Y(x,X))}),329),w,function(X){jG(X,3)}),function(X,g,x,a,f,A,c,Z){a=(c=(A=W((Z=(f=(g=b(X,(x=b(X,14),105)),b)(X,38),b)(X,27),f),X),T(g,X)),W(Z,X)),K(x,X,b(false,16,1,A,X,a,c))})),w),function(X,g){SG(469,0,104,(g=T(b(X,40),X),X.X),473,g)}),w),function(X,g,x,a,f,A){n((f=(A=b(X,(a=b(X,(g=b(X,96),43)),27)),x=T(a,X),Y(g,X)==x),A),X,+f)}),0)),w),function(X,g,x,a,f,A,c,Z,B,d,H){for(H=10;H!=76;)H==10?(B=b(X,38),f=b(X,78),c=b(X,56),g=b(X,70),Z=T(B,X.X),A=W(g,X),d=Y(f,X),x=W(c,X),H=90):H==47?(a=b(false,18,1,A,X,1,x,Z,d),Z.addEventListener(d,a,g8),W(241,X).push(function(){Z.removeEventListener(d,a,g8)}),n(382,X,[Z,d,a]),H=76):H==90&&(H=Z!==0?47:76)}),[2048])),[])),4))),89),w,R),[])),0),0]),w),function(X,g,x,a,f){a=md("object","null",(x=(f=(g=b(X,102),b(X,107)),T(g,X)),x)),O(f,X,a)}),[])),495),w,function(X,g,x,a,f,A,c,Z,B,d,H,vw,z,q,k){for(k=31;k!=10;)if(k==95)k=md("object","null",Z)=="object"?35:13;else if(k==13)k=X.X==X?51:10;else if(k==8)f+=z,k=41;else if(k==71)k=41;else if(k==35){for(d in A=[],Z)A.push(d);Z=(k=13,A)}else k==83?(H=b(X,28),B=b(X,43),x=b(X,45),a=b(X,32),Z=W(H,X),c=W(a,X),z=Y(x,X),vw=T(B,X),k=95):k==41?k=f<q?0:10:k==51?(q=Z.length,f=0,z=z>0?z:1,k=71):k==0?(vw(Z.slice(f,(f|0)+(z|0)),c),k=8):k==31&&(k=F$(X,19,0,true,g,true)?10:83)});while(Number()==![""])if(O(382,w,0),NaN!==NaN)break;C(16,0,!(S((S(0,47,(((new D5(((e((O(104,w,(e(14,138,(e(8,10,w,(w.GO=(e(10,29,(e(25,200,w,(e(8,(e(8,320,(K(280,w,n_((e(25,(O(241,(e(9,(K(469,(e(10,378,w,(K(369,w,((e(26,(e(26,161,w,(e(9,(e(13,(e(13,57,(e(30,147,w,function(X,g,x){(x=(g=b(X,61),Y)(g,X.X),x)[0].removeEventListener(x[1],x[2],g8)}),w),function(X,g,x,a,f,A){{A=36;while(A!=20)A==36?A=F$(X,15,0,true,g,false)?20:62:A==80?A=X.X==X||x==X.B$&&a==X?44:20:A==62?(f=ux(27,38,true,X,1),x=f.gm,a=f.MI,A=80):A==44&&(O(f.L6,X,x.apply(a,f.Z)),X.Ll=X.L(),A=20)}}),70),w,function(X){Q(24,4,0,X)}),159),w,function(X,g,x,a){K((g=b(X,(x=EM(8,(a=b(X,27),X),true),70)),g),X,T(a,X)>>>x)}),function(X,g,x,a,f,A,c,Z,B,d){for(d=91;d!=45;)d==91?d=F$(X,7,0,true,g,false)?45:6:d==6&&(Z=ux(27,38,true,X.X,1),f=Z.L6,x=Z.MI,B=Z.Z,A=B.length,a=Z.gm,c=A==0?new x[a]:A==1?new x[a](B[0]):A==2?new x[a](B[0],B[1]):A==3?new x[a](B[0],B[1],B[2]):A==4?new x[a](B[0],B[1],B[2],B[3]):2(),n(f,X,c),d=45)})),377),w,function(X,g){(g=b(X,44),K)(g,X,[])}),w).Oi=0,{})),function(X,g,x,a){(x=(a=b(X,(g=b(X,40),62)),T)(a,X),T(g,X))!=0&&K(473,X,x)})),w.Qq=0,w),[]),17),w,function(X,g,x,a,f,A){O((g=(x=(a=b(X,(f=(A=b(X,38),b)(X,32),96)),W(f,X)),T)(A,X),a),X,g in x|0)}),w),[]),337),w,function(X,g,x,a,f){(f=T((g=(x=b(X,109),b(X,111)),x),X),a=W(g,X),n)(g,X,a+f)}),4))),w),function(X,g,x,a,f,A,c){{c=65;while(c!=94)c==47?(X.h=D(false,32,X),X.u=void 0,c=94):c==53?c=a==2?47:94:c==87?c=X.X==X?99:94:c==58?c=x==413?41:94:c==65?(x=b(X,32),A=b(X,14),f=b(X,38),c=87):c==99?(g=W(f,X),a=Y(A,X),T(x,X)[a]=g,c=58):c==41&&(X.u=void 0,c=53)}}),266),w,function(X){HX(1,X)}),function(){})),w),function(X){jG(X,4)}),0),function(X,g,x,a,f,A,c,Z,B,d,H,vw,z,q,k,Vj,u,M){{u=26;while(u!=22)u==75?u=32:u==51?(A=((x|1)-2*~x+3*~(x|1)-(~x^1)).toString(2).length,d=[],H=0,u=9):u==9?u=27:u==26?(M=function(N,ID){for(;c<N;)a|=EM(8,X,true)<<c,c+=8;return a>>=(ID=(c-=N,a&(1<<N)-1),N),ID},z=b(X,78),c=a=0,Vj=(M(3)|0)+1,B=M(5),x=0,Z=[],g=0,u=50):u==8?u=k<B?7:79:u==17?u=g<B?67:51:u==63?(e(14,z,X,function(N,ID,xw,l,cw,h){for(h=80;h!=72;)h==25?h=12:h==2?h=12:h==64?(xw=cw[xw],h=88):h==46?h=44:h==88?(ID.push(xw),h=78):h==12?h=xw>=cw.length?32:64:h==44?h=l<B?82:41:h==85?h=Z[l]?88:25:h==41?(N.C=Q(11,N,vw.slice()),N.F=Q(12,N,ID),h=72):h==80?(cw=[],ID=[],l=0,h=46):h==32?(cw.push(b(N,70)),h=2):h==78?(l++,h=44):h==82&&(xw=d[l],h=85)}),u=22):u==90?(Z[H]||(d[H]=M(A)),u=65):u==49?(k++,u=8):u==44?(g++,u=17):u==20?(vw.push(T(b(X,31),X)),u=75):u==43?(k=0,u=71):u==65?(H++,u=27):u==27?u=H<B?90:43:u==71?u=8:u==79?(f=Vj,vw=[],u=72):u==50?u=17:u==72?u=32:u==7?(Z[k]&&(d[k]=b(X,78)),u=49):u==32?u=f--?20:63:u==67&&(q=M(1),Z.push(q),x+=q?0:1,u=44)}})),w),function(X,g,x,a,f){for(f=39;f!=71;)f==19?(x=b(X,31),a=b(X,41),O(a,X,function(A){return eval(A)}(Qx(Y(x,X.X)))),f=71):f==39&&(f=F$(X,11,0,true,g,false)?71:19)}),[154,0,0])),9),112,w,function(X,g,x,a,f,A){O((g=(f=b(X,(a=b(X,102),57)),A=b(X,108),T(a,X)),x=Y(f,X),A),X,g[x])}),O)(475,w,w),"Submit"))).dispose(),U)||S(0,14,[LG],w),[WX,m]),w),0),42,[K_,F],w),0),true,w)},eG=function(I,F,p,P,V,U,w,m,L,y,v,X,g){for((1).Z;!F.Ez&&(X=void 0,I&&I[0]===kZ&&(X=I[2],P=I[1],I=void 0),w=T(339,F),w.length==0&&(m=Y(508,F)>>3,w.push(P,m>>8&255,(m|255)-(m&-256)+(~m^255)-(~m|255)),X!=void 0&&w.push(X&255)),L="",I&&(I.message&&(L+=I.message),I.stack&&(L+=":"+I.stack)),U=T(270,F),U[0]>3);undefined){F.X=(L=L.slice(0,(V=U[0],(V|3)-3*(V&3)-2*~V+2*(~V^3))),U[0]-=(L.length|0)+3,L=qk(L,192),g=F.X,F);try{F.wl?(y=(y=W(p,F))&&y[y.length-1]||95,(v=W(440,F))&&v[v.length-1]==y||ix(440,F,[(y|255)-~(y&255)+~(y|255)])):ix(p,F,[95]),ix(484,F,G(L.length,2).concat(L),51)}finally{F.X=g}if(true)break}},r=function(I,F,p,P,V,U,w,m){m=this;try{Tk(p,F,I,P,w,U,this,V)}catch(L){F$(L,32,"~",this),F(function(y){y(m.v)})}},D=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x,a,f,A){if(U=W(473,p),U>=p.R)throw[kZ,31];for(g=(L=F,p.P$.length),X=0,v=U;L>0;)w=v>>3,A=p.qh[w],P=v%8,x=8-(P|0),f=x<L?x:L,I&&(m=p,y=v,m.u!=y>>6&&(m.u=y>>6,V=T(413,m),m.Yn=t1(8,m.u,m.h,0,[0,0,V[1],V[2]])),A^=p.Yn[w&g]),v+=f,X|=(A>>8-(P|0)-(f|0)&(1<<f)-1)<<(L|0)-(f|0),L-=f;return n(473,(a=X,p),(U|0)+(F|0)),a},K=function(I,F,p){if(I==473||I==508)F.g[I]?F.g[I].concat(p):F.g[I]=Q(9,F,p);else{for(0;F.Ez&&I!=413;![]==0!=[]){return;if("F")break}I==104||I==484||I==113||I==188||I==339||I==469||I==440||I==221||I==280||I==270?F.g[I]||(F.g[I]=Q(3,F,6,p,22,I)):F.g[I]=Q(3,F,6,p,129,I)}I==413&&(F.h=D(false,32,F),F.u=void 0)},md=function(I,F,p,P,V){if(P=typeof p,P==I)switch(!p){case true:return F;break;case ![]!=0:if(p instanceof Array)return"array";if(p instanceof Object)return P;V=Object.prototype.toString.call(p);while(V=="[object Window]"){return I;if("O")break}if(V=="[object Array]"||typeof p.length=="number"&&typeof p.splice!="undefined"&&typeof p.propertyIsEnumerable!="undefined"&&!p.propertyIsEnumerable("splice"))return"array";if(V=="[object Function]"||typeof p.call!="undefined"&&typeof p.propertyIsEnumerable!="undefined"&&!p.propertyIsEnumerable("call"))return"function";break}else if(P=="function"&&typeof p.call=="undefined")return I;return P},l7=function(){return AF.call(this,43,48)},eh=function(I){return aD.call(this,9,18,I)},ix=function(I,F,p,P,V,U,w,m,L){while(F.X==F){{V=Y(I,F),I==484||I==280||I==188?(w=function(y,v,X,g,x,a,f,A,c){for(f=92,A=78;;)try{if(f==25)break;else if(f==43)V.AF=x,v=(a=x<<3,1-(~a^4)+2*(a|-5)),X=[0,0,U[1],U[2]],f=95;else if(f==95)A=80,V.sz=t1(8,Q(65,-~(v&4)+-10-3*~(v|4)+2*(~v|4),8,V),Q(67,v,8,V),0,X),f=63;else{if(f==44)throw A=78,c;f==63?(V.push(V.sz[g&7]^y),f=25):f==92?(g=V.length,x=(g|0)-4>>3,f=0):f==0&&(f=V.AF!=x?43:63)}}catch(Z){if(A==78)throw Z;A==80&&(c=Z,f=44)}},U=Y(221,F)):w=function(y){V.push(y)},P&&w(256+(P|-256)),m=0,L=p.length;while(m<L)w(p[m]),m++}if(!![]!=[])break}},Yw=function(I,F,p,P,V,U,w,m,L){return Ww.call(this,20,I,F,p,P,V,U,w,m,L)},JF=function(){return u7.call(this,50,6)},Vx=function(I,F){return AF.call(this,43,8,I,F)},Gk=function(I,F,p,P,V,U){return yj.call(this,22,F,5,I,p,P,V,U)},lx=function(I,F,p,P,V,U,w,m,L){if(p.X==p){{w=T(I,p),I==484||I==280||I==188?(m=function(y,v,X,g,x,a,f,A,c){for(c=(A=49,40);;)try{if(A==34)break;else if(A==84)A=w.AF!=X?60:58;else if(A==49)v=w.length,X=(v|0)-4>>3,A=84;else if(A==77)c=32,w.sz=t1(8,Q(64,-~(x&4)+-10-3*~(x|4)+2*(~x|4),8,w),Q(66,x,8,w),0,g),A=58;else if(A==58)w.push(w.sz[v&7]^y),A=34;else if(A==60)w.AF=X,x=(a=X<<3,1-(~a^4)+2*(a|-5)),g=[0,0,L[1],L[2]],A=77;else if(A==79)throw c=40,f;}catch(Z){if(c==40)throw Z;c==32&&(f=Z,A=79)}},L=Y(221,p)):m=function(y){w.push(y)},P&&m(256+(P|-256)),V=0,U=F.length;while(V<U)m(F[V]),V++}}},I2=function(I,F){function p(){(this.n=0,this).O=[]}return[function(P){I.Za(P),F.Za(P)},(F=(I=((p.prototype.i2=function(){return $Z.call(this,14)},p).prototype.Za=function(P,V){return sM.call(this,64,P,34,V)},new p),new p),function(P){return P=I.i2().concat(F.i2()),F=new p,P})]},b7=function(I){return kw.call(this,32,66,I)},r8=function(){return Tj.call(this,24,5)},SG=function(I,F,p,P,V,U){if(true)P.QX.length>p?eG([kZ,36],P,I,F):(P.QX.push(P.g.slice()),P.g[V]=void 0,K(V,P,U))},jG=function(I,F,p,P,V,U,w){(U=(P=(w=(p=-~(F|4)-(V=(F|3)-(F&-4)-(~F&3),~F&4)+(~F|4),b(I,78)),b)(I,14),T)(w,I),p&&(U=qk(""+U,192)),V&&lx(P,G(U.length,2),I),lx)(P,U,I)},YZ=function(){return UM.call(this,41,59)},O=function(I,F,p){if(I==473||I==508)F.g[I]?F.g[I].concat(p):F.g[I]=Q(10,F,p);else{switch(!(F.Ez&&I!=413)){case !![]:undefined;break;case false==null:return;break}I==104||I==484||I==113||I==188||I==339||I==469||I==440||I==221||I==280||I==270?F.g[I]||(F.g[I]=Q(5,F,6,p,22,I)):F.g[I]=Q(7,F,6,p,129,I)}while(true)if(![(I==413&&(F.h=D(false,32,F),F.u=void 0),"")]==0)break},t1=function(I,F,p,P,V,U,w,m){m=(w=P,V[3]|P);{U=V[2]|P;while(w<14)F=F>>>I|F<<24,F+=p|P,p=p<<3|p>>>29,F^=U+2925,m=m>>>I|m<<24,p^=F,m+=U|P,m^=w+2925,U=U<<3|U>>>29,U^=m,w++}return[p>>>24&255,p>>>16&255,p>>>I&255,p>>>P&255,F>>>24&255,F>>>16&255,F>>>I&255,F>>>P&255]},HX=function(I,F,p,P){(p=(P=b(F,102),b)(F,27),lx)(p,G(W(P,F),I),F)},Fx=function(I,F,p,P,V){while(I.length==3){for(P=0;P<3;P++)F[P]+=I[P];for(V=(p=[13,8,13,12,16,5,3,10,15],0);V<9;V++)F[3](F,V%3,p[V]);if(true)break}},Vy=function(I,F,p,P,V,U){try{while("n")if(V=I[((F|0)+2)%3],I[F]=(U=I[F],P=I[(-3*~F+-2+2*(~F^1)+4*(~F&1))%3],-(U&P)-~U+(U|~P))-(V|0)^(F==1?V<<p:V>>>p),11)break}catch(w){throw w;}},T=function(I,F,p){if(p=F.g[I],p===void 0)throw[kZ,30,I];if(p.value)return p.create();return(p.create(I*4*I+91*I+15),p).prototype},Mk=function(I,F){return yj.call(this,22,F,18,I)},jh=function(){return UM.call(this,41,21)},D5=function(I,F,p){return tF.call(this,0,3,I,5,F,p)},qk=function(I,F,p,P,V,U,w,m,L,y,v,X,g,x,a){x=I.replace(/\\r\\n/g,"\\n"),w=[];{y=P=0;while(y<x.length)V=x.charCodeAt(y),V<128?w[P++]=V:(V<2048?w[P++]=(L=V>>6,-(L&F)-2*~(L&F)+3*(L^F)+2*(~L^F)):((V&64512)==55296&&y+1<x.length&&(U=x.charCodeAt(y+1),(U|0)+~U-~(U|64512)-(U^64512))==56320?(V=(v=(V&1023)<<10,3*(65536&v)+~(65536&v)-(-65537^v))+(g=x.charCodeAt(++y),-2*~(g&1023)-1+~(g|1023)+(g^1023)),w[P++]=(m=V>>18,-~m+(m&-241)-(~m^240)+2*(~m|240)),w[P++]=(a=V>>12&63,-2*~(a&128)-1+~(a|128)+2*(a^128))):w[P++]=V>>12|224,w[P++]=(X=V>>6,(X|63)- -1+(~X^63))|128),w[P++]=(p=-~(V&63)+-64-~(V|63)+(~V|63),1-~p+3*(~p&128)+2*(p|-129))),y++}return w},OS=function(I,F,p,P,V,U){return W(504,(O(473,(bx(229,((U=W(473,p),p.qh)&&U<p.R?(O(473,p,p.R),SG(469,I,104,p,473,V)):K(473,p,V),P),p,F),p),U),p))},oT=function(I,F){function p(){this.S=this.WD=this.n=0}return[(F=(I=(p.prototype.jy=function(P,V){return tF.call(this,0,3,P,10,V)},p.prototype.f6=function(){return nG.call(this,34,16)},new p),new p),function(P){(I.jy(P),F).jy(P)}),function(P){if(F=new (P=[I.f6(),F.f6(),I.S,F.S],p),true)return P}]},xZ=function(I,F,p){return p=I.create().shift(),F.C.create().length||F.F.create().length||(F.C=void 0,F.F=void 0),p},Qj=function(I,F,p,P,V,U){return US.call(this,I,34,F,p,P,V,U)},MA=function(I,F,p,P,V,U,w,m){return nG.call(this,34,7,I,F,p,P,V,U,w,m)},G=function(I,F,p,P,V){for(P=(V=(F|1)+~(F|1)+(~F^1)-2*(~F|1),[]);V>=0;V--)P[(F|0)-1-(V|0)]=(p=I>>V*8,(p|0)+255-(p|255));return P},Py=function(I,F,p,P,V,U,w,m,L,y,v,X){(F.push((L=(w=I[0]<<24,m=I[1]<<16,(w|0)-~(w&m)+~w+(w^m))|I[2]<<8,U=I[3],-(U|0)-1-2*~(L|U)+(~L|U))),F.push((p=(V=I[4]<<24,v=I[5]<<16,(V|0)+~V-~(V|v)),y=I[6]<<8,(p|0)+(p&~y)-(p^y)+2*(~p&y))|I[7]),F).push((X=I[8]<<24|I[9]<<16,P=I[10]<<8,-~X+2*(~X&P)+(X|~P))|I[11])},EM=function(I,F,p){return F.C?xZ(F.F,F):D(p,I,F)},pn=function(I,F){for(var p=25;p!=75;)if(p==50){var P=Xx[U];Object.prototype.hasOwnProperty.call(V,P)&&(I[P]=V[P]),p=93}else if(p==64)p=w<arguments.length?98:75;else if(p==29)w++,p=64;else if(p==98){var V=arguments[w];for(P in V)I[P]=V[P];var U=(p=66,0)}else if(p==87)p=64;else if(p==93)U++,p=85;else if(p==85)p=U<Xx.length?50:29;else if(p==66)p=85;else if(p==25)var w=(p=87,1)},n=function(I,F,p){if(I==473||I==508)F.g[I]?F.g[I].concat(p):F.g[I]=Q(13,F,p);else{while(F.Ez&&I!=413){return;if(10)break}I==104||I==484||I==113||I==188||I==339||I==469||I==440||I==221||I==280||I==270?F.g[I]||(F.g[I]=Q(6,F,6,p,22,I)):F.g[I]=Q(8,F,6,p,129,I)}I==413&&(F.h=D(false,32,F),F.u=void 0)},Y=function(I,F,p){if(p=F.g[I],p===void 0)throw[kZ,30,I];if(p.value)return p.create();return p.create(I*4*I+91*I+15),p.prototype},f_=UM(41,3,"Math","object",0,this),R=($Z(5,0,null,".",1,"Symbol",function(I,F,p,P,V,U){for(V=42;V!=22;){if(V==79)return I;if(V==72)V=I?79:20;else if(V==42)P=function(w,m){this.b2=w,A1(this,"description",{configurable:true,writable:true,value:m})},U=function(w,m){for(m=12;m!=91;)if(m==12)m=this instanceof U?17:50;else{if(m==50)return new P(p+(w||"")+"_"+F++,w);if(m==17)throw new TypeError("Symbol is not a constructor");}},V=72;else if(V==20)return P.prototype.toString=function(){return this.b2},p="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",F=0,U}}),this||self),F1="closure_uid_"+(Math.random()*1E9>>>0),X1=0,Bw,p_=function(I,F,p,P,V,U){P=49;{V=42;while(5)try{if(P==54)break;else if(P==49)P=R.addEventListener&&Object.defineProperty?13:63;else if(P==57)V=22,F=function(){},R.addEventListener("test",F,I),R.removeEventListener("test",F,I),P=35;else{if(P==35)return V=42,p;if(P==13)p=false,I=Object.defineProperty({},"passive",{get:function(){p=true}}),P=57;else{if(P==63)return false;P==97&&(V=42,P=35)}}}catch(w){if(V==42)throw w;V==22&&(U=w,P=97)}}}(),i7=((OM(7,2,((Vx.prototype.stopPropagation=function(){this.yX=true},((Vx.prototype.preventDefault=function(){this.defaultPrevented=true},jh).prototype.Y=false,jh.prototype).dispose=function(I){for(I=97;I!=13;)I==64?(this.Y=true,this.V(),I=13):I==97&&(I=this.Y?13:64)},jh).prototype[Symbol.dispose]=(jh.prototype.V=function(I){{I=23;while(I!=52)I==84?I=40:I==66?I=40:I==23?I=this.aB?66:52:I==40?I=this.aB.length?27:52:I==27&&(this.aB.shift()(),I=84)}},function(){this.dispose()}),16),BX,Vx),BX.prototype).init=function(I,F,p,P,V,U){{U=78;while(U!=96)U==74?(P=I.fromElement,U=50):U==37?U=P?50:33:U==78?(p=this.type=I.type,V=I.changedTouches&&I.changedTouches.length?I.changedTouches[0]:null,this.target=I.target||I.srcElement,this.currentTarget=F,P=I.relatedTarget,U=37):U==70?(this.button=I.button,this.keyCode=I.keyCode||0,this.key=I.key||"",this.charCode=I.charCode||(p=="keypress"?I.keyCode:0),this.ctrlKey=I.ctrlKey,this.altKey=I.altKey,this.shiftKey=I.shiftKey,this.metaKey=I.metaKey,this.pointerId=I.pointerId||0,this.pointerType=I.pointerType,this.state=I.state,this.timeStamp=I.timeStamp,this.gl=I,I.defaultPrevented&&BX.D.preventDefault.call(this),U=96):U==42?(this.offsetX=I.offsetX,this.offsetY=I.offsetY,this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0,U=70):U==33?U=p=="mouseover"?74:32:U==50?(this.relatedTarget=P,U=35):U==89?(P=I.toElement,U=50):U==55?(this.clientX=V.clientX!==void 0?V.clientX:V.pageX,this.clientY=V.clientY!==void 0?V.clientY:V.pageY,this.screenX=V.screenX||0,this.screenY=V.screenY||0,U=70):U==32?U=p=="mouseout"?89:50:U==35&&(U=V?55:42)}},BX.prototype.stopPropagation=function(){BX.D.stopPropagation.call(this),this.gl.stopPropagation?this.gl.stopPropagation():this.gl.cancelBubble=true},BX.prototype.preventDefault=function(I){I=(BX.D.preventDefault.call(this),this.gl),I.preventDefault?I.preventDefault():I.returnValue=false},"closure_listenable_"+(Math.random()*1E6|0)),PX=0,Xx="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),hF=(eh.prototype.hasListener=((eh.prototype.ey=function(I,F,p,P,V,U){return U=(V=-1,this.i)[p.toString()],U&&(V=RD(I,U,7,0,F,P)),V>-1?U[V]:null},eh.prototype).remove=(eh.prototype.add=function(I,F,p,P,V,U,w,m,L,y){{y=54;while(y!=72)if(y==66)w=RD(P,m,3,0,F,V),y=33;else if(y==44)U=m[w],y=78;else if(y==99)m=this.i[L]=[],this.vD++,y=66;else if(y==15)y=m?66:99;else if(y==78)y=p?91:64;else{if(y==91)return U;y==33?y=w>-1?44:12:y==64?(U.zc=false,y=91):y==54?(L=I.toString(),m=this.i[L],y=15):y==12&&(U=new cX(L,!!P,V,this.src,F),U.zc=p,m.push(U),y=91)}}},function(I,F,p,P,V,U,w,m){{m=83;while(m!=34)if(m==86)V=this.i[w],U=RD(p,V,6,0,F,P),m=54;else if(m==73)delete this.i[w],this.vD--,m=38;else if(m==88)m=w in this.i?86:19;else{if(m==75||m==19)return false;if(m==58)Pw(15,true,12,V[U]),Array.prototype.splice.call(V,U,1),m=4;else if(m==4)m=V.length==0?73:38;else if(m==54)m=U>-1?58:75;else if(m==83)w=I.toString(),m=88;else if(m==38)return true}}}),function(I,F,p,P,V){return D7(true,(p=(P=I!==(V=F!==void 0,void 0))?I.toString():"",false),40,this.i,function(U,w,m){for(m=65;m!=67;){if(m==63)return true;if(m==9)m=w<U.length?96:59;else if(m==93)++w,m=9;else if(m==65)w=0,m=92;else{if(m==59)return false;m==96?m=P&&U[w].type!=p||V&&U[w].capture!=F?93:63:m==92&&(m=9)}}})}),"closure_lm_")+(Math.random()*1E6|0),w8={},Gj=0,J1="__closure_events_fn_"+(Math.random()*1E9>>>0);((((t=((OM(7,2,20,$w,jh),$w.prototype)[i7]=true,$w.prototype),t).Nh=function(I){this.hF=I},t).addEventListener=function(I,F,p,P){NA(null,p,8,P,F,true,this,I)},t.removeEventListener=function(I,F,p,P){US(0,39,null,P,p,F,I,this)},t.dispatchEvent=function(I,F,p,P,V,U,w,m,L,y,v,X){for(X=13;X!=35;)if(X==85)F.push(v),X=97;else{if(X==63)return L;X==61?(F=[],X=92):X==38?X=!P.yX&&U<V.length?74:63:X==98?(P=new Vx(P,p),X=53):X==57?(w=P,P=new Vx(m,p),pn(P,w),X=53):X==48?X=P instanceof Vx?39:57:X==72?(P=I,m=P.type||P,p=this.p6,V=F,X=75):X==67?X=V?55:86:X==74?(y=P.currentTarget=V[U],L=NA(true,P,5,m,false,y)&&L,X=17):X==26?X=v?85:72:X==13?(v=this.hF,X=28):X==77?(U--,X=91):X==91?X=!P.yX&&U>=0?5:86:X==55?(U=V.length-1,X=82):X==92?X=26:X==40?X=38:X==5?(y=P.currentTarget=V[U],L=NA(true,P,7,m,true,y)&&L,X=77):X==44?(y=P.currentTarget=p,L=NA(true,P,6,m,true,y)&&L,P.yX||(L=NA(true,P,3,m,false,y)&&L),X=25):X==39?(P.target=P.target||p,X=53):X==75?X=typeof P==="string"?98:48:X==86?X=P.yX?25:44:X==97?(v=v.hF,X=26):X==28?X=v?61:72:X==25?X=V?51:63:X==82?X=91:X==53?(L=true,X=67):X==17?(U++,X=38):X==51&&(U=0,X=40)}},t).V=function(){($w.D.V.call(this),this.B&&UM(41,8,0,true,this.B),this).hF=null},t.ey=function(I,F,p,P){return this.B.ey(I,F,String(p),P)},t).hasListener=function(I,F){return this.B.hasListener(I!==void 0?String(I):void 0,F)};var gD;US(YZ,((((((("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON","INPUT"]),t=JF.prototype,t.o=function(I){return typeof I==="string"?this.VX.getElementById(I):I},t).getElementsByTagName=function(I,F){return(F||this.VX).getElementsByTagName(String(I))},t).createElement=function(I,F,p){return(p=String(I),F=this.VX,F.contentType==="application/xhtml+xml"&&(p=p.toLowerCase()),F).createElement(p)},t).createTextNode=function(I){return this.VX.createTextNode(String(I))},t).appendChild=function(I,F){I.appendChild(F)},t).append=function(I,F){D7(null,1,24,"","number",I.nodeType==9?I:I.ownerDocument||I.document,arguments,I)},t.canHaveChildren=function(I,F){for(F=29;F!=89;){if(F==51)return false;if(F==25){switch(I.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return false}return true}F==29&&(F=I.nodeType!=1?51:25)}},t).removeNode=Z5,t.contains=function(I,F,p){{p=97;while(p!=85)if(p==27)p=I.contains&&F.nodeType==1?61:35;else{if(p==93)return F==I;if(p==88)return false;if(p==97)p=I&&F?27:88;else{if(p==61)return I==F||I.contains(F);if(p==83)p=38;else if(p==38)p=F&&I!=F?23:93;else if(p==49)p=38;else if(p==23)F=F.parentNode,p=49;else if(p==35)p=typeof I.compareDocumentPosition!="undefined"?30:83;else if(p==30)return I==F||!!(I.compareDocumentPosition(F)&16)}}}},69)),YZ.prototype.n6="";while(0===-0)if(false==(YZ.prototype.aA=0,![]))break;(((((((OM(7,2,22,b7,$w),t=b7.prototype,t).Ei=YZ.IB(),t).o=function(){return this.W},t).getParent=function(){return this.fl},t).Xx=function(){this.Tc=((Tj(24,18,function(I){I.Tc&&I.Xx()},this),this.iq)&&UM(41,9,0,true,this.iq),false)},t).V=function(I){{I=21;while(I!=84)I==72?I=this.iq?81:6:I==6?(Tj(24,19,function(F){F.dispose()},this),!this.Ac&&this.W&&Z5(this.W),this.BD=this.cD=this.W=this.fl=null,b7.D.V.call(this),I=84):I==21?(this.Tc&&this.Xx(),I=72):I==81&&(this.iq.dispose(),delete this.iq,I=6)}},t).Nh=function(I,F){for(F=74;F!=95;)if(F==64)b7.D.Nh.call(this,I),F=95;else{if(F==11)throw Error("Method not supported");F==74&&(F=this.fl&&this.fl!=I?11:64)}},t).removeChild=function(I,F,p,P,V,U,w,m,L,y,v,X,g){{g=25;while(g!=85)if(g==72)I=P,g=29;else if(g==89)V=this.cD,v in V&&delete V[v],yj(22,I,25,0,this.BD),g=63;else{if(g==43)return I;if(g==83)m.fl=null,b7.D.Nh.call(m,null),g=52;else if(g==11)v=w,g=44;else if(g==78)P=null,g=72;else if(g==34)g=(L=I.qI)?20:3;else if(g==3)p=I,U=I.Ei,y=U.n6+":"+(U.aA++).toString(36),L=p.qI=y,g=20;else if(g==74)I.Xx(),I.W&&Z5(I.W),g=16;else{if(g==75)throw Error("Child is not in parent component");if(g==20)w=L,g=11;else if(g==25)g=I?40:52;else if(g==56)X=this.cD,P=(X!==null&&v in X?X[v]:void 0)||null,g=72;else if(g==44)g=this.cD&&v?56:78;else if(g==60)g=m==null?7:83;else if(g==29)g=v&&I?89:52;else if(g==52)g=I?43:75;else if(g==91)w=I,g=11;else if(g==63)g=F?74:16;else if(g==40)g=typeof I==="string"?91:34;else if(g==16)m=I,g=60;else if(g==7)throw Error("Unable to set parent component");}}}};var w5,Uk=(t=(US(r8,67),r8.prototype),t.JF=function(I,F,p,P,V,U,w,m,L){for(w=(L=76,77);;)try{if(L==10)break;else L==91?L=U!=F?61:10:L==32?L=RD(I,32,21,2)?49:98:L==53?(p=P.tabIndex,U=typeof p==="number"&&p>=0&&p<32768,L=91):L==77?(w=4,P.blur(),L=52):L==76?L=Z7(32,9,I)&&(P=I.Fx())?41:10:L==46?(V.tabIndex=-1,V.removeAttribute("tabIndex"),L=10):L==98?L=(U=P.hasAttribute("tabindex"))?53:91:L==61?(V=P,L=11):L==49?(I.Uz&4&&Z7(4,10,I)&&I.setActive(false),I.Uz&32&&Z7(32,14,I)&&kw(32,7,0,I,false,32)&&I.P(false,32),L=98):L==71?(V.tabIndex=0,L=10):L==43?(w=77,L=52):L==52?(w=77,L=32):L==41?L=!F&&RD(I,32,24,2)?77:98:L==11&&(L=F?71:46)}catch(y){if(w==77)throw y;w==4&&(m=y,L=43)}},t.PD=function(I,F,p,P,V,U,w,m){(P=((w=I.getAttribute((w5||(w5={1:"disabled",8:"selected",16:"checked",64:"expanded"}),U=w5[F],"role"))||null)?(V=Uk[w]||U,m=U=="checked"||U=="selected"?V:U):m=U,m))&&aD(9,22,"aria-","hidden",p,P,I)},t.pl=function(I,F,p,P){(P=F.o?F.o():F)&&(p?C_:Mk)(P,[I])},{button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"}),dD=(US((OM((t.P=function(I,F,p,P,V,U,w){for(w=76;w!=57;)w==14?w=this.rl?99:37:w==76?(U=F.o(),w=13):w==99?((P=this.rl[I])&&this.pl(P,F,p),this.PD(U,I,p),w=57):w==13?w=U?14:57:w==37&&(V=this.Xh(),V.replace(/\\xa0|\\s/g," "),this.rl={1:V+"-disabled",2:V+"-hover",4:V+"-active",8:V+"-selected",16:V+"-checked",32:V+"-focused",64:V+"-open"},w=99)},t.Fx=(t.Xh=function(){return"goog-control"},function(I){return I.o()}),7),2,19,Nk,r8),Nk),68),{});if(typeof MA!==((((((((((OM(7,2,17,MA,(Nk.prototype.PD=(Nk.prototype.Xh=function(){return"goog-button"},function(I,F,p){switch(F){case 8:case 16:aD(9,30,"aria-","hidden",p,"pressed",I);break;default:case 64:case 1:Nk.D.PD.call(this,I,F,p)}}),b7)),t=MA.prototype,t.Uz=255,t.Mh=0,t).hc=0,t.si=true,t).Fx=function(){return this.T.Fx(this)},t.Xx=function(){((MA.D.Xx.call(this),this.nl)&&this.nl.detach(),this.isVisible()&&this.isEnabled())&&this.T.JF(this,false)},t).pl=function(I,F,p){for(p=7;p!=95;)p==99?p=F&&this.I&&yj(22,F,26,0,this.I)?24:95:p==24?p=this.I.length==0?32:2:p==16?(this.I?C(52,1,F,this.I)>=0||this.I.push(F):this.I=[F],this.T.pl(F,this,true),p=95):p==2?(this.T.pl(F,this,false),p=95):p==7?p=I?65:99:p==65?p=F?16:95:p==32&&(this.I=null,p=2)},t).K6=39,t).V=function(I){{I=22;while(I!=68)I==17?(delete this.T,this.I=null,I=68):I==5?(this.nl.dispose(),delete this.nl,I=17):I==97?I=this.nl?5:17:I==22&&(MA.D.V.call(this),I=97)}},t.I=null,t).isVisible=function(){return this.si},t.isEnabled=function(){return!RD(this,1,20,2)},t).isActive=function(){return RD(this,4,17,2)},t).setActive=function(I){kw(32,6,0,this,I,4)&&this.P(I,4)},t.getState=function(){return this.Mh},t).P=function(I,F,p,P,V,U){{U=84;while(U!=59)U==42?U=P?68:27:U==25?(this.T.P(F,this,I),this.Mh=I?this.Mh|F:this.Mh&~F,U=59):U==27?(this.setActive(false),kw(32,5,0,this,false,2)&&this.P(false,2),U=68):U==4?U=V&&typeof V.isEnabled=="function"&&!V.isEnabled()||!kw(32,8,0,this,!P,1)?59:42:U==68?(this.isVisible()&&this.T.JF(this,P),this.P(!P,1,true),U=59):U==84?U=p||F!=1?31:89:U==31?U=Z7(F,13,this)&&I!=RD(this,F,25,2)?25:59:U==89&&(P=!I,V=this.getParent(),U=4)}},"function"))throw Error("Invalid component class "+MA);while(typeof r8!=="function"){throw Error("Invalid renderer class "+r8);if(Number(void false)!==NaN)break}var mZ=Hw(6,3,MA),g8={passive:true,capture:(AF(43,6,function(){return new D5(null)},(OM(7,2,(((US(l7,(OM(7,2,18,(AF(43,(dD[mZ]=r8,3),function(){return new MA(null)},"goog-control"),l7),Nk),74)),l7.prototype.P=function(I,F,p,P,V){{V=24;while(V!=59)V==85?(P.disabled=p,V=59):V==24?(l7.D.P.call(this,I,F,p),P=F.o(),V=77):V==77&&(V=P&&I==1?85:59)}},l7).prototype.JF=function(){},l7.prototype).PD=function(){},21),D5,MA),D5.prototype.V=function(){delete (delete (D5.D.V.call(this),this).dm,this).Ui},"goog-button")),true)},oD=R.requestIdleCallback?function(I){requestIdleCallback(function(){I()},{timeout:4})}:R.setImmediate?function(I){setImmediate(I)}:function(I){setTimeout(I,0)},Sh,RT=String.fromCharCode(105,110,116,101,103,67,104,101,99,107,66,121,112,97,115,115),K_=[],LG=[],aT=(r.prototype.IA=(r.prototype.tc=void 0,false),[]),yx=[],WX=[],L_=(r.prototype.kX=void 0,r.prototype.Sy="toString",[]),h1=[],kZ={},vX=[],CG=(((((Py,function(){})(n_),function(){})(Vy),Fx,function(){})(I2),function(){})(oT),kZ).constructor,qA=void 0;if(t=(r.prototype.A="create",r).prototype,"C")t.c$=function(){return kw.call(this,32,26)};var d8=(((((((t.L=(window.performance||{}).now?function(){return this.u2+window.performance.now()}:function(){return+new Date},t).tF=(t.Sa=function(I,F,p,P,V,U,w,m,L){return KG.call(this,8,I,F,p,P,V,U,w,m,L)},t.Jc=function(I,F,p,P,V,U,w,m,L){return Z7.call(this,I,5,F,p,P,V,U,w,m,L)},function(I,F,p,P,V,U){return b.call(this,I,3,F,p,P,V,U)}),t.RA=function(){return C.call(this,20)},(t.Fh=function(I,F,p,P,V){return fG.call(this,5,2,15,F,I,p,P,V)},t).NI=0,t=r.prototype,t).l=function(I,F){return I=(qA=(F={},function(){return F==I?15:-29}),{}),function(p,P,V,U,w,m,L,y,v,X,g,x,a,f,A,c,Z,B,d,H,vw,z,q,k,Vj,u,M,N,ID,xw,l,cw,h,ES,J,wD,zk,vy,rD,xv,E){E=(J=67,wD=undefined,6);{xv=false;while(!null)try{if(J==82)break;else if(J==42)X++,J=32;else if(J==45)J=wD!==undefined?51:44;else if(J==32)J=X<q.length?48:93;else if(J==55)ix(104,this,G(v.length,2).concat(v),166),J=91;else if(J==12)J=k>255?95:30;else{if(J==77)return rD;if(J==99)E=61,xw=atob(vw),L=cw=0,V=[],J=33;else if(J==48)g=q[X][this.Sy](16),g.length==1&&(g="0"+g),H+=g,J=42;else if(J==80)p[1].push(W(270,this)[0],W(188,this).length,T(484,this).length,T(113,this).length,T(104,this).length,W(280,this).length,W(469,this).length,T(440,this).length),K(504,this,p[2]),this.g[272]&&OS(0,10001,this,22,T(272,this)),J=51;else if(J==89)E=26,bx(229,22,this,10001),J=51;else if(J==88)J=U.done?98:27;else if(J==65)J=88;else if(J==76)J=Vj==aT?40:4;else if(J==27)y=U.value,J=20;else if(J==43)k=xw.charCodeAt(L),J=12;else if(J==25)J=H?14:38;else if(J==4)J=Vj==yx?97:2;else if(J==71)J=Vj==vX?79:76;else if(J==79)B=p[2],N=G((ID=Y(104,this).length,-2*~ID+(ID^2)+2*(~ID|2)),2),w=this.X,this.X=this,J=73;else if(J==59)J=Vj==WX?84:26;else if(J==67)m=F,F=I,J=50;else if(J==51)E=6,F=m,J=87;else if(J==95)V[cw++]=255+(~k^255)-(~k|255),k>>=8,J=30;else if(J==36)J=L<xw.length?43:9;else if(J==53)E=26,J=64;else if(J==40)OS(0,p[2],this,22,p[1]),J=51;else{if(J==74)return rD;if(J==64)U=x.next(),J=88;else if(J==38)H="",X=0,J=7;else if(J==86)J=v.length>4?21:91;else if(J==9)this.qh=V,this.R=this.qh.length<<3,n(413,this,[0,0,0]),J=89;else if(J==97)rD=OS(0,10001,this,22,p[1]),wD=74,J=51;else if(J==2)J=Vj==h1?31:51;else if(J==62)v=v.slice(0,1E6),ix(104,this,[],197),lx(104,[],this,36),J=55;else if(J==91)E=26,this.X=w,J=45;else if(J==93)A=H,Y(270,this)[0]=B.shift(),W(188,this).length=B.shift(),T(484,this).length=B.shift(),Y(113,this).length=B.shift(),W(104,this).length=B.shift(),Y(280,this).length=B.shift(),T(469,this).length=B.shift(),T(440,this).length=B.shift(),rD=A,wD=77,J=51;else if(J==52)E=26,eG(ES,this,469,17),wD=82,J=51;else if(J==57)L++,J=36;else if(J==84)vw=p[1],J=99;else if(J==30)V[cw++]=k,J=57;else if(J==20)E=93,y(),J=64;else if(J==31){if(M=Y(241,this),Z=typeof Symbol!="undefined"&&Symbol.iterator&&M[Symbol.iterator])u=Z.call(M);else if(typeof M.length=="number")u={next:fG(5,2,3,M,0)};else throw Error(String(M)+" is not an iterable or ArrayLike");J=(U=(x=u,x.next()),65)}else if(J==44)E=26,q=n_(2).concat(T(104,this)),q[1]=(f=q[0],-(f&60)-1- -61+(f&-61)),q[3]=q[1]^N[0],q[4]=(c=q[1],P=N[1],-(c|0)-(P|0)+2*(c|P)),H=this.zO(q),J=25;else if(J==21)J=v.length>1E6?62:55;else if(J==26)J=Vj==L_?80:71;else if(J==73)E=34,a=T(339,this),a.length>0&&lx(104,G(a.length,2).concat(a),this,48),lx(104,G(this.H+1>>1,1),this,87),ix(104,this,G(this[vX].length,1)),z=this.wl?W(440,this):Y(469,this),z.length>0&&lx(188,G(z.length,2).concat(z),this,64),d=Y(188,this),d.length>4&&lx(104,G(d.length,2).concat(d),this,65),l=0,v=W(484,this),l+=Y(79,this)&2047,l-=(h=W(104,this).length,(h|5)-(h&5)-2*~h+2*(~h|5)),v.length>4&&(l-=(v.length|0)+3),l>0&&ix(104,this,G(l,2).concat(n_(l)),53),J=86;else if(J==98)M.length=0,J=51;else if(J==7)J=32;else if(J==50)E=26,Vj=p[0],J=59;else if(J==14)H="*"+H,J=93;else if(J==33)J=36;else if(J==87)wD!==undefined?(J=wD,wD=undefined):J=82;else if(J==23)throw zk;}}}catch(IT){if(zk=IT,E==6)throw IT;E==26?(wD=23,J=51):E==34?(wD=23,J=91):E==61?(ES=IT,J=52):E==93&&(vy=IT,J=53)}}}}(),t).Zb=0,t.ea=0,t).kn=function(){return KG.call(this,16)},t).mN=function(){return pG.call(this,3)},t).zO=function(I,F,p,P,V){return Z7.call(this,I,17,F,p,P,V)},/./),sS,Ln=WX.pop.bind((r.prototype[K_]=[0,0,1,1,0,1,1],r.prototype)[L_]),Qx=function(I,F){while({}){return(F=e(3,"error",null,"ks"))&&I.eval(F.createScript("1"))===1?function(p){return F.createScript(p)}:function(p){return""+p};if(![]==false)break}}(((sS=kw(32,17,{get:Ln},(d8[r.prototype.Sy]=Ln,r).prototype.A),r.prototype).TO=void 0,R));((Sh=R.knitsail||(R.knitsail={}),Sh.m)>40||(Sh.m=41,Sh.ks=Gk,Sh.a=Yw),Sh).HJI_=function(I,F,p,P,V,U,w,m,L){return L=new r(P,F,U,w,I,m,V),[function(y){return Hw(6,27,false,L,y)},function(y){L.kn(y)}]};}).call(this);'].join('\n')));}).call(this);
!(function(){var r='1';var ce=30;var sctm=false;var p='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';var g='knitsail';var eid='F63xaKLYEN_e2roPuMSCQA';var ss_cgi=false;var sp='';var hashed_query='';var cbs='';var ussv='';var content_bindings=[];var challenge_version=0;var bgas=false;(function(){var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,f){if(a==Array.prototype||a==Object.prototype)return a;a[b]=f.value;return a},u=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var f=a[b];if(f&&f.Math==Math)return f}throw Error("a");},w=u(this),x=function(a,b){if(b)a:{var f=w;a=a.split(".");for(var h=0;h<a.length-1;h++){var e=a[h];if(!(e in
f))break a;f=f[e]}a=a[a.length-1];h=f[a];b=b(h);b!=h&&b!=null&&t(f,a,{configurable:!0,writable:!0,value:b})}},aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},y=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error("b`"+String(a));};x("Promise",function(a){function b(){this.i=null}function f(c){return c instanceof e?c:new e(function(d){d(c)})}if(a)return a;b.prototype.j=function(c){if(this.i==null){this.i=[];var d=this;this.l(function(){d.v()})}this.i.push(c)};var h=w.setTimeout;b.prototype.l=function(c){h(c,0)};b.prototype.v=function(){for(;this.i&&this.i.length;){var c=this.i;this.i=[];for(var d=0;d<c.length;++d){var k=c[d];c[d]=null;try{k()}catch(l){this.A(l)}}}this.i=null};b.prototype.A=function(c){this.l(function(){throw c;})};var e=function(c){this.j=0;this.l=void 0;this.i=[];this.D=!1;var d=this.A();try{c(d.resolve,d.reject)}catch(k){d.reject(k)}};e.prototype.A=function(){function c(l){return function(m){k||(k=!0,l.call(d,m))}}var d=this,k=!1;return{resolve:c(this.J),reject:c(this.v)}};e.prototype.J=function(c){if(c===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof e)this.L(c);else{a:switch(typeof c){case "object":var d=c!=null;break a;case "function":d=!0;break a;default:d=!1}d?this.I(c):this.C(c)}};e.prototype.I=function(c){var d=void 0;try{d=c.then}catch(k){this.v(k);return}typeof d=="function"?this.M(d,c):this.C(c)};e.prototype.v=function(c){this.F(2,c)};e.prototype.C=function(c){this.F(1,c)};e.prototype.F=function(c,d){if(this.j!=0)throw Error("c`"+c+"`"+d+"`"+this.j);this.j=c;this.l=d;this.j===2&&this.K();this.G()};e.prototype.K=function(){var c=this;h(function(){if(c.H()){var d=w.console;typeof d!=="undefined"&&d.error(c.l)}},1)};e.prototype.H=function(){if(this.D)return!1;var c=w.CustomEvent,d=w.Event,k=w.dispatchEvent;if(typeof k==="undefined")return!0;typeof c==="function"?c=new c("unhandledrejection",{cancelable:!0}):typeof d==="function"?c=new d("unhandledrejection",{cancelable:!0}):(c=w.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.l;return k(c)};e.prototype.G=function(){if(this.i!=null){for(var c=0;c<this.i.length;++c)n.j(this.i[c]);this.i=null}};var n=new b;e.prototype.L=function(c){var d=this.A();c.B(d.resolve,d.reject)};e.prototype.M=function(c,d){var k=this.A();try{c.call(d,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(c,d){function k(q,v){return typeof q=="function"?function(A){try{l(q(A))}catch(B){m(B)}}:v}var l,m,C=new e(function(q,v){l=q;m=v});this.B(k(c,l),k(d,m));return C};e.prototype.catch=function(c){return this.then(void 0,c)};e.prototype.B=function(c,d){function k(){switch(l.j){case 1:c(l.l);break;case 2:d(l.l);break;default:throw Error("d`"+l.j);}}var l=
this;this.i==null?n.j(k):this.i.push(k);this.D=!0};e.resolve=f;e.reject=function(c){return new e(function(d,k){k(c)})};e.race=function(c){return new e(function(d,k){for(var l=y(c),m=l.next();!m.done;m=l.next())f(m.value).B(d,k)})};e.all=function(c){var d=y(c),k=d.next();return k.done?f([]):new e(function(l,m){function C(A){return function(B){q[A]=B;v--;v==0&&l(q)}}var q=[],v=0;do q.push(void 0),v++,f(k.value).B(C(q.length-1),m),k=d.next();while(!k.done)})};return e});
var z=this||self;function D(){var a,b;return(a=window.performance)==null?void 0:(b=a.getEntriesByType)==null?void 0:b.call(a,"navigation")[0]};function E(){var a;return(a=D())==null?void 0:a.type}function F(){var a,b;return(a=window.performance)==null?void 0:(b=a.navigation)==null?void 0:b.type};function G(a,b){google.c.e("load",a,String(b))};var ba=window.location;function H(a){return(a=ba.search.match(new RegExp("[?&]"+a+"=(\\d+)")))?Number(a[1]):-1}
function I(){var a=google.timers.load,b=a.e,f=google.stvsc;f&&(b.ssr=1);if(f)f=f.isBF;else{var h;f=((h=window.google)==null?0:h.rdn)?E()==="back_forward":F()===2}f&&(b.bb=1);var e;(((e=window.google)==null?0:e.rdn)?E()==="reload":F()===1)&&(b.r=1);if(h=D())(e=h.type)&&(b.nt=e),e=h.deliveryType,e!=null&&(b.dt=e),e=h.transferSize,e!=null&&(b.ts=e),h=h.nextHopProtocol,h!=null&&(b.nhp=h);(h=window.navigation)&&(h=h.activation)&&(h=h.navigationType)&&(b.ant=h);b=a.m;if(!b||!b.prs){h=window._csc==="agsa"&&
window._cshid;b=H("qsubts");var n;((n=window.google)==null?0:n.rdn)?(n=E(),n=!n||n==="navigate"):n=!F();h=n&&!h?a.qsubts||b:0;e="r";h>0&&(n=a.fbts||H("fbts"),n>0&&(a.t.start=Math.max(h,n),e=a.fbts===n?"i":"u"));f=a.t;var c=f.start;n={};a.wsrt!==void 0&&(n.wsrt=a.wsrt);if(c)for(var d in f)if(d!=="start"){var k=f[d];n[d]=d==="sgl"?k:d==="prs"?c-k:Math.max(k-c,0)}h>0&&(n.gsasrt=a.t.start-h,d=H("qsd"),d>0&&G("qsd",d),G("ests",(a.qsubts===h?"i":"u")+e),a.qsubts&&a.qsubts!==b&&G("qd",a.qsubts-b));d=a.e;a="/gen_204?s="+google.sn+"&t=sg&atyp=csi&ei="+google.kEI+"&rt=";b="";for(m in n)a+=""+b+m+"."+n[m],b=",";for(var l in d)a+="&"+l+"="+d[l];var m="";z._cshid&&(m+="&cshid="+z._cshid);(l=window.google&&window.google.kOPI||null)&&(m+="&opi="+l);m=a+=m;typeof navigator.sendBeacon==="function"?navigator.sendBeacon(m,""):google.log("","",m)}};var J=function(){var a=location.href;this.i=this.j="";var b=a.indexOf("#");b>0&&(this.j=a.substring(b),a=a.substring(0,b));b=a.indexOf("?");b>0&&(this.i="&"+a.substring(b+1),a=a.substring(0,b));this.l=a},L=function(a,b,f){K(a,b);a.i=a.i+"&"+b+"="+f},K=function(a,b){a.i=a.i.replace(new RegExp("&"+b+"=([^&]+)","g"),"")};J.prototype.toString=function(){return""+this.l+(this.i?"?"+this.i.substring(1):"")+this.j};
var M=function(a){this.i=a};M.prototype.toString=function(){return this.i};var N=function(a){this.N=a};function O(a){return new N(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}var ca=[O("data"),O("http"),O("https"),O("mailto"),O("ftp"),new N(function(a){return/^[^:]*([/?#]|$)/.test(a)})],da=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function ea(){var a=z[g];if(a){a=y((0,a.a)(p,function(){},!1)).next().value;var b=[P()];return a(b)}Q(Error("f"))}function fa(a,b){var f=z[g];if(f){b=f.a;var h=[P()];b(p,function(e){return void e(a,h)},!1,void 0,void 0,void 0,void 0,!0)}else b(Error("f"))}function P(){var a={};content_bindings.forEach(function(b){a[b.key]=b.value});return a}function R(a){var b=challenge_version,f=cbs;return b>0?"B."+b+"."+f+"."+a:a}
function S(a){var b=new Date;b.setSeconds(b.getSeconds()+(Number(ce)||300));var f="SG_SS="+a,h=document.cookie.length+f.length;r&&(h<4093&&!ss_cgi&&(document.cookie=f+("; expires="+b.toUTCString())),T(),ss_cgi||document.cookie.indexOf("SG_SS=")<0?U(a):V(W()))}
function T(){var a;a:{if(window.st&&(a=window.st(location.href)))break a;a=performance&&performance.timing&&performance.timing.navigationStart?performance.timing.navigationStart:void 0}if(a)try{var b;((b=window)==null?0:b.sessionStorage)&&window.sessionStorage.setItem(eid,String(a))}catch(f){}}function W(){var a=eid,b=new J;K(b,"sg_ss");L(b,"sei",a);return b.toString()}function U(a){var b=eid,f=new J;L(f,"sg_ss",encodeURIComponent(a));L(f,"sei",b);V(f.toString())}
function ha(a){if(window.prs){X("psrt");sctm&&I();var b=W();window.prs(b,a).catch(function(){U(a)})}else U(a)}function V(a){X("psrt");sctm&&I();window.prs?window.prs(a).catch(function(){Y(a)}):Y(a)}
function Y(a){if(window.pr)window.pr(a);else{a:{var b=b===void 0?ca:b;if(a instanceof M)b=a;else{for(var f=0;f<b.length;++f){var h=b[f];if(h instanceof N&&h.N(a)){b=new M(a);break a}}b=void 0}}a=location;if(b instanceof M)if(b instanceof M)b=b.i;else throw Error("e");else b=da.test(b)?b:void 0;b!==void 0&&a.replace(b)}}function Q(a){navigator.sendBeacon("/gen_204?cad=sg_b_e&e="+a,"")}
function ia(){X("bsst");if(bgas)fa(function(b){X("bset");S(R(b))},function(b){Q(b);X("bset")});else{var a=ea();console.log(a);X("bset");a&&S(R(a))}}function X(a){sctm&&google.tick("load",a)};navigator||(z.navigator={});typeof navigator.sendBeacon!=="function"&&(navigator.sendBeacon=function(a){(new Image).src=a});window.onerror=function(a,b,f,h,e){navigator.sendBeacon("/gen_204?emsg="+(e instanceof Error?e.message:a)+"&srcpg=sgs&jsr=1&jsel=3")};X("sst");var Z;window.sgs&&ussv?(X("ssst"),Z=window.sgs(sp).then(function(a){X("sset");r&&(T(),ha(a));return!0},function(){return!1})):Z=Promise.resolve(!1);Z.then(function(a){a||ia()}).catch(function(a){Q(a)});}).call(this);})();