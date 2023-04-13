import { Box, Text } from '@mantine/core';

export default function Title({
	value,
	hideUnderline
}: {
	value: string;
	hideUnderline?: boolean;
}) {
	return (
		<Box pos='relative' w='fit-content'>
			<Text size='2xl' weight='bold'>
				{value}
			</Text>
			{!hideUnderline && (
				<Box
					w='60%'
					h='0.4rem'
					pos='absolute'
					bottom={-4}
					right={-20}
					sx={(theme) => ({ backgroundColor: theme.colors.teal })}
				/>
			)}
		</Box>
	);
}
