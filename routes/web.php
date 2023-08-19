    <?php

    use App\Http\Controllers\ProfileController;
    use Illuminate\Foundation\Application;
    use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });


    Route::middleware(['auth'])->group(function () {

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



        Route::resource('dashboard/areas', \App\Http\Controllers\Dashboard\AreaController::class)->names('dashboard.areas');


        Route::get('dashboard', [\App\Http\Controllers\Dashboard\HomeController::class, 'index'])->name('dashboard');

        Route::post('dashboard/contratos/preview', [\App\Http\Controllers\Dashboard\ContratoController::class, 'preview'])->name('contratos.preview');

        Route::resource('dashboard/contratos', \App\Http\Controllers\Dashboard\ContratoController::class)->names('dashboard.contratos');
        Route::resource('dashboard/users', \App\Http\Controllers\Dashboard\UserController::class)->names('users');

    });

    require __DIR__ . '/auth.php';
