import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RocketLaunches } from '../types/types';

export const launchesApi = createApi({
    reducerPath: 'launchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
    endpoints: (builder) => ({
        getAllLaunches: builder.query<RocketLaunches[], void>({
            query: () => ({
                url: 'v3/launches',
                method: 'GET'
            })
        }),

        getSingleLaunch: builder.query<RocketLaunches, number>({
            query: (id) => ({
                url: `v3/launches/${id}`,
                method: 'GET'
            })
        })
    })
})

export const { useGetAllLaunchesQuery, useGetSingleLaunchQuery } = launchesApi;