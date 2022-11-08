export function downloadBase64File(base64Data, filename) {
  let element = document.createElement('a')
  element.setAttribute('href', base64Data)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// Convert a Base64-encoded string to a File object
export function base64StringtoFile(base64String, filename) {
  let arr = base64String.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring(
    'data:image/'.length,
    base64Data.indexOf(';base64')
  )
}
