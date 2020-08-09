import React from 'react'
import renderer from 'react-test-renderer'
import TodoItem from '../src/component/TodoItem'

it('renders correctly', () => {
  const tree = renderer.create(<TodoItem />).toJSON()
  expect(tree).toMatchSnapshot()
})
