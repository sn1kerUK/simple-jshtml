fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process and display the data
  })
  .catch(error => console.error('Error:', error));

  const name = 'Yura';
  console.log(`Hi, ${name}`);

   const Element = document.querySelector('.circle-inner');
   console.log(Element);
   Element.innerHTML = `<div>${name}</div>`;