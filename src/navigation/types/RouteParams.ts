import {IProperty} from '../../models/Property';
import {Destination} from './Destination';

export type AppStackParamList = {
  [Destination.Search]: undefined;
  [Destination.SearchResults]: {data: IProperty[] | undefined};
};
