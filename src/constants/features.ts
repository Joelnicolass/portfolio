/**
 * Feature flags for content that is temporarily hidden.
 * Flip a flag to `true` to bring that block back; data and copy stay in place.
 */
export const FEATURES = {
  /** Sacrifice (Godot port) case study in the Lab section. */
  labSacrifice: false,
  /** Full agent flow diagram (lanes × phases) for godot-studio-skills. */
  labAgentFlow: false,
  /** Subagents / commands / addons tags and the engines line in the Lab section. */
  labToolkit: false,
} as const;
