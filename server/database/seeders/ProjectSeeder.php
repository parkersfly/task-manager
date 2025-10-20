<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            ['name' => 'Projeto 1'],
            ['name' => 'Projeto 2'],
            ['name' => 'Projeto 3'],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
