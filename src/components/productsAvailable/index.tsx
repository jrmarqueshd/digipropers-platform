import { ProductAvailable, ProductsAvailableContainer } from './styles';

import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';
import BpLogo from '/images/db-logo.png';
import B3Logo from '/images/b3-logo.png';

export default function ProductsAvailable() {
	return (
		<ProductsAvailableContainer>
			<h3>Produtos com acesso</h3>

			<ProductAvailable>
				<img src={MpLogo} />
				<span>até 02/04/2023</span>
			</ProductAvailable>

			<ProductAvailable>
				<img src={FwLogo} />
				<span>até 02/04/2023</span>
			</ProductAvailable>

			<ProductAvailable>
				<img src={BpLogo} />
				<span>até 02/04/2023</span>
			</ProductAvailable>

			<ProductAvailable>
				<img src={B3Logo} />
				<span>até 02/04/2023</span>
			</ProductAvailable>
		</ProductsAvailableContainer>
	);
}
