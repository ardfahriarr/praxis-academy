try{
  let MyHeading = document.querySelector("h1")
  let fruittype = prompt("Is there anything else you'd like?")
  switch (fruittype) {
    case 'Oranges':
      alert('Oranges are $0.59 a pound.')
      MyHeading.textContent = ('Oranges are $0.59 a pound.')
      break
    case 'Apples':
      alert('Apples are $0.32 a pound.')
      MyHeading.textContent = ('Apples are $0.32 a pound.')
      break
    case 'Bananas':
      alert('Bananas are $0.48 a pound.')
      MyHeading.textContent = ('Bananas are $0.48 a pound.')
      break
    case 'Cherries':
      alert('Cherries are $3.00 a pound.')
      MyHeading.textContent = ('Cherries are $3.00 a pound.')
      break
    case 'Mangoes':
      alert('Mangoes are $0.56 a pound.')
      MyHeading.textContent = ('Mangoes are $0.56 a pound.')
      break
    case 'Papayas':
      alert('Mangoes and papayas are $2.79 a pound.')
      MyHeading.textContent = ('Mangoes and papayas are $2.79 a pound.')
      break
    default:
      alert('Sorry, we are out of ' + fruittype + '.')
      MyHeading.textContent = ('Sorry, we are out of ' + fruittype + '.')
  } 
} catch(e) {
  console.log(e)
} finally {
  console.log('Finally block')
}