export default function timeStampToLocaleString(
  s: string | number | Date
): string {
  // 1. Buat objek Date dari input.
  //    Objek Date ini secara internal menyimpan waktu dalam UTC,
  //    tetapi metode pemformatan akan mengonversinya ke zona waktu lokal klien.
  const createdAtDate = new Date(s || new Date());

  // 2. Buat opsi format tanggal yang Anda inginkan (Jan, 19, 2020)
  const options: Intl.DateTimeFormatOptions = {
    month: "short",   // 'Jan', 'Feb', dst.
    day: "numeric",   // '1', '19', dst.
    year: "numeric",  // '2020', dst.
    // Anda TIDAK perlu menambahkan timeZone di sini jika ingin default ke lokal klien.
    // Jika Anda ingin zona waktu spesifik (misal: 'Asia/Jakarta'), baru tambahkan:
    // timeZone: 'Asia/Jakarta',
  };

  // 3. Format objek Date secara langsung menggunakan Intl.DateTimeFormat.
  //    Secara default, ini akan menggunakan zona waktu lokal browser klien.
  //    Locale 'en-US' akan memastikan urutan Bulan, Hari, Tahun.
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    createdAtDate // <-- Langsung gunakan objek Date di sini
  );

  return formattedDate;
}