// src/hooks/useProductData.js
import { useState, useEffect } from 'react';

const URL =
    'https://v3-static.supadu.io/radley-books-us/products/9732397900366.json';

export function useProductData() {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(res => {
                if (!res.ok) throw new Error(`Network error: ${res.status}`);
                return res.json();
            })
            .then(raw => {
                const contributor = raw.contributors?.[0]?.contributor || null;

                setProduct({
                    title: raw.title,
                    contributor,
                    image: raw.image,
                    descriptionHtml: raw.description
                        ? `<p>${raw.description}</p>`
                        : raw.summary
                        ? `<p>${raw.summary}</p>`
                        : '',
                    saleDate: raw.sale_date?.date || null,
                    prices: Array.isArray(raw.prices) ? raw.prices : [],
                    reviews: Array.isArray(raw.reviews) ? raw.reviews : [],
                    retailers: Array.isArray(raw.retailers)
                        ? raw.retailers.map(r => ({
                              name: r.label,
                              url: r.path,
                          }))
                        : [],
                });
            })
            .catch(err => setError(err));
    }, []);

    return { product, error };
}
