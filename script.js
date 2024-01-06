import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

setInterval(() => {
  // console.log(time);
  const today = dayjs();
  const time = today.format('h:mm:ss');
  document.querySelector('.js-output')
    .innerHTML = `
    <h3 class="format">12-hours</h3>
    ${time}`;
}, 1000);

setInterval(()=>{
  const today = dayjs();
  const time = today.format('HH:mm:ss');
  document.querySelector('.js-output-24hours')
    .innerHTML = `
    <h3 class="format">24-hours</h3>
    ${time}`;
}, 1000);