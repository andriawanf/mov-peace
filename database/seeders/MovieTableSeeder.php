<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'Spiderman',
                'slug' => 'spiderman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=tCuRbIInrOo',
                'thumbnail' => 'https://images.bisnis-cdn.com/thumb/posts/2019/06/29/939271/spiderman1.jpg?w=600&h=400',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Spiderman',
                'slug' => 'spiderman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=tCuRbIInrOo',
                'thumbnail' => 'https://images.bisnis-cdn.com/thumb/posts/2019/06/29/939271/spiderman1.jpg?w=600&h=400',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'Spiderman',
                'slug' => 'spiderman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=tCuRbIInrOo',
                'thumbnail' => 'https://images.bisnis-cdn.com/thumb/posts/2019/06/29/939271/spiderman1.jpg?w=600&h=400',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movie);
    }
}
