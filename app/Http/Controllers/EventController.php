<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Event;

class EventController extends Controller
{
    //
    public function getEvent($slug)
    {
        $event = Event::where('slug',$slug)->first();
        return response()->success($event);
    }
    public function getEvents()
    {
        $events = Event::all();
        return response()->success($events);
    }
}
