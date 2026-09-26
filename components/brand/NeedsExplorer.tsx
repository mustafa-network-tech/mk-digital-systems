"use client";
import { useState } from "react";
import { Link } from "@/config/navigation";
import type { SiteContent } from "@/content/site";
import { Arrow } from "./Arrow";
export function NeedsExplorer({ copy }: { copy: SiteContent["needs"] }) {
  const [selected, setSelected] = useState(0);
  const item = copy.items[selected];
  return (
    <div className="needs-explorer">
      <div className="needs-options">
        {copy.items.map((i, index) => (
          <button
            key={i.family}
            type="button"
            id={`need-${i.family}`}
            aria-expanded={selected === index}
            aria-controls="need-detail"
            className={selected === index ? "is-active" : ""}
            onClick={() => setSelected(index)}
          >
            <span>{i.title}</span>
            <Arrow diagonal />
          </button>
        ))}
      </div>
      <div
        className="need-detail"
        id="need-detail"
        aria-labelledby={`need-${item.family}`}
      >
        <div key={selected} className="need-content">
          <p className="eyebrow">{item.subtitle}</p>
          <p className="need-description">{item.description}</p>
          <div
            className={`need-diagram need-diagram-${selected}`}
            aria-hidden="true"
          >
            <div className="diagram-line" />
            {item.steps.map((step, i) => (
              <span key={step} className="diagram-node">
                <span className="node-icon">
                  {i === 0 ? "◇" : i === 1 ? "⊕" : "↗"}
                </span>
                <span>{step}</span>
              </span>
            ))}
          </div>
          <Link className="text-link" href={{ pathname: "/solutions", hash: item.family }}>
            {copy.explore}
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
