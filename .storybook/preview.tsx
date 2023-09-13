import React from 'react'
import GlobalSyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalSyles />
      <Story />
    </>
  )
]
