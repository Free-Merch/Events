"use client"
import { useState, useEffect } from 'react';

type FetchOptions = {
  method?: string;
  body?: string;
  headers?: { [key: string]: string };
};

type UseFetchResult<T> = {
  fetchData: T | null;
  fetchError: Error | null;
  fetchIsLoading: boolean;
};

export function useFetch<T = any>(url: string, options?: FetchOptions): UseFetchResult<T> {
  const [fetchData, setFetchData] = useState<T | null>(null);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [fetchIsLoading, setFetchIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetchIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setFetchData(json);
        setFetchIsLoading(false);
      } catch (error) {
  setFetchError(error as Error);
}
    };
    fetchData();
  }, [url, options]);

  return { fetchData, fetchError, fetchIsLoading };
}
