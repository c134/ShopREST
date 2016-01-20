<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Category;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Category::orderBy('category_name', $request->sorting)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Category::where('category_name', '=', $request->category_name)->count() > 0) {
            return response()->json(['error' => "category already exist"], 422);
        } else {
            $category = new Category();
            $category->category_name = $request->category_name;
            $category->category_description = $request->category_description;
            $category->save();
            return response()->json(['success' => "category created", 'created_category' => $category], 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->category_name = $request->name;
            $category->category_description = $request->description;
            $category->save();
            return response()->json(['success' => "category updated", 'updated_category' => $category], 200);
        } else {
            return response()->json(['error' => "category with given name not found"], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::destroy($id);
        return response()->json(['success' => "category deleted"], 200);
    }
}