import { expect, test } from 'vitest';
import { generateBlueprint } from '../../lib/generator';

const sampleProfession = {
  profession_id: 'accountant',
  name_en: 'Accountant',
  typical_tasks: [
    { id: 'acct_001', task_en: 'Process invoices', primitive: 'T2', automatable: true, human_required: false },
    { id: 'acct_003', task_en: 'Approve payments', primitive: 'T8', automatable: false, human_required: true },
  ],
  recommended_repos: [],
};

test('generateBlueprint returns expected artifacts for valid profession', () => {
  const bp = generateBlueprint(sampleProfession, { country: 'US', size: 'solo', volume: 'low' });
  expect(bp.blueprintMd).toContain('# BLUEPRINT');
  expect(bp.dockerComposeYaml).toContain('services');
});

test('generateBlueprint handles unknown profession structure gracefully', () => {
  const bp = generateBlueprint({ profession_id: 'x', name_en: 'X', typical_tasks: [], recommended_repos: [] }, {});
  expect(bp.blueprintMd).toContain('# BLUEPRINT');
});

test('approval matrix contains human_required tasks', () => {
  const bp = generateBlueprint(sampleProfession, {});
  expect(bp.approvalMatrixYaml).toContain('acct_003');
});
