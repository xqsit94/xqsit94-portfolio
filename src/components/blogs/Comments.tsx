import { BLOG } from '@/config.mjs'
import { $theme } from '@/stores/theme'
import Giscus, { type GiscusProps } from '@giscus/react'
import { useStore } from '@nanostores/react'
import { useEffect, useState } from 'react'

const id = 'inject-comments'

const Comments = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const theme = useStore($theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  const giscusConfig: GiscusProps = BLOG.giscusConfig as GiscusProps

  giscusConfig.theme = theme === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'

  return (
    <div id={id} className='my-10'>
      {mounted ? <Giscus id={id} {...giscusConfig} /> : null}
    </div>
  )
}

export default Comments
