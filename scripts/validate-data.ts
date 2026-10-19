#!/usr/bin/env tsx

import fs from "fs";
import path from "path";
import { z } from "zod";

const dataDir = path.join(process.cwd(), "data");

const taxonomySchema = z.object({
  taxonomy: z.array(
    z.object({
      code: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ),
});

const toolSchema = z.object({
  tools: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      github: z.string().url(),
      license: z.string(),
      role: z.string(),
      self_hosted: z.boolean(),
      maintenance: z.object({ last_commit: z.string(), commits_per_year: z.number() }),
    })
  ),
});

const professionsSchema = z.object({
  professions: z.array(
    z.object({
      profession_id: z.string(),
      name_en: z.string(),
      name_fr: z.string(),
      isco_code: z.string().optional(),
      country_variants: z.array(z.string()),
      typical_tasks: z.array(
        z.object({
          id: z.string(),
          task_en: z.string(),
          task_fr: z.string(),
          primitive: z.string(),
          automatable: z.boolean(),
          human_required: z.boolean(),
        })
      ),
      recommended_repos: z.array(
        z.object({ github: z.string().url(), name: z.string(), license: z.string() })
      ),
    })
  ),
});

const githubReposSchema = z.object({
  mappings: z.record(z.array(z.object({ repo: z.string().url(), reason: z.string(), license: z.string() })))
});

function readJson(file: string) {
  const p = path.join(dataDir, file);
  const raw = fs.readFileSync(p, "utf-8");
  return JSON.parse(raw);
}

function validate() {
  try {
    const taxonomy = readJson("tasks_taxonomy.json");
    const tools = readJson("oss_tools.json");
    const professions = readJson("professions.json");
    const repos = readJson("github_repos.json");

    taxonomySchema.parse(taxonomy);
    toolSchema.parse(tools);
    professionsSchema.parse(professions);
    githubReposSchema.parse(repos);

    console.log("All data files validated successfully.");
    process.exit(0);
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("Validation errors:");
      console.error(err.errors);
    } else {
      console.error("Unexpected error:", err);
    }
    process.exit(1);
  }
}

validate();
