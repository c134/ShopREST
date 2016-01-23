<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Product;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Product::with('category')->orderBy('product_name', $request->sorting)->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Product::where('product_name', '=', $request->product_name)->count() > 0) {
            return response()->json(['error' => "product already exist"], 422);
        } else {
            $product = new Product();
            $product->product_name = $request->product_name;
            $product->product_description = $request->product_description;
            $product->category_id = $request->product_category;
            $product->product_price = $request->product_price;
            $product->save();
            return response()->json(['success' => "product created",
                'created_product' => $product,
                'category_name' => $request->product_category_name,
                'category_id' => $request->product_category
            ], 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->product_name = $request->name;
            $product->product_description = $request->description;
            $product->category_id = $request->category['id'];
            $product->product_price = $request->price;
            $product->save();
            return response()->json(['success' => "product updated"], 200);
        } else {
            return response()->json(['error' => "product with given name not found"], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::destroy($id);
        return response()->json(['success' => "product deleted"], 200);
    }
}
