import axios from 'axios'
import tinycolor from 'tinycolor2'

/**
 * Fetches an icon from the Iconify API.
 * @param {string} iconName The name of the icon to fetch.
 * @param {string} color The color of the icon.
 * @returns {string} The SVG icon.
 */
const fetchIcon = async (iconName, color) => {
  const height = 16 * 16

  const url = `https://api.iconify.design/${iconName}.svg?color=${encodeURIComponent(
    color
  )}&height=${height}`
  const response = await axios.get(url)
  return response.data
}

/**
 * Generates a random hex colour.
 * @returns {string} A random hex colour.
 */
const generateRandomColour = () => {
  const hexCharacters = '0123456789abcdef'
  let hexCode = '#'

  for (let i = 0; i < 6; i++) {
    hexCode += hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
  }

  return hexCode
}

/**
 * Picks a random colour from an array.
 * @param {string[]} colours An array of colours.
 * @returns {string} A random colour from the array.
 */
const pickRandomColourFromArray = (colours) => {
  return colours[Math.floor(Math.random() * colours.length)]
}

/**
 * Determines the font size for the title.
 * @param {string} title The title.
 * @returns {string} The font size.
 */
const determineFontSize = (title) => {
  if (title.length > 30) return '3rem'
  if (title.length > 24) return '4rem'
  return '4.2rem'
}

/**
 * Generates a gradient from a colour.
 * @param {string} mainColour The colour to generate the gradient from.
 * @returns {string} The gradient.
 */
const generateGradient = (mainColour) => {
  const firstColour = tinycolor(mainColour).darken(25).toString()
  const firstColourRGB = tinycolor(firstColour).toRgbString()
  const secondColour = tinycolor(mainColour).spin(50).toString()
  const secondColourRGB = tinycolor(secondColour).toRgbString()
  const angle = Math.floor(Math.random() * 180)
  return `linear-gradient(-${angle}deg, ${firstColourRGB}, ${secondColourRGB})`
}

export {
  fetchIcon,
  generateRandomColour,
  pickRandomColourFromArray,
  determineFontSize,
  generateGradient
}
