
import Link from 'next/link'

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sing Up', href: '/auth/signup' },
    !currentUser && { label: 'Sing Up', href: '/auth/signup' },
    currentUser && {label:'Sing Up',href:'/auth/signup'}
  ].filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return <li key={href} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
    </li>
  })

  return <nav className="navbar navbar-light bg-light">
    <Link href="/">
      <a className="navbar-brand">GitTix</a>
    </Link>
    <div className="d-flex justify-content-end">
      <ul className="nav d-flex align-items-center">
        {currentUser ? 'Sign out' : 'Sign in/up'}
      </ul>
    </div>
  </nav>
}