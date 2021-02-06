import _ from 'lodash'
import React from "react";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const getImage = (id, array ) => {
  const image = _.find(array, 'sys.id', id)
  return image
}

const ContentfulRichText = function(content){
  const arrayImages = _.get(content, 'content.links.assets.block')
  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { id, linkType, type } = node.data.target.sys;

        switch (linkType) {
          case 'Asset':
            const image = getImage(id, arrayImages)
            return <div className="image-container-embedded">
                <img
                title={ image.title ? image.title : null}
                alt={image.description ?  image.description : null}
                src={image.url}
              />
              </div>
          default:
            return ''
        }
        
      },
    }
  }
  return documentToReactComponents(content.content.json,richTextOptions )
}

export default ContentfulRichText