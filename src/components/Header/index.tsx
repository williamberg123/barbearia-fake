import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import useMediaQuery from '../../hooks/useMediaQuery';
import Logo from '../Logo';
import MobileNavBar from '../MobileNavBar';
import NavBar from '../NavBar';
import { Container } from './styles';

export default function Header() {
	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<Container>
			<Logo />
			{
				isMobile
				? (
					isMobileMenuOpen
					? <CgClose onClick={() => setIsMobileMenuOpen((s) => !s)} />
					: <HiMenuAlt3 onClick={() => setIsMobileMenuOpen((s) => !s)} />
				)
				: <NavBar />
			}
			{
				(isMobile && isMobileMenuOpen) && <MobileNavBar />
			}
		</Container>
	);
}
