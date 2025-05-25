// src/services/authService.js
import { supabase } from './supabase';

export async function signUp(email, password, nickname) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  await supabase.from('profiles').insert([{ id: data.user.id, nickname }]);
  return data.user;
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
  if (error) throw error;
  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}