import { useEffect, useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import useMediaQuery from '../../hooks/useMediaQuery';
import Logo from '../Logo';
import MobileNavBar from '../MobileNavBar';
import NavBar from '../NavBar';
import { Container } from './styles';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');
	const isFirstRender = useRef(true);

	const toggleMenu = () => {
		setIsMobileMenuOpen((s) => !s);
		isFirstRender.current = false;
	};

	useEffect(() => {
		if (!isMobile) setIsMobileMenuOpen(false);
	}, [isMobile]);

	return (
		<Container>
			<Logo />
			{
				isMobile
					? (
						isMobileMenuOpen
							? <CgClose onClick={toggleMenu} />
							: <HiMenuAlt3 onClick={toggleMenu} />
					)
					: <NavBar />
			}

			{
				(isMobile && isMobileMenuOpen) && <MobileNavBar toggleMenu={toggleMenu} />
			}
		</Container>
	);
}
