// src/hooks/useAuth.js
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

export function useAuth() {
  const { data: user } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data.user;
    },
  });

  return { user };
}