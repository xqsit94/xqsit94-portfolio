import tinycolor from 'tinycolor2'
import { imageWidth, imageHeight } from './config.js'
import { generateGradient, determineFontSize } from './functions.js'

const generateHtml = (mainColour, icon, category, title, subTitle) => {
  const gradient = generateGradient(mainColour)

  const titleBG = tinycolor(mainColour).setAlpha(0.6).toHexString()
  const titleText = tinycolor(titleBG).isLight() ? '#000000' : '#ffffff'

  const titleFontSize = determineFontSize(title)

  // generate subtitle color
  const subtitleBG = tinycolor(mainColour).darken(10).toString()
  const subtitleText = tinycolor(subtitleBG).isLight() ? '#000000' : '#ffffff'

  return `
  <html>
    <head>
      <style>
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
      }

      ::before,
      ::after {
        --tw-content: '';
      }

      html {
        line-height: 1.5;
        -moz-tab-size: 4;
        tab-size: 4;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-feature-settings: normal;
        font-variation-settings: normal;
      }

      body {
        margin: 0;
        padding: 0;
        line-height: inherit;
        width: ${imageWidth}px;
        height: ${imageHeight}px;
      }

      .image-container {
        background: ${gradient};
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .post-image {
        background-size: cover;
        background-position: center;
        border-radius: 2rem;
      }

      .post-container {
        width: 80%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* background-color: ${titleBG}; */
        border-radius: 2rem;
        padding: 2rem;
      }

      .post-details {
        color: ${titleText};
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .post-category {
        font-size: 1.5rem;
        margin: 0;
        text-transform: uppercase;
      }

      .post-title {
        font-size: ${titleFontSize};
        margin: 0;
        text-transform: capitalize;
      }

      .post-subtitle {
        background-color: ${subtitleBG};
        border-radius: 1rem;
        margin-top: 1rem;
      }

      .post-subtitle p {
        color: ${subtitleText};
        font-size: 1.8rem;
        margin: 0;
        padding: 0.6rem 1.2rem;
      }
      </style>
    </head>
    <body>
      <div class="image-container">
        <div class="post-container">
          <div class="post-image">
          ${icon}
          </div>
          <div class="post-details">
            <h6 class="post-category"># ${category}</h6>
            <h1 class="post-title">${title}</h1>
            ${
              subTitle && subTitle.length > 0
                ? `<div class="post-subtitle"><p>${subTitle}</p></div>`
                : ''
            }
          </div>
        </div>
      </div>
    </body>
  </html>
`
}

export default generateHtml
