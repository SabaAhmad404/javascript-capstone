const itemCounter = (reservationCount, itemsContainer) => {
  const count = itemsContainer.childElementCount;
  reservationCount.innerHTML = count;
  return count;
};
export default itemCounter;
