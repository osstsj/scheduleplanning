package edu.tsj.aula.persistance.models.projections.entity.asignatura.sustantivas;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "proyeccion_asesoria_proyecion")
public class Asesoria implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer residencias_profesionales;

    @Column
    private Integer educacion_dual;

    @Column
    private Integer titulacion;

    @Column Integer asesorias_academica;

    @Column Integer tutorias;
}
