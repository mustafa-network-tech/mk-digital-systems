"use client";
import { useState, type ReactNode } from "react";
import type { ProjectLayer } from "@/content/projects";

/**
 * Client-side layer filter for /work. The sections are server-rendered children
 * and stay visible without JavaScript; the filter only hides the other layers.
 * Deliberately no URL parameters, so filtered views never become indexable pages.
 */
export function WorkIndex({
  label,
  allLabel,
  layers,
  children,
}: {
  label: string;
  allLabel: string;
  layers: { id: ProjectLayer; label: string; count: number }[];
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<ProjectLayer | "all">("all");
  const total = layers.reduce((sum, layer) => sum + layer.count, 0);
  const options = [{ id: "all" as const, label: allLabel, count: total }, ...layers];
  return (
    <div className="work-index" data-filter={filter}>
      <div className="work-filter" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={filter === option.id}
            onClick={() => setFilter(option.id)}
          >
            {option.label}
            <span className="work-filter-count">{option.count}</span>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
