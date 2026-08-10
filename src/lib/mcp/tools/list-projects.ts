import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpProjects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List the public portfolio case studies, optionally filtered by a search term matching title, category, description or tags.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional free-text filter, e.g. 'paid social' or 'CRO'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? mcpProjects.filter((p) =>
          [p.title, p.category, p.description, ...p.tags]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : mcpProjects;

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});