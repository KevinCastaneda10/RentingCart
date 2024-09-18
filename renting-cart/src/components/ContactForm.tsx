"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    vehicle: "",
    otherVehicle: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [id]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowModal(false);

    if (!formData.termsAccepted) {
      setError("Debes aceptar las políticas de privacidad.");
      setLoading(false);
      return;
    }

    const serviceID = "service_0e4nrqh";
    const templateID = "template_cfqpi1l";
    const userID = "DK1-J2v40Y2qqqvXT";

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setShowModal(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        vehicle: "",
        otherVehicle: "",
        termsAccepted: false,
      });
    } catch (err) {
      setError("Error al enviar el correo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setShowModal(false);

  const vehicleOptions = [
    "Mazda CX-5 Touring",
    "Renault Kwid Zen",
    "Renault Oroch",
    "Toyota Yaris Cross XLS",
    "Chevrolet Joy 500x500",
    "Chevrolet Montana Premier",
    "Chevrolet Montana RS",
    "Corolla Hybrid Super Blanco",
    "DFSK Pickup Chasis",
    "Foton FKR Euro IV",
    "Gravity Gray KDG 66",
    "Gravity Gray KDG 70",
    "Hyundai Creta Premium 4x2 MT",
    "Isuzu 500x500",
    "Suzuki Jimny 5P 500x500",
    "Kia Sonet 2",
    "Kia Stonic Gris 15 500x500",
    "Kia Niro Hybrid",
    "Kia Sonet Plata 029 500x500",
    "Seat Ibiza 500x500",
    "Kia Seltos Plata 028 500x500",
    "Suzuki Fronx Azul",
    "Toyota Yaris Cross XLS",
    "Volkswagen T-Cross Trendline Sense 170 TSI MT",
    "Otros",
  ];

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, white, transparent), url('/renting.jpg')",
      }}
    >
      <div className="bg-slate-900 bg-opacity-70 p-8 rounded-lg w-full max-w-xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-8">
        <div className="text-white font-bold text-2xl lg:text-4xl text-center py-2">
          <h1>¿Necesitas más información?</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Input de nombre */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Fernando Gonzalez"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Empresa
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Drummond Ltd"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Correo corporativo
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@mail.com"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Celular
            </label>
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="300000000"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="vehicle"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Vehículos de interés
            </label>
            <select
              id="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            >
              <option value="">Seleccione un vehículo</option>
              {vehicleOptions.map((vehicle) => (
                <option key={vehicle} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
          </div>

          {formData.vehicle === "Otros" && (
            <div className="mb-5">
              <label
                htmlFor="otherVehicle"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                ¿Cuál?
              </label>
              <input
                type="text"
                id="otherVehicle"
                value={formData.otherVehicle}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Especifique el vehículo"
                required
              />
            </div>
          )}

          <div className="flex items-center mb-4">
            <input
              id="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <label
              htmlFor="termsAccepted"
              className="ml-2 text-sm font-medium text-white dark:text-gray-300"
            >
              He leído y acepto la{" "}
              <a
                href="/politics"
                className="text-blue-500 hover:underline dark:text-blue-200"
              >
                política de privacidad
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">¡Envío exitoso!</h2>
            <p className="mb-4">
              Tu información ha sido enviada con éxito. Nos pondremos en
              contacto contigo en breve.
            </p>
            <button
              onClick={closeModal}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
