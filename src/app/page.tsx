import DesktopHeader from "./Components/Header/DesktopTopMobile/DesktopHeader";

import LineGraph from "./Components/LineGraph/LineGraph";
import UserCard from "./Components/UserCard/UserCard";
import TrioCard from "./Components/TrioCard/TrioCard";
import Maingraph from "./Components/Maingraph/Maingraph";
import TransactionComponent from "./Components/TransactionComponent/TransactionComponent";
import ToggleCapsule from "./Components/ToggleCapsule/ToggleCapsule";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="xl:block hidden">
          <DesktopHeader />
        </div>
        <div className="xl:block hidden">
          <div className="grid grid-cols-3 gap-10 py-10">
            <div className="col-span-2">
              <TrioCard />
              <Maingraph />
              <div>
                <div className="grid grid-cols-2 gap-8">
                  <LineGraph />
                  <UserCard />
                </div>
              </div>
            </div>
            <TransactionComponent />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden block bg-[#F9F8FF] -mt-10">
        <ToggleCapsule />
      </div>
    </main>
  );
}
