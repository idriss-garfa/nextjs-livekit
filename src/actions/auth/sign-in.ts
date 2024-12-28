"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type SignInData = {
  email: string;
  password: string;
};

export const signIn = async (data: SignInData) => {
  const supabase = await createClient();

  const { email, password } = data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
};
