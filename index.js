function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

let animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)
