
import './App.css'
// import { Button } from "@/components/ui/button"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
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
import { MockLoadPage } from './routes/MockLoadPage'
import { MockInterviewPage } from './routes/MockInterviewPage'
import { Feedback } from './routes/Feedback'
import ServicesPage from './routes/ServicesPage'
import AboutUsPage from './routes/AboutUsPage'
import ContactUsPage from './routes/ContactUsPage'

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* publick routes */}
        <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
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


<Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
           
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
