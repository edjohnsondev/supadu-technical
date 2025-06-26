// src/components/MetaInfo.jsx
import React from 'react';

export default function MetaInfo({ saleDate, prices }) {
  const formattedDate = saleDate
    ? new Date(saleDate).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <div className="meta">
      <p>
        <strong>Published:</strong> {formattedDate}
      </p>
      <div className="prices">
        <strong>Prices:</strong>
        {prices.length > 0 ? (
          <ul>
            {prices.map((p) => {
              // Format using en-GB locale but with the correct currency
              const formatted = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: p.locale,
                    currencyDisplay: 'narrowSymbol'
                }).format(p.amount);

              return (
                <li key={p.locale}>
                  {p.locale}: {formatted}
                </li>
              );
            })}
          </ul>
        ) : (
          <span> N/A</span>
        )}
      </div>
    </div>
  );
}
