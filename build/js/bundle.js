/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

const сellsFormat = document.querySelectorAll('.cell');
сellsFormat.forEach(cell => {
  // Ищем только числовую часть текста внутри элемента
  const text = cell.childNodes[0]?.nodeValue?.trim(); // Основной текстовый узел
  const value = parseInt(text?.replace(/\s/g, ''), 10);

  // Проверяем, является ли значение числом
  if (!isNaN(value)) {
    // Форматируем только числовую часть
    const formattedValue = formatNumber(value);
    cell.childNodes[0].nodeValue = formattedValue; // Обновляем только текстовый узел
  }
});

// Функция для форматирования числа с пробелами между тысячами
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
const cells = document.querySelectorAll('.table-item .cell');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const row = cell.closest('.table-row');
    const chartRow = row.nextElementSibling;

    // Закрываем все графики, добавляя класс hidden
    const allChartRows = document.querySelectorAll('.chart-row');
    allChartRows.forEach(chart => {
      chart.classList.add('hidden');
    });

    // Убираем класс hidden для текущего графика, если он был скрыт
    if (chartRow.classList.contains('hidden')) {
      chartRow.classList.remove('hidden');
    }
  });
});

// Данные для графиков (можно добавить больше данных по аналогии)
const chartsData = [[0, 500521, 480521, 4805121], [0, 300000, 300000, 300000], [0, 100000, 100000, 100000], [0, 100521, 100521, 100521], [0, 1300, 900, 900]];

// Функция для рисования графика
function drawChart(chartId, data) {
  const ctx = document.querySelector(`[data-id="${chartId}"]`).getContext('2d');
  Chart.defaults.borderColor = '#ccc';
  new Chart(ctx, {
    type: 'line',
    // Тип графика: линия
    data: {
      labels: data.map((_, index) => index + 1),
      // Лейблы для оси X (просто номера точек)
      datasets: [{
        label: '.',
        // Легенда
        data: data,
        // Данные
        borderColor: '#4CAF50',
        // Цвет линии
        backgroundColor: 'rgba(76, 175, 80, 0)',
        // Без заливки
        fill: false,
        // Без заливки под графиком
        pointBackgroundColor: '#4CAF50',
        // Цвет точек
        pointRadius: 5,
        // Размер точек
        pointHoverRadius: 7,
        // Размер точек при наведении
        tension: 0,
        // Без кривых линий
        borderWidth: 2 // Ширина линии
      }]
    },

    options: {
      responsive: true,
      // Адаптивность
      scales: {
        x: {
          display: true,
          // Отображаем ось X
          grid: {
            display: false // Отключаем сетку на оси X
          },

          ticks: {
            display: false // Отключаем числа на оси X
          },

          // Настройка линии оси X
          borderColor: '#FF0000',
          // Цвет линии оси X
          borderWidth: 2 // Ширина линии оси X
        },

        y: {
          display: true,
          // Отображаем ось Y
          grid: {
            display: false // Отключаем сетку на оси Y
          },

          ticks: {
            display: false // Отключаем числа на оси Y
          },

          // Настройка линии оси Y
          borderColor: '#0000FF',
          // Цвет линии оси Y
          borderWidth: 2 // Ширина линии оси Y
        }
      },

      plugins: {
        legend: {
          display: false // Отключаем легенду
        },

        tooltip: {
          enabled: false // Отключаем подсказки при наведении
        }
      },

      elements: {
        line: {
          tension: 0 // Без кривых
        },

        point: {
          radius: 5,
          // Размер точек
          backgroundColor: '#4CAF50' // Цвет точек
        }
      },

      animation: {
        duration: 0 // Отключение анимации
      }
    }
  });
}

// Генерация графиков для каждого элемента
chartsData.forEach((data, index) => {
  const chartId = `chart${index + 1}`; // Идентификатор для канваса
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDTkwsT0FBTyxFQUFFLEtBQUssQ0FBRTtRQUNsQixDQUFDOztRQUNETSxPQUFPLEVBQUU7VUFDUEMsT0FBTyxFQUFFLEtBQUssQ0FBRTtRQUNsQjtNQUNGLENBQUM7O01BQ0RDLFFBQVEsRUFBRTtRQUNSQyxJQUFJLEVBQUU7VUFDSmYsT0FBTyxFQUFFLENBQUMsQ0FBRTtRQUNkLENBQUM7O1FBQ0RnQixLQUFLLEVBQUU7VUFDTEMsTUFBTSxFQUFFLENBQUM7VUFBRTtVQUNYdEIsZUFBZSxFQUFFLFNBQVMsQ0FBRTtRQUM5QjtNQUNGLENBQUM7O01BQ0R1QixTQUFTLEVBQUU7UUFDVEMsUUFBUSxFQUFFLENBQUMsQ0FBQztNQUNkO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNBekMsVUFBVSxDQUFDMUIsT0FBTyxDQUFDLENBQUM2QixJQUFJLEVBQUVXLEtBQUssS0FBSztFQUNsQyxNQUFNWixPQUFPLEdBQUksUUFBT1ksS0FBSyxHQUFHLENBQUUsRUFBQyxDQUFDLENBQUM7RUFDckNiLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLENBQUM7QUFDMUIsQ0FBQyxDQUFDOzs7Ozs7VUNoSUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCDRgWVsbHNGb3JtYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG5cclxu0YFlbGxzRm9ybWF0LmZvckVhY2goY2VsbCA9PiB7XHJcbiAgLy8g0JjRidC10Lwg0YLQvtC70YzQutC+INGH0LjRgdC70L7QstGD0Y4g0YfQsNGB0YLRjCDRgtC10LrRgdGC0LAg0LLQvdGD0YLRgNC4INGN0LvQtdC80LXQvdGC0LBcclxuICBjb25zdCB0ZXh0ID0gY2VsbC5jaGlsZE5vZGVzWzBdPy5ub2RlVmFsdWU/LnRyaW0oKTsgLy8g0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGC0L7QstGL0Lkg0YPQt9C10LtcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHRleHQ/LnJlcGxhY2UoL1xccy9nLCAnJyksIDEwKTtcclxuXHJcbiAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0LfQvdCw0YfQtdC90LjQtSDRh9C40YHQu9C+0LxcclxuICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgLy8g0KTQvtGA0LzQsNGC0LjRgNGD0LXQvCDRgtC+0LvRjNC60L4g0YfQuNGB0LvQvtCy0YPRjiDRh9Cw0YHRgtGMXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdE51bWJlcih2YWx1ZSk7XHJcbiAgICBjZWxsLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gZm9ybWF0dGVkVmFsdWU7IC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgtC+0LvRjNC60L4g0YLQtdC60YHRgtC+0LLRi9C5INGD0LfQtdC7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNGPINGH0LjRgdC70LAg0YEg0L/RgNC+0LHQtdC70LDQvNC4INC80LXQttC00YMg0YLRi9GB0Y/Rh9Cw0LzQuFxyXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtKSB7XHJcbiAgcmV0dXJuIG51bS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcgJyk7XHJcbn1cclxuXHJcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWl0ZW0gLmNlbGwnKTtcclxuXHJcbmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gY2VsbC5jbG9zZXN0KCcudGFibGUtcm93Jyk7XHJcbiAgICBjb25zdCBjaGFydFJvdyA9IHJvdy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDQs9GA0LDRhNC40LrQuCwg0LTQvtCx0LDQstC70Y/RjyDQutC70LDRgdGBIGhpZGRlblxyXG4gICAgY29uc3QgYWxsQ2hhcnRSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJ0LXJvdycpO1xyXG4gICAgYWxsQ2hhcnRSb3dzLmZvckVhY2goKGNoYXJ0KSA9PiB7XHJcbiAgICAgIGNoYXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KPQsdC40YDQsNC10Lwg0LrQu9Cw0YHRgSBoaWRkZW4g0LTQu9GPINGC0LXQutGD0YnQtdCz0L4g0LPRgNCw0YTQuNC60LAsINC10YHQu9C4INC+0L0g0LHRi9C7INGB0LrRgNGL0YJcclxuICAgIGlmIChjaGFydFJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgIGNoYXJ0Um93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyDQlNCw0L3QvdGL0LUg0LTQu9GPINCz0YDQsNGE0LjQutC+0LIgKNC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQsdC+0LvRjNGI0LUg0LTQsNC90L3Ri9GFINC/0L4g0LDQvdCw0LvQvtCz0LjQuClcclxuY29uc3QgY2hhcnRzRGF0YSA9IFtcclxuICBbMCwgNTAwNTIxLCA0ODA1MjEsIDQ4MDUxMjFdLFxyXG4gIFswLCAzMDAwMDAsIDMwMDAwMCwgMzAwMDAwXSxcclxuICBbMCwgMTAwMDAwLCAxMDAwMDAsIDEwMDAwMF0sXHJcbiAgWzAsIDEwMDUyMSwgMTAwNTIxLCAxMDA1MjFdLFxyXG4gIFswLCAxMzAwLCA5MDAsIDkwMF1cclxuXTtcclxuXHJcbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgNC40YHQvtCy0LDQvdC40Y8g0LPRgNCw0YTQuNC60LBcclxuZnVuY3Rpb24gZHJhd0NoYXJ0KGNoYXJ0SWQsIGRhdGEpIHtcclxuICBjb25zdCBjdHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7Y2hhcnRJZH1cIl1gKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIENoYXJ0LmRlZmF1bHRzLmJvcmRlckNvbG9yID0gJyNjY2MnO1xyXG5cclxuICBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICB0eXBlOiAnbGluZScsIC8vINCi0LjQvyDQs9GA0LDRhNC40LrQsDog0LvQuNC90LjRj1xyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbHM6IGRhdGEubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKSwgLy8g0JvQtdC50LHQu9GLINC00LvRjyDQvtGB0LggWCAo0L/RgNC+0YHRgtC+INC90L7QvNC10YDQsCDRgtC+0YfQtdC6KVxyXG4gICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogJy4nLCAvLyDQm9C10LPQtdC90LTQsFxyXG4gICAgICAgIGRhdGE6IGRhdGEsIC8vINCU0LDQvdC90YvQtVxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzRDQUY1MCcsIC8vINCm0LLQtdGCINC70LjQvdC40LhcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc2LCAxNzUsIDgwLCAwKScsIC8vINCR0LXQtyDQt9Cw0LvQuNCy0LrQuFxyXG4gICAgICAgIGZpbGw6IGZhbHNlLCAvLyDQkdC10Lcg0LfQsNC70LjQstC60Lgg0L/QvtC0INCz0YDQsNGE0LjQutC+0LxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLCAvLyDQptCy0LXRgiDRgtC+0YfQtdC6XHJcbiAgICAgICAgcG9pbnRSYWRpdXM6IDUsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6XHJcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNywgLy8g0KDQsNC30LzQtdGAINGC0L7Rh9C10Log0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxyXG4gICAgICAgIHRlbnNpb246IDAsIC8vINCR0LXQtyDQutGA0LjQstGL0YUg0LvQuNC90LjQuVxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAyIC8vINCo0LjRgNC40L3QsCDQu9C40L3QuNC4XHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLCAvLyDQkNC00LDQv9GC0LjQstC90L7RgdGC0YxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeDoge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8g0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L7RgdGMIFhcclxuICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRgdC10YLQutGDINC90LAg0L7RgdC4IFhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INGH0LjRgdC70LAg0L3QsCDQvtGB0LggWFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vINCd0LDRgdGC0YDQvtC50LrQsCDQu9C40L3QuNC4INC+0YHQuCBYXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyNGRjAwMDAnLCAvLyDQptCy0LXRgiDQu9C40L3QuNC4INC+0YHQuCBYXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMiwgLy8g0KjQuNGA0LjQvdCwINC70LjQvdC40Lgg0L7RgdC4IFhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHk6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsIC8vINCe0YLQvtCx0YDQsNC20LDQtdC8INC+0YHRjCBZXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YHQtdGC0LrRgyDQvdCwINC+0YHQuCBZXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRh9C40YHQu9CwINC90LAg0L7RgdC4IFlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDQndCw0YHRgtGA0L7QudC60LAg0LvQuNC90LjQuCDQvtGB0LggWVxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDAwMEZGJywgLy8g0KbQstC10YIg0LvQuNC90LjQuCDQvtGB0LggWVxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsIC8vINCo0LjRgNC40L3QsCDQu9C40L3QuNC4INC+0YHQuCBZXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INC70LXQs9C10L3QtNGDXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INC/0L7QtNGB0LrQsNC30LrQuCDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlbGVtZW50czoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgIHRlbnNpb246IDAsIC8vINCR0LXQtyDQutGA0LjQstGL0YVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICByYWRpdXM6IDUsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgLy8g0KbQstC10YIg0YLQvtGH0LXQulxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDAgLy8g0J7RgtC60LvRjtGH0LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vINCT0LXQvdC10YDQsNGG0LjRjyDQs9GA0LDRhNC40LrQvtCyINC00LvRjyDQutCw0LbQtNC+0LPQviDRjdC70LXQvNC10L3RgtCwXHJcbmNoYXJ0c0RhdGEuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICBjb25zdCBjaGFydElkID0gYGNoYXJ0JHtpbmRleCArIDF9YDsgLy8g0JjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LTQu9GPINC60LDQvdCy0LDRgdCwXHJcbiAgZHJhd0NoYXJ0KGNoYXJ0SWQsIGRhdGEpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyLRgWVsbHNGb3JtYXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2VsbCIsInRleHQiLCJjaGlsZE5vZGVzIiwibm9kZVZhbHVlIiwidHJpbSIsInZhbHVlIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwiaXNOYU4iLCJmb3JtYXR0ZWRWYWx1ZSIsImZvcm1hdE51bWJlciIsIm51bSIsInRvU3RyaW5nIiwiY2VsbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicm93IiwiY2xvc2VzdCIsImNoYXJ0Um93IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWxsQ2hhcnRSb3dzIiwiY2hhcnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsImNoYXJ0c0RhdGEiLCJkcmF3Q2hhcnQiLCJjaGFydElkIiwiZGF0YSIsImN0eCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJkZWZhdWx0cyIsImJvcmRlckNvbG9yIiwidHlwZSIsImxhYmVscyIsIm1hcCIsIl8iLCJpbmRleCIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvaW50SG92ZXJSYWRpdXMiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJkaXNwbGF5IiwiZ3JpZCIsInRpY2tzIiwieSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0b29sdGlwIiwiZW5hYmxlZCIsImVsZW1lbnRzIiwibGluZSIsInBvaW50IiwicmFkaXVzIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9