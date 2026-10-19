import JSZip from 'jszip';

export async function createZipAndDownload(blueprint: any, professionId: string) {
  const zip = new JSZip();
  zip.file('BLUEPRINT.md', blueprint.blueprintMd);
  zip.file('docker-compose.yml', blueprint.dockerComposeYaml);
  zip.file('install.sh', blueprint.installSh);
  zip.file('approval_matrix.yaml', blueprint.approvalMatrixYaml || '');

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `alkindus-blueprint-${professionId}.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
