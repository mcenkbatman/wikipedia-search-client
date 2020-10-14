import { ApolloCache, Resolvers } from '@apollo/client';


type ResolverFn = (
  parent: any,
  args: any,
  { cache } : { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
}

export const resolvers: AppResolvers = {
  
};
