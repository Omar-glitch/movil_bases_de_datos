import 'dotenv/config'

export default {
  "expo": {
    "name": "proyecto",
    "slug": "proyecto",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#000000"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "androidStatusBar": {
      "backgroundColor": "#00000000",
      "barStyle" : 'light-content'
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      imagesUrl: process.env.IMAGES_URL,
      serverUrl: process.env.SERVER_URL,
    }
  }
}
