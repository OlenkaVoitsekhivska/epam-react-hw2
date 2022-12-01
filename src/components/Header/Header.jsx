import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BTN__TEXT = {
	logout: 'Logout',
};

export default function Header() {
	const navigate = useNavigate();
	const userNameFromStorage = () => {
		const userName = JSON.parse(localStorage.getItem('currentUser'))?.name;
		return userName;
	};

	const handleLogout = () => {
		localStorage.removeItem('currentUser');
		navigate('/login');
	};
	return (
		<>
			<nav>
				<Logo></Logo>
				<div className='nav__block'>
					{userNameFromStorage() && (
						<>
							<p>{userNameFromStorage()}</p>
							<Button
								buttonText={BTN__TEXT.logout}
								type='button'
								onClick={handleLogout}
							></Button>
						</>
					)}
				</div>
			</nav>
			<Outlet />
		</>
	);
}
