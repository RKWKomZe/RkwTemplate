window.addEventListener('DOMContentLoaded', function () {
  CookieConsentFocusTrap.getCookieConsent();
});

var CookieConsentFocusTrap = {
  getCookieConsent: function () {
    var observer = new MutationObserver(function (mutationsList) {
      var cookieScreen = null;

      for (var i = 0; i < mutationsList.length; i++) {
        var mutation = mutationsList[i];
        if (cookieScreen === null && mutation.type === 'childList') {
          cookieScreen = document.getElementById('cookieScreen');
          if (cookieScreen) {
            var removeFocusTrap = CookieConsentFocusTrap.createFocusTrap(cookieScreen);
            var observerForRemoval = new MutationObserver(function () {
              if (!document.body.contains(cookieScreen)) {
                removeFocusTrap();
                observerForRemoval.disconnect();
              }
            });
            observerForRemoval.observe(document.body, { childList: true, subtree: true });
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },

  createFocusTrap: function (element) {
    var focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var focusableElements = Array.prototype.slice.call(element.querySelectorAll(focusableSelectors));

    if (focusableElements.length === 0) {
      return function () {};
    }

    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(event) {
      if (focusableElements.length === 0) return;

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    function enforceFocus(event) {
      if (!element.contains(document.activeElement)) {
        firstElement.focus();
      }
    }

    element.addEventListener('keydown', trapFocus);
    document.addEventListener('focusin', enforceFocus);

    return function () {
      element.removeEventListener('keydown', trapFocus);
      document.removeEventListener('focusin', enforceFocus);
    };
  }
};

$(function () {
  /**
   * Apply is-touch class for touch devices
   */
  var isTouch = false;
  if (
    /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
      navigator.userAgent || navigator.vendor || window.opera
    )
  ) {
    $("body").addClass("is-touch");
    isTouch = true;
  }
});

//JQuery UI Selectors :tabbable and :focusable
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  $.ui = $.ui || {};

  var version = ($.ui.version = "1.12.1");

  /*!
   * jQuery UI Focusable 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: :focusable Selector
  //>>group: Core
  //>>description: Selects elements which can be focused.
  //>>docs: http://api.jqueryui.com/focusable-selector/

  // Selectors
  $.ui.focusable = function (element, hasTabindex) {
    var map,
      mapName,
      img,
      focusableIfVisible,
      fieldset,
      nodeName = element.nodeName.toLowerCase();

    if ("area" === nodeName) {
      map = element.parentNode;
      mapName = map.name;
      if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
        return false;
      }
      img = $("img[usemap='#" + mapName + "']");
      return img.length > 0 && img.is(":visible");
    }

    if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
      focusableIfVisible = !element.disabled;

      if (focusableIfVisible) {
        // Form controls within a disabled fieldset are disabled.
        // However, controls within the fieldset's legend do not get disabled.
        // Since controls generally aren't placed inside legends, we skip
        // this portion of the check.
        fieldset = $(element).closest("fieldset")[0];
        if (fieldset) {
          focusableIfVisible = !fieldset.disabled;
        }
      }
    } else if ("a" === nodeName) {
      focusableIfVisible = element.href || hasTabindex;
    } else {
      focusableIfVisible = hasTabindex;
    }

    return (
      focusableIfVisible && $(element).is(":visible") && visible($(element))
    );
  };

  // Support: IE 8 only
  // IE 8 doesn't resolve inherit to visible/hidden for computed values
  function visible(element) {
    var visibility = element.css("visibility");
    while (visibility === "inherit") {
      element = element.parent();
      visibility = element.css("visibility");
    }
    return visibility !== "hidden";
  }

  $.extend($.expr[":"], {
    focusable: function (element) {
      return $.ui.focusable(element, $.attr(element, "tabindex") != null);
    },
  });

  var focusable = $.ui.focusable;

  /*!
   * jQuery UI Tabbable 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: :tabbable Selector
  //>>group: Core
  //>>description: Selects elements which can be tabbed to.
  //>>docs: http://api.jqueryui.com/tabbable-selector/

  var tabbable = $.extend($.expr[":"], {
    tabbable: function (element) {
      var tabIndex = $.attr(element, "tabindex"),
        hasTabindex = tabIndex != null;
      return (
        (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex)
      );
    },
  });
});

/*! jQuery UI - v1.12.1 - 2021-08-17
* http://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {

  $.ui = $.ui || {};

  var version = $.ui.version = "1.12.1";


  /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = ( function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  } )( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split( "." )[ 0 ];
    name = name.split( "." )[ 1 ];
    var fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    if ( $.isArray( prototype ) ) {
      prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
    }

    // Create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {

      // Allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    } );

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = ( function() {
        function _super() {
          return base.prototype[ prop ].apply( this, arguments );
        }

        function _superApply( args ) {
          return base.prototype[ prop ].apply( this, args );
        }

        return function() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      } )();
    } );
    constructor.prototype = $.widget.extend( basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
    }, proxiedPrototype, {
                                               constructor: constructor,
                                               namespace: namespace,
                                               widgetName: name,
                                               widgetFullName: fullName
                                             } );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
                  child._proto );
      } );

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widgetSlice.call( arguments, 1 );
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
              $.widget.extend( {}, target[ key ], value ) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend( {}, value );

            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call( arguments, 1 );
      var returnValue = this;

      if ( isMethodCall ) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if ( !this.length && options === "instance" ) {
          returnValue = undefined;
        } else {
          this.each( function() {
            var methodValue;
            var instance = $.data( this, fullName );

            if ( options === "instance" ) {
              returnValue = instance;
              return false;
            }

            if ( !instance ) {
              return $.error( "cannot call methods on " + name +
                              " prior to initialization; " +
                              "attempted to call method '" + options + "'" );
            }

            if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
              return $.error( "no such method '" + options + "' for " + name +
                              " widget instance" );
            }

            methodValue = instance[ options ].apply( instance, args );

            if ( methodValue !== instance && methodValue !== undefined ) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack( methodValue.get() ) :
                methodValue;
              return false;
            }
          } );
        }
      } else {

        // Allow multiple hashes to be passed on init
        if ( args.length ) {
          options = $.widget.extend.apply( null, [ options ].concat( args ) );
        }

        this.each( function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        } );
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        } );
        this.document = $( element.style ?

                             // Element within the document
                             element.ownerDocument :

                             // Element is window or document
                             element.document || element );
        this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
      }

      this.options = $.widget.extend( {},
                                      this.options,
                                      this._getCreateOptions(),
                                      options );

      this._create();

      if ( this.options.disabled ) {
        this._setOptionDisabled( this.options.disabled );
      }

      this._trigger( "create", null, this._getCreateEventData() );
      this._init();
    },

    _getCreateOptions: function() {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function() {
      var that = this;

      this._destroy();
      $.each( this.classesElementLookup, function( key, value ) {
        that._removeClass( value, key );
      } );

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off( this.eventNamespace )
        .removeData( this.widgetFullName );
      this.widget()
        .off( this.eventNamespace )
        .removeAttr( "aria-disabled" );

      // Clean up events and states
      this.bindings.off( this.eventNamespace );
    },

    _destroy: $.noop,

    widget: function() {
      return this.element;
    },

    option: function( key, value ) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if ( arguments.length === 0 ) {

        // Don't return a reference to the internal hash
        return $.widget.extend( {}, this.options );
      }

      if ( typeof key === "string" ) {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split( "." );
        key = parts.shift();
        if ( parts.length ) {
          curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
          for ( i = 0; i < parts.length - 1; i++ ) {
            curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
            curOption = curOption[ parts[ i ] ];
          }
          key = parts.pop();
          if ( arguments.length === 1 ) {
            return curOption[ key ] === undefined ? null : curOption[ key ];
          }
          curOption[ key ] = value;
        } else {
          if ( arguments.length === 1 ) {
            return this.options[ key ] === undefined ? null : this.options[ key ];
          }
          options[ key ] = value;
        }
      }

      this._setOptions( options );

      return this;
    },

    _setOptions: function( options ) {
      var key;

      for ( key in options ) {
        this._setOption( key, options[ key ] );
      }

      return this;
    },

    _setOption: function( key, value ) {
      if ( key === "classes" ) {
        this._setOptionClasses( value );
      }

      this.options[ key ] = value;

      if ( key === "disabled" ) {
        this._setOptionDisabled( value );
      }

      return this;
    },

    _setOptionClasses: function( value ) {
      var classKey, elements, currentElements;

      for ( classKey in value ) {
        currentElements = this.classesElementLookup[ classKey ];
        if ( value[ classKey ] === this.options.classes[ classKey ] ||
             !currentElements ||
             !currentElements.length ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $( currentElements.get() );
        this._removeClass( currentElements, classKey );

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass( this._classes( {
                                            element: elements,
                                            keys: classKey,
                                            classes: value,
                                            add: true
                                          } ) );
      }
    },

    _setOptionDisabled: function( value ) {
      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

      // If the widget is becoming disabled, then nothing is interactive
      if ( value ) {
        this._removeClass( this.hoverable, null, "ui-state-hover" );
        this._removeClass( this.focusable, null, "ui-state-focus" );
      }
    },

    enable: function() {
      return this._setOptions( { disabled: false } );
    },

    disable: function() {
      return this._setOptions( { disabled: true } );
    },

    _classes: function( options ) {
      var full = [];
      var that = this;

      options = $.extend( {
                            element: this.element,
                            classes: this.options.classes || {}
                          }, options );

      function processClassString( classes, checkOption ) {
        var current, i;
        for ( i = 0; i < classes.length; i++ ) {
          current = that.classesElementLookup[ classes[ i ] ] || $();
          if ( options.add ) {
            current = $( $.unique( current.get().concat( options.element.get() ) ) );
          } else {
            current = $( current.not( options.element ).get() );
          }
          that.classesElementLookup[ classes[ i ] ] = current;
          full.push( classes[ i ] );
          if ( checkOption && options.classes[ classes[ i ] ] ) {
            full.push( options.classes[ classes[ i ] ] );
          }
        }
      }

      this._on( options.element, {
        "remove": "_untrackClassesElement"
      } );

      if ( options.keys ) {
        processClassString( options.keys.match( /\S+/g ) || [], true );
      }
      if ( options.extra ) {
        processClassString( options.extra.match( /\S+/g ) || [] );
      }

      return full.join( " " );
    },

    _untrackClassesElement: function( event ) {
      var that = this;
      $.each( that.classesElementLookup, function( key, value ) {
        if ( $.inArray( event.target, value ) !== -1 ) {
          that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
        }
      } );
    },

    _removeClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, false );
    },

    _addClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, true );
    },

    _toggleClass: function( element, keys, extra, add ) {
      add = ( typeof add === "boolean" ) ? add : extra;
      var shift = ( typeof element === "string" || element === null ),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        };
      options.element.toggleClass( this._classes( options ), add );
      return this;
    },

    _on: function( suppressDisabledCheck, element, handlers ) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if ( typeof suppressDisabledCheck !== "boolean" ) {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if ( !handlers ) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $( element );
        this.bindings = this.bindings.add( element );
      }

      $.each( handlers, function( event, handler ) {
        function handlerProxy() {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if ( !suppressDisabledCheck &&
               ( instance.options.disabled === true ||
                 $( this ).hasClass( "ui-state-disabled" ) ) ) {
            return;
          }
          return ( typeof handler === "string" ? instance[ handler ] : handler )
            .apply( instance, arguments );
        }

        // Copy the guid so direct unbinding works
        if ( typeof handler !== "string" ) {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match( /^([\w:-]*)\s*(.*)$/ );
        var eventName = match[ 1 ] + instance.eventNamespace;
        var selector = match[ 2 ];

        if ( selector ) {
          delegateElement.on( eventName, selector, handlerProxy );
        } else {
          element.on( eventName, handlerProxy );
        }
      } );
    },

    _off: function( element, eventName ) {
      eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
                  this.eventNamespace;
      element.off( eventName ).off( eventName );

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $( this.bindings.not( element ).get() );
      this.focusable = $( this.focusable.not( element ).get() );
      this.hoverable = $( this.hoverable.not( element ).get() );
    },

    _delay: function( handler, delay ) {
      function handlerProxy() {
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }
      var instance = this;
      return setTimeout( handlerProxy, delay || 0 );
    },

    _hoverable: function( element ) {
      this.hoverable = this.hoverable.add( element );
      this._on( element, {
        mouseenter: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
        },
        mouseleave: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
        }
      } );
    },

    _focusable: function( element ) {
      this.focusable = this.focusable.add( element );
      this._on( element, {
        focusin: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
        },
        focusout: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
        }
      } );
    },

    _trigger: function( type, event, data ) {
      var prop, orig;
      var callback = this.options[ type ];

      data = data || {};
      event = $.Event( event );
      event.type = ( type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[ 0 ];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if ( orig ) {
        for ( prop in orig ) {
          if ( !( prop in event ) ) {
            event[ prop ] = orig[ prop ];
          }
        }
      }

      this.element.trigger( event, data );
      return !( $.isFunction( callback ) &&
                callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
                event.isDefaultPrevented() );
    }
  };

  $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
    $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
      if ( typeof options === "string" ) {
        options = { effect: options };
      }

      var hasOptions;
      var effectName = !options ?
        method :
        options === true || typeof options === "number" ?
          defaultEffect :
          options.effect || defaultEffect;

      options = options || {};
      if ( typeof options === "number" ) {
        options = { duration: options };
      }

      hasOptions = !$.isEmptyObject( options );
      options.complete = callback;

      if ( options.delay ) {
        element.delay( options.delay );
      }

      if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
        element[ method ]( options );
      } else if ( effectName !== method && element[ effectName ] ) {
        element[ effectName ]( options.duration, options.easing, callback );
      } else {
        element.queue( function( next ) {
          $( this )[ method ]();
          if ( callback ) {
            callback.call( element[ 0 ] );
          }
          next();
        } );
      }
    };
  } );

  var widget = $.widget;


  /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


  var keycode = $.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };


  /*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



  var uniqueId = $.fn.extend( {
                                uniqueId: ( function() {
                                  var uuid = 0;

                                  return function() {
                                    return this.each( function() {
                                      if ( !this.id ) {
                                        this.id = "ui-id-" + ( ++uuid );
                                      }
                                    } );
                                  };
                                } )(),

                                removeUniqueId: function() {
                                  return this.each( function() {
                                    if ( /^ui-id-\d+$/.test( this.id ) ) {
                                      $( this ).removeAttr( "id" );
                                    }
                                  } );
                                }
                              } );




// Internal use only
  var escapeSelector = $.ui.escapeSelector = ( function() {
    var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
    return function( selector ) {
      return selector.replace( selectorEscape, "\\$1" );
    };
  } )();



  var safeActiveElement = $.ui.safeActiveElement = function( document ) {
    var activeElement;

    // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
    try {
      activeElement = document.activeElement;
    } catch ( error ) {
      activeElement = document.body;
    }

    // Support: IE 9 - 11 only
    // IE may return null instead of an element
    // Interestingly, this only seems to occur when NOT in an iframe
    if ( !activeElement ) {
      activeElement = document.body;
    }

    // Support: IE 11 only
    // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>
    if ( !activeElement.nodeName ) {
      activeElement = document.body;
    }

    return activeElement;
  };


  /*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css



  $.widget( "ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: false,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,

      // Callbacks
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },

    _isLocal: ( function() {
      var rhash = /#.*$/;

      return function( anchor ) {
        var anchorUrl, locationUrl;

        anchorUrl = anchor.href.replace( rhash, "" );
        locationUrl = location.href.replace( rhash, "" );

        // Decoding may throw an error if the URL isn't UTF-8 (#9518)
        try {
          anchorUrl = decodeURIComponent( anchorUrl );
        } catch ( error ) {}
        try {
          locationUrl = decodeURIComponent( locationUrl );
        } catch ( error ) {}

        return anchor.hash.length > 1 && anchorUrl === locationUrl;
      };
    } )(),

    _create: function() {
      var that = this,
        options = this.options;

      this.running = false;

      this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
      this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

      this._processTabs();
      options.active = this._initialActive();

      // Take disabling tabs via class attribute from HTML
      // into account and update option properly.
      if ( $.isArray( options.disabled ) ) {
        options.disabled = $.unique( options.disabled.concat(
          $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
            return that.tabs.index( li );
          } )
        ) ).sort();
      }

      // Check for length avoids error when initializing empty list
      if ( this.options.active !== false && this.anchors.length ) {
        this.active = this._findActive( options.active );
      } else {
        this.active = $();
      }

      this._refresh();

      if ( this.active.length ) {
        this.load( options.active );
      }
    },

    _initialActive: function() {
      var active = this.options.active,
        collapsible = this.options.collapsible,
        locationHash = location.hash.substring( 1 );

      if ( active === null ) {

        // check the fragment identifier in the URL
        if ( locationHash ) {
          this.tabs.each( function( i, tab ) {
            if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
              active = i;
              return false;
            }
          } );
        }

        // Check for a tab marked active via a class
        if ( active === null ) {
          active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
        }

        // No active tab, set to false
        if ( active === null || active === -1 ) {
          active = this.tabs.length ? 0 : false;
        }
      }

      // Handle numbers: negative, out of range
      if ( active !== false ) {
        active = this.tabs.index( this.tabs.eq( active ) );
        if ( active === -1 ) {
          active = collapsible ? false : 0;
        }
      }

      // Don't allow collapsible: false and active: false
      if ( !collapsible && active === false && this.anchors.length ) {
        active = 0;
      }

      return active;
    },

    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: !this.active.length ? $() : this._getPanelForTab( this.active )
      };
    },

    _tabKeydown: function( event ) {
      var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
        selectedIndex = this.tabs.index( focusedTab ),
        goingForward = true;

      if ( this._handlePageNav( event ) ) {
        return;
      }

      switch ( event.keyCode ) {
        case $.ui.keyCode.RIGHT:
        case $.ui.keyCode.DOWN:
          selectedIndex++;
          break;
        case $.ui.keyCode.UP:
        case $.ui.keyCode.LEFT:
          goingForward = false;
          selectedIndex--;
          break;
        case $.ui.keyCode.END:
          selectedIndex = this.anchors.length - 1;
          break;
        case $.ui.keyCode.HOME:
          selectedIndex = 0;
          break;
        case $.ui.keyCode.SPACE:

          // Activate only, no collapsing
          event.preventDefault();
          clearTimeout( this.activating );
          this._activate( selectedIndex );
          return;
        case $.ui.keyCode.ENTER:

          // Toggle (cancel delayed activation, allow collapsing)
          event.preventDefault();
          clearTimeout( this.activating );

          // Determine if we should collapse or activate
          this._activate( selectedIndex === this.options.active ? false : selectedIndex );
          return;
        default:
          return;
      }

      // Focus the appropriate tab, based on which key was pressed
      event.preventDefault();
      clearTimeout( this.activating );
      selectedIndex = this._focusNextTab( selectedIndex, goingForward );

      // Navigating with control/command key will prevent automatic activation
      if ( !event.ctrlKey && !event.metaKey ) {

        // Update aria-selected immediately so that AT think the tab is already selected.
        // Otherwise AT may confuse the user by stating that they need to activate the tab,
        // but the tab will already be activated by the time the announcement finishes.
        focusedTab.attr( "aria-selected", "false" );
        this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

        this.activating = this._delay( function() {
          this.option( "active", selectedIndex );
        }, this.delay );
      }
    },

    _panelKeydown: function( event ) {
      if ( this._handlePageNav( event ) ) {
        return;
      }

      // Ctrl+up moves focus to the current tab
      if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
        event.preventDefault();
        this.active.trigger( "focus" );
      }
    },

    // Alt+page up/down moves focus to the previous/next tab (and activates)
    _handlePageNav: function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
        this._activate( this._focusNextTab( this.options.active - 1, false ) );
        return true;
      }
      if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
        this._activate( this._focusNextTab( this.options.active + 1, true ) );
        return true;
      }
    },

    _findNextTab: function( index, goingForward ) {
      var lastTabIndex = this.tabs.length - 1;

      function constrain() {
        if ( index > lastTabIndex ) {
          index = 0;
        }
        if ( index < 0 ) {
          index = lastTabIndex;
        }
        return index;
      }

      while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
        index = goingForward ? index + 1 : index - 1;
      }

      return index;
    },

    _focusNextTab: function( index, goingForward ) {
      index = this._findNextTab( index, goingForward );
      this.tabs.eq( index ).trigger( "focus" );
      return index;
    },

    _setOption: function( key, value ) {
      if ( key === "active" ) {

        // _activate() will handle invalid values and update this.options
        this._activate( value );
        return;
      }

      this._super( key, value );

      if ( key === "collapsible" ) {
        this._toggleClass( "ui-tabs-collapsible", null, value );

        // Setting collapsible: false while collapsed; open first panel
        if ( !value && this.options.active === false ) {
          this._activate( 0 );
        }
      }

      if ( key === "event" ) {
        this._setupEvents( value );
      }

      if ( key === "heightStyle" ) {
        this._setupHeightStyle( value );
      }
    },

    _sanitizeSelector: function( hash ) {
      return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
    },

    refresh: function() {
      var options = this.options,
        lis = this.tablist.children( ":has(a[href])" );

      // Get disabled tabs from class attribute from HTML
      // this will get converted to a boolean if needed in _refresh()
      options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
        return lis.index( tab );
      } );

      this._processTabs();

      // Was collapsed or no tabs
      if ( options.active === false || !this.anchors.length ) {
        options.active = false;
        this.active = $();

        // was active, but active tab is gone
      } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

        // all remaining tabs are disabled
        if ( this.tabs.length === options.disabled.length ) {
          options.active = false;
          this.active = $();

          // activate previous tab
        } else {
          this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
        }

        // was active, active tab still exists
      } else {

        // make sure active index is correct
        options.active = this.tabs.index( this.active );
      }

      this._refresh();
    },

    _refresh: function() {
      this._setOptionDisabled( this.options.disabled );
      this._setupEvents( this.options.event );
      this._setupHeightStyle( this.options.heightStyle );

      this.tabs.not( this.active ).attr( {
                                           "aria-selected": "false",
                                           "aria-expanded": "false",
                                           tabIndex: -1
                                         } );
      this.panels.not( this._getPanelForTab( this.active ) )
        .hide()
        .attr( {
                 "aria-hidden": "true"
               } );

      // Make sure one tab is in the tab order
      if ( !this.active.length ) {
        this.tabs.eq( 0 ).attr( "tabIndex", 0 );
      } else {
        this.active
          .attr( {
                   "aria-selected": "true",
                   "aria-expanded": "true",
                   tabIndex: 0
                 } );
        this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
        this._getPanelForTab( this.active )
          .show()
          .attr( {
                   "aria-hidden": "false"
                 } );
      }
    },

    _processTabs: function() {
      var that = this,
        prevTabs = this.tabs,
        prevAnchors = this.anchors,
        prevPanels = this.panels;

      this.tablist = this._getList().attr( "role", "tablist" );
      this._addClass( this.tablist, "ui-tabs-nav",
                      "ui-helper-reset ui-helper-clearfix ui-widget-header" );

      // Prevent users from focusing disabled tabs via click
      this.tablist
        .on( "mousedown" + this.eventNamespace, "> li", function( event ) {
          if ( $( this ).is( ".ui-state-disabled" ) ) {
            event.preventDefault();
          }
        } )

        // Support: IE <9
        // Preventing the default action in mousedown doesn't prevent IE
        // from focusing the element, so if the anchor gets focused, blur.
        // We don't have to worry about focusing the previously focused
        // element since clicking on a non-focusable element should focus
        // the body anyway.
        .on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
          if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
            this.blur();
          }
        } );

      this.tabs = this.tablist.find( "> li:has(a[href])" )
        .attr( {
                 role: "tab",
                 tabIndex: -1
               } );
      this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

      this.anchors = this.tabs.map( function() {
        return $( "a", this )[ 0 ];
      } )
        .attr( {
                 role: "presentation",
                 tabIndex: -1
               } );
      this._addClass( this.anchors, "ui-tabs-anchor" );

      this.panels = $();

      this.anchors.each( function( i, anchor ) {
        var selector, panel, panelId,
          anchorId = $( anchor ).uniqueId().attr( "id" ),
          tab = $( anchor ).closest( "li" ),
          originalAriaControls = tab.attr( "aria-controls" );

        // Inline tab
        if ( that._isLocal( anchor ) ) {
          selector = anchor.hash;
          panelId = selector.substring( 1 );
          panel = that.element.find( that._sanitizeSelector( selector ) );

          // remote tab
        } else {

          // If the tab doesn't already have aria-controls,
          // generate an id by using a throw-away element
          panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
          selector = "#" + panelId;
          panel = that.element.find( selector );
          if ( !panel.length ) {
            panel = that._createPanel( panelId );
            panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
          }
          panel.attr( "aria-live", "polite" );
        }

        if ( panel.length ) {
          that.panels = that.panels.add( panel );
        }
        if ( originalAriaControls ) {
          tab.data( "ui-tabs-aria-controls", originalAriaControls );
        }
        tab.attr( {
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                  } );
        panel.attr( "aria-labelledby", anchorId );
      } );

      this.panels.attr( "role", "tabpanel" );
      this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

      // Avoid memory leaks (#10056)
      if ( prevTabs ) {
        this._off( prevTabs.not( this.tabs ) );
        this._off( prevAnchors.not( this.anchors ) );
        this._off( prevPanels.not( this.panels ) );
      }
    },

    // Allow overriding how to find the list for rare usage scenarios (#7715)
    _getList: function() {
      return this.tablist || this.element.find( "ol, ul" ).eq( 0 );
    },

    _createPanel: function( id ) {
      return $( "<div>" )
        .attr( "id", id )
        .data( "ui-tabs-destroy", true );
    },

    _setOptionDisabled: function( disabled ) {
      var currentItem, li, i;

      if ( $.isArray( disabled ) ) {
        if ( !disabled.length ) {
          disabled = false;
        } else if ( disabled.length === this.anchors.length ) {
          disabled = true;
        }
      }

      // Disable tabs
      for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
        currentItem = $( li );
        if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
          currentItem.attr( "aria-disabled", "true" );
          this._addClass( currentItem, null, "ui-state-disabled" );
        } else {
          currentItem.removeAttr( "aria-disabled" );
          this._removeClass( currentItem, null, "ui-state-disabled" );
        }
      }

      this.options.disabled = disabled;

      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
                         disabled === true );
    },

    _setupEvents: function( event ) {
      var events = {};
      if ( event ) {
        $.each( event.split( " " ), function( index, eventName ) {
          events[ eventName ] = "_eventHandler";
        } );
      }

      this._off( this.anchors.add( this.tabs ).add( this.panels ) );

      // Always prevent the default action, even when disabled
      this._on( true, this.anchors, {
        click: function( event ) {
          event.preventDefault();
        }
      } );
      this._on( this.anchors, events );
      this._on( this.tabs, { keydown: "_tabKeydown" } );
      this._on( this.panels, { keydown: "_panelKeydown" } );

      this._focusable( this.tabs );
      this._hoverable( this.tabs );
    },

    _setupHeightStyle: function( heightStyle ) {
      var maxHeight,
        parent = this.element.parent();

      if ( heightStyle === "fill" ) {
        maxHeight = parent.height();
        maxHeight -= this.element.outerHeight() - this.element.height();

        this.element.siblings( ":visible" ).each( function() {
          var elem = $( this ),
            position = elem.css( "position" );

          if ( position === "absolute" || position === "fixed" ) {
            return;
          }
          maxHeight -= elem.outerHeight( true );
        } );

        this.element.children().not( this.panels ).each( function() {
          maxHeight -= $( this ).outerHeight( true );
        } );

        this.panels.each( function() {
          $( this ).height( Math.max( 0, maxHeight -
                                         $( this ).innerHeight() + $( this ).height() ) );
        } )
          .css( "overflow", "auto" );
      } else if ( heightStyle === "auto" ) {
        maxHeight = 0;
        this.panels.each( function() {
          maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
        } ).height( maxHeight );
      }
    },

    _eventHandler: function( event ) {
      var options = this.options,
        active = this.active,
        anchor = $( event.currentTarget ),
        tab = anchor.closest( "li" ),
        clickedIsActive = tab[ 0 ] === active[ 0 ],
        collapsing = clickedIsActive && options.collapsible,
        toShow = collapsing ? $() : this._getPanelForTab( tab ),
        toHide = !active.length ? $() : this._getPanelForTab( active ),
        eventData = {
          oldTab: active,
          oldPanel: toHide,
          newTab: collapsing ? $() : tab,
          newPanel: toShow
        };

      event.preventDefault();

      if ( tab.hasClass( "ui-state-disabled" ) ||

           // tab is already loading
           tab.hasClass( "ui-tabs-loading" ) ||

           // can't switch durning an animation
           this.running ||

           // click on active header, but not collapsible
           ( clickedIsActive && !options.collapsible ) ||

           // allow canceling activation
           ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
        return;
      }

      options.active = collapsing ? false : this.tabs.index( tab );

      this.active = clickedIsActive ? $() : tab;
      if ( this.xhr ) {
        this.xhr.abort();
      }

      if ( !toHide.length && !toShow.length ) {
        $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
      }

      if ( toShow.length ) {
        this.load( this.tabs.index( tab ), event );
      }
      this._toggle( event, eventData );
    },

    // Handles show/hide for selecting tabs
    _toggle: function( event, eventData ) {
      var that = this,
        toShow = eventData.newPanel,
        toHide = eventData.oldPanel;

      this.running = true;

      function complete() {
        that.running = false;
        that._trigger( "activate", event, eventData );
      }

      function show() {
        that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

        if ( toShow.length && that.options.show ) {
          that._show( toShow, that.options.show, complete );
        } else {
          toShow.show();
          complete();
        }
      }

      // Start out by hiding, then showing, then completing
      if ( toHide.length && this.options.hide ) {
        this._hide( toHide, this.options.hide, function() {
          that._removeClass( eventData.oldTab.closest( "li" ),
                             "ui-tabs-active", "ui-state-active" );
          show();
        } );
      } else {
        this._removeClass( eventData.oldTab.closest( "li" ),
                           "ui-tabs-active", "ui-state-active" );
        toHide.hide();
        show();
      }

      toHide.attr( "aria-hidden", "true" );
      eventData.oldTab.attr( {
                               "aria-selected": "false",
                               "aria-expanded": "false"
                             } );

      // If we're switching tabs, remove the old tab from the tab order.
      // If we're opening from collapsed state, remove the previous tab from the tab order.
      // If we're collapsing, then keep the collapsing tab in the tab order.
      if ( toShow.length && toHide.length ) {
        eventData.oldTab.attr( "tabIndex", -1 );
      } else if ( toShow.length ) {
        this.tabs.filter( function() {
          return $( this ).attr( "tabIndex" ) === 0;
        } )
          .attr( "tabIndex", -1 );
      }

      toShow.attr( "aria-hidden", "false" );
      eventData.newTab.attr( {
                               "aria-selected": "true",
                               "aria-expanded": "true",
                               tabIndex: 0
                             } );
    },

    _activate: function( index ) {
      var anchor,
        active = this._findActive( index );

      // Trying to activate the already active panel
      if ( active[ 0 ] === this.active[ 0 ] ) {
        return;
      }

      // Trying to collapse, simulate a click on the current active header
      if ( !active.length ) {
        active = this.active;
      }

      anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
      this._eventHandler( {
                            target: anchor,
                            currentTarget: anchor,
                            preventDefault: $.noop
                          } );
    },

    _findActive: function( index ) {
      return index === false ? $() : this.tabs.eq( index );
    },

    _getIndex: function( index ) {

      // meta-function to give users option to provide a href string instead of a numerical index.
      if ( typeof index === "string" ) {
        index = this.anchors.index( this.anchors.filter( "[href$='" +
                                                         $.ui.escapeSelector( index ) + "']" ) );
      }

      return index;
    },

    _destroy: function() {
      if ( this.xhr ) {
        this.xhr.abort();
      }

      this.tablist
        .removeAttr( "role" )
        .off( this.eventNamespace );

      this.anchors
        .removeAttr( "role tabIndex" )
        .removeUniqueId();

      this.tabs.add( this.panels ).each( function() {
        if ( $.data( this, "ui-tabs-destroy" ) ) {
          $( this ).remove();
        } else {
          $( this ).removeAttr( "role tabIndex " +
                                "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
        }
      } );

      this.tabs.each( function() {
        var li = $( this ),
          prev = li.data( "ui-tabs-aria-controls" );
        if ( prev ) {
          li
            .attr( "aria-controls", prev )
            .removeData( "ui-tabs-aria-controls" );
        } else {
          li.removeAttr( "aria-controls" );
        }
      } );

      this.panels.show();

      if ( this.options.heightStyle !== "content" ) {
        this.panels.css( "height", "" );
      }
    },

    enable: function( index ) {
      var disabled = this.options.disabled;
      if ( disabled === false ) {
        return;
      }

      if ( index === undefined ) {
        disabled = false;
      } else {
        index = this._getIndex( index );
        if ( $.isArray( disabled ) ) {
          disabled = $.map( disabled, function( num ) {
            return num !== index ? num : null;
          } );
        } else {
          disabled = $.map( this.tabs, function( li, num ) {
            return num !== index ? num : null;
          } );
        }
      }
      this._setOptionDisabled( disabled );
    },

    disable: function( index ) {
      var disabled = this.options.disabled;
      if ( disabled === true ) {
        return;
      }

      if ( index === undefined ) {
        disabled = true;
      } else {
        index = this._getIndex( index );
        if ( $.inArray( index, disabled ) !== -1 ) {
          return;
        }
        if ( $.isArray( disabled ) ) {
          disabled = $.merge( [ index ], disabled ).sort();
        } else {
          disabled = [ index ];
        }
      }
      this._setOptionDisabled( disabled );
    },

    load: function( index, event ) {
      index = this._getIndex( index );
      var that = this,
        tab = this.tabs.eq( index ),
        anchor = tab.find( ".ui-tabs-anchor" ),
        panel = this._getPanelForTab( tab ),
        eventData = {
          tab: tab,
          panel: panel
        },
        complete = function( jqXHR, status ) {
          if ( status === "abort" ) {
            that.panels.stop( false, true );
          }

          that._removeClass( tab, "ui-tabs-loading" );
          panel.removeAttr( "aria-busy" );

          if ( jqXHR === that.xhr ) {
            delete that.xhr;
          }
        };

      // Not remote
      if ( this._isLocal( anchor[ 0 ] ) ) {
        return;
      }

      this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

      // Support: jQuery <1.8
      // jQuery <1.8 returns false if the request is canceled in beforeSend,
      // but as of 1.8, $.ajax() always returns a jqXHR object.
      if ( this.xhr && this.xhr.statusText !== "canceled" ) {
        this._addClass( tab, "ui-tabs-loading" );
        panel.attr( "aria-busy", "true" );

        this.xhr
          .done( function( response, status, jqXHR ) {

            // support: jQuery <1.8
            // http://bugs.jquery.com/ticket/11778
            setTimeout( function() {
              panel.html( response );
              that._trigger( "load", event, eventData );

              complete( jqXHR, status );
            }, 1 );
          } )
          .fail( function( jqXHR, status ) {

            // support: jQuery <1.8
            // http://bugs.jquery.com/ticket/11778
            setTimeout( function() {
              complete( jqXHR, status );
            }, 1 );
          } );
      }
    },

    _ajaxSettings: function( anchor, event, eventData ) {
      var that = this;
      return {

        // Support: IE <11 only
        // Strip any hash that exists to prevent errors with the Ajax request
        url: anchor.attr( "href" ).replace( /#.*$/, "" ),
        beforeSend: function( jqXHR, settings ) {
          return that._trigger( "beforeLoad", event,
                                $.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
        }
      };
    },

    _getPanelForTab: function( tab ) {
      var id = $( tab ).attr( "aria-controls" );
      return this.element.find( this._sanitizeSelector( "#" + id ) );
    }
  } );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
  if ( $.uiBackCompat !== false ) {

    // Backcompat for ui-tab class (now ui-tabs-tab)
    $.widget( "ui.tabs", $.ui.tabs, {
      _processTabs: function() {
        this._superApply( arguments );
        this._addClass( this.tabs, "ui-tab" );
      }
    } );
  }

  var widgetsTabs = $.ui.tabs;




}));
function addMessageScrolling() {

  // scroll to first TYPO3-message (if there is one)
  if ($(".system-message--scroll").first().length > 0){
    var messageDiv = $(".system-message--scroll").first();
    var offset = messageDiv.offset().top;
    $("html, body")
      .animate({
                 'scrollTop': offset - 100
               },
               1000,
               "easeOutQuart"
      );
  }
}

function addSmoothScrolling() {

  // fix anchor-links when used with baseUrl
  // check baseUrl
  if ($('base').length) {

    $('a[href*="#"]').each(function() {

      var baseUrl = $('base')
        .first()
        .attr('href')
        .replace(/\/$/, '');

      if (baseUrl) {

        // trim links and get anchors
        var url = document.location.toString();
        var browserUrl = url.split('#')[0];
        browserUrl = browserUrl.replace(/\/$/, '');

        var linkUrl = $(this)
          .attr('href')
          .split('#')[0];

        linkUrl = linkUrl.replace(/\/$/, '')
          .replace(/^\//, '');

        var linkAnchor = $(this)
          .attr('href')
          .split('#')[1];

        /*
          Cases:
          href="#anchor"
          href="/what/ever/#anchor"
          href="what/ever/#anchor"
        */
        if (
          (
            (browserUrl === linkUrl)
            || (browserUrl === baseUrl + '/' + linkUrl)
            || (!linkUrl)
          )
          && (linkAnchor)
        ) {
          $(this)
            .attr('data-target', linkAnchor);
        }
      }
    });
  }

  // Smooth scrolling when clicking an anchor link
  $('[data-target]').not('.tabs-component .tabs-component-tab-a').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        1000,
        "easeOutQuart",
        function () {
          window.location.hash = target;
        }
      );
  });
}


/*!
 *
 * jQuery Plugin – accordion
 *
 * Author: helllicht
 * Author: Steffen Kroggel <developer@steffenkroggel.de>
 *
 * Last updated: 03.05.2022
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "accordionPlugin",
    defaults = {
      accordionButtons: "accordion__button",
      //The following aria-attributes must be set: aria-hidden, aria-expanded, aria-expanded
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      plugin.settings.$el = $(this.element);
      plugin.settings.$accordionButtons = $("." + this.settings.accordionButtons);
      plugin.settings.$content = $("#" + plugin.settings.$el.attr("aria-controls"));
      plugin.bindEvents();
    },

    // plugin.toggle.bind(this)); Bind all event listeners for this plugin
    bindEvents: function () {
      this.settings.$el.on("click", plugin.accordionToggle.bind(this));
    },

    // Adjust when a content is toggled
    accordionToggle: function (e) {
      e.preventDefault();

      var offsetOther = this.checkOthers();

      // Set aria hidden value to opposite value (true/false)
      isAriaHid = this.settings.$content.attr("aria-hidden");
      if (isAriaHid == "true") {

        // Scroll to opening button
        var scrollOffset = this.settings.$el.offset().top - offsetOther;
        $("html, body")
          .animate({
                     'scrollTop': scrollOffset
                   },
                   1000,
                   "easeOutQuart"
          );

        this.settings.$content.attr("aria-hidden", "false");
        this.settings.$content.slideDown({duration: 500, queue: false});



      } else {
        this.settings.$content.attr("aria-hidden", "true");
        this.settings.$content.slideUp({ duration: 500, queue: false  });
      }

      //Set aria aria expanded to opposite value (true/false)
      var isAriaExp = this.settings.$el.attr("aria-expanded");
      var newAriaExp = isAriaExp == "false" ? "true" : "false";
      this.settings.$el.attr("aria-expanded", newAriaExp);
    },

    // Close all others when a new content area is opened
    checkOthers: function () {

      var offset = 0;
      var accordionButtons = this.settings.$accordionButtons;
      for (var i = 0; i < accordionButtons.length; i++) {
        if (accordionButtons[i] != this.settings.$el[0]) {
          if ($(accordionButtons[i]).attr("aria-expanded") == "true") {
            $(accordionButtons[i]).attr("aria-expanded", "false");
            var contentId = $(accordionButtons[i]).attr("aria-controls");
            var content = $("#" + contentId);
            $(accordionButtons[i]).checked = false;
            content.attr("aria-hidden", "true");
            content.slideUp({ duration: 500 });

            // if closed content is before opening button, we need to get the height
            if (content.offset().top < this.settings.$el.offset().top) {
              offset += content.height();
            }
          }
        }
      }

      return offset;
    },

    findAccordionButtonIndex: function (el) {
      var accordionButtons = plugin.settings.$accordionButtons;
      for (var i = 0; i < accordionButtons.length; i++) {
        if (el == accordionButtons[i]) return i;
      }
      return -1;
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – Collapsed Text
 *
 * Author: helllicht
 *
 * Last updated: 25.05.2020
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "collapsedText",
    defaults = {
      toggleBtn: "collapsed-text__btn",
      collapsedContainer: "collapsed-text__container",
      isHidden: "is-hidden",
      isOpen: "is-open",
      initialHeight: "100"
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      this.settings.$el = $(this.element);
      this.settings.$toggleBtn = $(
        this.settings.$el.find("." + this.settings.toggleBtn)
      );
      this.settings.$container = $(
        this.settings.$el.find("." + this.settings.collapsedContainer)
      );
      this.settings.$hidden = $("." + this.settings.isHidden);
      this.settings.openText = this.settings.$toggleBtn.data("opentext");
      this.settings.closeText = this.settings.$toggleBtn.data("closetext");

      // Set initial (collapsed) container height
      this.settings.$container.css(
        "height",
        this.settings.initialHeight + "px"
      );

      this.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      this.settings.$toggleBtn.on("click", plugin.toggle.bind(this));
    },

    //Adjust when a content is toggled
    open: function () {
      var textHeight = 0;
      this.settings.$container.children().each(function () {
        textHeight += $(this).outerHeight(true); // true = include margins
      });

      this.settings.$container.animate(
        { height: textHeight },
        500,
        function () {
          $(this).css("height", "auto");
        }
      );
      this.settings.$container.removeClass(this.settings.isHidden);
      this.settings.$container.attr("aria-hidden", "false");

      this.settings.$toggleBtn.addClass(this.settings.isOpen);
      this.settings.$toggleBtn.html(this.settings.closeText)
      this.settings.$toggleBtn.attr("aria-expanded", "true");
    },

    close: function () {
      this.settings.$container.animate(
        { height: this.settings.initialHeight },
        500
      );
      this.settings.$container.addClass(this.settings.isHidden);
      this.settings.$container.attr("aria-hidden", "true");

      this.settings.$toggleBtn.removeClass(this.settings.isOpen);
      this.settings.$toggleBtn.html(this.settings.openText);
      this.settings.$toggleBtn.attr("aria-expanded", "false");

    },

    toggle: function (e) {
      e.preventDefault;

      if (this.settings.$toggleBtn.hasClass("is-open")) {
        this.close();
      } else {
        this.open();
      }
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – contactSidebar
 *
 * Author: helllicht
 *
 * Last updated: 25.05.2020
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var contactSidebar = "contactSidebar",
    defaults = {
      isActive: "is-active",
      noScroll: "lock-scroll",
      sidebarButton: "sidebar_button",
      body: "body",
      backgroundOverlay: "background-overlay",
      sidebar: "sidebar",
      contactButton: "contact-button",
      slideOutAnimation: "slide-out-animation",
      slideInAnimation: "slide-in-animation",
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = contactSidebar;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      plugin.settings.$el = $(this.element);
      plugin.settings.$sbar = $("." + plugin.settings.sidebar);
      plugin.settings.$sbarButton = $("." + plugin.settings.sidebarButton);
      plugin.settings.$bgOverlay = $("." + plugin.settings.backgroundOverlay);
      plugin.settings.$body = $("." + plugin.settings.body);

      plugin.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      plugin.settings.$sbarButton.on("click", plugin.slideOut);
      plugin.settings.$el.on("click", plugin.slideIn);
      plugin.settings.$bgOverlay.on("click", plugin.slideOut);
    },

    slideOut: function () {
      plugin.settings.$sbar
        .addClass(plugin.settings.slideOutAnimation)
        .removeClass(plugin.settings.slideInAnimation);
      plugin.settings.$bgOverlay.removeClass(plugin.settings.isActive);
      plugin.settings.$body.removeClass(plugin.settings.noScroll);
      plugin.settings.$el.addClass(plugin.settings.contactButton);

      //Remove Keyboard listener
      $(window).unbind("keydown");
    },

    slideIn: function () {
      plugin.settings.$bgOverlay.addClass(plugin.settings.isActive);
      plugin.settings.$body.addClass(plugin.settings.noScroll);
      plugin.settings.$el.removeClass(plugin.settings.contactButton);
      plugin.settings.$sbar
        .addClass(plugin.settings.slideInAnimation)
        .removeClass(plugin.settings.slideOutAnimation);

      //Add Keyboard listener
      $(window).on("keydown", plugin.keyboardInputManagement);
    },

    keyboardInputManagement: function (e) {
      console.log("Listened");
      e.preventDefault();
      if (e.key == "Tab" && e.shiftKey) {
        var tabbableEls = plugin.settings.$sbar.find(":tabbable");
        if (tabbableEls.length > 0) {
          var indexActiveEl = plugin.settings.$sbar
            .find(":tabbable")
            .index(document.activeElement);
          if (indexActiveEl <= 0) {
            tabbableEls.last().focus();
          } else if (indexActiveEl > 0) {
            tabbableEls[indexActiveEl - 1].focus();
          }
        }
      } else if (e.key == "Tab") {
        var tabbableEls = plugin.settings.$sbar.find(":tabbable");
        if (tabbableEls.length > 0) {
          var indexActiveEl = plugin.settings.$sbar
            .find(":tabbable")
            .index(document.activeElement);
          if (indexActiveEl == -1 || indexActiveEl >= tabbableEls.length - 1) {
            tabbableEls.first().focus();
          } else if (
            indexActiveEl >= 0 &&
            indexActiveEl < tabbableEls.length - 1
          ) {
            tabbableEls[indexActiveEl + 1].focus();
          }
        }
      } else if (e.key == "Escape") {
        plugin.slideOut();
      }
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[contactSidebar] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + contactSidebar)) {
        $.data(this, "plugin_" + contactSidebar, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – dropdownNav
 *
 * Author: helllicht
 * Author: Steffen Kroggel
 *
 * Last updated: 30.05.2023
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "dropdownNavbar",
    defaults = {
      toggleClass: ".js-dropdown-toggle",
      // CSS Classes to add and remove
      activeClass: "is-active",
      focusTimeout: 100
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      plugin.settings.$element = $(this.element);
      plugin.settings.$elementParent = plugin.settings.$element.parent();
      plugin.settings.$toggle = plugin.settings.$elementParent.find(plugin.settings.toggleClass).first();
      plugin.settings.$toggleItems = plugin.settings.$toggle.find('a');
      plugin.settings.focusInside = false;

      plugin.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      plugin.settings.$element.on("keydown", plugin.keyDownEvent.bind(this));
      plugin.settings.$elementParent.on("mouseover", plugin.mouseOverEvent.bind(this));
      plugin.settings.$elementParent.on("mouseout", plugin.mouseOutEvent.bind(this));
      plugin.settings.$toggleItems.on("focus", plugin.focusEvent.bind(this));
      plugin.settings.$toggleItems.on("blur", plugin.blurEvent.bind(this));
    },

    /**
     * If one of the flyout-items gets focused we store that status
     *
     * @param e
     */
    focusEvent: function (e) {
      this.settings.focusInside = true;
    },

    /**
     * If one of the flyout-items gets blurred we check if another was focused
     *
     * @param e
     */
    blurEvent: function (e) {
      this.settings.focusInside = false;
      setTimeout(function(that) {
        if (that.settings.focusInside === false) {
          that.settings.$elementParent.trigger("mouseout");
        }
      }, this.settings.focusTimeout, this);
    },

    /**
     * Keydown-Event for toggle-button
     *
     * @param e
     */
    keyDownEvent: function (e) {

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseout");
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseout");
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseover");
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseout");
          break;
        case 'Enter':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseover");
          break;
        case 'Escape':
          e.preventDefault();
          this.settings.$elementParent.trigger("mouseout");
          break;
      }
    },

    /**
     * MouseOverEvent for whole li-element
     *
     * @param e
     */
    mouseOverEvent: function (e) {
      this.settings.$toggle.addClass(plugin.settings.activeClass);
      this.settings.$element.attr("aria-expanded","true");
    },

    /**
     * MouseOutEvent for whole li-element
     *
     * @param e
     */
    mouseOutEvent: function (e) {
      this.settings.$toggle.removeClass(plugin.settings.activeClass);
      this.settings.$element.attr("aria-expanded","false");
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – opens an URL via dropdown
 *
 * Author: RKW Kompetenzzentrum <developer@steffenkroggel.de>
 *
 * Last updated: 03.11.2021
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "dropdownUrl",
    defaults = {
      targetExternalPropertyName: "data-external",
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      this.settings.$el = $(this.element);
      this.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      this.settings.$el.on("change", plugin.redirect.bind(this));
    },

    redirect: function (e) {
      e.preventDefault;

      var url = this.settings.$el.val();
      var external = this.settings.$el.find(":selected").attr(this.settings.targetExternalPropertyName);
      var target = '_self';
      if (external === '1' || external === 'true') {
        target = '_blank';
      }

      // reset dropdown and load url if specified with defined target
      if (url && url !== '0') {
        this.settings.$el.val('');
        if (target !== '_self') {
          window.open(url, target);
        } else {
          window.location = url;
        }
      }
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – Fixed Footer
 *
 * Author: c.dilger@addorange.de
 * Author: developer@steffenkroggel.de
 *
 * Last updated:31.08.2022
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "fixedFooter",
    defaults = {
      isActive: "is-active",
      isDisabled: "is-disabled",
      useCookie: false,
      closeButton: "js-close-footer",
      content: "footer-content",
      footer: "js-fixed-footer",
      header: "js-header-class",
      cookieDays: 1,
      focusableSelectors: 'button, [href]'
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {

    /**
     * Init
     */
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      // plugin.settings.$el = $(this.element);
      plugin.settings.$footer = $("." + plugin.settings.footer);
      plugin.settings.$closeBtn = $("." + plugin.settings.closeButton);
      plugin.settings.$header = $("." + plugin.settings.header);
      plugin.settings.$interactionElements = $("." + plugin.settings.content).find('a,button');

      if (plugin.settings.$footer.data('use-cookie')) {
        plugin.settings.useCookie = true;
      }

      if (plugin.settings.$header.length) {

        plugin.settings.viewport = {
          top: plugin.settings.$header.offset().top,
          bottom: plugin.settings.$header.offset().top + plugin.settings.$header.outerHeight()
        };

      } else {
        plugin.settings.viewport = {
          top: 0,
          bottom: $(window).innerHeight()
        };
      }

      plugin.bindEvents();
    },

    /**
     * Bind all event listeners for this plugin
     */
    bindEvents: function () {
      plugin.settings.$closeBtn.on("click", plugin.closeEvent);
      plugin.settings.$closeBtn.on("keydown", plugin.closeEvent);
      plugin.settings.$interactionElements.on("keydown", plugin.closeEvent);
      $(window).on("scroll", plugin.debounce(plugin.open, 100));
    },

    /**
     * Opens the slider
     * @param e
     */
    open: function (e) {
      if (plugin.settings.viewport.length <= 0) return;
      if (plugin.settings.useCookie === true) {
        if (plugin.getCookie()) return;
      }

      var bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
      var topOfScreen = $(window).scrollTop();

      if (! plugin.settings.$footer.hasClass(plugin.settings.isDisabled)) {
        if (
          bottomOfScreen > plugin.settings.viewport.top
          && topOfScreen < plugin.settings.viewport.bottom
        ) {
          plugin.hideFooter();
        } else {
          plugin.showFooter();
        }
      }
    },


    /**
     * Closes the slider
     * @param e
     */
    closeEvent: function (e) {
      if (e.key) {
        if ($(e.target).hasClass(plugin.settings.closeButton)) {
          if (e.key !== 'Enter' && e.key !== 'Escape') {
            return;
          }
        } else if (e.key !== 'Escape') {
          return;
        }
      }

      plugin.disableFooter();
    },


    /**
     * Sets cookie
     */
    setCookie: function () {
      var d = new Date();
      d.setTime(d.getTime() + (plugin.settings.cookieDays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = pluginName + '=1;' + expires + ';path=/' + '; SameSite=Strict';
    },

    /**
     * Disable focus on elements
     */
    disableFocus: function () {
      plugin.settings.$footer.find(plugin.settings.focusableSelectors)
        .each(function () {
          $(this).attr('tabindex', '-1');
        });
    },


    /**
     * Enable focus on elements
     */
    enableFocus: function () {
      plugin.settings.$footer.find(plugin.settings.focusableSelectors)
        .each(function () {
          $(this).removeAttr('tabindex');
        });
    },


    /**
     * Hide footer on scroll
     */
    hideFooter: function () {
      plugin.settings.$footer.removeClass(plugin.settings.isActive);
      plugin.settings.$footer.attr('aria-hidden', 'true');
      plugin.disableFocus();
    },


    /**
     * Show footer on scroll
     */
    showFooter: function () {
      plugin.settings.$footer.addClass(plugin.settings.isActive);
      plugin.settings.$footer.attr('aria-hidden', 'false');
      plugin.enableFocus();
    },


    /**
     * Disables footer
     */
    disableFooter: function () {
      plugin.settings.$footer.addClass(plugin.settings.isDisabled);
      plugin.hideFooter();

      if (plugin.settings.useCookie === true) {
        plugin.setCookie();
      }
    },


    /**
     * Debouncing to reduce repaints
     *
     * @param func
     * @param delay
     * @returns {(function(): void)|*}
     */
    debounce: function (func, delay) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, delay);
      };
    },


    /**
     * Gets cookie values
     * @returns {string}
     */
    getCookie: function () {
      var name = pluginName + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }

  });


  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – Footer SlideUp
 *
 * Author: helllicht
 * Author: Steffen Kroggel
 *
 * Last updated: 30.05.2023
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "footerSlideUp",
    defaults = {
      activeClass: "is-active",
      openClass: "is-open",
      noScroll: "lock-scroll",
      body: "body",
      tabNavClass: ".slideup__information-nav",
      closeButtonClass: ".slideup-footer__close-btn",
      contentClass: ".infobox",
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      this.settings.$el = $(this.element);
      this.settings.$tabNav = this.settings.$el.find(this.settings.tabNavClass);
      this.settings.$tabLinks = this.settings.$tabNav.find("li");
      this.settings.$tabLink = this.settings.$tabNav.find("button");
      this.settings.$body = $("." + this.settings.body);
      this.settings.$closeBtn = this.settings.$el.find(
        this.settings.closeButtonClass
      );
      this.settings.$content = this.settings.$el.find(
        this.settings.contentClass
      );

      this.bindEvents();
    },

    bindEvents: function () {
      this.settings.$tabLink.on("click", this.open);
      this.settings.$closeBtn.on("click", this.close);
      this.settings.$tabLink.on("keydown", plugin.keyboardInputManagement);
      this.settings.$content.on("keydown", plugin.tabBackFromContent);
    },

    open: function (e) {
      e.preventDefault();
      var tab = $(this).data("tabtarget");
      plugin.settings.$currentTab = tab;

      // Switch to active tab
      plugin.changeTab(e);

      // Set slideUp to active
      plugin.settings.$el.addClass(plugin.settings.openClass);

      // Reveal content with slide animation
      plugin.settings.$content.slideDown();

      // Lock scroll of body
      plugin.settings.$body.addClass(plugin.settings.noScroll);

      // Add ESC event listener
      $(document).on('keydown', function (e) {
        if (e.key === "Escape") {
          plugin.close(e);
        }
      });
    },

    close: function (e) {
      e.preventDefault();

      // Disable current tab link
      plugin.settings.$tabLinks.removeClass(plugin.settings.activeClass);

      // Hide content with slide animation
      plugin.settings.$content.slideUp(function () {
        // Disable active tab
        plugin.settings.$content
          .children()
          .removeClass(plugin.settings.activeClass);
        // Set slideUp to inactive
        plugin.settings.$el.removeClass(plugin.settings.openClass);
      });

      // Unlock scroll of body
      plugin.settings.$body.removeClass(plugin.settings.noScroll);

      //Set selected area to false
      plugin.settings.$tabLink.attr("aria-selected", "false");

      // Remove ESC event listener again
      $(document).unbind("keyup");
    },

    changeTab: function (e) {
      var tab = plugin.settings.$currentTab;
      var tabContent = plugin.settings.$content.find("[data-tab=" + tab + "]");
      var tabLink = plugin.settings.$tabNav
        .find("button[data-tabtarget=" + tab + "]")
        .parent();

      var tabHeight = plugin.getTabHeight(tabContent);

      if (tabHeight > 0) {
        plugin.settings.$content.animate({ height: tabHeight }, 500);
      } else {
        plugin.settings.$content.css("height", "auto");
      }

      // Disable current tab content
      plugin.settings.$content
        .children()
        .removeClass(plugin.settings.activeClass);

      // Switch to active tab content
      tabContent.addClass(plugin.settings.activeClass);

      // Disable current tab link
      plugin.settings.$tabLinks.removeClass(plugin.settings.activeClass);

      // Switch to current tab link
      tabLink.addClass(plugin.settings.activeClass);

      //Remove selected area attr
      plugin.settings.$tabLink.attr("aria-selected", "false");

      //Set selected area
      $("#" + tab).attr("aria-selected", "true");
    },

    getTabHeight: function (tab) {
      var tabHeight = 0;

      // Activate element offscreen to get height
      tab.css({
                position: "absolute",
                visibility: "hidden",
                display: "flex",
              });

      tabHeight = tab.outerHeight();

      // Reset element styles
      tab.css({
                position: "",
                visibility: "",
                display: "",
              });

      return tabHeight;
    },

    findTabLinkIndex: function (el) {
      var tabLinkList = plugin.settings.$tabLink;
      for (var i = 0; i < tabLinkList.length; i++) {
        if (el == tabLinkList[i]) {
          return i;
        }
      }
      return -1;
    },

    findSelectedAriaIndex: function () {
      var tabLinkList = plugin.settings.$tabLink;
      for (var i = 0; i < tabLinkList.length; i++) {
        if ($(tabLinkList[i]).attr("aria-selected") == "true") {
          return i;
        }
      }
      return -1;
    },

    keyboardInputManagement: function (e) {
      e.preventDefault();
      if (e.key == "Tab" && e.shiftKey) {
        //Focus last element before footer-slideUp in dom
        var found = $(plugin.settings.$el).find(":tabbable").first()[0];
        var arr = Array.from($(":tabbable"));
        var ind = arr.indexOf(found);
        if (ind < arr.length && ind > 0) $(arr[ind - 1]).focus();
        else $(arr[0]).focus();
        return;
      }
      var tabLinkList = plugin.settings.$tabLink;
      if (e.key == "Tab") {
        //Tab into panel
        var selectedAriaInd = plugin.findSelectedAriaIndex();
        if (selectedAriaInd > -1) {
          var tabContentId = $(tabLinkList[selectedAriaInd]).attr(
            "aria-controls"
          );
          $("#" + tabContentId).focus();
        } else {
          //Focus next Element after footer-slideUp in dom
          var found = $(plugin.settings.$el).find(":tabbable").last()[0];
          var arr = Array.from($(":tabbable"));
          var ind = arr.indexOf(found);
          if (ind + 1 < arr.length && ind >= 0) $(arr[ind + 1]).focus();
          else $(arr[0]).focus();
        }
      }
      if (e.key == "ArrowLeft") {
        var value = plugin.findTabLinkIndex(e.target);
        if (value != -1) {
          if (value == 0) {
            tabLinkList[tabLinkList.length - 1].focus();
          } else if (value > 0 && value < tabLinkList.length) {
            tabLinkList[value - 1].focus();
          }
        }
      } else if (e.key == "ArrowRight") {
        var value = plugin.findTabLinkIndex(e.target);
        if (value != -1) {
          if (value == tabLinkList.length - 1) {
            tabLinkList[0].focus();
          } else if (value > -1 && value < tabLinkList.length) {
            tabLinkList[value + 1].focus();
          }
        }
      } else if (e.key == "Enter" || e.code == "Space") {
        e.target.click();
      } else if (e.key == "End") {
        tabLinkList[tabLinkList.length - 1].focus();
      } else if (e.key == "Home") {
        tabLinkList[0].focus();
      }
    },

    tabBackFromContent: function (e) {
      if (e.shiftKey && e.key == "Tab") {
        var tabLinkId = $(e.target).attr("aria-labelledby");
        if (tabLinkId != null) {
          e.preventDefault();
          $("#" + tabLinkId)[0].focus();
        }
      }
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – lazy video
 *
 * Author: Steffen Kroggel <developer@steffenkroggel.de>
 * Author: Christian Dilger <c.dilger@addorange.de>
 *
 * Last updated: 03.01.2025
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "lazyVideo",
    defaults = {
      isPlaying: "is-active",
      isPaused: 'is-inactive',
      isForced: 'is-forced',
      playPauseBtnSelector: '.btn--play-pause'
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {

      // Use "plugin" to reference the current instance of the object
      // Can be used inside of functions to prevent conflict with "this"
      plugin = this;

      // Setup elements and global variables
      plugin.settings.$videos = $(plugin.settings.selector);
      plugin.settings.$el = $(this.element);
      plugin.settings.$playPauseBtn = $(this.element).parent().find(plugin.settings.playPauseBtnSelector);

      plugin.bindEvents();
      plugin.checkIsInViewport();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      $( window ).on("scroll", plugin.checkIsInViewport.bind(this));
      this.settings.$playPauseBtn.on("click", plugin.playPause.bind(this))
    },

    checkIsInViewport: function (e) {
      var elementTop = this.settings.$el.offset().top;
      var elementBottom = this.settings.$el.offset().top + (this.settings.$el.outerHeight() / 3);

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      var viewportWidth = $(window).width();

      if (elementTop <= viewportBottom && elementBottom >= viewportTop) {
        this.play();
      } else {
        this.pause();
      }
    },

    play: function (forced) {
      var $element = this.settings.$el;

      if (
        ! $element.hasClass(this.settings.isPlaying)
        && (! $element.hasClass(this.settings.isForced) || forced)
      ) {
        $element.get(0).play();
        $element.addClass(this.settings.isPlaying);
        $element.removeClass(this.settings.isPaused);
        $element.removeClass(this.settings.isForced);
      }
    },

    pause: function (forced) {
      var $element = this.settings.$el;

      if (! $element.hasClass(this.settings.isPaused)) {
        $element.get(0).pause();
        if (forced) {
          $element.addClass(this.settings.isForced);
        }
        $element.addClass(this.settings.isPaused);
        $element.removeClass(this.settings.isPlaying);
      }
    },

    playPause: function (e) {
      var button = e.target;
      var svgUse = $(button).find('use').get(0);
      var $element = this.settings.$el;

      if (! $element.hasClass(this.settings.isPlaying)) {
        this.play(true);
        svgUse.setAttribute('xlink:href', '#ic-pause');
        button.setAttribute('aria-label', 'Video pausieren');
        button.setAttribute('aria-pressed', 'false');
      } else {
        this.pause(true);
        svgUse.setAttribute('xlink:href', '#ic-play');
        button.setAttribute('aria-label', 'Video abspielen');
        button.setAttribute('aria-pressed', 'true');
      }
    }

  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – mobileNavbar
 *
 * Author: helllicht
 * Author: Steffen Kroggel
 *
 * Last updated: 30.05.2023
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = 'mobileNavbar',
    defaults = {
      hamburgerNavButtonClass: '.nav-mobile-hamburger__button',
      hamburgerNavCloseButtonClass: '.close_button',
      mobileNavClass: '.nav-mobile',
      iconOpenClass: '.icon-open',
      iconCloseClass: '.icon-close',
      navMobileItemClass: '.nav-mobile__item',
      navMobileItemLinkClass: '.nav-mobile__item-link',
      navMobileItemToggleClass: '.nav-mobile__item--toggle',
      navMobileListClass: '.inner-nav-mob',
      navMobileBottomClass: '.nav-mobile__bottom',
      navMobileBackLinkClass: '.nav-mobile__back-link',
      primaryNavClass: '.nav-mobile__primary',
      body: 'body',
      bodyFocusClass: 'keyboard-focused',
      //CSS classes to add and remove
      isOpen: 'is-open',
      isClosed: 'is-closed',
      isNone: 'is-none',
      isAjax: 'is-ajax',
      noScroll: 'lock-scroll',
      window: 'window',
      isActive: 'is-active-list',
      backLink: 'nav-mobile__back-link',
      iconClass: 'nav-mobile__item-icon-wrapper',
      isHidden: 'is-hidden',
      useAjax: false,
      focusTimeout: 500
    };

  var plugin;

  // The plugin constructor
  function Plugin (element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
    if (!plugin.settings.useAjax) {
      this.initItems();
    }
  }

  $.extend(Plugin.prototype, {

    /**
     * Init basic structure
     */
    init: function () {
      plugin = this;

      // Setup elements and global variables
      plugin.settings.$el = $(this.element);
      plugin.settings.$body = $('.' + plugin.settings.body);
      plugin.settings.$hamburgerNavButtons = plugin.settings.$el.find(
        plugin.settings.hamburgerNavButtonClass
      );
      plugin.settings.$hamburgerNavOpenButton = plugin.settings.$hamburgerNavButtons.filter(
        '.js-nav-open'
      );
      plugin.settings.$hamburgerNavCloseButton = plugin.settings.$hamburgerNavButtons.filter(
        '.js-nav-close'
      );

      plugin.settings.$mobNav = plugin.settings.$el
        .parent()
        .find(plugin.settings.mobileNavClass);

      plugin.settings.$primaryNav = plugin.settings.$mobNav.find(
        plugin.settings.primaryNavClass
      );

      plugin.settings.$iconOpen = plugin.settings.$el.find(
        plugin.settings.iconOpenClass
      );

      plugin.settings.$iconClose = plugin.settings.$el.find(
        plugin.settings.iconCloseClass
      );

      plugin.settings.itemsInitialized = false;
      plugin.settings.$mobNav.addClass(plugin.settings.isAjax);
      this.bindEvents();
    },

    /**
     * Init all items
     */
    initItems: function () {
      plugin = this;

      //Find all nav items
      plugin.settings.$navToggleItems = plugin.settings.$mobNav.find(
        plugin.settings.navMobileItemToggleClass
      );

      // Find all nav lists
      plugin.settings.$navLists = plugin.settings.$mobNav.find(
        plugin.settings.navMobileListClass
      );

      plugin.settings.$mobNavBottom = plugin.settings.$mobNav.find(
        plugin.settings.navMobileBottomClass
      );

      // Find all navigational elements
      plugin.settings.$navLinkItems = plugin.settings.$mobNav.find(
        plugin.settings.navMobileItemLinkClass
      );

      // Set up is-active classes
      var activeListDiv = plugin.getActiveNavList();

      activeListDiv
        .parents()
        .filter(plugin.settings.navMobileListClass)
        .addClass(plugin.settings.isActive);

      plugin.settings.itemsInitialized = true;
      plugin.settings.$mobNav.removeClass(plugin.settings.isAjax);
      this.bindEvents();
    },

    // Event for ajax loading of items
    onItemsLoaded: function () {
      plugin.openCloseEvent();
      plugin.initItems();
      plugin.openCloseEvent();
    },

    /**
     * Bind all event listeners for this plugin
     */
    bindEvents: function () {
      if (plugin.settings.itemsInitialized) {
        plugin.settings.$navToggleItems.on('click', plugin.navigationSlideEvent); //When Menu Item is opened
        plugin.settings.$navToggleItems.on('keydown', plugin.navigationSlideKeyEvent);
        plugin.settings.$navLinkItems.on('keydown', plugin.navigationSlideKeyEvent);
      } else {
        plugin.settings.$hamburgerNavButtons.on('click', plugin.openCloseEvent); //When Menu is opened
        plugin.settings.$hamburgerNavCloseButton.on('keydown', function (e) {

          if (e.key === 'Tab') {
            if (plugin.getActiveNavList()) {
              plugin.focusMobNavListItem(plugin.getActiveNavList(), false, true);
            }
          }

          if (e.shiftKey && e.key === 'Tab') {
            if (plugin.getActiveNavList()) {
              plugin.focusMobNavListItem(plugin.getActiveNavList(), true, true);
            }
          }

        }); //When Menu is opened

        if (plugin.settings.useAjax) {
          plugin.settings.$el.on(pluginName + 'ItemsLoaded', plugin.onItemsLoaded);
        }
        $(window)
          .on('resize', plugin.windowSizeEvent);
      }
    },

    /**
     * Set position for menu
     */
    positionElements: function () {
      plugin.settings.$primaryNav.css('top', 0);
      if (plugin.settings.itemsInitialized) {

        //Adjust Menu lists
        var a = plugin.settings.$mobNav.css('padding-top');
        plugin.settings.$navLists.css('top', '0');
        plugin.settings.$primaryNav.css('top', parseInt(a));

        //Set top value of bottom element
        // plugin.settings.$mobNavBottom.css(
        //   "top",
        //   parseInt(activeListUl.css("height")) +
        //     parseInt(plugin.settings.$primaryNav.css("top"))
        // );
      }
    },

    /**
     * Event on windowResize-event
     *
     * @param e
     */
    windowSizeEvent: function (e) {
      // e.preventDefault();
      var windowWidth = $(window)
        .width();

      if (windowWidth > 1280) {
        plugin.settings.$mobNav
          .removeClass(plugin.settings.isOpen)
          .addClass(plugin.settings.isClosed);
        plugin.settings.$iconOpen.removeClass(plugin.settings.isNone);
        plugin.settings.$iconClose.addClass(plugin.settings.isNone);
      }

      plugin.positionElements();
    },

    /**
     * display given navList
     *
     * @param list
     */
    showMobNavList: function (list) {
      //Hide All
      plugin.settings.$navLists.removeClass(plugin.settings.isActive);

      //Show List
      list.addClass(plugin.settings.isActive);
      list
        .parents()
        .filter(plugin.settings.navMobileListClass)
        .addClass(plugin.settings.isActive);

      plugin.focusMobNavListItem(list, false, false);

      //Position Nav Mobile Bottom Item
      plugin.positionElements();
    },

    /**
     * sets focus to hamburger close button to keep tab within current view
     */
    focusHamburgerNavCloseButton: function () {
      plugin.settings.$hamburgerNavCloseButton.focus();
    },

    /**
     * sets focus to last link element in active navList
     *
     * @param list
     * @param reverse
     * @param includeToggle
     */
    focusMobNavListItem: function (list, reverse, includeToggle) {

      if (!list.hasClass(plugin.settings.navMobileListClass.substring(1)) // don't know why this is needed!
          || (
            list.hasClass(plugin.settings.navMobileListClass.substring(1)) // don't know why this is needed!
            && !list.hasClass(plugin.settings.isActive)
          )
      ) {
        list = list
          .closest(plugin.settings.navMobileListClass);
      }

      var selector = plugin.settings.navMobileItemLinkClass;
      if (includeToggle) {
        selector = selector + ', ' + plugin.settings.navMobileItemToggleClass;
      }

      setTimeout(function (list, addClass) {

                   var listItem = {};
                   if (reverse) {

                     listItem = list
                       .children('ul')
                       .first()
                       .find(selector)
                       .filter(function () {
                         return $(this)
                                  .closest('div')
                                  .attr('id') === list.attr('id');
                       })
                       .last();

                   } else {

                     listItem = list
                       .find(selector)
                       .first();

                   }

                   listItem.focus();

                   if (addClass) {
                     plugin.settings.$body.addClass(plugin.settings.bodyFocusClass);
                   }

                   /**
                    console.log(list
                    .find(plugin.settings.navMobileItemLinkClass)
                    .first()
                    .text());
                    **/
                 }, plugin.settings.focusTimeout,
                 list,
                 plugin.settings.$body.hasClass(plugin.settings.bodyFocusClass)
      );
    },

    /**
     * Get active list
     *
     * @returns {null|*}
     */
    getActiveNavList: function () {
      if (plugin.settings.$navLists) {
        return plugin.settings.$navLists
          .filter('.' + plugin.settings.isActive)
          .last();
      }
      return null;
    },

    /**
     * Event for click on buttons
     *
     * @param e
     */
    navigationSlideEvent: function (e) {

      // it may be the case that the svg is clicked and returned
      // we fix that here
      if (
        !$(e.target)
          .hasClass(
            plugin.settings.navMobileItemToggleClass.substring(1)
          )
      ) {
        e.target = $(e.target)
          .parents()
          .filter(plugin.settings.navMobileItemToggleClass)
          .first();
      }

      // Get All new list elements
      var navList = $(e.target)
        .nextAll()
        .filter(plugin.settings.navMobileListClass)
        .first();

      e.preventDefault();

      // When item clicked is back_link
      var isBacklink = $(e.target)
        .parent()
        .hasClass(plugin.settings.backLink);

      if (
        navList.length <= 0 &&
        isBacklink
      ) {
        var parentMenus = $(e.target)
          .parents()
          .filter(plugin.settings.navMobileListClass);
        if (parentMenus.length >= 2) {
          plugin.showMobNavList($(parentMenus[1]));
          return;
        }
      }

      //When common navigation item is clicked
      if (navList.length > 0) plugin.showMobNavList(navList);
    },

    /**
     * Event for keyboard navigation
     *
     * @param e
     */
    navigationSlideKeyEvent: function (e) {

      // it may be the case that the svg is clicked and returned
      // we fix that here
      if (
        !$(e.target)
          .hasClass(
            plugin.settings.navMobileItemToggleClass.substring(1)
          ) &&
        !$(e.target)
          .hasClass(
            plugin.settings.navMobileItemLinkClass.substring(1)
          )
      ) {
        e.target = $(e.target)
          .parents()
          .filter(plugin.settings.navMobileItemToggleClass)
          .first();
      }

      switch (e.key) {
        case 'Tab':
          if (!e.shiftKey && plugin.isLastChild(e.target)) {
            e.preventDefault();
            plugin.focusHamburgerNavCloseButton();
          }
          if (e.shiftKey && plugin.isFirstChild(e.target)) {
            e.preventDefault();
            plugin.focusHamburgerNavCloseButton();
          }
          break;
        case 'Escape':
          e.preventDefault();
          plugin.openCloseEvent();
          break;
      }
    },

    /**
     *
     * @param element
     * @returns boolean
     */
    isLastChild: function (element) {
      return (
               $(element)
                 .is(':last-child')
               || ($(element)
                 .is(':nth-child(2n)'))
             )
             && $(element)
               .parent(plugin.settings.navMobileItemClass)
               .is(':last-child');
    },

    /**
     * @param element
     * @returns boolean
     */
    isFirstChild: function (element) {
      return (
               $(element)
                 .is(':first-child')
               || ($(element)
                 .is(':nth-child(2n)'))
             )
             && $(element)
               .parent(plugin.settings.navMobileItemClass)
               .is(':first-child');
    },

    /**
     * Event for open/close
     *
     * @param e
     */
    openCloseEvent: function (e) {
      var isOpen = plugin.settings.$mobNav.hasClass(plugin.settings.isOpen);
      var windowWidth = $(window)
        .width();

      if (isOpen) {
        plugin.close();
      } else {
        plugin.open();
      }
      plugin.positionElements();
    },

    /**
     * open navigation overlay
     */
    open: function () {
      plugin.settings.$mobNav
        .removeClass(plugin.settings.isClosed)
        .addClass(plugin.settings.isOpen)
        .attr('aria-expanded', 'true');
      plugin.settings.$hamburgerNavCloseButton
        .attr('tabindex', '0');
      plugin.settings.$hamburgerNavOpenButton
        .attr('tabindex', '-1');
      plugin.settings.$iconOpen.addClass(plugin.settings.isNone);
      plugin.settings.$iconClose.removeClass(plugin.settings.isNone);
      plugin.settings.$body.addClass(plugin.settings.noScroll);

      if (plugin.getActiveNavList()) {
        plugin.focusMobNavListItem(plugin.getActiveNavList(), false);
      }
    },

    /**
     * open navigation overlay
     */
    close: function () {
      plugin.settings.$mobNav
        .removeClass(plugin.settings.isOpen)
        .addClass(plugin.settings.isClosed)
        .attr('aria-expanded', 'false');
      plugin.settings.$hamburgerNavCloseButton
        .attr('tabindex', '-1');
      plugin.settings.$hamburgerNavOpenButton
        .attr('tabindex', '0')
        .focus();
      plugin.settings.$iconOpen.removeClass(plugin.settings.isNone);
      plugin.settings.$iconClose.addClass(plugin.settings.isNone);
      plugin.settings.$body.removeClass(plugin.settings.noScroll);
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – Modal
 *
 * Author: helllicht
 * Author: Christian Dilger <c.dilger@addorange.de>
 *
 * Last updated: 30.07.2025
 *
 */

(function ($, window, document, undefined) {
  // Create the defaults once
  // Additional options, extending the defaults, can be passed as an object from the initializing call
  var pluginName = "modal",
    defaults = {
      isActive: "is-active",
      noScroll: "lock-scroll",
      openButton: "js-open-mdl",
      closeButton: "js-close-mdl",
      modal: "mdl",
      modalBackground: "js-mdl-layer",
      body: "body",
    };

  var instance = null;

  // The plugin constructor
  function Plugin(element, options) {
    if (instance) {
      return instance;
    }

    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();

    instance = this;
  }

  $.extend(Plugin.prototype, {
    init: function () {
      // Setup elements and global variables
      this.settings.$modal = $("." + this.settings.modal);
      this.settings.$activeModal = null;
      this.settings.$tabbableElements = null;
      this.settings.$openBtn = $("." + this.settings.openButton);
      this.settings.$triggerElement = null;
      this.settings.$closeBtn = $("." + this.settings.closeButton);
      this.settings.$bgOverlay = $("." + this.settings.modalBackground);
      this.settings.$body = $("." + this.settings.body);

      this.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      var self = this;
      $(document).on('click', '.' + this.settings.openButton, function (e) {
        if (e.target.tagName.toLowerCase() === 'label' || $(e.target).closest('label').length > 0) {
          var label = $(e.target).is('label') ? $(e.target) : $(e.target).closest('label');
          var targetInputId = label.attr('for');
          var checkbox = $(`input[id="${targetInputId}"]`);

          if (!checkbox.is(':checked')) {
            e.preventDefault();
            checkbox.prop('checked', true);
            self.open(e);
          }
          return;
        } else {
          e.preventDefault();
          self.open(e);
        }
      });
      $(document).on('click', '.' + this.settings.closeButton, function (e) {
        self.close(e);
      });
      $(document).on('click', '.' + this.settings.modalBackground, function (e) {
        self.close(e);
      });
      $(document).on('change', 'input[type="checkbox"]', function(e) {
        var label = $('label[for="' + $(this).attr('id') + '"].' + self.settings.openButton);
        if (label.length > 0) {
          if ($(this).is(':checked')) {
            var simulatedEvent = {
              target: label[0],
              preventDefault: function () {}
            };
            self.open(simulatedEvent);
          }
        }
      });

      this.boundFocusTrap = this.focusTrap.bind(this);
    },

    open: function (e) {
      var self = this;
      this.settings.$triggerElement = $(e.target).closest('.' + this.settings.openButton);
      this.settings.$triggerElement.attr('aria-expanded', 'true');

      this.settings.$activeModal = $("#" + this.settings.$triggerElement.attr("data-modal"));
      this.settings.$activeModal
        .addClass(this.settings.isActive)
        .attr('aria-hidden', false)
        .attr('aria-modal', true)
        .attr('role', 'dialog')
        .focus()
        .next(this.settings.$bgOverlay)
        .addClass(this.settings.isActive);

      this.settings.$body.addClass(this.settings.noScroll);

      $(document).trigger('modal:opened', [
        this.settings.$triggerElement,
        this.settings.$activeModal
      ]);

      this.settings.$tabbableElements = this.settings.$activeModal.find(
        'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
      );
      setTimeout(function() {
        self.settings.$tabbableElements.first().focus();
      }, 50);

      //Add Keyboard listener
      $(window).on("keydown", this.boundFocusTrap);
    },

    close: function (e) {
      e.preventDefault();

      this.settings.$triggerElement
        .focus()
        .attr('aria-expanded', 'false');

      this.settings.$activeModal
        .removeClass(this.settings.isActive)
        .attr('aria-hidden', true)
        .removeAttr('aria-modal')
        .removeAttr('role')
        .next(this.settings.$bgOverlay)
        .removeClass(this.settings.isActive);

      this.settings.$body.removeClass(this.settings.noScroll);

      this.settings.$activeModal = null;
      this.settings.$triggerElement = null;

      $(document).trigger('modal:closed', [
        this.settings.$triggerElement,
        this.settings.$activeModal
      ]);

      //Remove keyboard listener
      $(window).off("keydown", this.boundFocusTrap);
    },

    focusTrap: function (e) {

      if (e.key === "Escape") {
        e.preventDefault();
        this.close(e);
      }

      if (e.key === "Tab") {
        var firstTabbableElement = this.settings.$tabbableElements.first()[0];
        var lastTabbableElement = this.settings.$tabbableElements.last()[0];

        if (e.shiftKey && document.activeElement === firstTabbableElement) {
          e.preventDefault();
          lastTabbableElement.focus();
        } else
          if (!e.shiftKey && document.activeElement === lastTabbableElement) {
            e.preventDefault();
            firstTabbableElement.focus();
          }
      }
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    if (!instance) {
      instance = new Plugin(this[0], options);
    }
    return instance;
  };
})(jQuery, window, document);

/*!
 *
 * jQuery Plugin – slider
 *
 * Author: helllicht
 *
 * Last updated: 25.05.2020
 *
 */

(function ($, window, document, undefined) {
  var pluginName = "sliderPlugin",
    defaults = {
      sliderItemClass: ".slider-mod__item",
      sliderNavClass: ".slider-mod__nav button",
      //Classes to add and remove
      activeClass: "is-active"
    };

  var plugin;

  // The plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // Merge defaults with passed options
    this.settings = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      plugin = this;

      // Setup elements and global variables
      plugin.settings.$el = $(this.element);
      plugin.settings.$sliderItems = plugin.settings.$el.find(
        plugin.settings.sliderItemClass
      );

      plugin.settings.$sliderNav = plugin.settings.$el.find(
        plugin.settings.sliderNavClass
      );

      plugin.adjustHeight();
      plugin.bindEvents();
    },

    // Bind all event listeners for this plugin
    bindEvents: function () {
      plugin.settings.$sliderNav.on("click", plugin.showImage);
      $(window).on("resize", plugin.adjustHeight);
    },

    adjustHeight: function () {
      var height = plugin.settings.$el
        .find("." + plugin.settings.activeClass)
        .css("height");
      plugin.settings.$el.css("height", height);
    },

    showImage: function (e) {
      e.preventDefault();

      plugin.settings.$sliderItems.each(function (index, element) {
        $(element).removeClass(plugin.settings.activeClass);
      });
      plugin.settings.$sliderNav.each(function (index, element) {
        $(element).attr("aria-selected", "false");
      });

      //Check if the image or the a element was clicked
      var target_id;
      if ($(e.target).get(0).nodeName === "IMG") {
        $(e.target).parent().attr("aria-selected", "true");
        target_id = $(e.target).parent().attr("aria-controls");
      } else {
        $(e.target).attr("aria-selected", "true");
        target_id = $(e.target).attr("aria-controls");
      }
      $("#" + target_id).addClass(plugin.settings.activeClass);
      plugin.adjustHeight();
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

  /**
   * Creates a carousel.
   * @class The Owl Carousel.
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the carousel for.
   * @param {Object} [options] - The options
   */
  function Owl(element, options) {

    /**
     * Current settings for the carousel.
     * @public
     */
    this.settings = null;

    /**
     * Current options set by the caller including defaults.
     * @public
     */
    this.options = $.extend({}, Owl.Defaults, options);

    /**
     * Plugin element.
     * @public
     */
    this.$element = $(element);

    /**
     * Proxied event handlers.
     * @protected
     */
    this._handlers = {};

    /**
     * References to the running plugins of this carousel.
     * @protected
     */
    this._plugins = {};

    /**
     * Currently suppressed events to prevent them from being retriggered.
     * @protected
     */
    this._supress = {};

    /**
     * Absolute current position.
     * @protected
     */
    this._current = null;

    /**
     * Animation speed in milliseconds.
     * @protected
     */
    this._speed = null;

    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     * @protected
     */
    this._coordinates = [];

    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     * @protected
     */
    this._breakpoint = null;

    /**
     * Current width of the plugin element.
     */
    this._width = null;

    /**
     * All real items.
     * @protected
     */
    this._items = [];

    /**
     * All cloned items.
     * @protected
     */
    this._clones = [];

    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     * @protected
     */
    this._mergers = [];

    /**
     * Widths of all items.
     */
    this._widths = [];

    /**
     * Invalidated parts within the update process.
     * @protected
     */
    this._invalidated = {};

    /**
     * Ordered list of workers for the update process.
     * @protected
     */
    this._pipe = [];

    /**
     * Current state information for the drag operation.
     * @todo #261
     * @protected
     */
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    };

    /**
     * Current state information and their tags.
     * @type {Object}
     * @protected
     */
    this._states = {
      current: {},
      tags: {
        'initializing': [ 'busy' ],
        'animating': [ 'busy' ],
        'dragging': [ 'interacting' ]
      }
    };

    $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
      this._handlers[handler] = $.proxy(this[handler], this);
    }, this));

    $.each(Owl.Plugins, $.proxy(function(key, plugin) {
      this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
        = new plugin(this);
    }, this));

    $.each(Owl.Workers, $.proxy(function(priority, worker) {
      this._pipe.push({
                        'filter': worker.filter,
                        'run': $.proxy(worker.run, this)
                      });
    }, this));

    this.setup();
    this.initialize();
  }

  /**
   * Default options for the carousel.
   * @public
   */
  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,
    rewind: false,
    checkVisibility: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,

    margin: 0,
    stagePadding: 0,

    merge: false,
    mergeFit: true,
    autoWidth: false,

    startPosition: 0,
    rtl: false,

    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,

    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,

    fallbackEasing: 'swing',
    slideTransition: '',

    info: false,

    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',

    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  };

  /**
   * Enumeration for width.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  };

  /**
   * Enumeration for types.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Type = {
    Event: 'event',
    State: 'state'
  };

  /**
   * Contains all registered plugins.
   * @public
   */
  Owl.Plugins = {};

  /**
   * List of workers involved in the update process.
   */
  Owl.Workers = [ {
    filter: [ 'width', 'settings' ],
    run: function() {
      this._width = this.$element.width();
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      cache.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: [ 'items', 'settings' ],
    run: function() {
      this.$stage.children('.cloned').remove();
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      var margin = this.settings.margin || '',
        grid = !this.settings.autoWidth,
        rtl = this.settings.rtl,
        css = {
          'width': 'auto',
          'margin-left': rtl ? margin : '',
          'margin-right': rtl ? '' : margin
        };

      !grid && this.$stage.children().css(css);

      cache.css = css;
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        merge = null,
        iterator = this._items.length,
        grid = !this.settings.autoWidth,
        widths = [];

      cache.items = {
        merge: false,
        width: width
      };

      while (iterator--) {
        merge = this._mergers[iterator];
        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

        cache.items.merge = merge > 1 || cache.items.merge;

        widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
      }

      this._widths = widths;
    }
  }, {
    filter: [ 'items', 'settings' ],
    run: function() {
      var clones = [],
        items = this._items,
        settings = this.settings,
        // TODO: Should be computed from number of min width items in stage
        view = Math.max(settings.items * 2, 4),
        size = Math.ceil(items.length / 2) * 2,
        repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
        append = '',
        prepend = '';

      repeat /= 2;

      while (repeat > 0) {
        // Switch to only using appended clones
        clones.push(this.normalize(clones.length / 2, true));
        append = append + items[clones[clones.length - 1]][0].outerHTML;
        clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
        prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
        repeat -= 1;
      }

      this._clones = clones;

      $(append).addClass('cloned').appendTo(this.$stage);
      $(prepend).addClass('cloned').prependTo(this.$stage);
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function() {
      var rtl = this.settings.rtl ? 1 : -1,
        size = this._clones.length + this._items.length,
        iterator = -1,
        previous = 0,
        current = 0,
        coordinates = [];

      while (++iterator < size) {
        previous = coordinates[iterator - 1] || 0;
        current = this._widths[this.relative(iterator)] + this.settings.margin;
        coordinates.push(previous + current * rtl);
      }

      this._coordinates = coordinates;
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function() {
      var padding = this.settings.stagePadding,
        coordinates = this._coordinates,
        css = {
          'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          'padding-left': padding || '',
          'padding-right': padding || ''
        };

      this.$stage.css(css);
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      var iterator = this._coordinates.length,
        grid = !this.settings.autoWidth,
        items = this.$stage.children();

      if (grid && cache.items.merge) {
        while (iterator--) {
          cache.css.width = this._widths[this.relative(iterator)];
          items.eq(iterator).css(cache.css);
        }
      } else if (grid) {
        cache.css.width = cache.items.width;
        items.css(cache.css);
      }
    }
  }, {
    filter: [ 'items' ],
    run: function() {
      this._coordinates.length < 1 && this.$stage.removeAttr('style');
    }
  }, {
    filter: [ 'width', 'items', 'settings' ],
    run: function(cache) {
      cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
      cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
      this.reset(cache.current);
    }
  }, {
    filter: [ 'position' ],
    run: function() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: [ 'width', 'position', 'items', 'settings' ],
    run: function() {
      var rtl = this.settings.rtl ? 1 : -1,
        padding = this.settings.stagePadding * 2,
        begin = this.coordinates(this.current()) + padding,
        end = begin + this.width() * rtl,
        inner, outer, matches = [], i, n;

      for (i = 0, n = this._coordinates.length; i < n; i++) {
        inner = this._coordinates[i - 1] || 0;
        outer = Math.abs(this._coordinates[i]) + padding * rtl;

        if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
            || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
          matches.push(i);
        }
      }

      this.$stage.children('.active').removeClass('active');
      this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

      this.$stage.children('.center').removeClass('center');
      if (this.settings.center) {
        this.$stage.children().eq(this.current()).addClass('center');
      }
    }
  } ];

  /**
   * Create the stage DOM element
   */
  Owl.prototype.initializeStage = function() {
    this.$stage = this.$element.find('.' + this.settings.stageClass);

    // if the stage is already in the DOM, grab it and skip stage initialization
    if (this.$stage.length) {
      return;
    }

    this.$element.addClass(this.options.loadingClass);

    // create stage
    this.$stage = $('<' + this.settings.stageElement + '>', {
      "class": this.settings.stageClass
    }).wrap( $( '<div/>', {
      "class": this.settings.stageOuterClass
    }));

    // append stage
    this.$element.append(this.$stage.parent());
  };

  /**
   * Create item DOM elements
   */
  Owl.prototype.initializeItems = function() {
    var $items = this.$element.find('.owl-item');

    // if the items are already in the DOM, grab them and skip item initialization
    if ($items.length) {
      this._items = $items.get().map(function(item) {
        return $(item);
      });

      this._mergers = this._items.map(function() {
        return 1;
      });

      this.refresh();

      return;
    }

    // append content
    this.replace(this.$element.children().not(this.$stage.parent()));

    // check visibility
    if (this.isVisible()) {
      // update view
      this.refresh();
    } else {
      // invalidate width
      this.invalidate('width');
    }

    this.$element
      .removeClass(this.options.loadingClass)
      .addClass(this.options.loadedClass);
  };

  /**
   * Initializes the carousel.
   * @protected
   */
  Owl.prototype.initialize = function() {
    this.enter('initializing');
    this.trigger('initialize');

    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    if (this.settings.autoWidth && !this.is('pre-loading')) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
      width = this.$element.children(nestedSelector).width();

      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
      }
    }

    this.initializeStage();
    this.initializeItems();

    // register event handlers
    this.registerEventHandlers();

    this.leave('initializing');
    this.trigger('initialized');
  };

  /**
   * @returns {Boolean} visibility of $element
   *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
   *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
   */
  Owl.prototype.isVisible = function() {
    return this.settings.checkVisibility
      ? this.$element.is(':visible')
      : true;
  };

  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @public
   */
  Owl.prototype.setup = function() {
    var viewport = this.viewport(),
      overwrites = this.options.responsive,
      match = -1,
      settings = null;

    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function(breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });

      settings = $.extend({}, this.options, overwrites[match]);
      if (typeof settings.stagePadding === 'function') {
        settings.stagePadding = settings.stagePadding();
      }
      delete settings.responsive;

      // responsive class
      if (settings.responsiveClass) {
        this.$element.attr('class',
                           this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
        );
      }
    }

    this.trigger('change', { property: { name: 'settings', value: settings } });
    this._breakpoint = match;
    this.settings = settings;
    this.invalidate('settings');
    this.trigger('changed', { property: { name: 'settings', value: this.settings } });
  };

  /**
   * Updates option logic if necessery.
   * @protected
   */
  Owl.prototype.optionsLogic = function() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };

  /**
   * Prepares an item before add.
   * @todo Rename event parameter `content` to `item`.
   * @protected
   * @returns {jQuery|HTMLElement} - The item container.
   */
  Owl.prototype.prepare = function(item) {
    var event = this.trigger('prepare', { content: item });

    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>')
        .addClass(this.options.itemClass).append(item)
    }

    this.trigger('prepared', { content: event.data });

    return event.data;
  };

  /**
   * Updates the view.
   * @public
   */
  Owl.prototype.update = function() {
    var i = 0,
      n = this._pipe.length,
      filter = $.proxy(function(p) { return this[p] }, this._invalidated),
      cache = {};

    while (i < n) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }

    this._invalidated = {};

    !this.is('valid') && this.enter('valid');
  };

  /**
   * Gets the width of the view.
   * @public
   * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
   * @returns {Number} - The width of the view in pixel.
   */
  Owl.prototype.width = function(dimension) {
    dimension = dimension || Owl.Width.Default;
    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  };

  /**
   * Refreshes the carousel primarily for adaptive purposes.
   * @public
   */
  Owl.prototype.refresh = function() {
    this.enter('refreshing');
    this.trigger('refresh');

    this.setup();

    this.optionsLogic();

    this.$element.addClass(this.options.refreshClass);

    this.update();

    this.$element.removeClass(this.options.refreshClass);

    this.leave('refreshing');
    this.trigger('refreshed');
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onThrottledResize = function() {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onResize = function() {
    if (!this._items.length) {
      return false;
    }

    if (this._width === this.$element.width()) {
      return false;
    }

    if (!this.isVisible()) {
      return false;
    }

    this.enter('resizing');

    if (this.trigger('resize').isDefaultPrevented()) {
      this.leave('resizing');
      return false;
    }

    this.invalidate('width');

    this.refresh();

    this.leave('resizing');
    this.trigger('resized');
  };

  /**
   * Registers event handlers.
   * @todo Check `msPointerEnabled`
   * @todo #261
   * @protected
   */
  Owl.prototype.registerEventHandlers = function() {
    if ($.support.transition) {
      this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    }

    if (this.settings.responsive !== false) {
      this.on(window, 'resize', this._handlers.onThrottledResize);
    }

    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
    }

    if (this.settings.touchDrag){
      this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    }
  };

  /**
   * Handles `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragStart = function(event) {
    var stage = null;

    if (event.which === 3) {
      return;
    }

    if ($.support.transform) {
      stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
      stage = {
        x: stage[stage.length === 16 ? 12 : 4],
        y: stage[stage.length === 16 ? 13 : 5]
      };
    } else {
      stage = this.$stage.position();
      stage = {
        x: this.settings.rtl ?
          stage.left + this.$stage.width() - this.width() + this.settings.margin :
          stage.left,
        y: stage.top
      };
    }

    if (this.is('animating')) {
      $.support.transform ? this.animate(stage.x) : this.$stage.stop()
      this.invalidate('position');
    }

    this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

    this.speed(0);

    this._drag.time = new Date().getTime();
    this._drag.target = $(event.target);
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this.pointer(event);

    $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

    $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
      var delta = this.difference(this._drag.pointer, this.pointer(event));

      $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

      if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
        return;
      }

      event.preventDefault();

      this.enter('dragging');
      this.trigger('drag');
    }, this));
  };

  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragMove = function(event) {
    var minimum = null,
      maximum = null,
      pull = null,
      delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this.difference(this._drag.stage.start, delta);

    if (!this.is('dragging')) {
      return;
    }

    event.preventDefault();

    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = this.coordinates(this.maximum() + 1) - minimum;
      stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }

    this._drag.stage.current = stage;

    this.animate(stage.x);
  };

  /**
   * Handles the `touchend` and `mouseup` events.
   * @todo #261
   * @todo Threshold for click event
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragEnd = function(event) {
    var delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this._drag.stage.current,
      direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

    $(document).off('.owl.core');

    this.$element.removeClass(this.options.grabClass);

    if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
      this.invalidate('position');
      this.update();

      this._drag.direction = direction;

      if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
        this._drag.target.one('click.owl.core', function() { return false; });
      }
    }

    if (!this.is('dragging')) {
      return;
    }

    this.leave('dragging');
    this.trigger('dragged');
  };

  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @protected
   * @param {Number} coordinate - The coordinate in pixel.
   * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
   * @return {Number} - The absolute position of the closest item.
   */
  Owl.prototype.closest = function(coordinate, direction) {
    var position = -1,
      pull = 30,
      width = this.width(),
      coordinates = this.coordinates();

    if (!this.settings.freeDrag) {
      // check closest item
      $.each(coordinates, $.proxy(function(index, value) {
        // on a left pull, check on current index
        if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
          position = index;
          // on a right pull, check on previous index
          // to do so, subtract width from value and set position = index + 1
        } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
          position = index + 1;
        } else if (this.op(coordinate, '<', value)
                   && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
          position = direction === 'left' ? index + 1 : index;
        }
        return position === -1;
      }, this));
    }

    if (!this.settings.loop) {
      // non loop boundries
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }

    return position;
  };

  /**
   * Animates the stage.
   * @todo #270
   * @public
   * @param {Number} coordinate - The coordinate in pixels.
   */
  Owl.prototype.animate = function(coordinate) {
    var animate = this.speed() > 0;

    this.is('animating') && this.onTransitionEnd();

    if (animate) {
      this.enter('animating');
      this.trigger('translate');
    }

    if ($.support.transform3d && $.support.transition) {
      this.$stage.css({
                        transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                        transition: (this.speed() / 1000) + 's' + (
                          this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                        )
                      });
    } else if (animate) {
      this.$stage.animate({
                            left: coordinate + 'px'
                          }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    } else {
      this.$stage.css({
                        left: coordinate + 'px'
                      });
    }
  };

  /**
   * Checks whether the carousel is in a specific state or not.
   * @param {String} state - The state to check.
   * @returns {Boolean} - The flag which indicates if the carousel is busy.
   */
  Owl.prototype.is = function(state) {
    return this._states.current[state] && this._states.current[state] > 0;
  };

  /**
   * Sets the absolute position of the current item.
   * @public
   * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
   * @returns {Number} - The absolute position of the current item.
   */
  Owl.prototype.current = function(position) {
    if (position === undefined) {
      return this._current;
    }

    if (this._items.length === 0) {
      return undefined;
    }

    position = this.normalize(position);

    if (this._current !== position) {
      var event = this.trigger('change', { property: { name: 'position', value: position } });

      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }

      this._current = position;

      this.invalidate('position');

      this.trigger('changed', { property: { name: 'position', value: this._current } });
    }

    return this._current;
  };

  /**
   * Invalidates the given part of the update routine.
   * @param {String} [part] - The part to invalidate.
   * @returns {Array.<String>} - The invalidated parts.
   */
  Owl.prototype.invalidate = function(part) {
    if ($.type(part) === 'string') {
      this._invalidated[part] = true;
      this.is('valid') && this.leave('valid');
    }
    return $.map(this._invalidated, function(v, i) { return i });
  };

  /**
   * Resets the absolute position of the current item.
   * @public
   * @param {Number} position - The absolute position of the new item.
   */
  Owl.prototype.reset = function(position) {
    position = this.normalize(position);

    if (position === undefined) {
      return;
    }

    this._speed = 0;
    this._current = position;

    this.suppress([ 'translate', 'translated' ]);

    this.animate(this.coordinates(position));

    this.release([ 'translate', 'translated' ]);
  };

  /**
   * Normalizes an absolute or a relative position of an item.
   * @public
   * @param {Number} position - The absolute or relative position to normalize.
   * @param {Boolean} [relative=false] - Whether the given position is relative or not.
   * @returns {Number} - The normalized position.
   */
  Owl.prototype.normalize = function(position, relative) {
    var n = this._items.length,
      m = relative ? 0 : this._clones.length;

    if (!this.isNumeric(position) || n < 1) {
      position = undefined;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }

    return position;
  };

  /**
   * Converts an absolute position of an item into a relative one.
   * @public
   * @param {Number} position - The absolute position to convert.
   * @returns {Number} - The converted position.
   */
  Owl.prototype.relative = function(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  };

  /**
   * Gets the maximum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.maximum = function(relative) {
    var settings = this.settings,
      maximum = this._coordinates.length,
      iterator,
      reciprocalItemsWidth,
      elementWidth;

    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      if (iterator) {
        reciprocalItemsWidth = this._items[--iterator].width();
        elementWidth = this.$element.width();
        while (iterator--) {
          reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
          if (reciprocalItemsWidth > elementWidth) {
            break;
          }
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }

    if (relative) {
      maximum -= this._clones.length / 2;
    }

    return Math.max(maximum, 0);
  };

  /**
   * Gets the minimum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.minimum = function(relative) {
    return relative ? 0 : this._clones.length / 2;
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.items = function(position) {
    if (position === undefined) {
      return this._items.slice();
    }

    position = this.normalize(position, true);
    return this._items[position];
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.mergers = function(position) {
    if (position === undefined) {
      return this._mergers.slice();
    }

    position = this.normalize(position, true);
    return this._mergers[position];
  };

  /**
   * Gets the absolute positions of clones for an item.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
   */
  Owl.prototype.clones = function(position) {
    var odd = this._clones.length / 2,
      even = odd + this._items.length,
      map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

    if (position === undefined) {
      return $.map(this._clones, function(v, i) { return map(i) });
    }

    return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
  };

  /**
   * Sets the current animation speed.
   * @public
   * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns {Number} - The current animation speed in milliseconds.
   */
  Owl.prototype.speed = function(speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }

    return this._speed;
  };

  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @public
   * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
   * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
   */
  Owl.prototype.coordinates = function(position) {
    var multiplier = 1,
      newPosition = position - 1,
      coordinate;

    if (position === undefined) {
      return $.map(this._coordinates, $.proxy(function(coordinate, index) {
        return this.coordinates(index);
      }, this));
    }

    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }

      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }

    coordinate = Math.ceil(coordinate);

    return coordinate;
  };

  /**
   * Calculates the speed for a translation.
   * @protected
   * @param {Number} from - The absolute position of the start item.
   * @param {Number} to - The absolute position of the target item.
   * @param {Number} [factor=undefined] - The time factor in milliseconds.
   * @returns {Number} - The time in milliseconds for the translation.
   */
  Owl.prototype.duration = function(from, to, factor) {
    if (factor === 0) {
      return 0;
    }

    return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
  };

  /**
   * Slides to the specified item.
   * @public
   * @param {Number} position - The position of the item.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.to = function(position, speed) {
    var current = this.current(),
      revert = null,
      distance = position - this.relative(current),
      direction = (distance > 0) - (distance < 0),
      items = this._items.length,
      minimum = this.minimum(),
      maximum = this.maximum();

    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }

      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;

      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        this.reset(current);
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }

    this.speed(this.duration(current, position, speed));
    this.current(position);

    if (this.isVisible()) {
      this.update();
    }
  };

  /**
   * Slides to the next item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.next = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };

  /**
   * Slides to the previous item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.prev = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };

  /**
   * Handles the end of an animation.
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onTransitionEnd = function(event) {

    // if css2 animation then event object is undefined
    if (event !== undefined) {
      event.stopPropagation();

      // Catch only owl-stage transitionEnd event
      if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
        return false;
      }
    }

    this.leave('animating');
    this.trigger('translated');
  };

  /**
   * Gets viewport width.
   * @protected
   * @return {Number} - The width in pixel.
   */
  Owl.prototype.viewport = function() {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn('Can not detect viewport width.');
    }
    return width;
  };

  /**
   * Replaces the current content.
   * @public
   * @param {HTMLElement|jQuery|String} content - The new content.
   */
  Owl.prototype.replace = function(content) {
    this.$stage.empty();
    this._items = [];

    if (content) {
      content = (content instanceof jQuery) ? content : $(content);
    }

    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }

    content.filter(function() {
      return this.nodeType === 1;
    }).each($.proxy(function(index, item) {
      item = this.prepare(item);
      this.$stage.append(item);
      this._items.push(item);
      this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }, this));

    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

    this.invalidate('items');
  };

  /**
   * Adds an item.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {HTMLElement|jQuery|String} content - The item content to add.
   * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
   */
  Owl.prototype.add = function(content, position) {
    var current = this.relative(this._current);

    position = position === undefined ? this._items.length : this.normalize(position, true);
    content = content instanceof jQuery ? content : $(content);

    this.trigger('add', { content: content, position: position });

    content = this.prepare(content);

    if (this._items.length === 0 || position === this._items.length) {
      this._items.length === 0 && this.$stage.append(content);
      this._items.length !== 0 && this._items[position - 1].after(content);
      this._items.push(content);
      this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
      this._items[position].before(content);
      this._items.splice(position, 0, content);
      this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }

    this._items[current] && this.reset(this._items[current].index());

    this.invalidate('items');

    this.trigger('added', { content: content, position: position });
  };

  /**
   * Removes an item by its position.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {Number} position - The relative position of the item to remove.
   */
  Owl.prototype.remove = function(position) {
    position = this.normalize(position, true);

    if (position === undefined) {
      return;
    }

    this.trigger('remove', { content: this._items[position], position: position });

    this._items[position].remove();
    this._items.splice(position, 1);
    this._mergers.splice(position, 1);

    this.invalidate('items');

    this.trigger('removed', { content: null, position: position });
  };

  /**
   * Preloads images with auto width.
   * @todo Replace by a more generic approach
   * @protected
   */
  Owl.prototype.preloadAutoWidthImages = function(images) {
    images.each($.proxy(function(i, element) {
      this.enter('pre-loading');
      element = $(element);
      $(new Image()).one('load', $.proxy(function(e) {
        element.attr('src', e.target.src);
        element.css('opacity', 1);
        this.leave('pre-loading');
        !this.is('pre-loading') && !this.is('initializing') && this.refresh();
      }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    }, this));
  };

  /**
   * Destroys the carousel.
   * @public
   */
  Owl.prototype.destroy = function() {

    this.$element.off('.owl.core');
    this.$stage.off('.owl.core');
    $(document).off('.owl.core');

    if (this.settings.responsive !== false) {
      window.clearTimeout(this.resizeTimer);
      this.off(window, 'resize', this._handlers.onThrottledResize);
    }

    for (var i in this._plugins) {
      this._plugins[i].destroy();
    }

    this.$stage.children('.cloned').remove();

    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.remove();
    this.$element
      .removeClass(this.options.refreshClass)
      .removeClass(this.options.loadingClass)
      .removeClass(this.options.loadedClass)
      .removeClass(this.options.rtlClass)
      .removeClass(this.options.dragClass)
      .removeClass(this.options.grabClass)
      .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
      .removeData('owl.carousel');
  };

  /**
   * Operators to calculate right-to-left and left-to-right.
   * @protected
   * @param {Number} [a] - The left side operand.
   * @param {String} [o] - The operator.
   * @param {Number} [b] - The right side operand.
   */
  Owl.prototype.op = function(a, o, b) {
    var rtl = this.settings.rtl;
    switch (o) {
      case '<':
        return rtl ? a > b : a < b;
      case '>':
        return rtl ? a < b : a > b;
      case '>=':
        return rtl ? a <= b : a >= b;
      case '<=':
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  };

  /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */
  Owl.prototype.on = function(element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };

  /**
   * Detaches from an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The attached event handler to detach.
   * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
   */
  Owl.prototype.off = function(element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };

  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @protected
   * @param {String} name - The event name.
   * @param {*} [data=null] - The event data.
   * @param {String} [namespace=carousel] - The event namespace.
   * @param {String} [state] - The state which is associated with the event.
   * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
   * @returns {Event} - The event arguments.
   */
  Owl.prototype.trigger = function(name, data, namespace, state, enter) {
    var status = {
      item: { count: this._items.length, index: this.current() }
    }, handler = $.camelCase(
      $.grep([ 'on', name, namespace ], function(v) { return v })
        .join('-').toLowerCase()
    ), event = $.Event(
      [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
      $.extend({ relatedTarget: this }, status, data)
    );

    if (!this._supress[name]) {
      $.each(this._plugins, function(name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });

      this.register({ type: Owl.Type.Event, name: name });
      this.$element.trigger(event);

      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].call(this, event);
      }
    }

    return event;
  };

  /**
   * Enters a state.
   * @param name - The state name.
   */
  Owl.prototype.enter = function(name) {
    $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
      if (this._states.current[name] === undefined) {
        this._states.current[name] = 0;
      }

      this._states.current[name]++;
    }, this));
  };

  /**
   * Leaves a state.
   * @param name - The state name.
   */
  Owl.prototype.leave = function(name) {
    $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
      this._states.current[name]--;
    }, this));
  };

  /**
   * Registers an event or state.
   * @public
   * @param {Object} object - The event or state to register.
   */
  Owl.prototype.register = function(object) {
    if (object.type === Owl.Type.Event) {
      if (!$.event.special[object.name]) {
        $.event.special[object.name] = {};
      }

      if (!$.event.special[object.name].owl) {
        var _default = $.event.special[object.name]._default;
        $.event.special[object.name]._default = function(e) {
          if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
            return _default.apply(this, arguments);
          }
          return e.namespace && e.namespace.indexOf('owl') > -1;
        };
        $.event.special[object.name].owl = true;
      }
    } else if (object.type === Owl.Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }

      this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
        return $.inArray(tag, this._states.tags[object.name]) === i;
      }, this));
    }
  };

  /**
   * Suppresses events.
   * @protected
   * @param {Array.<String>} events - The events to suppress.
   */
  Owl.prototype.suppress = function(events) {
    $.each(events, $.proxy(function(index, event) {
      this._supress[event] = true;
    }, this));
  };

  /**
   * Releases suppressed events.
   * @protected
   * @param {Array.<String>} events - The events to release.
   */
  Owl.prototype.release = function(events) {
    $.each(events, $.proxy(function(index, event) {
      delete this._supress[event];
    }, this));
  };

  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @protected
   * @param {Event} - The `mousedown` or `touchstart` event.
   * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
   */
  Owl.prototype.pointer = function(event) {
    var result = { x: null, y: null };

    event = event.originalEvent || event || window.event;

    event = event.touches && event.touches.length ?
      event.touches[0] : event.changedTouches && event.changedTouches.length ?
        event.changedTouches[0] : event;

    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }

    return result;
  };

  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @protected
   * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
   * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
   */
  Owl.prototype.isNumeric = function(number) {
    return !isNaN(parseFloat(number));
  };

  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @protected
   * @param {Object} - The first vector.
   * @param {Object} - The second vector.
   * @returns {Object} - The difference.
   */
  Owl.prototype.difference = function(first, second) {
    return {
      x: first.x - second.x,
      y: first.y - second.y
    };
  };

  /**
   * The jQuery Plugin for the Owl Carousel
   * @todo Navigation plugin `next` and `prev`
   * @public
   */
  $.fn.owlCarousel = function(option) {
    var args = Array.prototype.slice.call(arguments, 1);

    return this.each(function() {
      var $this = $(this),
        data = $this.data('owl.carousel');

      if (!data) {
        data = new Owl(this, typeof option == 'object' && option);
        $this.data('owl.carousel', data);

        $.each([
                 'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
               ], function(i, event) {
          data.register({ type: Owl.Type.Event, name: event });
          data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
            if (e.namespace && e.relatedTarget !== this) {
              this.suppress([ event ]);
              data[event].apply(this, [].slice.call(arguments, 1));
              this.release([ event ]);
            }
          }, data));
        });
      }

      if (typeof option == 'string' && option.charAt(0) !== '_') {
        data[option].apply(data, args);
      }
    });
  };

  /**
   * The constructor for the jQuery Plugin
   * @public
   */
  $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the auto refresh plugin.
   * @class The Auto Refresh Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoRefresh = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Refresh interval.
     * @protected
     * @type {number}
     */
    this._interval = null;

    /**
     * Whether the element is currently visible or not.
     * @protected
     * @type {Boolean}
     */
    this._visible = null;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoRefresh) {
          this.watch();
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  AutoRefresh.Defaults = {
    autoRefresh: true,
    autoRefreshInterval: 500
  };

  /**
   * Watches the element.
   */
  AutoRefresh.prototype.watch = function() {
    if (this._interval) {
      return;
    }

    this._visible = this._core.isVisible();
    this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
  };

  /**
   * Refreshes the element.
   */
  AutoRefresh.prototype.refresh = function() {
    if (this._core.isVisible() === this._visible) {
      return;
    }

    this._visible = !this._visible;

    this._core.$element.toggleClass('owl-hidden', !this._visible);

    this._visible && (this._core.invalidate('width') && this._core.refresh());
  };

  /**
   * Destroys the plugin.
   */
  AutoRefresh.prototype.destroy = function() {
    var handler, property;

    window.clearInterval(this._interval);

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the lazy plugin.
   * @class The Lazy Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Lazy = function(carousel) {

    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Already loaded items.
     * @protected
     * @type {Array.<jQuery>}
     */
    this._loaded = [];

    /**
     * Event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
        if (!e.namespace) {
          return;
        }

        if (!this._core.settings || !this._core.settings.lazyLoad) {
          return;
        }

        if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
          var settings = this._core.settings,
            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
            i = ((settings.center && n * -1) || 0),
            position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
            clones = this._core.clones().length,
            load = $.proxy(function(i, v) { this.load(v) }, this);
          //TODO: Need documentation for this new option
          if (settings.lazyLoadEager > 0) {
            n += settings.lazyLoadEager;
            // If the carousel is looping also preload images that are to the "left"
            if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
          }

          while (i++ < n) {
            this.load(clones / 2 + this._core.relative(position));
            clones && $.each(this._core.clones(this._core.relative(position)), load);
            position++;
          }
        }
      }, this)
    };

    // set the default options
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    // register event handler
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  Lazy.Defaults = {
    lazyLoad: false,
    lazyLoadEager: 0
  };

  /**
   * Loads all resources of an item at the specified position.
   * @param {Number} position - The absolute position of the item.
   * @protected
   */
  Lazy.prototype.load = function(position) {
    var $item = this._core.$stage.children().eq(position),
      $elements = $item && $item.find('.owl-lazy');

    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }

    $elements.each($.proxy(function(index, element) {
      var $element = $(element), image,
        url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

      this._core.trigger('load', { element: $element, url: url }, 'lazy');

      if ($element.is('img')) {
        $element.one('load.owl.lazy', $.proxy(function() {
          $element.css('opacity', 1);
          this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
        }, this)).attr('src', url);
      } else if ($element.is('source')) {
        $element.one('load.owl.lazy', $.proxy(function() {
          this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
        }, this)).attr('srcset', url);
      } else {
        image = new Image();
        image.onload = $.proxy(function() {
          $element.css({
                         'background-image': 'url("' + url + '")',
                         'opacity': '1'
                       });
          this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
        }, this);
        image.src = url;
      }
    }, this));

    this._loaded.push($item.get(0));
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Lazy.prototype.destroy = function() {
    var handler, property;

    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the auto height plugin.
   * @class The Auto Height Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoHeight = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    this._previousHeight = null;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight
            && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
          this.update();
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
    this._intervalId = null;
    var refThis = this;

    // These changes have been taken from a PR by gavrochelegnou proposed in #1575
    // and have been made compatible with the latest jQuery version
    $(window).on('load', function() {
      if (refThis._core.settings.autoHeight) {
        refThis.update();
      }
    });

    // Autoresize the height of the carousel when window is resized
    // When carousel has images, the height is dependent on the width
    // and should also change on resize
    $(window).resize(function() {
      if (refThis._core.settings.autoHeight) {
        if (refThis._intervalId != null) {
          clearTimeout(refThis._intervalId);
        }

        refThis._intervalId = setTimeout(function() {
          refThis.update();
        }, 250);
      }
    });

  };

  /**
   * Default options.
   * @public
   */
  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height'
  };

  /**
   * Updates the view.
   */
  AutoHeight.prototype.update = function() {
    var start = this._core._current,
      end = start + this._core.settings.items,
      lazyLoadEnabled = this._core.settings.lazyLoad,
      visible = this._core.$stage.children().toArray().slice(start, end),
      heights = [],
      maxheight = 0;

    $.each(visible, function(index, item) {
      heights.push($(item).height());
    });

    maxheight = Math.max.apply(null, heights);

    if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
      maxheight = this._previousHeight;
    }

    this._previousHeight = maxheight;

    this._core.$stage.parent()
      .height(maxheight)
      .addClass(this._core.settings.autoHeightClass);
  };

  AutoHeight.prototype.destroy = function() {
    var handler, property;

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] !== 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the video plugin.
   * @class The Video Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Video = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Cache all video URLs.
     * @protected
     * @type {Object}
     */
    this._videos = {};

    /**
     * Current playing item.
     * @protected
     * @type {jQuery}
     */
    this._playing = null;

    /**
     * All event handlers.
     * @todo The cloned content removale is too late
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
        }
      }, this),
      'resize.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.is('resizing')) {
          this._core.$stage.find('.cloned .owl-video-frame').remove();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'position' && this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        if (!e.namespace) {
          return;
        }

        var $element = $(e.content).find('.owl-video');

        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Video.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);

    this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
      this.play(e);
    }, this));
  };

  /**
   * Default options.
   * @public
   */
  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false
  };

  /**
   * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {jQuery} item - The item containing the video.
   */
  Video.prototype.fetch = function(target, item) {
    var type = (function() {
        if (target.attr('data-vimeo-id')) {
          return 'vimeo';
        } else if (target.attr('data-vzaar-id')) {
          return 'vzaar'
        } else {
          return 'youtube';
        }
      })(),
      id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
      width = target.attr('data-width') || this._core.settings.videoWidth,
      height = target.attr('data-height') || this._core.settings.videoHeight,
      url = target.attr('href');

    if (url) {

      /*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

      id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else if (id[3].indexOf('vzaar') > -1) {
        type = 'vzaar';
      } else {
        throw new Error('Video URL not supported.');
      }
      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }

    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height
    };

    item.attr('data-video', url);

    this.thumbnail(target, this._videos[url]);
  };

  /**
   * Creates video thumbnail.
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {Object} info - The video info object.
   * @see `fetch`
   */
  Video.prototype.thumbnail = function(target, video) {
    var tnLink,
      icon,
      path,
      dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
      customTn = target.find('img'),
      srcType = 'src',
      lazyClass = '',
      settings = this._core.settings,
      create = function(path) {
        icon = '<div class="owl-video-play-icon"></div>';

        if (settings.lazyLoad) {
          tnLink = $('<div/>',{
            "class": 'owl-video-tn ' + lazyClass,
            "srcType": path
          });
        } else {
          tnLink = $( '<div/>', {
            "class": "owl-video-tn",
            "style": 'opacity:1;background-image:url(' + path + ')'
          });
        }
        target.after(tnLink);
        target.after(icon);
      };

    // wrap video content into owl-video-wrapper div
    target.wrap( $( '<div/>', {
      "class": "owl-video-wrapper",
      "style": dimensions
    }));

    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    }

    // custom thumbnail
    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }

    if (video.type === 'youtube') {
      path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
               type: 'GET',
               url: '//vimeo.com/api/v2/video/' + video.id + '.json',
               jsonp: 'callback',
               dataType: 'jsonp',
               success: function(data) {
                 path = data[0].thumbnail_large;
                 create(path);
               }
             });
    } else if (video.type === 'vzaar') {
      $.ajax({
               type: 'GET',
               url: '//vzaar.com/api/videos/' + video.id + '.json',
               jsonp: 'callback',
               dataType: 'jsonp',
               success: function(data) {
                 path = data.framegrab_url;
                 create(path);
               }
             });
    }
  };

  /**
   * Stops the current video.
   * @public
   */
  Video.prototype.stop = function() {
    this._core.trigger('stop', null, 'video');
    this._playing.find('.owl-video-frame').remove();
    this._playing.removeClass('owl-video-playing');
    this._playing = null;
    this._core.leave('playing');
    this._core.trigger('stopped', null, 'video');
  };

  /**
   * Starts the current video.
   * @public
   * @param {Event} event - The event arguments.
   */
  Video.prototype.play = function(event) {
    var target = $(event.target),
      item = target.closest('.' + this._core.settings.itemClass),
      video = this._videos[item.attr('data-video')],
      width = video.width || '100%',
      height = video.height || this._core.$stage.height(),
      html,
      iframe;

    if (this._playing) {
      return;
    }

    this._core.enter('playing');
    this._core.trigger('play', null, 'video');

    item = this._core.items(this._core.relative(item.index()));

    this._core.reset(item.index());

    html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
    html.attr( 'height', height );
    html.attr( 'width', width );
    if (video.type === 'youtube') {
      html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
    } else if (video.type === 'vimeo') {
      html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
    } else if (video.type === 'vzaar') {
      html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
    }

    iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

    this._playing = item.addClass('owl-video-playing');
  };

  /**
   * Checks whether an video is currently in full screen mode or not.
   * @todo Bad style because looks like a readonly method but changes members.
   * @protected
   * @returns {Boolean}
   */
  Video.prototype.isInFullScreen = function() {
    var element = document.fullscreenElement || document.mozFullScreenElement ||
                  document.webkitFullscreenElement;

    return element && $(element).parent().hasClass('owl-video-frame');
  };

  /**
   * Destroys the plugin.
   */
  Video.prototype.destroy = function() {
    var handler, property;

    this._core.$element.off('click.owl.video');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the animate plugin.
   * @class The Navigation Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Animate = function(scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;

    this.handlers = {
      'change.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          this.swapping = e.type == 'translated';
        }
      }, this),
      'translate.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };

    this.core.$element.on(this.handlers);
  };

  /**
   * Default options.
   * @public
   */
  Animate.Defaults = {
    animateOut: false,
    animateIn: false
  };

  /**
   * Toggles the animation classes whenever an translations starts.
   * @protected
   * @returns {Boolean|undefined}
   */
  Animate.prototype.swap = function() {

    if (this.core.settings.items !== 1) {
      return;
    }

    if (!$.support.animation || !$.support.transition) {
      return;
    }

    this.core.speed(0);

    var left,
      clear = $.proxy(this.clear, this),
      previous = this.core.$stage.children().eq(this.previous),
      next = this.core.$stage.children().eq(this.next),
      incoming = this.core.settings.animateIn,
      outgoing = this.core.settings.animateOut;

    if (this.core.current() === this.previous) {
      return;
    }

    if (outgoing) {
      left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous.one($.support.animation.end, clear)
        .css( { 'left': left + 'px' } )
        .addClass('animated owl-animated-out')
        .addClass(outgoing);
    }

    if (incoming) {
      next.one($.support.animation.end, clear)
        .addClass('animated owl-animated-in')
        .addClass(incoming);
    }
  };

  Animate.prototype.clear = function(e) {
    $(e.target).css( { 'left': '' } )
      .removeClass('animated owl-animated-out owl-animated-in')
      .removeClass(this.core.settings.animateIn)
      .removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Animate.prototype.destroy = function() {
    var handler, property;

    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  /**
   * Creates the autoplay plugin.
   * @class The Autoplay Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Autoplay = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * The autoplay timeout id.
     * @type {Number}
     */
    this._call = null;

    /**
     * Depending on the state of the plugin, this variable contains either
     * the start time of the timer or the current timer value if it's
     * paused. Since we start in a paused state we initialize the timer
     * value.
     * @type {Number}
     */
    this._time = 0;

    /**
     * Stores the timeout currently used.
     * @type {Number}
     */
    this._timeout = 0;

    /**
     * Indicates whenever the autoplay is paused.
     * @type {Boolean}
     */
    this._paused = true;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'settings') {
          if (this._core.settings.autoplay) {
            this.play();
          } else {
            this.stop();
          }
        } else if (e.namespace && e.property.name === 'position' && this._paused) {
          // Reset the timer. This code is triggered when the position
          // of the carousel was changed through user interaction.
          this._time = 0;
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoplay) {
          this.play();
        }
      }, this),
      'play.owl.autoplay': $.proxy(function(e, t, s) {
        if (e.namespace) {
          this.play(t, s);
        }
      }, this),
      'stop.owl.autoplay': $.proxy(function(e) {
        if (e.namespace) {
          this.stop();
        }
      }, this),
      'mouseover.owl.autoplay': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.play();
        }
      }, this),
      'touchstart.owl.core': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'touchend.owl.core': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause) {
          this.play();
        }
      }, this)
    };

    // register event handlers
    this._core.$element.on(this._handlers);

    // set default options
    this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
  };

  /**
   * Default options.
   * @public
   */
  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false
  };

  /**
   * Transition to the next slide and set a timeout for the next transition.
   * @private
   * @param {Number} [speed] - The animation speed for the animations.
   */
  Autoplay.prototype._next = function(speed) {
    this._call = window.setTimeout(
      $.proxy(this._next, this, speed),
      this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
    );

    if (this._core.is('interacting') || document.hidden) {
      return;
    }
    this._core.next(speed || this._core.settings.autoplaySpeed);
  }

  /**
   * Reads the current timer value when the timer is playing.
   * @public
   */
  Autoplay.prototype.read = function() {
    return new Date().getTime() - this._time;
  };

  /**
   * Starts the autoplay.
   * @public
   * @param {Number} [timeout] - The interval before the next animation starts.
   * @param {Number} [speed] - The animation speed for the animations.
   */
  Autoplay.prototype.play = function(timeout, speed) {
    var elapsed;

    if (!this._core.is('rotating')) {
      this._core.enter('rotating');
    }

    timeout = timeout || this._core.settings.autoplayTimeout;

    // Calculate the elapsed time since the last transition. If the carousel
    // wasn't playing this calculation will yield zero.
    elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

    if (this._paused) {
      // Start the clock.
      this._time = this.read();
      this._paused = false;
    } else {
      // Clear the active timeout to allow replacement.
      window.clearTimeout(this._call);
    }

    // Adjust the origin of the timer to match the new timeout value.
    this._time += this.read() % timeout - elapsed;

    this._timeout = timeout;
    this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
  };

  /**
   * Stops the autoplay.
   * @public
   */
  Autoplay.prototype.stop = function() {
    if (this._core.is('rotating')) {
      // Reset the clock.
      this._time = 0;
      this._paused = true;

      window.clearTimeout(this._call);
      this._core.leave('rotating');
    }
  };

  /**
   * Pauses the autoplay.
   * @public
   */
  Autoplay.prototype.pause = function() {
    if (this._core.is('rotating') && !this._paused) {
      // Pause the clock.
      this._time = this.read();
      this._paused = true;

      window.clearTimeout(this._call);
    }
  };

  /**
   * Destroys the plugin.
   */
  Autoplay.prototype.destroy = function() {
    var handler, property;

    this.stop();

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
  'use strict';

  /**
   * Creates the navigation plugin.
   * @class The Navigation Plugin
   * @param {Owl} carousel - The Owl Carousel.
   */
  var Navigation = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Indicates whether the plugin is initialized or not.
     * @protected
     * @type {Boolean}
     */
    this._initialized = false;

    /**
     * The current paging indexes.
     * @protected
     * @type {Array}
     */
    this._pages = [];

    /**
     * All DOM elements of the user interface.
     * @protected
     * @type {Object}
     */
    this._controls = {};

    /**
     * Markup for an indicator.
     * @protected
     * @type {Array.<String>}
     */
    this._templates = [];

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * Overridden methods of the carousel.
     * @protected
     * @type {Object}
     */
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    };

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'prepared.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                               $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
        }
      }, this),
      'added.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, this._templates.pop());
        }
      }, this),
      'remove.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && !this._initialized) {
          this._core.trigger('initialize', null, 'navigation');
          this.initialize();
          this.update();
          this.draw();
          this._initialized = true;
          this._core.trigger('initialized', null, 'navigation');
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._initialized) {
          this._core.trigger('refresh', null, 'navigation');
          this.update();
          this.draw();
          this._core.trigger('refreshed', null, 'navigation');
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    // register event handlers
    this.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   * @todo Rename `slideBy` to `navBy`
   */
  Navigation.Defaults = {
    nav: false,
    navText: [
      '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
      '<span aria-label="' + 'Next' + '">&#x203a;</span>'
    ],
    navSpeed: false,
    navElement: 'button type="button" role="presentation"',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: [
      'owl-prev',
      'owl-next'
    ],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false
  };

  /**
   * Initializes the layout of the plugin and extends the carousel.
   * @protected
   */
  Navigation.prototype.initialize = function() {
    var override,
      settings = this._core.settings;

    // create DOM structure for relative navigation
    this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
      : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

    this._controls.$previous = $('<' + settings.navElement + '>')
      .addClass(settings.navClass[0])
      .html(settings.navText[0])
      .prependTo(this._controls.$relative)
      .on('click', $.proxy(function(e) {
        this.prev(settings.navSpeed);
      }, this));
    this._controls.$next = $('<' + settings.navElement + '>')
      .addClass(settings.navClass[1])
      .html(settings.navText[1])
      .appendTo(this._controls.$relative)
      .on('click', $.proxy(function(e) {
        this.next(settings.navSpeed);
      }, this));

    // create DOM structure for absolute navigation
    if (!settings.dotsData) {
      this._templates = [ $('<button role="button">')
                            .addClass(settings.dotClass)
                            .append($('<span>'))
                            .prop('outerHTML') ];
    }

    this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
      : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

    this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
      var index = $(e.target).parent().is(this._controls.$absolute)
        ? $(e.target).index() : $(e.target).parent().index();

      e.preventDefault();

      this.to(index, settings.dotsSpeed);
    }, this));

    /*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

    // override public methods of the carousel
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };

  /**
   * Destroys the plugin.
   * @protected
   */
  Navigation.prototype.destroy = function() {
    var handler, control, property, override, settings;
    settings = this._core.settings;

    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      if (control === '$relative' && settings.navContainer) {
        this._controls[control].html('');
      } else {
        this._controls[control].remove();
      }
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  /**
   * Updates the internal state.
   * @protected
   */
  Navigation.prototype.update = function() {
    var i, j, k,
      lower = this._core.clones().length / 2,
      upper = lower + this._core.items().length,
      maximum = this._core.maximum(true),
      settings = this._core.settings,
      size = settings.center || settings.autoWidth || settings.dotsData
        ? 1 : settings.dotsEach || settings.items;

    if (settings.slideBy !== 'page') {
      settings.slideBy = Math.min(settings.slideBy, settings.items);
    }

    if (settings.dots || settings.slideBy == 'page') {
      this._pages = [];

      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
                             start: Math.min(maximum, i - lower),
                             end: i - lower + size - 1
                           });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this._core.mergers(this._core.relative(i));
      }
    }
  };

  /**
   * Draws the user interface.
   * @todo The option `dotsData` wont work.
   * @protected
   */
  Navigation.prototype.draw = function() {
    var difference,
      settings = this._core.settings,
      disabled = this._core.items().length <= settings.items,
      index = this._core.relative(this._core.current()),
      loop = settings.loop || settings.rewind;

    this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    if (settings.nav) {
      this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
      this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    }

    this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

    if (settings.dots) {
      difference = this._pages.length - this._controls.$absolute.children().length;

      if (settings.dotsData && difference !== 0) {
        this._controls.$absolute.html(this._templates.join(''));
      } else if (difference > 0) {
        this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
      } else if (difference < 0) {
        this._controls.$absolute.children().slice(difference).remove();
      }

      this._controls.$absolute.find('.active').removeClass('active');
      this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    }
  };

  /**
   * Extends event data.
   * @protected
   * @param {Event} event - The event object which gets thrown.
   */
  Navigation.prototype.onTrigger = function(event) {
    var settings = this._core.settings;

    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: settings && (settings.center || settings.autoWidth || settings.dotsData
        ? 1 : settings.dotsEach || settings.items)
    };
  };

  /**
   * Gets the current page position of the carousel.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.current = function() {
    var current = this._core.relative(this._core.current());
    return $.grep(this._pages, $.proxy(function(page, index) {
      return page.start <= current && page.end >= current;
    }, this)).pop();
  };

  /**
   * Gets the current succesor/predecessor position.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.getPosition = function(successor) {
    var position, length,
      settings = this._core.settings;

    if (settings.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[((position % length) + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor ? position += settings.slideBy : position -= settings.slideBy;
    }

    return position;
  };

  /**
   * Slides to the next item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.next = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  };

  /**
   * Slides to the previous item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.prev = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };

  /**
   * Slides to the specified item or page.
   * @public
   * @param {Number} position - The position of the item or page.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
   */
  Navigation.prototype.to = function(position, speed, standard) {
    var length;

    if (!standard && this._pages.length) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
  'use strict';

  /**
   * Creates the hash plugin.
   * @class The Hash Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Hash = function(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Hash index for the items.
     * @protected
     * @type {Object}
     */
    this._hashes = {};

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.startPosition === 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

          if (!hash) {
            return;
          }

          this._hashes[hash] = e.content;
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'position') {
          var current = this._core.items(this._core.relative(this._core.current())),
            hash = $.map(this._hashes, function(item, hash) {
              return item === current ? hash : null;
            }).join();

          if (!hash || window.location.hash.slice(1) === hash) {
            return;
          }

          window.location.hash = hash;
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    // register the event handlers
    this.$element.on(this._handlers);

    // register event listener for hash navigation
    $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
      var hash = window.location.hash.substring(1),
        items = this._core.$stage.children(),
        position = this._hashes[hash] && items.index(this._hashes[hash]);

      if (position === undefined || position === this._core.current()) {
        return;
      }

      this._core.to(this._core.relative(position), false, true);
    }, this));
  };

  /**
   * Default options.
   * @public
   */
  Hash.Defaults = {
    URLhashListener: false
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Hash.prototype.destroy = function() {
    var handler, property;

    $(window).off('hashchange.owl.navigation');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

  var style = $('<support>').get(0).style,
    prefixes = 'Webkit Moz O ms'.split(' '),
    events = {
      transition: {
        end: {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd',
          transition: 'transitionend'
        }
      },
      animation: {
        end: {
          WebkitAnimation: 'webkitAnimationEnd',
          MozAnimation: 'animationend',
          OAnimation: 'oAnimationEnd',
          animation: 'animationend'
        }
      }
    },
    tests = {
      csstransforms: function() {
        return !!test('transform');
      },
      csstransforms3d: function() {
        return !!test('perspective');
      },
      csstransitions: function() {
        return !!test('transition');
      },
      cssanimations: function() {
        return !!test('animation');
      }
    };

  function test(property, prefixed) {
    var result = false,
      upper = property.charAt(0).toUpperCase() + property.slice(1);

    $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
      if (style[property] !== undefined) {
        result = prefixed ? property : true;
        return false;
      }
    });

    return result;
  }

  function prefixed(property) {
    return test(property, true);
  }

  if (tests.csstransitions()) {
    /* jshint -W053 */
    $.support.transition = new String(prefixed('transition'))
    $.support.transition.end = events.transition.end[ $.support.transition ];
  }

  if (tests.cssanimations()) {
    /* jshint -W053 */
    $.support.animation = new String(prefixed('animation'))
    $.support.animation.end = events.animation.end[ $.support.animation ];
  }

  if (tests.csstransforms()) {
    /* jshint -W053 */
    $.support.transform = new String(prefixed('transform'));
    $.support.transform3d = tests.csstransforms3d();
  }

})(window.Zepto || window.jQuery, window, document);

$(function () {
  // $(window).scroll(function () {
  //   $(".parallax-wrapper").css(
  //     "background-position",
  //     "50% " + $(this).scrollTop() / 5 + "px"
  //   );
  // });
});

$(function () {

  // Override _isLocal method from ui.tabs because it gets confused when used with baseUrl-Tag
  // We only use local anchors - no Ajax required at all!
  $.widget("ui.tabs", $.extend({}, $.ui.tabs.prototype, {
    _isLocal: function(){
      return true;
    }
  }));

  // Initialize fixedFooter
  $(".js-fixed-footer").fixedFooter();

  // Initialize footerSlideUp
  $(".js-slideup-footer").footerSlideUp();

  // Initalize contactSidebar
  $(".js-contact-toggle").contactSidebar();

  // Initalize modal
  $(".js-open-mdl").modal();

  // Initalize parallax
  $(".parallax").parallax();

  //Initalize accordion
  $(".accordion-control").accordionPlugin();

  //Initalize collapsed Text
  $(".collapsed-text").collapsedText();

  //Initialize mobile Navbar --> loaded via AJAX!
  $(".nav-mobile-hamburger").mobileNavbar({'useAjax': true});

  //Initialize dropdown Navbar
  $(".js-dropdown-item").dropdownNavbar();

  // Initialize tabs
  $(".js-tabs").tabs();

  //Initialize dropdownUrl
  $(".select-field--url").dropdownUrl();

  // Initialize lazy video
  $("video[autoplay]").lazyVideo();

  //Initialize AJAX-API
  if($.fn.ajaxApi) {
    if ($(".ajax").length > 0) {
      $(".ajax").ajaxApi();
    }
  }

  //Initialize webcheck
  if($.fn.rkwWebcheck) {
    if ($(".js-webcheck-tip").length > 0) {
      $(".js-webcheck-tip").rkwWebcheck();
    }
  }

  //Initialize quickcheck
  if($.fn.rkwQuickcheck) {
    if ($(".webcheck__slide-button").length > 0) {
      $(".webcheck__slide-button").rkwQuickcheck();
    }
  }

  //Smooth scrolling when clicking on an anchor link
  addSmoothScrolling();

  // scroll to first TYPO3-message (if there is one)
  addMessageScrolling();

  // Owl Carousel for Slideshows
  $(".slider:not(.round)").owlCarousel({
                                         loop: false,
                                         margin: 0,
                                         nav: false,
                                         dots: false,
                                         // dotsContainer: ".slider-indicators",
                                         nestedItemSelector: "slider-item",
                                         items: 1,
                                         smartSpeed: 1000,
                                         autoplay:true,
                                         autoplayHoverPause:true,
                                         navigation : true, // show next and previous buttons
                                         addClassActive : true, // visible items have class active
                                         onInitialized  : function(element) {

                                           var slider = $(element.target);
                                           var slides = slider.find('.owl-item');
                                           var activeSlide = slider.find('.owl-item.active');
                                           var inactiveSlides = slider.find('.owl-item:not(.active)');

                                           // add aria-selected to current element
                                           slides.attr('aria-selected','false');
                                           activeSlide.attr('aria-selected','true');

                                           // init custom pagination. If clicked, we stop the autoplay
                                           $('.slider-nav__button--prev').on('click', function() {
                                             slider.trigger('stop.owl.autoplay');
                                             slider.trigger('prev.owl.carousel');
                                           })
                                           $('.slider-nav__button--next').on('click', function() {
                                             slider.trigger('stop.owl.autoplay');
                                             slider.trigger('next.owl.carousel');
                                           })

                                           // to prevent jumping, hide all links/buttons on inactive slides
                                           inactiveSlides.find('a, button').hide();

                                           // keyboard input for slider
                                           $(document).on('keydown', function(e){
                                             switch (e.key) {
                                               case 'ArrowLeft':
                                                 e.preventDefault();
                                                 slider.trigger('stop.owl.autoplay');
                                                 slider.trigger('prev.owl.carousel');
                                                 break;
                                               case 'ArrowRight':
                                                 e.preventDefault();
                                                 slider.trigger('stop.owl.autoplay');
                                                 slider.trigger('next.owl.carousel');
                                                 break;
                                             }
                                           });
                                         },

                                         onDragged : function(e) {

                                           var slider = $(e.target);
                                           slider.trigger('stop.owl.autoplay');

                                         },

                                         onChanged : function(e) {

                                           // use a short timeout involved (otherwise we are always one auto-slide behind)
                                           setTimeout(function(slider) {
                                             var slides = slider.find('.owl-item');
                                             var activeSlide = slider.find('.owl-item.active');
                                             var inactiveSlides = slider.find('.owl-item:not(.active)');

                                             // add aria-selected to current element
                                             slides.attr('aria-selected','false');
                                             activeSlide.attr('aria-selected','true');

                                             // to prevent jumping, hide all links/buttons on inactive slides and active links/buttons on active slide
                                             activeSlide.find('a, button').show();
                                             inactiveSlides.find('a, button').hide();

                                           }, 100, $(e.target));
                                         }
                                       });

  $(".boxslider").each(function(){
    var number = $(this).data('carousel-number');
    $(this).owlCarousel({
                          loop: true,
                          margin: 0,
                          nav: true,
                          dots: false,
                          navContainer: '#boxslider-nav-'+number,
                          nestedItemSelector: "boxslider-item",
                          smartSpeed: 1000,
                          autoplay:true,
                          autoplayHoverPause:true,
                          responsive:{
                            0: {
                              items:1
                            },
                            481:{
                              items:2
                            },
                            769:{
                              items:3
                            },
                            1025: {
                              items:4
                            }
                          }
                        });
  });

  // gallery
  $(".slider-mod").sliderPlugin();

  // disable buttons after submit
  $("form:not(.no-disable-submit)").on('submit', function(e) {
    $(this).find(".btn:not(.ajax)").prop('disabled',true).addClass('is-disabled');
  });

  // disable buttons for ajax
  jQuery(document).on('tx-ajax-api-content-changed', function(event, element) {
    $(element).find("form:not(.no-disable-submit)").on('submit', function(e) {
      $(this).find(".btn:not(.ajax)").prop('disabled',true).addClass('is-disabled');
    });
  });

  //Initialize responsive table
  try {
    $(".responsive-table").has('th').basictable({
                                                  breakpoint: 768,
                                                });
  } catch (e) {
    console.log(e.message)
  }

  if ($(".tpl-embed")) {

    var iframeElement = $(".tpl-embed iframe");

    if (iframeElement) {
      var newHeight = iframeElement.outerHeight() - $('.microsite-bar').outerHeight();
      iframeElement.height(newHeight + 'px');
    }
  }

});



