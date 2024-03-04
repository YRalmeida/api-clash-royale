const display = document.querySelector('.display')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  searchCard()
})

function searchCard(){
  const input = document.querySelector('.input').value
  fetch(`../data/clashApi.json`,)
  .then((data) => data.json())
  .then((info) => {
    const card = foundCard(info.items, input)

    display.innerHTML = `
      <div class="card">
        <img src=${card.iconUrls.medium} alt="">
        <p>Name: ${card.name} </p>
        <p>Rarity: ${card.rarity}</p>
        <p>Elixir Cost: ${card.elixirCost}</p>
      </div>
    `
  })
}

function foundCard(cards, name){
  let cardFound = cards.find((card) => card.name === name)
  return cardFound
}