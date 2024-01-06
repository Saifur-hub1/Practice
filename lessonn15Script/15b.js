import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
const after_1_month = today.add(1, 'month').format('MMMM D');

document.querySelector('.js-output-1-month-after')
  .innerHTML = `
  <h4 style="color:red">1 month later</h4>
  ${after_1_month}
  `;