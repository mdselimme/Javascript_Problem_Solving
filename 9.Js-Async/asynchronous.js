setTimeout(() => {
  timeShow();
}, 3000);

setInterval(() => {
  timeShow();
}, 1000);

const timeShow = () => {
  const data = new Date();
  console.log(data.getDate());
  console.log(data.getFullYear());
  console.log(data.getDay());
  console.log(data.getTime());
};
