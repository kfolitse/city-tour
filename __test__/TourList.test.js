import React from 'react'
import renderer from 'react-test-renderer'
import TourList from '../src/component/TourList/TourList'

it('renders correctly', () => {
  const tree = renderer.create(<TourList />).toJSON()
  expect(tree).toMatchSnapshot()
})
