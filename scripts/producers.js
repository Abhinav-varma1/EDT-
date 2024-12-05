fetch('./data/producers.json')
  .then((response) => {
    if (!response.ok) throw new Error('Failed to fetch producers data');
    return response.json();
  })
  .then((producers) => {
    const container = document.getElementById('producers-list');
    producers.forEach((producer) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${producer.name}</h3>
        <p>Contact: ${producer.contact}</p>
        <p>Location: ${producer.location}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error(error);
    document.getElementById('producers-list').textContent = 'Failed to load producers data.';
  });
