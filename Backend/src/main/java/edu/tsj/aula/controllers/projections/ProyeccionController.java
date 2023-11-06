package edu.tsj.aula.controllers.projections;

import edu.tsj.aula.persistance.models.projections.entity.FolioEntity;
import edu.tsj.aula.service.projections.IProyeccionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@AllArgsConstructor
public class ProyeccionController {
    private final IProyeccionService proyeccionService;

    @PostMapping("/folio")
    @ResponseStatus(HttpStatus.CREATED)
    public FolioEntity createFolio(@RequestBody FolioEntity proyeccion) {
        return proyeccionService.createProyeccion(proyeccion);
    }

    @GetMapping(value = "/folios")
    public List<FolioEntity> getAllFolios() {
        return proyeccionService.getAllProyecciones();
    }
}
