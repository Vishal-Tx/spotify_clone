"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const Supabaseprovider = ({ children }: SupabaseProviderProps) => {
  const [supabaseCLient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseCLient}>
      {children}
    </SessionContextProvider>
  );
};

export default Supabaseprovider;
