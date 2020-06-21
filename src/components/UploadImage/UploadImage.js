import React, { useState } from "react";
import { injectIntl } from "react-intl";
import "./UploadImage.scss";
import { useEffect } from "react";
const UploadImage = ({ onUploadImage }) => {
  const [image, setImage] = useState("");
  const [fileName, setName] = useState("");
  const previewLogo = (e) => {
    const imageSize = e.target.files[0] && e.target.files[0].size / 1024 / 1024;
    const imageType = e.target.files[0] && e.target.files[0].type;
    const fileNameArr = e.target.value.split("\\");
    const fileName = fileNameArr[fileNameArr.length - 1];
    setName(fileName);
    const extension = fileName.split(".").pop();
    if (imageSize > 2) {
      setName(null);
      return;
    } else if (imageType !== "image/png" && imageType !== "image/jpeg") {
      setName(null);
      return;
    } else {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (_event) => {
        let img = new Image();
        img.src = _event.target.result;
        img.onload = function () {
          let resultImage = reader.result;
          setImage(resultImage);
          onUploadImage({
            image: resultImage,
            fileName,
            extension,
          });
        };
      };
    }
  };

  return (
    <div className="my-3 d-flex">
      <div
        className={
          "uploade-image__img uploade-image__img--lg d-flex align-items-center justify-content-center"
        }
      >
        {fileName}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-defualt--small uploade-image__btn"
        >
          {"Upload Image"}
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => previewLogo(e)}
          />
        </button>
      </div>
    </div>
  );
};

const UploadImageComponent = injectIntl(UploadImage);

export default UploadImageComponent;
