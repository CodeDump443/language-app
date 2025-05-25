// src/services/testService.js
import { supabase } from './supabase';

export async function getWords(testType) {
  const table = testType === 'en-ru' ? 'words_en_ru' : 'words_ru_en';
  const { data, error } = await supabase.from(table).select('*').limit(10);
  if (error) throw error;
  return data;
}

export async function getPuzzleWords() {
  const { data, error } = await supabase.from('puzzle_words').select('*').limit(1);
  if (error) throw error;
  return data;
}

export async function saveTestResult(userId, testType, score) {
  const { data, error } = await supabase.from('test_results').insert([
    { user_id: userId, test_type: testType, score }
  ]);
  if (error) throw error;
  return data;
}

export async function getTestResults(userId) {
  const { data, error } = await supabase.from('test_results').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
}