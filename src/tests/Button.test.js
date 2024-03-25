import renderer from "react-test-renderer";
import Button from "../components/Button";

it("class changes secondary to primary", () => {
  const secondary = renderer.create(<Button>Cancel</Button>);
  let tree = secondary.toJSON();
  expect(tree).toMatchSnapshot();

  const primary = renderer.create(<Button primary>Submit</Button>);
  // re-rendering
  tree = primary.toJSON();
  expect(tree).toMatchSnapshot();
});
