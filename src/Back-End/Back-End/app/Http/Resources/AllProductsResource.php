<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AllProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'product_id' => $this->id,
            'product_name' => $this->title,
            'category_id' => $this->category->id,
            'category_name' => $this->category->title,
            'description' => $this->description,
            'discount' => $this->discount,
            'stock' => $this->stock,
            'price' => $this->price,
            'image' => json_decode($this->image),
        ];
    }
}