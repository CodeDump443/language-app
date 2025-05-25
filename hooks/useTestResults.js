// src/hooks/useTestResults.js
import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '../services/testService';

export function useTestResults(userId) {
  return useQuery({
    queryKey: ['test_results', userId],
    queryFn: () => getTestResults(userId),
    enabled: !!userId,
  });
}