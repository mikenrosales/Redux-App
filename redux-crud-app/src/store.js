import { configureStore } from '@reduxjs/toolkit'
import usersReducers from './features/users/userSlice';

export default configureStore({
  reducer: {
    users: usersReducers
  }
})