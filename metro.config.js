const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;

const config = {
  transformer: {
    // Этот параметр позволяет использовать SVG как компоненты
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Мы говорим Metro: "SVG — это код, а всё остальное (PNG/JPG) — это картинки"
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);