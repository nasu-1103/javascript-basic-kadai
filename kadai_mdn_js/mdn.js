const dateName = new Date();

const year = dateName.getFullYear();
const month = dateName.getMonth() +1;
const day = dateName.getDate();

console.log(year + '年' + month + '月' + day + '日');
