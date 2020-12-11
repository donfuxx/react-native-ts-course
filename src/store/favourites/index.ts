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
      { payload: { data } }: PayloadAction<IFavouritePayload>
    ) {
      state.favourites.push(data)
    },
    unlike(
      state: IFavouritesState,
      { payload: { data } }: PayloadAction<IFavouritePayload>
      ) {
        state.favourites = state.favourites.filter(f => f !== data)
    },
  },
});

export const {
    like,
    unlike,
  } = favourites.actions;
  export default favourites;
  