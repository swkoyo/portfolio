import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#57b3b0'
		},
		secondary: {
			main: '#F48C06'
		}
	},
	typography: {
		fontFamily: 'Montserrat'
	}
});

export default theme;
