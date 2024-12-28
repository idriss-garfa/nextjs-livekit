"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type ResetPasswordData = {
  password: string;
  confirmPassword: string;
};

export const resetPassword = async (data: ResetPasswordData) => {
  const supabase = await createClient();

  const { password, confirmPassword } = data;

  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return;
  }

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.error(error);
    return;
  }

  redirect("/login");
};
