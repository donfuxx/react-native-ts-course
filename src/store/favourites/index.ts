import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IFavouritesState,
  IFavouritePayload
} from "./types";

const favourites = createSlice({
  name: "favourites",
  initialState: {
    favourites: []
  } as IFavouritesState,
  reducers: {
    like(
      state: IFavouritesState,
      { payload: { id } }: PayloadAction<IFavouritePayload>
    ) {
      state.favourites.push(id)
    },
    unlike(
      state: IFavouritesState,
      { payload: { id } }: PayloadAction<IFavouritePayload>
      ) {
        state.favourites = state.favourites.filter(f => f !== id)
    },
  },
});

export const {
    like,
    unlike,
  } = favourites.actions;
  export default favourites;
  