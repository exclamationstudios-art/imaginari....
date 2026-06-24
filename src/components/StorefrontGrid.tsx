import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export default function StorefrontGrid() {
  const [products, setProducts] = useState<Schema['Product']['type'][]>([]);

  useEffect(() => {
    // Open a persistent websocket listener mapping to the database model
    const sub = client.models.Product.observeQuery().subscribe({
      next: ({ items }) => {
        setProducts(items); // Re-renders view layout seamlessly as changes drop
      },
      error: (err) => console.error("Pipeline breakdown:", err)
    });

    return () => sub.unsubscribe(); // Terminate pipeline safely on component unmount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors">
          <div className="aspect-square bg-neutral-800 relative">
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-600">
                No Image
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-white text-lg truncate">{item.name}</h3>
            <p className="text-neutral-400 mt-1">£{item.price?.toFixed(2)}</p>
          </div>
        </div>
      ))}
      
      {products.length === 0 && (
        <div className="col-span-full py-12 text-center text-neutral-500">
          No products found. Add one using the AddProductForm!
        </div>
      )}
    </div>
  );
}
