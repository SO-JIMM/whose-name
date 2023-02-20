import DATA from "../data/names.json"

export const pickRandomNickname = () => {
  let randomNum = Math.floor(Math.random() * DATA.length)
  let newName = DATA[randomNum]
  return newName
}
