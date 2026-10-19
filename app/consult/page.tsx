'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ConsultPage() {
  const search = useSearchParams();
  const id = search.get('id') || '';
  const router = useRouter();

  const [country, setCountry] = useState('US');
  const [size, setSize] = useState('solo');
  const [volume, setVolume] = useState('low');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/result?id=${id}&country=${country}&size=${size}&volume=${volume}`);
  }

  return (
    <div>
      <h2>Consult — {id}</h2>
      <form onSubmit={submit}>
        <label>
          Country
          <select value={country} onChange={(e) => setCountry(e.target.value)} data-test="country">
            <option value="US">US</option>
            <option value="FR">FR</option>
            <option value="EU">EU</option>
          </select>
        </label>

        <label>
          Org size
          <select value={size} onChange={(e) => setSize(e.target.value)} data-test="size">
            <option value="solo">solo</option>
            <option value="2-10">2-10</option>
            <option value="11-50">11-50</option>
            <option value="50+">50+</option>
          </select>
        </label>

        <label>
          Monthly volume
          <select value={volume} onChange={(e) => setVolume(e.target.value)} data-test="volume">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </label>

        <button type="submit" data-test="submit">Generate</button>
      </form>
    </div>
  );
}
