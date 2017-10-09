// __tests__/Intro-test.js
import React from 'react'

import Bio from '../../src/component/Bio'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const mockStore = configureMockStore([thunk])


test('renders correctly', () => {
  const store = mockStore({main: {profile: {bio: ''}, expanded: false}})
  const tree = renderer.create(
    <Provider store={store}>
      <Bio />
    </Provider>
  ).toJSON()  

  expect(tree).toMatchSnapshot()
})