import Image from "next/image";
import { Arrow } from "./Arrow";
import type { Project } from "@/content/projects";
import type { ProjectCopy } from "@/content/project-copy";

const glyph = (project: Project) =>
  project.sectors.includes("hospitality")
    ? "⌑"
    : project.sectors.includes("restaurant")
      ? "✳"
      : "◇";

export function ProjectScene({
  project,
  story,
  diagramLabel,
  priority = false,
}: {
  project: Project;
  story: ProjectCopy;
  diagramLabel: string;
  priority?: boolean;
}) {
  const name = story.name || project.name;
  const media = project.media;
  const steps = story.modules ?? [];
  return (
    <div
      className={`project-scene scene-${project.scene} ${media ? `has-image scene-${media.frame}` : ""}`}
    >
      <div className="scene-top">
        <span>{name}</span>
        <span className="scene-glyph" aria-hidden="true">
          ↗
        </span>
      </div>
      {media ? (
        <div className="real-interface">
          <div className="interface-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{name}</span>
          </div>
          <div className="interface-image">
            <Image
              src={media.src}
              alt={story.alt ?? name}
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1100px) 80vw, 680px"
              priority={priority}
              style={{ objectFit: media.frame === "phone" ? "contain" : "cover" }}
            />
          </div>
        </div>
      ) : (
        <div className="workflow-scene">
          <span className="workflow-symbol" aria-hidden="true">
            {glyph(project)}
          </span>
          <div className="workflow-steps">
            {steps.map((step, i) => (
              <div key={step}>
                <span>{step}</span>
                {i < steps.length - 1 && <Arrow />}
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
