import React from 'react'
import {BrowserRouter,NavLink} from "react-router-dom"
import "./App.css"

function Navbar() {
  return (
    <div className='nav'>
        <BrowserRouter>
        <img width="100px" height="100px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAB5CAMAAACdtUQZAAAAclBMVEUICAgBAwLkERjnERjrERi9EhcZBgUABggSBwiZERguCw2DEBTbExh1EBJDCw3gEho9Cw2bEBSPERfCERdlCw4dBgYWCAZSCQskBwjXEhqzERgzCgnJFBzPERd8EBW3EhdbCw5sDw+nEhpLCw06Dw6nEhSmpf5zAAAD/ElEQVR4nO3cB5OiMBQAYFNoyoq0IBCE1fX//8V7L3S36BXhdue9uRkDhPKRQpKduc2GgoKCgoKC4tsGWyd+KOvpMHKRi1zkIhe5yEUucn0zGLm+FYtc5CIXuchFLnKRi1zkIhe5yEUucpHrX7uUbdttyoWUi4k0tftQkM+eBTyYGjZS22RP08lrwsso/E1tZXf7lVKpu6jLDWMrPhlNnzrG1hD1nrnXcdOKPcaSeMgQFw4razjvbXS94mkOY2UB+yMHd71g3mxZVyyFtJThQAoem22lGCLImJtPtmUNTzluS99hew7nXUbXDnYHyClgf77HK2tI6e2yLktwHjR4d0i1LtjTB7qqybZxTbbRFcB5+6nL7GaskZwLrAAvkFFEy7Yv4zI3nbuENAEulcOvoeC+3iW7461LfORycrhgbAoOXtBxDVeV3rqKyMSuZJsd/BRYdmHkRa+dK+qOf+FiEXjkgV3wJ2QruLjIblymZk7iFTLlZZsGlzANqI3PXRnW0JCdJeQfG+CSLnm9dSVzFzYR/zC4+EMuVcCRau+LQBTucHxJl/DtJ7jMWUHF55db0sX56zNcxxzfGfzTY3Et6xK1+5suvIZ7x8VC2X4dTpNLLevK9+msP7xib+eVn7l4gXE+3nFd2sqQq7Vc8ErV/Psl4GnHYcQ7l/m++eUdl2p7JW9a9Au6fGwCzvvxhvjc1ZbDPRc7mWyTUdaSLlHAUEm81TflJb4or0A+VF6swVdmTavhgi7phfgBnbmqWMexHh73XXmFGN699sU87A3XKi8ZJijRU1fCHIjhYW5d/kP9PDuaMbPYreXCISrvW/i/+37BlMY0U72WC8dwT3A53RRHZpNLLerKnuJKeDvekOe1XKkWf+OSh49cmwKT2nz1V3KZjovP5inQa6hjqR5z7Zpmv9+atZnRdfHhyLnBC+/WciXBzMWL8FrEutKXh1w8CPw8r6pi5vJwQnmBPikQtb2SaxOLmQvn/u26zUMubEbwHa+mrg02PKudNotsJZe5+7t1m4lLiMEFZj5z9SeImeuEnhfGDnyldQBz0+1YXuM6Gvc7VwKjj6JbKcuK6/U8ut50lecBRO+C09FlQ1ckdIndBwB9dyUX01CPWmFeaasuzl60OyXdMtJs8MEmSbOp0m25z5qXHc6zkjrW2sHqCuUa9ZVYDFOwpVxStK5I5HGB3bt7gZ7tL9bv1fGA3XoTnWvLVN1DJc2C6qKu2q/0qSuTP7d8HSdL59Wy69ibLNs+/28rjnpr+rn3Mq7lg1zkIhe5yEUucpGLXOQiF7nIRS5ykYtc/6XsZ6qeDyMXuchFLnKRi1zkIhe5yPV9XT/1/4OloKCgoKCgeF78Apsxaw2MbzbAAAAAAElFTkSuQmCC"/>
        <div className='link'>
        <NavLink>Home</NavLink> </div>

        <div className='link'><NavLink>TV shows</NavLink></div>

       <div className='link'> <NavLink>Categories</NavLink></div>

     <div className='link'> <NavLink>Login</NavLink></div>
        </BrowserRouter>
    </div>
  )
}

export default Navbar