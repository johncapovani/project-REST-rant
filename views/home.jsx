const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME Page</h1>
        <div>
          <img src="/images/pancake.jpg" alt="Pancake w/ Berries" />
          <div>
            Photo by <a href="AUTHOR_LINK">Sam Moghadam Khamseh</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>

    </Def>
  )
}


module.exports = home
