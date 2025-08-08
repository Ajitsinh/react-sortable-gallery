import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import SortableGallery from "./components/SortableGallery";
import photoSet from "./components/photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
//import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
//import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export default function App() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState(photoSet);

  return (
    <>
      <RowsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom]}
      />

      <SortableGallery
        gallery={RowsPhotoAlbum}
        spacing={16}
        padding={10}
        photos={photos}
        movePhoto={(oldIndex, newIndex) => setPhotos(arrayMove(photos, oldIndex, newIndex))}
      />
  );
}
