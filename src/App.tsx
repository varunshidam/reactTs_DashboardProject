import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Contact } from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import AddUser from "./components/users/AddUser"
import EditUser from "./pages/EditUser"
import User from "./pages/User"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          

        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
