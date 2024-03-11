import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { FaUser, FaTrash } from "react-icons/fa"
import * as W from "./style"

export const Wrapper = () => {
  const [clients, setClients] = useState([])
  const [optimizedRoute, setOptimizedRoute] = useState([])
  const [filteredClients, setFilteredClients] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const typedName = useRef()
  const typedEmail = useRef()
  const typedPhone = useRef()
  const typedX = useRef()
  const typedY = useRef()

  const baseUrl = "http://localhost:3000"

  useEffect(() => {
    const selectClients = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/clients`)
        setClients(data)
      } catch (err) {
        console.error(`Erro ao obter clientes: ${err}`)
      }
    }
    selectClients()
  }, [])

  const insertClient = async () => {
    const name = typedName.current.value
    const email = typedEmail.current.value
    const phone = typedPhone.current.value
    const x_coordinate = typedX.current.value
    const y_coordinate = typedY.current.value

    if (!name || !email || !phone || !x_coordinate || !y_coordinate) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    try {
      const { data } = await axios.post(`${baseUrl}/clients`, {
        name,
        email,
        phone,
        x_coordinate,
        y_coordinate,
      })
      setClients(data)
      console.log(data)
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error)
    }
  }

  const deleteClient = async id => {
    try {
      const { data } = await axios.delete(`${baseUrl}/clients/${id}`)
      console.log(data)
      setClients(data)
    } catch (err) {
      console.error("Erro ao excluir cliente:", err)
    }
  }

  const filterClient = event => {
    const searchTerm = event.target.value.toLowerCase()
    setSearchTerm(searchTerm)

    if (searchTerm.trim() !== "") {
      const filtered = clients.filter(
        client =>
          client.name.toLowerCase().includes(searchTerm) ||
          client.email.toLowerCase().includes(searchTerm) ||
          client.phone.toLowerCase().includes(searchTerm)
      )
      setFilteredClients(filtered)
    } else {
      setFilteredClients([])
    }
  }

  const calculateRoute = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/route`, { clients })
      console.log("Rota Otimizada:", data)
      setOptimizedRoute(data)
      setModalVisible(true)
    } catch (err) {
      console.error("Erro ao calcular rota:", err)
    }
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <W.HeroContainer>
      <W.ClientsContainer>
        <h2 className="title">Cadastrar novo cliente</h2>
        <form method="post" action="">
          <div className="input-card">
            <W.Label htmlFor="name">
              NOME <span>*</span>
            </W.Label>
            <W.Input
              name="name"
              id="name"
              type="text"
              placeholder="Digite seu nome"
              required
              ref={typedName}
            />
          </div>
          <div className="input-card">
            <W.Label htmlFor="email">
              E-MAIL <span>*</span>
            </W.Label>
            <W.Input
              name="email"
              id="email"
              type="email"
              placeholder="Digite seu  e-mail"
              required
              ref={typedEmail}
            />
          </div>
          <div className="input-card">
            <W.Label htmlFor="phone">
              TELEFONE <span>*</span>
            </W.Label>
            <W.Input
              name="phone"
              id="phone"
              type="number"
              placeholder="Digite seu telefone"
              required
              ref={typedPhone}
            />
          </div>
          <div className="input-card">
            <W.Label htmlFor="coordinate">
              COORDENADAS <span>*</span>
            </W.Label>
            <div className="small-card">
              <W.Input
                name="x_coordinate"
                id="coordinate"
                type="number"
                placeholder="Coordenada X"
                required
                ref={typedX}
              />
              <W.Input
                name="y_coordinate"
                id="coordinate"
                type="number"
                placeholder="Coordenada Y"
                required
                ref={typedY}
              />
            </div>
          </div>
          <W.Button type="button" onClick={insertClient}>
            Cadastrar
          </W.Button>
        </form>
      </W.ClientsContainer>
      <W.ClientsContainer>
        <h2 className="title">Clientes cadastrados</h2>
        {clients.length > 0 ? (
          <>
            <W.Input
              type="text"
              placeholder="Filtrar por nome, e-mail ou telefone"
              value={searchTerm}
              onChange={filterClient}
            />
            <div className="clients-list">
              {(filteredClients.length === 0 || searchTerm.trim() === "") &&
                clients.map(client => (
                  <div className="client-card" key={client.id}>
                    <div className="client-info">
                      <FaUser size={30} color="#0055aa" />
                      <div className="client-item">
                        <p>
                          <b>Nome:</b> {client.name}
                        </p>
                        <p>
                          <b>E-mail:</b> {client.email}
                        </p>
                        <p>
                          <b>Telefone:</b> {client.phone}
                        </p>
                        <p>
                          <b>Coordenadas:</b> {client.x_coordinate},{" "}
                          {client.y_coordinate}
                        </p>
                      </div>
                    </div>
                    <FaTrash
                      size={24}
                      color="#e90011"
                      onClick={() => deleteClient(client.id)}
                    />
                  </div>
                ))}
              {filteredClients.length > 0 &&
                filteredClients.map(client => (
                  <div className="client-card" key={client.id}>
                    <div className="client-info">
                      <FaUser size={30} color="#0055aa" />
                      <div className="client-item">
                        <p>
                          <b>Nome:</b> {client.name}
                        </p>
                        <p>
                          <b>E-mail:</b> {client.email}
                        </p>
                        <p>
                          <b>Telefone:</b> {client.phone}
                        </p>
                        <p>
                          <b>Coordenadas:</b> {client.x_coordinate},{" "}
                          {client.y_coordinate}
                        </p>
                      </div>
                    </div>
                    <FaTrash
                      className="icon"
                      size={24}
                      color="#e90011"
                      onClick={() => deleteClient(client.id)}
                    />
                  </div>
                ))}
            </div>
            <W.Button onClick={calculateRoute}>Calcular Rota</W.Button>
          </>
        ) : (
          <div className="clients-list empty-list">
            <p>Nenhum cliente cadastrado.</p>
          </div>
        )}
      </W.ClientsContainer>
      {modalVisible && (
        <W.Overlay>
          <W.ClientsContainer>
            <h2 className="title">Rota de Visitação</h2>
            <div className="clients-list route-list">
              {optimizedRoute.map((client, index) => (
                <div className="client-card" key={index}>
                  <span>{index + 1}º</span>
                  <div className="client-item">
                    <p>
                      <b>Nome:</b> {client.name}
                    </p>
                    <p>
                      <b>E-mail:</b> {client.email}
                    </p>
                    <p>
                      <b>Telefone:</b> {client.phone}
                    </p>
                    <p>
                      <b>Coordenadas:</b> {client.x_coordinate},{" "}
                      {client.y_coordinate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <W.Button onClick={closeModal}>Fechar</W.Button>
          </W.ClientsContainer>
        </W.Overlay>
      )}
    </W.HeroContainer>
  )
}