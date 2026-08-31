"use client";

import { useEffect, useMemo, useState } from "react";

const products = [
  { id: 1, name: "Everyday Tee", category: "Apparel", price: 590, art: "tee" },
  { id: 2, name: "Market Day Tote", category: "Everyday", price: 420, art: "tote" },
  { id: 3, name: "Sunset Cap", category: "Apparel", price: 490, art: "cap" },
  { id: 4, name: "City Bottle", category: "Everyday", price: 350, art: "bottle" },
];

const walkthroughSteps = [
  { label: "01 · Discover", title: "Find the right product", text: "Browse a focused catalogue and filter products without losing context." },
  { label: "02 · Decide", title: "See what matters", text: "Open clear product details, pricing, and the next action in one place." },
  { label: "03 · Checkout", title: "Move forward with confidence", text: "Keep the cart visible and make the path to checkout feel predictable." },
];

export function SiamCheerfulDemo() {
  const [category, setCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);

  const visibleProducts = useMemo(
    () => category === "All" ? products : products.filter((product) => product.category === category),
    [category],
  );

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => setStep((current) => (current + 1) % walkthroughSteps.length), 2200);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="demo-section" id="project-demo" data-testid="project-demo">
      <div className="demo-heading">
        <div>
          <p>INTERACTIVE PROJECT PREVIEW</p>
          <h3>Try the core shopping flow.</h3>
        </div>
        <span className="concept-badge">Concept build · no checkout</span>
      </div>

      <div className="store-demo">
        <div className="store-nav">
          <strong>SIAM<span>+</span></strong>
          <div className="store-categories" aria-label="Product categories">
            {["All", "Apparel", "Everyday"].map((item) => (
              <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <button className="cart-button" aria-label={`Cart with ${cartCount} items`}>CART <span>{String(cartCount).padStart(2, "0")}</span></button>
        </div>

        <div className="store-content">
          <div className="store-products">
            <div className="store-title"><span>NEW / 2026</span><h4>Small joys,<br />made useful.</h4></div>
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <button className={`product-card ${selectedProduct.id === product.id ? "selected" : ""}`} key={product.id} onClick={() => setSelectedProduct(product)} aria-label={`View ${product.name}`}>
                  <span className={`product-art product-${product.art}`} aria-hidden="true"><i /></span>
                  <span className="product-info"><strong>{product.name}</strong><small>THB {product.price}</small></span>
                </button>
              ))}
            </div>
          </div>

          <aside className="quick-view" aria-live="polite">
            <span className="quick-label">QUICK VIEW</span>
            <div className={`quick-art product-${selectedProduct.art}`} aria-hidden="true"><i /></div>
            <div className="quick-copy">
              <p>{selectedProduct.category}</p>
              <h4>{selectedProduct.name}</h4>
              <strong>THB {selectedProduct.price}</strong>
              <button onClick={() => setCartCount((count) => count + 1)}>Add to cart <span>+</span></button>
            </div>
          </aside>
        </div>
      </div>

      <div className="walkthrough" aria-label="Project walkthrough player">
        <div className="walkthrough-controls">
          <button onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}>
            <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span> {isPlaying ? "Pause walkthrough" : "Play walkthrough"}
          </button>
          <div>{walkthroughSteps.map((_, index) => <button aria-label={`Show walkthrough step ${index + 1}`} className={step === index ? "active" : ""} key={index} onClick={() => { setStep(index); setIsPlaying(false); }} />)}</div>
        </div>
        <div className="walkthrough-screen">
          <span>{walkthroughSteps[step].label}</span>
          <h4>{walkthroughSteps[step].title}</h4>
          <p>{walkthroughSteps[step].text}</p>
          <i aria-hidden="true">{step + 1}</i>
        </div>
      </div>
    </div>
  );
}
