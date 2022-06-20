/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
  export const capitalizeString = (string) => string.split(' ').map((symbol) => `${symbol[0].toUpperCase()}${symbol.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
  export const fenceString = () => {
  return string.split('').map((word, index) => {
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
   return string.toUppercase();
    } else if(action === 'lowercase'){
  return string.toLowerCase();
    } else if (action === 'capitalize'){
  return  string.charAt(0).toUpperCase() + string.slice(1)
    } else if (action === 'fence'){
  return fenceString = (string);
    }
  return string;
  };

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch =(action, string) => {
 switch (action){
   case 'uppercase':
     return string.toUppercase();
   case 'lowercase':
     return string.toLowerCase();
   case 'capitalize':
     return  string.charAt(0).toUpperCase() + string.slice(1)
   case 'fence':
     return fenceString = (string);
   default:
     return string;
   }
 };

/**
 Стрелочная
 * @param {string} string
 */
   export const consoleLoggerWordsForOf = (string) => {
     for (let symbol of string){
     console.log(symbol)
     };
    };

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
 for (let i=0, i < string.length, i++){
 console.log(string[i])};
  
};

/**
 Стрелочная
 * @param {string} string
 */
  export const consoleLoggerWordsWhile = (string) => {
    let i=0;
   while(i < string.length){
   console.log(string[i]);
    i++;
    };
  };

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
string.split('').forEach((symbol) => {
console.log(string);
});
};
