<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;


class ProjectController extends Controller
{
    // Lista todos os projetos
    public function index()
    {
         $projects = Project::with('tasks')->get();
         return response()->json($projects);
    }

    // Cria um novo projeto
    public function store(ProjectRequest $request)
    {
        $project = Project::create($request->validated());
        return response()->json($project, 201);
    }
}
