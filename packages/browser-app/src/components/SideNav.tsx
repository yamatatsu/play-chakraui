import { Button, Text, VStack } from "@chakra-ui/react";

export default function SideNav() {
	return (
		<VStack
			as="nav"
			spacing={1}
			py={4}
			px={4}
			height="100%"
			borderRightWidth={1}
		>
			<NavItem href="/menu1" label="menu1" />
			<NavItem href="/menu2" label="menu2" />
			<NavItem href="/menu3" label="menu3" />
			<NavItem href="/menu4" label="menu4" />
		</VStack>
	);
}

function NavItem(props: { label: string; href: string }) {
	return (
		<Button as="a" href={props.href} variant="ghost" colorScheme="teal">
			<Text fontSize="xl">{props.label}</Text>
		</Button>
	);
}
