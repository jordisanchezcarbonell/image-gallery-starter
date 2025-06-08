function forceDownload(blobUrl: string, filename: string) {
  const a = document.createElement("a");
  a.style.display = "none";
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(blobUrl);
}

export default async function downloadPhoto(url: string, filename?: string) {
  try {
    if (!filename) {
      filename = url.split("/").pop()?.split("?")[0] || "download";
    }

    const response = await fetch(url, {
      headers: new Headers({
        Origin: location.origin,
      }),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Download failed with status ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    forceDownload(blobUrl, filename);
  } catch (e) {
    console.error("Error downloading media:", e);
    alert("Hubo un error al descargar el archivo.");
  }
}
