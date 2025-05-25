// src/services/adminService.js
import { supabase } from './supabase';

export async function deleteUser(userId) {
  const { error } = await supabase.auth.admin.deleteUser(userId);
  if (error) throw error;
}

export async function addWord(testType, wordData) {
  const table = testType === 'en-ru' ? 'words_en_ru' : 'words_ru_en';
  const { data, error } = await supabase.from(table).insert([wordData]);
  if (error) throw error;
  return data;
}

export async function addPuzzleWord(wordData) {
  const { data, error } = await supabase.from('puzzle_words').insert([wordData]);
  if (error) throw error;
  return data;
}