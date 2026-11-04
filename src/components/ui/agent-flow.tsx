"use client";

import { motion } from "motion/react";
import { DURATION, EASE, STAGGER, VIEWPORT } from "@/constants/motion";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type FlowNode = {
  id: string;
  lane: string;
  laneLabel: string;
  step: number;
  stepLabel: string;
  label: string;
  detail: string;
};

type AgentFlowProps = {
  label: string;
  loop: string;
  lanes: { id: string; label: string }[];
  phases: { id: string; label: string; nodes: FlowNode[] }[];
  steps: FlowNode[];
};

const LANE_STYLES: Record<string, string> = {
  you: "border-accent bg-accent text-accent-foreground [&_.detail]:text-accent-foreground/75",
  orchestrator: "border-foreground bg-background text-foreground",
  agents: "border-line bg-surface-raised text-foreground",
};

const Node = ({ node, showLane }: { node: FlowNode; showLane?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT}
    transition={{ duration: DURATION.base, ease: EASE.outExpo, delay: node.step * STAGGER.items }}
    className={cn("flex flex-col gap-1 rounded-2xl border px-4 py-3", LANE_STYLES[node.lane])}
  >
    <span className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-widest uppercase opacity-70">
      <span>{node.stepLabel}</span>
      {showLane && <span>{node.laneLabel}</span>}
    </span>
    <span className="text-base leading-tight font-medium">{node.label}</span>
    <span className="detail text-xs text-subtle">{node.detail}</span>
  </motion.div>
);

export const AgentFlow = ({ label, loop, lanes, phases, steps }: AgentFlowProps) => (
  <figure className="flex flex-col gap-6">
    <Eyebrow>{label}</Eyebrow>

    <div className="hidden gap-3 md:grid md:grid-cols-[8rem_repeat(3,minmax(0,1fr))]">
      <span />
      {phases.map((phase) => (
        <span key={phase.id} className="border-b border-line pb-3 font-mono text-[11px] tracking-widest text-subtle uppercase">
          {phase.label}
        </span>
      ))}
      {lanes.map((lane) => (
        <div key={lane.id} className="contents">
          <span className="flex items-center font-mono text-[11px] tracking-widest text-subtle uppercase">
            {lane.label}
          </span>
          {phases.map((phase) => (
            <div key={`${lane.id}-${phase.id}`} className="flex min-h-24 flex-wrap content-center gap-3 rounded-2xl border border-dashed border-line p-3">
              {phase.nodes
                .filter((node) => node.lane === lane.id)
                .map((node) => (
                  <div key={node.id} className="min-w-[8.5rem] flex-1">
                    <Node node={node} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>

    <ol className="flex flex-col gap-2 md:hidden">
      {steps.map((node) => (
        <li key={node.id}>
          <Node node={node} showLane />
        </li>
      ))}
    </ol>

    <figcaption className="flex gap-3 text-sm leading-relaxed text-subtle">
      <span aria-hidden className="text-accent">↺</span>
      {loop}
    </figcaption>
  </figure>
);
