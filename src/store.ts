import { configureStore } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import game from "./features/gameSlice"

export const store = configureStore({
  reducer: {
    game,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
