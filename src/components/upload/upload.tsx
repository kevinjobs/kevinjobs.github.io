import React from 'react';
import { UploadProps } from './index';
import Exif from 'exif-js';

const Upload: React.FC<UploadProps> = props => {
  const [base, setBase] = React.useState();
  const [exif, setExif] = React.useState();

  const { onClick } = props;

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    const bufferReader = new FileReader();
    const base64Reader = new FileReader();
    
    // exif json
    bufferReader.onload = (e: any) => {
      const result = e.target.result;
      const exifInfo = Exif.readFromBinaryFile(result);
      setExif(exifInfo);
    }
    bufferReader.readAsArrayBuffer(file);

    // base64 text
    base64Reader.onload = (e: any) => {
      const result = e.target.result;
      setBase(result);
    }
    base64Reader.readAsDataURL(file);
  }

  return (
    <div className="mint-upload">
      <span style={{display: 'none'}}>
        <input
          type="file"
          onChange={handleUpload}
          style={{display: 'none'}}
          id="mint-uploader"
        />
      </span>
      <label
        htmlFor={'mint-uploader'}
        data-exif={exif}
        data-base={base}
        onClick={onClick}
      >
        Click me to upload
      </label>
    </div>
  )
}

export default Upload;