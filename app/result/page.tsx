'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generateBlueprint } from '../../lib/generator';
import { createZipAndDownload } from '../../lib/zip';

export default function ResultPage() {
  const search = useSearchParams();
  const id = search.get('id') || '';
  const country = search.get('country') || 'US';
  const size = search.get('size') || 'solo';
  const volume = search.get('volume') || 'low';

  const [prof, setProf] = useState<any>(null);
  const [blueprint, setBlueprint] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        // Fetch the public copy of professions from /data
        const res = await fetch('/alkindus-os/data/professions.json');
        const json = await res.json();
        const found = json.professions.find((p: any) => p.profession_id === id);
        setProf(found);
        if (found) {
          const bp = generateBlueprint(found, { country, size, volume });
          setBlueprint(bp);
        }
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [id, country, size, volume]);

  if (!prof || !blueprint) return <div>Loading...</div>;

  return (
    <div>
      <h2>Blueprint — {prof.name_en}</h2>
      <pre data-test="blueprint-preview">{blueprint.blueprintMd}</pre>
      <button onClick={() => createZipAndDownload(blueprint, prof.profession_id)} data-test="download-zip">Download ZIP</button>
    </div>
  );
}
