/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString = (string) => {
    return string.split('').map((symbol, index) => {
    return index % 2 === 1 ? symbol.toUpperCase() : symbol.toLowerCase();
    }).join('');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = (action, string) =>{
    if (action === 'uppercase'){
        return string.toUpperCase();
    } else if(action === 'lowercase'){
         return string.toLowerCase();
    } else if (action === 'capitalize'){
         return capitalizeString (string) 
    } else if (action === 'fence'){
         return fenceString (string);
    }
    return string;
  };

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = 0;

/**
 Стрелочная
 * @param {string} string
 */
 export const consoleLoggerWordsFor = (string) => {
    for (let i=0; i < string.length; i++){
        console.log(string[i]);
    };
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = 0;
