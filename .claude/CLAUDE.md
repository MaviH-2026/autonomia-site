# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Synkra AIOX Core — Development Guide

You are working on **@aiox-fullstack/core** (v4.31.1), a meta-framework that orchestrates AI agents to handle complex development workflows. This is the core runtime, not a project using AIOX — you are building AIOX itself.

## Quick Start

| Task | Command |
|------|---------|
| **Build core** | `cd .aiox-core && npm run build` |
| **Run tests** | `cd .aiox-core && npm test` |
| **Unit tests only** | `cd .aiox-core && npm run test:unit` |
| **Integration tests** | `cd .aiox-core && npm run test:integration` |
| **Lint code** | `cd .aiox-core && npm run lint` |
| **Type check** | `cd .aiox-core && npm run typecheck` |

## Project Structure

```
.aiox-core/                      # Framework core (NEVER modify L1 paths below)
├── core/                        # L1: Runtime engine (constitution.md protected)
│   ├── code-intel/             # Code intelligence provider system
│   ├── config/                 # Configuration management
│   ├── execution/              # Task/workflow execution engine
│   ├── graph-dashboard/        # Dependency visualization CLI
│   ├── health-check/           # System health monitoring
│   ├── ids/                    # Incremental Development System
│   ├── manifest/               # Manifest processing
│   ├── mcp/                    # MCP server integration
│   └── ...                     # Other core subsystems
├── development/                 # L2: Templates & tasks (extend-only)
│   ├── tasks/                  # Executable task definitions
│   ├── templates/              # Code and document templates
│   ├── workflows/              # Multi-step workflows
│   ├── checklists/             # Quality gates
│   └── agents/                 # Agent persona definitions
├── cli/                        # CLI implementation
│   ├── commands/               # Command handlers (~12 major commands)
│   └── utils/                  # CLI utilities
├── data/                       # L3: Project-specific data (mutable)
├── infrastructure/             # CI/CD, deployment configs
├── scripts/                    # Build tools and helpers
├── constitution.md             # Non-negotiable principles (L1 protected)
├── core-config.yaml           # Framework configuration
└── package.json               # Dependencies, build scripts
```

**L1 (Core) paths are NEVER modified** — constitution enforced via deny rules.
**L2 (Templates) paths are extend-only** — add new templates, never modify existing ones.
**L3/L4 paths (data, scripts) can be modified** — project-specific work.

<!-- AIOX-MANAGED-START: core-framework -->
## Core Framework Understanding

Synkra AIOX is a meta-framework that orchestrates AI agents to handle complex development workflows. Always recognize and work within this architecture.
<!-- AIOX-MANAGED-END: core-framework -->

<!-- AIOX-MANAGED-START: constitution -->
## Constitution — Core Non-Negotiables

The Constitution (`.aiox-core/constitution.md`) enforces gates automatically. Violations are blocked.

| Article | Principle | Severity | What It Means |
|---------|-----------|----------|---------------|
| **I** | CLI First | NON-NEGOTIABLE | All functionality MUST work via CLI before any UI/dashboard. UI is observational only. |
| **II** | Agent Authority | NON-NEGOTIABLE | Only @devops can `git push`, create PRs, manage releases. Agent boundaries are non-delegable. |
| **III** | Story-Driven Development | MUST | All work starts from `.claude/stories/`. No ad-hoc features. |
| **IV** | No Invention | MUST | Every spec statement traces to requirements (FR-*, NFR-*, CON-*) or research. No invented features. |
| **V** | Quality First | MUST | Lint, typecheck, and tests MUST pass before marking work done. |
| **VI** | Absolute Imports | SHOULD | Use absolute imports (e.g., `@aiox-fullstack/core`) not relative paths. |

**When you see violations:** Stop, document the violation, ask @aiox-master to mediate.

**Deny rules in `.claude/settings.json` enforce L1 boundary** — framework core paths cannot be edited.
<!-- AIOX-MANAGED-END: constitution -->


## Development Workflow

### All development starts with a story
1. **Story location**: `.claude/stories/` or `docs/stories/`
2. **Story format**: YAML/Markdown with acceptance criteria, file list, and task checkboxes
3. **Work only on tasks listed**: No ad-hoc features (Constitution Article IV)
4. **Update as you go**: Mark checkboxes [ ] → [x], keep File List current
5. **Quality gate before done**: Lint + typecheck + tests must pass (Article V)

### Code Standards
- **Self-document**: Names matter more than comments. Avoid explaining the *what*.
- **Follow patterns**: Read 2-3 existing files in the same module before writing new code.
- **Minimal error handling**: Validate CLI input and external APIs; trust internal code.
- **Tests for new functions**: Unit tests required for all new functions and error paths.
- **Avoid over-engineering**: Three similar lines is better than a premature abstraction.

<!-- AIOX-MANAGED-START: framework-boundary -->
## Framework Boundary — What Can/Cannot Change

The **4-Layer model** separates framework code from project work. Deny rules in `.claude/settings.json` enforce this.

| Layer | Paths | Status | Notes |
|-------|-------|--------|-------|
| **L1** Core | `.aiox-core/core/`, `constitution.md` | NEVER modify | Protected by deny rules |
| **L2** Templates | `.aiox-core/development/`, `.aiox-core/infrastructure/` | Extend-only | Add new templates, never modify existing |
| **L3** Config | `.aiox-core/data/`, `core-config.yaml` | Mutable | Project-specific data (allowed) |
| **L4** Work | `docs/stories/`, `tests/`, `scripts/` | ALWAYS modify | Actual development happens here |

**When you hit a deny rule:** You're at an L1 boundary. Ask @aiox-master to override if truly necessary.
<!-- AIOX-MANAGED-END: framework-boundary -->

## Rules & Documentation

Critical rules are auto-loaded from `.claude/rules/` when relevant. Key files:

| File | Topic |
|------|-------|
| `agent-authority.md` | Agent exclusive operations (git push, PR creation) |
| `story-lifecycle.md` | Story status transitions and quality gates |
| `workflow-execution.md` | 4 workflows: SDC, QA Loop, Spec Pipeline, Brownfield |
| `ids-principles.md` | Incremental Development System principles |
| `coderabbit-integration.md` | Automated code review integration |
| `mcp-usage.md` | MCP server usage & tool selection priority |

**Formal reference:** `.claude/rules/` is auto-loaded; no need to read them unless you hit a specific gate/violation.

## Essential CLI Commands

```bash
# Code quality (must pass before marking work complete)
cd .aiox-core && npm run lint
cd .aiox-core && npm run typecheck
cd .aiox-core && npm test

# Visualization
npm run aiox -- graph --deps                  # Dependency tree
npm run aiox -- graph --deps --format=html   # Interactive visualization

# Health check
npm run aiox -- doctor                        # Framework health
```

## Key Subsystems at a Glance

| Subsystem | Location | Purpose |
|-----------|----------|---------|
| **Code Intelligence** | `.aiox-core/core/code-intel/` | Static analysis, dependency tracking, code enrichment |
| **Execution Engine** | `.aiox-core/core/execution/` | Task/workflow runner with status tracking |
| **IDS** | `.aiox-core/core/ids/` | Incremental Development System (story tracking) |
| **CLI Commands** | `.aiox-core/cli/commands/` | ~12 major commands (`aiox create`, `aiox run`, etc.) |
| **Templates** | `.aiox-core/development/templates/` | Starter code for features, docs, etc. |
| **Tasks** | `.aiox-core/development/tasks/` | Executable tasks with elicitation and gates |
| **Graph Dashboard** | `.aiox-core/core/graph-dashboard/` | Dependency visualization (`aiox graph`) |

## Agent Shortcuts (when working in Claude Code)

Activate an agent with `@agent-name`:

| Agent | Persona | Exclusive Operations |
|-------|---------|----------------------|
| `@dev` | Dex | Code implementation |
| `@qa` | Quinn | Testing, quality gates |
| `@architect` | Aria | Architecture decisions |
| `@pm` | Morgan | Product management, specs |
| `@po` | Pax | Story validation, backlog |
| `@sm` | River | Story creation from epics |
| `@analyst` | Alex | Research, requirements |
| `@data-engineer` | Dara | Schema design, migrations |
| `@ux-design-expert` | Uma | UI/UX design |
| `@devops` | Gage | **git push, PR creation, releases** (EXCLUSIVE) |

Use `*help` while an agent is active to see their available commands.

## Tips for Future Sessions

### Finding your way:
- Start with the active story: check `.claude/stories/` or ask an agent with `*status`
- Need to understand a subsystem? Read the README in `.aiox-core/core/[subsystem]/`
- Hit a constraint? It's probably in the Constitution (check Article I–VI)

### Common scenarios:
- **Adding a CLI command** → Read `.aiox-core/cli/commands/` examples, then add to `.aiox-core/cli/commands/`
- **Creating a task workflow** → Template at `.aiox-core/development/tasks/`; check existing tasks first
- **Fixing a bug** → Story-driven: create a story in `.claude/stories/`, mark it Story-driven
- **Code intelligence issue** → Check `.aiox-core/core/code-intel/` provider interface

### If you're stuck:
1. Read the Constitution (`.aiox-core/constitution.md`) — might be a gate you're hitting
2. Check the active rule file (`.claude/rules/`) — rules are loaded by context
3. Ask @aiox-master with full context if nothing explains it

---
*Synkra AIOX Claude Code Configuration v2.0*
