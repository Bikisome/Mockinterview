
import './App.css'
import { Button } from "@/components/ui/button"
import {BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom'
import { PublicLayout } from './layouts/PublickLayout'
import Home from './routes/Home'
import AuthenticationLayout from './layouts/AuthenticationLayout'
import SignInPage from './routes/SignInPage'
import SignUpPage from './routes/SignUpPage'
import ProtectedRoutes from './layouts/ProtectedRoutes'
import { MainLayout } from './layouts/MainLayout'
import Generate from './components/Generate'
import {Dashboard} from './routes/Dashboard'
import { CreateEditPage } from './routes/CreateEditPage'


function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* publick routes */}
        <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenticationLayout />}>
        <Route path='/signin/*' element={<SignInPage />} />
        <Route path='/signup/*' element={<SignUpPage />} />
        </Route>


        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >


          <Route element={<Generate/>} path='/generate'>
                <Route  index element={<Dashboard/>}/>
                <Route path=":interviewId" element={<CreateEditPage />} />
                </Route>
          </Route>
      
        </Routes>
      </Router>
    </>
  )
}

export default App
