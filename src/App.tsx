import Home from './pages/Home';

function App() {
	return (
		<>
			{/* <div style={{ position: 'relative', width: '100%', height: '100%' }}> */}
			{/* </div> */}
			<div className='background-image-container'>
				<div className='bg-container'>
					<img className='background-image' src='../public/Riven_23.jpg' />
				</div>
				<div className='gradient-container'>
					<div className='gradient'></div>
				</div>
			</div>
			<div className='container'>
				<Home />
			</div>
		</>
	);
}

export default App;
