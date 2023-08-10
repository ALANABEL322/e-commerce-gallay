import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ObjectId from "bson-objectid";
import "./ProductosDetail.css";
import NavBar2 from "../navbar2/NavBar2";

interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  backgroundImage: string;
  price: number;
  stock: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      const fetchProductDetails = async (productId: string) => {
        try {
          const response = await axios.get<Product>(
            `http://localhost:3001/products/id/${encodeURIComponent(productId)}`
          );
          const productData = response.data;
          setProduct(productData);
        } catch (error) {
          console.error("Error al obtener los detalles del producto:", error);
        }
      };

      fetchProductDetails(id);
    }
  }, [id]);

  return (
    <>
      <NavBar2
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {product ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card tarjDetail">
                <img
                  src={product.backgroundImage}
                  className="card-img-top"
                  alt={product.name}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card plan-card">
                <div className="card-body">
                  <h1 className="card-title">{product.name}</h1>
                  <p className="card-text">{product.description}</p>
                  <div className="etiquet-price">
                    <p>${product.price}</p>
                    <div></div>
                  </div>

                  <p className="card-text mt-3">Stock: {product.stock}</p>
                  <button className="boton">
                    <svg
                      viewBox="0 0 16 16"
                      className="bi bi-cart-check"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                    </svg>
                    <p className="text">Agregar al carrito</p>
                  </button>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-body benefits-list">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg>
                      <span>Garantía de 6 meses</span>
                    </li>
                    <li className="list-group-item">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg>
                      <span>Facilidades de pago</span>
                    </li>
                    <li className="list-group-item">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg>
                      <span>Aceptamos todas las tarjetas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </>
  );
};

export default ProductDetail;