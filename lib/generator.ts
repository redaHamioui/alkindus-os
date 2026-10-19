export function generateBlueprint(profession: any, answers: any) {
  const { name_en, typical_tasks, recommended_repos } = profession;

  const taskInventory = typical_tasks.map((t: any) => ({
    id: t.id,
    title: t.task_en,
    primitive: t.primitive,
    automatable: t.automatable,
    human_required: t.human_required,
  }));

  const approvalMatrix = taskInventory.filter((t: any) => t.human_required).map((t: any) => ({
    task_id: t.id,
    title_en: t.title,
    approvers: [{ role: 'manager', required: true }],
  }));

  const blueprintMd = `# BLUEPRINT — ${name_en}\n\n## Tasks\n${taskInventory.map((t: any) => `- ${t.title} (${t.primitive}) — ${t.automatable ? 'automatable' : 'manual'}`).join('\n')}\n\n## Recommended Repos\n${recommended_repos.map((r: any) => `- ${r.name}: ${r.github} (${r.license})`).join('\n')}\n\n## Approval Matrix\n${approvalMatrix.map((a: any) => `- ${a.task_id}: approver=${a.approvers[0].role}`).join('\n')}\n\n## Estimate\n- time_saved: "~10%"`;

  const dockerComposeYaml = `version: '3.8'\nservices:\n  # Recommended services\n`;
  const installSh = `#!/usr/bin/env bash\necho "Run docker-compose up -d"`;
  const approvalMatrixYaml = approvalMatrix.length
    ? approvalMatrix.map((a: any) => `- task_id: ${a.task_id}\n  title: "${a.title_en}"\n  approvers:\n    - role: manager\n      required: true`).join('\n')
    : '';

  return {
    blueprintMd,
    dockerComposeYaml,
    installSh,
    approvalMatrixYaml,
  };
}
