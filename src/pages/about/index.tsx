import React from 'react';
import { Upload, Image } from '@/components';

const AboutPage: React.FC = () => {
  const [upload, setUpload] = React.useState();

  const handleClick = (e: any) => {
    console.log(e.target.dataset['base']);
  }

  return (
    <div className="About">
      <div className="About-Container">
        { upload ? <Image src={upload} /> : <Upload onClick={handleClick} /> }
      </div>
    </div>
  )
}

export default AboutPage;