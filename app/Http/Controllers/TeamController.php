<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class TeamController extends Controller
{
    //
    public function getTeam()
    {
        return response()->success([
            ['img_src'=>'x', 'member_name'=>'Hariom Sharma', 'member_title'=>'Web Developer', 'fb_link'=>'http://www.facebook.com'],
            ['img_src'=>'x', 'member_name'=>'Manohar Lakkoju', 'member_title'=>'Web Developer', 'fb_link'=>'http://www.facebook.com'],
            ['img_src'=>'x', 'member_name'=>'Kartik Akojwar', 'member_title'=>'Vice President', 'fb_link'=>'http://www.facebook.com'],
            ['img_src'=>'x', 'member_name'=>'Akshay Gupta', 'member_title'=>'Sports Secretary', 'fb_link'=>'http://www.facebook.com'],
            ['img_src'=>'x', 'member_name'=>'Bharath Gundala', 'member_title'=>'President', 'fb_link'=>'http://www.facebook.com'],
        ]);
    }
}
