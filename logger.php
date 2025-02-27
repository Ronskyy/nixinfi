<?php
// File tujuan untuk menyimpan log
$file = "result.txt";

// Ambil data dari request
$data = file_get_contents("php://input");

// Tambahkan timestamp
$log = date("Y-m-d H:i:s") . " - " . $data . "\n";

// Simpan ke file result.txt
file_put_contents($file, $log, FILE_APPEND | LOCK_EX);

// Beri respon sukses
http_response_code(200);
echo "Data logged successfully.";
?>
