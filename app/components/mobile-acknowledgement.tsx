"use client";

import { useState, useEffect } from "react";
import { client } from "../../tina/__generated__/client";

export default function MobileAcknowledgement() {
  const [acknowledgement, setAcknowledgement] = useState<string | null>(null);

  useEffect(() => {
    client.queries.acknowledgementConnection().then((data) => {
      const text = data.data.acknowledgementConnection?.edges?.[0]?.node?.text;
      if (text) setAcknowledgement(text);
    });
  }, []);

  if (!acknowledgement) {
    return null;
  }

  return (
    <div className="text-xs pt-4 short-screen:hidden">
      {acknowledgement}
    </div>
  );
}
