const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.arromero.stickersmashscratch.dev';
  }

  if (IS_PREVIEW) {
    return 'com.arromero.stickersmashscratch.preview';
  }

  return 'com.arromero.stickersmashscratch';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }

  return 'StickerSmash: Emoji Stickers';
};

export default {
  name: getAppName(),
  "expo": {
    "name": "StickerSmash",
    "slug": "sticker-smash-scratch",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#25292e"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.arromero.stickersmashscratch"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.arromero.stickersmashscratch"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "bb9c95ed-7316-410f-867f-073f052ff7c4"
      }
    },
    "owner": "arromero"
  }
}
