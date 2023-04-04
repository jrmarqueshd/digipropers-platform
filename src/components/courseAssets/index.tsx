import { CourseAssetsContainer } from './styles';

import DownloadIcon from '/icons/download-icon.png';

export default function CourseAssets() {
	return (
		<CourseAssetsContainer>
			<h3>Arquivos para download</h3>

			<div className="actions-container">
				<a href="https://www.africau.edu/images/default/sample.pdf" target="_blank" download="livro.pdf">
					<img src={DownloadIcon} /> livro.pdf
				</a>
				<a
					href="https://media.geeksforgeeks.org/wp-content/uploads/20220726130717/Ethics-250x300.png"
					target="_blank"
					download="guia.png"
				>
					<img src={DownloadIcon} /> guia.png
				</a>
			</div>
		</CourseAssetsContainer>
	);
}
