import Image from 'next/image'
import House from '/src/components/icons/House'
import Dashboard from '/src/components/icons/Dashboard'
import Friend from '/src/components/icons/Friend'
import Gear from '/src/components/icons/Gear'
import Tab from './dashboard/Tab'

export default function Home() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
        Hello worlds!
      </h1>

      <main>
        <h2>Welcome</h2>
        <p>Login to start using SoundCircle</p>
        <form method="get" action="/src/html/dashboard.html">
          <div>
            <label for="name">Username: </label>
            <input type="text" id="name" placeholder="Enter Username" />
          </div>
          <div>
            <label for="name">Password: </label>
            <input type="password" id="pass" placeholder="Enter Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
      <br/>

      <footer>
        <hr />
        <span class="text-reset">Alison Day</span>
        <br />
        <a href="https://github.com/aday2418/startup">GitHub for SoundCircle</a>
      </footer>
    </div>
  )
}
