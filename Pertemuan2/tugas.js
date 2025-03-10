/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Download selesai");
      resolve(`Hasil Download ${result}`);
    }, 3000);
  });
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = async (callShowDownload) => {
  console.log("Memulai download..");

  const download = "Feast - Arteri (Official Music Video).mp3";
  console.log(await callShowDownload(download));
};

download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
