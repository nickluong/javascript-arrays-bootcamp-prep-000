var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array , element){
    var arr = [..array]
    var elem = [element]
    return elem.concat(arr)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function addElementToEndOfArray(array, element){
  return array.push(element)
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0,1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(-1)
}
