import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function useGrammarQuestions(level) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { data, error } = await supabase
        .from("grammar_questions")
        .select("*")
        .eq("level", level);
      if (!error) setQuestions(data);
      setIsLoading(false);
    }
    loadQuestions();
  }, [level]);

  return { questions, isLoading };
}
