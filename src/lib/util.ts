import listReactFiles from 'list-react-files'

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export const shuffle = (array: any[]) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const playRandomSound = (soundType: string) => {

  switch(soundType) {

    case 'wrong':
      console.log(listReactFiles('../data/sounds/wrong'))
      break

  }

}