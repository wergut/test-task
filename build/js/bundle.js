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
  const ctx = document.getElementById(chartId).getContext('2d');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsS0FBSyxDQUFFO1FBQ2xCLENBQUM7O1FBQ0RNLE9BQU8sRUFBRTtVQUNQQyxPQUFPLEVBQUUsS0FBSyxDQUFFO1FBQ2xCO01BQ0YsQ0FBQzs7TUFDREMsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRTtVQUNKZixPQUFPLEVBQUUsQ0FBQyxDQUFFO1FBQ2QsQ0FBQzs7UUFDRGdCLEtBQUssRUFBRTtVQUNMQyxNQUFNLEVBQUUsQ0FBQztVQUFFO1VBQ1h0QixlQUFlLEVBQUUsU0FBUyxDQUFFO1FBQzlCO01BQ0Y7SUFDRjtFQUNGLENBQUMsQ0FBQztBQUNKOztBQUlBO0FBQ0FqQixVQUFVLENBQUMxQixPQUFPLENBQUMsQ0FBQzZCLElBQUksRUFBRVcsS0FBSyxLQUFLO0VBQ2xDLE1BQU1aLE9BQU8sR0FBSSxRQUFPWSxLQUFLLEdBQUcsQ0FBRSxFQUFDLENBQUMsQ0FBQztFQUNyQ2IsU0FBUyxDQUFDQyxPQUFPLEVBQUVDLElBQUksQ0FBQztBQUMxQixDQUFDLENBQUM7Ozs7OztVQy9IRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0INGBZWxsc0Zvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcblxyXG7RgWVsbHNGb3JtYXQuZm9yRWFjaChjZWxsID0+IHtcclxuICAvLyDQmNGJ0LXQvCDRgtC+0LvRjNC60L4g0YfQuNGB0LvQvtCy0YPRjiDRh9Cw0YHRgtGMINGC0LXQutGB0YLQsCDQstC90YPRgtGA0Lgg0Y3Qu9C10LzQtdC90YLQsFxyXG4gIGNvbnN0IHRleHQgPSBjZWxsLmNoaWxkTm9kZXNbMF0/Lm5vZGVWYWx1ZT8udHJpbSgpOyAvLyDQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YLQvtCy0YvQuSDRg9C30LXQu1xyXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQodGV4dD8ucmVwbGFjZSgvXFxzL2csICcnKSwgMTApO1xyXG5cclxuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQt9C90LDRh9C10L3QuNC1INGH0LjRgdC70L7QvFxyXG4gIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAvLyDQpNC+0YDQvNCw0YLQuNGA0YPQtdC8INGC0L7Qu9GM0LrQviDRh9C40YHQu9C+0LLRg9GOINGH0LDRgdGC0YxcclxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0TnVtYmVyKHZhbHVlKTtcclxuICAgIGNlbGwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTsgLy8g0J7QsdC90L7QstC70Y/QtdC8INGC0L7Qu9GM0LrQviDRgtC10LrRgdGC0L7QstGL0Lkg0YPQt9C10LtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40Y8g0YfQuNGB0LvQsCDRgSDQv9GA0L7QsdC10LvQsNC80Lgg0LzQtdC20LTRgyDRgtGL0YHRj9GH0LDQvNC4XHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcclxuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyAnKTtcclxufVxyXG5cclxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtaXRlbSAuY2VsbCcpO1xyXG5cclxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBjZWxsLmNsb3Nlc3QoJy50YWJsZS1yb3cnKTtcclxuICAgIGNvbnN0IGNoYXJ0Um93ID0gcm93Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INCz0YDQsNGE0LjQutC4LCDQtNC+0LHQsNCy0LvRj9GPINC60LvQsNGB0YEgaGlkZGVuXHJcbiAgICBjb25zdCBhbGxDaGFydFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcnQtcm93Jyk7XHJcbiAgICBhbGxDaGFydFJvd3MuZm9yRWFjaCgoY2hhcnQpID0+IHtcclxuICAgICAgY2hhcnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQo9Cx0LjRgNCw0LXQvCDQutC70LDRgdGBIGhpZGRlbiDQtNC70Y8g0YLQtdC60YPRidC10LPQviDQs9GA0LDRhNC40LrQsCwg0LXRgdC70Lgg0L7QvSDQsdGL0Lsg0YHQutGA0YvRglxyXG4gICAgaWYgKGNoYXJ0Um93LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgY2hhcnRSb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vINCU0LDQvdC90YvQtSDQtNC70Y8g0LPRgNCw0YTQuNC60L7QsiAo0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINCx0L7Qu9GM0YjQtSDQtNCw0L3QvdGL0YUg0L/QviDQsNC90LDQu9C+0LPQuNC4KVxyXG5jb25zdCBjaGFydHNEYXRhID0gW1xyXG4gIFswLCA1MDA1MjEsIDQ4MDUyMSwgNDgwNTEyMV0sXHJcbiAgWzAsIDMwMDAwMCwgMzAwMDAwLCAzMDAwMDBdLFxyXG4gIFswLCAxMDAwMDAsIDEwMDAwMCwgMTAwMDAwXSxcclxuICBbMCwgMTAwNTIxLCAxMDA1MjEsMTAwNTIxXSxcclxuICBbMCwgMTMwMCwgOTAwLCA5MDBdXHJcbl07XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YDQuNGB0L7QstCw0L3QuNGPINCz0YDQsNGE0LjQutCwXHJcbmZ1bmN0aW9uIGRyYXdDaGFydChjaGFydElkLCBkYXRhKSB7XHJcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hhcnRJZCkuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBDaGFydC5kZWZhdWx0cy5ib3JkZXJDb2xvciA9ICcjY2NjJztcclxuXHJcbiAgbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgdHlwZTogJ2xpbmUnLCAvLyDQotC40L8g0LPRgNCw0YTQuNC60LA6INC70LjQvdC40Y9cclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWxzOiBkYXRhLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSksIC8vINCb0LXQudCx0LvRiyDQtNC70Y8g0L7RgdC4IFggKNC/0YDQvtGB0YLQviDQvdC+0LzQtdGA0LAg0YLQvtGH0LXQuilcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6ICcuJywgLy8g0JvQtdCz0LXQvdC00LBcclxuICAgICAgICBkYXRhOiBkYXRhLCAvLyDQlNCw0L3QvdGL0LVcclxuICAgICAgICBib3JkZXJDb2xvcjogJyM0Q0FGNTAnLCAvLyDQptCy0LXRgiDQu9C40L3QuNC4XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NiwgMTc1LCA4MCwgMCknLCAvLyDQkdC10Lcg0LfQsNC70LjQstC60LhcclxuICAgICAgICBmaWxsOiBmYWxzZSwgLy8g0JHQtdC3INC30LDQu9C40LLQutC4INC/0L7QtCDQs9GA0LDRhNC40LrQvtC8XHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgLy8g0KbQstC10YIg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50UmFkaXVzOiA1LCAvLyDQoNCw0LfQvNC10YAg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDcsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcclxuICAgICAgICB0ZW5zaW9uOiAwLCAvLyDQkdC10Lcg0LrRgNC40LLRi9GFINC70LjQvdC40LlcclxuICAgICAgICBib3JkZXJXaWR0aDogMiAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuFxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSwgLy8g0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsIC8vINCe0YLQvtCx0YDQsNC20LDQtdC8INC+0YHRjCBYXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YHQtdGC0LrRgyDQvdCwINC+0YHQuCBYXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRh9C40YHQu9CwINC90LAg0L7RgdC4IFhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDQndCw0YHRgtGA0L7QudC60LAg0LvQuNC90LjQuCDQvtGB0LggWFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkYwMDAwJywgLy8g0KbQstC10YIg0LvQuNC90LjQuCDQvtGB0LggWFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsIC8vINCo0LjRgNC40L3QsCDQu9C40L3QuNC4INC+0YHQuCBYXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5OiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLCAvLyDQntGC0L7QsdGA0LDQttCw0LXQvCDQvtGB0YwgWVxyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INGB0LXRgtC60YMg0L3QsCDQvtGB0LggWVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YfQuNGB0LvQsCDQvdCwINC+0YHQuCBZXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8g0J3QsNGB0YLRgNC+0LnQutCwINC70LjQvdC40Lgg0L7RgdC4IFlcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwMDBGRicsIC8vINCm0LLQtdGCINC70LjQvdC40Lgg0L7RgdC4IFlcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLCAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuCDQvtGB0LggWVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQu9C10LPQtdC90LTRg1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQv9C+0LTRgdC60LDQt9C60Lgg0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICB0ZW5zaW9uOiAwLCAvLyDQkdC10Lcg0LrRgNC40LLRi9GFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgcmFkaXVzOiA1LCAvLyDQoNCw0LfQvNC10YAg0YLQvtGH0LXQulxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRDQUY1MCcsIC8vINCm0LLQtdGCINGC0L7Rh9C10LpcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyDQk9C10L3QtdGA0LDRhtC40Y8g0LPRgNCw0YTQuNC60L7QsiDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxyXG5jaGFydHNEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY2hhcnRJZCA9IGBjaGFydCR7aW5kZXggKyAxfWA7IC8vINCY0LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC00LvRjyDQutCw0L3QstCw0YHQsFxyXG4gIGRyYXdDaGFydChjaGFydElkLCBkYXRhKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsi0YFlbGxzRm9ybWF0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNlbGwiLCJ0ZXh0IiwiY2hpbGROb2RlcyIsIm5vZGVWYWx1ZSIsInRyaW0iLCJ2YWx1ZSIsInBhcnNlSW50IiwicmVwbGFjZSIsImlzTmFOIiwiZm9ybWF0dGVkVmFsdWUiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJ0b1N0cmluZyIsImNlbGxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdyIsImNsb3Nlc3QiLCJjaGFydFJvdyIsIm5leHRFbGVtZW50U2libGluZyIsImFsbENoYXJ0Um93cyIsImNoYXJ0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJjaGFydHNEYXRhIiwiZHJhd0NoYXJ0IiwiY2hhcnRJZCIsImRhdGEiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJDaGFydCIsImRlZmF1bHRzIiwiYm9yZGVyQ29sb3IiLCJ0eXBlIiwibGFiZWxzIiwibWFwIiwiXyIsImluZGV4IiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlclJhZGl1cyIsInRlbnNpb24iLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwic2NhbGVzIiwieCIsImRpc3BsYXkiLCJncmlkIiwidGlja3MiLCJ5IiwicGx1Z2lucyIsImxlZ2VuZCIsInRvb2x0aXAiLCJlbmFibGVkIiwiZWxlbWVudHMiLCJsaW5lIiwicG9pbnQiLCJyYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9