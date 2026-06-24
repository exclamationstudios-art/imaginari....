import React from 'react';
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export function AddProductForm() {
  async function handleNewProductSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      imageFile: { files: FileList };
      name: { value: string };
      price: { value: string };
    };

    const file = target.imageFile.files[0];
    const productName = target.name.value;
    const productPrice = parseFloat(target.price.value);

    if (!file) {
      alert('Please select an image first.');
      return;
    }

    try {
      // 1. Shoot the image asset straight up into AWS S3 storage
      const storageResult = await uploadData({
        path: `products/${Date.now()}-${file.name}`,
        data: file,
        options: {
          contentType: file.type
        }
      }).result;

      // Build the public URL string route
      const finalImageUrl = `https://maginari-ecommerce-items.s3.us-east-2.amazonaws.com/${storageResult.path}`;

      // 2. Shoot the document profile record up to your DynamoDB table
      await client.models.Product.create({
        name: productName,
        price: productPrice,
        imageUrl: finalImageUrl
      });

      alert("Product published instantly!");
      // Optionally reset the form here
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Upload process stalled out:", error);
      alert("Error uploading product. Check the console for details.");
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-neutral-900 rounded-xl border border-neutral-800">
      <h2 className="text-xl font-bold text-white mb-6">Add New Product</h2>
      
      <form onSubmit={handleNewProductSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1">Product Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neutral-500"
            placeholder="e.g. Classic T-Shirt"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1">Price (£)</label>
          <input 
            type="number" 
            step="0.01" 
            name="price" 
            required 
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neutral-500"
            placeholder="e.g. 29.99"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1">Product Image</label>
          <input 
            type="file" 
            name="imageFile" 
            accept="image/*"
            required 
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neutral-500"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-white text-black font-bold rounded-lg px-4 py-3 hover:bg-neutral-200 transition-colors"
        >
          Publish Product
        </button>
      </form>
    </div>
  );
}
