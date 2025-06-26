// src/components/ProductPage.jsx
import React from 'react';
import { useProductData } from '../hooks/useProductData';
import ImageCover from './ImageCover';
import MetaInfo from './MetaInfo';
import Tabs from './Tabs';

export default function ProductPage() {
    const { product, error } = useProductData();

    if (error) return <p>Error loading product: {error.message}</p>;
    if (!product) return <p>Loading…</p>;

    const {
        title,
        contributor,
        image,
        descriptionHtml,
        saleDate,
        prices,
        reviews,
        retailers,
    } = product;

    if (!contributor) return <p>Author information is unavailable.</p>;

    return (
        <main className="product-detail">
            <div className="container">
                <div className="grid">
                    <ImageCover
                        src={`${image}&h=400`}
                        alt={title}
                    />

                    <section className="right-col">
                        <h1>{title}</h1>

                        <p className="author">
                            By <strong>{contributor.name}</strong>
                        </p>

                        <div
                            className="description"
                            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                        />

                        <MetaInfo
                            saleDate={saleDate}
                            prices={prices}
                        />

                        <Tabs
                            bioHtml={contributor.bio || '<p>No bio available.</p>'}
                            reviews={reviews}
                            retailers={retailers}
                        />
                    </section>
                </div>
            </div>
        </main>
    );
}
