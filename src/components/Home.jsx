import Header from './Header'
import CardPizza from './CardPizza'

// Importamos las imágenes que están en la carpeta assets
import napolitana from '../assets/napolitana.jpg'
import espanola from '../assets/espanola.jpg'
import pepperoni from '../assets/pepperoni.jpg'

const Home = () => {
  return (
    <>
      {/* El Header va dentro de Home, como pide el desafío */}
      <Header />

      {/* container + row + col: sistema de columnas de Bootstrap (3 tarjetas por fila) */}
      <div className="container my-5">
        <div className="row g-4">

          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={napolitana}
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={espanola}
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={pepperoni}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home