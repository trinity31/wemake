import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/supa-client";

export const getGptIdeas = async (
  client: SupabaseClient<Database>,
  { limit }: { limit: number }
) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .limit(limit);
  if (error) {
    throw error;
  }
  return data;
};

export const getGptIdea = async (
  client: SupabaseClient<Database>,
  ideaId: string
) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .eq("gpt_idea_id", parseInt(ideaId, 10))
    .single();
  if (error) {
    throw error;
  }
  return data;
};