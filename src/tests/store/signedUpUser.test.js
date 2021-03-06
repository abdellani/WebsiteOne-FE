import store from '../../store'

describe('Store', () => {
  it('should update after signup', async () => {
    await store.dispatch({
      type: 'POST_SIGNUP_INFO',
      payload: { id: 2, email: 'someEmail@example.com' }
    })

    expect(store.getState().signedUpUser).toEqual({ id: 2, email: 'someEmail@example.com' })
  })
})
