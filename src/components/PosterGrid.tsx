import { useState } from "react";
import './PosterGrid.css'
import '../pages/Home.css'

interface PosterGridProps {
  images: string[];
}

export const ImageGrid: React.FC<PosterGridProps> = ({ images }) => {
	const [zoomedImage, setZoomedImage] = useState<string | null>(null);

	return (
		<>
			<div className="image-grid">
				{images.map((src, index) => (
					<img key={index} src={src} alt={`img-${index}`} onClick={() => setZoomedImage(src)} />
				))}
			</div>

			{zoomedImage && (
				<div className="overlay" onClick={() => setZoomedImage(null)}>
					<img
						src={zoomedImage}
						alt="zoomed"
						className="zoomed-image"
						onClick={(e) => e.stopPropagation()}
					/>
					<button className="close-button" onClick={() => setZoomedImage(null)}>
						&times;
					</button>
				</div>
			)}
		</>
	);
};
