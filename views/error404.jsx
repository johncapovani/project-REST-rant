const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Ruh Roh! Shaggy we got a 404 Page... We gotta get out of here!</p>
        <div>
          <img src="https://m.media-amazon.com/images/M/MV5BMTAxNjQzMjExMDFeQTJeQWpwZ15BbWU4MDUxMDUzMDIx._V1_.jpg" alt="shaggy" />
        </div>
      </main>
    </Def>
  )
}


module.exports = error404
