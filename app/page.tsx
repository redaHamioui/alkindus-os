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
          <Link
            key={p.id}
            href={`/consult?id=${p.id}`}
            data-test={`card-${p.id}`}
            style={{
              display: 'block',
              border: '1px solid #ddd',
              padding: 16,
              width: 240,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span>Start</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
