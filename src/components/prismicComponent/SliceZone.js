import React from 'react'
import FullWidthImage from './FullWidthImage'
import ImageGallery from './ImageGallery'
import ImageHighlight from './ImageHighlight'
import Quote from './Quote'
import Text from './Text'

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    full_width_image: FullWidthImage,
    image_gallery: ImageGallery,
    image_highlight: ImageHighlight,
    quote: Quote,
    text: Text,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <>
        <p>{slice.slice_type}</p>
        <SliceComponent slice={slice} key={`slice-${index}`} />
      </>
    }
    return null
  })

  return <main className="container">{sliceZoneContent}</main>
}

export default SliceZone