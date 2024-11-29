import React from 'react';
import './BrandMarquee.css';

const brands = [
    "Nike", "Adidas", "Apple", "Google", "Microsoft",
    "Goldman Sachs", "JP Morgan", "Coca-Cola", "Samsung",
    "Sony", "H&M", "Zara", "Walmart", "Amazon", "IBM",
    "Tesla", "Airbnb", "Spotify", "Disney", "Starbucks"
];

const BrandMarquee: React.FC = () => {
    return (
        <div className="marquee-wrapper">
            {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`marquee-container ${i % 2 === 0 ? 'marquee-normal' : 'marquee-reverse'}`}>
                    <div className="marquee">
                        {[...brands, ...brands].map((brand, index) => (
                            <div key={index} className="brand">
                                <span className={`brand-name ${index % 2 === 0 ? 'font1' : 'font2'}`}>
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BrandMarquee;
