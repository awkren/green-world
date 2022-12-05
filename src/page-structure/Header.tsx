import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const navigationLinks = [
  { name: "About", href: "/about"},
  { name: "Projects", href: "/projects"},
  { name: "Resume", href: "/resume"},
]

const useStyles = makeStyles((themes) => {

})

export default function Header(){
  return (
    <div>
      {navigationLinks.map((item) =>
      <Link 
        color='textPrimary' 
        href={item.href}
        variant='button'
        underline='none'
      >
        {item.name}
      </Link>)}
    </div>
  )
}

