import React from 'react'
import renderer from 'react-test-renderer'
import Tour from '../src/component/Tour/Tour'

it('renders correctly', () => {
  const tree = renderer.create(<Tour />).toJSON()
  expect(tree).toMatchSnapshot()
})
