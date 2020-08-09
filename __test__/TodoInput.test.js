import React from 'react'
import renderer from 'react-test-renderer'
import TodoInput from '../src/component/TodoInput'

it('renders correctly', () => {
  const tree = renderer.create(<TodoInput />).toJSON()
  expect(tree).toMatchSnapshot()
})
