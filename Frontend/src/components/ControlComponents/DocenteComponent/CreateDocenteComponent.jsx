import React, { Component } from 'react';
import DocenteService from '../../../services/Control/DocenteService';
import UnidadService from '../../../services/Control/UnidadService';
import '../../StyleGlobal/Style.css';
import Select from 'react-select'
import axios from 'axios';

class CreateDocenteComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_unidad: null,
            nombre: '',
            apellido_paterno: '',
            apellido_materno: '',
            unidad_academica: '',
            categoria: '',
            actividad: '',
            codigo_nomina: '',
            estatus: 'Activo',
            
            isLoading: false, // Nuevo estado para controlar la visibilidad del spinner

            unidades: [],
            categorias: [],
            actividades: [],
            estatusList:[],
        }

        this.onChangeNombreHandler = this.onChangeNombreHandler.bind(this);
        this.onChangeApellidoPaternoHandler = this.onChangeApellidoPaternoHandler.bind(this);
        this.onChangeApellidoMaternoHandler = this.onChangeApellidoMaternoHandler.bind(this);
        this.onChangeUnidadAcademicaHandler = this.onChangeUnidadAcademicaHandler.bind(this);
        this.onChangeActividadHandler = this.onChangeActividadHandler.bind(this);
        this.onChangeEstatusHandler = this.onChangeEstatusHandler.bind(this);
        this.onChangeCodigoNominaHandler = this.onChangeCodigoNominaHandler.bind(this);
        this.createDocente = this.createDocente.bind(this);
    }

    createDocente = (e) => {
        e.preventDefault();
        // Validar que los campos requeridos no estén vacíos
        if (this.state.nombre.trim() === '' || 
        this.state.apellido_paterno.trim() === '' || 
        this.state.apellido_materno.trim() === '' || 
        this.state.unidad_academica.trim() === '' || 
        this.state.categoria.trim() === '' || 
        this.state.actividad.trim() === '' ||
        this.state.estatus === '' || 
        this.state.codigo_nomina.trim() === '') {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }

        let docente = {
            nombre: this.state.nombre.trim(),
            apellido_paterno: this.state.apellido_paterno.trim(),
            apellido_materno: this.state.apellido_materno.trim(),
            categoria: this.state.categoria.trim(),
            actividad: this.state.actividad.trim(),
            estatus: this.state.estatus,
            codigo_nomina: this.state.codigo_nomina.trim(),
        };
        // Mostrar el spinner al iniciar la acción
        this.setState({ isLoading: true });
        console.log('docente=> ' + JSON.stringify(docente));

        DocenteService.createDocente(docente, this.state.id_unidad).then(() => {
            this.props.history.push('/list-docente');
        }).catch(() => {
            alert("Error al intentar crear al docente...");
            this.props.history.push('/list-docente');
        });
    }

    componentDidMount() {
        this.getUnidadList();
        this.getActividad();
        this.getCategoria();
        this.getEstatus();
    }

    async getUnidadList() {
        let options = null;

        await UnidadService.getAllUnidades().then(res => {
            const data = res.data;
            options = data.map(d => ({
                "value": d.nombre_completo,
                "label": d.nombre_completo,
                "id": d.id,
            }))
        }).catch(() => {
            alert("Error al intentar traer las UAs...");
            this.props.history.push('/list-docente');
        });
        
        this.setState({unidades: options})
    }

    getEstatus() {
        const estatusList = [
            { value: 'Activo', label: 'Activo' },
            { value: 'Inactivo', label: 'Inactivo' }

        ]
        this.setState({ estatusList: estatusList })
    }

    getCategoria() {
        const categoriaList = [
            { value: 'PROFESOR ASIGNATURA - A', label: 'PROFESOR ASIGNATURA - A' },
            { value: 'PROFESOR ASIGNATURA - B', label: 'PROFESOR ASIGNATURA - B' },
            { value: 'PROFESOR ASOCIADO - A', label: 'PROFESOR ASOCIADO - A' },
            { value: 'PROFESOR ASOCIADO - B', label: 'PROFESOR ASOCIADO - B' },
            { value: 'PROFESOR ASOCIADO - C', label: 'PROFESOR ASOCIADO - C' },

        ]
        this.setState({ categorias: categoriaList })
    }

    getActividad() {
        const actividadList = [
            { value: 'CON ASIGNATURA', label: 'CON ASIGNATURA' },
            { value: 'EXTRAESCOLARES', label: 'EXTRAESCOLARES' }
        ]        
        this.setState({ actividades: actividadList })
    }

    onChangeNombreHandler = (event) => {
        this.setState({ nombre: event.target.value });
    }
    onChangeApellidoPaternoHandler = (event) => {
        this.setState({ apellido_paterno: event.target.value });
    }
    onChangeApellidoMaternoHandler = (event) => {
        this.setState({ apellido_materno: event.target.value });
    }
    onChangeUnidadAcademicaHandler = (event) => {
        this.setState({ unidad_academica: event.label });
        this.setState({ id_unidad: event.id });
    }
    onChangeCategoriaHandler = (event) => {
        this.setState({ categoria: event.label });
    }
    onChangeActividadHandler = (event) => {
        this.setState({ actividad: event.label });
    }
    onChangeEstatusHandler = (event) => {
        this.setState({estatus: event.label});
    }
    onChangeCodigoNominaHandler = (event) => {
        this.setState({ codigo_nomina: event.target.value });
    }


    cancel() {
        this.props.history.push('/list-docente');
    }


    render() {

        return (
            <div className='' >
                <div className="">
                    <div className="row justify-content-center">
                        <div className="card col-10 mt-4" style={{ boxShadow: '0 2px 8px 1px rgba(64, 60, 67, 0.24)' }}>
                            <div className="card-body">
                                <div className="card-header text-center" style={{ boxShadow: '0 2px 8px 1px rgba(64, 60, 67, 0.24)' }}>
                                    <h2 className="h3 Title" >Agregar Docente</h2>
                                </div>
                                <br />
                                <form>                             
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <div className="form-outline">
                                                <label className="">Nombre(s): </label>
                                                <input
                                                    placeholder="Ingrese nombre(s) del docente..."
                                                    className="form-control"
                                                    value={this.state.nombre}
                                                    onChange={this.onChangeNombreHandler}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <label className="">Apellido Paterno: </label>
                                                <input
                                                    placeholder="Ingrese apellido paterno..."
                                                    className="form-control"
                                                    value={this.state.apellido_paterno}
                                                    onChange={this.onChangeApellidoPaternoHandler}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <label className="">Apellido Materno: </label>
                                                <input
                                                    placeholder="Ingrese apellido materno..."
                                                    className="form-control"
                                                    value={this.state.apellido_materno}
                                                    onChange={this.onChangeApellidoMaternoHandler}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-3 mt-4">
                                        <div className="col-3">
                                            <div className="form-outline">
                                                <label>Lista de Unidades Académicas</label>
                                                <Select
                                                    rules={{ required: true }}
                                                    options={this.state.unidades}
                                                    onChange={(e) => this.onChangeUnidadAcademicaHandler(e)}
                                                    value={{ label: this.state.unidad_academica === "" ? "Seleccione UA..." : this.state.unidad_academica }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-outline">
                                                <label>Lista de Categorías</label>
                                                <Select
                                                    rules={{ required: true }}
                                                        options={this.state.categorias}
                                                        onChange={(e) => this.onChangeCategoriaHandler(e)}
                                                        value={{ label: this.state.categoria === "" ? "Seleccione una categoria..." : this.state.categoria }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-outline">
                                                <label>Lista de actividades</label>
                                                <Select
                                                    rules={{ required: true }}
                                                        options={this.state.actividades}
                                                        onChange={(e) => this.onChangeActividadHandler(e)}
                                                        value={{ label: this.state.actividad === "" ? "Seleccione actividad..." : this.state.actividad }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="form-outline">
                                                    <label className="">Codigo de nomina: </label>
                                                    <input
                                                        placeholder="No de nomina..."
                                                        className="form-control"
                                                        value={this.state.codigo_nomina}
                                                        onChange={this.onChangeCodigoNominaHandler}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                    </div>

                                    <hr />
                                        <div className="row justify-content-end">
                                        <div className="col-2">
                                            <div className="row">
                                                <label className='mr-2'>Estatus:</label>
                                                    <Select
                                                    isDisabled={true}
                                                        onChange={(e) => this.onChangeEstatusHandler(e)}
                                                        options={this.state.estatusList}
                                                        value={{label: this.state.estatus}}
                                                    />                                    
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="card-footer text-muted">
                                        {this.state.isLoading ? (
                                            // Mostrar el spinner si isLoading es true
                                            <div className="text-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <button className="btn btn-primary mt-0" onClick={this.createDocente}>Guardar</button>
                                        )}
                                        <button className="btn btn-danger mt-0" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateDocenteComponent;