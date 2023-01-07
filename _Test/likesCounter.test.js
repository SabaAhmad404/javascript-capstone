import itemCounter from '../src/modules/likesCounter.js';

describe('counting test', () => {
  test('Count the li', () => {
    document.body.innerHTML = `
    <h3>Reservation ( <span id="reservation_count">0</span> ) </h3>
    <ul id="reservation_cotainer">
    </ul>`;

    const reservationCount = document.getElementById('reservation_count');
    const reservationContainer = document.getElementById(
      'reservation_cotainer',
    );
    const count = itemCounter(reservationCount, reservationContainer);
    expect(count).toBe(0);
  });

  test('Count the li', () => {
    document.body.innerHTML = `
    <h3>Reservation ( <span id="reservation_count">0</span> ) </h3>
    <ul id="reservation_cotainer">
      <li>Reservation 1</li>
      <li>Reservation 2</li>
      <li>Reservation 3</li>
      <li>Reservation 4</li>
      <li>Reservation 5</li>
    </ul>`;

    const reservationCount = document.getElementById('reservation_count');
    const reservationContainer = document.getElementById(
      'reservation_cotainer',
    );
    const count = itemCounter(reservationCount, reservationContainer);
    expect(count).toBe(5);
  });
});
