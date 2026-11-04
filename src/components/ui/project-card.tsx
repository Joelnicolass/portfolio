import { ProjectLinks, type ProjectLinkViewModel } from "./project-links";
import { TagList } from "./tag";

type ProjectCardProps = {
  name: string;
  category: string;
  description: string;
  year: string;
  tags: readonly string[];
  links?: ProjectLinkViewModel[];
  linksLabel?: string;
  newTabLabel?: string;
};

export const ProjectCard = ({
  name,
  category,
  description,
  year,
  tags,
  links = [],
  linksLabel = "",
  newTabLabel = "",
}: ProjectCardProps) => (
  <article className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-background p-6 transition-colors duration-500 hover:border-subtle md:p-7">
    <div className="flex items-center justify-between gap-4 font-mono text-[11px] tracking-widest text-subtle uppercase">
      <span>{category}</span>
      <span className="shrink-0">{year}</span>
    </div>
    <h4 className="font-serif text-3xl italic">{name}</h4>
    <p className="text-sm leading-relaxed text-subtle">{description}</p>
    <TagList items={tags} className="mt-auto" />
    <ProjectLinks links={links} label={linksLabel} newTabLabel={newTabLabel} />
  </article>
);
