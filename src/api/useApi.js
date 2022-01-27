import { useEffect, useRef, useReducer } from 'react';

export const useApi = (apiURL) => {
    const cache = useRef({});

    const initialState = {
        status: 'idle',
        loading: true,
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((state = initialState, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...state, status: 'fetching', loading: true };
            case 'FETCHED':
                return { ...state, status: 'fetched', data: action.payload, loading: false };
            case 'FETCH_ERROR':
                return { ...state, status: 'error', error: action.payload, loading: false };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        if (!apiURL) return;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[apiURL]) {
                const data = cache.current[apiURL];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(apiURL);
                    const data = await response.json();
                    cache.current[apiURL] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [apiURL]);

    return state;
};