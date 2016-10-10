<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Contact;

class MainController extends Controller
{
    public function saveMessage(Request $request){
        $data = $request->all();
        $contact = new Contact;
        $contact->name = $data['name'];
        $contact->email = $data['email'];
        $contact->contact = $data['contact'];
        $contact->message = $data['message'];
        $contact->save();
        return response()->success(true);

    }
}
