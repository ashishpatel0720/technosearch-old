<?php

use Illuminate\Database\Seeder;
use App\Event;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);

        $event = new Event;
        $event->name = 'robo fifa';
        $event->slug = str_slug($event->name);
        $event->category = 'Sport';
        $event->description = 'dlgjksdjg kjgdksd gklsj gkljsdgksdjg ldsjgkdsjg jjglsdgjdsg';
        $event->name1 = 'Kartik';
        $event->email1 = 'abc@abc.com';
        $event->contact1 = '947593459';
        $event->name2 = 'dlskfjds';
        $event->email2 = 'sljf@gajg.com';
        $event->contact2 = '43897534775';
        $event->faculty = 'dgjlksdj';

        $event->save();

    }
}
