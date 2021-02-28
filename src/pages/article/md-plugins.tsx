import ReactDOMServer from 'react-dom/server';
import { Image } from '@/components';

export const MdPluginImage = (md: any) => {
  md.renderer.rules.image = (tokens: any) => {
    // console.log(tokens[0]);
    for (let i = 0; i < tokens.length; i ++) {
      if (tokens[i].type === 'image') {
        // console.log(tokens[i]);
        const src = tokens[i].attrs[0][1];
        const alt = tokens[i].attrs[1][1];
        const content = tokens[0].content;
        return (
          ReactDOMServer.renderToStaticMarkup(
            <>
              <Image
                prefixCls="content-image"
                src={src}
                alt={alt !== '' ? alt : content}
              />
              <div className="content-image-alt">
                <small>{ alt ? alt : content }</small>
              </div>
            </>
          )
        )
      }
    }
  }
}