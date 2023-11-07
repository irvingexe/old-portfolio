import React from 'react';
import { useEffect } from 'react';

export const ScrollOutJS = () => {
  var ScrollOut = (function () {
    'use strict';

    function clamp(v, min, max) {
      return min > v ? min : max < v ? max : v;
    }
    function sign(x) {
      return +(x > 0) - +(x < 0);
    }
    function round(n) {
      return Math.round(n * 10000) / 10000;
    }

    var cache = {};
    function hyphenate(value) {
      return (
        cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer))
      );
    }
    function replacer(match) {
      return '-' + match[0].toLowerCase();
    }

    var win = window;
    var root = document.documentElement;
    /** find elements */
    function $(e, parent) {
      return !e || e.length === 0
        ? // null or empty string returns empty array
          []
        : e.nodeName
        ? // a single element is wrapped in an array
          [e]
        : // selector and NodeList are converted to Element[]
          [].slice.call(
            e[0].nodeName ? e : (parent || root).querySelectorAll(e)
          );
    }
    var setAttrs = function (el, attrs) {
      // tslint:disable-next-line:forin
      for (var key in attrs) {
        el.setAttribute('data-' + hyphenate(key), attrs[key]);
      }
    };
    var setProps = function (cssProps) {
      return function (el, props) {
        for (var key in props) {
          if (cssProps === true || cssProps[key]) {
            el.style.setProperty('--' + hyphenate(key), round(props[key]));
          }
        }
      };
    };

    var clearTask;
    var subscribers = [];
    function subscribe(fn) {
      subscribers.push(fn);
      if (!clearTask) {
        loop();
      }
      return function () {
        subscribers = subscribers.filter(function (s) {
          return s !== fn;
        });
        if (!subscribers.length && clearTask) {
          clearTask = 0;
          cancelAnimationFrame(clearTask);
        }
      };
    }
    function loop() {
      // process subscribers
      var s = subscribers.slice();
      s.forEach(function (s2) {
        return s2();
      });
      // schedule next loop if the queue needs it
      clearTask = subscribers.length ? requestAnimationFrame(loop) : 0;
    }

    function noop() {}

    var SCROLL = 'scroll';
    var RESIZE = 'resize';
    var ON = 'addEventListener';
    var OFF = 'removeEventListener';
    /**
     * Creates a new instance of ScrollOut that marks elements in the viewport with
     * an "in" class and marks elements outside of the viewport with an "out"
     */
    // tslint:disable-next-line:no-default-export
    function main(opts) {
      // Apply default options.
      opts = opts || {};
      // Debounce onChange/onHidden/onShown.
      var onChange = opts.onChange || noop;
      var onHidden = opts.onHidden || noop;
      var onShown = opts.onShown || noop;
      var onScroll = opts.onScroll || noop;
      var props = opts.cssProps ? setProps(opts.cssProps) : noop;
      var se = opts.scrollingElement;
      var container = se ? $(se)[0] : win;
      var doc = se ? $(se)[0] : root;
      var rootChanged = false;
      var scrollingElementContext = {};
      var elementContextList;
      var sub;
      var clientOffsetX, clientOffsety;
      function index() {
        elementContextList = $(
          opts.targets || '[data-scroll]',
          $(opts.scope || doc)[0]
        ).map(function (el) {
          return { element: el };
        });
      }
      function update() {
        // Calculate position, direction and ratio.
        var clientWidth = doc.clientWidth;
        var clientHeight = doc.clientHeight;
        var scrollDirX = sign(
          -clientOffsetX + (clientOffsetX = doc.scrollLeft || win.pageXOffset)
        );
        var scrollDirY = sign(
          -clientOffsety + (clientOffsety = doc.scrollTop || win.pageYOffset)
        );
        var scrollPercentX =
          doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
        var scrollPercentY =
          doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
        // Detect if the root context has changed.
        rootChanged =
          rootChanged ||
          scrollingElementContext.scrollDirX !== scrollDirX ||
          scrollingElementContext.scrollDirY !== scrollDirY ||
          scrollingElementContext.scrollPercentX !== scrollPercentX ||
          scrollingElementContext.scrollPercentY !== scrollPercentY;
        scrollingElementContext.scrollDirX = scrollDirX;
        scrollingElementContext.scrollDirY = scrollDirY;
        scrollingElementContext.scrollPercentX = scrollPercentX;
        scrollingElementContext.scrollPercentY = scrollPercentY;
        var hasChildChanged;
        for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
          var ctx = elementContextList[index_1];
          var element = ctx.element;
          // find the distance from the element to the scrolling container
          var target = element;
          var offsetX = 0;
          var offsetY = 0;
          do {
            offsetX += target.offsetLeft;
            offsetY += target.offsetTop;
            target = target.offsetParent;
          } while (target && target !== container);
          // Get element dimensions.
          var elementHeight = element.clientHeight || element.offsetHeight || 0;
          var elementWidth = element.clientWidth || element.offsetWidth || 0;
          // Find visible ratios for each element.
          var visibleX =
            (clamp(
              offsetX + elementWidth,
              clientOffsetX,
              clientOffsetX + clientWidth
            ) -
              clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
            elementWidth;
          var visibleY =
            (clamp(
              offsetY + elementHeight,
              clientOffsety,
              clientOffsety + clientHeight
            ) -
              clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
            elementHeight;
          var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
          var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
          var viewportX = clamp(
            (clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) /
              (clientWidth / 2),
            -1,
            1
          );
          var viewportY = clamp(
            (clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) /
              (clientHeight / 2),
            -1,
            1
          );
          var visible = +(opts.offset
            ? opts.offset <= clientOffsety
            : (opts.threshold || 0) < visibleX * visibleY);
          var changedVisible = ctx.visible !== visible;
          var changed =
            changedVisible ||
            ctx._changed ||
            ctx.visible !== visible ||
            ctx.visibleX !== visibleX ||
            ctx.visibleY !== visibleY ||
            ctx.index !== index_1 ||
            ctx.elementHeight !== elementHeight ||
            ctx.elementWidth !== elementWidth ||
            ctx.offsetX !== offsetX ||
            ctx.offsetY !== offsetY ||
            ctx.intersectX !== ctx.intersectX ||
            ctx.intersectY !== ctx.intersectY ||
            ctx.viewportX !== viewportX ||
            ctx.viewportY !== viewportY;
          if (changed) {
            hasChildChanged = true;
            ctx._changed = true;
            ctx._visibleChanged = changedVisible;
            ctx.visible = visible;
            ctx.elementHeight = elementHeight;
            ctx.elementWidth = elementWidth;
            ctx.index = index_1;
            ctx.offsetX = offsetX;
            ctx.visibleX = visibleX;
            ctx.visibleY = visibleY;
            ctx.intersectX = intersectX;
            ctx.intersectY = intersectY;
            ctx.viewportX = viewportX;
            ctx.viewportY = viewportY;
            ctx.visible = visible;
          }
        }
        if ((!sub && hasChildChanged) || scrollingElementContext.__changed__) {
          sub = subscribe(render);
        }
      }
      function render() {
        if (!elementContextList) {
          return;
        }
        // Update root attributes if they have changed.
        if (rootChanged) {
          rootChanged = false;
          setAttrs(doc, {
            scrollDirX: scrollingElementContext.scrollDirX,
            scrollDirY: scrollingElementContext.scrollDirY,
          });
          props(doc, scrollingElementContext);
          onScroll(doc, scrollingElementContext, elementContextList);
        }
        var len = elementContextList.length;
        for (var x = len - 1; x > -1; x--) {
          var ctx = elementContextList[x];
          var el = ctx.element;
          var visible = ctx.visible;
          if (ctx._changed) {
            ctx._changed = false;
            props(el, ctx);
          }
          if (ctx._visibleChanged) {
            //irving change
            let navClick = false;
            document.querySelectorAll('.link').forEach((e) => {
              if (e.classList.contains('clicked')) {
                navClick = true;
                if (e === document.querySelector('.' + el.dataset.section)) {
                  document
                    .querySelector('.clicked')
                    .classList.remove('clicked');
                }
              }
            });

            if (visible) {
              if (!navClick) {
                for (let i in document.querySelectorAll('.link')) {
                  try {
                    document
                      .querySelectorAll('.link')
                      [i].classList.remove('active');
                  } catch (error) {}
                }
                try {
                  if (document.querySelector('.modal').style.top !== '0px') {
                    document
                      .querySelector('.' + el.dataset.section)
                      .classList.add('active');
                  }
                } catch (error) {}
              } else {
                navClick = false;
              }
            }
            /*
                
                */
            //irving change
            setAttrs(el, { scroll: visible ? 'in' : 'out' });
            onChange(el, ctx, doc);
            (visible ? onShown : onHidden)(el, ctx, doc);
          }
          // if this is shown multiple times, keep it in the list
          if (visible && opts.once) {
            elementContextList.splice(x, 1);
          }
        }
        maybeUnsubscribe();
      }
      function maybeUnsubscribe() {
        if (sub) {
          sub();
          sub = undefined;
        }
      }
      // Run initialize index.
      index();
      update();
      // Hook up document listeners to automatically detect changes.
      win[ON](RESIZE, update);
      container[ON](SCROLL, update);
      return {
        index: index,
        update: update,
        teardown: function () {
          maybeUnsubscribe();
          win[OFF](RESIZE, update);
          container[OFF](SCROLL, update);
        },
      };
    }

    return main;
  })();

  useEffect(() => {
    setTimeout(() => {
      ScrollOut({ targets: '.scrollOut', threshold: 0.5 });
    }, 1000);
  }, [ScrollOut]);

  return null;
};