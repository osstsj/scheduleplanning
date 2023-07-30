package edu.tsj.aula.service.implementation;

import edu.tsj.aula.model.Plantel;
import edu.tsj.aula.repository.PlantelRepository;
import edu.tsj.aula.service.IPlantelService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class PlantelService implements IPlantelService {
    private final PlantelRepository plantelRepository;

    @Override
    public Plantel savePlantel(Plantel plantel) {
        Optional<Plantel> checkPlantel = plantelRepository.findById(plantel.getId());
        if (checkPlantel.isPresent())
            log.error(String.format("El plantel se encuentra registrado con el id: {0} y nombre: {1}", plantel.getId(), plantel.getNombreCorto()));

        return plantelRepository.save(plantel);
    }

    @Override
    public List<Plantel> getAllPlantels() {
        return plantelRepository.findAll();
    }

    @Override
    public Optional<Plantel> getPlantelById(Long id) {
        return plantelRepository.findById(id);
    }

    @Override
    public Plantel updatePlantel(Plantel plantel) {
        return plantelRepository.save(plantel);
    }

    @Override
    public void deletePlantel(Long id) {
        plantelRepository.deleteById(id);
    }
}
