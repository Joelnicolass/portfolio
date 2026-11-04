import { TagList } from "./tag";

type SkillGroupProps = {
  title: string;
  items: readonly string[];
};

export const SkillGroup = ({ title, items }: SkillGroupProps) => (
  <div className="flex flex-col gap-5 border-t border-line pt-6">
    <h3 className="font-serif text-3xl italic md:text-4xl">{title}</h3>
    <TagList items={items} size="md" />
  </div>
);
