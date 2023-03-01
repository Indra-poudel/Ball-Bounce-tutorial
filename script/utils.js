/*
 const style = {
 background: red
 height: '400px'
 } 

 [[background, red], [height, 400px]]

 => `background :${this.background}; height: ${this.height}px; width: ${this.width}px;`

*/
// function convertStyleObjectToStyleString(styleObject) {
//   const styleString = Object.entries(styleObject).reduce((acc, currentItem) => {
//     return acc.concat(`${currentItem[0]}: ${currentItem[1]};`);
//   }, "");

//   return styleString;
// }

function convertStyleObjectToStyleString(styleObject) {
  let styleString = "";

  //   [[background, red], [height, 400px]]
  const arrayOfKeyValuePair = Object.entries(styleObject);
  console.log("array of key value pair ko", arrayOfKeyValuePair);

  for (let i = 0; i < arrayOfKeyValuePair.length; i++) {
    styleString = styleString.concat(
      `${arrayOfKeyValuePair[i][0]}: ${arrayOfKeyValuePair[i][1]};`
    );
  }

  return styleString;
}
