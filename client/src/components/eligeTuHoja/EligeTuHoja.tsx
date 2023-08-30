import React, { Key, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import fundicion from "../../assets/img/fundiciónPNG.png";
import Slider from "react-slick";
import "./EligeTuHoja.css"
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Swal from "sweetalert2";

interface Product {
  clientId: string;
  _id: Key | null | undefined;
  // _id: Object;
  name: string;
  description: string;
  backgroundImage: string;
  stock: number;
  price: number;
  categories: string;
}

interface EligeTuHojaProps {
  clientId: string;
}



const EligeTuCuchillo: React.FC<EligeTuHojaProps> = ({ clientId}) => {
  const { id } = useParams<{ id: string }>();
  const [purchaseId, setPurchaseId] = useState<string | null>(null);
  const [cartUpdate, setCartUpdate] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();



  const addToHojaHandler = async (product: Product) => {
    try {
      const { _id: productId, price } = product;
      const quantity = 1;

      if (!clientId) {
        alert("Por Favor Registrese antes de realizar una compra");
        navigate("/login");
        return;
      }

      // Verifica si el cliente ya tiene un carrito (purchase)
      if (!purchaseId) {
        const createPurchaseResponse = await axios.post(
          `http://localhost:3001/purchases/${clientId}`,

          {
            products: [
              {
                productId,
                quantity,
                price,
              },
            ],
            totalPrice: price,
          }
        );
        const createdPurchase = createPurchaseResponse.data;
        setPurchaseId(createdPurchase._id);
      } else {
        await axios.post(
          `http://localhost:3001/purchases/${clientId}/products`,
          {
            productId,
            quantity,
            price,
          }
        );
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "producto agregado correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/loader");
      setCartUpdate((prevValue) => prevValue + 1);
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
  };







  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3001/products"
        );
        console.log({ a: response });
        // Filtrar los productos por categoría "handle"
        const handleProducts = response.data.filter((product) =>
          product.categories.includes("blade")
        );
        setProducts(handleProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);



  useEffect(() => {
    // Obtén el nombre de usuario del estado de ubicación
    const storedUsername = location.state && location.state.username;
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [location.state]); // Ejecutamos esto cada vez que cambia el estado de ubicación

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="container-12-lg image-container">
        <div className="row">
          <div className="col">
            <img
              src={fundicion}
              className="img-fluid"
              alt="image-fundicion"
            ></img>
            <div className="animated-text">
              <h1>Bienvenido y Gracias por elegirnos {username}</h1>
              <br /> <h2> Envios a todo el país sin cargo </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 container-h1elegituhoja">
            <h1 className="h1elegituhoja"> Elegí Tu Hoja</h1>
          </div>
          <div className="row">
            <div className="col-12 containerSubtextoHoja">
              <h2 className="h2subtextocreatucuchilloHoja">
                {" "}
                en estos 4 sencillos pasos obtendras tu cuchillo favorito
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 containerIconosHojas">
            <div className="container-icono1 col-12 col-md-2 ">
              <i className="bi bi-1-circle bi-1-circle-paso1hoja">
                <span className="spanpaso1hoja"> eligí tu Hoja </span>
              </i>
            </div>
            <div className="containericono2 col-12 col-md-2 ">
              <i className="bi bi-2-circle bi-2-circle-paso2hoja">
                <span className="spanpaso2hoja"> eligí tu hoja </span>
              </i>
            </div>
            <div className="containericono3 col-12 col-md-2">
              <i className="bi bi-3-circle bi-3-circle-paso3hoja">
                <span className="spanpaso3hoja"> procesando </span>
              </i>
            </div>
            <div className="containericono4 col-12 col-md-2 ">
              <i className="bi bi-4-circle bi-4-circle-paso4hoja">
                <span className="spanpaso4hoja"> realizar pago </span>
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="cabosh2Hojas">Hojas</h2>
          </div>
          <div className="row">
          <div className="containersliderhojas col-12">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product._id} className="card-hojas">
                    <img className="imagehojasproduct" src={product.backgroundImage} alt={product.name} />
                    <div className="card-content-hojas">
                      <h3 className="productname-hojas">{product.name}</h3>
                      <p className="product-description-cabo">{product.description}</p>
                      {/* <p className="product-category-hojas">Categoría: {product.categories}</p> */}
                      <button
                  onClick={() => addToHojaHandler(product)}
                  className="elegir-button"
                >
                  Elegir
                </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligeTuCuchillo;