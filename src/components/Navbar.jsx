import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Navbar.css'
import Popular from './Popular'
import NowPlaying from './NowPlaying'
import Upcoming from './Upcoming'
import TopRated from './TopRated'
import TvPopular from './TvPopular'
import TVAiringToday from './TvAiringToday'
import TvOnTv from './TvOnTv'
import TvTopRated from './TvTopRated'
import PeoplePopular from './PeoplePopular'
export default function Navbar() {
  return (
    // <Link to='/'>Home</Link>
    // <Link to='/about'>About</Link>
    <div class='wrapper'>
      <nav>
        <input type='checkbox' id='show-search' />
        <input type='checkbox' id='show-menu' />
        <label for='show-menu' class='menu-icon'>
          <i class='fas fa-bars'></i>
        </label>
        <div class='content'>
          <div class='logo'>
            <a href='#'>ShowTime</a>
          </div>
          <ul class='links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#' class='desktop-link'>
                Movies
              </a>
              <input type='checkbox' id='show-features' />
              <label for='show-features'>Features</label>
              <ul>
                <li>
                  <a href='#'>Popular</a>
                </li>
                <li>
                  <a href='#'>Now Playing</a>
                </li>
                <li>
                  <a href='#'>Upcoming</a>
                </li>
                <li>
                  <a href='#'>Top Rated</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#' class='desktop-link'>
                TV Shows
              </a>
              <input type='checkbox' id='show-services' />
              <label for='show-services'>Services</label>
              <ul>
                <li>
                  <a href='#'>Popular</a>
                </li>
                <li>
                  <a href='#'>Airing Today</a>
                </li>
                <li>
                  <a href='#'>On TV</a>
                </li>
                <li>
                  <a href='#'>Top Rated</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>People</a>
            </li>
          </ul>
        </div>
        <label for='show-search' class='search-icon'>
          <i class='fas fa-search'></i>
        </label>
        <form action='#' class='search-box'>
          <input
            type='text'
            placeholder='Type Something to Search...'
            required
            
          />
          <button type='submit' class='go-icon'>
            <i class='fas fa-long-arrow-alt-right'></i>
          </button>
        </form>
      </nav>
    </div>
  )
}
