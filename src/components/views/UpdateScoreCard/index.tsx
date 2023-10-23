import React, { Fragment, useEffect } from 'react'
import Button from 'payload/dist/admin/components/elements/Button'

import { useStepNav } from 'payload/dist/admin/components/elements/StepNav'
import { type AdminViewComponent } from 'payload/dist/config/types'
import { useConfig } from 'payload/dist/admin/components/utilities/Config'

const UpdateScoreCardView: AdminViewComponent = () => {
  const { setStepNav } = useStepNav()
  const {
    routes: { admin: adminRoute },
  } = useConfig()
  const baseClass = 'custom-default-view'

  useEffect(() => {
    setStepNav([
      {
        label: 'Custom View',
      },
    ])
  }, [setStepNav])

  return (
    <Fragment>
      <div
        style={{
          marginTop: 'calc(var(--base) * 2)',
          paddingLeft: 'var(--gutter-h)',
          paddingRight: 'var(--gutter-h)',
        }}
      >
        <h1>Custom View</h1>
        <p>This custom view was added through the Payload config:</p>
        <ul>
          <li>
            <code>components.views[key].Component</code>
          </li>
        </ul>
        <div className={`${baseClass}__controls`}>
          <Button buttonStyle="secondary" el="link" to={`${adminRoute}`}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default UpdateScoreCardView