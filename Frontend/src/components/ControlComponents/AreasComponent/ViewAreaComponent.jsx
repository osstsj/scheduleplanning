import React, {Component} from "react";
import '../../StyleGlobal/Style.css'
import AreaService from '../../../services/Control/AreaService';

class ViewCarreraComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                id: this.props.match.params.id,
                area: '',
                responsable: '',
                unidad_academica: '',
                fecha_creacion: '',
                fecha_actualizacion: ''
            }
        }

    componentDidMount() {
        AreaService.getAreaById(this.state.id).then((res) => {
            let areaRes = res.data;
            this.setState({
                area: areaRes.area,
                responsable: areaRes.responsable,
                unidad_academica: areaRes.unidad_academica,
                fecha_creacion: areaRes.fecha_creacion,
                fecha_actualizacion: areaRes.fecha_actualizacion
            });
        });
    }

    cancel(){
        this.props.history.push('/list-area');
    }

    render() {

        return (
            <div className="mt-4 container "  >
                <div className="row justify-content-center">
                    <div className="card col-10" style={{ boxShadow: '0 2px 8px 1px rgba(64, 60, 67, 0.24)' }}>                       
                        <div className="card-body">
                            <div className="card-header text-center" style={{ boxShadow: '0 2px 8px 1px rgba(64, 60, 67, 0.24)' }}>
                                <h3 className="h3 Title">Área Escolar a detalle</h3>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Área:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className=""><i>{this.state.area}</i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Responsable:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className=""><i>{this.state.responsable}</i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Unidad académica:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className=""><i>{this.state.unidad_academica}</i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Creado por:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className="">{this.state.fecha_creacion}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Fecha de creación:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className="">{this.state.fecha_creacion}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Actualización realizada por:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className="">{this.state.fecha_actualizacion}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-outline">
                                        <label className=""><b>Fecha de actualización:</b></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <div className="">{this.state.fecha_actualizacion}</div>
                                    </div>
                                </div>
                            </div>   
                            
                        </div>
                            <br />
                        <div className="card-footer text-muted">
                            <button className = "btn btn-secondary mt-0" onClick={this.cancel.bind(this)} style= {{marginLeft: "10px"}}>Regresar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCarreraComponent;