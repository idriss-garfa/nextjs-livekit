"use server";

import { createClient } from "@/lib/supabase/server";

type SignUpData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const signUp = async (data: SignUpData) => {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { email, username, password } = data;

  const { data: existingUser } = await supabase
    .from("profiles")
    .select()
    .eq("email", email)
    .single();

  if (existingUser) {
    return {
      error: {
        message: "Email already in use",
      },
    };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        email,
      },
    },
  });

  if (error) {
    return {
      error: error,
    };
  }

  return {
    success: {
      message: "User created successfully, an confirmation email is sent",
    },
  };
};
