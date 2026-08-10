import { defineTool } from "@lovable.dev/mcp-js";
import { mcpProfile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile and contact",
  description:
    "Get the portfolio owner's public profile: name, title, school, bio and contact email.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(mcpProfile, null, 2) }],
    structuredContent: { profile: mcpProfile },
  }),
});