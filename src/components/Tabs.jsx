// src/components/Tabs.jsx
import React, { useState } from 'react';
import Review from './Review';

export default function Tabs({ bioHtml, reviews, retailers }) {
    const tabList = [
        { id: 'bio', label: 'Author Bio' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'buy', label: 'Where to Buy' },
    ];
    const [active, setActive] = useState(tabList[0].id);

    return (
        <section className="tabs">
            <nav role="tablist">
                {tabList.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={active === tab.id}
                        className={active === tab.id ? 'active' : ''}
                        onClick={() => setActive(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            {active === 'bio' && (
                <div
                    role="tabpanel"
                    className="tab-content"
                    dangerouslySetInnerHTML={{ __html: bioHtml }}
                />
            )}

            {active === 'reviews' && (
                <div role="tabpanel" className="tab-content">
                    {reviews.length > 0 ? (
                        reviews.map((r, i) => (
                            <Review
                                key={i}
                                title={r.title}
                                body={r.body || r.review_text}
                                reviewer={r.reviewer}
                            />
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            )}

            {active === 'buy' && (
                <div role="tabpanel" className="tab-content">
                    {retailers.length > 0 ? (
                        <ul>
                            {retailers.map((r, i) => (
                                <li key={i}>
                                    <a href={r.url} target="_blank" rel="noopener">
                                        {r.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No retailer links available.</p>
                    )}
                </div>
            )}
        </section>
    );
}
