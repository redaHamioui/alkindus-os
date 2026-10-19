'use client';

import Link from 'next/link';

export default function HomePage() {
  const professions = [
    { id: 'accountant', name: 'Accountant', desc: 'Financial operations & reporting' },
    { id: 'lawyer', name: 'Lawyer', desc: 'Legal review & document workflows' },
    { id: 'hr_manager', name: 'HR Manager', desc: 'Onboarding & HR operations' },
  ];

  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1>ALKINDUS OS</h1>
        <p>Profession → Installable operational environment</p>
      </section>

      <section style={{ display: 'flex', gap: 16 }}>
        {professions.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ddd', padding: 16, width: 240 }}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <Link href={`/consult?id=${p.id}`} data-test={`card-${p.id}`}>
              <a>Start</a>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
