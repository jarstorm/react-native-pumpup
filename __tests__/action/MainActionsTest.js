import configureMockStore from 'redux-mock-store'
import * as types from '../../src/action/types'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('action to load profile', () => {    
    fetchMock
      .mock('http://api.pumpup.com/1/classes/User/318381', { body: { todos: ['do something'] }, 
        headers: { 'content-type': 'application/json' }})

    const expectedAction = [{
      type: types.LOAD_PROFILE,
      payload: []
    }]

    const store = mockStore()

    store.dispatch({type: types.LOAD_PROFILE, payload: []})
    // return of async actions      
    expect(store.getActions()).toEqual(expectedAction)    
  })
})