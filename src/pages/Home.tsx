import ChampionCard from '../components/ChampionCard';
import GeneralTips from '../components/GeneralTips';

const Home = () => {
	return (
		<>
			{/* Buttons */}
			<nav>
				<button>Patch</button>
				<button>About</button>
			</nav>

			{/* General Tips */}
			<div className='main-container'>
				<aside className='aside-container'>
					<GeneralTips />
					<div className='pages-container'>
						<div className='card'>Runes</div>
						<div className='card'>Items</div>
					</div>
				</aside>

				{/* Champion MU Card */}
				<main>
					<div>
						<form>
							<label htmlFor='text'>Search</label>
							<input type='text' />
						</form>
					</div>
					<div>
						<div>Hard</div>
						<div>Even</div>
						<div>Easy</div>
					</div>
					<div>
						<ChampionCard />
					</div>
				</main>
			</div>
		</>
	);
};
export default Home;
