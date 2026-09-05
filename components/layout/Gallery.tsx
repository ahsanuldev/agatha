import Image from 'next/image';

const photos = [
  {
    src: '/assets/img/album-list/small/img-1.jpg',
    alt: 'Photography 1',
  },
  {
    src: '/assets/img/album-list/small/img-2.jpg',
    alt: 'Photography 2',
  },
  {
    src: '/assets/img/album-list/small/img-3.jpg',
    alt: 'Photography 3',
  },
];

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <div key={photo.src}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
