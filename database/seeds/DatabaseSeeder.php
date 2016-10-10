<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//         $this->call(UserTableSeeder::class);
        $user = new User;
        $user->name = "admin";
        $user->email = "admin@technosearch.in";
        $user->password = bcrypt("godmode111");
        $user->save();
    }
}
