import ChampionCard from "../components/ChampionCard";

const Home = () => {
  return (
    <>
    {/* Buttons */}
    <nav>
      <button>Patch</button>
      <button>About</button>
    </nav>

    {/* General Tips */}
    <aside>
      <div>
        <h2>General Tips</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
      </div>
    </aside>
    
    {/* Pages Nav */}
    <aside>
      <div>Runes</div>
      <div>Items</div>
    </aside>

    {/* Champion MU Card */}
    <main>
      <div>
        <form>
          <label htmlFor="text">Search</label>
          <input type="text" />
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
    </>
  )
}
export default Home