"use client";

import { useContainer } from "@/contexts/Container";
import { useMemo } from "react";

export default function Dashboard() {
  const { containerLayout, setContainerLayout } = useContainer();

  const handleSetContainerLayout = useMemo(() => {
    return () => {
      <></>;
    };
  }, []);


  return <>{containerLayout}</>;
}
