import { Image as ImageJS } from "image-js";

const getParamsImage = async (upload: ProgressEvent<FileReader>) => {
  // @ts-ignore
  const result = upload.target.result;
  if (result && typeof result === "string") {
    const params = await ImageJS.load(result);
    return { result, ...params };
  }
};

const getImageFileReader = (file: any, func = (e: any) => {}) => {
  if (file) {
    const reader = new FileReader();
    reader.onload = async (upload) => {
      func(upload);
    };
    reader.readAsDataURL(file);
  }
};
export { getParamsImage, getImageFileReader };
