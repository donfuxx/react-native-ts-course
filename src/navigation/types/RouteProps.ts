import { RouteProp } from "@react-navigation/native";
import { Destination } from "./Destination";
import { AppStackParamList } from "./RouteParams";

export type SearchResultsRouteProp = RouteProp<
  AppStackParamList,
  Destination.SearchResults
>;

export type PropertyRouteProp = RouteProp<AppStackParamList, Destination.Property>;
