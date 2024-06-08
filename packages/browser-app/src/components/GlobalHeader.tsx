import { Flex, HStack, Image, LinkOverlay, Text } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";

export default function GlobalHeader() {
	return (
		<Flex position="sticky" shadow="md" p={3}>
			<LinkOverlay href="/">
				<HStack>
					<Image src={reactLogo} width={10} />
					<Text fontSize="3xl" fontWeight="bold">
						ChakraUI Training
					</Text>
				</HStack>
			</LinkOverlay>
		</Flex>
	);
}
