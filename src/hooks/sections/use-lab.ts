"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  AGENT_FLOW,
  ARCHIFY_DIAGRAMS,
  CASE_STUDY,
  FRAMEWORK,
  LAB_ENGINES,
  LAB_REPOS,
  LAB_TOOLS,
} from "@/constants/content";
import { FEATURES } from "@/constants/features";
import { SECTIONS } from "@/constants/sections";
import { useSectionIndex } from "@/hooks/use-section-label";
import { padIndex } from "@/lib/utils";

type LabLinkType = "play" | "repo" | "diagram" | "kits";

type ToolId = (typeof LAB_TOOLS)[number]["id"];

export function useLab() {
  const t = useTranslations("lab");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const index = useSectionIndex(SECTIONS.lab.index);

  const toLink = (type: LabLinkType, href: string) => ({ type, href, label: t(`links.${type}`) });

  const lanes = AGENT_FLOW.lanes.map((lane) => ({ id: lane, label: t(`flow.lanes.${lane}`) }));

  const phases = AGENT_FLOW.phases.map((phase) => ({
    id: phase.id,
    label: t(`flow.phases.${phase.id}`),
    nodes: phase.nodes.map((node) => ({
      ...node,
      stepLabel: padIndex(node.step - 1),
      laneLabel: t(`flow.lanes.${node.lane}`),
      label: t(`flow.nodes.${node.id}.label`),
      detail: t(`flow.nodes.${node.id}.detail`),
    })),
  }));

  return {
    id: SECTIONS.lab.id,
    index,
    label: t("label"),
    title: t("title"),
    description: t("description"),
    linksLabel: t("links.label"),
    newTabLabel: tCommon("newTab"),
    framework: {
      eyebrow: t("framework.eyebrow"),
      name: t("framework.name"),
      lead: t("framework.lead"),
      description: t("framework.description"),
      tags: FRAMEWORK.tags,
      principlesLabel: t("framework.principlesLabel"),
      principles: (t.raw("framework.principles") as string[]).map((text, position) => ({
        text,
        index: padIndex(position),
      })),
      groups: !FEATURES.labToolkit ? [] : [
        {
          id: "agents",
          label: t("framework.agentsLabel"),
          items: FRAMEWORK.agents.map((agent) => t(`framework.agents.${agent}`)),
        },
        { id: "commands", label: t("framework.commandsLabel"), items: [...FRAMEWORK.commands] },
        { id: "addons", label: t("framework.addonsLabel"), items: [...FRAMEWORK.addons] },
      ],
      links: [
        toLink("repo", LAB_REPOS.studioSkills),
        toLink("diagram", ARCHIFY_DIAGRAMS.flow[locale]),
        ...(!FEATURES.labToolkit
          ? []
          : [
              toLink("kits", ARCHIFY_DIAGRAMS.kits[locale]),
              ...LAB_TOOLS.map((tool) => ({
                type: tool.id,
                href: tool.links[0].href,
                label: t(`items.${tool.id as ToolId}.name`),
              })),
            ]),
      ],
    },
    flow: !FEATURES.labAgentFlow ? null : {
      label: t("flow.label"),
      loop: t("flow.loop"),
      lanes,
      phases,
      steps: phases.flatMap((phase) => phase.nodes).sort((a, b) => a.step - b.step),
    },
    caseStudy: !FEATURES.labSacrifice ? null : {
      eyebrow: t("caseStudy.eyebrow"),
      name: t("caseStudy.name"),
      description: t("caseStudy.description"),
      note: t("caseStudy.note"),
      year: CASE_STUDY.year,
      tags: CASE_STUDY.tags,
      links: CASE_STUDY.links.map((link) => toLink(link.type, link.href)),
    },
    engines: !FEATURES.labToolkit ? null : { label: t("engines"), items: LAB_ENGINES },
  };
}
