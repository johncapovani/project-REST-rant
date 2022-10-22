const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Ruh Roh! Raggy we got a 404 Page... We gotta get out of here!</p>
        </main>
    </Def>
  )
}


module.exports = error404
