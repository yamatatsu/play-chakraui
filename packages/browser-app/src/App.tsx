import {
	Box,
	Button,
	Card,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import GlobalHeader from "./components/GlobalHeader.tsx";
import SideNav from "./components/SideNav.tsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<GlobalHeader />
			<Flex>
				<Box>
					<SideNav />
				</Box>
				<Container maxW="2xl">
					<Box>
						<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
							<Image src={viteLogo} className="logo" alt="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank" rel="noreferrer">
							<Image src={reactLogo} className="logo react" alt="React logo" />
						</a>
					</Box>
					<Heading as="h1">Vite + React</Heading>
					<Card>
						<Button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</Button>
						<Text>
							Edit <code>src/App.tsx</code> and save to test HMR
						</Text>
					</Card>
					<Text>Click on the Vite and React logos to learn more</Text>
				</Container>
			</Flex>
		</>
	);
}

export default App;
