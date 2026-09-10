# Graphify Usage Guide

This project uses Graphify to maintain a knowledge graph of the codebase, reducing AI context bloat and speeding up navigation.

## For the AI (Claude Code)
The AI uses the graph to surgically locate code instead of reading whole directories.

### Primary Tools
- **graphify query "<question>"**: Find where logic lives or how components interact.
- **graphify explain "<symbol>"**: Understand a specific function/class and its dependencies.
- **graphify path "A" "B"**: Trace the call chain between two entities.
- **graphify god-nodes**: Identify architectural hubs.

### AI Workflow
Question -> graphify query -> identify file:line -> Read small snippet -> Answer.

---

## For the Human (Developer)
Humans use the graph for high-level architectural overviews and visual exploration.

### Visual Tools
- **graphify-out/graph.html**: Interactive map of the codebase (open in browser).
- **graphify-out/GRAPH_REPORT.md**: Text-based summary of architectural communities.

### Maintenance (CLI)
Run from the root to keep the graph fresh:

**Full Rebuild (No API Key needed):**
```bash
python -m graphify extract . --code-only --out . && python -m graphify cluster-only . --no-label
```

**Update existing graph (Fast):**
```bash
python -m graphify update .
```
