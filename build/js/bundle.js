/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const currentDayCells = document.querySelectorAll('.current-day');
const previousDayCells = document.querySelectorAll('.previous-day');
const dayOfWeekCells = document.querySelectorAll('.day-of-week .value');
currentDayCells.forEach(cell => {
  const value = parseInt(cell.textContent.replace(/\s/g, '')); // Убираем пробелы, если они уже есть
  cell.textContent = formatNumber(value);
});
previousDayCells.forEach(cell => {
  const value = parseInt(cell.textContent.replace(/\s/g, ''));
  cell.textContent = formatNumber(value);
});
dayOfWeekCells.forEach(cell => {
  const value = parseInt(cell.textContent.replace(/\s/g, ''));
  cell.textContent = formatNumber(value);
});
const cells = document.querySelectorAll('.table-item .cell');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const row = cell.closest('.row');
    const chartRow = row.nextElementSibling;

    // Закрываем все графики
    const allChartRows = document.querySelectorAll('.chart-row');
    allChartRows.forEach(chart => {
      chart.style.display = 'none';
    });

    // Открываем или закрываем текущий график
    if (chartRow.style.display === 'none' || chartRow.style.display === '') {
      chartRow.style.display = 'flex';
    }
  });
});

// Данные для графиков (можно добавить больше данных по аналогии)
const chartsData = [[0, 500521, 480521, 4805121], [0, 300000, 300000, 300000], [0, 100000, 100000, 100000], [0, 100521, 100521, 100521], [0, 1300, 900, 900]];

// Функция для рисования графика
function drawChart(chartId, data) {
  const ctx = document.getElementById(chartId).getContext('2d');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLFlBQVlBLENBQUNDLE1BQU0sRUFBRTtFQUM1QixPQUFPQSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7QUFDaEU7QUFFQSxNQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQ2pFLE1BQU1DLGdCQUFnQixHQUFHRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUNuRSxNQUFNRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7QUFFdkVGLGVBQWUsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLElBQUk7RUFDOUIsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLElBQUksQ0FBQ0csV0FBVyxDQUFDVixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM3RE8sSUFBSSxDQUFDRyxXQUFXLEdBQUdiLFlBQVksQ0FBQ1csS0FBSyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGSixnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLElBQUk7RUFDL0IsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLElBQUksQ0FBQ0csV0FBVyxDQUFDVixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzNETyxJQUFJLENBQUNHLFdBQVcsR0FBR2IsWUFBWSxDQUFDVyxLQUFLLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUZILGNBQWMsQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLElBQUk7RUFDN0IsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLElBQUksQ0FBQ0csV0FBVyxDQUFDVixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzNETyxJQUFJLENBQUNHLFdBQVcsR0FBR2IsWUFBWSxDQUFDVyxLQUFLLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsTUFBTUcsS0FBSyxHQUFHVCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0FBRTVEUSxLQUFLLENBQUNMLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0VBQ3RCQSxJQUFJLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ25DLE1BQU1DLEdBQUcsR0FBR04sSUFBSSxDQUFDTyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxrQkFBa0I7O0lBRXZDO0lBQ0EsTUFBTUMsWUFBWSxHQUFHZixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUM1RGMsWUFBWSxDQUFDWCxPQUFPLENBQUVZLEtBQUssSUFBSztNQUM5QkEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQzlCLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUlMLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLEtBQUssTUFBTSxJQUFJTCxRQUFRLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtNQUN0RUwsUUFBUSxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ2pDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQ2pCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQzVCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQzNCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQzNCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQzFCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3BCOztBQUVEO0FBQ0EsU0FBU0MsU0FBU0EsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDaEMsTUFBTUMsR0FBRyxHQUFHdkIsUUFBUSxDQUFDd0IsY0FBYyxDQUFDSCxPQUFPLENBQUMsQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztFQUU3RCxJQUFJQyxLQUFLLENBQUNILEdBQUcsRUFBRTtJQUNiSSxJQUFJLEVBQUUsTUFBTTtJQUFFO0lBQ2RMLElBQUksRUFBRTtNQUNKTSxNQUFNLEVBQUVOLElBQUksQ0FBQ08sR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsS0FBSyxLQUFLQSxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQUU7TUFDM0NDLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLEtBQUssRUFBRSxHQUFHO1FBQUU7UUFDWlgsSUFBSSxFQUFFQSxJQUFJO1FBQUU7UUFDWlksV0FBVyxFQUFFLFNBQVM7UUFBRTtRQUN4QkMsZUFBZSxFQUFFLHNCQUFzQjtRQUFFO1FBQ3pDQyxJQUFJLEVBQUUsS0FBSztRQUFFO1FBQ2JDLG9CQUFvQixFQUFFLFNBQVM7UUFBRTtRQUNqQ0MsV0FBVyxFQUFFLENBQUM7UUFBRTtRQUNoQkMsZ0JBQWdCLEVBQUUsQ0FBQztRQUFFO1FBQ3JCQyxPQUFPLEVBQUUsQ0FBQztRQUFFO1FBQ1pDLFdBQVcsRUFBRSxDQUFDLENBQUM7TUFDakIsQ0FBQztJQUNILENBQUM7O0lBQ0RDLE9BQU8sRUFBRTtNQUNQQyxVQUFVLEVBQUUsSUFBSTtNQUFFO01BQ2xCQyxNQUFNLEVBQUU7UUFDTkMsQ0FBQyxFQUFFO1VBQ0QzQixPQUFPLEVBQUUsSUFBSTtVQUFFO1VBQ2Y0QixJQUFJLEVBQUU7WUFDSjVCLE9BQU8sRUFBRSxLQUFLLENBQUU7VUFDbEIsQ0FBQzs7VUFDRDZCLEtBQUssRUFBRTtZQUNMN0IsT0FBTyxFQUFFLEtBQUssQ0FBRTtVQUNsQixDQUFDOztVQUNEO1VBQ0FnQixXQUFXLEVBQUUsU0FBUztVQUFFO1VBQ3hCTyxXQUFXLEVBQUUsQ0FBQyxDQUFFO1FBQ2xCLENBQUM7O1FBQ0RPLENBQUMsRUFBRTtVQUNEOUIsT0FBTyxFQUFFLElBQUk7VUFBRTtVQUNmNEIsSUFBSSxFQUFFO1lBQ0o1QixPQUFPLEVBQUUsS0FBSyxDQUFFO1VBQ2xCLENBQUM7O1VBQ0Q2QixLQUFLLEVBQUU7WUFDTDdCLE9BQU8sRUFBRSxLQUFLLENBQUU7VUFDbEIsQ0FBQzs7VUFDRDtVQUNBZ0IsV0FBVyxFQUFFLFNBQVM7VUFBRTtVQUN4Qk8sV0FBVyxFQUFFLENBQUMsQ0FBRTtRQUNsQjtNQUNGLENBQUM7O01BQ0RRLE9BQU8sRUFBRTtRQUNQQyxNQUFNLEVBQUU7VUFDTmhDLE9BQU8sRUFBRSxLQUFLLENBQUU7UUFDbEIsQ0FBQzs7UUFDRGlDLE9BQU8sRUFBRTtVQUNQQyxPQUFPLEVBQUUsS0FBSyxDQUFFO1FBQ2xCO01BQ0YsQ0FBQzs7TUFDREMsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRTtVQUNKZCxPQUFPLEVBQUUsQ0FBQyxDQUFFO1FBQ2QsQ0FBQzs7UUFDRGUsS0FBSyxFQUFFO1VBQ0xDLE1BQU0sRUFBRSxDQUFDO1VBQUU7VUFDWHJCLGVBQWUsRUFBRSxTQUFTLENBQUU7UUFDOUI7TUFDRjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7O0FBRUE7QUFDQWhCLFVBQVUsQ0FBQ2YsT0FBTyxDQUFDLENBQUNrQixJQUFJLEVBQUVTLEtBQUssS0FBSztFQUNsQyxNQUFNVixPQUFPLEdBQUksUUFBT1UsS0FBSyxHQUFHLENBQUUsRUFBQyxDQUFDLENBQUM7RUFDckNYLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLENBQUM7QUFDMUIsQ0FBQyxDQUFDOzs7Ozs7VUM5SEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyKSB7XHJcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKTtcclxufVxyXG5cclxuY29uc3QgY3VycmVudERheUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbnQtZGF5Jyk7XHJcbmNvbnN0IHByZXZpb3VzRGF5Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlvdXMtZGF5Jyk7XHJcbmNvbnN0IGRheU9mV2Vla0NlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1vZi13ZWVrIC52YWx1ZScpO1xyXG5cclxuY3VycmVudERheUNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBwYXJzZUludChjZWxsLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykpOyAvLyDQo9Cx0LjRgNCw0LXQvCDQv9GA0L7QsdC10LvRiywg0LXRgdC70Lgg0L7QvdC4INGD0LbQtSDQtdGB0YLRjFxyXG4gIGNlbGwudGV4dENvbnRlbnQgPSBmb3JtYXROdW1iZXIodmFsdWUpO1xyXG59KTtcclxuXHJcbnByZXZpb3VzRGF5Q2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGNlbGwudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csICcnKSk7XHJcbiAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcih2YWx1ZSk7XHJcbn0pO1xyXG5cclxuZGF5T2ZXZWVrQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGNlbGwudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csICcnKSk7XHJcbiAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdE51bWJlcih2YWx1ZSk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtaXRlbSAuY2VsbCcpO1xyXG5cclxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBjZWxsLmNsb3Nlc3QoJy5yb3cnKTtcclxuICAgIGNvbnN0IGNoYXJ0Um93ID0gcm93Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INCz0YDQsNGE0LjQutC4XHJcbiAgICBjb25zdCBhbGxDaGFydFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcnQtcm93Jyk7XHJcbiAgICBhbGxDaGFydFJvd3MuZm9yRWFjaCgoY2hhcnQpID0+IHtcclxuICAgICAgY2hhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCe0YLQutGA0YvQstCw0LXQvCDQuNC70Lgg0LfQsNC60YDRi9Cy0LDQtdC8INGC0LXQutGD0YnQuNC5INCz0YDQsNGE0LjQulxyXG4gICAgaWYgKGNoYXJ0Um93LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBjaGFydFJvdy5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xyXG4gICAgICBjaGFydFJvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vINCU0LDQvdC90YvQtSDQtNC70Y8g0LPRgNCw0YTQuNC60L7QsiAo0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINCx0L7Qu9GM0YjQtSDQtNCw0L3QvdGL0YUg0L/QviDQsNC90LDQu9C+0LPQuNC4KVxyXG5jb25zdCBjaGFydHNEYXRhID0gW1xyXG4gIFswLCA1MDA1MjEsIDQ4MDUyMSwgNDgwNTEyMV0sXHJcbiAgWzAsIDMwMDAwMCwgMzAwMDAwLCAzMDAwMDBdLFxyXG4gIFswLCAxMDAwMDAsIDEwMDAwMCwgMTAwMDAwXSxcclxuICBbMCwgMTAwNTIxLCAxMDA1MjEsMTAwNTIxXSxcclxuICBbMCwgMTMwMCwgOTAwLCA5MDBdXHJcbl07XHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YDQuNGB0L7QstCw0L3QuNGPINCz0YDQsNGE0LjQutCwXHJcbmZ1bmN0aW9uIGRyYXdDaGFydChjaGFydElkLCBkYXRhKSB7XHJcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hhcnRJZCkuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgdHlwZTogJ2xpbmUnLCAvLyDQotC40L8g0LPRgNCw0YTQuNC60LA6INC70LjQvdC40Y9cclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWxzOiBkYXRhLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSksIC8vINCb0LXQudCx0LvRiyDQtNC70Y8g0L7RgdC4IFggKNC/0YDQvtGB0YLQviDQvdC+0LzQtdGA0LAg0YLQvtGH0LXQuilcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6ICcuJywgLy8g0JvQtdCz0LXQvdC00LBcclxuICAgICAgICBkYXRhOiBkYXRhLCAvLyDQlNCw0L3QvdGL0LVcclxuICAgICAgICBib3JkZXJDb2xvcjogJyM0Q0FGNTAnLCAvLyDQptCy0LXRgiDQu9C40L3QuNC4XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NiwgMTc1LCA4MCwgMCknLCAvLyDQkdC10Lcg0LfQsNC70LjQstC60LhcclxuICAgICAgICBmaWxsOiBmYWxzZSwgLy8g0JHQtdC3INC30LDQu9C40LLQutC4INC/0L7QtCDQs9GA0LDRhNC40LrQvtC8XHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgLy8g0KbQstC10YIg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50UmFkaXVzOiA1LCAvLyDQoNCw0LfQvNC10YAg0YLQvtGH0LXQulxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDcsIC8vINCg0LDQt9C80LXRgCDRgtC+0YfQtdC6INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcclxuICAgICAgICB0ZW5zaW9uOiAwLCAvLyDQkdC10Lcg0LrRgNC40LLRi9GFINC70LjQvdC40LlcclxuICAgICAgICBib3JkZXJXaWR0aDogMiAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuFxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSwgLy8g0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsIC8vINCe0YLQvtCx0YDQsNC20LDQtdC8INC+0YHRjCBYXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YHQtdGC0LrRgyDQvdCwINC+0YHQuCBYXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDRh9C40YHQu9CwINC90LAg0L7RgdC4IFhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDQndCw0YHRgtGA0L7QudC60LAg0LvQuNC90LjQuCDQvtGB0LggWFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkYwMDAwJywgLy8g0KbQstC10YIg0LvQuNC90LjQuCDQvtGB0LggWFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsIC8vINCo0LjRgNC40L3QsCDQu9C40L3QuNC4INC+0YHQuCBYXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5OiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLCAvLyDQntGC0L7QsdGA0LDQttCw0LXQvCDQvtGB0YwgWVxyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSwgLy8g0J7RgtC60LvRjtGH0LDQtdC8INGB0LXRgtC60YMg0L3QsCDQvtGB0LggWVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0YfQuNGB0LvQsCDQvdCwINC+0YHQuCBZXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8g0J3QsNGB0YLRgNC+0LnQutCwINC70LjQvdC40Lgg0L7RgdC4IFlcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwMDBGRicsIC8vINCm0LLQtdGCINC70LjQvdC40Lgg0L7RgdC4IFlcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLCAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuCDQvtGB0LggWVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQu9C10LPQtdC90LTRg1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQv9C+0LTRgdC60LDQt9C60Lgg0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICB0ZW5zaW9uOiAwLCAvLyDQkdC10Lcg0LrRgNC40LLRi9GFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgcmFkaXVzOiA1LCAvLyDQoNCw0LfQvNC10YAg0YLQvtGH0LXQulxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRDQUY1MCcsIC8vINCm0LLQtdGCINGC0L7Rh9C10LpcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8g0JPQtdC90LXRgNCw0YbQuNGPINCz0YDQsNGE0LjQutC+0LIg0LTQu9GPINC60LDQttC00L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcclxuY2hhcnRzRGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGNoYXJ0SWQgPSBgY2hhcnQke2luZGV4ICsgMX1gOyAvLyDQmNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQtNC70Y8g0LrQsNC90LLQsNGB0LBcclxuICBkcmF3Q2hhcnQoY2hhcnRJZCwgZGF0YSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbImZvcm1hdE51bWJlciIsIm51bWJlciIsInRvU3RyaW5nIiwicmVwbGFjZSIsImN1cnJlbnREYXlDZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInByZXZpb3VzRGF5Q2VsbHMiLCJkYXlPZldlZWtDZWxscyIsImZvckVhY2giLCJjZWxsIiwidmFsdWUiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwiY2VsbHMiLCJhZGRFdmVudExpc3RlbmVyIiwicm93IiwiY2xvc2VzdCIsImNoYXJ0Um93IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWxsQ2hhcnRSb3dzIiwiY2hhcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGFydHNEYXRhIiwiZHJhd0NoYXJ0IiwiY2hhcnRJZCIsImRhdGEiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJDaGFydCIsInR5cGUiLCJsYWJlbHMiLCJtYXAiLCJfIiwiaW5kZXgiLCJkYXRhc2V0cyIsImxhYmVsIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvaW50SG92ZXJSYWRpdXMiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJncmlkIiwidGlja3MiLCJ5IiwicGx1Z2lucyIsImxlZ2VuZCIsInRvb2x0aXAiLCJlbmFibGVkIiwiZWxlbWVudHMiLCJsaW5lIiwicG9pbnQiLCJyYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9