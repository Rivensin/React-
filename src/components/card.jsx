import React from 'react'

function Card({username ="HC", post = "not assigned yet"}) {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.fullstackpython.com/img/logos/react.png" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo voluptatum soluta nisi esse, sunt dolores sit eum. Repellendus, quisquam! Necessitatibus tempora nobis at enim consequuntur doloremque vero. Cum, provident.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default Card