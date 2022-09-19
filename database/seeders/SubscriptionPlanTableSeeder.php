<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscripstionPlans = [

            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_month' => 3,
                'features' => json_encode(['feature1', 'feature2']),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_month' => 6,
                'features' => json_encode(['feature1', 'feature2', 'feature4', 'feature3']),
            ]
        ];

        SubscriptionPlan::insert($subscripstionPlans);
    }
}
