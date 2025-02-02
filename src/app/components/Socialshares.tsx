// Install: npm install react-share
import { FacebookShareButton, TwitterShareButton } from 'react-share';

interface SocialShareProps {
  productUrl: string;
}

export default function SocialShare({ productUrl }: SocialShareProps) {
  return (
    <div className="flex gap-2">
      <FacebookShareButton url={productUrl}>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={productUrl}>
        <button className="bg-blue-400 text-white px-3 py-1 rounded">Twitter</button>
      </TwitterShareButton>
    </div>
  );
}