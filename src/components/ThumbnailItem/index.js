import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, onImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = galleryDetails
  const icon = isActive ? `active` : `thumbnail`

  const onGalleryImage = () => {
    onImage(id)
  }

  return (
    <li className="thumbnails">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onGalleryImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className={icon} />
      </button>
    </li>
  )
}
export default ThumbnailItem
