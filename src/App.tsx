import BackgroundImg from './components/BackgroundImg';
import Home from './pages/Home';

function App() {
	return (
		<>
			{/* <div style={{ position: 'relative', width: '100%', height: '100%' }}> */}
			{/* </div> */}
			<BackgroundImg />
			<div className='container'>
				<Home />
			</div>
		</>
	);
}

export default App;
