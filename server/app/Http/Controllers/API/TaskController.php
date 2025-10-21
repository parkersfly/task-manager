<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\Models\Task;


class TaskController extends Controller
{
    // Cria uma nova tarefa
    public function store(TaskRequest $request)
    {
        $task = Task::create($request->validated());
        return response()->json($task, 201);
    }

    // Atualiza uma tarefa (status, título, descrição)
    public function update(TaskRequest $request, $id)
    {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }
        $task->update($request->validated());
        return response()->json($task);
    }

    // Remove uma tarefa
    public function destroy($id)
    {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }
        $task->delete();
        return response()->json(['message' => 'Tarefa removida com sucesso']);
    }
}
