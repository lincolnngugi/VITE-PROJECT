import Search from "./Search";

import All from "./All";

import NavComponent from "./NavComponet";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <NavComponent />
      <Search />
      <All />
    </div>
  );
}

export default Dashboard;
