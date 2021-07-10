import ContentLoader from "react-content-loader"
import './App.css';

const FakeBlock = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={100}
    viewBox="0 0 300 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="7" ry="7" width="300" height="80" />
  </ContentLoader>
)

export default FakeBlock;

