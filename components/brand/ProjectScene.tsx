import Image from "next/image";
import { Arrow } from "./Arrow";
import type { ProjectRecord } from "@/content/projects";
import type { StoryCopy } from "@/content/site";
export function ProjectScene({
  project,
  story,
  diagramLabel,
  priority = false,
}: {
  project: ProjectRecord;
  story: StoryCopy;
  diagramLabel: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`project-scene scene-${project.scene} scene-${project.kind} ${project.image ? "has-image" : ""}`}
    >
      <div className="scene-top">
        <span>{story.name || project.name}</span>
        <span className="scene-glyph" aria-hidden="true">
          ↗
        </span>
      </div>
      {project.image ? (
        <div className="real-interface">
          <div className="interface-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{story.name || project.name}</span>
          </div>
          <div className="interface-image">
            <Image
              src={project.image}
              alt={story.alt}
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1100px) 80vw, 680px"
              priority={priority}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ) : (
        <div className="workflow-scene">
          <span className="workflow-symbol" aria-hidden="true">
            {project.kind === "hotel"
              ? "⌑"
              : project.kind === "restaurant"
                ? "✳"
                : "◇"}
          </span>
          <div className="workflow-steps">
            {story.features.map((feature, i) => (
              <div key={feature}>
                <span>{feature}</span>
                {i < story.features.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
          <p className="eyebrow diagram-caption">{diagramLabel}</p>
        </div>
      )}
      <div className="scene-bottom">
        <span>{story.industry}</span>
        <span aria-hidden="true">MK / DIGITAL SYSTEMS</span>
      </div>
    </div>
  );
}
