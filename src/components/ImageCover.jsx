export default function ImageCover({ src, alt }) {
    return <img className="cover" src={src} alt={`Cover of ${alt}`} />;
  }
  