import './postcss.css';

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  let count = 0;

  const render = () => {
    countElement.textContent = count;
    if (count < 0) {
      import('./banner').then(({ addBanner }) => {
        addBanner('Counter value is less than zero');
      });
    } else if (count > 10) {
      import('./banner').then(({ addBanner }) => {
        addBanner('Counter value is greater than 10');
      });
    } else {
      import('./banner').then(({ addBanner }) => {
        addBanner('');
      });
    }
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
