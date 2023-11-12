import axios from "axios";
require('dotenv').config();


class CarreraPorUnidadService {
    createCarreraPorUnidad(carreraDto, id_unidad) {
        return axios.post(process.env.REACT_APP_LOCAL_API_BASE_URL + "carreraPorUnidad/" + id_unidad, carreraDto)
        .catch(err => {
            if (err.response) {
                console.error("Error in response for createCarreraPorUnidad...");
            } else if(err.request) {
                console.error("Error in request for createCarreraPorUnidad...");
            } else {
                console.error("Something happend, unknown error for createCarreraPorUnidad");
            }
        });
    }

    getAllCarrerasPorUnidad() {
        return axios.get(process.env.REACT_APP_LOCAL_API_BASE_URL + "carrerasPorUnidad/")
        .catch(err => {
            if (err.response) {
                console.error("Error in response for getCarreraPorUnidadByIdUnidad...");
            } else if(err.request) {
                console.error("Error in request for getCarreraPorUnidadByIdUnidad...");
            } else {
                console.error("Something happend, unknown error for getCarreraPorUnidadByIdUnidad");
            }
        });
    }

    getCarreraPorUnidadById(id) {
        return axios.get(process.env.REACT_APP_LOCAL_API_BASE_URL + "carreraPorUnidad/" + id)
        .catch(err => {
            if (err.response) {
                console.error("Error in response for getCarreraPorUnidadById...");
            } else if(err.request) {
                console.error("Error in request for getCarreraPorUnidadById...");
            } else {
                console.error("Something happend, unknown error for getCarreraPorUnidadById");
            }
        });
    }

    updateCarreraPorUnidadById(id, carreraPorUnidadDto, id_unidad) {
        return axios.put(process.env.REACT_APP_LOCAL_API_BASE_URL + "carreraPorUnidad/" + id + "/" + id_unidad, carreraPorUnidadDto)
        .catch(err => {
            if (err.response) {
                console.error("Error in response for updateCarreraPorUnidadById...");
            } else if(err.request) {
                console.error("Error in request for updateCarreraPorUnidadById...");
            } else {
                console.error("Something happend, unknown error for updateCarreraPorUnidadById");
            }
        });
    }

    deleteCarreraPorUnidadlById(id) {
        return axios.delete(process.env.REACT_APP_LOCAL_API_BASE_URL + "carreraPorUnidad/" + id)
        .catch(err => {
            if (err.response) {
                console.error("Error in response for deleteCarreraPorUnidadlById...");
            } else if(err.request) {
                console.error("Error in request for deleteCarreraPorUnidadlById...");
            } else {
                console.error("Something happend, unknown error for deleteCarreraPorUnidadlById");
            }
        });
    }
}

// Exporting the class' objects
export default new CarreraPorUnidadService()