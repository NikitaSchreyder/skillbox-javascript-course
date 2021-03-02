import ImagePreview from '../imagePreview/imagePreview';

import './imagesRoll.scss'

function ImagesRoll({imagesData, loadImages}) {
  const images = imagesData.slice(0, imagesData.length).map(item => <ImagePreview key={item.id + Math.random()} image={item}/>)
  return (
    <section className="images-roll">
      <div className="images-roll__content">
        {
          [...images]
        }
      </div>
      
      <button className="images-roll__load-more" onClick={loadImages}>Ещё публикации</button>
    </section>
  )
}

export default ImagesRoll;