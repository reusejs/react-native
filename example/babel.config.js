const path = require('path');

module.exports = (api) => {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        // For development, we want to alias the library to the source
                        'reusable-react-native-components/components': path.join(
                            __dirname,
                            '..',
                            'src/components/index.ts',
                        ),
                        'reusable-react-native-components/primitives': path.join(
                            __dirname,
                            '..',
                            'src/primitives/index.ts',
                        ),
                        'reusable-react-native-components/types': path.join(
                            __dirname,
                            '..',
                            'src/types/index.ts',
                        ),
                        'reusable-react-native-components/utils': path.join(
                            __dirname,
                            '..',
                            'src/utils/index.ts',
                        ),
                    },
                },
            ],
        ],
    };
};
