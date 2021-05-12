import { Preview, PreviewProps } from './preview';

export type ImagePreviewProps = {} & PreviewProps;

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  return <Preview {...props} />
};

export default ImagePreview;