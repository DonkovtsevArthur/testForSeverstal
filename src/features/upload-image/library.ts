import { Image as ImageJS } from "image-js";

const IS_URL_IMAGE = /(http(s?):)([/|.|\w|\s|-]|)*\.(?:png)/gi;

export const checkIsImage = (url: string) => {
  return IS_URL_IMAGE.test(url);
};

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

const getImageFileReader = (file: any, callback = (e: any) => {}) => {
  if (file) {
    try {
      const reader = new FileReader();
      reader.onload = async (upload) => {
        callback(upload);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("getImageFileReader -> error", error);
    }
  }
};

export { getParamsImage, getImageFileReader };
