import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Example from '../Example';


export const queryClient = new QueryClient();
const ReactQuery = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

export default ReactQuery
