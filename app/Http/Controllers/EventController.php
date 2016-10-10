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


    public function addEvent(Request $request){
        $data = $request->all();

        $data['problem_statement'] = isset($data['problem_statement']) ? 1 : 0;

        $event = new Event;

        $event->name = $data['name'];
        $event->slug = str_slug($data['name']);
        $event->category = $data['category'];
        $event->description = $data['description'];
        $event->problem_statement = $data['problem_statement'];
        $event->name1 = $data['name1'];
        $event->email1 = $data['email1'];
        $event->contact1 = $data['contact1'];
        $event->name2 = $data['name2'];
        $event->email2 = $data['email2'];
        $event->contact2 = $data['contact2'];
        $event->faculty = $data['faculty'];

        $event->save();
    }
}
