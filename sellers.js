fetch('./data/sellers.json')
  .then((response) => {
    if (!response.ok) throw new Error('Failed to fetch sellers data');
    return response.json();
  })
  .then((sellers) => {
    const container = document.getElementById('sellers-list');
    sellers.forEach((seller) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${seller.name}</h3>
        <p>Fish Quantity: ${seller.quantity} kg</p>
        <p>Contact: ${seller.contact}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error(error);
    document.getElementById('sellers-list').textContent = 'Failed to load sellers data.';
  });
