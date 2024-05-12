import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul><li>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/servers`}>Satellite Servers</a>
              </li>
              <li>
                <a href={`/transformers`}>Transformers</a>
              </li>
              <li>
                <a href={`/signals`}>Signals</a>
              </li>
              <li>
                <a href={`/tasks`}>Tasks</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        
      </>
    );
  }