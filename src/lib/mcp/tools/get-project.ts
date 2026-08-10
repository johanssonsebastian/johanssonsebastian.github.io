import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpProjects } from "../data";

export default defineTool({
  name: "get_project",
  title: "Get portfolio project",
  description: "Get the details of one portfolio case study by its id or title.",
  inputSchema: {
    idOrTitle: z.string().min(1).describe("Project id (e.g. '3') or title (e.g. 'DryPop')."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ idOrTitle }) => {
    const needle = idOrTitle.trim().toLowerCase();
    const project = mcpProjects.find(
      (p) => p.id === needle || p.title.toLowerCase() === needle,
    );
    if (!project) {
      throw new ToolError(
        `No project matched "${idOrTitle}". Use list_projects to see available projects.`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});