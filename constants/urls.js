import Constants from "expo-constants";

const urls = {
  IMAGE_URL : Constants.manifest?.extra?.imagesUrl,
  SERVER_URL : Constants.manifest?.extra?.serverUrl,
}

export default urls;