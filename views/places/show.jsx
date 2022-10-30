const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>

                <div class="flex">

                    <div class="flex-image">
                        <img src={data.place.pic} alt="" />
                    </div>

                    <div class="flex-text">
                        <h1>{data.place.name}</h1>
                        <h2>Ratings:</h2>
                        <h2>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}. Swing on by and give it a try!</p>


                    </div>

                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>






                <div><h2>Comments:</h2></div>
            </main>
        </Def>
    )
}

module.exports = show
