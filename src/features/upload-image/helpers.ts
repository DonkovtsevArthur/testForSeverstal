import { Image as ImageJS } from "image-js";

const getParamsImage = async (upload: ProgressEvent<FileReader>) => {
  const { result } = upload.target || {};
  if (result && typeof result === "string") {
    try {
      const params = await ImageJS.load(result);
      return { result, ...params };
    } catch (error) {
      console.error("getParamsImage -> error", error);
    }
  }
};

const getImageFileReader = (file: any, func = (e: any) => {}) => {
  if (file) {
    try {
      const reader = new FileReader();
      reader.onload = async (upload) => {
        func(upload);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("getImageFileReader -> error", error);
    }
  }
};

export { getParamsImage, getImageFileReader };
