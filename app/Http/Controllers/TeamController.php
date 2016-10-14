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
            ['img'=>'hariom', 'member_name'=>'Hariom Sharma', 'member_title'=>'Web Developer', 'fb_link'=>'https://www.facebook.com/harry2510'],
            ['img'=>'manohar', 'member_name'=>'Manohar Lakkoju', 'member_title'=>'Web Developer', 'fb_link'=>'https://www.facebook.com/manohar.lakkoju.9'],
            ['img'=>'yaman', 'member_name'=>'Yaman Chourey', 'member_title'=>'Designer', 'fb_link'=>'https://www.facebook.com/yaman.chourey.9'],
            ['img'=>'bharath', 'member_name'=>'Bharath Gundala', 'member_title'=>'President', 'fb_link'=>'https://www.facebook.com/bharath2280'],
            ['img'=>'akshay', 'member_name'=>'Akshay Gupta', 'member_title'=>'Sports Secretary', 'fb_link'=>'https://www.facebook.com/profile.php?id=1230531308'],
            ['img'=>'kartik', 'member_name'=>'Kartik Akojwar', 'member_title'=>'Vice President', 'fb_link'=>'https://www.facebook.com/scollar.sam'],
            ['img'=>'rudrapriya', 'member_name'=>'Rudrapriya Yadav', 'member_title'=>'Council Member', 'fb_link'=>'https://www.facebook.com/rudrapriya.yadav.9'],
            ['img'=>'lahari', 'member_name'=>'Lahari Yaddanapudi', 'member_title'=>'Council Member', 'fb_link'=>'https://www.facebook.com/lahari.yaddanapudi'],
            ['img'=>'vikash', 'member_name'=>'Vikash Waibhav', 'member_title'=>'Technical Secretary', 'fb_link'=>'https://www.facebook.com/vikash.waibhav'],
            ['img'=>'atul', 'member_name'=>'Atul Goyal', 'member_title'=>'Hindi Literary Secretary', 'fb_link'=>'https://www.facebook.com/profile.php?id=100007683469394'],
            ['img'=>'darsh', 'member_name'=>'Darsh Tiwari', 'member_title'=>'General Secretary', 'fb_link'=>'https://www.facebook.com/manit.darsh'],
            ['img'=>'harshini', 'member_name'=>'Harshini', 'member_title'=>'English Literary Secretary', 'fb_link'=>'https://www.facebook.com/sriharshini.harshu'],
            ['img'=>'mayur', 'member_name'=>'Mayur Meshram', 'member_title'=>'Cultural Secretary', 'fb_link'=>'https://www.facebook.com/mayur.meshram.754']
        ]);
    }
}
