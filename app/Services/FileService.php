<?php

namespace App\Services;

use Storage;

class FileService
{

    public static function upload($file, $path): string
    {
        if ($file) {

            $filename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);

            $extension = $file->getClientOriginalExtension();

            $url = Storage::url($file->storeAs($path, $filename . '_' . time() . "." . $extension, 'public'));

            return $url;
        }

        return "";
    }
}
