import styled from "styled-components";
import theme from "./theme";

const Container = styled.div`
	max-width: 90%;
	margin: 0 auto;

	@media (min-width: 1200px) {
		max-width: ${ theme.containerWidth };
	}
`

export default Container;