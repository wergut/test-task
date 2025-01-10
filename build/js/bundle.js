/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

const cellsFormat = document.querySelectorAll('.cell');
cellsFormat.forEach(cell => {
  const text = cell.childNodes[0]?.nodeValue?.trim();
  const value = parseInt(text?.replace(/\s/g, ''), 10);
  if (!isNaN(value)) {
    const formattedValue = formatNumber(value);
    cell.childNodes[0].nodeValue = formattedValue;
  }
});
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
const cells = document.querySelectorAll('.table-item .cell');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const row = cell.closest('.table-row');
    const chartRow = row.nextElementSibling;
    const allChartRows = document.querySelectorAll('.chart-row');
    allChartRows.forEach(chart => {
      chart.classList.add('hidden');
    });
    if (chartRow.classList.contains('hidden')) {
      chartRow.classList.remove('hidden');
    }
  });
});
const chartsData = [[0, 500521, 480521, 4805121], [0, 300000, 300000, 300000], [0, 100000, 100000, 100000], [0, 100521, 100521, 100521], [0, 1300, 900, 900]];
function drawChart(chartId, data) {
  const ctx = document.querySelector(`[data-id="${chartId}"]`).getContext('2d');
  Chart.defaults.borderColor = '#ccc';
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, index) => index + 1),
      datasets: [{
        label: '.',
        data: data,
        borderColor: '#037d50',
        backgroundColor: 'rgba(76, 175, 80, 0)',
        fill: false,
        pointBackgroundColor: '#037d50',
        pointRadius: 5,
        pointHoverRadius: 5,
        tension: 0,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          display: true,
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 5,
          backgroundColor: '#4CAF50'
        }
      },
      animation: {
        duration: 0
      }
    }
  });
}
chartsData.forEach((data, index) => {
  const chartId = `chart${index + 1}`;
  drawChart(chartId, data);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25DYixTQUFTLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxDQUFDO0FBQzFCLENBQUMsQ0FBQzs7Ozs7O1VDN0dGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2VsbHNGb3JtYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG5cclxuY2VsbHNGb3JtYXQuZm9yRWFjaChjZWxsID0+IHtcclxuICBjb25zdCB0ZXh0ID0gY2VsbC5jaGlsZE5vZGVzWzBdPy5ub2RlVmFsdWU/LnRyaW0oKTtcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRleHQ/LnJlcGxhY2UoL1xccy9nLCAnJyksIDEwKTtcclxuXHJcbiAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0TnVtYmVyKHZhbHVlKTtcclxuICAgIGNlbGwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xyXG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xyXG59XHJcblxyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZS1pdGVtIC5jZWxsJyk7XHJcblxyXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IGNlbGwuY2xvc2VzdCgnLnRhYmxlLXJvdycpO1xyXG4gICAgY29uc3QgY2hhcnRSb3cgPSByb3cubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIGNvbnN0IGFsbENoYXJ0Um93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC1yb3cnKTtcclxuICAgIGFsbENoYXJ0Um93cy5mb3JFYWNoKChjaGFydCkgPT4ge1xyXG4gICAgICBjaGFydC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGFydFJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgIGNoYXJ0Um93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNoYXJ0c0RhdGEgPSBbXHJcbiAgWzAsIDUwMDUyMSwgNDgwNTIxLCA0ODA1MTIxXSxcclxuICBbMCwgMzAwMDAwLCAzMDAwMDAsIDMwMDAwMF0sXHJcbiAgWzAsIDEwMDAwMCwgMTAwMDAwLCAxMDAwMDBdLFxyXG4gIFswLCAxMDA1MjEsIDEwMDUyMSwgMTAwNTIxXSxcclxuICBbMCwgMTMwMCwgOTAwLCA5MDBdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2hhcnQoY2hhcnRJZCwgZGF0YSkge1xyXG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtjaGFydElkfVwiXWApLmdldENvbnRleHQoJzJkJyk7XHJcbiAgQ2hhcnQuZGVmYXVsdHMuYm9yZGVyQ29sb3IgPSAnI2NjYyc7XHJcblxyXG4gIG5ldyBDaGFydChjdHgsIHtcclxuICAgIHR5cGU6ICdsaW5lJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWxzOiBkYXRhLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSksXHJcbiAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgIGxhYmVsOiAnLicsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMwMzdkNTAnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzYsIDE3NSwgODAsIDApJyxcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyMwMzdkNTAnLFxyXG4gICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgdGVuc2lvbjogMCxcclxuICAgICAgICBib3JkZXJXaWR0aDogMlxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeDoge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICB0ZW5zaW9uOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9pbnQ6IHtcclxuICAgICAgICAgIHJhZGl1czogNSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jaGFydHNEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY2hhcnRJZCA9IGBjaGFydCR7aW5kZXggKyAxfWA7XHJcbiAgZHJhd0NoYXJ0KGNoYXJ0SWQsIGRhdGEpO1xyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImNlbGxzRm9ybWF0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNlbGwiLCJ0ZXh0IiwiY2hpbGROb2RlcyIsIm5vZGVWYWx1ZSIsInRyaW0iLCJ2YWx1ZSIsInBhcnNlSW50IiwicmVwbGFjZSIsImlzTmFOIiwiZm9ybWF0dGVkVmFsdWUiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJ0b1N0cmluZyIsImNlbGxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdyIsImNsb3Nlc3QiLCJjaGFydFJvdyIsIm5leHRFbGVtZW50U2libGluZyIsImFsbENoYXJ0Um93cyIsImNoYXJ0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJjaGFydHNEYXRhIiwiZHJhd0NoYXJ0IiwiY2hhcnRJZCIsImRhdGEiLCJjdHgiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsIkNoYXJ0IiwiZGVmYXVsdHMiLCJib3JkZXJDb2xvciIsInR5cGUiLCJsYWJlbHMiLCJtYXAiLCJfIiwiaW5kZXgiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyUmFkaXVzIiwidGVuc2lvbiIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ4IiwiZGlzcGxheSIsImdyaWQiLCJ0aWNrcyIsInkiLCJwbHVnaW5zIiwibGVnZW5kIiwiZWxlbWVudHMiLCJsaW5lIiwicG9pbnQiLCJyYWRpdXMiLCJhbmltYXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=