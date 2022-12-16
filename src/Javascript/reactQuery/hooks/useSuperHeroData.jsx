import { useQuery } from 'react-query'
import { fetchSuperHeroes } from "../services/superheroService"

function useSuperHeroData(onSuccess, onError) {

    //! Fetching on a click of a button 
    //? before log onError it tries three times
    //? select is like a selector in redux
    //*  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-hero', fetchSuperHeroes,
    //*  { enabled: false, onSuccess, onError, select: data => data.data.map(hero => hero.name) })

    //! useQuery config options (optional):

    //* cache time: {cacheTime:5000}, 5 minutes is the default - Time to keep the cache
    //* stale time: {staleTime:5000}, 0 is the default - Time to turn query into stale
    //* refetch on mount: {refetchOnMount:5000}, true is the default - refetch on component mount, it can be true, false or 'always' (it will update if query is stale or not)
    //* Polling: { refetchInterval: true}, it will continiously refetch, false is the default, set false or a ms time, it is paused if windows is defocused
    //* Background polling: {refetchIntervalInBackground: true} - same behaviour as refetchInterval, but keeps fetching in background
    //* Refetch on window focus: { refetchOnWindowFocus: true } - it can be true, false or 'always' (it will update if query is stale or not)
    //* fetching on event : { enable:false } - set enable as false, add a refetch function into destructuring and call it on event trigger 
    //* select: {select : data => do something ...} - works like a selector for redux
    //* keepPreviousData: {keepPreviousData: true} - will keep the previous data until the new fetch is done, avoiding loading state. false is default
    //* initialData: {initialData: something} - will set as the initial data

    return useQuery('super-heroes', fetchSuperHeroes, { 
        //! if we use enabled =false, query invalidation wont work. unless you use a success callback to refetch
        enabled: false, 
        onSuccess, onError })


}

export default useSuperHeroData




/*
StaleTime: The duration until a query transitions from fresh to stale. As long as the query is fresh, 
data will always be read from the cache only - no network request will happen! If the query is stale 
(which per default is: instantly), you will still get data from the cache, but a background refetch
 can happen under certain conditions.

CacheTime: The duration until inactive queries will be removed from the cache.
This defaults to 5 minutes. Queries transition to the inactive state as soon as
there are no observers registered, so when all components which use that query
have unmounted.StaleTime: The duration until a query transitions from fresh to
stale. As long as the query is fresh, data will always be read from the cache 
only - no network request will happen! If the query is stale (which per default
is: instantly), you will still get data from the cache, but a background refetch 
can happen under certain conditions.

*/