import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getProfileTool from "./tools/get-profile";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "growth-canvas",
  title: "Growth Canvas",
  version: "0.1.0",
  instructions:
    "Tools for Sebastian Johansson's growth marketing portfolio. Use `list_projects` to browse case studies, `get_project` for one case study, and `get_profile` for bio and contact details.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listProjectsTool, getProjectTool, getProfileTool],
});