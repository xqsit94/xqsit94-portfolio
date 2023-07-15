import * as React from 'react';
import Giscus, { type GiscusProps } from '@giscus/react';
import { BLOG } from '~/config.mjs';

const id = 'inject-comments';

const Comments = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const giscusConfig: GiscusProps = BLOG.giscusConfig as GiscusProps;

  return <div id={id}>{mounted ? <Giscus id={id} {...giscusConfig} /> : null}</div>;
};

export default Comments;
