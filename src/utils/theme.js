
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        customGreen: {
            500: '#30D158',
        },
    },
    components: {
        Switch: {
            baseStyle: {
                outline:'none',
                track: {
                    _checked: {
                        bg: 'customGreen.500',
                        outline:'none',
                    },
                },
            },
        },
    },
});

export default theme;
