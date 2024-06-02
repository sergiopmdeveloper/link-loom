import React from 'react';
import parse from 'style-to-js';
import Image from 'next/image';

interface SingleBranchProps {
  content: string;
  imgSrc: string;
  styleString: string;
}

export default function SingleBranch ({ content, imgSrc, styleString }: SingleBranchProps) {
  const styleObject = parse(styleString); 

  return (
    <li className="flex items-center" style={styleObject} >
      <div>
        <Image src={imgSrc} alt="Img" width={50} height={50}/>
      </div>
      <div className="ml-4">
        {content}
      </div>
    </li>
  );
};
