import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import generateImage from './imageGenerator.js'

const getAllMarkdownFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const absolutePath = path.join(dirPath, file)
    if (fs.statSync(absolutePath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(absolutePath, arrayOfFiles)
    } else if (path.extname(file) === '.md') {
      const filenameWithoutExtension = path.basename(file, '.md')
      const folderName = path.basename(path.dirname(absolutePath))
      arrayOfFiles.push({
        folder: folderName,
        file: filenameWithoutExtension,
        fullPath: absolutePath
      })
    }
  })

  return arrayOfFiles
}

const markdownFiles = getAllMarkdownFiles('./src/content/post')

markdownFiles.forEach(async ({ folder, file, fullPath }) => {
  const imagePath = path.join('./public/images', folder, `${file}.png`)
  if (!fs.existsSync(imagePath)) {
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data: frontmatter } = matter(fileContent)

    if (!frontmatter.image) {
      console.log('No image found in frontmatter for:', file)
      return
    }

    if (!fs.existsSync(path.join('./public/images', folder))) {
      fs.mkdirSync(path.join('./public/images', folder))
    }

    console.log('Generating image for:', file)
    await generateImage(
      frontmatter.image.icon || 'logos:typo3-icon',
      frontmatter.category,
      frontmatter.image.title,
      frontmatter.image.subtitle,
      file,
      path.join('./public/images', folder)
    )
    console.log('Image generated for:', file)
  }
})
