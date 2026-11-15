import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  filterOrganicCompounds,
  organicCompounds,
} from "./data/organicCompounds";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
import GridPage from "./pages/GridPage";
import FeedPage from "./pages/FeedPage";
export default function App() {
  const [carbonCount, setCarbonCount] = useState("");
  const { pathname } = useLocation();
  const feed = pathname.includes("/feed");
  const visibleCompounds = filterOrganicCompounds(carbonCount);
  useEffect(() => {
    document.title = `${feed ? "Лента" : "Плитка"} — Органические соединения`;
    window.scrollTo(0, 0);
  }, [pathname, feed]);
  return (
    <div className={`organic-app ${feed ? "organic-app--feed" : ""}`}>
      <Header overlay={feed} />
      <Routes>
        <Route
          path="/organic_compounds/grid"
          element={
            <GridPage
              compounds={visibleCompounds}
              total={organicCompounds.length}
              carbonCount={carbonCount}
              onFilter={setCarbonCount}
            />
          }
        />
        <Route path="/organic_compounds/feed/:id?" element={<FeedPage />} />
        <Route
          path="*"
          element={<Navigate to="/organic_compounds/grid" replace />}
        />
      </Routes>
      <BottomNavigation firstId={visibleCompounds[0]?.id} />
    </div>
  );
}
