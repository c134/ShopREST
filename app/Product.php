<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

    public function category()
    {
        $this->belongsToMany('App\Category');
    }
}
