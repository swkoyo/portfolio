import { Box, Text } from '@mantine/core';

export default function Title({
	value,
	hideUnderline,
	size = '3xl'
}: {
	value: string;
	hideUnderline?: boolean;
	size?: string;
}) {
	return (
		<Box pos='relative' w='fit-content'>
			<Text size={size} weight='bold'>
				{value}
			</Text>
			{!hideUnderline && (
				<Box
					w='60%'
					h='0.4rem'
					pos='absolute'
					bottom={-4}
					right={-20}
					sx={(theme) => ({
						backgroundColor: theme.colors.teal[4]
					})}
				/>
			)}
		</Box>
	);
}
