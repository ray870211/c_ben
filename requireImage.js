const folder = "./src/image/work/people/廢墟";

const fs = require("fs");
var count = 0;
const arr = [];
fs.readdir(folder, (err, files) => {
  files.forEach((file) => {
    count++;
    arr.push(file);
    if (count === files.length) {
      //   console.log(count);
      finish(arr);
    }
  });
});
function finish(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1 + ": require('" + folder + "/" + arr[i] + "'),");
  }
}
