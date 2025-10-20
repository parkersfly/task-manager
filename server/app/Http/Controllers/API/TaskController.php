<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // Cria uma nova tarefa
    public function store(TaskRequest $request)
    {
        $task = Task::create($request->validated());
        return response()->json($task, 201);
    }
}
