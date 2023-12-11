import Search from "./Search";
import Body from "./Body";
import Header from "./Header";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const App = () => {
  const bgTheme = useSelector((store) => store.theme.bgTheme);
  const userData = useSelector((store) => store.user.userData);

  return (!userData?<Shimmer>:(    
    <div
      className="box-border min-h-screen min-w-screen md:justify-center flex flex-col py-[2%] px-[2%] md:px-[10%] lg:px-[23%]"
      style={{ backgroundColor: bgTheme }}
    >
      <Header />
      <Search />
      <Body />
    </div>)
  );
};

export default App;
