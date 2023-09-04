import createImage from 'node-html-to-image'
import { predefinedColoursDark, predefinedColoursLight } from './config.js'
import {
  fetchIcon,
  pickRandomColourFromArray,
  generateRandomColour
} from './functions.js'
import generateHtml from './htmlGenerator.js'

const generateImage = async (
  iconName,
  category,
  title,
  subTitle,
  imageName,
  folderPath
) => {
  const icon = await fetchIcon(iconName, '#000000')

  const mainColourDark = predefinedColoursDark
    ? pickRandomColourFromArray(predefinedColoursDark)
    : generateRandomColour()

  const mainColourLight = predefinedColoursLight
    ? pickRandomColourFromArray(predefinedColoursLight)
    : generateRandomColour()

  const htmlDark = generateHtml(mainColourDark, icon, category, title, subTitle)
  const htmlLight = generateHtml(
    mainColourLight,
    icon,
    category,
    title,
    subTitle
  )

  await createImage({
    output: `${folderPath}/${imageName}.png`,
    html: htmlDark
  })

  await createImage({
    output: `${folderPath}/${imageName}-light.png`,
    html: htmlLight
  })
}

export default generateImage
