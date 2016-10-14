<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class AdminController extends Controller
{
    public function index(){
        return view('addEvent');
    }

    public function saveData(Request $request){
    	$data = $request->all();
    	DB::table('payment')->insert(['data'=>json_encode($data)]);
    	return response()->success(true);
    }

}
