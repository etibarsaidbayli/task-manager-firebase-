import { Routes, Route } from "react-router-dom";

import TasksListPage from "./pages/TasksListPage";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import NotFoundPage from "./pages/NotFoundPage";
import LayOut from "./components/LayOut";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RequireAuth from "./hoc/RequireAuth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="createtask" element={<RequireAuth>
          <CreateTaskPage/>
        </RequireAuth>} />
        <Route path="taskslist" element={<RequireAuth>
          <TasksListPage/>
        </RequireAuth>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
