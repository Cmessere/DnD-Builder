import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#cb2d3e',
        },
        secondary: {
            main: '#ef473a',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});
