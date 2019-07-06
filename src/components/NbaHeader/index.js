import React from 'react';
import { breakpoint } from '../../constants/config';

const NbaHeader = () => {
  // const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="turner-nav__outer">
      <nav className="turner-nav">
        <div className="turner-nav__left">
          {/* <button
            className="turner-nav__btn"
            onClick={() => setMenuOpen(!menuOpen)}
          /> */}

          <a href="http://www.nba.com" className="turner-nav__logo">
            <img
              className="turner-nav__logo-img"
              alt="NBA Logo"
              title="NBA"
              src="https://stats.nba.com/media/img/league/nba-logoman-word-white.svg"
            />
          </a>

          <ul className="turner-nav__left-menu" role="navigation">
            <li className="turner-nav__menu-item">
              <a href="https://www.nba.com/video">
                <span>Video</span>
              </a>
            </li>
            <li className="turner-nav__menu-item">
              <a href="https://www.nba.com/nbatv">
                <span>NBA TV</span>
              </a>
            </li>
            <li className="turner-nav__menu-item">
              <a href="https://www.nba.com/standings">
                <span>Standings</span>
              </a>
            </li>
          </ul>
        </div>

        <ul className="turner-nav__right" role="navigation">
          <li className="turner-nav__menu-item">
            <a href="https://www.nba.com/leaguepass" title="NBA League Pass">
              <span>NBA LEAGUE PASS</span>
            </a>
          </li>
          <li className="turner-nav__menu-item">
            <a
              href="https://www.nba.com/global/storelinkhandler.html"
              title="NBA Store"
            >
              <span>Store</span>
            </a>
          </li>
          <li className="turner-nav__menu-item">
            <a href="http://nbatickets.nba.com/" title="NBA Tickets">
              <span>Tickets</span>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .turner-nav__outer {
          width: 100%;
          background-color: #1d428a;
        }

        .turner-nav {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
          padding: 4px 0;
          top: 0;
          left: 0;
          -webkit-font-smoothing: antialiased;
          height: 54px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .turner-nav__btn {
          background: url('../static/icons/nav_open.svg') center center
            no-repeat;
          background-size: 23px;
          border: 0;
          appearance: none;
          height: 100%;
          padding: 23px;
          cursor: pointer;
        }

        .turner-nav__logo {
        }

        .turner-nav__logo-img {
          width: 68px;
          height: 31px;
        }

        .turner-nav__left {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .turner-nav__left-menu {
          margin: 0;
        }

        .turner-nav__right {
          margin: 0 0 0 0;
        }

        .turner-nav__right .turner-nav__menu-item:not(:first-child) {
          display: none;
        }

        @media screen and (max-width: 1175px) {
          .turner-nav__left-menu {
            display: none;
          }

          .turner-nav__logo {
            margin: 0 15px 0 0;
          }
        }

        @media (${breakpoint.medium}) {
          .turner-nav__right {
            display: block;
            margin: 0 15px 0 0;
          }

          .turner-nav__right .turner-nav__menu-item:not(:first-child) {
            display: inline;
          }

          .turner-nav__btn {
            display: none;
          }
        }

        .turner-nav__menu-item {
          display: inline-block;
          line-height: 45px;
          color: #fff;
        }

        .turner-nav__menu-item a {
          padding: 10px 10px;
          font-size: 0.9375rem;
          color: #fff;
          text-decoration: none;
        }

        .turner-nav__menu-item a:hover > span {
          border-bottom: 2px solid #fff;
        }

        .turner-nav__menu-item a span {
          transition: border-color 0.5s linear;
          border-color: transparent;
          padding-bottom: 3px;
        }
      `}</style>
    </div>
  );
};

export default NbaHeader;
