import { useConfig } from 'payload/dist/admin/components/utilities/Config'
import React from 'react'
import { NavLink } from 'react-router-dom'


const baseClass = 'after-nav-links'

const BeforeNavLinks: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig()

  return (
    <div
      className={baseClass}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'calc(var(--base) / 4)',
      }}
    >
      <h4 className="nav__label" style={{ color: 'var(--theme-elevation-400)', margin: 0 }}>
        Your Views
      </h4>
      <h4 className="nav__link" style={{ margin: 0 }}>
        <NavLink
          activeClassName="active"
          style={{ textDecoration: 'none' }}
          to={`${adminRoute}/custom-dashboard`}
        >
          Analytics
        </NavLink>
      </h4>
      <h4 className="nav__link" style={{ margin: 0 }}>
        <NavLink
          activeClassName="active"
          style={{ textDecoration: 'none' }}
          to={`${adminRoute}/input-score-card`}
        >
          Input Score Card
        </NavLink>
      </h4>
      <div id="custom-css" />
    </div>
  )
}

export default BeforeNavLinks
