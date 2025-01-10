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
        borderColor: '#037d50',
        // Цвет линии
        backgroundColor: 'rgba(76, 175, 80, 0)',
        // Без заливки
        fill: false,
        // Без заливки под графиком
        pointBackgroundColor: '#037d50',
        // Цвет точек
        pointRadius: 5,
        // Размер точек
        pointHoverRadius: 5,
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
          }
          // Настройка линии оси X
        },

        y: {
          display: true,
          // Отображаем ось Y
          grid: {
            display: false // Отключаем сетку на оси Y
          },

          ticks: {
            display: false // Отключаем числа на оси Y
          }
        }
      },

      plugins: {
        legend: {
          display: false // Отключаем легенду
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7QUFFdERGLFdBQVcsQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLElBQUk7RUFDMUI7RUFDQSxNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwRCxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0wsSUFBSSxFQUFFTSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7RUFFcEQ7RUFDQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsS0FBSyxDQUFDLEVBQUU7SUFDakI7SUFDQSxNQUFNSSxjQUFjLEdBQUdDLFlBQVksQ0FBQ0wsS0FBSyxDQUFDO0lBQzFDTCxJQUFJLENBQUNFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHTSxjQUFjLENBQUMsQ0FBQztFQUNqRDtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLFNBQVNDLFlBQVlBLENBQUNDLEdBQUcsRUFBRTtFQUN6QixPQUFPQSxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNMLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7QUFDN0Q7QUFFQSxNQUFNTSxLQUFLLEdBQUdoQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0FBRTVEZSxLQUFLLENBQUNkLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0VBQ3RCQSxJQUFJLENBQUNjLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ25DLE1BQU1DLEdBQUcsR0FBR2YsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUN0QyxNQUFNQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csa0JBQWtCOztJQUV2QztJQUNBLE1BQU1DLFlBQVksR0FBR3RCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQzVEcUIsWUFBWSxDQUFDcEIsT0FBTyxDQUFFcUIsS0FBSyxJQUFLO01BQzlCQSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJTCxRQUFRLENBQUNJLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ3pDTixRQUFRLENBQUNJLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFHRjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUNqQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUM1QixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUMzQixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNwQjs7QUFFRDtBQUNBLFNBQVNDLFNBQVNBLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ2hDLE1BQU1DLEdBQUcsR0FBR2hDLFFBQVEsQ0FBQ2lDLGFBQWEsQ0FBRSxhQUFZSCxPQUFRLElBQUcsQ0FBQyxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQzdFQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsV0FBVyxHQUFHLE1BQU07RUFFbkMsSUFBSUYsS0FBSyxDQUFDSCxHQUFHLEVBQUU7SUFDYk0sSUFBSSxFQUFFLE1BQU07SUFBRTtJQUNkUCxJQUFJLEVBQUU7TUFDSlEsTUFBTSxFQUFFUixJQUFJLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLEtBQUssS0FBS0EsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUFFO01BQzNDQyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsR0FBRztRQUFFO1FBQ1piLElBQUksRUFBRUEsSUFBSTtRQUFFO1FBQ1pNLFdBQVcsRUFBRSxTQUFTO1FBQUU7UUFDeEJRLGVBQWUsRUFBRSxzQkFBc0I7UUFBRTtRQUN6Q0MsSUFBSSxFQUFFLEtBQUs7UUFBRTtRQUNiQyxvQkFBb0IsRUFBRSxTQUFTO1FBQUU7UUFDakNDLFdBQVcsRUFBRSxDQUFDO1FBQUU7UUFDaEJDLGdCQUFnQixFQUFFLENBQUM7UUFBRTtRQUNyQkMsT0FBTyxFQUFFLENBQUM7UUFBRTtRQUNaQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO01BQ2pCLENBQUM7SUFDSCxDQUFDOztJQUNEQyxPQUFPLEVBQUU7TUFDUEMsVUFBVSxFQUFFLElBQUk7TUFBRTtNQUNsQkMsTUFBTSxFQUFFO1FBQ05DLENBQUMsRUFBRTtVQUNEQyxPQUFPLEVBQUUsSUFBSTtVQUFFO1VBQ2ZDLElBQUksRUFBRTtZQUNKRCxPQUFPLEVBQUUsS0FBSyxDQUFFO1VBQ2xCLENBQUM7O1VBQ0RFLEtBQUssRUFBRTtZQUNMRixPQUFPLEVBQUUsS0FBSyxDQUFFO1VBQ2xCO1VBQ0E7UUFDRixDQUFDOztRQUNERyxDQUFDLEVBQUU7VUFDREgsT0FBTyxFQUFFLElBQUk7VUFBRTtVQUNmQyxJQUFJLEVBQUU7WUFDSkQsT0FBTyxFQUFFLEtBQUssQ0FBRTtVQUNsQixDQUFDOztVQUNERSxLQUFLLEVBQUU7WUFDTEYsT0FBTyxFQUFFLEtBQUssQ0FBRTtVQUNsQjtRQUNGO01BQ0YsQ0FBQzs7TUFDREksT0FBTyxFQUFFO1FBQ1BDLE1BQU0sRUFBRTtVQUNOTCxPQUFPLEVBQUUsS0FBSyxDQUFFO1FBQ2xCO01BQ0YsQ0FBQzs7TUFDRE0sUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRTtVQUNKYixPQUFPLEVBQUUsQ0FBQyxDQUFFO1FBQ2QsQ0FBQzs7UUFDRGMsS0FBSyxFQUFFO1VBQ0xDLE1BQU0sRUFBRSxDQUFDO1VBQUU7VUFDWHBCLGVBQWUsRUFBRSxTQUFTLENBQUU7UUFDOUI7TUFDRixDQUFDOztNQUNEcUIsU0FBUyxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFDLENBQUM7TUFDZDtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7O0FBRUE7QUFDQXZDLFVBQVUsQ0FBQzFCLE9BQU8sQ0FBQyxDQUFDNkIsSUFBSSxFQUFFVyxLQUFLLEtBQUs7RUFDbEMsTUFBTVosT0FBTyxHQUFJLFFBQU9ZLEtBQUssR0FBRyxDQUFFLEVBQUMsQ0FBQyxDQUFDO0VBQ3JDYixTQUFTLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxDQUFDO0FBQzFCLENBQUMsQ0FBQzs7Ozs7O1VDeEhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qg0YFlbGxzRm9ybWF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbtGBZWxsc0Zvcm1hdC5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gIC8vINCY0YnQtdC8INGC0L7Qu9GM0LrQviDRh9C40YHQu9C+0LLRg9GOINGH0LDRgdGC0Ywg0YLQtdC60YHRgtCwINCy0L3Rg9GC0YDQuCDRjdC70LXQvNC10L3RgtCwXHJcbiAgY29uc3QgdGV4dCA9IGNlbGwuY2hpbGROb2Rlc1swXT8ubm9kZVZhbHVlPy50cmltKCk7IC8vINCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgtC+0LLRi9C5INGD0LfQtdC7XHJcbiAgY29uc3QgdmFsdWUgPSBwYXJzZUludCh0ZXh0Py5yZXBsYWNlKC9cXHMvZywgJycpLCAxMCk7XHJcblxyXG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC30L3QsNGH0LXQvdC40LUg0YfQuNGB0LvQvtC8XHJcbiAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgIC8vINCk0L7RgNC80LDRgtC40YDRg9C10Lwg0YLQvtC70YzQutC+INGH0LjRgdC70L7QstGD0Y4g0YfQsNGB0YLRjFxyXG4gICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXROdW1iZXIodmFsdWUpO1xyXG4gICAgY2VsbC5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlOyAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0YLQvtC70YzQutC+INGC0LXQutGB0YLQvtCy0YvQuSDRg9C30LXQu1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjRjyDRh9C40YHQu9CwINGBINC/0YDQvtCx0LXQu9Cw0LzQuCDQvNC10LbQtNGDINGC0YvRgdGP0YfQsNC80LhcclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xyXG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xyXG59XHJcblxyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZS1pdGVtIC5jZWxsJyk7XHJcblxyXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IGNlbGwuY2xvc2VzdCgnLnRhYmxlLXJvdycpO1xyXG4gICAgY29uc3QgY2hhcnRSb3cgPSByb3cubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIC8vINCX0LDQutGA0YvQstCw0LXQvCDQstGB0LUg0LPRgNCw0YTQuNC60LgsINC00L7QsdCw0LLQu9GP0Y8g0LrQu9Cw0YHRgSBoaWRkZW5cclxuICAgIGNvbnN0IGFsbENoYXJ0Um93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC1yb3cnKTtcclxuICAgIGFsbENoYXJ0Um93cy5mb3JFYWNoKChjaGFydCkgPT4ge1xyXG4gICAgICBjaGFydC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCj0LHQuNGA0LDQtdC8INC60LvQsNGB0YEgaGlkZGVuINC00LvRjyDRgtC10LrRg9GJ0LXQs9C+INCz0YDQsNGE0LjQutCwLCDQtdGB0LvQuCDQvtC9INCx0YvQuyDRgdC60YDRi9GCXHJcbiAgICBpZiAoY2hhcnRSb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICBjaGFydFJvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8g0JTQsNC90L3Ri9C1INC00LvRjyDQs9GA0LDRhNC40LrQvtCyICjQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0LHQvtC70YzRiNC1INC00LDQvdC90YvRhSDQv9C+INCw0L3QsNC70L7Qs9C40LgpXHJcbmNvbnN0IGNoYXJ0c0RhdGEgPSBbXHJcbiAgWzAsIDUwMDUyMSwgNDgwNTIxLCA0ODA1MTIxXSxcclxuICBbMCwgMzAwMDAwLCAzMDAwMDAsIDMwMDAwMF0sXHJcbiAgWzAsIDEwMDAwMCwgMTAwMDAwLCAxMDAwMDBdLFxyXG4gIFswLCAxMDA1MjEsIDEwMDUyMSwgMTAwNTIxXSxcclxuICBbMCwgMTMwMCwgOTAwLCA5MDBdXHJcbl07XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YDQuNGB0L7QstCw0L3QuNGPINCz0YDQsNGE0LjQutCwXHJcbmZ1bmN0aW9uIGRyYXdDaGFydChjaGFydElkLCBkYXRhKSB7XHJcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2NoYXJ0SWR9XCJdYCkuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBDaGFydC5kZWZhdWx0cy5ib3JkZXJDb2xvciA9ICcjY2NjJztcclxuXHJcbiAgbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgdHlwZTogJ2xpbmUnLCAvLyDQotC40L8g0LPRgNCw0YTQuNC60LA6INC70LjQvdC40Y9cclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWxzOiBkYXRhLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSksIC8vINCb0LXQudCx0LvRiyDQtNC70Y8g0L7RgdC4IFggKNC/0YDQvtGB0YLQviDQvdC+0LzQtdGA0LAg0YLQvtGH0LXQuilcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6ICcuJywgLy8g0JvQtdCz0LXQvdC00LBcclxuICAgICAgICBkYXRhOiBkYXRhLCAvLyDQlNCw0L3QvdGL0LVcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMwMzdkNTAnLCAvLyDQptCy0LXRgiDQu9C40L3QuNC4XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NiwgMTc1LCA4MCwgMCknLCAvLyDQkdC10Lcg0LfQsNC70LjQstC60LhcclxuICAgICAgICBmaWxsOiBmYWxzZSwgLy8g0JHQtdC3INC30LDQu9C40LLQutC4INC/0L7QtCDQs9GA0LDRhNC40LrQvtC8XHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjMDM3ZDUwJywgLy8g0KbQstC10YIg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50UmFkaXVzOiA1LCAvLyDQoNCw0LfQvNC10YAg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcclxuICAgICAgICB0ZW5zaW9uOiAwLCAvLyDQkdC10Lcg0LrRgNC40LLRi9GFINC70LjQvdC40LlcclxuICAgICAgICBib3JkZXJXaWR0aDogMiAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuFxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSwgLy8g0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsIC8vINCe0YLQvtCx0YDQsNC20LDQtdC8INC+0YHRjCBYXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YHQtdGC0LrRgyDQvdCwINC+0YHQuCBYXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRh9C40YHQu9CwINC90LAg0L7RgdC4IFhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDQndCw0YHRgtGA0L7QudC60LAg0LvQuNC90LjQuCDQvtGB0LggWFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8g0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L7RgdGMIFlcclxuICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRgdC10YLQutGDINC90LAg0L7RgdC4IFlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INGH0LjRgdC70LAg0L3QsCDQvtGB0LggWVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0LvQtdCz0LXQvdC00YNcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBlbGVtZW50czoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgIHRlbnNpb246IDAsIC8vINCR0LXQtyDQutGA0LjQstGL0YVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICByYWRpdXM6IDUsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgLy8g0KbQstC10YIg0YLQvtGH0LXQulxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDAgLy8g0J7RgtC60LvRjtGH0LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vINCT0LXQvdC10YDQsNGG0LjRjyDQs9GA0LDRhNC40LrQvtCyINC00LvRjyDQutCw0LbQtNC+0LPQviDRjdC70LXQvNC10L3RgtCwXHJcbmNoYXJ0c0RhdGEuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICBjb25zdCBjaGFydElkID0gYGNoYXJ0JHtpbmRleCArIDF9YDsgLy8g0JjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LTQu9GPINC60LDQvdCy0LDRgdCwXHJcbiAgZHJhd0NoYXJ0KGNoYXJ0SWQsIGRhdGEpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyLRgWVsbHNGb3JtYXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2VsbCIsInRleHQiLCJjaGlsZE5vZGVzIiwibm9kZVZhbHVlIiwidHJpbSIsInZhbHVlIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwiaXNOYU4iLCJmb3JtYXR0ZWRWYWx1ZSIsImZvcm1hdE51bWJlciIsIm51bSIsInRvU3RyaW5nIiwiY2VsbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicm93IiwiY2xvc2VzdCIsImNoYXJ0Um93IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWxsQ2hhcnRSb3dzIiwiY2hhcnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsImNoYXJ0c0RhdGEiLCJkcmF3Q2hhcnQiLCJjaGFydElkIiwiZGF0YSIsImN0eCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiQ2hhcnQiLCJkZWZhdWx0cyIsImJvcmRlckNvbG9yIiwidHlwZSIsImxhYmVscyIsIm1hcCIsIl8iLCJpbmRleCIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvaW50SG92ZXJSYWRpdXMiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJkaXNwbGF5IiwiZ3JpZCIsInRpY2tzIiwieSIsInBsdWdpbnMiLCJsZWdlbmQiLCJlbGVtZW50cyIsImxpbmUiLCJwb2ludCIsInJhZGl1cyIsImFuaW1hdGlvbiIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==