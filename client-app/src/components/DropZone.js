import React, { useState } from "react";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";

function DropZone() {
  const [files, setFiles] = useState([]);

  const [imageSrc, setImageSrc] = useState(undefined);

  const maxFiles = 1;

  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    const validFiles = incommingFiles.filter((file) => file.valid).slice(-1);
    setFiles(validFiles);
  };

  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };

  return (
    <Dropzone
      style={{
        width: "20%",
        margin: "0 auto",
        fontSize: "0.7rem",
        color: "#000",
        backgroundColor: "rgba(255,255,255,0.3)",
      }}
      onChange={updateFiles}
      minHeight="200px"
      value={files}
      //maxFiles={maxFiles}
      header={false}
      footer={false}
      label="Arrastra una imagen"
      accept="image/*"
      // uploadingMessage={"Uploading..."}
      url="http://localhost:5000"
      //of course this url doens´t work, is only to make upload button visible
      uploadOnDrop
      //clickable={false}
      //fakeUploading
      localization={"ES-es"}
      disableScroll
    >
      {files.map((file) => (
        <FileItem
          {...file}
          key={file.id}
          onDelete={onDelete}
          onSee={handleSee}
          localization={"ES-es"}
          resultOnTooltip
          preview
          info
          hd
        />
      ))}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      />
    </Dropzone>
  );
}

export default DropZone;
