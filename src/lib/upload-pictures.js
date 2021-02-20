const uploadPictures = () => new Promise((resolve, reject) => {
  const { setImagesCallback, upload } = window
  if (setImagesCallback && upload) {
    setImagesCallback((err, pictures) => {
      if (!err) {
        resolve(pictures)
      } else {
        reject(err)
      }
    })
    return setTimeout(upload, 100)
  }
  reject(new Error('No global `upload` and `setImagesCallback` functions'))
})

export { uploadPictures }

export default uploadPictures
