"use client";

import React from "react";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h3 className="text-xl font-semibold">{subtitle}</h3>
    </div>
  );
};

export default EmptyState;
