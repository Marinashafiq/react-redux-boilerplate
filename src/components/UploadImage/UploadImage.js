import React, { useState } from "react";
import { injectIntl } from "react-intl";
import "./UploadImage.scss";
import img from "../../assets/images/placeholder.jpg";
import { useEffect } from "react";
const UploadImage = ({ imageSrc, onUploadImage, intl, imageSize, ratio }) => {
  const [image, setImage] = useState(img);
  const [imageError, setImageError] = useState(false);
  const [imageTypeError, setImageTypeError] = useState(false);
  const [heightWidthError, setHeightWidthError] = useState(false);
  const { messages } = intl;

  useEffect(() => {
    if (imageSrc && imageSrc.startsWith("http")) {
      setImage(imageSrc);
    }
    if (!imageSrc) {
      setImage(img);
    }
  }, [imageSrc]);

  const previewLogo = (e) => {
    let imageSize = e.target.files[0].size / 1024 / 1024;
    let imageType = e.target.files[0].type;
    const extension = imageType === "image/png" ? "png" : "jpeg";
    if (imageSize > 2) {
      setImage(null);
      setImageError(true);
      handleUploadChildImage(true, false, null);
      return;
    } else if (imageType !== "image/png" && imageType !== "image/jpeg") {
      setImage(null);
      setImageTypeError(true);
      handleUploadChildImage(false, true, null);
      return;
    } else {
      setImageError(false);
      setImageTypeError(false);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (_event) => {
        let img = new Image();
        img.src = _event.target.result;
        img.onload = function () {
          // if (this.width !== this.height && ratio) {
          //   setHeightWidthError(true);
          //   setImage(null);
          //   handleUploadChildImage(false, false, null);
          // } else {
          //   setHeightWidthError(false);
          //   let resultImage = reader.result;
          //   setImage(resultImage);
          //   handleUploadChildImage(false, false, resultImage, extension);
          // }
            setHeightWidthError(false);
            let resultImage = reader.result;
            setImage(resultImage);
            handleUploadChildImage(false, false, resultImage, extension);
        };
      };
    }
  };

  const handleUploadChildImage = (error, errorType, image, extension) => {
    onUploadImage({
      image,
      imageError: error,
      imageTypeError: errorType,
      extension,
    });
  };

  return (
    <div className="company__logo mb-2 mt-5 text-center">
      <div
        className={
          ratio
            ? "uploade-image__img uploade-image__img--lg mb-2"
            : "uploade-image__img uploade-image__img--triangle mb-2"
        }
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: ratio ? imageSize : "contain",
        }}
      ></div>
      <div>
        <button
          type="button"
          className="btn btn-defualt--small uploade-image__btn"
        >
          {messages.buttons.uploadImage}
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => previewLogo(e)}
          />
        </button>
      </div>
      {heightWidthError && (
        <small className="text-danger">{messages.errors.imageRatio}</small>
      )}
    </div>
  );
};

const UploadImageComponent = injectIntl(UploadImage);

export default UploadImageComponent;
