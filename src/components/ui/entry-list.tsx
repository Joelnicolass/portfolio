import { Eyebrow } from "./eyebrow";

type Entry = {
  id: string;
  title: string;
  institution: string;
  date: string;
  description?: string;
};

type EntryListProps = {
  title: string;
  items: Entry[];
};

export const EntryList = ({ title, items }: EntryListProps) => (
  <div className="flex flex-col gap-6">
    <Eyebrow>{title}</Eyebrow>
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item.id} className="flex flex-col gap-2 border-t border-line py-5">
          <span className="font-mono text-[11px] text-accent">{item.date}</span>
          <h3 className="text-lg leading-snug font-medium tracking-tight">{item.title}</h3>
          <p className="text-sm text-subtle">{item.institution}</p>
          {item.description && <p className="text-sm text-subtle">{item.description}</p>}
        </li>
      ))}
    </ul>
  </div>
);
