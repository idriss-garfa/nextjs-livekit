"use server";

import { createClient } from "@/lib/supabase/server";

type forgotPasswordData = {
  email: string;
};

export const forgotPassword = async (data: forgotPasswordData) => {
  const supabase = await createClient();

  const { email } = data;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "/reset-password",
  });

  if (error) {
    console.error(error);
    return;
  }
};
